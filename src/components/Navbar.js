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
            </ul>
            <div className="actions">
              <i className="fa fa-bars"></i>
              <input type="text" placeholder="Search..."/>
            </div>
        </nav>
    );
};

export default Navbar;
