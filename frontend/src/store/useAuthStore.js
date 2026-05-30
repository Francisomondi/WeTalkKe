import {create} from "zustand"
import { axiosInstance } from "../lib/axios"

export const useAuthStore = create((set) => ({
    authUser: null,
    isLoggingIn: false,
    isSigningUp: false,
    isUpdatingprofile: false,
    loading: false,
    isCheckingAuth: true,
    
    checkAuth: async () => {
        set({ isCheckingAuth: true })
        try {
            const res = await axiosInstance.get("/auth/check-auth",
            { withCredentials: true })
            set({ authUser: res.data.user })
        } catch (error) {
            console.log("error in checkAuth", error.message)
            set({ authUser: null })
        } finally {
            set({ isCheckingAuth: false })
        }
    }
    //signUp: async (formData) => {}
}))