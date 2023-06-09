import React, { useContext } from 'react'
import { AppContext } from '../../Context/AppContextProvider'
import SavedCard from './SavedCard'
import { SubTitle } from '../../Components/Categories/style'
import { Container } from '../RecipeList/style'
import { useNavigate } from 'react-router-dom'
import { BackButton } from '../ProfilePage/style'
import Header from '../../Components/Header/Header'
import Sidebar from '../../Components/Sidebar/Sidebar'

const SavedRecipes = () => {

    const {state:{savedRecipes}}=useContext(AppContext)
    const navigate=useNavigate()
  return (
    <div>
       <Header/>
       <Sidebar/>
       {savedRecipes?.length>0 ? (<SubTitle>Saved Recipes</SubTitle>): 
       (
        <>
         <h3 style={{color:'#5A5A5A',margin:'50px'}}>No Recipies To Show</h3>
        <BackButton onClick={()=>{navigate('/')}}>Back To Recipes</BackButton> 
        </>
      )}
    <Container>
       { savedRecipes?.map(item=>{return <SavedCard key={item.idMeal}  recipe={item}
                                                            />})
                                                            
                                                            
       }
        
    </Container>
    </div>
  )
}

export default SavedRecipes
