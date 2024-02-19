import React, { useEffect, useMemo, useState } from 'react'
import { Link, defer, Await } from 'react-router-dom'
import { saveAs } from 'file-saver';
import { pdf } from '@react-pdf/renderer';

//icons
import arrow from '../../../../assets/icons/right-arrow-3.png'

//component
import Loader from '../../../../shared/components/Loader'
import TryAgain from '../../../Rooms/components/TryAgain'
import RoomDetailsLoader from './RoomDetailsLoader'
import { BookingDetailsDoc } from '../docs/BookingPDF'

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

    const {user, userTokenID} = useUserContext()

    const [refreshComponent, setRefreshComponent] = useState(false)
    const [tokenState, setTokenState] = useState('pending')
    const [initialRender, setInitialRender] = useState(true)
    const [isDownloading, setIsDownloading] = useState(false)

    const downloadPdf = async (room) => {
        console.log(room);
        
        setIsDownloading(true)
        try {
            const fileName = 'Booking Details.pdf';
        
            const blob = await pdf(
              <BookingDetailsDoc 
                displayName={user.displayName}
                email={user.email}
                phoneNumber={user.phoneNumber}
                room={room}
              />  
            ).toBlob();
        
            saveAs(blob, fileName);
        } catch(error) {
            alert("Couldn't download booking details")
        } finally {
            setIsDownloading(false)
        }
    };

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
                                                GH₵ {room.roomPrice}
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
                                

                                <button 
                                    onClick={() => (downloadPdf(room))}
                                    disabled={isDownloading}
                                    className={`${isDownloading ? ' btn-disabled ' : ' group btn-primary1 '} text-white flex justify-center items-center mt-8 gap-2`}
                                >
                                    {
                                        isDownloading ?
                                            'Please wait'
                                        :
                                            'Download Room Details'
                                    }
                                        
                                    {
                                        isDownloading ?
                                            <Loader />
                                        :
                                            <figure className='arrow w-5 group-hover:translate-x-1 transition-all duration-150'>
                                                <img src={arrow} alt='right arrow'/>
                                            </figure>
                                    }
                                </button>
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
