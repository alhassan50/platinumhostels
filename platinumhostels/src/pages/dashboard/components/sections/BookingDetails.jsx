import React from 'react'
import { Link } from 'react-router-dom'

//icons
import arrow from '../../../../assets/icons/right-arrow-3.png'

export default function BookingDetails() {
  return (
    <div className='bg-white rounded-md mt-4 py-8 px-4'>
        <h3>Booking Details</h3>
        <table className='w-full mt-4'>
            <tbody>
                <tr>
                    <th>
                        Booking Date
                    </th>
                    <td>
                        Wednesday, 13th December, 2023
                    </td>
                </tr>
                <tr>
                    <th>
                        Payment Made
                    </th>
                    <td>
                        GHC 0.00
                    </td>
                </tr>
                <tr>
                    <th>
                        Payment Deadline
                    </th>
                    <td>
                        Wednesday, 08th January, 2023
                    </td>
                </tr>
            </tbody>
        </table>

        <div className='mt-8 flex gap-4 items-center'>
            <Link to={'/platinumportal/payment'} className=''>
                <button className='btn-primary1 flex justify-center items-center gap-2 group text-white'>
                    Make Payment
                    <figure className='arrow w-5 group-hover:translate-x-1 transition-all duration-150'>
                        <img src={arrow} alt='right arrow'/>
                    </figure>
                </button>
            </Link>

            <Link to={'/platinumportal/payment'} className=''>
                <button className='btn-ghost2 flex justify-center items-center gap-2 group text-primary'>
                    View Payment Details
                </button>
            </Link>
        </div>
    </div>
  )
}
