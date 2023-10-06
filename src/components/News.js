import React, { useState, useEffect } from 'react';

function News({ category }) {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        async function fetchNews() {
            const response = await fetch(`https://newsapi.org/v2/everything?q=${category}&apiKey=0360eaf44b2547a3845fce34e7d44ed7`);
            const data = await response.json();
            setArticles(data.articles);
        }
        fetchNews();
    }, [category]);

    return (
        <div className='news-container'>
            <div className='head'>
                <h2>{category} Headlines</h2>
            </div>
            <div className='cards-container'>
                
            </div>
            <ul>
                {articles.map(article => (
                    <li key={article.url}>
                        <a href={article.url}>{article.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default News;
