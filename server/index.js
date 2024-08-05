import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import dotenv from "dotenv"
import { postLink ,getRedirect ,getAllLinks } from "./controllers/link.js"
import {postSignUp} from "./controllers/user.js"

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


app.get('/health' , (req,res) =>{
    res.json({
        success: true,
        message:"Welcome to FTB Links"
    })
})

app.post('/link', postLink)

app.get('/links' , getAllLinks)

app.get('/:slug', getRedirect)

app.post('/signUp',postSignUp)



app.listen(PORT , () =>{
    console.log(`server started on port ${PORT}`)
})
