import React, {useEffect} from 'react'
import { useOutletContext } from "react-router-dom";

//components
import EmailSettings from './components/EmailSettings.jsx'
import PasswordSettings from './components/PasswordSettings.jsx'

export default function AccountSettings() {
    const {toggleSideBar} = useOutletContext();
    useEffect(() => {toggleSideBar(false)}, [])

  return (
    <div>
        <div>
            <div className='bg-white rounded-md py-8 px-4 border'>
                <h2 className='text-primary text-left'>
                    Account Settings
                </h2>

                <p className='mt-4'>
                    Manage Your Account with Ease - Access and customize your account settings effortlessly.
                </p>
            </div>

            <div className='bg-white rounded-md py-8 px-4 mt-4 border'>
                <EmailSettings />
                <hr className='my-10' />
                <PasswordSettings />
            </div>
        </div>
    </div>
  )
}
