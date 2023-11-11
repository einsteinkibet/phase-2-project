// // RecipeDetails.jsx
// import React from 'react';
// import '../App.css';

// const RecipeDetails = ({ recipe }) => {
//   return (
//     <div className="recipe-details">
//       <h2>{recipe.strMeal}</h2>
//       <img src={recipe.strMealThumb} alt={recipe.strMeal} />
//       <h3>Ingredients:</h3>
//       <p>{recipe.ingredients}</p>
//       <h3>Instructions:</h3>
//       <p>{recipe.instructions}</p>
//     </div>
//   );
// };
// export default RecipeDetails;


// // RecipeDetails.jsx
// import React from 'react';
// import '../App.css';

// const RecipeDetails = ({ recipe, onCloseDetails }) => {
//   return (
//     <div className="recipe-details">
//       <button className="close-button" onClick={onCloseDetails}>
//         Close Details
//       </button>
//       <h2>{recipe.strMeal}</h2>
//       <img src={recipe.strMealThumb} alt={recipe.strMeal} />
//       <h3>Ingredients:</h3>
//       <p>{recipe.ingredients}</p>
//       <h3>Instructions:</h3>
//       <p>{recipe.instructions}</p>
//     </div>
//   );
// };

// export default RecipeDetails;
// RecipeDetails.jsx
import React from 'react';
import '../App.css';

const RecipeDetails = ({ recipe, onCloseDetails }) => {
  const ingredientsArray = [];
  // Collect the ingredients from the response
  for (let i = 1; i <= 20; i++) {
    if (recipe[`strIngredient${i}`]) {
      ingredientsArray.push(`${recipe[`strIngredient${i}`]} - ${recipe[`strMeasure${i}`]}`);
    }
  }

  return (
    <div className="recipe-details">
      <button className="close-button" onClick={onCloseDetails}>
        Close Details
      </button>
      <h2>{recipe.strMeal}</h2>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      <h3>Ingredients:</h3>
      <ul>
        {ingredientsArray.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Instructions:</h3>
      <p>{recipe.strInstructions}</p>
    </div>
  );
};

export default RecipeDetails;

