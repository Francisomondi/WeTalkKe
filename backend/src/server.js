import express from "express";
import {connectDb} from "./lib/db.js"
import authRoutes from "./routes/auth.routes.js"
import dotenv from "dotenv"
import { connect } from "mongoose";

dotenv.config()

const app = express()

app.use("/api/auth", authRoutes)  
const PORT = process.env.PORT || 3000

app.listen (PORT, () => {
    console.log("Server is running on port " + PORT)
    connectDb()
})