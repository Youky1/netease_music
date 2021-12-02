import { combineReducers } from "redux-immutable";
import { reducer as recommend } from "../application/Recommend/store";
import { reducer as singers } from '../application/Singers/store'

export default combineReducers({
    recommend,
    singers
})