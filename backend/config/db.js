import mongosse from "mongoose";
 export const connectDB = ()=>{
   mongosse.connect(
      "mongodb+srv://kareem_stack:Karmost64@cluster0.ofgbegy.mongodb.net/food-del"
    ) .then(()=>console.log("connected with DB"));
}