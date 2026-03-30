import express from "express";
import { signUp, signin } from "../controllers/authController.js";
const router = express.Router();

router.get("/test",(req,res)=>{
    res.json({
        message:"API Route is working"
    })
});

router.post("/signup", signUp)
router.post("/signin", signin)

export default router;