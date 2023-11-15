import React, { useState } from 'react';

const RecipeForm = ({ onSaveRecipe }) => {
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Create a new recipe object
    const newRecipe = {
      title,
      ingredients,
      instructions,
    };

    // Send a POST request to the server
    try {
      const response = await fetch('http://localhost:3000/recipes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newRecipe),
      });

      if (response.ok) {
        // If the POST request is successful, update the state or perform any other necessary actions
        onSaveRecipe(newRecipe);

        // Clear the form fields
        setTitle('');
        setIngredients('');
        setInstructions('');
      } else {
        console.error('Failed to add recipe:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding recipe:', error);
    }
  };

  return (
    <div>
      <h2>Add Recipe</h2>
      <form onSubmit={handleFormSubmit}>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Ingredients:</label>
        <textarea
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />

        <label>Instructions:</label>
        <textarea
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
        />

        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
};

export default RecipeForm;
