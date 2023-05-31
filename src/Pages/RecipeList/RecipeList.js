import React, { useContext ,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../../Context/AppContextProvider'
import RecipeCard from './RecipeCard'
import { Container } from './style'
import { SubTitle } from '../../Components/Categories/style'

const RecipeList = () => {
   const {state:{selectedCategory,recipeByCategory,recipes},dispatch}=useContext(AppContext)
   //const {category}=useParams()
   //console.log(category)
 useEffect(()=>{
  filterByCategory()
 },[selectedCategory])

 const filterByCategory=()=>
 {
  const filteredItems=recipes.filter(item=>item.strCategory===selectedCategory)
  dispatch({type:'LOAD_BY_CATEGORIES',payload:filteredItems})
 
 }
  return (
    <>
    
    {recipeByCategory?.length>0 ? (<SubTitle>{selectedCategory} Dishes</SubTitle>): (<h2 style={{color:'#5A5A5A',margin:'50px'}}>No Recipes To Show</h2>)}
    <Container>
      {recipeByCategory?.map(item=>{return <RecipeCard key={item.idMeal}   recipe={item} />})}
    </Container>
    </>
  )
}

export default RecipeList
