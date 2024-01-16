import React from 'react'

//components
import TryAgain from './TryAgain'

export default function PictorialView({availableRooms, handleSelectedRoom}) {
    console.log("pic view availableRooms: ", availableRooms)
    /* if (availableRooms) {
        throw new Error ("Couldn't Fetch available rooms.")
    } */
  return (
    <div>
        {    
            availableRooms.length > 0 ?
            <div className='flex flex-wrap justify-center gap-8'>
                {
                    availableRooms.map((room, index) => (
                        room.capacity > room.currentOccupants && 
                            <div 
                                key={room.roomID} 
                                id={room.roomID} 
                                className='cursor-pointer hover:bg-primary group flex justify-center items-center bg-secondary border- w-[80px] h-[80px] rounded-[50%]'
                                title={`
                                    Hostel: ${room.hostelLocation}\nRoom Type: ${room.roomType}\nRoom Number: ${room.roomNumber}\nCapacity: ${room.capacity}\nCurrent Occupants: ${room.currentOccupants}
                                `}
                                onClick={() => (
                                    handleSelectedRoom(room)
                                )}
                            >
                                <h3 className='text-primary group-hover:text-secondary'>
                                    {room.roomNumber}
                                </h3>
                            </div>
                    ))
                }
            </div>
            :
            <div>
                <p className='text-center'>Sorry! No Available Rooms</p>
            </div>
        }
    </div>
  )
}
