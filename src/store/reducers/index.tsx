import {combineReducers} from "redux";
import {trackReducer} from "./trackReducer";

const RootReducer = combineReducers({
    tracks: trackReducer
})

export default RootReducer;