import React from 'react'
import {NavLink} from 'react-router-dom'

export const Navbar = () => (
    <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
        <div className="navbar-brand">
            Scalac App
        </div>
        <ul className="navbar-nav">
            <li className="nav-item">
                <NavLink exact to="/" className="nav-link">Angular repositories contributors (main task)</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/search" className="nav-link">Simple Github Search (additional task)</NavLink>
            </li>
        </ul>
    </nav>
)
