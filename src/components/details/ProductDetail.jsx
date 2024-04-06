import React from "react";
import { Box,TableBody,TableCell,TableRow,Typography ,styled,Table} from "@mui/material";
import {LocalOffer as Badge} from '@mui/icons-material';

const Smalltext=styled(Box)`
  font-size:14px;
  vertical-align:baseline;
  &>p{
    font-size:14px;
    margin-top:5px;
  }
`

const Styledbadge=styled(Badge)`
  margin-right:10px;
  color:#00CC00;
  font-size:15px;
`
const Columntext=styled(TableRow)`
  font-size:14px;
  vertical-align:baseline;
  &>td{
    font-size:14px;
    margin-top:10px;
    border:none;
  }
`

function ProductDetail({product}){
    const date=new Date(new Date().getTime()+(5*24*60*60*1000));
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';

    return (
       <>
        <Typography>{product.title.longTitle}</Typography>
          <Typography style={{marginTop:5, color:'#878787', fontSize:14}}>
             8 Ratings & 1 Review
          <Box component="span"><img src={fassured} style={{marginLeft:20,width:77}}/></Box>
        </Typography>
        <Typography>
          <Box component="span" style={{fontSize:28}}> ₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
          <Box component="span" style={{color:'#878787'}}><strike> ₹{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
          <Box component="span" style={{color:'#388E3C'}}>{product.price.discount}</Box>
        </Typography>
        <Typography>Available Offers</Typography>
        <Smalltext>
            <Typography><Styledbadge/>Get extra 20% off upto ₹50 on 1 items T&C</Typography>
            <Typography><Styledbadge/>Fet extra 13% off (price inclusive of discount) T&C</Typography>
            <Typography><Styledbadge/>Sign up for Flipkart Pay Later and get Flipkart Gift Card worth ₹100 (know more)</Typography>
            <Typography><Styledbadge/>Buy 2 items save 5%. Buy 3 or more save 10% T&C</Typography>
            <Typography><Styledbadge/>5% Cashback on Flipkart Axis Bank Card</Typography>
            <Typography><Styledbadge/>No Cost EMI on Bajaj Finserv EMI Card on cart value above ₹2999 T&C</Typography>
        </Smalltext>
        <table>
            <TableBody>
                <Columntext>
                    <TableCell style={{color:'#878787'}}>Delivery</TableCell>
                    <TableCell style={{fontWeight:600}}>Delivery by {date.toDateString()} | ₹40</TableCell>
                </Columntext>
                <Columntext>
                    <TableCell style={{color:'#878787'}}>Warranty</TableCell>
                    <TableCell >No Warranty</TableCell>
                </Columntext>
                <Columntext>
                    <TableCell style={{color:'#878787'}}>Delivery</TableCell>
                    <TableCell >
                        <Box component="span" style={{color:'#2874f0'}}>SuperComNet</Box>
                        <Typography>GST invoice available</Typography>
                        <Typography>View more sellers starting from ₹{product.price.cost}</Typography>
                    </TableCell>
                </Columntext>
                <Columntext>
                    <TableCell colSpan={2}>
                      <img src={adURL} alt="flipkatpoints" style={{width:390}}/>
                    </TableCell>
                </Columntext>
                <Columntext>
                    <TableCell style={{color:'#878787'}}>description</TableCell>
                    <TableCell >{product.description}</TableCell>
                </Columntext>
            </TableBody>
        </table>
       </>
    )
}

export default ProductDetail;