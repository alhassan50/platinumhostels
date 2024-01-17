import React from 'react'

//components
import TryAgain from './TryAgain';

export default function TableView({availableRooms, handleSelectedRoom}) {
    /* console.log("table view availableRooms: ", availableRooms)
    if (!Array.isArray(availableRooms)) {
       //throw new Error ("Couldn't Fetch available rooms.") 
        console.log('error');
    } */
  return (
    <div className=''>
        <div>
            {
                 Array.isArray(availableRooms) ?
                    availableRooms.length > 0 ?
                    <table className='min-w-full'>
                        <thead className='room-table-header'>
                            <tr>
                                <th className='hostel-th'>Hostel</th>
                                <th className='block-td'>Block</th>
                                <th className='room-type-th'>Type</th>
                                <th>Price</th>
                                <th>Number</th>
                                <th>Capacity</th>
                                <th>Current Occupants</th>
                            </tr>
                        </thead>
                        <tbody>
                            {availableRooms.map(room => (
                                room.capacity > room.currentOccupants && 
                                <tr 
                                    key={room.roomID} 
                                    id={room.roomID}
                                    className='cursor-pointer hover:bg-primary group'
                                    onClick={() => (
                                        /* console.log('id: ', room.roomID) */
                                        handleSelectedRoom(room)
                                    )}
                                >
                                    <td className='capitalize hostel-td text-primary group-hover:text-secondary'>
                                        {room.hostelLocation}
                                    </td>
                                    <td className='capitalize block-td text-primary group-hover:text-secondary'>
                                        {room.roomBlock}
                                    </td>
                                    <td className='capitalize room-type-td text-primary group-hover:text-secondary'>
                                        {room.roomType}
                                    </td>
                                    <td className='capitalize room-price-td text-primary group-hover:text-secondary'>
                                        GH₵ {room.roomPrice}
                                    </td>
                                    <td className='capitalize room-number-td text-primary group-hover:text-secondary'>
                                        {room.roomNumber}
                                    </td>
                                    <td className='capitalize room-capacity-td text-primary group-hover:text-secondary'>
                                        {room.capacity}
                                    </td>
                                    <td className='capitalize room-capacity-td text-primary group-hover:text-secondary'>
                                        {room.currentOccupants}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    :
                    <div>
                    <p className='text-center'>Sorry! No Available Rooms</p>
                    </div>
                :
                <TryAgain/>
            }
        </div>
    </div>
  )
}