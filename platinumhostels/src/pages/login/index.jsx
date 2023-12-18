import React from 'react'

//components
import LoginForm from './components/LoginForm'
import QuickNav from './components/QuickNav'

export default function Login() {
  return (
    <div className='px-[5%] min-h-screen flex justify-center items-center flex-col'>
      <div>
        <h3 className='h2 mb-7 text-[24px]'>
          Log in to Platinum Hostel Portal
        </h3>

        <LoginForm />
      </div>

      <div className='mt-10'>
        <QuickNav />
      </div>
    </div>
  )
}
