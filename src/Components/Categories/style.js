import styled from "styled-components";
import { mobile } from "../../Responsive";

export const CategoryContainer=styled.div`
       
        background-color: rgba(0, 0, 0, 0.10);
        margin:50px 100px;;
        border-radius: 3px;
        display:grid;
        grid-template-columns: repeat( auto-fit, minmax(170px, 1fr) );
        grid-gap:50px;
        ${mobile({
        display:'grid',
        gridTemplateColumns:'repeat(5,1fr)',
        padding:'10px'
    })}
 

`

export const SubTitle=styled.h2`
    margin-top:50px;
    margin-bottom:10px;
    ${mobile({ fontSize:'18px',margin:'10px'})}
`

export const Span=styled.span`
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin:10px;
        height:220px;
        width:200px;
        border:0.2px solid lightgrey;
        padding:20px;
        box-shadow: rgba(99, 99, 99, 0.09) 0px 2px 8px 0px;
        background-color:white;
        
        &:hover{
            transform:scale(1.08);
            transition:transform 0.8s ease;
        }
        ${mobile({
      margin:'2px'

    })}

`

export const CategoryImage=styled.img`
        height:200px;
        width:200px;
        cursor: pointer;
        ${mobile({
        height:'100px',
        width:'100px'

    })}


`
export const CategoryName=styled.p`
font-size: 18px;
margin:10px;
${mobile({
       fontSize:'14px'
    })}

`