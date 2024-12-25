import React from 'react'

const Dishes = ({title ,image,ingredients = "N/A" ,onAddFavorite } ) => {
  const handleOrder = ()=>{
    alert("ordered")
  }
  return (
    
     
      <div className=' relative flex ml-6 mb-6 flex-col rounded-3xl h-96 w-96 items-center justify-center bg-gradient-to-t from-yellow-300 to-red-300'>
        <h1 className='text-red-600 text-3xl font-extrabold underline'>{title}</h1>
        
        <img src={image} alt={title} className=' h-48 w-60
        
        rounded-xl 
        border
        border-black 
        mt-4 active:scale-150 
        transition-transform duration-200
        '/>
        <div className='flex flex-col'>
          <button onClick={handleOrder} className=" w-44 mt-2 bg-gradient-to-r from-green-500 via-orange-500 to-yellow-500 text-white font-bold py-2 px-4 rounded-lg hover:from-red-600 hover:via-orange-600 hover:to-yellow-600 transition duration-300">
           Details
          </button>
          <button className="  w-44 mb-2  mt-2 bg-gradient-to-r from-blue-400 via-blue-500 to-green-200 text-white font-medium py-2 px-4 rounded-lg hover:from-blue-500 hover:via-blue-600 hover:to-purple-600 transition duration-300" onClick={onAddFavorite }>add_to_fav</button>

        </div>
      </div>
      
    
  )
}

export default Dishes