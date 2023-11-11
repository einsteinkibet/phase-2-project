// // import React, { useState, useEffect } from 'react';
// // import Recipe from './Recipe';
// // import '../App.css';

// // const RecipeSearch = ({ onSaveRecipe }) => {
// //   const [searchInput, setSearchInput] = useState('');
// //   const [searchResults, setSearchResults] = useState([]);

// //   const handleSearch = () => {
// //     const apiUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`;
// //     fetch(apiUrl)
// //       .then((response) => response.json())
// //       .then((data) => setSearchResults(data.meals || []))
// //       .catch((error) => console.error('Error fetching data: ', error));
// //   };

// //   return (
// //     <div>
// //       <input className='search-input'
// //         type="text"
// //         placeholder="Search for recipes..."
// //         value={searchInput}
// //         onChange={(e) => setSearchInput(e.target.value)}
// //       />
// //       <button className='search-button' onClick={handleSearch}>Search</button>
// //       <div className="recipe-list">
// //         <p>Hi, The list of related search will be displayed below...
// //           <br />
// //           <br />
// //           <br />
// //           <br/>
// //           <br />
// //           <br />
// //           <br/>
          
          
// //         </p>
// //         {searchResults.map((recipe) => (
// //           <Recipe key={recipe.idMeal} recipe={recipe} onSaveRecipe={onSaveRecipe} />
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default RecipeSearch;

// // RecipeSearch.jsx
// import React, { useState } from 'react';
// import Recipe from './Recipe';
// import RecipeDetails from './RecipeDetails';

// const RecipeSearch = ({ onSaveRecipe }) => {
//   const [searchInput, setSearchInput] = useState('');
//   const [searchResults, setSearchResults] = useState([]);
//   const [selectedRecipe, setSelectedRecipe] = useState(null);

//   const handleSearch = async () => {
//     const apiUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`;
//     try {
//       const response = await fetch(apiUrl);
//       const data = await response.json();
//       setSearchResults(data.meals || []);
//     } catch (error) {
//       console.error('Error fetching data: ', error);
//     }
//   };

//   const handleRecipeClick = (recipe) => {
//     setSelectedRecipe(recipe);
//   };

//   const handleSaveRecipe = (recipe) => {
//     onSaveRecipe(recipe);
//   };

//   return (
//     <div>
//       <input
//         className='search-input'
//         type="text"
//         placeholder="Search for recipes..."
//         value={searchInput}
//         onChange={(e) => setSearchInput(e.target.value)}
//       />
//       <button className='search-button' onClick={handleSearch}>
//         Search
//       </button>
//       {selectedRecipe && <RecipeDetails recipe={selectedRecipe} />}
//       <div className="recipe-list">
//         {searchResults.map((recipe) => (
//           <Recipe
//             key={recipe.idMeal}
//             recipe={recipe}
//             onSaveRecipe={() => handleSaveRecipe(recipe)}
//             onClick={() => handleRecipeClick(recipe)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RecipeSearch;

// RecipeSearch.jsx


// import React, { useState } from 'react';
// import Recipe from './Recipe';
// import RecipeDetails from './RecipeDetails';

// const RecipeSearch = ({ onSaveRecipe }) => {
//   const [searchInput, setSearchInput] = useState('');
//   const [searchResults, setSearchResults] = useState([]);
//   const [selectedRecipe, setSelectedRecipe] = useState(null);

//   const handleSearch = async () => {
//     const apiUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`;
//     try {
//       const response = await fetch(apiUrl);
//       const data = await response.json();
//       setSearchResults(data.meals || []);
//     } catch (error) {
//       console.error('Error fetching data: ', error);
//     }
//   };

//   const handleRecipeClick = (recipe) => {
//     setSelectedRecipe(recipe);
//   };

//   const handleSaveRecipe = (recipe) => {
//     onSaveRecipe(recipe);
//   };

//   const handleCloseDetails = () => {
//     setSelectedRecipe(null);
//   };

//   return (
//     <div>
//       <input
//         className='search-input'
//         type="text"
//         placeholder="Search for recipes..."
//         value={searchInput}
//         onChange={(e) => setSearchInput(e.target.value)}
//       />
//       <button className='search-button' onClick={handleSearch}>
//         Search
//       </button>
//       {selectedRecipe && (
//         <RecipeDetails recipe={selectedRecipe} onCloseDetails={handleCloseDetails} />
//       )}
//       <div className="recipe-list">
//         {searchResults.map((recipe) => (
//           <Recipe
//             key={recipe.idMeal}
//             recipe={recipe}
//             onSaveRecipe={() => handleSaveRecipe(recipe)}
//             onClick={() => handleRecipeClick(recipe)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RecipeSearch;


