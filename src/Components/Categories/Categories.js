import React, { useContext } from 'react';
import CategoryItem from './CategoryItem';
import { CategoryContainer,SubTitle} from './style';
import { useState,useEffect } from 'react';
import { AppContext } from '../../Context/AppContextProvider';


const Categories = () => {   

    const {state:{categories},dispatch}=useContext(AppContext)
/*
    useEffect(()=>{fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
                        .then((res)=>res.json())
                        .then(data=>dispatch({type:'LOAD_CATEGORIES',payload:data.categories}))
             }, [])
*/

    return (
        <>
        <SubTitle>Categories</SubTitle>
        <CategoryContainer>
                
                { categories?.map(item=>{return( <CategoryItem key={item.idMeal}
                                                              id={item.idCategory}
                                                              category={item.strCategory}
                                                              thumbnail={item.strCategoryThumb}
                                                            
                />)})
        }  
    
        </CategoryContainer>
       </>

    );
}

export default Categories;
