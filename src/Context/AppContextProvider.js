import axios from 'axios'
import React, { useState,createContext, useEffect, useReducer } from 'react'
import reducer from './reducer'
import { onAuthStateChanged } from 'firebase/auth'
import auth from '../Firebase/Firebase'
export const AppContext=createContext()

const AppContextProvider = ({children}) => {
   
    useEffect(()=>{

        fetchRecipes();
        fetchCategories();
        getUser()
    },[])

    const fetchRecipes=async ()=>{
        try{
            const recipes= await axios.get(' https://www.themealdb.com/api/json/v1/1/search.php?s=')
           
            dispatch({type:'LOAD_RECIPES',payload:recipes.data.meals})
           
        }
        
        catch(error)
        {
           console.log(error.message)
        }
    }

    const fetchCategories=async()=>{
      try{
        const categories=await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
        dispatch({type:'LOAD_CATEGORIES',payload:categories.data.categories})
      }
      catch(error)
      {
        console.log(error.message)
      }
    }
  
    const getUser=()=>{
      onAuthStateChanged(auth,authUser=>{
        if(authUser)
        {
          dispatch({type:'SET_USER',payload:{email:authUser.email,displayName:authUser.displayName}})
        }
        else
        {
          dispatch({type:'SET_USER',payload:null})
        }
      })
    }
 
    const initialState={recipes:[],
                        recipeByCategory:[],
                        categories:[],
                        selectedCategory:'',
                        selectedCuisine:'', 
                        searchText:'',
                        filteredItems:[],
                        savedRecipes:[],
                        user:{},
                        menuOpen:false
                       }

    const [state,dispatch]=useReducer(reducer,initialState)
  return (
    <>
      <AppContext.Provider value={{state,dispatch}}>
        {children}
      </AppContext.Provider>
    </>
      
  
  )
}

export default AppContextProvider
