import React, { useState, useEffect } from 'react'
import { useOutletContext } from "react-router-dom";

//components
import ProfileForm from './components/ProfileForm'

//context
import { useUserContext } from '../../Context/UserContext';

//utility
import createAvatar from '../../utility/createAvatar';


export default function Profile() {
    const {user} = useUserContext()

    const {toggleSideBar} = useOutletContext();

    useEffect(() => {toggleSideBar(false)}, [])

    const [avatar, setAvatar]= useState(null)

    useEffect(() => {
        if (!user.photoURL) {
            setAvatar(createAvatar(user.displayName))
        }
    }, [user.displayName, user.photoURL])

  return (
    <div className=''>
        <div className='bg-white rounded-md py-8 px-4 border'>
            <h2 className='text-primary text-left'>
                My Profile
            </h2>

            <p className='mt-4'>
                This personalized space is designed to empower you to control and update your hostel information effortlessly. 
            </p>
        </div>

        <div className='bg-white rounded-md py-8 px-4 mt-4 flex justify-center items-center border'>
            <div className='min-w-[100%] mx-auto sm:min-w-[500px] flex flex-col items-center'>
                {
                    user.photoURL ? 
                    <div className='p-2 rounded-[50%] w-[100px] h-[100px] flex justify-center items-center'>
                        <figure>
                            <img src={user.photoURL} alt={user.displayName} />
                        </figure>
                    </div>
                    :
                    <div className='bg-amber-600 p-2 rounded-[50%] w-[150px] h-[150px] flex justify-center items-center'>
                        <h2 className='text-white text-[50px]'>
                            {avatar}
                        </h2>
                    </div>
                }

                <div className='w-full mt-8'>
                    <ProfileForm/>
                </div>
            </div>
        </div>
    </div>
  )
}
