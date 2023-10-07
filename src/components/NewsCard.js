import React from 'react';

const NewsCard = ({ image, title, source, author, date, articleLink }) => {

    function formatDate(apiDate) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = new Date(apiDate).toLocaleDateString('en-US', options);
        return formattedDate;
    } 


    return (
        <div className="card">
            <div className="cover-img">
                <a href={articleLink} target='_blank'>
                    <img src={image} alt={title} />
                </a>  
            </div>
            <div className="content">
                <a href={articleLink} target='_blank'>
                    <h2>{title}</h2>
                </a>
            </div>
            <div className="details">
                <p>{source} • {author} </p>
                <p>{formatDate(date)}</p>   
            </div>
        </div>
    );
};

export default NewsCard;
