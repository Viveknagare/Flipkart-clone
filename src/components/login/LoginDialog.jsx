import React from "react";
import {Dialog,Box,TextField,Button, Typography,styled, typographyClasses } from "@mui/material";
import { useState,useContext } from "react";
import authenticateSignup from "../../service/api.js"
import { authenticateLogin } from "../../service/api.js";
import { DataContext } from "../../context/DataProvider.jsx";


const Component=styled(Box)`
  height:75vh;
  width:100vh
`
const Image=styled(Box)`
  background:#2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 70% no-repeat;
  height:78%;
  width:28%;
  padding:45px 35px;
  &>p,&>h5{
    color:#ffffff
  }
  font-weight:600;
  
`

const Wrapper=styled(Box)`
display:flex;
flex-direction:column;
padding:25px 35px;
flex:1;
&>button,& > p{
    margin-top:5px;
}
&>button{
    margin-top:20px;
}
&>p{
    margin-top:10px;
}
`

const LoginButton=styled(Button)`
   text-transform:none;
   background:#FB641B;
   color:#fff;
   height:48px;
   border-radius:2px;
`

const RequestOTP=styled(Button)`
   text-transform:none;
   background:#fff;
   color:#2874f0;
   height:48px;
   border-radius:2px;
   box-shadow: 0 2px 4px 0 rgb(0 0 0/20%)
`
const Text=styled(Typography)`
font-size:11px;
color:#878787;
`

const CreateAccount=styled(Typography)`
  font-size:14px;
  text-align:center;
  color:#2874f0;
  font-weight:600;
  cursor:pointer;
  
`

const Error=styled(Typography)`
  font-size:10px;
  color:#ff6161;
  line-height:0px;
  margin-top:5px;
  font-weight:600;

`
const accountInitialValues={
    login:{
        view:'login',
        heading:"Login",
        subHeading:"Get access to your Orders ,Wishlist and Recommendations"
    },
    signup:{
        view:'signup',
        heading:"Looks like you're new here!",
        subHeading:"Sign up with your Mobile number to get started"
    }
}

const signupInitialValues={
    firstname:'',
    lastname:'',
    username:'',
    email:'',
    password:'',
    phone:''
}

const loginInitialValues={
    username:'',
    password:''
}

function LoginDialog(props){

    const [account,toggleAccount]=useState(accountInitialValues.login);
    const[signup,setsignup]=useState(signupInitialValues)
    const[login,setlogin]=useState(loginInitialValues)
    const[error,seterror]=useState(false);
    const{setAccount}=useContext(DataContext);


    function handleclose(){
        props.setopen(false);
        toggleAccount(accountInitialValues.login);
        seterror(false);
    }

    function toggleSignup(){
        toggleAccount(accountInitialValues.signup);
    }

    function onInputChange(e){
        setsignup({...signup,[e.target.name]:e.target.value})
        
    }


    const signupUser=async()=>{
        let response=await authenticateSignup(signup);
        if(!response) return;
        handleclose();
        setAccount(signup.firstname);
    }

    function onValueChange(e){
        setlogin({...login, [e.target.name]:e.target.value});
    }
   
    async function loginUser(){
        let response=await authenticateLogin(login);
        console.log(response);
        if(response.status===200){
            handleclose();
            setAccount(response.data.data.firstname);
        }else{
            seterror(true);
        }
    }
    return (
        <Dialog open={props.open} onClose={handleclose} PaperProps={{sx:{maxWidth:'unset'}}}>
           <Component>
              <Box style={{display:'flex',height:'100%'}} >
                <Image>
                    <Typography variant="h5">Login</Typography>
                    <Typography style={{marginTop:20}}>Get access to your Orders, Wishlist and Recommendations </Typography>
                </Image>
                {account.view==="login"?      
                    <Wrapper>
                       <TextField variant="standard" onChange={(e)=>onValueChange(e)} name="username" label="enter Username" />

                       {error &&<Error>Please enter valid username or password</Error>}

                       <TextField variant="standard" onChange={(e)=>onValueChange(e)} name="password" label="Enter Password" />

                       <Text>By continuing, you agree to Flipkart's Terms of Use and privacy Policy</Text>
                       <LoginButton onClick={()=>loginUser()}>Login</LoginButton>
                       <Typography style={{textAlign:'center'}}>OR</Typography>
                       <RequestOTP>Request OTP</RequestOTP>
                       <CreateAccount onClick={()=>toggleSignup()} style={{marginTop:'20px'}}>New to Flipkart? Create an account</CreateAccount>
                    </Wrapper>
                :
                    <Wrapper>
                       <TextField variant="standard" onChange={(e)=>onInputChange(e)} name="firstname" label="enter Firstname" />
                       <TextField variant="standard" onChange={(e)=>onInputChange(e)} name="lastname" label="Enter Lastname" />
                       <TextField variant="standard" onChange={(e)=>onInputChange(e)} name="username" label="Enter Username" />
                       <TextField variant="standard" onChange={(e)=>onInputChange(e)} name="email" label="Enter Email" />
                       <TextField variant="standard" onChange={(e)=>onInputChange(e)} name="password" label="Enter Password" />
                       <TextField variant="standard" onChange={(e)=>onInputChange(e)} name="phone" label="Enter Phone" />
                       <LoginButton onClick={()=>signupUser()}>Continue</LoginButton>
                    </Wrapper>
                }

             </Box>
           </Component>
        </Dialog>
    )
}

export default LoginDialog;