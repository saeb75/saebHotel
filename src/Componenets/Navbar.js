import React, { Component } from 'react'


//Logo & Icons
import logo from './../images/logo.svg'
import {FaAlignRight} from 'react-icons/fa'
import {NavLink} from 'react-router-dom'


export default class Navbar extends
 Component {

    state={
        isOpen:false
    }
    HandleToggle = () => {
        this.setState({isOpen:!this.state.isOpen})
    }
    render() {
        return (
            <nav className="navbar">
                <div className='nav-center'>
                    <div className="nav-header">
                        <NavLink to="/">
                            <img src={logo} alt="Beach-Logo"/>
                        </NavLink>
                        <button type="button" className="nav-btn" 
                            onClick={this.HandleToggle}>
                            <FaAlignRight className="nav-icon" />
                        </button>
                    </div>
                    <ul className={this.state.isOpen?'nav-links show-nav':'nav-links'}>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/rooms">Rooms</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
