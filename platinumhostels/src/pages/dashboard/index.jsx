import React from 'react'

//data
import userr from '../../data/user.json'

//sections
import ProfileSummary from './components/sections/ProfileSummary';
import BookingSummary from './components/sections/BookingSummary';
import RoomDetails from './components/sections/RoomDetails';
import ArrivalEvacuation from './components/sections/ArrivalEvacuation';

export default function Dashboard({user}) { 

  return (
    <div>
      <div>
        <div className='bg-white p-4 rounded-md border'>
          <h3>
            Welcome to Platinum Portal, {userr.personalInfo.fullName}
          </h3>
        </div>

        <div>
          <ProfileSummary user={userr} />
        </div>

        <div className='grid mt-4 gap-4 grid-cols-1 items-start lg:grid-cols-2'>
          <ArrivalEvacuation />
          <RoomDetails/>
          <BookingSummary/>
        </div>

      </div>
    </div>
  )
}
