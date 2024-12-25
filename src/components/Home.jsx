import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Dishes from '../components/Dishes';

const Home = ({ addToFavorites }) => {
  const [Recipes, setRecipes] = useState([]);
  const [searchrecipes, setSearchRecipes] = useState('');

  const fetchRecipes = async () => {
    try {
      const api = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchrecipes}`;
      const res = await axios.get(api);
      const resJson = res.data;

      if (resJson.meals) {
        setRecipes(resJson.meals);
      } else {
        const api2 = 'https://www.themealdb.com/api/json/v1/1/search.php?s=chicken';
        const defaultRes = await axios.get(api2);
        const defaultData = defaultRes.data.meals || [];
        setRecipes(defaultData);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, [searchrecipes]);

  return (
    <div className="flex flex-wrap justify-center mb-10">
      {Recipes.map((recipe) => (
        <Dishes
          key={recipe.idMeal}
          title={recipe.strMeal}
          image={recipe.strMealThumb}
          ingredients={recipe.strCategory || 'N/A'}
          onAddFavorite={() => addToFavorites(recipe)}
        />
      ))}
    </div>
  );
};

export default Home;
