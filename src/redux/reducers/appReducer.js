import {GET_REPOS, GET_USER, SEARCH_USERS, SET_LOADING} from "../types";

const initialState = {
    user: {},
    repos: [],
    users: [],
    loading: false
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_USERS:
            return {
                ...state,
                users: action.payload,
                loading: false
            }
        case GET_USER:
            return {
                ...state,
                user: action.payload,
                loading: false
            }

        case GET_REPOS:
            return {
                ...state,
                repos: action.payload,
                loading: false
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state

    }
}
