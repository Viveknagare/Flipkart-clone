import { Grid, Typography,Box,styled,Button } from '@mui/material';
import react from 'react';
import { useSelector } from 'react-redux';

//components
import CartItem from './CartItem';
import Totalbalance from './Totalbalance';
import EmptyCart from './EmptyCart';


const Container=styled(Grid)(({theme})=>({
    padding:'30px 135px',
    [theme.breakpoints.down('md')]:{
        padding:'15px 0px'
    }
}))



const Header=styled(Box)`
padding:24px;
background:#fff;
`

const Buttonwrapper=styled(Box)`
padding:16px 22px;
background:#fff;
box-shadow:0 -2px 10px 0 rgb(0 0 0 / 10%);
border-top:1px solid #f0f0f0;


`
const Styledbutton=styled(Button)`
display:flex;
margin-left:auto;
background-color:#fb641b;
color:#fff;
width:250px;
height:51px; 
border-radius:2px;
`
const Leftcomponent=styled(Grid)(({theme})=>({
    paddingRight:15,
    [theme.breakpoints.down('sm')]:{
        marginBottom:15
    }
}))



function Cart(){

    const {cartItems}=useSelector(state=>state.cart)

    return (
        <>
            {
            cartItems.length?
                <Container container>
                  <Leftcomponent item lg={9} md={9} sm={12} xs={12}>
                     <Header>
                        <Typography>My Cart({cartItems.length})</Typography>
                     </Header>
                     {
                        cartItems.map(item=>(
                            <CartItem item={item}/>
                        ))
                     }
                     <Buttonwrapper>
                        <Styledbutton>Place order</Styledbutton>
                     </Buttonwrapper>
                  </Leftcomponent>

                  <Grid item lg={3} md={3} sm={12} xs={12} >
                  <Totalbalance cartItems={cartItems}/>
                  </Grid>

                </Container>
            :
            <EmptyCart />

            }
        </>
    )
}

export default Cart;


