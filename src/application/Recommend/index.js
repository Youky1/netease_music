import React, { useEffect } from 'react';
import Swiper from '../../components/swiper';
import RecommendList from '../../components/recommendList';
import Scroll from '../../components/scroll'
import { WholeContainer, Content, SwiperContainer } from './style';
import { connect } from 'react-redux';
import {
	getBannerListAction,
	getRecommendListAction
} from '../../application/Recommend/store/actionCreator';
import { forceCheck } from 'react-lazyload';
import Loading from '../../baseUI/loading/index';

function Recommend (props) {

	const { bannerList, recommendList, enterLoading} = props;
	const { getBannerListDispatch, getRecommendListDispatch } = props;
	useEffect(() => {
		if (!bannerList.size){
			getBannerListDispatch ();
		}
		if (!recommendList.size){
			getRecommendListDispatch ();
		}
	});
	const bannerListJS = bannerList ? bannerList.toJS () : [];
	const recommendListJS = recommendList ? recommendList.toJS () :[];
	
	return (
		<Content>
			<Scroll onScroll={forceCheck}>
				<div>
					<div className="before"></div>
					<WholeContainer>
						<SwiperContainer>
							
							<Swiper 
								list={bannerListJS} 
								slideButton={false}
								paginationActiveColor='#d44439'
							/>
						</SwiperContainer>
					</WholeContainer>
					<RecommendList recommendList={recommendListJS}/>
				</div>
			</Scroll>
			{enterLoading && <Loading/>}
			
		</Content>
	)
}

const mapState = (state) => ({
	bannerList: state.getIn(['recommend', 'bannerList']),
	recommendList: state.getIn(['recommend', 'recommendList']),
	enterLoading: state.getIn(['recommend', 'enterLoading']),
})

const mapDispatch = (dispatch) => ({
	getBannerListDispatch() {
        dispatch(getBannerListAction);
	},
    getRecommendListDispatch() {
        dispatch(getRecommendListAction);
    }
})

export default connect(mapState, mapDispatch)(Recommend);