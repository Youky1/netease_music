import {
  CHANGE_ARTIST,
  CHANGE_IS_LOADING,
  CHANGE_SONGS,
} from './constants';
import {getSingerInfoRequest} from '../../../api/require';

const setArtist = (data) => ({
  type: CHANGE_ARTIST,
  data,
})

const setSongs = (data) => ({
  type: CHANGE_SONGS,
  data,
})

export const setIsLoading = (data) => ({
  type: CHANGE_IS_LOADING,
  data,
})

export const getSingerInfoAction = (id) => {
  return dispatch => {
    getSingerInfoRequest(id)
    .then(res => {
      dispatch(setIsLoading(false));
      dispatch(setArtist(res.artist));
      dispatch(setSongs(res.hotSongs));
    })
    .catch(e => console.log('请求歌手详情数据出错：', e))
  }
}