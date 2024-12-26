import axios from 'axios'
import './App.css'
import Dishes from './components/Dishes'
import Header from './components/Header'
import { useState ,useEffect} from 'react'
import Footer from './components/Footer'
import Favroutes from './components/Favroutes'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  const [Recipes, setRecipes] = useState([])
  const [searchrecipes, setsearchrecipes] = useState("")
  const [fav, setfav] = useState([])

  
  const addToFavorites = (recipe) => {
    if (!fav.find((item) => item.idMeal === recipe.idMeal)) {
      setfav((prevFav) => [...prevFav, recipe]);
    }
  };
  const fetchRecipes = async () => {
    try {
      const api = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchrecipes}`;
      const res = await axios.get(api);
      const resJson = res.data;

      if (resJson.meals) {
        setRecipes(resJson.meals); 
      } else {
        
        const api2 = "https://www.themealdb.com/api/json/v1/1/search.php?s=chicken";
        const defaultRes = await axios.get(api2);
        const defaultData = defaultRes.data.meals ? defaultRes.data.meals : []; 
        setRecipes(defaultData); 
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  useEffect(() => {
      fetchRecipes();
      // console.log(Recipes)
    }, [searchrecipes]);
  
  return (
    <>
      <div className='fixed w-full z-10 top-0'>
        <Header setsearchrecipes={setsearchrecipes} countOfItems = {fav.length} />
      </div>
      <div className='flex items-center justify-center'>
        <h1 className=' font-extrabold text-lime-500 text-3xl underline mt-40 mb-7 max-sm:text-xl sm:text-xl md:text-2xl ' > dishes </h1>
      </div>
      <div className='flex flex-col items-center justify-center flex-grow mb-20 '>
      <Routes>
          <Route
            path="/"
            element={
              <div className="flex flex-row flex-wrap items-center justify-center ">
                {Recipes.map((recipe) => (
                  <Dishes
                    key={recipe.idMeal}
                    title={recipe.strMeal}
                    image={recipe.strMealThumb}
                    ingredients={recipe.strIngredients || 'N/A'}
                    onAddFavorite={() => addToFavorites(recipe)} 
                  />
                ))}
              </div>
            }
          />
          <Route path="/favorites" element={< Favroutes favRecipes={fav}  />} />
        </Routes>

{/*          
         {Recipes.map(function(user) {
            return <Dishes key={user.idMeal}
              title={user.strMeal}
              image={user.strMealThumb  }
              ingredients={user.strIngredients || "Non-Veg"}
              onAddFavorite={() => addToFavorites(user)}
            />
          ;
              
          })} */}
      </div>
      {/* <div className=' mt-28'>
         <Favroutes favRecipes={fav} />
      </div> */}
      <div  className='  rounded-lg shadow-md fixed bottom-0 w-full'>
        <Footer />
      </div>
      <div></div>
      

      
    </>
  )
}

export default App
