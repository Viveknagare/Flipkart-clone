import { useEffect } from "react";

import React from "react";
import { Box ,Slide,styled} from "@mui/material";
// import { Fragment } from "react"; no need to write fragments in tag in current version simply write empty tags

//components
import NavBar from "./NavBar";
import Banner from "./Banner";
import Slides from "./Slides"
import Midslide from "./Midslide";
import Midsection from "./Midsection";

import { getproducts } from "../../redux/actions/productActions";
import {useDispatch,useSelector} from 'react-redux';

const Component=styled(Box)` 
  padding: 10px;
  background:#F2F2F2;
`


function Home(){

    const getProducts=useSelector(state=>state.getProducts);
    const {products}=getProducts;

    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(getproducts());
    },[dispatch])
    return (
        <>
            <NavBar />
            <Component>
               <Banner />
               <Midslide products={products} title="Deal of the Day" timer={true}/>
               <Midsection />
               <Slides products={products} title="DIscounts for you" timer={false}/>
               <Slides products={products} title="Suggesting Items" timer={false}/>
               <Slides products={products} title="Top Selection" timer={false}/>
               <Slides products={products} title="Recommended Items" timer={false}/>
               <Slides products={products} title="Trending offers" timer={false}/>
               <Slides products={products} title="Season's Top pick" timer={false}/>
               <Slides products={products} title="Top deals on accessories" timer={false}/>
            </Component>
            
        </>
    )
}

export default Home;