import React from 'react'
import { Link } from "react-router-dom";
import logo from '../icons_assets/Littlelemon.png';

const Nav = () => {
    return (
        <nav className='navBar'>
            <div className='left'>
                <img src={logo} alt="Little Lemon" />
            </div>
            <div className='right'>
                <ul>
                    <li> <Link to="/">Home</Link> </li>
                    <li> <Link to="/bookingform">Booking</Link> </li>
                    <li> <Link to="/products">Products</Link> </li>
                    <li> <Link to="/about">About Us</Link> </li>
                </ul>
            </div>

        </nav>
    );
};

export default Nav