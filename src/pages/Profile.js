import React, {Fragment, useEffect} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";


import {GET_REPOS, GET_USER, SET_LOADING} from "../redux/types";
import Repos from "../components/Repos";


const Profile = () => {

    const {name} = useParams()
    const dispatch = useDispatch()
    const user = useSelector(state => state.app.user)

    useEffect(() => {

        async function getUser() {
            dispatch({type: SET_LOADING})
            const response = await axios.get(`https://api.github.com/users/${name}`)

            dispatch({
                type: GET_USER,
                payload: response.data
            })
        }

        async function getRepos() {
            dispatch({type: SET_LOADING})
            const response = await axios.get(`https://api.github.com/users/${name}/repos`)

            dispatch({
                type: GET_REPOS,
                payload: response.data
            })
        }

        getUser()
        getRepos()

    }, [])

    return (
        <Fragment>
            <Link to="/search" className="btn btn-link">Back</Link>
            <div className="card mb-4">
                <div className="card-body">
                    <div className="text-center">
                        <div className="text-center">
                            <img
                                src={user.avatar_url}
                                alt={user.login} className="img-fluid rounded float-center"/>
                            <h1 className="mt-3">{user.name}</h1>
                            {user.location && <p>Location: {user.location}</p>}
                        </div>
                        <div className="col container">
                            {
                                user.bio && <Fragment>
                                    <h3>BIO</h3>
                                    <p>{user.bio}</p>
                                </Fragment>
                            }
                            <a href={user.html_url}
                               className="btn btn-dark mb-3"
                               target="_blank"
                               rel="noopener noreferrer"
                            >
                                Open Profile
                            </a>
                            <ul className="list-group mb-3">
                                {user.login && <li className="list-group-item">
                                    <strong className="mr-1">Username:</strong>{user.login}
                                </li>}
                                {user.company && <li className="list-group-item">
                                    <strong className="mr-1">Company:</strong>{user.company}
                                </li>}
                                {user.blog && <li className="list-group-item">
                                    <strong className="mr-1">Blog:</strong>{user.blog}
                                </li>}
                            </ul>
                            <div className="badge badge-primary mr-2">
                                Followers: {user.followers}
                            </div>
                            <div className="badge badge-primary mr-2">
                                Following: {user.following}
                            </div>
                            <div className="badge badge-success mr-2">
                                Repositories: {user.public_repos}
                            </div>
                            <div className="badge badge-info">
                                Gists: {user.public_gists}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Repos/>
        </Fragment>
    );
}

export default Profile;