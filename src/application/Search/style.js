import styled from "styled-components";
import style from "../../assets/global-style";

export const Title = styled.p`
  font-size: large;
  font-weight: bold;
`

export const HeaderContainer = styled.div`
  height: 5vh;
  padding-top: 10px;
  i {
    margin: 0 8px;
  }
  i:last-child {
    opacity: 0.5;
  }
  input {
    width: 75%;
    margin-left: 20px;
    border: none;
    border-bottom: 1px solid ${style['border-color']};
    outline: none;
    font-size: medium;
  }
`

export const HotWordsContainer = styled.div`
  margin: 10px 0 20px;
  .words {
    margin-top: 10px;
    width: 100vw;
    font-size: medium;
    display: flex;
    flex-wrap: wrap;
    .word {
      width: auto;
      min-width: 40px;
      height: 28px;
      padding: 4px;
      background-color: #dedede;
      border-radius: 14px;
      margin: 8px;
      ${style.flex}
    }
  }
`

export const SuggestContainer = styled.div`
  .suggest-title {
    font-weight: bold;
    margin: 10px 0;
    border-top: 1px solid ${style['border-color']};
  }

  .albums-item {
    ${style.noWrap}
    margin: 20px 0;
    padding: 0 20px;
    span:first-child {
      font-size: 20px;
    }
    span:last-child {
      font-size: 14px;
    }
  }

  .artist-item {
    ${style.noWrap}
    margin: 20px 0;
    padding: 0 20px;
    height: 60px;
    ${style.flex}
    justify-content: flex-start;
    img {
      height: 40px;
      width: 40px;
      border-radius: 20px;
      margin: 0 20px 0 0;
    }
  }

`

export const SearchResult = styled.div`
  height: 90vh;
  width: 100vw;
  padding-top: 5vh;
  position: fixed;
  bottom:0;
  z-index: 1000000;
  background-color: #fff;
  .search-item {
    height: 60px;
    border-bottom: 1px solid ${style['border-color']};
    padding: 0 40px;
    ${style.noWrap}
    ${style.flex}
    justify-content: flex-start;
    span:first-child {
      font-size: 22px;
    }
    span:last-child {
      font-size: 12px;
      font-style: italic;
    }
  }
`