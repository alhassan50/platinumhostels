import React, { useState, useEffect } from 'react'
import { useOutletContext } from "react-router-dom";

//components
import ProfileForm from './components/ProfileForm'



export default function Profile() {
    const {toggleSideBar} = useOutletContext();
    useEffect(() => {toggleSideBar(false)}, [])

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
                <div className='bg-amber-600 p-2 rounded-[50%] w-[150px] h-[150px] flex justify-center items-center'>
                    <h2 className='text-white text-[50px]'>JD</h2>
                </div>

                <div className='w-full mt-8'>
                    <ProfileForm/>
                </div>
            </div>
        </div>
    </div>
  )
}
