import React, { useContext } from 'react'
import { AppContext } from '../../Context/AppContextProvider'
import { SubTitle } from '../../Components/Categories/style'
import SavedCard from '../SavedRecipes/SavedCard'
import { useNavigate } from 'react-router-dom'
import { ProfileContainer,ProfileHeader,Image,UserInfo,Container,BackButton} from './style'


const Profile = () => {
  const {state:{savedRecipes},user}=useContext(AppContext)
  const navigate=useNavigate()

  return (
    <>
             <ProfileContainer>
      <ProfileHeader>Profile Information:</ProfileHeader>
   
      <UserInfo>       
        <p style={{fontSize:'19px',margin:'10px'}}><strong>Name:</strong> {user.email.split('@')[0]}</p>
        <p style={{fontSize:'19px',margin:'10px'}}><strong>Email:</strong> {user.email}</p>
      </UserInfo>

      {savedRecipes?.length>0 ? (<SubTitle>My Saved List</SubTitle>): 
      (
      <>
      <h2 style={{color:'#5A5A5A',margin:'60px 20px'}}>Your List Is empty</h2>
     <BackButton onClick={()=>{navigate('/')}}>Back To Recipes</BackButton> 
      </>)}
    <Container>
       { savedRecipes?.map(item=>{return <SavedCard key={item.idMeal}  recipe={item}
                                                            />})
                                                            
                                                            
       }
        
    </Container>
      
      
         

    </ProfileContainer>
    </>
  )
}

export default Profile
