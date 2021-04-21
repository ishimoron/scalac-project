import React, {Fragment} from 'react';
import {useSelector} from "react-redux";

const Repos = () => {

    const repos = useSelector(state => state.app.repos)

    return (
        <Fragment>
            {repos.map(repo => (
                <div className="card mb-3 container" key={repo.id}>
                    <div className="card-body d-flex justify-content-between align-items-center">
                        <h5>
                            <a
                                href={repo.html_url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {repo.name}
                            </a>
                        </h5>
                        <a
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer" className="btn btn-primary"
                        >
                            Open
                        </a>
                    </div>
                </div>
            ))}
        </Fragment>
    );
};

export default Repos;