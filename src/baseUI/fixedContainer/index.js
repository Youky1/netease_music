import React from "react";
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  background: #fff;
`

export default function FixedContainer(props) {
    return <Container className='animate__animated animate__bounceInRight'>{props.children}</Container>
}