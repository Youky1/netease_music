import { fromJS } from "immutable";
import { getRankListRequest } from "../../../api/require";

// action常量
export const CHANGE_RANK_LIST = 'home/rank/CHANGE_RANK_LIST';
export const CHANGE_LOADING = 'home/rank/CHANGE_LOADING';

// action creator
const changeRankList = (data) => ({
    type: CHANGE_RANK_LIST,
    data,
})

const changeLoading = (data) => ({
    type: CHANGE_LOADING,
    data
})

export const getRankList = () => {
    return (dispatch) => {
        getRankListRequest()
        .then(data => {
            const {list=[]} = data;
            dispatch(changeRankList(fromJS(list)));
            dispatch(changeLoading(false));
        })
        .catch(e => console.log('获取排行榜数据出错', e));
    }
    
}

const defaultState = fromJS({
    rankList: [],
    isLoading: true,
})

export const reducer = (state = defaultState, action) => {
    switch(action.type){
        case(CHANGE_RANK_LIST):
            return state.set('rankList', action.data);
        case(CHANGE_LOADING):
            return state.set('isLoading', action.data);
        default:
            return state;
    }
}