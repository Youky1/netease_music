import { fromJS } from 'immutable';
import {
	CHANGE_SINGER_LIST,
	CHANGE_PAGE_COUNT,
	CHANGE_ENTER_LOADING,
	CHANGE_PULLUP_LOADING,
	CHANGE_PULLDOWN_LOADING
} from './constants'

const defaultState = fromJS({
  singerList: [],					// 歌手列表
  enterLoading: true,     //控制进场Loading
  pullUpLoading: false,   //控制上拉加载动画
  pullDownLoading: false, //控制下拉加载动画
  pageCount: 0            //当前页数
});
export default function reducer(state = defaultState, action) {
	switch(action.type){
		case CHANGE_SINGER_LIST:{
      console.log('change: ',action.data)
      return state.set('singerList', action.data);
    }
      
    case CHANGE_PAGE_COUNT:
      return state.set('pageCount', action.data);
    case CHANGE_ENTER_LOADING:
      return state.set('enterLoading', action.data);
    case CHANGE_PULLUP_LOADING:
      return state.set('pullUpLoading', action.data);
    case CHANGE_PULLDOWN_LOADING:
      return state.set('pullDownLoading', action.data);
    default:
      return state;
	}
}