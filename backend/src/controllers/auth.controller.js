import { generateToken } from "../lib/utils.js"
import userModel from "../models/user.model.js"
import bcrypt from "bcryptjs";

export const register = async (req, res) => {
   try {
     const {username, email, phone, password, profilePicture} = req.body
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
        password: hashedPassword,
        profilePicture: profilePicture || ""
     })
        const userId = user._id
        await user.save()
        generateToken(userId, res)
     
    
     res.status(201).json({
        _id: user._id, 
        username: user.username, 
        email: user.email, 
        phone: user.phone ,
        profilePicture: user.profilePicture || ""
    })    

   } catch (error) {
    console.log("Register Error")
     res.status(500).json({message: "Error registering user"})
   }
}

export const login = async (req, res) => {
   try {
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
    res.status(200).send({
        _id: user._id,
        username: user.username,
        email: user.email,
        phone: user.phone,
        profilePicture: user.profilePicture || ""
    })
   } catch (error) {
    console.log("Login Error")
     res.status(500).json({message: "Error logging in"})
   }
}

export const getProfile = async (req, res) => {
    try {
        const user = await userModel.findById(req.user.id).select("-password")  
        if (!user) {
            return res.status(404).json({message: "User not found"})
        }
        res.status(200).json(user)
    } catch (error) {
        console.log("Get Profile Error")
        res.status(500).json({message: "Error fetching user profile"})
    }

}

export const updateProfile = async (req, res) => {  
    try {
        const {username, phone, profilePicture} = req.body
        const user = await userModel.findById(req.user.id)
        if (!user) {
            return res.status(404).json({message: "User not found"})
        }   
        user.username = username || user.username
        user.phone = phone || user.phone
        user.profilePicture = profilePicture || user.profilePicture
        await user.save()
        res.status(200).json(user)
    } catch (error) {
        console.log("Update Profile Error")
        res.status(500).json({message: "Error updating user profile"})
    }   

}

export const logout = (req, res) => {
    try {
       res.cookie("jwt", "", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        expires: new Date(0),
        sameSite: "strict",
       })
       res.status(200).json({message: "Logged out successfully"})
    } catch (error) {
        console.log("Logout Error")
        res.status(500).json({message: "Error logging out"})
    }

}   