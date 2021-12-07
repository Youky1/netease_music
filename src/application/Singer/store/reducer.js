import { fromJS } from 'immutable';
import {
  CHANGE_ARTIST,
  CHANGE_IS_LOADING,
  CHANGE_SONGS,
} from './constants';

const defaultState = fromJS ({
  artist: {},
  songs: [],
  isLoading: true
});

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case CHANGE_ARTIST:
      return state.set('artist', action.data);
    case CHANGE_SONGS:
      return state.set('songs', action.data);
    case CHANGE_IS_LOADING:
      return state.set('isLoading', action.data);
    default:
      return state;
  }
}

export default reducer;