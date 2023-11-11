import React from 'react';
import '../App.css';

const Recipe = ({ recipe, onSaveRecipe, onClick }) => {
  return (
    <div className="recipe-card" onClick={onClick}>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      <h3 className="name">{recipe.strMeal}</h3>
      <p>Category: {recipe.strCategory}</p>
      <p>Area: {recipe.strArea}</p>
      <button onClick={(e) => { e.stopPropagation(); onSaveRecipe() }}>
        Save Recipe
      </button>
    </div>
  );
};

export default Recipe;
