import {create} from "zustand"
import toast from "react-hot-toast"
import {axiosInstance} from "../lib/axios"
import { useAuthStore } from "./useAuthStore"

export const useChatStore  = create((set,get) => ({
    messages: [],
    users: [],
    selectedUser: null,
    isUsersLoading: false,
    isMessagesLoading: false,


    
    getUsers: async () => {
        set({ isUsersLoading: true })
        try {
            const res = await axiosInstance.get("/messages/users")
            set({users: res.data})
        } catch (error) {
            toast.error(error.response?.data?.message || "Failed to fetch users")
        }
        finally {       
              set({isUsersLoading: false})
        }
    },
    getMessages: async (userId) =>{
        
        set({isMessagesLoading: true})
           
        try {
            const res = await axiosInstance.get(`/messages/${userId}`)
            set({messages: res.data})
        } catch (error) {
            toast.error(error.response?.data?.message || "Failed to fetch messages")
        }
        finally {
                set({isMessagesLoading: false}) 
        }
    },  

    sendMessage: async (messageData) => {
        const{selectedUser,messages} = get()
        if (!messageData.text.trim() && !messageData.image) return;
        try {
            const res = await axiosInstance.post(`/messages/${selectedUser._id}`, messageData)
            set({messages: [...messages, res.data]})
            toast.success("Message sent")
        } catch (error) {
            toast.error(error.response?.data?.message || "Failed to send message")
        }
    },

    subscribeToNewMessages: (callback) => {
        const {selectedUser} = get()
        if (!selectedUser) return;
        
        const socket = useAuthStore.getState().socket
        if (!socket) return;    
        socket.on("new-message", (message) => {
            //const {selectedUser} = get()
           // if (message.senderId === selectedUser._id || message.receiverId === selectedUser._id) {
            //    callback(message)
            // }
            set({
                messages: [...get().messages, message]
            })
        })
    },

    unsubscribeFromNewMessages: () => {
        const socket = useAuthStore.getState().socket
        if (!socket) return;    
        socket.off("new-message")
    },

    //optimize it later by only fetching messages for the selected user instead of all users
    setSelectedUser: (user) => set({selectedUser: user})  

})) 