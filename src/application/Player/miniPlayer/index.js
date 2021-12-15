import React from 'react';
import {getName} from '../../../api/utils';
import { MiniPlayerContainer } from './style';
import ProgressCircle from '../../../baseUI/progress-circle';

function MiniPlayer (props) {
  const { 
    song,
    fullScreen,
    isPlaying,
    percent,
    toggleFullScreen,
    togglePlaying,
    togglePlayList,
  } = props;
  const playBtnClass = () => {
    return isPlaying ?  "iconfont icon-zanting" : 'iconfont icon-bofang1';
  }
  return (
    <>
      {
        !fullScreen && 
        <MiniPlayerContainer className='animate__animated animate__slideInUp'>
          <div className="icon" onClick={() => toggleFullScreen(true)} >
            <div className="imgWrapper">
              <img className={'play ' + (isPlaying ? '' : 'pause')} src={song.al.picUrl} width="40" height="40" alt="img"/>
            </div>
          </div>
          <div className="text">
            <h2 className="name">{song.name}</h2>
            <p className="desc">{getName(song.ar)}</p>
          </div>
          <div className="control">
            <ProgressCircle radius={32} percent={percent}>
              <i className={playBtnClass()} onClick={() => togglePlaying(!isPlaying)}></i>
            </ProgressCircle>
          </div>
          <div className="control">
            <i className="iconfont icon-gedan" onClick={togglePlayList} style={{fontSize:26}}></i>
          </div>
        </MiniPlayerContainer>
      }
    </>
  )
}

export default React.memo (MiniPlayer);