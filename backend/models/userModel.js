import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{type:String,require:true},
    email:{type:String,require:true},
    password:{type:String,require:true},
    cartData:{type:Object,default:{}}
},{minimize:false})

const userModel = new mongoose.model("users",userSchema)
export default userModel;