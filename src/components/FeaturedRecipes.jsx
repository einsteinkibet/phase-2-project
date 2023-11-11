import React from 'react';
import '../App.css';

const FeaturedRecipes = () => {
  // Define your featured recipes here
  const recipes = [
    {
      id: 1,
      name: 'Big Mac',
      image: 'https://www.themealdb.com/images/media/meals/urzj1d1587670726.jpg',
    },
    {
      id: 2,
      name: '<Chicken Enchilada Casserole>',
      image: 'https://www.themealdb.com/images/media/meals/qtuwxu1468233098.jpg'
    },
    {
      id: 3,
      name: '<Lancashire Hotpot>',
      image: 'https://www.themealdb.com/images/media/meals/uttrxw1511637813.jpg'
    },
    {
      id: 3,
      name: '<Fluffy Pancakes>',
      image: 'https://www.themealdb.com/images/media/meals/rwuyqx1511383174.jpg'
    },
    {
      id: 4,
      name: '<Escovitch Fish>',
      image: 'https://www.themealdb.com/images/media/meals/1520084413.jpg'
    },
    {
      id: 5,
      name: '<Salmon Eggs Eggs Benedict>',
      image: 'https://www.themealdb.com/images/media/meals/1550440197.jpg'
    },
    {
      id: 6,
      name: '<Bread and Butter Pudding>',
      image: 'https://www.themealdb.com/images/media/meals/xqwwpy1483908697.jpg'
    },
    {
      id: 7,
      name: '<Beef Dumpling Stew>',
      image: 'https://www.themealdb.com/images/media/meals/uyqrrv1511553350.jpg'
    },
    {
      id: 8,
      name: '<>Tortang Talong>',
      image: 'https://www.themealdb.com/images/media/meals/va668f1683209318.jpg'
    }];

  return (
    <section id="featured-recipes">
      <h2>Featured Recipes</h2>
      {recipes.map((recipe) => (
        <div className="recipe-card" key={recipe.id}>
          <img src={recipe.image} alt={recipe.name} />
          <h3 className="name">{recipe.name}</h3>
        </div>
      ))}
    </section>
  );
};

export default FeaturedRecipes;