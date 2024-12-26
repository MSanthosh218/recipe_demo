import React, { useState } from 'react'
import { Link } from 'react-router-dom';


const Header = ({ setsearchrecipes , countOfItems}) => {
  const [searchInput, setSearchInput] = useState("");
  const handlesubmit =()=> {
    if (searchInput){
      setsearchrecipes(searchInput)
    }
  }

  return (
    <div className='p-6 flex items-center justify-between bg-gray-200'>
        <div>
            <h2 className='text-3xl sm:text-2xl md:text-2xl max-sm:text-2xl text-gray-900 font-extrabold'>logo</h2>
        </div>

        <div> 
            <input className='rounded-full h-11 max-sm:w-32 max-sm:pl-5 w-80 pl-12 pr-4 bg-purple-100 shadow-lg outline-none focus:ring focus:ring-purple-400  ' 
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)} 
            placeholder=' search ....' /> 
            <button className='pl-2 pr-1 rounded-full ml-2 cursor-pointer border h-11 shadow-lg focus:ring-2 focus:ring-pink-400 bg-blue-300' 
            onClick={handlesubmit}>search</button>
        </div>
        <div className='flex '>
        <Link to="/favorites" className="flex items-center text-xl font-bold text-blue-600">
          <span className="hidden sm:inline">Favorites ({countOfItems})</span>
          <span className="sm:hidden text-2xl text-yellow-400 ml-2">&#9733;</span>
</Link>
        </div>
    
  </div>
  )
}

export default Header