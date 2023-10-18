import React, { useState, useEffect, useRef } from "react";
import NewsCard from "./NewsCard";
import { franc, francAll } from "franc";

function News({ category }) {
  const [articles, setArticles] = useState([]);
  const newsContainerRef = useRef(null);

  useEffect(() => {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() - 1);
    const apiKey = process.env.REACT_APP_NEWS_API_KEY;

    const apiUrl = `https://api.thenewsapi.com/v1/news/all?&api_token=${apiKey}&language=en&limit=&categories=${category}`;

    async function fetchNews() {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`Request failed with status: ${response.status}`);
        }
        const data = await response.json();
        setArticles(data.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchNews();
  }, [category]);

  useEffect(() => {
    if (newsContainerRef.current) {
      newsContainerRef.current.scrollTop = 0;
    }
  }, [category]);

  return (
    <>
      <div className="headline">
        <h1>
          <span className="category-name">{category}</span> Headlines
        </h1>
      </div>
      <div className="news-container" ref={newsContainerRef}>
        <ul>
          {articles.map((article) => (
            <li key={article.uuid}>
              <NewsCard
                articleObject={article}
                image={article.image_url}
                title={article.title}
                source={article.source}
                date={article.published_at}
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
