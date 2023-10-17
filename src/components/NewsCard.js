import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

function checkImage(imageUrl) {
    return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(imageUrl);
        img.onerror = () => resolve('imageNotFound.png');
        img.src = imageUrl;
    });
}   

const NewsCard = ({ image, title, source, author, date, articleLink }) => {

    const [imageUrl, setImageUrl] = useState('');
    
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
                    <FontAwesomeIcon icon={faCirclePlus} className='add-icon'/>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
