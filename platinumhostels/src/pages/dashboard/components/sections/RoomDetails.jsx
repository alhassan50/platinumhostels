import React, { useEffect, useMemo, useState } from 'react'
import { Link, defer, Await } from 'react-router-dom'

//icons
import arrow from '../../../../assets/icons/right-arrow-3.png'

//component
import Loader from '../../../../shared/components/Loader'
import TryAgain from '../../../Rooms/components/TryAgain'
import RoomDetailsLoader from './RoomDetailsLoader'

//context
import { useUserContext } from '../../../../Context/UserContext'

//utility
import getRoomDetails from '../../../../utility/getRoomDetails'

const loadRoomDetails = (userTokenID) => {
    const roomPromise = getRoomDetails(userTokenID)
    return defer({room: roomPromise})
}

export default function RoomDetails() {
    //console.log('mounting room details component');

    const {userTokenID} = useUserContext()

    const [refreshComponent, setRefreshComponent] = useState(false)
    const [tokenState, setTokenState] = useState('pending')
    const [initialRender, setInitialRender] = useState(true)

    const roomPromise = useMemo(() => {
        if (userTokenID) {
            setTokenState('valid')
            return loadRoomDetails(userTokenID)
        } else {
            if (!initialRender) {
                setTokenState(null)
            }
        }
        setInitialRender(false)
    }, [userTokenID, refreshComponent])
   

  return (
    <div className='bg-white rounded-md border py-8 px-4 row-span-2'>
        <h3>Room Details</h3>
        {
            tokenState === 'valid' ?
                <React.Suspense
                    fallback={
                        <RoomDetailsLoader/>
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
                            return (
                            <div>
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

                                {/* <table className='w-full mt-4'>
                                    <tbody>
                                        <tr>
                                            <th>
                                                <div className='bg-neutral-200 animate-pulse w-[100%] h-4 rounded-lg'></div>
                                            </th>
                                            <td>
                                                <div className='bg-neutral-200 animate-pulse w-[100%] h-4 rounded-lg'></div>                        
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>
                                                <div className='bg-neutral-200 animate-pulse w-[100%] h-4 rounded-lg'></div>
                                            </th>
                                            <td>
                                                <div className='bg-neutral-200 animate-pulse w-[100%] h-4 rounded-lg'></div>                        
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>
                                                <div className='bg-neutral-200 animate-pulse w-[100%] h-4 rounded-lg'></div>
                                            </th>
                                            <td>
                                                <div className='bg-neutral-200 animate-pulse w-[100%] h-4 rounded-lg'></div>                        
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>
                                                <div className='bg-neutral-200 animate-pulse w-[100%] h-4 rounded-lg'></div>
                                            </th>
                                            <td>
                                                <div className='bg-neutral-200 animate-pulse w-[100%] h-4 rounded-lg'></div>                        
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>
                                                <div className='bg-neutral-200 animate-pulse w-[100%] h-4 rounded-lg'></div>
                                            </th>
                                            <td>
                                                <div className='bg-neutral-200 animate-pulse w-[100%] h-4 rounded-lg'></div>                        
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>
                                                <div className='bg-neutral-200 animate-pulse w-[100%] h-4 rounded-lg'></div>
                                            </th>
                                            <td>
                                                <div className='bg-neutral-200 animate-pulse w-[100%] h-4 rounded-lg'></div>                        
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>
                                                <div className='bg-neutral-200 animate-pulse w-[100%] h-4 rounded-lg'></div>
                                            </th>
                                            <td>
                                                <div className='bg-neutral-200 animate-pulse w-[100%] h-4 rounded-lg'></div>                        
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>
                                                <div className='bg-neutral-200 animate-pulse w-[100%] h-4 rounded-lg'></div>
                                            </th>
                                            <td>
                                                <div className='bg-neutral-200 animate-pulse w-[100%] h-4 rounded-lg'></div>                        
                                            </td>
                                        </tr>
                                    </tbody>

                                    <div className='bg-neutral-200 rounded-lg animate-pulse py-3 px-6 mt-8 h-11 w-full max-w-[245px]'>
                                    </div>
                                </table> */}
                            </div>)
                        }}
                    </Await>
                </React.Suspense>
            :
                tokenState === 'pending' ?
                    <RoomDetailsLoader />
                :   
                    <div className='mt-4 flex justify-start items-center'>
                        <p>Couldn't find your room details.</p>
                    </div>
        }
    </div>
  )
}
