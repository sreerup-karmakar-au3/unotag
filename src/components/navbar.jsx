import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import './styles/navbar.css'

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-2">
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav">
                    <Link className="navbar-brand" to="/app">
                        <img src="https://img.icons8.com/plasticine/2x/accounting.png" width="30" height="30" className="d-inline-block align-top" alt=""/>
                        Expense Manager
                    </Link>
                </div>
                <div className="navbar-nav ml-auto">
                    <NavLink exact className="nav-item nav-link" to="/signout">Sign Out</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;