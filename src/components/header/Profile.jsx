import { Typography ,Box,Menu,MenuItem,styled} from "@mui/material";
import React from "react";
import { useState } from "react";
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

const Component=styled(Menu)`
margin-top:5px;
`

const Logout=styled(Typography)`
font-size:14px;
margin-left:20px;
`

function Profile({account,setAccount}){
 
    const [open,setopen]=useState(false);

    function handleclick(event){
        setopen(event.currentTarget);
    }

    function handleClose(){
        setopen(false);
    }

    function logoutUser(){
        setAccount('');
    }

    return(

     <>
        <Box>
            <Typography style={{marginTop:2,cursor:'pointer'}} onClick={handleclick}>{account}</Typography>
            <Component
               
               anchorEl={open}
               open={Boolean(open)}
               onClose={handleClose}
              
            >
               <MenuItem onClick={()=>{handleClose(); logoutUser();}}>
                   <PowerSettingsNewIcon color="primary" />
                   <Logout>Logout</Logout>
               </MenuItem>
               
            </Component>
           
        </Box>
    </>
    )
}

export default Profile;