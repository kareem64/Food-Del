import express from "express"
import { addToCart,removeFromCart,getCartData } from "../controller/cartController.js"
import authMiddleware from "../middleware/auth.js";
const cartRouter = express.Router()

cartRouter.post("/addcart",authMiddleware,addToCart)
cartRouter.post("/removecart", authMiddleware,removeFromCart);
cartRouter.post("/getcart", authMiddleware,getCartData);

export default cartRouter