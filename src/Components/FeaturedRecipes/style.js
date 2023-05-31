import styled from "styled-components";
import { mobile } from "../../Responsive";

export const FeaturedContainer=styled.div`
display:grid;
grid-template-columns: repeat( auto-fit, minmax(240px, 1fr) );
grid-column-gap:20px;
z-index: 1;      
margin-left: 60px;
margin-right: 60px;  
max-width  :100% ;
padding: 10px;
margin-bottom: 50px;
${mobile({flexDirection:"column",padding:'0px', margin:'20px 1px'})}
`


export const RecipeCardContainer=styled.div`    
    margin:40px;
    padding-bottom:20px;
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    //border:0.5px solid lightgrey;
    box-shadow: rgba(53, 48, 48, 0.15) 1.95px 1.95px 2px;
    background-color: white;
    z-index: 1;
    height:300px;
    max-height: 400px;
    width:260px;
    max-width: 300px;  
    color:rgba(0,0,0,0.7); 
    position:relative;
    transition: 0.3s;
    cursor:pointer;
    &:hover{
        box-shadow: 0 0 20px 0 rgb(112 121 138 / 18%);
        cursor: pointer;
    }
    ${mobile({ height:'340px',maxWidth:'175px',margin:'2px',boxShadow:'none',padding:'2px'})}
`


export const Image=styled.img`
    object-fit: cover;
    width:100%;
    height:60%; 
    margin-bottom:10px;
    ${mobile({ width:'100%',height:'140px',marginBottom:'10px'})}
    `

export const InfoContainer=styled.div`
    margin:0px 10px;
    display:flex;
    flex-direction:column;  
   width:90%;
    ${mobile({margin:'0px 10px'})}
`
 

export const RecipeTitle=styled.p`
    font-size:19px;
    font-weight:600;
    margin:15px 0px;
    display: -webkit-box;
    overflow: hidden;
      -webkit-line-clamp: 1;
   -webkit-box-orient: vertical;    
    ${mobile({margin:'0px',fontSize:'15px'})}

`

export const Button=styled.button`
  border:none;
  opacity:0.8;
  background-color:${props=>props.id==='save' ? '#3b5998': 'orangered'};
  color:white;
  padding: 8px;
  border-radius: 4px;
  font-size: 16px;
  margin-left:0px 10px ;
  ${mobile({fontSize:'12px',padding:'6px'})}
`