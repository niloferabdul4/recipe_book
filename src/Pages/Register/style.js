import styled from "styled-components";
import { mobile } from "../../Responsive";

 export const RegisterContainer=styled.div`    
    height:100vh;
    width:100vw;
    display :flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    margin:15px 0px;
   
`


export const Wrapper=styled.div`
    display:flex;
    flex-direction: column;
    justify-content: flex-start;  
    align-items:center;
    border:0.1px solid lightgrey;
    border-radius: 7px;  
    padding:30px;
    width:25%;
    background-color:white;
    ${mobile({margin:'35px',padding:'15px',width:'100%'})} 

`


export const Title=styled.h2`
    font-weight: 600;
    ${mobile({fontSize:'19px'})}
`

export const Form =styled.form`
    background-color: white;
    display: flex;
    flex-wrap: wrap;

`
export const InputWrapper=styled.div`
    width:100%;
    display: flex;
    justify-content: center;
    align-items:flex-start;
    flex-direction: column;
   
    ${mobile({padding:'10px'})}

`

export const Label=styled.label`
    font-weight: 600;
    margin: 10px 0px;
    text-align: left;  
    ${mobile({fontSize:'14px',margin:'6px 0px'})} 

`

export const Input=styled.input`
    width:100%;   
    padding: 10px;
    ${mobile({padding:'5px'})}
`


export const Button=styled.button`
    width:100%;
    background-color: orangered;
    height:46px;
    border-radius: 6px;
    font-size: 1.05rem;
    font-weight: 500;
    margin:16px 0px 20px 0px;
    padding: 4px;
    color: white;
    cursor: pointer;
    border:none;
    background: linear-gradient(right bottom rgba(0,0,1,2));
    ${mobile({height:'30px',fontSize:'0.95rem',margin:'10px'})}

`

export const SignIn=styled.p`
    font-size:16px;
    margin:10px 0px;
    ${mobile({ fontSize: "14px" })}   

`