import { Schema ,  model } from "mongoose";


const linkSchema = new Schema({
    title :{
        type:String,
        require :true,
    },
    slug: {
        type:String,
        require :true,
        unique : true,
    },
    target: {
        type :String,
        require: true,
    },
    views :{
        type:Number,
        default :0,
    },
    user :{
        type : Schema.Types.ObjectId,
        ref: "User",
        require: true
    }

},{
    timestamps :true
})

const link = model("link" ,linkSchema)

export default link;