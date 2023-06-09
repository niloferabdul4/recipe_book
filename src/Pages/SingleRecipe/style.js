import styled from "styled-components";
import { mobile } from "../../Responsive";

export const Container=styled.div`
        display: flex;
        //justify-content: center;
        margin-left:auto;
        margin-right: auto;
        padding:60px 100px 100px 100px;
        color:rgba(0,0,0,0.74);
        padding-bottom:100px;
        ${mobile({ flexDirection:'column',padding:'0px',margin:'15px 0px'})}
       
`
export const ImageContainer=styled.div`
        flex:0.45;
        padding:20px;
        max-height: 100vh;
        display: flex;
        justify-content: center; 
        ${mobile({ maxHeight:'250px',padding:'5px'})}       
`

export const Image=styled.img`
       width:100%;
       object-fit: cover;    
       ${mobile({ width:'90%'})}
`
export const InfoContainer=styled.div`
        flex:0.55;
        display: flex;
        flex-direction: column;
        padding:20px;
        height:100vh;
            
`
export const Title=styled.h3`
        font-size:32px;
        font-weight: 600;
        margin-bottom: 20px;
        line-height: 34px;
        text-align: justify;
        ${mobile({ fontSize:'18px'})}
        
`


export const Description=styled.div`        
        line-height: 34px;
        font-size:18px;
        text-align: justify;
        padding:10px 0px; 
        margin-bottom: 10px;
        
        ${mobile({ fontSize:'16px'})}             
`

export const Ingredients=styled.div`        
        line-height: 34px;
        font-size:20px;
        text-align: justify;
        padding:10px 0px; 
        font-weight:600;
        ul{
           font-weight:400;
           margin-top:10px;
           font-size:18px;
           ${mobile({ fontSize:'15px'})} 
        }
        li{
           list-style-type:none;
           

        }
        ${mobile({ fontSize:'16px'})}             
`


export const Source=styled.div`        
        line-height: 34px;
        font-size:20px;
        text-align: justify;
        padding:10px 0px; 
        margin-bottom: 20px;
        color:orangered;
        ${mobile({ fontSize:'15px'})}             
`


export const Span=styled.div` 
        width:80%;   
        font-size:18px;
        gap:15px;
        display:flex;
        flex-direction:row;
        align-items:center;
        color:green;
        margin-bottom: 20px;
      p{
        border-right:0.5px solid grey;
        padding-right:20px;
      }
       
        ${mobile({ fontSize:'15px',width:'100%'})}             
`

export const SaveBtn=styled.button`
         height:60px;
         font-size:1.1rem;
         background-color:green;
         color:white;
         padding:8px;
         border-radius:8px;
         font-weight:600;
         cursor:pointer;
         border:none;
         ${mobile({ height:'50px',fontSize:'0.96rem',paddin:'4px'})}
`