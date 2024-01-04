import React from 'react'
import { Link } from 'react-router-dom'

//icons
import arrow from '../../../../assets/icons/right-arrow-3.png'

export default function RoomDetails() {
  return (
    <div className='bg-white rounded-md border mt-4 py-8 px-4 row-span-2'>
        <h3>Room Details</h3>
        <table className='w-full mt-4'>
            <tbody>
                <tr>
                    <th>
                        Hostel Location
                    </th>
                    <td>
                        Bomso 
                    </td>
                </tr>
                <tr>
                    <th>
                        Block Name
                    </th>
                    <td>
                        Annex Block
                    </td>
                </tr>
                <tr>
                    <th>
                        Room Floor
                    </th>
                    <td>
                        2nd Floor
                    </td>
                </tr>
                <tr>
                    <th>
                        Room Number
                    </th>
                    <td>
                        34
                    </td>
                </tr>
                <tr>
                    <th>
                        Room Type
                    </th>
                    <td>
                        Single
                    </td>
                </tr>
                <tr>
                    <th>
                        Room Price
                    </th>
                    <td>
                        GHC 8000
                    </td>
                </tr>
                <tr>
                    <th>
                        Total Occupants
                    </th>
                    <td>
                        1
                    </td>
                </tr>
                <tr>
                    <th>
                        Current Occupants
                    </th>
                    <td>
                        1
                    </td>
                </tr>
        
            </tbody>
        </table>

        <Link to={'/platinumportal/payment'} className=''>
            <button className='btn-primary1 flex justify-center items-center gap-2 group mt-8 text-white'>
              Download Room Details
              <figure className='arrow w-5 group-hover:translate-x-1 transition-all duration-150'>
                <img src={arrow} alt='right arrow'/>
              </figure>
            </button>
        </Link>
    </div>
  )
}
