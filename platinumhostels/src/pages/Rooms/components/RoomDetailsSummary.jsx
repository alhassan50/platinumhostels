import React from 'react'

export default function RoomDetailsSummary({selectedRoom}) {
  return (
    <table>
        <tbody className='roomDetails-body'>
            <tr>
                <th>
                    Hostel:
                </th>
                <td className="capitalize">
                    {selectedRoom.hostelLocation}
                </td>
            </tr>
            <tr>
                <th>
                    Block:
                </th>
                <td className="capitalize">
                    {selectedRoom.roomBlock}
                </td>
            </tr>
            <tr>
                <th>
                    Room Type:
                </th>
                <td className="capitalize">
                    {selectedRoom.roomType}
                </td>
            </tr>
            <tr>
                <th>
                    Room Price:
                </th>
                <td className="capitalize">
                    {selectedRoom.roomPrice}
                </td>
            </tr>
            <tr>
                <th>
                    Room Number:
                </th>
                <td className="capitalize">
                    {selectedRoom.roomNumber}
                </td>
            </tr>
            <tr>
                <th>
                    Room Capacity:
                </th>
                <td className="capitalize">
                    {selectedRoom.capacity}
                </td>
            </tr>
            <tr>
                <th>
                Current Occupants:
                </th>
                <td className="capitalize">
                    {selectedRoom.currentOccupants}
                </td>
            </tr>
        </tbody>
    </table> 
  )
}
