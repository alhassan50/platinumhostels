import React from 'react'

export default function PictorialView({availableRooms, handleSelectedRoom}) {
  return (
    <div className='flex flex-wrap justify-center gap-8'>
        {
            availableRooms.map(room => (
                room.capacity > room.currentOccupants && 
                    <div 
                        key={room.id} 
                        id={room.id} 
                        className='cursor-pointer hover:bg-primary group flex justify-center items-center bg-secondary border- w-[80px] h-[80px] rounded-[50%]'
                        title={`
                            Hostel: ${room.hostel}\nRoom Type: ${room.type}\nRoom Number: ${room.number}\nCapacity: ${room.capacity}\nCurrent Occupants: ${room.currentOccupants}
                        `}
                        onClick={() => (
                            handleSelectedRoom(room)
                        )}
                    >
                        <h3 className='text-primary group-hover:text-secondary'>
                            {room.number}
                        </h3>
                    </div>
            ))
        }
    </div>
  )
}
