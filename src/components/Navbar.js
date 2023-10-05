import React from 'react';
import { useSelector } from 'react-redux';

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <h1>Newsify</h1>
            </div>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Popular</a></li>
                <li><a href="#">Newest</a></li>
                <li><i className="fa fa-bars"></i></li>
                <li><input type="text" placeholder="Search..."/></li>
            </ul>
        </nav>
    );
};

export default Navbar;
