import React,{useContext} from 'react';
import { BannerContainer,SubTitle,FilterBox,Input,Button,Label,Select,FilterOption,Bottom,Form,Top} from './style';
import {  useNavigate } from 'react-router-dom';
import { AppContext } from '../../Context/AppContextProvider';


const Banner = () => {

  const {state:{recipes,selectedCategory,selectedCuisine,searchText},dispatch}=useContext(AppContext)
 
  const catg=[{id:1,title:'select'},{id:2,title:'Dessert'},{id:3,title:'Seafood'},{id:4,title:'Beef'},{id:5,title:'Chicken'},
  {id:6,title:'Vegetarian'},{id:7,title:'Pasta'},{id:8,title:'Goat'}]

  const cuisine=[{id:1,title:'select'},{id:2,title:'Indian'},{id:3,title:'Canadian'},{id:4,title:'Italian'},
  {id:5,title:'Egyptian'},{id:6,title:'Turkish'},{id:7,title:'British'},{id:8,title:'Japanese'}]
  const navigate=useNavigate()

    

const applyFilters=async(event)=>
{
  event.preventDefault();
  const filteredItems=recipes?.filter(item=>(item.strCategory===selectedCategory && item.strArea===selectedCuisine && item.strMeal.includes(searchText) ))
  dispatch({type:'FILTERED_RECIPES',payload:filteredItems})
  navigate('/recipe')
}
  

    return (
        <>
        <BannerContainer>            
          <SubTitle>Search the yummy recipes here..</SubTitle> 
          <Form onSubmit={applyFilters}>
            <Top>
            
            <FilterBox>
              <Label>Select Category</Label>
              <Select onChange={(event)=>dispatch({type:'SELECT_CATEGORY',payload:event.target.value})} >
              {catg.map(item=>{return <FilterOption  key={item.id} value={item.title}>{item.title}</FilterOption>})} 
             
              </Select>
            </FilterBox>
            <FilterBox>
              <Label>Select Cuisine</Label>
              <Select onChange={(event)=>dispatch({type:'SELECT_CUISINE',payload:event.target.value})}>
              {cuisine.map(item=>{return <FilterOption  key={item.id}value={item.title}>{item.title}</FilterOption>})}              
              </Select>
            </FilterBox>
            <FilterBox>
              <Label>Search By Name,Ingredients.. </Label>
              <Input type='text' placeholder='Search here...' onChange={(event)=>dispatch({type:'SEARCH_TEXT',payload:event.target.value})}/>
            </FilterBox>
            </Top> 
            <Bottom>
           <Button type='submit'>Apply Filters</Button>
           </Bottom>
          </Form>  
        </BannerContainer>
        </>
    );
}

export default Banner;