import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import { Routes, Route, Navigate } from 'react-router-dom'
import Homepage from './pages/Homepage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ProfilePage from './pages/ProfilePage'
import ChatPage from './pages/ChatPage'
import SettingsPage from './pages/SettingsPage'
import { useAuthStore } from './store/useAuthStore'
import { Loader } from 'lucide-react'


const App = () => {

  const {authUser, checkAuth,isCheckingAuth} = useAuthStore()

  useEffect(() => {
    checkAuth()
  }, [checkAuth])

  console.log({authUser})

  if(isCheckingAuth && !authUser)  
    return (<div className="flex items-center justify-center h-screen"><Loader className="size-10 animate-spin" /></div>
  )
  return (
    <div>
      <Navbar />
      <Routes>
        {/* Define your routes here */}
        <Route path="/" element={authUser ? <Homepage /> : <Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={!authUser ? <RegisterPage /> : <Navigate to="/login" />} />
        <Route path="/profile" element={authUser ? <ProfilePage /> : <Navigate to="/login" />} />
        <Route path="/chat" element={authUser ? <ChatPage /> : <Navigate to="/login" />} />
        <Route path="/settings" element={ <SettingsPage />}/>
        {/* Add more routes as needed */}

      </Routes>
    </div>
  )
}

export default App
