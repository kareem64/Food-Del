
import express from 'express'
import {registeruser,loginuser} from "../controller/userController.js"

const userRouter = express.Router();

userRouter.post("/register",registeruser)
userRouter.post("/login", loginuser);

export default userRouter