import React, { useContext } from 'react'
import {NavLink, useNavigate,} from 'react-router-dom';
import { RecipeCardContainer, Image,InfoContainer,Button,RecipeTitle} from './style';
import { AppContext } from '../../Context/AppContextProvider';


const FeaturedCard = ({recipe}) => {

    const {state:{recipes},dispatch}=useContext(AppContext)
    const navigate=useNavigate()

    const saveRecipe=()=>{
      const currentRecipe=recipes.find(item=>item.idMeal===recipe.idMeal)
      dispatch({type:'SAVE_THE_RECIPE',payload:currentRecipe})
      navigate(`/savedRecipes`)
    }
  return (
    <div>
       <RecipeCardContainer >            
            <Image src={recipe.strMealThumb} alt='' role='button' onClick={()=>{navigate(`/details/${recipe.idMeal}`)}}/>
           
            <InfoContainer>
                    <span style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                      <RecipeTitle>{recipe.strMeal}</RecipeTitle>
                      <Button id='save'  onClick={saveRecipe}>Save</Button>
                    </span>   
                    
                    <NavLink to={`${recipe.idMeal}`}>
                       <p>Full Recipe</p>                         
                    </NavLink>                      
            </InfoContainer>            
        </RecipeCardContainer>          
    </div>
  )
}

export default FeaturedCard
