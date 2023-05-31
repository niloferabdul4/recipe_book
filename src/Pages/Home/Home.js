import React, { useContext } from 'react'
import Categories from '../../Components/Categories/Categories'
import FeaturedRecipes from '../../Components/FeaturedRecipes/FeaturedRecipes'
import Banner from '../../Components/Banner/Banner'


const Home= () => {
  
  return (
    <div>   
      <Banner /> 
     <Categories/>
    <FeaturedRecipes/>
    
    </div>
  )
}

export default Home;
