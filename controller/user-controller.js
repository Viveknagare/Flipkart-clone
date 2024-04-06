import User from "../model/user_schema.js";

async function userSignup(request,response){
    try{

       const exist= await User.findOne({username:request.body.username});
       if(exist){
        response.status(401).json({message:"Username already exist"});
       }
       const user=request.body 
       const newUser=User(user);
       await newUser.save();

       response.status(200).json({message:user});

    }catch(error){
        response.status(500).json({message:error.message});
    }
}

async function userLogin(request,response){
    try{
        const username=request.body.username;
        const password=request.body.password;

        let user=await User.findOne({username:username,password:password});
        if(user){
            return response.status(200).json({data:user});
        }else{
            return response.status(401).json("invalid login")
        }

    }catch(error){
        response.status(500).json("error",error.message);
    }
}

export  {userSignup, userLogin};


