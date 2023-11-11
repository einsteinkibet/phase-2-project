import React from 'react';
import { Link } from 'react-router-dom';
import "../App.css"

const Header = () => {
  return (
    <header>
        <h1 className="centered-h1">Recipe App</h1>
      <nav className="navbar"> {/* Apply a CSS class for styling */}
      <div class="logo">
          <img src="recipeIcon.jpg" alt="Logo"/>
        </div>
        <p id="tasty">Tasty<span>Tracks</span></p>
        <ul className="nav-list"> {/* Apply a CSS class for styling */}
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/featured-recipes">Featured Recipes</Link>
          </li>
          <li>
            <Link to="/recipe-search">Recipe Search</Link>
          </li>
          <li>
            <Link to="/compose">Compose Recipe</Link>
          </li>
          <li>
            <Link to="/saved">Saved Recipes</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
