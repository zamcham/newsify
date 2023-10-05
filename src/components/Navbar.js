import React from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';

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
              <FontAwesomeIcon icon={faBook} />
              <input type="text" placeholder="Search..."/>
            </div>
        </nav>
    );
};

export default Navbar;
