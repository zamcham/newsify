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
      <div className='main'>
        <div className="sidebar">
          <h2>Categories</h2>
          <ul>
            {categories.map((category) => (
              <li
                key={category}
                className={selectedCategory === category ? 'active' : ''}
              >
                <a onClick={() => handleCategoryClick(category)}>
                {category}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="news">
          <News category={selectedCategory} />
        </div>
        <div className="nfl">
          <h2 className='headline'>Football Games</h2>
        </div>
      </div>
    );
  }

export default Main;
