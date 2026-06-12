import express from "express";
import {connectDb} from "./lib/db.js"
import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import dotenv from "dotenv"
import { connect } from "mongoose";
import cors from "cors"
import cookieparser from "cookie-parser"
import {server, app} from "./lib/socket.js"

import path from "path"

dotenv.config()

const __dirname = path.resolve()
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use(cookieparser())
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))


app.use("/api/auth", authRoutes) 
app.use("/api/messages", messageRoutes) 

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "frontend/dist")))

    app.get("/{*any}", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"))
})
}


const PORT = process.env.PORT || 3000

server.listen (PORT, () => {
    console.log("Server is running on port " + PORT)
    connectDb()
})