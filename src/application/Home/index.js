import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import {
  Top,
  Tab,
} from './style';
import { useNavigate } from 'react-router-dom';

function Home () {
	const nav = useNavigate();
	return (
		<div>
			<Top>
				<span className='iconfont icon-caidan'></span>
				<span>网易云音乐</span>
				<span className='iconfont icon-sousuo' onClick={() => nav('/search')}></span>
			</Top>
			<Tab>
				<NavLink to='/recommend' className={({isActive}) => isActive ? 'selected' : ''}>
					<span>推荐</span>
				</NavLink>
				<NavLink to='/singers' className={({isActive}) => isActive ? 'selected' : ''}>
					<span>歌手</span>
				</NavLink>
				<NavLink to='/rank' className={({isActive}) => isActive ? 'selected' : ''}>
					<span>排行榜</span>
				</NavLink>
			</Tab>
			<Outlet/>
		</div>
	)
}

export default Home;