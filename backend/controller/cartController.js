import userModel from "../models/userModel.js"



//add to cart
const addToCart = async (req,res) => {
    //جلب اليوزر عن طريق ال id اللى جاى من middleware
    try {
       let userData = await userModel.findOne({ _id: req.body.userId });
       //جلب السلة الخاصة باليوزر
       let cartData = await userData.cartData;
       if (!cartData[req.body.itemId]) {
         cartData[req.body.itemId] = 1;
       } else {
         cartData[req.body.itemId] += 1;
       }
       await userModel.findByIdAndUpdate(req.body.userId, { cartData });
       res.json({ success: true, message: "Added To Cart" }); 
    } catch (error) {
        console.log(error)
       res.json({ success: false, message: "Error" });  
    }
}




//remove from cart
const removeFromCart = async (req, res) => {
   
    try {
         let userData = await userModel.findById(req.body.userId);
         let cartData = userData.cartData;
         if(cartData[req.body.itemId]>0){
            cartData[req.body.itemId] -= 1;
         }
         await userModel.findByIdAndUpdate(req.body.userId,{cartData})
         res.json({success:true,message:"Removed From Cart"})
    } catch (error) {
         res.json({ success: false, message: "Error" });
    }


};



//get cart data
const getCartData = async(req, res) => {
    try {
        let userData = await userModel.findById(req.body.userId)
let cartData = userData.cartData
let name = userData.name
res.json({success:true,cartData,name})
    } catch (error) {
  res.json({ success: false, message:"Error" });      
    }

};
export {addToCart,removeFromCart,getCartData}