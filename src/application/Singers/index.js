import React, { useState } from 'react';

import { categoryTypes, alphaTypes } from '../../api/config';
import Horizon from '../../baseUI/horizonItem';
import { NavContainer } from './style';

function Singers (props) {
	const [category, setCategory] = useState ('');
  const [alpha, setAlpha] = useState ('');
  const handleUpdateAlpha = (val) => {
    setAlpha (val);
  }
  const handleUpdateCatetory = (val) => {
    setCategory (val);
  }
  return (
		<NavContainer>
			<Horizon 
				list={categoryTypes} 
				title={"分类 (默认热门):"}
				handleClick={handleUpdateCatetory}
				currentItem={category}
			/>
			<Horizon 
				list={alphaTypes} 
				title={"首字母:"}
				handleClick={val => handleUpdateAlpha (val)}
				currentItem={alpha}
			/>
		</NavContainer>
  )
}

export default Singers;