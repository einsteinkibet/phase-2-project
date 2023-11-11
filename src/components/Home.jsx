import React from 'react';
import '../App.css';

const Home = () => {
  return (
    <section className="hero">
      <img
        src="https://cms-b-assets.familysearch.org/dims4/default/4069e21/2147483647/strip/true/crop/800x500+0+0/resize/800x500!/format/webp/quality/90/?url=https%3A%2F%2Ffamilysearch-brightspot.s3.amazonaws.com%2F2d%2F7a%2Ff452bba9d5c8581030392bd4e252%2Fenglish-breakfast.jpg"
        alt=""
      />
      <div className="heros">
        <h1>TASTY TRACKS</h1>
        <p>Discover, Create, and Share Delicious Recipes</p>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <li>
          <a href="#recipes">
            <button className="heros-btn">Recipes</button>
          </a>
        </li>
      </div>
    </section>
  );
};

export default Home;