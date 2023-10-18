import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { addToReadingList } from '../features/readingList/readingListSlice';

function checkImage(imageUrl) {
    return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(imageUrl);
        img.onerror = () => resolve('imageNotFound.png');
        img.src = imageUrl;
    });
}   

const NewsCard = ({ articleObject, image, title, source, author, date, articleLink }) => {
    const dispatch = useDispatch();
    const [imageUrl, setImageUrl] = useState('');
    const [isAdded, setIsAdded] = useState(false);
    
    useEffect(() => {
        async function validateImage() {
            const validImageUrl = await checkImage(image);
            setImageUrl(validImageUrl);
        }
        validateImage();
    }, [image]);

    function formatDate(apiDate) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = new Date(apiDate).toLocaleDateString('en-US', options);
        return formattedDate;
    } 

    const handleAddButtonClick = () => {
        dispatch(addToReadingList(articleObject));
        setIsAdded(!isAdded);
    };


    return (
        <div className="card">
            <div className="cover-img">
                <a href={articleLink} target='_blank'>
                    <img src={imageUrl} alt={title} />
                </a>  
            </div>
            <div className="content">
                <a href={articleLink} target='_blank'>
                    <h2>{title}</h2>
                </a>
            </div>
            <div className="details">
                <div>
                    <p>{source} • {author} </p>
                    <p>{formatDate(date)}</p>   
                </div>
                <div className='add-reading-list'>
                    <span>
                        <FontAwesomeIcon icon={faCirclePlus} className='add-icon'/>
                        <a
                            className={`add-button ${isAdded ? 'added' : ''}`} // Conditionally add the 'added' class
                            onClick={handleAddButtonClick}
                        >
                            Add to reading list
                        </a>                    
                    </span>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
