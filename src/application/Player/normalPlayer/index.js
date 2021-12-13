import React, {useState} from "react";
import { getName } from "../../../api/utils";
import {
  NormalContainer,
  NormalHeader,
  ImageContainer,
  OptionBar,
  ProgressWrapper
} from './style';
import ProgressBar from "../../../baseUI/progressBar/index";

function NormalPlayer(props) {
  const { song, fullScreen, toggleFullScreen } = props;
  const [persentage, setPercentage] = useState(0);
  const icons = [
    'icon-shunxubofang',
    'icon-shangyishoushangyige',
    'icon-zanting1',
    'icon-xiayigexiayishou',
    'icon-gedan'
  ]
  const renderIcons = () => {
    return icons.map(item => <span className={'iconfont '+item} key={item}></span>)
  }
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
            <img src={song.al.picUrl} className='rotate'/>
          </ImageContainer>
          
          <ProgressWrapper>
            <span className="time time-left">0:00</span>
            <div className="progress-bar-wrapper">
              <ProgressBar percentage={persentage} setPercentage={setPercentage}></ProgressBar>
            </div>
            <div className="time time-right">4:17</div>
          </ProgressWrapper>
        
          <OptionBar>
            {renderIcons()}
          </OptionBar>
        </NormalContainer>
      }
    </>
    
      
    
  )
}

export default NormalPlayer;