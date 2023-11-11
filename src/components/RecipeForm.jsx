// RecipeForm.js
import React, { useState } from 'react';

const RecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Make a POST request to add a new recipe
    const response = await fetch('http://localhost:3001/recipes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        ingredients: ingredients.split(',').map(ingredient => ingredient.trim()), // Split ingredients into an array
        instructions,
      }),
    });

    if (response.ok) {
      // Recipe added successfully, you might want to redirect or update the UI
      console.log('Recipe added successfully!');
    } else {
      // Handle error
      console.error('Failed to add recipe.');
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label>Title:</label>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />

      <label>Ingredients:</label>
      <input type="text" value={ingredients} onChange={(e) => setIngredients(e.target.value)} required />

      <label>Instructions:</label>
      <textarea value={instructions} onChange={(e) => setInstructions(e.target.value)} required />

      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default RecipeForm;
