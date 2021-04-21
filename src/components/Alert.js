import React from 'react'
import {useDispatch, useSelector} from "react-redux";

import {HIDE_ALERT} from "../redux/types";

export const Alert = () => {

    const alert = useSelector(state => state.alert.alert)
    const dispatch = useDispatch()

    if (!alert) return null

    const hideAlert = () => {
        dispatch({type: HIDE_ALERT})
    }

    return (
        <div
            className={`alert alert-${alert.type || 'danger'} alert-dismissible`}
            role="alert"
        >
            Input can't be blank
            <button type="button" className="close" aria-label="Close" onClick={hideAlert}>
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    )
}
