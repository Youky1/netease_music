import styled from'styled-components';
import style from '../../assets/global-style';

export const ListItem = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  .number {
    height: 100%;
    width: 20%;
    ${style.flex}
    font-size: ${style['font-size-ll']};
  }
  .song {
    height: 100%;
    width: 80%;
    border-bottom: 1px solid ${style['border-color']};
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    p {
      ${style['noWrap']}
    }
    p:first-child {
      font-size: ${style['font-size-ll']};
      height: 22px;
    }
    p:last-child {
      font-size: ${style['font-size-m']};
      color: ${style['font-color-desc-v2']};
    }
  }
`