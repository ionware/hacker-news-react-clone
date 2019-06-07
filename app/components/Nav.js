import React from 'react';
import { ThemeConsumer } from "../context/Theme";

export default function Nav() {
    return (
        <ThemeConsumer>
            { ({ toggleTheme, theme }) => {
                return (
                    <nav className={`d-flex space-between nav nav-${theme}`}>
                        <ul className='navbar'>
                            <li className='nav-item font-weight-bold'>
                                <a href="#" className='nav-item-link'>Top</a>
                            </li>
                            <li className='nav-item font-weight-bold'>
                                <a href="#" className='nav-item-link'>New</a>
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