import React from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeConsumer } from "../context/Theme";

export default function Nav() {
    return (
        <ThemeConsumer>
            { ({ toggleTheme, theme }) => {
                return (
                    <nav className={`d-flex space-between nav nav-${theme}`}>
                        <ul className='navbar'>
                            <li className='nav-item font-weight-bold'>
                                <NavLink
                                    activeClassName="active"
                                    to="/"
                                    exact
                                    className="nav-item-link">
                                    Top
                                </NavLink>
                            </li>
                            <li className='nav-item font-weight-bold'>
                                <NavLink
                                    activeClassName="active"
                                    to="/new"
                                    className="nav-item-link">
                                    New
                                </NavLink>
                            </li>
                        </ul>
                        <span>
                            <button
                                className='theme-switcher'
                                onClick={toggleTheme}>
                                { theme === 'dark' ? '💡' : '🔦'}
                            </button>
                        </span>
                    </nav>
                );
            }}
        </ThemeConsumer>
    );
}