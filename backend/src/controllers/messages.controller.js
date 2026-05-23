import messageModel from "../models/message.model.js"
import userModel from "../models/user.model.js"

export const getUsersForSidebar = async (req, res) => {
    try {
        const loggedInUsers = req.user._id
        const filteredUsers = await userModel.find({_id: {$ne: loggedInUsers}}).select("-password")
        res.status(200).json(filteredUsers)
    } catch (error) {
        console.log("Get Users for Sidebar Error")
        res.status(500).json({message: "Error fetching users for sidebar"})
    }    
}

export const getMessages = async (req, res) => {    
    try {
        const {id: usersChatId} = req.params
        const senderId = req.user._id

        const messages = await messageModel.find({
            $or: [
                {senderId: senderId, receiverId: usersChatId},
                {senderId: usersChatId, receiverId: senderId}
            ]        
        })
        res.status(200).json(messages)
    } catch (error) {
        console.log("Get Messages Error")
        res.status(500).json({message: "Error fetching messages"})
    }    
}

export const createMessage = async (req, res) => {
    try {
        const {id: receiverId} = req.params
        const senderId = req.user._id
        const {text, image} = req.body 
        
        let imageUrl = ""
        if (image) {
            const cloudinaryResponse = await cloudinary.uploader.upload(image)
            imageUrl = cloudinaryResponse.secure_url
        }
        
        const newMessage = await messageModel.create({senderId, receiverId, text, image: imageUrl})
        await newMessage.save()
        res.status(200).json(newMessage)
    } catch (error) {
        console.log("Create Message Error")
        res.status(500).json({message: "Error creating message"})
    }    
}   