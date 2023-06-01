import React, { useContext } from 'react'
import { AppContext } from '../../Context/AppContextProvider'
import { SidebarContainer,NavList,NavBarLink } from './style'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {
   const {state:{menuOpen},dispatch}=useContext(AppContext)
   const navigate=useNavigate()

    const menuItems=[{id:1,title:'Home',path:'/'},
                    {id:2,title:'Saved Recipes',path:'/savedRecipes'},
                    {id:3,title:'Desserts',category:'Dessert',path:'/category/Dessert'},
                    {id:4,title:'Chicken',category:'Chicken',path:'/category/Chicken'},
                    {id:5,title:'SideDishes',category:'Side',path:'/category/Side'},
                    {id:6,title:'Desserts',category:'Dessert',path:'/category/Dessert'},
                    {id:7,title:'Vegetarian',category:'Vegetarian',path:'/category/Vegetarian'},
                    {id:8,title:'Beef',category:'Beef',path:'/category/Beef'},
                    {id:9,title:'Seafood',category:'Seafood',path:'/category/Seafood'},
                    ]


    const handleClick=(item)=>
    {
             dispatch({type:'SELECT_CATEGORY',payload:item.category})
             navigate(`/category/${item.category}`)
             dispatch({type:'SHOW_MENUBAR'})
    }
  return (
    <>
       {menuOpen && <SidebarContainer id='sidebar'>

          {menuItems.map(item=>{return <>
        
            <NavList>
                <NavBarLink to={item.path} onClick={()=>handleClick(item)}>{item.title}</NavBarLink>
            </NavList>
          
          
          </>})}
          
        
         </SidebarContainer>
}
    </>
  )
}

export default Sidebar