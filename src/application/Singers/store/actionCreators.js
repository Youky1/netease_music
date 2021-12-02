import {
  getHotSingerListRequest,
  getSingerListRequest
} from "../../../api/require";
import {
  CHANGE_SINGER_LIST,
  CHANGE_PAGE_COUNT,
  CHANGE_PULLUP_LOADING,
  CHANGE_PULLDOWN_LOADING,
  CHANGE_ENTER_LOADING
} from './constants';
import {
  fromJS
} from 'immutable';

const changeSingerList = (data) => ({
  type: CHANGE_SINGER_LIST,
  data: fromJS(data)
});

export const changePageCount = (data) => ({
  type: CHANGE_PAGE_COUNT,
  data
});

//进场loading
export const changeEnterLoading = (data) => ({
  type: CHANGE_ENTER_LOADING,
  data
});

//滑动最底部loading
export const changePullUpLoading = (data) => {
  return {
    type: CHANGE_PULLUP_LOADING,
	  data
  }
};

//顶部下拉刷新loading
export const changePullDownLoading = (data) => {
  return {
    type: CHANGE_PULLDOWN_LOADING,
	  data
  }
};

export const getHotSingerList = () => (dispatch) => {
    getHotSingerListRequest(0)
    .then(res => {
        console.log('false')
        dispatch(changeSingerList(res.artists));
        dispatch(changeEnterLoading(false));
        dispatch(changePullUpLoading(false));
        dispatch(changePullDownLoading(false));
    })
    .catch(e => console.log(`获取热门歌手数据出错：${e}`))
}

export const refreshMoreHotSingerList = () =>
	(dispatch, getState) => {
    	const pageCount = getState().getIn(['singers', 'pageCount']);
    	const singerList = getState().getIn(['singers', 'singerList']).toJS();
    	getHotSingerListRequest(pageCount)
    	.then(res => {
    	    // 连接已有数据和新数据
    	    const data = singerList.concat(res.artists);
    	    dispatch(changeSingerList(data));
    	    dispatch(changePullUpLoading(false));
          dispatch(changePullDownLoading(false));
    	}).catch(() => {
    	    console.log('热门歌手数据获取失败');
    	});
	}

//第一次加载对应类别的歌手
export const getSingerList = (category, alpha) => {
    return (dispatch, getState) => {
        getSingerListRequest(category, alpha, 0).then(res => {
            const data = res.artists;
            dispatch(changeSingerList(data));
            dispatch(changeEnterLoading(false));
            dispatch(changePullDownLoading(false));
        }).catch(() => {
            console.log('加载对应类别的歌手数据获取失败');
        });
    }
};

//加载更多歌手
export const refreshMoreSingerList = (category, alpha) => {
    return (dispatch, getState) => {
        const pageCount = getState().getIn(['singers', 'pageCount']);
        const singerList = getState().getIn(['singers', 'singerList']).toJS();
        getSingerListRequest(category, alpha, pageCount).then(res => {
            const data = [...singerList, ...res.artists];
            dispatch(changeSingerList(data));
            dispatch(changePullUpLoading(false));
        }).catch(() => {
            console.log('加载更多歌手数据获取失败');
        });
    }
};