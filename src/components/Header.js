import React from 'react'
import './Header.css'
// convention: file name matches function name
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <div className = "header">
            <h1> Movie Picker </h1>
            <div className = "links">
                <Link to="/movie"> Pick Movie </Link>
                <Link to="/"> Catalog </Link>
                <Link to="/add"> Add Movie </Link>
            </div>
        </div>
    )
}

export default Header
