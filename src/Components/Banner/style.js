import styled from "styled-components";
import { mobile } from "../../Responsive";
import img from '../../assets/banner_image.jpg'
const BannerContainer=styled.div `  
    background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url(img) ;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover; 
    width: 100%;
    height:60vh; 
    padding:10px 0px;
    z-index:1;
    margin-bottom:50px; 
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    h1{
        color:white;
    }
    h2{
        color:white;
    }
    ${mobile({ height:'50vh'})}
`


const Form=styled.form`
    width:800px;
    background-color: #fff;
    border-radius: 5px;
    margin: 180px;
    padding: 15px;
    display:flex;
    flex-direction:column;
    gap:5px;
    z-index:100;
    box-shadow: 0 0 20px 0 rgb(112 121 138 / 18%); 
    ${mobile({ width:'400px',margin:'40px',padding:'10px'})}
  `
const Top=styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    align-items:center;
    ${mobile({flexDirection:'column',justifyContent:'flex-start'})}
`

const Bottom=styled.div`

    
`
  const FilterBox =styled.div`    
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:flex-start;
    padding:8px;
    width:100%;
    ${mobile({ padding:'4px',flexDirection:'row',alignItems:'center',justifyContent:'center'})}
   
  `

  const Select=styled.select`
    font-size: 16px;
    padding: 10px;
    width: 100%;
    border:none;
    border: 1px solid rgba(128, 128, 128, 0.2);
    margin: 10px;
    border-radius: 5px;
   //background-color:#fff;
   cursor:pointer;
  
   box-shadow:0px 2px 4px rgba(0,0,0,0.2)
   transition:all 0.2s ease-in-out;
 &:focus{
  outline:none;
  box-shadow:0px 2px 4px rgba(0,0,0,0.3)
 }
 ${mobile({ padding:'8px',margin:'0px'})}
  `
const FilterOption=styled.option`
    marging:18px;
    padding:18px;
    height:100px;
    ${mobile({ padding:'8px',margin:'4px'})}

`
  const Input=styled.input`
    font-size: 16px;
    padding: 10px;
    border: 1px solid rgba(128, 128, 128, 0.2);
    margin: 10px;
    width:100%;
    border-radius: 5px;
    position:relative;
    ${mobile({ margin:'0px',padding:'8px'})}
  
  `

 const Label=styled.label`
    font-size: 16px;
    margin:10px;
    ${mobile({ margin:'8px',fontSize:'14px'})}
 `

const Title=styled.h1`
    margin:50px;
    ${mobile({ fontSize:'24px',margin:'10px'})}
`

const Button=styled.button`
    height:50px;
    width:140px;
    font-size:1.1rem;
    border:none;
    border-radius:8px;
    background-color:  #2874f0;
    color:white;
    cursor:pointer;
    ${mobile({ height:'35px',fontSize:'0.96rem',width:'100px'})}
`
const SubTitle=styled.h2`
    margin:30px;
    color:white;
    ${mobile({ fontSize:'18px',margin:'10px'})}
`



export {BannerContainer,Form,Top,Bottom,FilterBox,FilterOption,Select,Input,Label,Button,Title,SubTitle}

