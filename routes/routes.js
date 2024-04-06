import express from "express";
import {userSignup,userLogin} from "../controller/user-controller.js"
import getProducts from "../controller/products-controller.js";
import { getProductById } from "../controller/products-controller.js";


const router=express.Router();

router.post('/signup' ,userSignup);

router.post('/login',userLogin);

router.get('/products',getProducts);

router.get('/product/:id',getProductById);

export default router;