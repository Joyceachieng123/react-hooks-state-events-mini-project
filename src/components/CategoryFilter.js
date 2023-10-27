import React , {useState} from "react";

function CategoryFilter({categories, selectedCategory, onCategorySelect }) {

  return (
    <div className="categories">
      <h5>Category filters</h5>
       {categories.map((category,index) => (
        <button key={index} 
        className={`category ${selectedCategory === category ? "selected" : ""}`}
        onClick={() => onCategorySelect(category)}
      >
        {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
