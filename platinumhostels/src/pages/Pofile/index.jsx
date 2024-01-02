import React, { useState } from 'react'

import ProfileForm from './components/ProfileForm'

import arrow from '../../assets/icons/right-arrow-3.png'

export default function Profile() {
  
  const [isDisabled, setBtnEnability] = useState(true) 

  const enableBtn = () => {
    setBtnEnability(false)
    console.log(isDisabled);
  }

  return (
    <div className=''>
        <div className='bg-white rounded-md py-8 px-4'>
            <h2 className='text-primary text-left'>
                My Profile
            </h2>

            <p className='mt-4'>
            This personalized space is designed to empower you to control and update your hostel information effortlessly. 
            </p>
        </div>

        <div className='bg-white rounded-md py-8 px-4 mt-4 flex justify-center items-center'>
            <div className='min-w-[100%] mx-auto sm:min-w-[500px] flex flex-col items-center'>
                <div className='bg-amber-600 p-2 rounded-[50%] w-[150px] h-[150px] flex justify-center items-center'>
                    <h2 className='text-white text-[50px]'>JD</h2>
                </div>

                <div className='w-full mt-8'>
                    <ProfileForm enableBtn={enableBtn}/>

                    <div className='mt-8'>
                        <button 
                            className={`flex justify-center items-center gap-2 ${isDisabled ? 'btn-disabled' : 'group btn-primary1'} text-white`}
                            disabled={isDisabled}
                            onClick={()=> {
                                console.log('save changes');
                            }}
                        >
                            Save Changes
                            <figure className='arrow w-5 group-hover:translate-x-1 transition-all duration-150'>
                                <img src={arrow} alt='right arrow'/>
                            </figure>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
