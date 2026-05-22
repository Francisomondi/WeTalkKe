import jwt from "jsonwebtoken";
import userModel from "../models/user.model.js";

export const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt
        if (!token) {
            return res.status(401).json({message: "Unauthorized"})
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = {id: decoded.id}
        next()
    } catch (error) {
        console.log("Auth Middleware Error")
        res.status(401).json({message: "Unauthorized"})
    }
}