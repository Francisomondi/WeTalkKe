import express from "express";
import {connectDb} from "./lib/db.js"
import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import dotenv from "dotenv"
import { connect } from "mongoose";
import cors from "cors"
import cookieparser from "cookie-parser"

dotenv.config()

const app = express()


app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use(cookieparser())
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))


app.use("/api/auth", authRoutes) 
app.use("/api/messages", messageRoutes) 


const PORT = process.env.PORT || 3000

app.listen (PORT, () => {
    console.log("Server is running on port " + PORT)
    connectDb()
})