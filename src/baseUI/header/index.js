import React from 'react';
import styled from'styled-components';
import style from '../../assets/global-style';
import PropTypes from "prop-types";
import Marquee from '../marquee';

const HeaderContainer = styled.div`
  position: fixed;
  padding-left: 5px;
  height: 40px;
  width: 100%;
  z-index: 100;
  display: flex;
  line-height: 40px;
  background-color: ${style['theme-color']};
  color: ${style["font-color-light"]};
  .back {
    margin-right: 5px;
    font-size: 20px;
    width: 20px;
  }
  >h1 {
    font-size: ${style["font-size-l"]};
    font-weight: 700;
    margin-left: 6px;
  }
`
// 处理函数组件拿不到 ref 的问题，所以用 forwardRef
const Header = (props) => {
  const { handleClick, title, moveY, marqueeContent} = props;
  // moveY ∈ [-90, -10]; opacity ∈ [0,1];
  const headerStyle = () => {
    const style = {
      backgroundColor: `rgba(212,68,57, 0)`,
    }
    if(moveY < -90) {
      style.backgroundColor = `rgba(212,68,57, 1)`;
    }
    else if(moveY < -10) {
      style.backgroundColor = `rgba(212,68,57, ${(-1 / 80) * moveY - 1/8})` ;
    }
    return style;
  }
  const renderContent = () => {
    if(moveY > -90) {
      return <h1>{title}</h1>
    }else {
      return <Marquee>{marqueeContent}</Marquee>
    }
  }
  return (
    <HeaderContainer style={headerStyle()}>
      <i className="iconfont icon-fanhui"  onClick={handleClick}/>
      {renderContent()}
    </HeaderContainer>
  )
}

Header.defaultProps = {
  handleClick: () => {},
  title: "标题",
  moveY: 0,
  marqueeContent: '滚动标题'
};

Header.propTypes = {
  handleClick: PropTypes.func,
  title: PropTypes.string,
  moveY: PropTypes.number,
  marqueeContent: PropTypes.string
};

export default Header;