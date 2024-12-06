import jwt from 'jsonwebtoken'

const authMiddleware = async (req,res,next)=>{
const {token} = req.headers;
if(!token){
    return res.json({success:false,message:"Cannot Login agin"})
}
try {
   const token_decode = jwt.verify(token, "SECRETKEY");
   req.body.userId = token_decode.id;
   next()
} catch (error) {
   return res.json({ success: false, message: "Error" }); 
}
}
export default authMiddleware