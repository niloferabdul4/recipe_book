import React, { useContext } from 'react'
import Categories from '../../Components/Categories/Categories'
import FeaturedRecipes from '../../Components/FeaturedRecipes/FeaturedRecipes'
import Banner from '../../Components/Banner/Banner'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Header from '../../Components/Header/Header'


const Home= () => {
  
  return (
    <div> 
       <Header/>
       <Sidebar/>
      <Banner /> 
     <Categories/>
    <FeaturedRecipes/>
    
    </div>
  )
}

export default Home;
