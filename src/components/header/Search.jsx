import React from "react";
import { InputBase,Box ,styled, List,ListItem} from "@mui/material";
import { useState,useEffect } from "react";
import SearchIcon from '@mui/icons-material/Search';
import {useSelector,useDispatch} from 'react-redux';
import { getproducts } from "../../redux/actions/productActions";
import {Link} from "react-router-dom";


const SearchContainer=styled(Box)`
  background:#fff;
  width:38%;
  border-radius:2px;
  margin-left:10px;
  display:flex;
`

const InputSearchBase=styled(InputBase)`
   padding-left:20px;
   width:100%;
   font-size:unset;
`

const SearchIconWrapper=styled(Box)`
   color:blue;
   padding:5px;
   display:flex;
`
const ListWrapper=styled(List)`
  position:absolute;
  background:#FFFFFF;
  color:#000;
  margin-top:36px;
`

function Search(){

  const[text,settext]=useState('');

  const { products }=useSelector(state=>state.getProducts)
  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(getproducts())
  },[dispatch])
  function getText(e){
    settext(e.target.value);
  }

    return (
        <SearchContainer>
          <InputSearchBase 
            placeholder="Search for products brands and more"
            onChange={getText}
            value={text}
          />
          <SearchIconWrapper>
           <SearchIcon />
          </SearchIconWrapper>
          {
            text && 
             <ListWrapper>
                 {
                  products.filter(product=>product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product=>(
                    <ListItem>
                      <Link
                         to={`/product/${product.id}`}
                         onClick={()=>settext('')}
                         style={{textDecoration:'none',color:'inherit'}}
                      >
                          {product.title.longTitle}
                      </Link>
                    </ListItem>
                  ))
                 }
             </ListWrapper>
          }
        </SearchContainer>
    )
}

export default Search;