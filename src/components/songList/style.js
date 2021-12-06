import styled from'styled-components';
import style from '../../assets/global-style';

export const ListItem = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  ${props => props.showBackground ? `background: ${style["highlight-background-color"]}`: ""}
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
  div:nth-child(2) {
    width: 40%;
    background-color: ${style['theme-color']};
    justify-content: center;
    color: ${style['font-color-light']};
    border-radius: 8px;
  }
`