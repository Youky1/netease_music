import styled from 'styled-components';
import style from '../../assets/global-style';

export const WholeContainer = styled.div`
    width: 100%;
    height: 80px;
    margin-bottom: 80px;
    background-color: ${style['theme-color']};
`

export const SwiperContainer = styled.div`
    height: 160px;
    width: 98%;
    margin: 0 auto;
`

export const Content = styled.div`
    position: fixed;
    top: 90px;
    bottom: 0;
    width: 100%;
    overflow: hidden;
    .before {
        position: absolute;
        top: -300px;
        height: 400px;
        width: 100%;
        background: ${style["theme-color"]};
    }
`