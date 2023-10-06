import React from 'react';

const NewsCard = ({ image, title, source, author, date }) => {

    function formatDate(apiDate) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = new Date(apiDate).toLocaleDateString('en-US', options);
        return formattedDate;
    } 


    return (
        <div className="card">
            <div className="cover">
                <img src={image} alt={title} />
            </div>
            <div className="details">
                <p>{source} - {author} </p>
                <p>{formatDate(date)}</p>   
            </div>
            <div className="content">
                <h2>{title}</h2>
            </div>
            
        </div>
    );
};

export default NewsCard;
