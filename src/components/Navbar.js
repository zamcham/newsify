import React from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faHouse, } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ setShowReadingList }) => {
    const readingListTotal = useSelector((store) => store.readingList.total);

    const handleHomeClick = () => {
        setShowReadingList(false);
    };

    return (
            <nav>
                <div className="logo">
                    <h1>Newsify</h1>
                </div>
                <ul>
                    <li className='active'><a onClick={handleHomeClick}><FontAwesomeIcon icon={faHouse} className='menu-icon'/> Home</a></li>
                    <li><a onClick={() => setShowReadingList(true)}>Reading List</a></li>
                </ul>
                <div className="actions">
                <div className="reading-list-icon">
                    <FontAwesomeIcon icon={faBook} className='menu-icon'/>
                    <p className='reading-list-number'>{readingListTotal}</p>
                </div>
                <input type="text" placeholder="Search..."/>
                </div>
            </nav>
    );
};

export default Navbar;
