import { Typography,Box,styled } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";



const Header=styled(Box)`
padding:15px 24px;
background:#fff;
border-bottom:1px solid #f0f0f0;
`
const Heading=styled(Box)`
color:#878787;
`

const Container=styled(Box)`
padding:15px 24px;
background:#fff;
&>p{
    margin-bottom:20px;
    font-size:14px;
}
&>h6{
    margin-bottom:20px;
}
`
const Price=styled(Box)`
float:right;
`

const Discount=styled(Typography)`
color:green;
font-weight:500;
`
function Totalbalance({cartItems}){
    const[price,setprice]=useState(0);
    const[discount,setdiscount]=useState(0);

    useEffect(()=>{
        totalamount();
    },[cartItems])

    function totalamount(){
        let price=0;
        let discount=0;

        cartItems.map(item=>{
            price+=item.price.mrp;
            discount+=(item.price.mrp-item.price.cost);
        });

        setprice(price);
        setdiscount(discount);

    }
    return (
        <Box>
            <Header>
                <Heading>PRICE DETAILS</Heading>
            </Header>
            <Container>
                <Typography>price ({cartItems?.length} item)
                  <Price component="span">₹{price}</Price>
                </Typography>
                <Typography>Delivery Charges
                  <Price component="span">-₹{discount}</Price>
                </Typography>
                <Typography>Discount
                  <Price component="span">₹40</Price>
                </Typography>
                <Typography variant="h6" >Total Amount
                  <Price component="span">{price-discount+40}</Price>
                </Typography>
                <Discount>You will save ₹{discount-40} on this order</Discount>
            </Container>
        </Box>
    )
}


export default Totalbalance;