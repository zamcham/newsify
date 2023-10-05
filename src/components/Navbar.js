import React from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const readingListTotal = useSelector((store) => store.readingList.total);
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
              <div className="reading-list-icon">
                <FontAwesomeIcon icon={faBook} />
                <p>{readingListTotal}</p>
              </div>
              <input type="text" placeholder="Search..."/>
            </div>
        </nav>
    );
};

export default Navbar;
