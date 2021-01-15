import React from 'react';
import { Link } from 'react-router-dom';

function NavigationBar (props) {
    return <div className="navbar">
        <div className="navbar-link">
            <Link to="/">H</Link>
        </div>
        <div className="navbar-link">
            <Link to="/about">A</Link>
        </div>
        <div className="navbar-link">
            <Link to="/skills">S</Link>
        </div>
        <div className="navbar-link">
            <Link to="/mywork">W</Link>
        </div>
        <div className="navbar-link">
            <Link to="/contact">C</Link>
        </div>
    </div>
}

export default NavigationBar;