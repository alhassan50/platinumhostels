import React from 'react'
import { Link } from 'react-router-dom'

//icons
import arrow from '../../../assets/icons/right-arrow-3.png'

export default function PaymentHistory({paymentDetails}) {
  return (
    <div>
        <div className='bg-white rounded-md  py-8 px-4 row-span-2 border'>
            <h3>Payment History</h3>

            {
                paymentDetails.paymentHistory.length > 0 ?
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
                    
                        </tbody>
                    </table>
                :
                    <div>
                        <hr className='my-4'/>

                        <p className=''>
                            You have not yet made any payments.
                        </p>
                    </div>
            }

            <Link to={'/platinumportal/payment'} className=''>
                <button className='btn-primary1 flex justify-center items-center gap-2 group mt-4 text-white'>
                    Pay Now
                    <figure className='arrow w-5 group-hover:translate-x-1 transition-all duration-150'>
                        <img src={arrow} alt='right arrow'/>
                    </figure>
                </button>
            </Link>
        </div>
    </div>
  )
}
