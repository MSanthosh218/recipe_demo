// import React from 'react'

// const Dishes = ({title ,image,ingredients = "N/A" ,onAddFavorite } ) => {
//   const handleOrder = ()=>{
//     alert("ordered")
//   }
//   return (
    
     
//       <div className=' relative flex ml-6 mb-6 flex-col rounded-3xl h-96 w-96 items-center justify-center bg-gradient-to-t from-yellow-300 to-red-300'>
//         <h1 className='text-red-600 text-3xl font-extrabold underline'>{title}</h1>
        
//         <img src={image} alt={title} className=' h-48 w-60
        
//         rounded-xl 
//         border
//         border-black 
//         mt-4 active:scale-150 
//         transition-transform duration-200
//         '/>
//         <div className='flex flex-col'>
//           <button onClick={handleOrder} className=" w-44 mt-2 bg-gradient-to-r from-green-500 via-orange-500 to-yellow-500 text-white font-bold py-2 px-4 rounded-lg hover:from-red-600 hover:via-orange-600 hover:to-yellow-600 transition duration-300">
//            Details
//           </button>
//           <button className="  w-44 mb-2  mt-2 bg-gradient-to-r from-blue-400 via-blue-500 to-green-200 text-white font-medium py-2 px-4 rounded-lg hover:from-blue-500 hover:via-blue-600 hover:to-purple-600 transition duration-300" onClick={onAddFavorite }>add_to_fav</button>

//         </div>
//       </div>
      
    
//   )
// }

// export default Dishes

import React from 'react';

const Dishes = ({ title, image, ingredients = 'N/A', onAddFavorite }) => {
  const handleOrder = () => {
    alert('ordered');
  };

  return (
    <div className="relative flex flex-col items-center justify-center rounded-3xl bg-gradient-to-t from-yellow-300 to-red-300 p-4 
      w-96 sm:w-72 md:w-80 max-sm:w-52  mb-6 ml-3 mr-3 h-auto shadow-lg">
      <h1 className="text-red-600 text-xl sm:text-2xl md:text-3xl font-extrabold underline mb-4">
        {title}
      </h1>

      <div className="w-full h-48 max-sm:w-40 max-sm:h-40 sm:h-60 md:h-72 overflow-hidden rounded-xl border border-black mt-4">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-200 active:scale-105"
        />
      </div>

      <div className="flex flex-col items-center mt-4">
        <button
          onClick={handleOrder}
          className="w-full sm:w-40 mt-2 bg-gradient-to-r from-green-500 via-orange-500 to-yellow-500 text-white font-bold 
          py-2 px-4 rounded-lg hover:from-red-600 hover:via-orange-600 hover:to-yellow-600 transition duration-300"
        >
          Details
        </button>
        <button
          onClick={onAddFavorite}
          className="w-full sm:w-40 mb-2 mt-2 bg-gradient-to-r from-blue-400 via-blue-500 to-green-200 text-white font-medium 
          py-2 px-4 rounded-lg hover:from-blue-500 hover:via-blue-600 hover:to-purple-600 transition duration-300"
        >
          Add to Favorites
        </button>
      </div>
    </div>
  );
};

export default Dishes;
