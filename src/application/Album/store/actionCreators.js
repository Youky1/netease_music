import{
  CHANGE_CURRENT_ALBUM,
  CHANGE_IS_LOADING
} from './constants';
import { getAlbumDetailRequest } from '../../../api/require';
import { fromJS } from 'immutable';

const changeCurrentAlbum = (data) => ({
  type: CHANGE_CURRENT_ALBUM,
  data: fromJS (data)
});

export const getAlbumList = (id) => {
  return dispatch => {
    getAlbumDetailRequest(id)
    .then(res => {
      dispatch (changeCurrentAlbum (res.playlist));
      dispatch (changeIsLoading (false));
    })
    .catch(e => console.log('专辑详情请求错误：',e))
  }
}

export const changeIsLoading = (data) => ({
  type: CHANGE_IS_LOADING,
  data
});