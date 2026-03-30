import express from "express";
import cors from "cors";
import helmet from "helmet";


import "dotenv/config";


const app = express();

app.use(helmet());

app.use(cors({
    origin: "*"
}));
app.use(express.json());


const connectDB = async()=>{
    try{
        const conn = await mongoose.connect(process.env.DB_URL);
        console.log("mongo connection soocessful");
    }catch(err){
        console.log(err);
    }
}

connectDB();
app.get("/", (req, res) => {
    res.json({ status: "ok" });
});




import router from "./routes/routes.js";
import mongoose from "mongoose";


app.use("/api/v1", router);


export default app;