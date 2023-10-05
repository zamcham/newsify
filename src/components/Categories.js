import React from 'react';

const Categories = ({ categories }) => {
    return (
        <div className="container category-panel">
            <h2>Categories</h2>
            <ul>
                {categories.map((category, index) => (
                    <li key={index}>{category}</li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
