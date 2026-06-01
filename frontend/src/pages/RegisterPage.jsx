import React, { useState } from 'react'
import { useAuthStore } from '../store/useAuthStore'
import { MessageSquare, User, Mail, Phone, Lock, EyeOff, Eye, Loader2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import AuthImagePattern from '../components/AuthImagePattern'
import toast from 'react-hot-toast'


const RegisterPage = () => {

  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    profilePicture: '',
    phone: '',
    confirmPassword: ''
  })

  const {signUp, isSigningUp} = useAuthStore()
  const validateForm = () => {
      if(!formData.username || !formData.email || !formData.password || !formData.confirmPassword) {
        toast.error("Please fill in all required fields")
        return false
      }
      return true
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const success = validateForm()
    if(success === true) {
      signUp(formData)
    }
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
                 <User className='w-5 h-5 text-gray-900' />
                 
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
                  <Mail className='size-5 text-gray-800' />
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
                  <Phone className='size-5 text-gray-400' />
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
                  <Lock className="size-5 text-base-content/40" />
                </div>
                <input
                  type={showPassword? "text": "password"}
                  name='password'
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  placeholder='••••••••'
                  className={`input input-bordered w-full pl-10`}
                />  
                <button 
                    type="button" 
                    className="absolute inset-y-0 right-0 pr-3 flex items-center" 
                    onClick={() => setShowPassword(!showPassword)}
                  > 
                  {showPassword ? (<EyeOff className="size-5 text-base-content/40" /> ): (
                  <Eye className="size-5 text-base-content/40" />)} 
                </button>                              
              </div>
            </div>
            <div className='form-control'>
               <label className='label'>
                <span className='label-text font-medium'>Confirm Password</span>
              </label>
              <div className='relative'>
                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                  <Lock className="size-5 text-base-content/40" />
                </div>
                <input
                  type={showPassword? "text": "password"}
                  name='confirmPassword'
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                  placeholder='••••••••'
                  className={`input input-bordered w-full pl-10`}
                />  
                <button 
                    type="button" 
                    className="absolute inset-y-0 right-0 pr-3 flex items-center" 
                    onClick={() => setShowPassword(!showPassword)}
                  > 
                  {showPassword ? (<EyeOff className="size-5 text-base-content/40" /> ): (
                  <Eye className="size-5 text-base-content/40" />)} 
                </button>                              
              </div>
            </div>

            <button
              type='submit'
              className='btn btn-primary w-full mt-4'
              disabled={isSigningUp}
            >
             {isSigningUp ? (
              <>
              <Loader2 className="size-5 animate-spin" />
              Loading ...
              </>
             ) : ('Create Account')}
            </button>
          </form>
          <div className='text-center'>
            <p className='text-sm text-base-content/60'>
              Already have an account?{' '}
              <Link to='/login' className='text-primary hover:underline'>
                Sign in
              </Link>
            </p>
          </div>
        </div>

      </div>

      {/* Right side with image */}
      <AuthImagePattern
        title="Join Our Community" 
        subtitle="Connect with like-minded individuals and grow your network."
      />

      
    </div>
  )
}
export default RegisterPage
