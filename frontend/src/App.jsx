import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ProfilePage from './pages/ProfilePage'
import ChatPage from './pages/ChatPage'
import SettingsPage from './pages/SettingsPage'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        {/* Define your routes here */}
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        {/* Add more routes as needed */}

      </Routes>
    </div>
  )
}

export default App
