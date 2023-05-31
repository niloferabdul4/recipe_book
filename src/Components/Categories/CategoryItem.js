
import React from 'react';
import { CategoryImage,CategoryName,Span } from './style';
import { useContext } from 'react';
import { AppContext } from '../../Context/AppContextProvider';
import { useNavigate } from 'react-router-dom';


const CategoryItem = ({category,thumbnail}) => {

    const {dispatch}=useContext(AppContext)
    const navigate=useNavigate()


    const handleClick=()=>{
          dispatch({type:'SELECT_CATEGORY',payload:category})
          navigate(`/category/${category}`)
    }
     return (        
        <Span role='button' onClick={handleClick}>
            <CategoryImage src={thumbnail} />
            <CategoryName>{category}</CategoryName>            
        </Span>
     
    );
}

export default CategoryItem;
