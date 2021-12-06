import styled, { keyframes } from 'styled-components';

const move = keyframes`
  from {
		transform: translateX(80%);
  }
	to {
		transform: translateX(-80%);
	}
`

export const Container = styled.div`
	width: 100%;
	height: 100%;
	overflow: hidden;
	.content {
		animation: ${move} 8s infinite;
	}
`