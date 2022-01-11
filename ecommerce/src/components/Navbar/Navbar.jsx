import React, { Component } from 'react';
import {Menu} from './MenuItems';
import './Navbar.css';

class Navbar extends Component {
    render() {
        return (
            <nav className='navbarItems'>
                <h1 className="navbar-logo">SYDE</h1>
                <div className="menu-icon">
                    
                </div>
                <ul>
                    {
                        Menu.map((item, index) => { 
                            return (
                                <li key={index}>
                                    <a className={item.cName} href={item.url}>
                                    {item.title}
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        )
    }
}

export default Navbar;
