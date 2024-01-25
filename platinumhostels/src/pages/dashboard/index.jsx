import React, { useEffect } from 'react'
import { useOutletContext } from "react-router-dom";

//data
import userr from '../../data/user.json'

//sections
import ProfileSummary from './components/sections/ProfileSummary';
import BookingSummary from './components/sections/BookingSummary';
import RoomDetails from './components/sections/RoomDetails';
import ArrivalEvacuation from './components/sections/ArrivalEvacuation';

//context
import { useUserContext } from '../../Context/UserContext';

export default function Dashboard() { 
  //console.log('mounting dashoard');
  const {user} = useUserContext()
  const {toggleSideBar} = useOutletContext();

  useEffect(() => {toggleSideBar(false)}, [])

  return (
    <div>
      <div>
        <div className='bg-white p-4 rounded-md border'>
          <h3>
            Welcome to Platinum Portal, {user.displayName}
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
