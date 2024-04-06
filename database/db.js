import mongoose from "mongoose";

 export const Connection=async()=>{
     const URL="mongodb://127.0.0.1:27017/ecommerce-web";
    
    try{
        await mongoose.connect(URL)
        console.log("database connected successfully")
    }catch(error){
        console.log("error while connecting the database ",error.message);
    }
}

export default Connection;