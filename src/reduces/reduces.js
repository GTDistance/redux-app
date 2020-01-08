import { combineReducers } from "redux";
import postReducer from "./postReducer";
import counterReducer from "./counterReducer";

const rootReduces = combineReducers({ postReducer, counterReducer })
export default rootReduces
