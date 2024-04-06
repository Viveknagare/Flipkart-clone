
import { Box, Typography,styled,Button } from "@mui/material";
import addEllipses from "../../utils/common-utils";
import { removeFromCart } from "../../redux/actions/cartActions";
import { useDispatch } from "react-redux";
import Groupedbutton from "./ButtonGroup";


const Component=styled(Box)`
  border-top:1px solid #f0f0f0;
  display:flex;
  background:#fff;
`

const Leftcomponent=styled(Box)`
margin:20px;
display:flex;
flex-direction:column;
`
const Smalltext=styled(Box)`
color:#878787;
font-size:14px;
margin-top:10px;
`
const Remove=styled(Button)`
 font-size:16px;
 margin-top:20px;
 color:#000;
 font-weight:600;
`
function CartItem({item}){
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'

    const dispatch=useDispatch();

    function remove(id){
      dispatch(removeFromCart(id));
    }
    return(
        <Component>
            <Leftcomponent>
              <img src={item.url} alt="product" style={{height:110,width:110}} />
              <Groupedbutton />
            </Leftcomponent>
            <Box style={{margin:20}}>
              <Typography>{addEllipses(item.title.longTitle)}</Typography>
              <Smalltext>Seller:RetailNet
                <Box component="span"><img src={fassured} alt="flipkart" style={{width:"50px",marginLeft:"10px"}}/></Box>
              </Smalltext>
              <Typography style={{padding:"20px 0px"}}>
                <Box component="span" style={{fontWeight:600,fontSize:18}}> ₹{item.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                <Box component="span" style={{color:'#878787'}}><strike> ₹{item.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                <Box component="span" style={{color:'#388E3C'}}>{item.price.discount}</Box>
              </Typography>
              <Remove onClick={()=>remove(item.id)}>Remove</Remove>
            </Box>
        </Component>
    )
}

export default CartItem;