import mongoose from "mongoose";
import userModel from "./user.model";


const userSchema = new mongoose.Schema({
    senderId: {
        type: mongoose.Schema.types.ObjectId,    
        ref: userModel,
        required: true
    },
    receiverId: {
        type: mongoose.Schema.types.ObjectId,
        ref: userModel,
        required: true
    },
    text: {
        type: String,
    },
    image: {
        type: String,
        
    },

}, {timestamps: true})
      

export default mongoose.model("message", userSchema)
