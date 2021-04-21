import {combineReducers} from "redux";
import {appReducer} from "./reducers/appReducer";
import {alertReducer} from "./reducers/alertReducer";

export const rootReducer = combineReducers({
    app: appReducer,
    alert: alertReducer
})