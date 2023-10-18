import React, { useState, useEffect, useRef } from "react";
import NewsCard from "./NewsCard";
import { franc, francAll } from "franc";

function News({ category }) {
  const [articles, setArticles] = useState([]);
  const newsContainerRef = useRef(null);

  useEffect(() => {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() - 1);
    const formattedDate = currentDate.toISOString().split("T")[0];
    const apiKey = process.env.REACT_APP_NEWS_API_KEY;

    const apiUrl = `https://newsapi.org/v2/everything?q=${category}&apiKey=${apiKey}&from=${formattedDate}&to=${formattedDate}`;

    async function fetchNews() {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`Request failed with status: ${response.status}`);
        }
        const data = await response.json();
        const englishArticles = data.articles.filter((article) => {
          try {
            const detectedLanguageCode = franc(article.title);
            return detectedLanguageCode === "eng";
          } catch (error) {
            console.error(
              `Error detecting language for article: ${article.title}`,
            );
            return false;
          }
        });
        setArticles(englishArticles);
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
            <li key={article.url}>
              <NewsCard
                articleObject={article}
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
