import { Box, Button, Typography,styled ,Badge} from "@mui/material";
import React from "react";
import {FullscreenExit, ShoppingCart} from '@mui/icons-material';
import { useState ,useContext} from "react";
import { DataContext } from "../../context/DataProvider";
import Profile from "./Profile";
import { Link } from "react-router-dom";
import { UseSelector, useSelector } from "react-redux";

//components
import LoginDialog from "../login/LoginDialog";

const Wrapper=styled(Box)(({theme})=>({
   display:'flex',
   margin: '0 3% 0 auto',
   '& > button,& > p, & > div':{
    marginRight:40,
    fontSize:16,
    alignItems:'center'
   },
   [theme.breakpoints.down('md')]:{
    display:'Block'
   }
}))


const Container=styled(Link)(({theme})=>({
display:'flex',
textDecoration:'none',
color:'inherit',
[theme.breakpoints.down('md')]:{
    display:'block'
}


}));

const LoginButton=styled(Button)`
   color:#2874f0;
   background:#fff;
   text-transform:none;
   padding:5px 40px
   border-radius:2px;
   box-shadow:none;
   font-weight:600;
   height:32px;

`

function CustomButton(){

    const[open,setopen]=useState(false);
    const{account,setAccount}=useContext(DataContext);

    const {cartItems}=useSelector(state=>state.cart);

    function openDialog(){
        setopen(true);
    }


    return (
    <Wrapper>

        {
            account?<Profile account={account} setAccount={setAccount} />: <LoginButton variant="contained" onClick={()=>openDialog()}>login</LoginButton>
        }
       
        <Typography style={{marginTop:3,width:135}}>Become a seller</Typography>
        <Typography style={{marginTop:3}}>More</Typography>

        <Container to="/cart">
            <Badge badgeContent={cartItems?.length} color="secondary">
              <ShoppingCart />
            </Badge>
            <Typography style={{marginLeft:'10px'}}>cart</Typography>
        </Container>
        <LoginDialog open={open} setopen={setopen}/>
    </Wrapper>
    )
}

export default CustomButton;