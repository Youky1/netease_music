import styled from "styled-components";
import style from "../../assets/global-style";

// export const ImgWrapper = styled.div`
//   position: relative;
//   width: 100%;
//   padding-top: 75%;
//   background: url(${props => props.bgUrl});
//   background-size: cover;
//   z-index: 50;
  // .filter {
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   width: 100%;
  //   height: 100%;
  //   background: rgba(7, 17, 27, 0.3);
  // }
// `

export const BackgroundImage = styled.div`
  width: 100vw;
  padding-top: 100%;
  position: fixed;
  z-index: -1;
  background-image: url(${props => props.url});
  background-size: cover;
  background-color: rgba(7, 17, 27, 0.3);
  .filter {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(7, 17, 27, 0.3);
  }
`

export const ImgWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 75%;
`

export const CollectButton = styled.div`
  position: absolute;
  left: 50%;
  bottom:10%;
  transform: translate(-50%);
  width: 120px;
  height: 40px;
  z-index: 50;
  background: ${style["theme-color"]};
  color: ${style["font-color-light"]};
  border-radius: 20px;
  ${style['flex']}
`

export const ScrollWrapper = styled.div`
  margin-top: 40px;
  height: calc(100vh - 40px);
`

export const SongWrapper = styled.div`
  background-color: #fff;
  height: auto;
`