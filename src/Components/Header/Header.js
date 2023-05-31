import React, { useContext } from 'react'
import './style'
import { HeaderContainer,Logo,LeftWrapper,RightWrapper,Links} from './style'
import { signOut } from 'firebase/auth'
import auth from '../../Firebase/Firebase'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../../Context/AppContextProvider'
import MenuIcon from '@mui/icons-material/Menu';


const Header = () => {
    const navigate=useNavigate()
    const {setMenuOpen,user,dispatch}=useContext(AppContext)
   
    const lists=[{id:1,title:'Home',path:'/'},
                 {id:2,title:'Saved Recipes' ,path:'/savedRecipes'},
                 {id:3,title:'Profile' ,path:'/profile'},
                
]


const logoutFn=()=>{
  signOut(auth)
  navigate('/login')
}
  return (
    <>
 <HeaderContainer>
             <LeftWrapper>
             <Logo>Recipes App</Logo>
                       
              </LeftWrapper>
              <RightWrapper>
                {lists.map(item=>{return <>
                  <Links to={item.path}>{item.title}</Links>
                
                </>})}
                {!user?
                    (
                    <>
                    <Links to='/login'>Login</Links>
                    <Links to='/register'>Register</Links>
                    </>
                    )
                    :
                    (<Links  to='/login' onClick={logoutFn}>Logout</Links>)
                   }  
                    <MenuIcon   style={{cursor:'pointer'}} onClick={()=>setMenuOpen(menuOpen=>!menuOpen)}/>    
              </RightWrapper>      
      </HeaderContainer>    
    </>
  )
}

export default Header