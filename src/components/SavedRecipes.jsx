import React from 'react';
import '../App.css';

const SavedRecipes = ({ savedRecipes, onDeleteRecipe }) => {
  return (
    <div>
      <h2 className='mainheader'>Saved Recipes</h2>
      <ul>
        {savedRecipes.map((recipe, index) => (
          <li key={index}>
            <h3 className='saved-header'>{recipe.title}</h3>
            <p>Ingredients: </p>
               
            <p>Instructions: {recipe.instructions}</p>
            <p>{recipe.strInstructions}</p>
            <button onClick={() => onDeleteRecipe(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SavedRecipes;
