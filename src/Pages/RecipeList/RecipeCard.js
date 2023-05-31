import React, { useContext } from 'react'
import { Card,Image,InfoContainer ,Name,Span,Country,BtnContainer,Button, Description} from './style';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../Context/AppContextProvider';

const RecipeCard = ({recipe}) => {
    
    const {state:{recipes},dispatch}=useContext(AppContext)
    const navigate=useNavigate()

    const saveRecipe=(recipe)=>
    {
        const currentRecipe=recipes.find(item=>item.idMeal===recipe.idMeal)
        dispatch({type:'SAVE_THE_RECIPE',payload:currentRecipe})
        navigate(`/savedRecipes`)
      }

  return (
    <>
       <Card   >                       
        <Image src={recipe.strMealThumb} alt=''  role='button' onClick={()=>{navigate(`/details/${recipe.idMeal}`)}}/>      
                <InfoContainer> 
                    <span style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                      <Name>{recipe.strMeal}</Name>  
                      <Button id='save' onClick={()=>saveRecipe(recipe)} >Save</Button>
                    </span>                        
                    <span style={{display:'flex',flexDirection:'column',alignItems:'flex-start',justifyContent:'flex-start'}}>
                      <Country>Cuisine: {recipe.strArea}</Country>
                      <Description>{recipe.strInstructions}</Description>
                    </span> 
                    <BtnContainer> 
                            
                  <Button onClick={()=>{navigate(`/details/${recipe.idMeal}`)}}>View More</Button> 
                  <Span id={recipe.strCategory}>{recipe.strCategory}</Span>
                </BtnContainer>
                </InfoContainer>
               
        </Card>       
    </>
  )
}

export default RecipeCard
