import React, { useEffect } from 'react';
import './topMenu.css';
import { NavLink } from 'react-router-dom'
import { setTheme } from '../../helpers/setTheme'

const TopMenu = props => {

    const handleOnClick = () => {
        localStorage.getItem('theme') === 'theme-dark' ?
            setTheme('theme-light') : setTheme('theme-dark')
    }

    useEffect(() => {
        localStorage.getItem('theme') === 'theme-dark' ?
        setTheme('theme-light') : setTheme('theme-dark')
    }, [])
    
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
            <div className="container--toggle">

                <a className="text-xs" href='https://dev.to/abbeyperini/toggle-dark-mode-in-react-28c9'>Theme switcher implemented from...</a>

                <input type="checkbox" id="toggle" className="toggle--checkbox" onClick={handleOnClick} />

                <label htmlFor="toggle" className="toggle--label">
                    <span className="toggle--label-background"></span>
                </label>
            </div>
        </div>
    )
}

export default TopMenu