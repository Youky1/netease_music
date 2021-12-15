import styled from 'styled-components';
import style from '../../assets/global-style';
// 最外层总容器
export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top:0;
  z-index: 1000000;
  background-color: ${style['background-color-shadow']};
`

// 列表容器
export const ListContainer = styled.div`
  opacity: 0.9;
  height: 60vh;
  width: 100%;
  position: absolute;
  bottom: 0;
  background-color: #fff;
  border-radius: 20px 20px 0 0;
  .title {
    font-size: 18px;
    margin: 10px 0 30px;
    ${style.flex};
    .number {
      font-size: small;
      color: ${style['font-color-desc-v2']};
    }
  }
  .content {
    ${style.flex}
    flex-direction: column;
    .song-item {
      width: 100%;
      margin: 10px 0;
      ${style.noWrap}
      .song-name {
        margin-left: 6px;
        font-size: 14px;
        font-weight:bold;
      }
      .song-singer {
        font-size: 12px;
      }
      i {
        float: right;
        margin-right: 10px;
      }
    }
  }
`