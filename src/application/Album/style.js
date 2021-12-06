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
  .background {
    height: 100%;
    width: 100%;
    z-index: -1;
    background-image: url("http://p2.music.126.net/ecpXnH13-0QWpWQmqlR0gw==/109951164354856816.jpg");
    background-size: 100% 100%;
    position: absolute;
    filter: blur(10px);
  }
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

export const ListItem = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  .number {
    height: 100%;
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${style['font-size-ll']};
  }
  .song {
    height: 100%;
    width: 80%;
    border-bottom: 1px solid ${style['border-color']};
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    p:first-child {
      font-size: ${style['font-size-ll']};
    }
    p:last-child {
      font-size: ${style['font-size-m']};
      color: ${style['font-color-desc-v2']};
    }
  }
`

export const ListHeader = styled.div`
  display: flex;
  height: 60px;
  width: 100%;
  border-bottom: 1px solid ${style['border-color']};
  div {
    display: flex;
    align-items: center;
  }
  div:first-child {
    width: 60%;
    font-size: large;
    i {
      margin-left: 20px;
      margin-right: 10px;
    }
    span {
      font-size: small;
      color: ${style['font-color-desc-v2']};
    }
  }
  div:last-child {
    width: 40%;
    background-color: ${style['theme-color']};
    justify-content: center;
    color: ${style['font-color-light']};
    border-radius: 8px;
  }
`