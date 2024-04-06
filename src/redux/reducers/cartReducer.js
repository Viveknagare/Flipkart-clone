import * as actionType from '../constants/cartConstant';

export const cartReducer=(state={cartItems:[]},action)=>{   //state mein woh hota hein jo already hein aur action mein woh ata hein jo hame redux mein store krvana hein
    switch(action.type){
        case actionType.ADD_TO_CART:
            const item=action.payload;
            const exist=state.cartItems.find(product=>product.id===item.id);

            if(exist){
                return {...state,cartItems:state.cartItems.map(data=>data.product===exist.product?item:data)}
            }else{
                return {...state,cartItems:[...state.cartItems,item]}
            }
        case actionType.REMOVE_FROM_CART:
            return {...state,cartItems:state.cartItems.filter(product=>product.id!==action.payload)}
        default:
            return state;
    }
}