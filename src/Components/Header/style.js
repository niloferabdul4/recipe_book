import styled from "styled-components"
import { mobile } from "../../Responsive"
import { NavLink } from "react-router-dom"

export const HeaderContainer=styled.div`
    background-color: orangered;
    height: 70px;
    box-shadow: 0 5px 30px rgb(0 22 84 / 10%);
    padding: 6px 0;
    position: sticky;
    top: 0;
    display:flex;
    flex-direction:row;
    justify-content:space-between
    padding:0px 20px;
    z-index:100;
    ${mobile({ height:'50px', margin:'0px',width:'100%',padding:'0px 10px'})}   

 

`


export const LeftWrapper=styled.div`
    flex:0.45;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap:20px;
    margin-left:30px;
    color:white;
    ${mobile({flex:'0.3',marginLeft:'2px',fontSize:'16px',gap:'4px'})}

`
export const RightWrapper=styled.div`
    flex:0.55;
    display:flex;
    margin-right: 10px;
    align-items: center;
    justify-content: space-around;
    color:white;
    width:100%;
    ${mobile({ marginRight:'0px',justifyContent:'space-betwwen'})}
`

export const Logo=styled.h2`
    text-align: center;
    align-items: center;
    margin-right: 10px;
    
    ${mobile({fontSize:'16px'})}
        

    })}
`


export const Links=styled(NavLink)`
    font-size: 18px;
    text-decoration: none;
   color:white;
    cursor:pointer;
    ${mobile({ fontSize:'15px'})}
    &:hover{
        transform:scale(1.1);
        transition: transform  ease 0.5s; 
       
    }
    
`


export const NavLinks=styled(NavLink)`
    font-size: 18px;
    text-decoration: none;
    color:white;
    cursor:pointer;
    ${mobile({ display:'none'})}
    &:hover{
        transform:scale(1.1);
        transition: transform  ease 0.5s; 
       
    }
    
`