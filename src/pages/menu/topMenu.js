import './topMenu.css';

import { NavLink } from 'react-router-dom'
import React from 'react';

const TopMenu = props => {

    return (
        <div className="topmenu menu .dark:bg-dark-700 .light:bg-light-300">
            <div className="item">
                <NavLink to='/' exact={true} >
                    <i aria-hidden="true" className="home icon 2x" ></i>
                    Home
                </NavLink>
            </div>
            <div className="item">
                <NavLink to='/examples' >
                    <i aria-hidden="true" className="lab icon" ></i>
                    Examples
                </NavLink>
            </div>
            <div className="item">
                <NavLink to='/advanced' >
                    <i aria-hidden="true" className="lab icon" ></i>
                    Advanced
                </NavLink>
            </div>
        </div>
    )
}

export default TopMenu