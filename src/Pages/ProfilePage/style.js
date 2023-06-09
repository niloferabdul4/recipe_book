import styled from "styled-components";
import { mobile } from "../../Responsive";

export const ProfileContainer=styled.div`
    margin: 20px;
    padding: 50px;
    display:flex;
    flex-direction:column;
    justify-contentflex-start;
    align-items:flex-start;
    ${mobile({paddin:'0px',margin:'0px'})}
`
export const ProfileHeader=styled.h2`
    margin:10px ;
    ${mobile({fontSize:'19px'})}
`


export const UserInfo=styled.h3`
    margin:10px 0px;
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:flex-start;
    ${mobile({fontSize:'15px'})}

`

export const Container=styled.div`
    display:grid;
    grid-template-columns: repeat( auto-fit, minmax(300px, 1fr) );
    grid-gap:50px;
    z-index: 1;   
    margin:20px 120px;   
    width:100%; 
    ${mobile({ margin:'10px 6px',gridGap:'10px'})}  
`

  export const BackButton=styled.button`

    width:30%;
    background-color: orangered;
    height:46px;
    border-radius: 6px;
    font-size: 1.05rem;
    font-weight: 600;
    margin:16px 0px 20px 0px;
    padding: 4px;
    color: white;
    cursor: pointer;
    border:none;
    background: linear-gradient(right bottom rgba(0,0,1,2));
    ${mobile({height:'35px',width:'50%',fontSize:'0.95rem',margin:'10px'})}


  `