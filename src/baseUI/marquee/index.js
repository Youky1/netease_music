import React from 'react';
import {
	Container
} from './style';

const Marquee = (props) => {
	
	return (
		<Container>
			<div className='content'>{props.children}</div>
		</Container>
	)
}

export default Marquee;