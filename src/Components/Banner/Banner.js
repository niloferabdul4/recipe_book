import React,{useContext} from 'react';
import { BannerContainer,SubTitle,FilterBox,Input,Button,Label,Select,FilterOption,Bottom,Form,Top,SearchButton,SearchBox} from './style';
import {  useNavigate } from 'react-router-dom';
import { AppContext } from '../../Context/AppContextProvider';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Banner = () => {

  const {state:{recipes,selectedCategory,selectedCuisine,searchText,ingredients},dispatch}=useContext(AppContext)
  const catg=[{id:1,title:'select'},{id:2,title:'Dessert'},{id:3,title:'Seafood'},{id:4,title:'Beef'},{id:5,title:'Chicken'},
  {id:6,title:'Vegetarian'},{id:7,title:'Pasta'},{id:8,title:'Goat'}]

  const cuisine=[{id:1,title:'select'},{id:2,title:'Indian'},{id:3,title:'Canadian'},{id:4,title:'Italian'},
  {id:5,title:'Egyptian'},{id:6,title:'Turkish'},{id:7,title:'British'},{id:8,title:'Japanese'}]

 
  const navigate=useNavigate()


const applyFilters=async(event)=>
{
  event.preventDefault();
  const filteredItems=recipes?.filter(item=>(item.strCategory===selectedCategory && item.strArea===selectedCuisine )  )
  dispatch({type:'FILTERED_RECIPES',payload:filteredItems})
  navigate('/recipe')
}
  

const searchItem=async()=>
{ 
  
  const filteredItems=recipes.filter(item=>item.strMeal.toLowerCase().includes(searchText.toLowerCase()) || item.strInstructions.toLowerCase().includes(searchText.toLowerCase())  )
  console.log(filteredItems)
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
            
            </Top> 
            <Bottom>
           <Button type='submit'>Apply Filters</Button>
           <SearchBox > 
                <Label> Search By Name / Ingredients</Label>  
                <span style={{display:'flex',flexDirection:'row',width:'80%',position:'relative'}}>                                  
                <Input type='search' id='search' value={searchText}  onChange={(event)=>dispatch({type:'SEARCH_TEXT',payload:event.target.value})} />
                <SearchButton onClick={searchItem}>
                    <SearchOutlinedIcon size={20} />
                </SearchButton>                            
                </span>
              </SearchBox>          
           </Bottom>
          </Form>  
        </BannerContainer>
        </>
    );
}

export default Banner;