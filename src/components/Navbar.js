import React from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faHouse, } from '@fortawesome/free-solid-svg-icons';

// 0360eaf44b2547a3845fce34e7d44ed7 (news API key)

const Navbar = () => {
    const readingListTotal = useSelector((store) => store.readingList.total);
    return (
            <nav>
                <div className="logo">
                    <h1>Newsify</h1>
                </div>
                <ul>
                    <li className='active'><a href="#"><FontAwesomeIcon icon={faHouse} className='menu-icon'/> Home</a></li>
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
