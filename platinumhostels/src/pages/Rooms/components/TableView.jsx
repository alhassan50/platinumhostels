import React from 'react'

export default function TableView({availableRooms, handleSelectedRoom}) {
  return (
    <div>
        <table className='min-w-full'>
            <thead className='room-table-header'>
                <tr>
                    <th className='hostel-th'>Hostel</th>
                    <th className='room-type-th'>Room Type</th>
                    <th>Room Price</th>
                    <th>Room Number</th>
                    <th>Room Capacity</th>
                    <th>Current Occupants</th>
                </tr>
            </thead>
            <tbody>
                {availableRooms.map(room => (
                    room.capacity > room.currentOccupants && 
                    <tr 
                        key={room.id} 
                        id={room.id}
                        className='cursor-pointer hover:bg-primary group'
                        onClick={() => (
                            /* console.log('id: ', room.id) */
                            handleSelectedRoom(room)
                        )}
                    >
                        <td className='hostel-td text-primary group-hover:text-secondary'>
                            {room.hostel}
                        </td>
                        <td className='room-type-td text-primary group-hover:text-secondary'>
                            {room.type}
                        </td>
                        <td className='room-price-td text-primary group-hover:text-secondary'>
                            {room.price}
                        </td>
                        <td className='room-number-td text-primary group-hover:text-secondary'>
                            {room.number}
                        </td>
                        <td className='room-capacity-td text-primary group-hover:text-secondary'>
                            {room.capacity}
                        </td>
                        <td className='room-capacity-td text-primary group-hover:text-secondary'>
                            {room.currentOccupants}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}
