import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

//context
import { useBookNowContext } from '../../../Context/BookNowContext'

//icons
import arrow from '../../../assets/icons/right-arrow-3.png'

export default function SummaryBox({toggleShowSummaryBox, selectedRoom}) {

    const [bookingSummary, setBookingSummary] = useState('personalDetails')
    const {
        bookNowFormData,
        roomBookData,
        isBookNowFormDataReady, 
        isRoomBookDataReady,
        handleRoomData
    } = useBookNowContext()
    const navigate = useNavigate()

    //confirms rooms user selects
    const confirmSelectedRoom = (room) => {
        if (room) {
            if (isBookNowFormDataReady ) {
                //create user account
                handleRoomData(room)
            } else {
                navigate('/booknow?message=Fill booking form first.')
            }
        } else {
            alert('Something went wrong')
        }
    }

    useEffect(() => {
        if (roomBookData !== null) {
            console.log("dsddsd:", roomBookData);
            navigate('/platinumportal')
        }
    }, [roomBookData, navigate])

  return (
    <div className='booking-summary overflow-y-auto fixed bg-[#0001] left-0 top-0 w-full h-full flex justify-center items-center py-[40px] px-[5%]'>
        <div className='booking-summary-box p-4 bg-white overflow-scroll border rounded shadow-primary  w-[450px] h-[450px]'>
            <div className=''>
                <div className='flex gap-4 justify-between items-center'>
                    <h2 className='font-normal text-[20px] capitalize'>
                        Booking Summary 
                    </h2>

                    <div 
                        className='hover:bg-secondary p-1 rounded-[50%] cursor-pointer'
                        onClick={() => {
                            toggleShowSummaryBox(false)
                        }}    
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                    </div>
                </div>
                
                <hr className='my-2' />

                <div className='flex gap-4 '>
                    <h4
                        className={`${bookingSummary === 'personalDetails' ? 'active-box-link' : ''} pb-1 cursor-pointer`}
                        onClick={() => (setBookingSummary('personalDetails'))}
                    >
                        Personal Details
                    </h4>

                    <h4
                        className={`${bookingSummary === 'roomDetails' ? 'active-box-link' : ''} pb-1 cursor-pointer`}
                        onClick={() => (setBookingSummary('roomDetails'))}
                    >
                        Room Details
                    </h4>
                </div>

                <hr className='mb-4' />

                {
                    bookingSummary === 'personalDetails' &&
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
                }   
                
                {
                    bookingSummary === 'roomDetails' &&
                    <table>
                        <tbody className='roomDetails-body'>
                            <tr>
                                <th>
                                    Hostel:
                                </th>
                                <td>
                                    {selectedRoom.hostel}
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    Room Type:
                                </th>
                                <td>
                                    {selectedRoom.type}
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    Room Price:
                                </th>
                                <td>
                                    {selectedRoom.price}
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    Room Number:
                                </th>
                                <td>
                                    {selectedRoom.number}
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    Room Capacity:
                                </th>
                                <td>
                                    {selectedRoom.capacity}
                                </td>
                            </tr>
                        </tbody>
                    </table> 
                }   

                <div className='mt-6 flex gap-3 flex-wrap'>
                    <button 
                        className={`btn-primary1 flex justify-center items-center gap-2 group text-white`}
                        onClick={() => (confirmSelectedRoom(selectedRoom))}
                        
                    >
                        Confirm Booking
                        <figure className='arrow w-5 group-hover:translate-x-1 transition-all duration-150'>
                            <img src={arrow} alt='right arrow'/>
                        </figure>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}
