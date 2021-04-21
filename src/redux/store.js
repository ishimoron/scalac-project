import {applyMiddleware, compose, createStore} from "redux";
import thunk from 'redux-thunk'

import {rootReducer} from "./rootReducer";

export const store = createStore(rootReducer, compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
))