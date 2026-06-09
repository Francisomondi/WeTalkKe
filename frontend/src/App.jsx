import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import { Routes, Route, Navigate } from 'react-router-dom'
import HomePage from './pages/Homepage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ProfilePage from './pages/ProfilePage'
import ChatPage from './pages/ChatPage'
import SettingsPage from './pages/SettingsPage'
import { useAuthStore } from './store/useAuthStore'
import { Loader } from 'lucide-react'
import { Toaster } from 'react-hot-toast'
import { useThemeStore } from './store/useThemeStore'



const App = () => {

  const {authUser, checkAuth,isCheckingAuth,onlineUsers} = useAuthStore()
  const { theme } = useThemeStore()

  console.log({onlineUsers})

  useEffect(() => {
    checkAuth()
  }, [checkAuth])

  

  if(isCheckingAuth && !authUser)  
    return (<div className="flex items-center justify-center h-screen"><Loader className="size-10 animate-spin" /></div>
  )
  return (
    <div data-theme={theme} className="min-h-screen bg-base-100">
      <Navbar />
      <Routes>
        {/* Define your routes here */}
        <Route path="/" element={authUser ? <HomePage /> : <Navigate to="/login" />} />
        <Route path="/login" element={!authUser ? <LoginPage /> : <Navigate to="/" />}/>
        <Route path="/register" element={!authUser ? <RegisterPage /> : <Navigate to="/" />} />
        <Route path="/profile" element={authUser ? <ProfilePage /> : <Navigate to="/login" />} />
        <Route path="/chat" element={authUser ? <ChatPage /> : <Navigate to="/login" />} />
        <Route path="/settings" element={ <SettingsPage /> }/>
        {/* Add more routes as needed */}

      </Routes>
      <Toaster />
    </div>
  )
}

export default App
