import React, {useEffect} from 'react';
import { useNavigate, useParams } from 'react-router';
import { connect } from 'react-redux';
import FixedContainer from '../../baseUI/fixedContainer';
import Header from '../../baseUI/header';
import Loading from '../../baseUI/loading';
import Scroll from '../../components/scroll';
import SongList from '../../components/songList'
import {
	getSingerInfoAction,
	setIsLoading
} from './store/actionCreators'
import {
	BackgroundImage,
	ImgWrapper,
	CollectButton,
	SongWrapper,
	ScrollWrapper
} from './style';

function Singer (props) {
	const nav = useNavigate();
	const {
		artist,
		songs,
		isLoading,
		initSingerInfoDispatch
	} = props;
	const params = useParams();
	useEffect(() => {
		initSingerInfoDispatch(params.id)
	},[params.id]);
  return (
		<FixedContainer>
			{isLoading && <Loading/>}
			{
				!isLoading &&
				<>
					<Header 
						title={artist.name}
						handleClick={() => nav(-1)} 
      		/>
					<BackgroundImage url={artist.picUrl}>
				<div className="filter"></div>
					</BackgroundImage>
					<ScrollWrapper id='out'>
				<Scroll>
					<div id='in'>
						<ImgWrapper>
							<CollectButton><i className="iconfont icon-jia"></i>收藏</CollectButton>
						</ImgWrapper>
						<SongWrapper>
							<SongList
								list={songs}
								showCollect={false}
							/>
						</SongWrapper>
					</div>
      	</Scroll>
					</ScrollWrapper>
				</>
      }
		</FixedContainer>
  )
}

const mapState = state => ({
	artist: state.getIn(['singer', 'artist']),
	songs: state.getIn(['singer', 'songs']),
	isLoading: state.getIn(['singer', 'isLoading']),
})

const mapDispatch = dispatch => ({
	initSingerInfoDispatch(id) {
		dispatch(setIsLoading(true));
		dispatch(getSingerInfoAction(id));
	}
})

export default connect(mapState, mapDispatch)(Singer);