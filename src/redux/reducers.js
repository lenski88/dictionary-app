import { combineReducers } from "redux";
import { searchReducer } from "./reducers/searchReducer/searchReducer";
import { workModeReducer } from "./reducers/workModeReducer/workModeReducer";

export const rootReducer = combineReducers({
    data: searchReducer,
    workMode: workModeReducer
})  