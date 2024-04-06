import express from "express";
import cors from 'cors';
import bodyParser from "body-parser";
import Connection from "./database/db.js";
import defaultdata from "./default.js";
import Router from "./routes/routes.js";

const app=express();
app.use(cors());
app.use(bodyParser.json({extented:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/',Router);

const PORT=8000;

Connection();


app.listen(PORT,()=>{
    console.log(`running on port ${PORT}`);
})

defaultdata();