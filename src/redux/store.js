//pehla argument hota reducer(actionitem) aur reducer multiple hoo sakte he lekin createStore me single reducer pass krna hota hein toh combineReducers ke madat se ham use combine krke pass krte he.
//2nd argument jata he middle ware ka

import  { combineReducers ,applyMiddleware,createStore} from 'redux';
import {thunk} from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension';
import { getProductsReducer } from './reducers/product_reducer';
import { getProductDetailsReducer } from './reducers/product_reducer';
import { cartReducer } from './reducers/cartReducer';

const reducer=combineReducers({
    getProducts:getProductsReducer,
    getProductDetails:getProductDetailsReducer,
    cart:cartReducer
})

const middleware=[thunk];   //middleware ko initialize kiya

const store =createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware)) //iss function ke andar abb ham middleware pass karenge. devtools ke andar middleware pass krne ke liye function hota he applyMiddleware
)

export default store;