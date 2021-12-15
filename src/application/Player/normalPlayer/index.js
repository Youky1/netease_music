import React from "react";
import { getName, formatPlayTime } from "../../../api/utils";
import {
  NormalContainer,
  NormalHeader,
  ImageContainer,
  OptionBar,
  ProgressWrapper
} from './style';
import ProgressBar from "../../../baseUI/progressBar/index";

function NormalPlayer(props) {
  const { 
    song, 
    fullScreen, 
    isPlaying,
    percent,
    duration,
    currentTime,
    mode,
  } = props;
  const {
    togglePlaying,
    toggleFullScreen,
    handleProgressChange,
    handleModeChange,
    handleSwitchToPrev,
    handleSwitchToNext,
    togglePlayList,
  } = props;
  const playBtnClass = () => {
    return isPlaying ? 'iconfont icon-zanting1' : 'iconfont icon-bofang-copy';
  }

  const modeBtn = ['icon-shunxubofang', 'icon-danquxunhuan', 'icon-suijibofang']
  
  return (
    <>
      {
        fullScreen && 
        <NormalContainer className='animate__animated animate__slideInUp'>
          <div className="background">
            <img
              src={song.al.picUrl + "?param=300x300"}
              width="100%"
              height="100%"
              alt="歌曲图片"
            />
          </div>
          <div className="background layer"></div>
          <i className="iconfont icon-xiajiantou back" onClick={() => toggleFullScreen(false)}></i>
          
          <NormalHeader>
            <p>{song.name}</p>
            <p>{getName (song.ar)}</p>
          </NormalHeader>
        
          <ImageContainer>
            <img src={song.al.picUrl} className={'rotate ' + (isPlaying ? '' : 'pause')}/>
          </ImageContainer>
          
          <ProgressWrapper>
            <span className="time time-left">{formatPlayTime(currentTime)}</span>
            <div className="progress-bar-wrapper">
              <ProgressBar percentage={percent} setPercentage={handleProgressChange}></ProgressBar>
            </div>
            <div className="time time-right">{formatPlayTime(duration)}</div>
          </ProgressWrapper>
        
          <OptionBar>
            <span 
              className={`iconfont ${modeBtn[mode]}`}
              onClick={handleModeChange}
            ></span>
            <span 
              className={'iconfont icon-shangyishoushangyige'}
              onClick={handleSwitchToPrev}
            ></span>
            <span 
              className={playBtnClass()}
              onClick={() => togglePlaying(!isPlaying)}
            ></span>
            <span 
              className={'iconfont icon-xiayigexiayishou'}
              onClick={handleSwitchToNext}
            ></span>
            <span 
              className={'iconfont icon-gedan'}
              onClick={togglePlayList}
            ></span>
          </OptionBar>
        </NormalContainer>
      }
    </>
    
      
    
  )
}

export default NormalPlayer;