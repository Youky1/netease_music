import { fromJS } from "immutable";
import * as actionTypes from './constants';

const playMode = {
  sequence: 0,
  loop: 1,
  random: 2
};
const defaultState = fromJS({
  fullScreen: false,        // 是否为全屏
  isPlaying: false,           // 是否在播放
  sequencePlaylist: [],     // 顺序播放列表
  playList: [],             // 播放列表
  mode: playMode.sequence,  // 播放模式
  currentIndex: -1,         // 当前播放的歌曲在列表中的下标
  showPlaylist: false,      // 是否显示播放列表
  currentSong: {},          // 当前播放的歌曲
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SET_CURRENT_SONG:
      return state.set ('currentSong', action.data);
    case actionTypes.SET_FULL_SCREEN:
      return state.set ('fullScreen', action.data);
    case actionTypes.SET_PLAYING_STATE:
      return state.set ('isPlaying', action.data);
    case actionTypes.SET_SEQUECE_PLAYLIST:
      return state.set ('sequencePlayList', action.data);
    case actionTypes.SET_PLAYLIST:
      return state.set ('playList', action.data);
    case actionTypes.SET_PLAY_MODE:
      return state.set ('mode', action.data);
    case actionTypes.SET_CURRENT_INDEX:
      return state.set ('currentIndex', action.data);
    case actionTypes.SET_SHOW_PLAYLIST:
      return state.set ('showPlayList', action.data);
    case actionTypes.DELETE_SONG: {
      const list = state.get('playList').toJS();
      list.splice(action.data,1);
      return state.set('playList', fromJS(list));
    }
    default:
      return state;
  }
}