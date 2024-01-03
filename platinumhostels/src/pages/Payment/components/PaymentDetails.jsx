import React from 'react'

export default function PaymentDetails() {
  return (
    <div>
        <div className='bg-white rounded-md py-8 px-4 row-span-2'>
            <h3>Payment Details</h3>
            <table className='w-full mt-4'>
                <tbody>
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
                            GHC 8000.00
                        </td>
                    </tr>
                    <tr>
                        <th>
                            Amount Paid
                        </th>
                        <td>
                            GHC 0.00
                        </td>
                    </tr>
                    <tr>
                        <th>
                            Amount Remaining
                        </th>
                        <td>
                            GHC 8000.00
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
        </div>
    </div>
  )
}
