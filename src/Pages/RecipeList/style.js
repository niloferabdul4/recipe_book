import styled from "styled-components"
import { mobile } from "../../Responsive"


export const Container=styled.div`
    display:grid;
    grid-template-columns: repeat( auto-fit, minmax(360px, 1fr) );
    grid-gap:50px;
    z-index: 1;   
    margin:60px 120px;    
    
    
`


export const Card=styled.div`    
    margin:20px;
    display:flex;
    flex-direction: column;
    align-items: center;
    //border:0.5px solid lightgrey;
    background-color: white;
    z-index: 1;
    height:500px;
    max-height: 600px;
    width:360px;
    max-width: 400px;  
    color:rgba(0,0,0,0.7)
    cursor:pointer; 
    position:relative;
    box-shadow: 0 0 20px 0 rgb(112 121 138 / 18%); 
    
    ${mobile({ flexDirection:'row',maxHeight:'260px',maxWidth:'360px',margin:'0px',marginBottom:'10px',boxShadow:'none',padding:'0px'})}
`

export const Image=styled.img`
    object-fit: cover;
    width:100%;
    height:50%;   
    ${mobile({ width:'140px',height:'180px',marginBottom:'10px'})}
    `


export const InfoContainer=styled.div`
    display:flex;   
    flex-direction:column;   
    margin: 0px 10px;  
    padding:10px 20px;
    gap:10px;
    width:100%;
    ${mobile({ padding:'0px',margin:'8px 10px'})}
   
 
`

export const Name=styled.p`
    font-size:22px;
    font-weight:600;
    margin:15px 0px;
    ${mobile({margin:'0px',fontSize:'15px'})}

`


export const Description=styled.div`
    font-size:17px;
    margin:10px 0px;
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;   
    text-align:justify;
    ${mobile({ fontSize:'14px',margin:'0px'})}  
`


export const Span =styled.div`
    padding: 8px;
    border-radius: 4px;
    font-weight: 600;
    font-size: 16px;
    display: inline-block;
    position:absolute;
    top:0;
    right:10px;
    background-color:green;
    color:white;
    opacity:0.8;
   
  `


export const Category=styled.div`
    padding: 8px;
    border-radius: 4px;
    font-weight: 600;
    font-size: 16px;
    display: inline-block;
    position:absolute;
    top:240px;
    left:10px;
    background-color:yellow;
    opacity:0.8;
    ${mobile({ display:'none'})}


`
 export const Country=styled.p`
    font-size:18px;
 ${mobile({fontSize:'14px'})}
 
 `

 export const BtnContainer=styled.div`
  display:flex;
  flex-direction:row;
  margin:20px 0px;
  
  h3{
    font-size:17px;
    
  }
  ${mobile({margin:'6px 2px'})}
  `
export const Button=styled.button`
  border:none;
  opacity:0.8;
  background-color:${props=>props.id==='save' ? '#3b5998': 'orangered'};
  color:white;
  padding: 8px;
  border-radius: 4px;
  font-size: 16px;
  cursor:pointer;
  ${mobile({fontSize:'12px',padding:'6px'})}
`