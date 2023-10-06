import React from 'react';

const NewsCard = ({ image, title, source }) => {
    return (
        <div className="card">
            <img src={image} alt={title} />
            <h2>{title}</h2>
            <p>{source}</p>
        </div>
    );
};

export default NewsCard;
