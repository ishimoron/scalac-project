import React from 'react';
import {useSelector} from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";

import {Alert} from "../components/Alert";
import SearchInput from "../components/SearchInput";
import {Card} from "../components/Card";

const Search = () => {

    const alert = useSelector(state => state.alert.alert)
    const loading = useSelector(state => state.app.loading)
    const users = useSelector(state => state.app.users)

    return (
        <div className="container pt-4">
            {alert && <Alert/>}
            <SearchInput/>
            <div className="text-center">
                {loading && <ClipLoader size={150}/>}
            </div>
            {users.length ? (
                <div className="row">
                    {users.map(user => (
                        <div className="col-sm-4 mb-4" key={user.id}>
                            <Card user={user}/>
                        </div>
                    ))
                    }
                </div>
            ) : (
                <div className="text-center col-sm-12 container-fluid">
                    <p className="lead">Empty</p>
                </div>
            )
            }
        </div>
    )
}

export default Search;