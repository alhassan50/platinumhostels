import React from 'react'

export default function PaymentDetails({paymentDetails}) {
  return (
    <div>
        <div className='bg-white rounded-md py-8 px-4 row-span-2 border'>
            <h3>Payment Details</h3>
            <table className='w-full mt-4'>
                <tbody>
                    <tr>
                        <th>
                            Room Type
                        </th>
                        <td className='capitalize'>
                            {paymentDetails.roomType}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            Room Price
                        </th>
                        <td>
                        {paymentDetails.roomPrice}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            Amount Paid
                        </th>
                        <td>
                            {paymentDetails.amountPaid}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            Amount Remaining
                        </th>
                        <td>
                            {paymentDetails.amountRemaining}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            Payment Deadline
                        </th>
                        <td>
                            {paymentDetails.paymentDeadline}
                        </td>
                    </tr>            
                </tbody>
            </table>
        </div>
    </div>
  )
}
