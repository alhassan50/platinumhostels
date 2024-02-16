import React from 'react'

//image
import {FullLogo2} from '../../../../shared/components/Logo'

export default function BookingPDF() {
  return (
    <div className='px-5 py-10 max-w-2xl'>
      <div className=''>
        <FullLogo2 />

        <div className='mt-4'>
          <h3>Abdullahi Alhassan Baaba</h3>
          <p>+233557169843</p>
          <p>alhassan@1gmail.com</p>
        </div>

        <table className='w-full mt-10'>
          <tbody>
              <tr>
                  <th>
                      Hostel Location
                  </th>
                  <td>
                      room.hostelLocation
                  </td>
              </tr>

              <tr>
                  <th>
                      Block Name
                  </th>
                  <td>
                      room.roomBlock
                  </td>
              </tr>

              <tr>
                  <th>
                      Room Floor
                  </th>
                  <td>
                      {
                          /* room.roomFloor === 0 ?
                              'Ground Floor'
                          :
                              room.roomFloor */
                              'b'
                      }
                  </td>
              </tr>

              <tr>
                  <th>
                      Room Number
                  </th>
                  <td>
                      room.roomNumber
                  </td>
              </tr>

              <tr>
                  <th>
                      Room Type
                  </th>
                  <td>
                      room.roomType
                  </td>
              </tr>

              <tr>
                  <th>
                      Room Price
                  </th>
                  <td>
                      GH₵ room.roomPrice
                  </td>
              </tr>

              <tr>
                  <th>
                      Room Capacity
                  </th>
                  <td>
                      room.hostelLocation
                  </td>
              </tr>

              <tr>
                  <th>
                      Current Occupants
                  </th>
                  <td>
                      room.currentOccupants
                  </td>
              </tr>
          </tbody>
        </table>

        <div className='mt-10'>
          <h3>Platinum Hostels</h3>
          <p>Ayeduase Lane, Kumasi</p>
          <p>+233123456789</p>
          <p>platinumhostelsgh@gmail.com</p>
        </div>
      </div>
    </div>
  )
}