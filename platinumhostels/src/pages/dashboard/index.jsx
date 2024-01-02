import React from 'react'

//data
import userr from '../../data/user.json'

//sections
import ProfileSummary from './components/sections/ProfileSummary';
import BookingDetails from './components/sections/BookingDetails';
import RoomDetails from './components/sections/RoomDetails';
import ArrivalEvacuation from './components/sections/ArrivalEvacuation';

export default function Dashboard({user}) {
  console.log(user);
  return (
    <div>
      <div>
        <div className='bg-white p-4 rounded-md'>
          <h3>
            Welcome to Platinum Portal, {userr.personalInfo.fullName}
          </h3>
        </div>

        <ProfileSummary user={userr} />

        <div className='grid gap-4 grid-cols-1 lg:grid-cols-2'>
          <BookingDetails />
          <RoomDetails />
          <ArrivalEvacuation />
        </div>

      </div>
    </div>
  )
}
