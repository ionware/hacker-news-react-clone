import React from 'react';

export default function Nav() {
    return (
        <nav className="d-flex space-between nav">
            <ul className='navbar'>
                <li className='nav-item font-weight-bold'>
                    <a href="#" className='nav-item-link'>Top</a>
                </li>
                <li className='nav-item font-weight-bold'>
                    <a href="#" className='nav-item-link'>New</a>
                </li>
            </ul>
            <span>
                <button className='theme-switcher'>🔦</button>
            </span>
        </nav>
    );
}