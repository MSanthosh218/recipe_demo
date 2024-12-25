import React from 'react'

const Dishes = ({title ,image,ingredients = "N/A" ,onAddFavorite } ) => {
  const handleOrder = ()=>{
    alert("ordered")
  }
  return (
    <div className='flex '>
     
      <div>
        
        <img src={image} alt={title} className=' h-60 w-60
        ml-
        rounded-xl 
        border
        border-black 
        mt-4 active:scale-150 
        transition-transform duration-200
        '/>
      </div>
      <div className=' relative flex flex-col mt-4 ml-11 h-60 w-96  items-center '>
        <h1 className='text-red-600 text-3xl font-extrabold underline'>{title}</h1>
        <h4 className='font-bold mt-8 '>Main Ingredients: {ingredients ? ingredients : "N/A"}</h4>
        <h2 className='font-bold mt-8'>$50.00</h2>
        <div>
        <button onClick={handleOrder} className=" w-44 absolute bottom-0 left-0 ml-2 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 text-white font-bold py-2 px-4 rounded hover:from-red-600 hover:via-orange-600 hover:to-yellow-600 transition duration-300">
  Order Now
</button>

          <button className="  w-44 absolute bottom-0 right-0  mr-2 bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500 text-white font-medium py-2 px-4 rounded hover:from-blue-500 hover:via-blue-600 hover:to-purple-600 transition duration-300" onClick={onAddFavorite }>add_to_fav</button>

        </div>
      </div>
    </div>
  )
}

export default Dishes