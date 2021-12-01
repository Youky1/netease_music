import { fromJS } from "immutable";
import {
    CHANGE_BANNER,
    CHANGE_RECOMMEND_LIST,
    CHANGE_ENTER_LOADING
} from './constants'
const defaultState = fromJS({
    bannerList: [],
    recommendList: [],
    enterLoading: true,
})

export default function reducer(state = defaultState, action) {
    switch(action.type){
        case(CHANGE_RECOMMEND_LIST): {
            return state.set('recommendList', action.data);
        }
        case(CHANGE_BANNER): {
            return state.set('bannerList', action.data);
        }
        case(CHANGE_ENTER_LOADING):{
            return state.set('enterLoading', action.data)
        }
        default: return state;
    }
}