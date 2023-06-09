import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../../Context/AppContextProvider'
import Header from '../../Components/Header/Header'
import Sidebar from '../../Components/Sidebar/Sidebar'
import { Container,ImageContainer,Image,InfoContainer,Title,Description,Ingredients,Span,Source,SaveBtn} from './style'
const SingleRecipe = () => {
  const [singleRecipe,setSingleRecipe]=useState({})
  
  const {state:{recipes},dispatch}=useContext(AppContext)
  const {id}=useParams()
  const navigate=useNavigate()

  useEffect(()=>{
    id && getRecipeDetails()
 
  },[id])


  const getRecipeDetails=()=>
   {
    const singleRecipe=recipes.filter(item=>item.idMeal===id)
    setSingleRecipe(singleRecipe)
  
    }

  const saveRecipe=()=>{
   
    dispatch({type:'SAVE_THE_RECIPE',payload:singleRecipe[0]})
    navigate(`/savedRecipes`)
  }


  return (
    <div>
       <Header/>
       <Sidebar/>
       <Container  >                 
                <ImageContainer>
                    <Image src={singleRecipe[0]?.strMealThumb} alt='' />                    
                </ImageContainer>

                 <InfoContainer>
                        <Title>{singleRecipe[0]?.strMeal}</Title>
                        <Span >
                          <p>Category: {singleRecipe[0]?.strCategory}</p>
                     
                          <p>Cuisine: {singleRecipe[0]?.strArea}</p>                       
                         
                        </Span>
                        <Ingredients> Ingredients:
                          <ul>
                              <li>{singleRecipe[0]?.strIngredient1}: {singleRecipe[0]?.strMeasure1}</li>
                              <li>{singleRecipe[0]?.strIngredient2}: {singleRecipe[0]?.strMeasure2}</li>
                              <li>{singleRecipe[0]?.strIngredient2}: {singleRecipe[0]?.strMeasure3}</li>
                              <li>{singleRecipe[0]?.strIngredient4}: {singleRecipe[0]?.strMeasure4}</li>
                              <li>{singleRecipe[0]?.strIngredient5}: {singleRecipe[0]?.strMeasure5}</li>
                              <li>{singleRecipe[0]?.strIngredient6}: {singleRecipe[0]?.strMeasure6}</li>
                          
                          </ul>
                       
                        </Ingredients>
                        <Description><strong >Description: </strong>{singleRecipe[0]?.strInstructions}</Description>    
                        <Source>Source: {singleRecipe[0]?.strSource}</Source>  
                        <SaveBtn onClick={saveRecipe}>Save The Recipe</SaveBtn>              
                 </InfoContainer> 
                         
           </Container>
    </div>
  )
}

export default SingleRecipe
