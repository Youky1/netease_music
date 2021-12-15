import React, { useRef, useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  changePlayingState,
  changeShowPlayList,
  changeCurrentIndex,
  changeCurrentSong,
  changePlayList,
  changePlayMode,
  changeFullScreen
} from "./store/actionCreators";
import MiniPlayer from "./miniPlayer";
import NormalPlayer from "./normalPlayer";
import { getSongUrl, isValidObject } from "../../api/utils";
import Toast from "../../baseUI/toast";
import PlayList from "../../baseUI/playList";

function Player (props) {
  const {
    fullScreen,
    isPlaying,
    mode,
    currentSong: immutableCurrentSong,
    playList: immutableList,
    currentIndex,
    showPlayList
  } = props;
  const { 
    toggleFullScreenDispatch, 
    togglePlayingDispatch, 
    changeCurrentIndexDispatch, 
    changeCurrentDispatch ,
    changeModeDispatch,
    togglePlayListDispatch
  } = props;
  const currentSong = immutableCurrentSong.toJS();                          // 当前歌曲
  const playList = immutableList.toJS();                                    // 播放列表
  const [currentTime, setCurrentTime] = useState(0);                        // 目前播放时间
  const [duration, setDuration] = useState(0);                              // 歌曲总时长
  let percent = isNaN(currentTime / duration) ? 0 : currentTime / duration; // 歌曲播放进度

  const audioRef = useRef();  // 绑定播放器DOM
  const toastRef = useRef();  // 提示框DOM
  const [modeText, setModeText] = useState(""); // 提示框文字

  const startPlay = () => {
    setTimeout(() => {
      audioRef.current.play().catch(e => {
        setModeText('这首歌暂时没有版权哦');
        toastRef.current.show();
      })
    })
  }

  useEffect(() => {
    if(isPlaying) {
      startPlay();
    }
  }, [isPlaying])

  useEffect(() => {
    if(currentIndex >= 0) {
      const current = playList[currentIndex];
      changeCurrentDispatch(current);// 赋值currentSong
      audioRef.current.src = getSongUrl(current.id); // 为audio标签添加资源
      setDuration((current.dt / 1000) | 0); // 初始化设置时长
    }
  }, [immutableList, currentIndex]);

  // 切换播放状态
  const handleIsPlaying = (status) => {
    togglePlayingDispatch(status);
    if(status) {
      startPlay();
    }else {
      audioRef.current.pause();
    }
  }

  // 更新当前时间
  const handleTimeUpdate = (e) => {
    setCurrentTime(e.target.currentTime);
  }

  // 更新播放进度
  const handleProgressChange = (currentPercent) => {
    const newTime = Number.parseFloat(currentPercent) / 100 * duration;
    setCurrentTime(newTime);
    audioRef.current.currentTime = newTime;
    if (!isPlaying) {
      handleIsPlaying(true);
    }
  }

  // 跳转到某个下标
  const handleSwitch = (target) => {
    if(target < 0) {
      target = playList.length - 1;
    }else if(target > playList.length - 1) {
      target = 0;
    }
    changeCurrentIndexDispatch(target);
    changeCurrentDispatch(playList[target]);
    audioRef.current.currentTime = 0;
    startPlay();
    if(!isPlaying) {
      togglePlayingDispatch(true);
    }
  };

  // 获取不同播放模式下的下一首的下标
  const getNextIndex = (tar) => {
    switch(mode){
      case 0:
        return currentIndex + tar;
      case 1:
        return currentIndex;
      case 2:
        return Math.round(playList.length * Math.random());
      default:
        return currentIndex;
    }
  }

  // 切换到上一首
  const handleSwitchToPrev = () => {
    handleSwitch(getNextIndex(-1));
  }

  // 切换到下一首
  const handleSwitchToNext = () => {
    handleSwitch(getNextIndex(1));
  }

  // 切换循环状态
  const handleModeChange = () => {
    const nextMode = (mode + 1) % 3;
    changeModeDispatch(nextMode);
    const text = ['顺序播放', '单曲循环', '随机播放'];
    setModeText(text[nextMode]);
    toastRef.current.show();
  }

  return (
    <div>
      {
        isValidObject(currentSong) && 
        <>
          <MiniPlayer
            song={currentSong}
            fullScreen={fullScreen}
            toggleFullScreen={toggleFullScreenDispatch}
            isPlaying={isPlaying}
            togglePlaying={handleIsPlaying}
            percent={percent}
            togglePlayList={() => togglePlayListDispatch(true)}
          />
          <NormalPlayer
            song={currentSong}
            fullScreen={fullScreen}
            toggleFullScreen={toggleFullScreenDispatch}
            isPlaying={isPlaying}
            togglePlaying={handleIsPlaying}
            percent={percent}
            duration={duration}
            currentTime={currentTime}
            handleProgressChange={handleProgressChange}
            mode={mode}
            handleModeChange={handleModeChange}
            handleSwitchToPrev={handleSwitchToPrev}
            handleSwitchToNext={handleSwitchToNext}
            togglePlayList={() => togglePlayListDispatch(true)}
          />
          <Toast text={modeText} ref={toastRef}/>
        </>
      }
      <audio 
        ref={audioRef} 
        onTimeUpdate={handleTimeUpdate} 
        onEnded={handleSwitchToNext}
      ></audio>
      {
        showPlayList && <PlayList togglePlayList={() => togglePlayListDispatch(false)}/>
      }
    </div>
  )
}

const mapStateToProps = state => ({
  fullScreen: state.getIn (["player", "fullScreen"]),
  isPlaying: state.getIn (["player", "isPlaying"]),
  currentSong: state.getIn (["player", "currentSong"]),
  showPlayList: state.getIn (["player", "showPlayList"]),
  mode: state.getIn (["player", "mode"]),
  currentIndex: state.getIn (["player", "currentIndex"]),
  playList: state.getIn (["player", "playList"]),
  sequencePlayList: state.getIn (["player", "sequencePlayList"])
});

const mapDispatchToProps = dispatch => ({
  togglePlayingDispatch (data) {
    dispatch (changePlayingState (data));
  },
  toggleFullScreenDispatch (data) {
    dispatch (changeFullScreen (data));
  },
  togglePlayListDispatch (data) {
    dispatch (changeShowPlayList (data));
  },
  changeCurrentIndexDispatch (index) {
    dispatch (changeCurrentIndex (index));
  },
  changeCurrentDispatch (data) {
    dispatch (changeCurrentSong (data));
  },
  changeModeDispatch (data) {
    dispatch (changePlayMode (data));
  },
  changePlayListDispatch (data) {
    dispatch (changePlayList (data));
  }
})

// 将 ui 组件包装成容器组件
export default connect (
  mapStateToProps,
  mapDispatchToProps
)(React.memo (Player));