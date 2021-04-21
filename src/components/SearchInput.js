import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import axios from "axios";

import {HIDE_ALERT, SEARCH_USERS, SET_LOADING, SHOW_ALERT} from "../redux/types";

const SearchInput = () => {
    const [value, setValue] = useState('')
    const dispatch = useDispatch()

    const onSubmit = async event => {

        if (event.key !== 'Enter') {
            return
        }

        if (value.trim()) {

            dispatch({type: HIDE_ALERT})
            dispatch({type: SET_LOADING})

            const response = await axios.get(`https://api.github.com/search/users?q=${value}&`)

            dispatch({
                type: SEARCH_USERS,
                payload: response.data.items
            })
        } else {
            dispatch({type: SHOW_ALERT})
        }
    }

    return (
        <div className="form-group">
            <input
                type="text"
                className="form-control"
                placeholder="Type login or name..."
                value={value}
                onChange={event => setValue(event.target.value)}
                onKeyPress={onSubmit}
            />
        </div>
    )
};

export default SearchInput;