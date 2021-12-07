import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router';

import { categoryTypes, alphaTypes } from '../../api/config';
import Horizon from '../../baseUI/horizonItem';
import Scroll from '../../components/scroll';
import Loading from '../../baseUI/loading';
import { 
  NavContainer,
  ListContainer,
  List,
  ListItem
} from "./style";
import { 
  getSingerList, 
  getHotSingerList, 
  changeEnterLoading, 
  changePageCount, 
  refreshMoreSingerList, 
  changePullUpLoading, 
  changePullDownLoading, 
  refreshMoreHotSingerList 
} from './store/actionCreators';
import { Outlet } from 'react-router';

function Singers (props) {
	const [category, setCategory] = useState ('');
	const [alpha, setAlpha] = useState ('');
	const nav = useNavigate();
	const { 
		updateDispatch,
		getHotSingerDispatch,
		pullUpRefreshDispatch,
		pullDownRefreshDispatch,
		pageCount,
		pullUpLoading,
		pullDownLoading,
		enterLoading,
		singerList = []
	} = props;
	const handleUpdateAlpha = (val) => {
		setAlpha (val);
		updateDispatch(category, val);
	}
	const handleUpdateCatetory = (val) => {
		setCategory (val);
		updateDispatch(val, alpha);
	}
	useEffect(() => {
		getHotSingerDispatch();
	});

	// 歌手列表
	const singerListElement = (
		<List>
			{
				singerList.toJS().map((item, index) => (
					<ListItem key={item.accountId+""+index} onClick={() => nav(`${item.id}`)}>
						<div className="img_wrapper">
							<img 
								src={`${item.picUrl}?param=300x300`} 
								width="100%" 
								height="100%" 
								alt="music"
							/>
						</div>
						<span className="name">{item.name}</span>
					</ListItem>
				))
			}
		</List>
	)

  	return (
		<>
			<NavContainer>
				<Horizon 
					list={categoryTypes} 
					title={"分类 (默认热门):"}
					handleClick={val => handleUpdateCatetory(val)}
					currentItem={category}
				/>
				<Horizon 
					list={alphaTypes} 
					title={"首字母:"}
					handleClick={val => handleUpdateAlpha (val)}
					currentItem={alpha}
				/>
			</NavContainer>
			<ListContainer>
				{ enterLoading && <Loading/>}
				<Scroll 
					pullUp={() => pullUpRefreshDispatch(category, alpha, category===''&&alpha==='', pageCount)} 
					pullDown={() => pullDownRefreshDispatch(category, alpha)}
					pullUpLoading = { pullUpLoading }
  					pullDownLoading = { pullDownLoading }
				>{singerListElement}</Scroll>
			</ListContainer>
			<Outlet/>
		</>
  	)
}

const mapState = (state) => ({
	singerList: state.getIn(['singers', 'singerList']),
	enterLoading: state.getIn(['singers', 'enterLoading']),
	pullUpLoading: state.getIn(['singers', 'pullUpLoading']),
	pullDownLoading: state.getIn(['singers', 'pullDownLoading']),
	pageCount: state.getIn(['singers', 'pageCount'])
})

const mapDispatch = (dispatch) => ({
    getHotSingerDispatch() {
      	dispatch(getHotSingerList());
    },
    updateDispatch(category, alpha) {
		dispatch(changePageCount(0));//由于改变了分类，所以pageCount清零
		dispatch(changeEnterLoading(true));//loading，现在实现控制逻辑，效果实现放到下一节，后面的loading同理
		dispatch(getSingerList(category, alpha));
    },
    // 滑到最底部刷新部分的处理
    pullUpRefreshDispatch(category, alpha, hot, count) {
		dispatch(changePullUpLoading(true));
		dispatch(changePageCount(count+1));
		if(hot){
			dispatch(refreshMoreHotSingerList());
		} else {
			dispatch(refreshMoreSingerList(category, alpha));
		}
    },
    //顶部下拉刷新
    pullDownRefreshDispatch(category, alpha) {
		dispatch(changePullDownLoading(true));
		dispatch(changePageCount(0));//属于重新获取数据
		if(category === '' && alpha === ''){
			dispatch(getHotSingerList());
		} else {
			dispatch(getSingerList(category, alpha));
		}
    }
});

export default connect(mapState, mapDispatch)(React.memo(Singers));