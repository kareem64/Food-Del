import express from "express"
import multer from "multer"
import { AddFood ,food_list, removeFood} from "../controller/foodController.js"


const food_router = express.Router()

//image engine
const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
      return cb(null,Date.now() + file.originalname)  
    }
})
const upload = multer({storage:storage})




food_router.post("/add",upload.single('image'),AddFood)
food_router.get("/list",food_list)
food_router.delete('/remove/:id',removeFood)
export default food_router