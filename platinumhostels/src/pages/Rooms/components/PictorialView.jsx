import React from 'react'

//components
import TryAgain from './TryAgain'

export default function PictorialView({availableRooms, handleSelectedRoom}) {
    /* console.log("pic view availableRooms: ", availableRooms)
    if (!Array.isArray(availableRooms)) {
         //throw new Error ("Couldn't Fetch available rooms.") 
        console.log('error');
    } */
  return (
    <div>
        {    
            /* availableRooms.length > 0 ? */
            Array.isArray(availableRooms) ?
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
                                        Hostel: ${room.hostelLocation}\nBlock: ${room.roomBlock}\nRoom Type: ${room.roomType}\nRoom Number: ${room.roomNumber}\nCapacity: ${room.capacity}\nCurrent Occupants: ${room.currentOccupants}
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
                    <p className=''>Sorry! There are no available rooms.</p>
                </div>
            :
            <TryAgain/>
        }
    </div>
  )
}
