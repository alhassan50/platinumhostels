import React from 'react'

export default function RoomieCard(props) {
  return (
    <div className='border rounded-md hover:shadow-md'>
        <div className='p-4'>
            <div className='mb-5 flex justify-center items-center'>
                <div className={`${props.profileBg} p-2 rounded-[50%] w-[100px] h-[100px] flex justify-center items-center`}>
                    <h2 className='text-white'>{props.nameInit}</h2>
                </div>
            </div>

            <div className='grid gap-1 text-center'>
                <h3>
                    {props.fullName}
                </h3>
                <h3 className=''>
                    {props.phoneNumber}
                </h3>

                {props.email && 
                    <h3>
                        {props.email}
                    </h3>
                }

                {props.course && 
                    <h3>
                        {props.course}
                    </h3>
                }
            </div>
        </div>
    </div>
  )
}
