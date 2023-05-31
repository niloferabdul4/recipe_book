import React, { useContext ,useEffect} from 'react'
import RecipeCard from '../RecipeList/RecipeCard'
import { AppContext } from '../../Context/AppContextProvider'
import { Container } from '../RecipeList/style'
import { SubTitle } from '../../Components/Categories/style'

const FilteredRecipes= () => {
   const {state:{filteredItems}}=useContext(AppContext)

  return (
    <>
    
    {filteredItems?.length>0 ? (<SubTitle>Filtered Recipes</SubTitle>): (<h2 style={{color:'#5A5A5A',margin:'50px'}}>No Recipes To Show</h2>)}
    <Container>
      {filteredItems?.map(item=>{return <RecipeCard key={item.idMeal}   recipe={item} />})}
    </Container>
    </>
  )
}
export default FilteredRecipes