import express from "express";
import cors from "cors"
import { connectDB } from "./config/db.js";
import food_router from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
import paypal from "paypal-rest-sdk";

//config
const port = 4000;
const app = express()

// middleware
app.use(express.json())
app.use(cors())
//paypal
paypal.configure({
    mode:'sandbox',
    client_id:process.env.CLIENT_ID,
    client_secret:process.env.CLIENT_SECRET
})
//conect db
connectDB()

app.use(food_router)
app.use(userRouter)
//-------------------------
app.use(cartRouter)
app.use(orderRouter)
app.use("/images",express.static('uploads'))

app.post('/payment', async (req,res)=>{
   try{
let create_payment_json = {
    "intent":"sale",
"payer": {
"payment_method": "paypal"
},
"redirect_urls": {
"return_url": "http://Localhost:4000/success",
"cancel_url": "http://Localhost:4000/cancel"
},
"transactions":[
    {
        "ittemlist":{
            "item":[{
"name":"item",
"seku":"item",
"price":"1.0",
"currency":"USD",
"quantity":"1"

            }]
        },
        "amount":{
            "total":"0.1",
            "currency":"USD"
        },
        "description":"this is the payment descrition."
    }
]

}
await paypal.payment.create(create_payment_json,function(error,payment){
if(error){
    console.log(error)
}else{
    console.log(payment)
   let data = payment
   res.json(data) 
}
})
   }catch(error){

   }
})

app.listen(port,()=>{
    console.log("server is runing on http://localhost:" + port)
})

