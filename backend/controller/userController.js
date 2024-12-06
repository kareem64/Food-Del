import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import validator from "validator";

const registeruser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    //check if the user is already exist

    const userExist = await userModel.findOne({email});
    if (userExist) {
      return res.json({ success: false, message: "This User Is Exist" });
    }

    //chech if password is strong and email is validate

    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Please Insert Strong PassWord",
      });
    }

    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Please Insert avalid email",
      });
    }
    // hashing password
    
    const hashedpassWord = await bcrypt.hash(password,10);

    const addUser = new userModel({
      name: name,
      email: email,
      password: hashedpassWord,
      
    });
    const user = await addUser.save()
   
      
        const token = jwt.sign({id:user._id}, "SECRETKEY");
        res.json({ success: true, token });
    
    
  } catch (error) {
res.json({success:false,message:"cannot add user"})
  }
};

const loginuser = async(req, res) => {
  const {email,password}= req.body
  //check if user exist
  try {
   const userExist = await userModel.findOne({ email });
   if (!userExist) {
     return res.json({ success: false, message: "user not found" });
   }
   const ismatched = await bcrypt.compare(password, userExist.password);
   if (!ismatched) {
     return res.json({ success: false, message: "rowng pass word" });
   }
   const token = jwt.sign({ id: userExist._id }, "SECRETKEY");
   res.json({ success: true, token }); 
  } catch (error) {
   res.json({ success: false, message: "cannot Login" }); 
  }
  
  }



export  { registeruser, loginuser };
