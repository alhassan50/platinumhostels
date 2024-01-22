import React, { useEffect, useMemo, useState } from 'react'
import { Link, defer, Await } from 'react-router-dom'

//icons
import arrow from '../../../../assets/icons/right-arrow-3.png'

//component
import Loader from '../../../../shared/components/Loader'
import TryAgain from '../../../Rooms/components/TryAgain'

//context
import { useUserContext } from '../../../../Context/UserContext'

//utility
import getRoomDetails from '../../../../utility/getRoomDetails'

//loader
const loadRoomDetails = (userTokenID) => {
    const roomPromise = getRoomDetails(userTokenID)
    return defer({room: roomPromise})
}

export default function RoomDetails() {
    const {userTokenID} = useUserContext()
    const [refreshComponent, setRefreshComponent] = useState(false)
    const roomPromise = useMemo(() => {
        return loadRoomDetails(userTokenID)
    }, [userTokenID, refreshComponent])
   

  return (
    <div className='bg-white rounded-md border py-8 px-4 row-span-2'>
        <h3>Room Details</h3>
        <React.Suspense
            fallback={
                <div className='mt-4 flex justify-start items-center'>
                    <p>
                        Fetching rooms details. Please wait 
                    </p>
                    &nbsp;
                    <Loader/>
                </div>
            }
        >
            <Await
                resolve={roomPromise.data.room}
                errorElement={
                    <TryAgain 
                        errorMessage={"Something went wrong."} 
                        setRefreshComponent={setRefreshComponent}
                    />
                }
            >
                {(room) => {
                    //console.log("room res: ", room);
                    return (<div>
                        <table className='w-full mt-4'>
                            <tbody>
                                <tr>
                                    <th>
                                        Hostel Location
                                    </th>
                                    <td>
                                        {room.hostelLocation}
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        Block Name
                                    </th>
                                    <td>
                                        {room.roomBlock}
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        Room Floor
                                    </th>
                                    <td>
                                        {
                                            room.roomFloor === 0 ?
                                                'Ground Floor'
                                            :
                                                room.roomFloor
                                        }
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        Room Number
                                    </th>
                                    <td>
                                        {room.roomNumber}
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        Room Type
                                    </th>
                                    <td>
                                        {room.roomType}
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        Room Price
                                    </th>
                                    <td>
                                        GHC {room.roomPrice}
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        Room Capacity
                                    </th>
                                    <td>
                                        {room.hostelLocation}
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        Current Occupants
                                    </th>
                                    <td>
                                        {room.currentOccupants}
                                    </td>
                                </tr>
                        
                            </tbody>
                        </table>

                        <Link 
                            to={'/platinumportal/payment'} 
                            className=''
                        >
                            <button className='btn-primary1 flex justify-center items-center gap-2 group mt-8 text-white'>
                            Download Room Details
                            <figure className='arrow w-5 group-hover:translate-x-1 transition-all duration-150'>
                                <img src={arrow} alt='right arrow'/>
                            </figure>
                            </button>
                        </Link>
                    </div>)
                }}
            </Await>
        </React.Suspense>
    </div>
  )
}
