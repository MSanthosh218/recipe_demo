
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DetailsOfrecipe = () => {
    const [recipe, setRecipe] = useState(null); 
    const { id } = useParams();
    console.log(id)

    const fetchRecipeDetails = async () => {
        if (!id) return;
        try {
            const api = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`; 
            const res = await axios.get(api);
            setRecipe(res.data.meals ? res.data.meals[0] : null); 
        } catch (error) {
            console.error("Something went wrong:", error);
        }
    };

    useEffect(() => {
        fetchRecipeDetails();
    }, [id]);

    if (!recipe) {
        return <div>................loading.....................</div>; 
    }

    return (
        <div className="flex items-center justify-center flex-col">
            <img src={recipe.strMealThumb} alt={recipe.strMeal} className="w-full sm:w-72 md:w-80 lg:w-80 xl:w-96 max-sm:w-60" />
            <h2 className="recipe-title">{recipe.strMeal}</h2>
            <p><strong>Area:</strong> {recipe.strArea}</p>
            <p><strong>Main Ingredient:</strong> {recipe.strCategory}</p>
            <h3> <strong>Instructions:</strong></h3>
            <p>{recipe.strInstructions}</p>
            
        </div>
    );
};

export default DetailsOfrecipe;

