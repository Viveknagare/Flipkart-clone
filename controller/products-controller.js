
import Product from "../model/product_schema.js"

async function getProducts(request,response){
    try{
       const products=await  Product.find({}) //yaha pe koyi condition nahi dali matlab sara data chaiye no filters
       response.status(200).json(products);
    }catch(error){
        response.status(500).json({message:error.message})
    }
}

export default getProducts;

export const getProductById=async(request,response)=>{
    try{
        const id=request.params.id;
        const product=await Product.findOne({'id':id})
        response.status(200).json(product);
    }catch(error){
        response.status(500).json({message:error.message})
    }
}