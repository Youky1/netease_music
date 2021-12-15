import React, {useEffect, useRef } from 'react';
import styled from'styled-components';
import style from '../../assets/global-style';
import { getAbsX } from './../../api/utils';

const ProgressBarWrapper = styled.div`
  width: 100%;
  position: relative;
  height: 30px;
  display: flex;
  align-items: center;
  .progress {
    height: 4px;
    width: 100%;
    background: rgba(0, 0, 0, .3);
  }
`

const BtnWrapper = styled.div`
  background-color: ${style['theme-color']};
  height: 4px;
  width: ${props => props.percentage || '0%'};
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  overflow: visible;
  .progress-btn {
    position: absolute;
    background-color: ${style['theme-color']};
    height: 16px;
    width: 16px;
    border-radius: 50%;
    border: 3px solid ${style['border-color']};
  }
`

function ProgressBar (props) {
  // 获取父级参数并初始化百分比
  const { percentage=0, setPercentage } = props;
  // const [currentPercentage, setCurrentPercentage] = useState(percentage);

  const progressContainer = useRef();       // 总容器DOM，用来获取进度条起始点坐标
  const btnRef = useRef();                  // 进度条按钮DOM，用来表示当前位置
  const wholeWidth = useRef();              // 进度条总宽度
  const progressStart = useRef();           // 进度条起始点坐标
  const prePercentage = useRef(percentage); // 保存上一次进度条的位置

  useEffect(() => {
    wholeWidth.current = progressContainer.current.offsetWidth;
    progressStart.current = getAbsX(progressContainer.current);
  },[])

  // 移动进度条。拖动和点击都通过该函数最终实现
  const offset = (currentX) => {
    if(currentX < progressStart.current) {
      currentX = progressStart.current;
    }
    else if(currentX > progressStart.current + wholeWidth.current) {
      currentX = progressStart.current + wholeWidth.current;
    }
    const newPer = (currentX - progressStart.current) / wholeWidth.current;
    prePercentage.current = currentX;
    const p = (newPer * 100).toFixed(2);
    setPercentage(`${p}%`);
  }

  // 拖动进度条
  const onTouchMove = (e) => {
    let currentX = e.touches[0].clientX;
    offset(currentX)
  }

  // 点击移动进度条
  const handleProgressClick = (e) => {
    offset(e.clientX);
  }
  
  return (
    <ProgressBarWrapper>
      <div className="progress" ref={progressContainer} onClick={handleProgressClick}>
        <BtnWrapper percentage={`${percentage * 100}%`}>
          <div 
            className="progress-btn" 
            ref={btnRef}
            onTouchMove={onTouchMove}
          ></div>
        </BtnWrapper>
      </div>
    </ProgressBarWrapper>
  )
}

export default ProgressBar