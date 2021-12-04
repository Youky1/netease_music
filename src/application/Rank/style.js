import styled from "styled-components";
import style from "../../assets/global-style";

export const Title = styled.p`
    font-weight: bold;
    margin: 4px 0 10px;
`

export const OfficialRankContainer = styled.div`
    display: flex;
    width: 100%;
    height: 128px;
    border-bottom: 1px solid ${style["border-color"]};
    .list_container {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        overflow: hidden;
        .item {
            width: 100%;
            color: ${style['font-color-desc']};
            font-size: 14px;
            margin-left: 10px;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
        }
    }
`

export const Frequency = styled.div`
    position: absolute;
    bottom: 10px;
    left: 10px;
    color: ${style['font-color-light']};
`

export const GlobalRankContainer = styled.div`
    display: flex;
    width: 100vw;
    flex-wrap: wrap;
    justify-content: space-around;
    .item {
        width: 32vw;
        overflow: hidden;
        position: relative;
        margin-bottom: 4px;
        img {
            width: 100%;
            height: 100%;
        }
    }
`