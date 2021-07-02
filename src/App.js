import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () => {

  const APP_ID = '6cf9209d';
  const APP_KEY = '969bc51d74b327faaecf78bab216ac8b';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(req);
    const data = await response.json();
    setRecipes(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  const req = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  return (
    <div className="App">
      <h1 className='appTitle'>
        Find your food
      </h1>
      <form 
        onSubmit={getSearch}
        className='search-form'>
        <input className='search-bar' type='text' value={search}
          onChange={updateSearch}
        />
        <button className='search-btn' type='submit'>Search</button>
      </form>
      <div className='recipes'>
        {recipes.map(recipe => (
          <Recipe 
          key={recipe.recipe.label}
          title={recipe.recipe.label} 
          calories={recipe.recipe.calories} 
          mealType={recipe.recipe.mealType}
          dishType={recipe.recipe.dishType}
          image={recipe.recipe.image} 
          ingredients={recipe.recipe.ingredients}/>
        ))}
      </div>
      
    </div>
  );
}

export default App;
