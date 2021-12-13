import React from 'react';
import {getName} from '../../../api/utils';
import { MiniPlayerContainer } from './style';
import ProgressCircle from '../../../baseUI/progress-circle';

function MiniPlayer (props) {
  const { song, fullScreen, toggleFullScreen } = props;
  let percent = 0.1;
  return (
    <>
      {
        !fullScreen && 
        <MiniPlayerContainer className='animate__animated animate__slideInUp'>
          <div className="icon" onClick={() => toggleFullScreen(true)} >
            <div className="imgWrapper">
              <img className="play" src={song.al.picUrl} width="40" height="40" alt="img"/>
            </div>
          </div>
          <div className="text">
            <h2 className="name">{song.name}</h2>
            <p className="desc">{getName (song.ar)}</p>
          </div>
          <div className="control">
            <ProgressCircle radius={32} percent={percent}>
              <i className="iconfont icon-zanting"></i>
            </ProgressCircle>
          </div>
          <div className="control">
            <i className="iconfont icon-gedan"></i>
          </div>
        </MiniPlayerContainer>
      }
    </>
  )
}

export default React.memo (MiniPlayer);