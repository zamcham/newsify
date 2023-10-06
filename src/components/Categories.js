import React from 'react';
import { useState } from 'react';

const categories = [
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
  

function Categories({ onSelectCategory }) {
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  
    const handleCategoryClick = (category) => {
      setSelectedCategory(category);
      onSelectCategory(category);
    };
  
    return (
      <div className="sidebar">
        <h2>Categories</h2>
        <ul>
          {categories.map((category) => (
            <li
              key={category}
              className={selectedCategory === category ? 'active' : ''}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
    );
  }

export default Categories;
