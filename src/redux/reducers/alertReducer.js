import {HIDE_ALERT, SHOW_ALERT} from "../types";

const initialState = {
    alert: false
}

export const alertReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_ALERT:
            return {alert: true}
        case HIDE_ALERT:
            return {alert: false}
        default:
            return state
    }
}