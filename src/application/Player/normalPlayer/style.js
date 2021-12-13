import styled, { keyframes } from "styled-components";
import style from "../../../assets/global-style";

export const NormalContainer = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 150;
  background: ${style["background-color"]};
  .background {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0.6;
    filter: blur(20px);
    &.layer {
      background: ${style["font-color-desc"]};
      opacity: 0.2;
      filter: none;
    }
  }
  .back {
    position: absolute;
    top: 10px;
    left:10px;
    font-size: 28px;
  }
`;

export const NormalHeader = styled.div`
  height: 10vh;
  ${style.flex};
  flex-direction: column;
  p:first-child {
    color: ${style['font-color-desc']};
    font-size: ${style['font-size-ll']};
    margin-bottom: 14px;
  }
  p:nth-child(2) {
    color: ${style['font-color-desc-v2']};
  }
`;

const rotate = keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const ImageContainer = styled.div`
  width: 100vw;
  height: 60vw;
  margin: 20vh 0 15vh;
  ${style.flex}
  overflow: hidden;
  img {
    height: 200px;
    width: 200px;
    border-radius: 100px;
    &.rotate {
      animation: ${rotate} 10s infinite linear;
    }
    &.pause {
      animation-play-state: paused;
    }
  }
`;

export const OptionBar = styled.div`
  height: 20vh;
  width: 100%;
  ${style.flex};
  justify-content: space-around;
  span {
    font-size: 28px;
    color: ${style['font-color-desc']};
  }
`;

export const ProgressWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .progress-bar-wrapper {
    width: 50%;
    margin: 0 30px;
  }
`