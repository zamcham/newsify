import React from 'react';
import { useState } from 'react';
import News from './News';

const categories = [
  'USA',
  'Politics',
  'Technology',
  'Business',
  'Entertainment',
  'Health',
  'Science',
  'Sports',
  'World',
  'Travel',
  'Food',
  'Fashion',
  'Environment',
  'Education',
  'Finance',
  'Gaming',
  'Music',
];
  

function Main() {
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  
    const handleCategoryClick = (category) => {
      setSelectedCategory(category);
    };
  
    return (
      <>
        <div className="sidebar">
          <h2>Categories</h2>
          <ul>
            {categories.map((category) => (
              <li
                key={category}
                className={selectedCategory === category ? 'active' : ''}
                onClick={() => handleCategoryClick(category)}
              >
                <a>
                {category}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="main">
          <News category={selectedCategory} />
        </div>
      </>

    );
  }

export default Main;
