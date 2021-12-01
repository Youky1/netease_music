import {
    CHANGE_BANNER,
    CHANGE_RECOMMEND_LIST,
    CHANGE_ENTER_LOADING
} from './constants'
import { fromJS } from 'immutable';// 将 JS 对象转换成 immutable 对象
import { getBannerRequest, getRecommendListRequest } from '../../../api/require';

const changeBannerList = data => ({
    type: CHANGE_BANNER,
    data: fromJS(data)
})

const changeRecommendList = (data) => ({
    type: CHANGE_RECOMMEND_LIST,
    data: fromJS(data)
})

const changeEnterLoading = (data) => ({
  type: CHANGE_ENTER_LOADING,
  data
});

export const getBannerListAction = (dispatch) => {
    getBannerRequest()
        .then(data => dispatch(changeBannerList(data.banners.map(item => item.imageUrl))))
        .catch(e => console.log('轮播图数据请求出错：',e))
}

export const getRecommendListAction = (dispatch) => {
    getRecommendListRequest()
        .then(data => {
            dispatch(changeRecommendList(data.result))
            dispatch (changeEnterLoading (false));
        })
        .catch(e => console.log('推荐列表请求出错：',e))
}

