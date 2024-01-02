import React from 'react'

//components
import EmailSettings from './components/EmailSettings.jsx'
import PasswordSettings from './components/PasswordSettings.jsx'

export default function AccountSettings() {
  return (
    <div>
        <div>
            <div className='bg-white rounded-md py-8 px-4'>
                <h2 className='text-primary text-left'>
                    Account Settings
                </h2>

                <p className='mt-4'>
                    Manage Your Account with Ease - Access and customize your account settings effortlessly.
                </p>
            </div>

            <div className='bg-white rounded-md py-8 px-4 mt-4'>
                <EmailSettings />
                <hr className='my-10' />
                <PasswordSettings />
            </div>
        </div>
    </div>
  )
}
