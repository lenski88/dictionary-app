import { combineReducers } from "redux";
import { searchReducer } from "./reducers/searchReducer/searchReducer";

export const rootReducer = combineReducers({
    data: searchReducer
})  