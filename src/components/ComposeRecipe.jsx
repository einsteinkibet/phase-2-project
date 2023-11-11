import React, { useState } from 'react';
import '../App.css';

const ComposeRecipe = ({ onSaveRecipe }) => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');

  const handleSaveRecipe = () => {
    const newRecipe = {
      title,
      ingredients,
      instructions,
    };

    onSaveRecipe(newRecipe);

    setTitle('');
    setIngredients('');
    setInstructions('');
  };

  return (
    <section id="composepg">
      <h2>COMPOSE RECIPE</h2>
      <form id="recipe-form">
        <div className="form-group">
          <label htmlFor="title">Recipe Title</label>
          <input
            className="input2"
            type="text"
            id="title"
            placeholder="Enter recipe title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="ingredients">Ingredients</label>
          <textarea
            id="ingredients"
            placeholder="Enter recipe ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="instructions">Instructions</label>
          <textarea
            id="instructions"
            placeholder="Enter recipe instructions"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            required
          />
        </div>
        <button type="button" onClick={handleSaveRecipe}>
          Save Recipe
        </button>
      </form>
      <br />
          <br />
          <br/>
          <br />
          <br />
          <br/>
          <br />
          <br />
          <br />
          <br/>
          <br />
          <br />
          <br/>
    </section>
    
  );
};

export default ComposeRecipe;
