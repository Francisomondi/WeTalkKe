import { generateToken } from "../lib/utils.js"
import userModel from "../models/user.model.js"
import bcrypt from "bcryptjs";

export const register = async (req, res) => {
   try {
     const {username, email, phone, password} = req.body
      //validation
     if (!username || !email || !phone || !password) {
        return res.status(400).json({message: "All fields are required"})
     }
     //password validation
     if(password.length < 6) {
        return res.status(400).json({message: "Password must be at least 6 characters"})
     }
     //check if user already exists
     const ExistingUser = await userModel.findOne({email: email.toLowerCase()})
     if (ExistingUser) {
        return res.status(400).json({message: "User already exists"})
     }
     
     //hashing password
     const salt = await bcrypt.genSalt(10)
     const hashedPassword = await bcrypt.hash(password, salt)

     //create user
     const user = new userModel({
        username,
        email: email.toLowerCase(), 
        phone,
        password: hashedPassword
     })
        const userId = user._id
        await user.save()
        generateToken(userId, res)
     
    
     res.status(201).json({
        _id: user._id, 
        username: user.username, 
        email: user.email, 
        phone: user.phone 
    })    

   } catch (error) {
    console.log("Register Error")
     res.status(500).json({message: "Error registering user"})
   }
}

export const login = async (req, res) => {
    const {email, password} = req.body
    if (!email || !password) {
        return res.status(400).json({message: "All fields are required"})
    }
    const user = await userModel.findOne({email: email.toLowerCase()})
    if (!user) {
        return res.status(400).json({message: "User does not exist"})
    }
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
        return res.status(400).json({message: "Invalid credentials"})
    }
    generateToken(user._id, res)
    res.send("Login")
}
export const logout = (req, res) => {
    const {jwt} = req.cookies
    if (!jwt) {
        return res.status(400).json({message: "No token provided"})
    }    
    res.clearCookie("jwt")
    res.send("Logout")  

}   