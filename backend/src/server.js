import express from "express";
import {connectDb} from "./lib/db.js"
import authRoutes from "./routes/auth.routes.js"
import dotenv from "dotenv"
import { connect } from "mongoose";
import cors from "cors"
import cookieparser from "cookie-parser"

dotenv.config()

const app = express()
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieparser())


app.use("/api/auth", authRoutes)  
const PORT = process.env.PORT || 3000

app.listen (PORT, () => {
    console.log("Server is running on port " + PORT)
    connectDb()
})