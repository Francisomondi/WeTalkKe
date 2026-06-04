import {create} from "zustand"
import { axiosInstance } from "../lib/axios"
import toast from "react-hot-toast"

export const useAuthStore = create((set) => ({
    authUser: null,
    isLoggingIn: false,
    isSigningUp: false,
    isUpdatingProfile: false,
    loading: false,
    isCheckingAuth: true,
    onlineUsers: [],
    
    checkAuth: async () => {
        set({ isCheckingAuth: true })
        try {
            const res = await axiosInstance.get("/auth/check-auth",
            { withCredentials: true })
            set({ authUser: res.data })
        } catch (error) {
            console.log("error in checkAuth", error.message)
            set({ authUser: null })
        } finally {
            set({ isCheckingAuth: false })
        }
    },
    signUp: async (formData) => {
        set({ isSigningUp: true })
        try {
            const res = await axiosInstance.post("/auth/register", formData)
            set({ authUser: res.data })
            toast.success(res.data.message || "Registration successful")
            
        } catch (error) {
            console.log("error in signUp", error.message)
            toast.error(error.response?.data?.message || "Registration failed")
        } finally {
            set({ isSigningUp: false })
        }
    },

    login: async (formData) => {
        set({ isLoggingIn: true })
        try {
            const res = await axiosInstance.post("/auth/login", formData)
            set({ authUser: res.data })
            toast.success(res.data.message || "Login successful")
        } catch (error) {
            console.log("error in login", error.message)
            toast.error(error.response?.data?.message || "Login failed")
        } finally {
            set({ isLoggingIn: false })
        }
    },

    logout: async () => {
        try {
            await axiosInstance.post("/auth/logout")
            set({ authUser: null })
            toast.success("Logged out successfully")
        } catch (error) {
            console.log("error in logout", error.message)
            toast.error("Logout failed")
        }   
    },

    updateProfile: async (formData) => {
        set({ isUpdatingProfile: true });
        try {
        const res = await axiosInstance.put("/auth/update-profile", formData);
        set({ authUser: res.data });
        toast.success("Profile updated successfully");
        } catch (error) {
        console.log("error in update profile:", error);
        toast.error(
            error.response?.data?.message ||
            "Failed to update profile"
        );
        } finally {
        set({ isUpdatingProfile: false });
        }
    },
}))