// RecipeSearch.jsx
// import React, { useState } from 'react';
// import Recipe from './Recipe';
// import RecipeDetails from './RecipeDetails';

// const RecipeSearch = ({ onSaveRecipe }) => {
//   const [searchInput, setSearchInput] = useState('');
//   const [searchResults, setSearchResults] = useState([]);
//   const [selectedRecipe, setSelectedRecipe] = useState(null);

//   const handleSearch = async () => {
//     const apiUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInput}`;
//     try {
//       const response = await fetch(apiUrl);
//       const data = await response.json();
//       setSearchResults(data.meals || []);
//     } catch (error) {
//       console.error('Error fetching data: ', error);
//     }
//   };

//   const handleRecipeClick = (recipe) => {
//     setSelectedRecipe(recipe);
//   };

//   const handleSaveRecipe = (recipe) => {
//     onSaveRecipe(recipe);
//   };

//   const handleCloseDetails = () => {
//     setSelectedRecipe(null);
//   };

//   const displayRecipes = () => {
//     // Retrieve the list of saved recipes from localStorage
//     const recipes = JSON.parse(localStorage.getItem('recipes')) || [];
//     return recipes;
//   };

//   return (
//     <div>
//       <input
//         className='search-input'
//         type="text"
//         placeholder="Search for recipes..."
//         value={searchInput}
//         onChange={(e) => setSearchInput(e.target.value)}
//       />
//       <button className='search-button' onClick={handleSearch}>
//         Search
//       </button>
//       {selectedRecipe && (
//         <RecipeDetails
//           recipe={selectedRecipe}
//           onCloseDetails={handleCloseDetails}
//         />
//       )}
//       <div className="recipe-list">
//         <br/>
//         <br/>
//         <br/>
//         <br/>
//         <br/>
//         <br/>
//         <br/>
//         <br/>
//         <br/>
//         <br/>
//         <br/>
//         <br/>
//         <br/>

//         {searchResults.map((recipe) => (
//           <Recipe
//             key={recipe.idMeal}
//             recipe={recipe}
//             onSaveRecipe={() => handleSaveRecipe(recipe)}
//             onClick={() => handleRecipeClick(recipe)}
//           />
//         ))}
//       </div>
//       <div id="recipes-container">
//         {displayRecipes().map((recipe, index) => (
//           <div key={index} className="recipe-card">
//             <h3>{recipe.title}</h3>
//             <p>
//               <strong>Ingredients:</strong>
//               <br />
//               {recipe.ingredients}
//             </p>
//             <p>
//               <strong>Instructions:</strong>
//               <br />
//               {recipe.instructions}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RecipeSearch;


import React, { useState, useEffect } from 'react';
import Recipe from './Recipe';
import RecipeDetails from './RecipeDetails';

const RecipeSearch = ({ onSaveRecipe }) => {
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async () => {
    setIsLoading(true);
    const apiUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`;
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setSearchResults(data.meals || []);
    } catch (error) {
      console.error('Error fetching data: ', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleSaveRecipe = (recipe) => {
    onSaveRecipe(recipe);
  };

  const handleCloseDetails = () => {
    setSelectedRecipe(null);
  };

  const displayRecipes = () => {
    // Retrieve the list of saved recipes from localStorage
    const recipes = JSON.parse(localStorage.getItem('recipes')) || [];
    return recipes;
  };

  const fetchDataFromApi = async () => {
    setIsLoading(true);
    const apiUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInput}'; // Replace with your API endpoint
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      // Process the fetched data as needed
      console.log('Data from API:', data);
    } catch (error) {
      console.error('Error fetching data from API: ', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchDataFromApi();
  }, []); // Run once when the component mounts

  return (
    <div>
      <input
        className='search-input'
        type="text"
        placeholder="Search for recipes..."
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button className='search-button' onClick={handleSearch}>
        Search
      </button>
      {selectedRecipe && (
        <RecipeDetails
          recipe={selectedRecipe}
          onCloseDetails={handleCloseDetails}
        />
      )}
      <div className="recipe-list">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            {searchResults.map((recipe) => (
              <Recipe
                key={recipe.idMeal}
                recipe={recipe}
                onSaveRecipe={() => handleSaveRecipe(recipe)}
                onClick={() => handleRecipeClick(recipe)}
              />
            ))}
          </>
        )}
      </div>
      <div id="recipes-container">
        {displayRecipes().map((recipe, index) => (
          <div key={index} className="recipe-card">
            <h3>{recipe.title}</h3>
            <p>
              <strong>Ingredients:</strong>
              <br />
              {recipe.ingredients}
            </p>
            <p>
              <strong>Instructions:</strong>
              <br />
              {recipe.instructions}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeSearch;
