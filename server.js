import app from "./src/app.js";
import "dotenv/config";

const port = process.env.PORT;


app.listen(port, "0.0.0.0",()=>{
    console.log(`http://localhost:${port}`);
})