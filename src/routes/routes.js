import express from "express";
import { signUp, signin } from "../controllers/authController.js";
import { createDestination, getPlaces } from "../controllers/placeController.js";
import { deleteBooking } from "../controllers/bookingController.js";
import { createBooking, getBookingById } from "../controllers/bookingController.js";
const router = express.Router();

router.get("/test",(req,res)=>{
    res.json({
        message:"API Route is working"
    })
});

router.post("/signup", signUp)
router.post("/signin", signin)

router.post("/addplace", createDestination);
router.get("/getplaces", getPlaces);
router.post("/booking", createBooking);
router.get("/getbookings/:id", getBookingById)
router.delete("/deletebooking/:id", deleteBooking)

export default router;