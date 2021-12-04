import { combineReducers } from "redux-immutable";
import { reducer as recommend } from "../application/Recommend/store";
import { reducer as singers } from '../application/Singers/store';
import { reducer as rank } from '../application/Rank/store';

export default combineReducers({
    recommend,
    singers,
    rank,
})