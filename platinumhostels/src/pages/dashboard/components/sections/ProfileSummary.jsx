import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

//icons
import arrow from '../../../../assets/icons/right-arrow.png'

//context
import { useUserContext } from '../../../../Context/UserContext'

//utility
import createAvatar from '../../../../utility/createAvatar'

export default function ProfileSummary() {
    const {user} = useUserContext()
    const [avatar, setAvatar]= useState(null)

    useEffect(() => {
        if (!user.photoURL) {
            setAvatar(createAvatar(user.displayName))
        }
    }, [user.displayName, user.photoURL])

  return (
    <div className='mt-4 py-8 px-4 bg-white rounded-md border '>
        <div className='flex gap-4 items-center flex-col justify-center s-sm:flex-row s-sm:justify-normal'>
            {
                user.photoURL ? 
                <div className='p-2 rounded-[50%] w-[100px] h-[100px] flex justify-center items-center'>
                    <figure>
                        <img src={user.photoURL} alt={user.displayName} />
                    </figure>
                </div>
                :
                <div className='bg-amber-600 p-2 rounded-[50%] w-[100px] h-[100px] flex justify-center items-center'>
                    <h2 className='text-white'>
                        {avatar}
                    </h2>
                </div>
            }

            <div className='text-center s-sm:text-left'>
                <h3>
                    {user.displayName}
                </h3>

                <p className='mt-1 text-sm text-primary'>
                    {user.email}
                </p>

                <p className='mt-1 text-sm text-primary'>
                    {user.phoneNumber}
                </p>
                

                <Link to={'/platinumportal/profile'} 
                    className='mt-1 group flex gap-1 items-center hover:underline justify-center s-sm:justify-normal'>
                    <p className='text-sm text-primary'>
                        Profile Details 
                    </p>

                    <figure className='arrow w-4 group-hover:translate-x-1 transition-all duration-150'>
                        <img src={arrow} alt='right arrow'/>
                    </figure>
                </Link>
            </div>
        </div>
    </div>
  )
}
