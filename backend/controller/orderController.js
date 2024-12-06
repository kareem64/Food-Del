import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";



//placeing user order in frontend

const placeOrder = async (req,res)=>{
//   Paypal.configure({
//     "mode": "sandbox",
//     "client_id": process.env.CLIENT_ID,
//     "client_secret":process.env.CLIENT_SECRET
//   });
//     const frontend_url = "http://localhost:5173"
// try {
//    const newOrder = new orderModel({
//      userId: req.body.userId,
//      items: req.body.items,
//      amount: req.body.amount,
//      address: req.body.address,
//    }); 
//    await newOrder.save()
//    await userModel.findByIdAndUpdate(req.body.userId,{cartData:{}})

//    const line_Items = req.body.items.map((item)=>({
//     price_data:{
//         currency:"inr",
//     product_data:{
//         name:item.name
//     },
// unit_amount:item.price * 100
//     },
//     quantity:item.quantity
    
//    }))
//    line_Items.push({
//      price_data: {
//        currency: "inr",
//        product_data: {
//          name: "Delevery Charges",
//        },
//        unit_amount:2 * 100 * 80,
//      },
//      quantity: 1,
//    });
// const session = Paypal.checkout.session.create({
//   line_Items: line_Items,
//   mode: "sandybox",
//   success_url: `${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
//   cancel_url: `${frontend_url}/verify?success=false&orderId=${newOrder._id}`,
// });
// res.json({success:true,session_url:session.url})
// } catch (error) {
//     console.log(error)
//    res.json({ success: false, message: "Error" }); 
// }
    
}

export {placeOrder}