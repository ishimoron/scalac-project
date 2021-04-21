// custom imports
import React, {Fragment} from 'react';
import {Switch, Route} from 'react-router-dom'

// my own imports
import {Navbar} from "./components/Navbar";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Profile from "./pages/Profile";


const App = () => {
    return (
        <Fragment>
            <Navbar/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/search" component={Search}/>
                <Route path="/profile/:name" component={Profile}/>
            </Switch>
        </Fragment>
    );
};

export default App;