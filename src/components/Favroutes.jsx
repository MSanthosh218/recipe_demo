// import React from 'react'

// const Favroutes = () => {
//   return (
//     <div className='flex flex-col items-center justify-center '>
//         <h2>name</h2>
//         <img src="" alt="" className='h-56 w-56 border border-black rounded' />
//         <button className='w-40 mt-2 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 text-white font-bold py-2 px-4 rounded hover:from-red-600 hover:via-orange-600 hover:to-yellow-600 transition duration-300'>buy-now</button>

//     </div>
//   )
// }

// export default Favroutes

import React, { useState } from 'react';


const Favroutes = ({ favRecipes }) => {
    const [quantity, setquantity] = useState(0)
    const min = ()=>{
        setquantity(quantity-1)
    }
    const max = ()=>{
        setquantity(quantity+1)
    }
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold underline mb-4">Favorites</h2>
      <div className="flex flex-wrap flex-col gap-4 justify-center">
        {favRecipes.length > 0 ? (
          favRecipes.map((recipe) => (
            <div key={recipe.idMeal} className="flex flex-col items-center">
              <h3 className="font-bold">{recipe.strMeal}</h3>
              <img
                src={recipe.strMealThumb}
                alt={recipe.strMeal}
                className="h-56 w-56 border border-black rounded mb-2"
              />
              <div>
                <h2>Quantitiy : </h2>
                <button onClick={min} className='font-extrabold text-2xl'> - </button>
                <input type="text" value={quantity} className='w-14 h-8 border rounded border-black p-1 ml-3 mr-3' />
                <button onClick={max} className='font-extrabold text-2xl'> + </button>
              </div>
              <button
                className="w-40 mt-2 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 text-white font-bold py-2 px-4 rounded hover:from-red-600 hover:via-orange-600 hover:to-yellow-600 transition duration-300"
                onClick={() => alert("ordered")}
              >
                order
              </button>
              <hr className="border-t border-gray-400 border-dashed my-4"/>

            </div>
          ))
        ) : (
          <p className="text-gray-500">No favorites yet!</p>
        )}
      </div>
    </div>
  );
};

export default Favroutes;
