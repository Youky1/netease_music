import styled from'styled-components';
import style from '../../assets/global-style';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  background: #fff;
`

export const TopContainer = styled.div`
  height: 36vh;
  overflow: hidden;
  position: relative;
  .content {
    display: flex;
    margin-top: 60px;
    height: 20vh;
    .left_box {
      margin-left: 10%;
      height: 100%;
      width: 30%;
      position: relative;
      display: flex;
      align-items: center;
      img {
        height: 80%;
      }
      .frequency {
        position: absolute;
        top: 14px;
        right: 10px;
        color: ${style['font-color-light']};
      }
    }
    .right_box {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      width: 70%;
      height: 100%;
      overflow: hidden;
      margin-left: 10px;
      color: ${style['font-color-light']};
      .avatar {
        display: flex;
        align-items: center;
        color: ${style['font-color-desc-v2']};
        img{
          height: 1rem;
          width: 1rem;
          margin-right: 2px;
        }
      }
    }
  }
  .button_bar {
    display: flex;
    justify-content: space-around;
    color: ${style['font-color-light']};
    .btn {
      width: 40px;
      display: flex;
      flex-direction: column;
      align-items: center;
      i {
        width: 16px;
        height: 16px;
      }
    }
  }
`

export const TopBackground = styled.div`
  height: 100%;
  width: 100%;
  z-index: -1;
  background-image: url(${props => `${props.background}`});
  background-size: 100% 100%;
  position: absolute;
  filter: blur(10px);
`