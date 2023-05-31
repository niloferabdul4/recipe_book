import React,{useContext, useEffect, useState} from 'react'

import { FeaturedContainer } from './style'
import settings from './Settings';
import Slider from 'react-slick';
import FeaturedCard from './FeaturedCard';
import { SubTitle } from '../Banner/style';
import { AppContext } from '../../Context/AppContextProvider';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Featured = () => {
 const {state:{recipes},dispatch}=useContext(AppContext)


  return (
    <>
    <SubTitle>Popular Recipes</SubTitle>
    <FeaturedContainer>
     
     <Slider {...settings} >        
     {recipes?.map(item=>{return <FeaturedCard key={item.idmeal} recipe={item}/>})}
     </Slider>
    </FeaturedContainer>
    </>
  )
}

export default Featured
