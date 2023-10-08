import React, { useState, useEffect } from 'react';
import NewsCard from './NewsCard';

function News({ category }) {
    const [articles, setArticles] = useState([]);    

    useEffect(() => {
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() - 1);
        const formattedDate = currentDate.toISOString().split('T')[0];
        const apiKey = process.env.REACT_APP_NEWS_API_KEY;

        const apiUrl = `https://newsapi.org/v2/everything?q=${category}&apiKey=${apiKey}&from=${formattedDate}&to=${formattedDate}`;

        async function fetchNews() {
            try {
                const response = await fetch(apiUrl);
                if (!response.ok) {
                    throw new Error(`Request failed with status: ${response.status}`);
                }
                const data = await response.json();
                setArticles(data.articles);
            } catch (error) {
                console.error(error);
            }
        }
        fetchNews();
    }, [category]);

    return (
        <>
        <div className='headline'>
            <h1>
              <span className='category-name'>{category}</span> Headlines
            </h1>
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
                            articleLink={article.url}
                        />
                    </li>
                ))}
            </ul>
        </div>
        </>
    );
}

export default News;
