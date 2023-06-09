import styled from "styled-components";
import { mobile } from "../../Responsive";
import img from '../../assets/banner_image.jpg'
const BannerContainer=styled.div `  
    background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url(img) ;
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
    z-index:10;
    box-shadow: 0 0 20px 0 rgb(112 121 138 / 18%); 
    ${mobile({ width:'355px',margin:'30px 0px',padding:'20px',height:'450px',gap:'10px'})}
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
    ${mobile({ padding:'5px',flexDirection:'row',alignItems:'center',justifyContent:'space-between'})}
   
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
 ${mobile({ padding:'8px',margin:'0px',width:'60%'})}
  `
const FilterOption=styled.option`
    marging:18px;
    padding:18px;
    height:100px;
    ${mobile({ padding:'7px',margin:'4px'})}

`
  const Input=styled.input`
    font-size: 16px;
    padding: 10px;
    border:1px solid rgba(128, 128, 128, 0.2);
    margin: 10px;
    width:100%;
    border-radius: 5px;
    text-indent:'3px';
    ${mobile({ padding:'8px',margin:'0px',width:'80%'})}
  
  `
  const SearchButton=styled.button`
    margin:0px 30px;
    color:orangered;
    padding:0px;
    display: flex;
    flex-direction:row;
    align-items:center;
    background-color:white;
    border:none;
    position:absolute;
    top:20px;
    right:-5px;
    cursor:pointer;
    ${mobile({height:'20px',padding:'6px',right:'-10px',top:'10px'})}
`
 const Label=styled.label`
    font-size: 16px;
    margin:10px;
    ${mobile({ margin:'10px',fontSize:'14px'})}
 `

const Button=styled.button`
    height:50px;
    width:140px;
    font-size:1.1rem;
    border:none;
    border-radius:8px;
    background-color: orangered;
    color:white;
    cursor:pointer;
    ${mobile({ height:'30px',fontSize:'0.94rem',width:'100px'})}
`


const SearchBox=styled.div`       
        width:100%;
        display:flex;
        flex-direction:column;
        align-items:flex-start;
        justify-content:flex-start;
        ${mobile({
        height:'24px',    
        margin:'10px 0px'
    })}
`
const SubTitle=styled.h2`
    margin:20px;
    color:${props=>props.id==='banner'? 'white' :'black'}
    ${mobile({ fontSize:'18px',margin:'15px'})}
`



export {BannerContainer,Form,Top,Bottom,FilterBox,FilterOption,Select,Input,Label,Button,SubTitle,SearchButton,SearchBox}

