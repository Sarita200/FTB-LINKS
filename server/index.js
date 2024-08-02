import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import dotenv from "dotenv"
import { postLink ,getRedirect } from "./controllers/link.js"

dotenv.config();

const app = express()
app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 5000

const connectDB = async ()=>{
    const conn = await mongoose.connect(process.env.MONGO_URL)
    if(conn){
        console.log("MongoDB connected Successfully📦")
    }
}
connectDB();


app.get('/health' , (res,req) =>{
    res.json({
        success: true,
        message:"Welcome to FTB Links"
    })
})

app.post('/link', postLink)

app.get('/:slug', getRedirect)

app.listen(PORT , () =>{
    console.log(`server started on port ${PORT}`)
})
