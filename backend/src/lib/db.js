import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
 export const connectDb = async () => { 
    try {
   const db =await mongoose.connect(process.env.MONGODB_URI, {
   
   
   })
   console.log("mongodb connected", db.connection.host);
    
} catch (error) {
    console.log("mongodb connection error", error)
}
   }


