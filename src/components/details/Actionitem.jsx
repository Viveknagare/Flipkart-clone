import React from "react"
import { useState } from "react";
import { Box ,Button,styled} from "@mui/material";
import {AddTask, ShoppingCart as Cart} from '@mui/icons-material';
import {FlashOn as Flash } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
import {  useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";

const Leftcontainer=styled(Box)(({theme})=>({
    minWidth:'40%',
    padding:'40px 0 0 80px',
    [theme.breakpoints.down('lg')]:{
        padding:'20px 40px'
    }
    
}))
const Image=styled('img')({
    width:'90%',
    padding:'15px'
})

const Styledbutton=styled(Button)(({theme})=>({
    width:'48%',
    height:50,
    borderRadius:2,
    [theme.breakpoints.down('lg')]:{
        width:'46%' 
    },
    [theme.breakpoints.down('lg')]:{
        width:'48%' 
    }
}))
    


function Actionitem({product}){

    
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const [quantity,setQuantity]=useState(1);
    const {id}=product;

    function addItemToCart(){
        dispatch(addToCart(id,quantity));
        navigate('/cart');
    }

    return(
        <Leftcontainer>
            <Box style={{padding:'15px 20px',border:'1px solid #f0f0f0'}}>
              <Image src={product.detailUrl} alt="product"/>
            </Box>
            <Styledbutton variant="contained" onClick={addItemToCart} style={{marginRight:10,background:'#ff9f00'}}><Cart/>ADD TO CART</Styledbutton>
            <Styledbutton variant="contained" style={{background:'#fb541b'}}><Flash/>BUY NOW</Styledbutton>
        </Leftcontainer>
    )
    
}

export default Actionitem;