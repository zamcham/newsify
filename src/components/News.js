import React, { useState, useEffect } from 'react';
import NewsCard from './NewsCard';

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
        <>
        <div className='headline'>
            <h2>{category} Headlines</h2>
        </div>
        <div className='news-container'>
            <ul>
                {articles.map(article => (
                    <li key={article.url}>
                        <NewsCard
                            image={article.urlToImage}
                            title={article.title}
                            source={article.source.name}
                            author={article.author}
                            date={article.publishedAt}
                        />
                    </li>
                ))}
            </ul>
        </div>
        </>
    );
}

export default News;
