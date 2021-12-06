import{
  CHANGE_CURRENT_ALBUM,
  CHANGE_IS_LOADING
} from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS ({
  currentAlbum: {},
  isLoading: true,
})

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case CHANGE_CURRENT_ALBUM:
			return state.set('currentAlbum', action.data);
		case CHANGE_IS_LOADING:
			return state.set('isLoading', action.data);
		default:
			return state;
  }
}

export default reducer;