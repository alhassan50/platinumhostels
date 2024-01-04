import React from 'react'
import { Link } from 'react-router-dom'

import arrow from '../../../../assets/icons/right-arrow.png'

export default function ProfileSummary(props) {
  return (
    <div className='mt-4 py-8 px-4 bg-white rounded-md border'>
        <div className='flex gap-4 items-center'>
            <div className='bg-amber-600 p-2 rounded-[50%] w-[100px] h-[100px] flex justify-center items-center'>
                <h2 className='text-white'>JD</h2>
            </div>

            <div>
                <h3>
                    {props.user.personalInfo.fullName}
                </h3>

                <p className='mt-1 text-sm text-primary'>
                    {props.user.personalInfo.phoneNumber}
                </p>
                

                <Link to={'/platinumportal/profile'} className='mt-1 group flex gap-1 items-center hover:underline'>
                    <p className='text-sm text-primary'>
                        More Profile Details 
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
