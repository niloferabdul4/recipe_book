import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { mobile } from "../../Responsive";

export const SidebarContainer=styled.div`
        flex-flow: column nowrap;
        background-color: dimgrey;
        border:none;
        position: fixed;
        top: 70px;
        right: ${props=>props.id==='sidebar'? '0px':'-220px'};
        width: 220px;
        z-index: 2;
        transition: all 0.6s ease;
        height:100vh;
        ${mobile({margin:'0px',top:'50px'})}
           
`

export const NavList=styled.ul`
        margin: 0;
        padding: 10px 25px;
        list-style: none;    
        font-weight: 300;   
        display:flex;
        flex-direction: column;
        align-items:flex-start;
        gap:10px;
       
        
`

export const NavBarLink=styled(NavLink)`
        font-size: 17px;
        text-decoration: none;
        padding:15px;
        color:white;
 
        &:hover{
                transform:scale(1.1);
                transition: transform  ease 0.5s; 
                cursor: pointer;
                
        }
        ${mobile({fontSize:'15px',padding:'6px'})}
     
`
