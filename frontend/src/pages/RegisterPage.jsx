import React, { useState } from 'react'
import { useAuthStore } from '../store/useAuthStore'
import { MessageSquare, User } from 'lucide-react'

const RegisterPage = () => {

  const {showPasssword, setShowPassword} = useState(false)
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    profilePicture: '',
    phone: '',
    confirmPassword: ''
  })

  const {signUp, isSigningUp} = useAuthStore()
  const validateForm = () => {}
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div className='min-h-screen grid lg:grid-cols-2'>
      {/* Left side with image */}
      <div className='flex flex-col items-center justify-center p-6 sm:p-12 bg-gray-100'>
        <div className='w-full max-w-md space-y-8'>
          {/* Logo */}
          <div className='text-center mb-8'>
            <div className='flex flex-col items-center gap-2 group'>
              <div className='size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors'>
               <MessageSquare className='size-6 text-primary' />

              </div>
              <h1 className='text-2xl font-bold mt-2'>Create Account</h1>
              <p className='text-base-content/60'>Get Started with a free account</p>
            </div>
          </div>
          <form  onSubmit={handleSubmit} className='mt-8 space-y-6'>
            <div className='form-control'>
               <label className='label'>
                <span className='label-text font-medium'>Full Name</span>
              </label>
              <div className='relative'>
                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                  <User className='size-5 text-gray-400' />
                </div>
                <input
                  type='text'
                  name='username'
                  value={formData.username}
                  onChange={(e) => setFormData({...formData, username: e.target.value})}
                  placeholder='John Doe'
                  className='input input-bordered w-full pl-10'
                />  
                

              </div>
            </div>
            <div className='form-control'>
               <label className='label'>
                <span className='label-text font-medium'>Email</span>
              </label>
              <div className='relative'>
                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                  <User className='size-5 text-gray-400' />
                </div>
                <input
                  type='email'
                  name='email'
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder='johndoe@gmail.com'
                  className='input input-bordered w-full pl-10'
                />  
                

              </div>
            </div>
            <div className='form-control'>
               <label className='label'>
                <span className='label-text font-medium'>Phone</span>
              </label>
              <div className='relative'>
                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                  <User className='size-5 text-gray-400' />
                </div>
                <input
                  type='tel'
                  name='phone'
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  placeholder='(254) 456-7890'
                  className='input input-bordered w-full pl-10'
                />  
                

              </div>
            </div>

            <div className='form-control'>
               <label className='label'>
                <span className='label-text font-medium'>Password</span>
              </label>
              <div className='relative'>
                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                  <User className='size-5 text-gray-400' />
                </div>
                <input
                  type='password'
                  name='password'
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  placeholder='••••••••'
                  className='input input-bordered w-full pl-10'
                />  
                

              </div>
            </div>

            <div className='form-control'>
               <label className='label'>
                <span className='label-text font-medium'>Confirm Password</span>
              </label>
              <div className='relative'>
                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                  <User className='size-5 text-gray-400' />
                </div>
                <input
                  type='password'
                  name='confirmPassword'
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                  placeholder='••••••••'
                  className='input input-bordered w-full pl-10'
                />  
                

              </div>
            </div>
            

              
                      
           
          </form>
        </div>

      </div>
    </div>
  )
}
export default RegisterPage
