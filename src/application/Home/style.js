import styled from "styled-components";
import style from '../../assets/global-style';
import { NavLink } from "react-router-dom";

export const Top = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 5px 10px;
    background-color: ${style['theme-color']};
    & span{
        line-height: 40px;
        color: #f1f1f1;
        font-size: 20px;
        &.iconfont {
            font-size: 25px;
        }
    }
`

export const Tab = styled.div`
    height: 44px;
    background-color: ${style['theme-color']};
    display: flex;
    justify-content: space-around;
    a {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .selected {
        span{
            padding: 3px 0;
            font-weight: 700;
            color: #f1f1f1;
            border-bottom: 2px solid #f1f1f1;
        }
    }
`