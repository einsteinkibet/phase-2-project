// // App.jsx
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './components/Home';
// import Header from './components/Header';
// import FeaturedRecipes from './components/FeaturedRecipes';
// import RecipeSearch from './components/RecipeSearch';
// import ComposeRecipe from './components/ComposeRecipe';
// import SavedRecipes from './components/SavedRecipes';
// import Footer from './components/Footer';

// function App() {
//   const [savedRecipes, setSavedRecipes] = useState([]);

//   const saveRecipe = (newRecipe) => {
//     setSavedRecipes([...savedRecipes, newRecipe]);
//   };

//   const deleteRecipe = (index) => {
//     const updatedRecipes = [...savedRecipes];
//     updatedRecipes.splice(index, 1);
//     setSavedRecipes(updatedRecipes);
//   };

//   return (
//     <Router>
//       <div>
//         <Header />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/header" element={<Header />} />
//           <Route path="/featured-recipes" element={<FeaturedRecipes />} />
//           <Route path="/recipe-search" element={<RecipeSearch />} />
//           <Route
//             path="/compose"
//             element={<ComposeRecipe onSaveRecipe={saveRecipe} />}
//           />
//           <Route
//             path="/saved"
//             element={
//               <SavedRecipes
//                 savedRecipes={savedRecipes}
//                 onDeleteRecipe={deleteRecipe}
//               />
//             }
//           />
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;

// App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import FeaturedRecipes from './components/FeaturedRecipes';
import RecipeSearch from './components/RecipeSearch';
import ComposeRecipe from './components/ComposeRecipe';
import SavedRecipes from './components/SavedRecipes';
import Footer from './components/Footer';

function App() {
  const [savedRecipes, setSavedRecipes] = useState([]);

  const saveRecipe = (newRecipe) => {
    setSavedRecipes([...savedRecipes, newRecipe]);
  };

  const deleteRecipe = (index) => {
    const updatedRecipes = [...savedRecipes];
    updatedRecipes.splice(index, 1);
    setSavedRecipes(updatedRecipes);
  };

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/header" element={<Header />} />
          <Route path="/featured-recipes" element={<FeaturedRecipes />} />
          <Route
            path="/recipe-search"
            element={<RecipeSearch onSaveRecipe={saveRecipe} />}
          />
          <Route
            path="/compose"
            element={<ComposeRecipe onSaveRecipe={saveRecipe} />}
          />
          <Route
            path="/saved"
            element={
              <SavedRecipes
                savedRecipes={savedRecipes}
                onDeleteRecipe={deleteRecipe}
              />
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
