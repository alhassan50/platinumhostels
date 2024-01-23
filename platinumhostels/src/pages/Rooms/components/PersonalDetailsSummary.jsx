import React from 'react'

//context
import { useBookNowContext } from '../../../Context/BookNowContext'

export default function PersonalDetailsSummary() {
    const {bookNowFormData} = useBookNowContext()
  return (
    <table>
        <tbody className='personalDetails-body'>
            <tr className=''>
                <th>
                    Full Name:
                </th>
                <td>
                    {bookNowFormData.fullName}
                </td>
            </tr>
            <tr>
                <th>
                    Gender/Sex:
                </th>
                <td>
                {bookNowFormData.gender}
                </td>
            </tr>
            <tr>
                <th>
                    Phone Number:
                </th>
                <td>
                {bookNowFormData.phoneNumber}
                </td>
            </tr>
            <tr>
                <th>
                    Email:
                </th>
                <td>
                    {bookNowFormData.email}
                </td>
            </tr>
            <tr>
                <th>
                    Course/Program:
                </th>
                <td>
                    {bookNowFormData.course}
                </td>
            </tr>
            <tr>
                <th>
                    Level:
                </th>
                <td>
                    {bookNowFormData.level}
                </td>
            </tr>
        </tbody>
    </table> 
  )
}
