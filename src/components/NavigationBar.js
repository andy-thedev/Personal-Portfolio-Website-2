import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { AiOutlineMenu } from 'react-icons/ai';

function NavigationBar (props) {

    const [navVisible, setNavVisible] = useState(false);

    return <div className="navbar">
        {navVisible ? 
            <>
                <button onClick={() => setNavVisible(false)} className="nav-toggle">
                    <AiOutlineMenu/>
                </button>
                <div onClick={() => setNavVisible(false)} className="navbar-link">
                    <Link to="/">H</Link>
                </div>
                <div onClick={() => setNavVisible(false)} className="navbar-link">
                    <Link to="/about">A</Link>
                </div>
                <div onClick={() => setNavVisible(false)} className="navbar-link">
                    <Link to="/skills">S</Link>
                </div>
                <div onClick={() => setNavVisible(false)} className="navbar-link">
                    <Link to="/mywork">W</Link>
                </div>
                <div onClick={() => setNavVisible(false)} className="navbar-link">
                    <Link to="/contact">C</Link>
                </div>
            </> :
            <button onClick={() => setNavVisible(true)} className="nav-toggle">
                <AiOutlineMenu/>
            </button>
        }
    </div>
}

export default NavigationBar;