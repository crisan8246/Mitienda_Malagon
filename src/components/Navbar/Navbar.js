import React, { Component } from 'react';
import Cartwidget from "./CartWidget"
import { MenuItems } from "./Menuitems"
import './Navbar.css'
import { Link } from "react-router-dom";

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    


    render() {
        return (
            <nav className="NavbarItems">
                <Link to ="/">
                <h1 className="navbar-logo">Kitan<i className="fab fa-react"></i></h1>
                </Link>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>

                </div>
                <ul className={this.state.clicked ? 'na-menu active' : 'nav-menu'}>
                    {MenuItems.map((items, index) => {
                        return (
                            <li key={index}>
                                
                                <Link className={items.cName} to={items.url}>
                                    {items.title}
                                </Link>
                                
                            </li>
                        )
                    })}
                </ul>
                <Cartwidget/>
            </nav>
        )
    }

}

export default Navbar