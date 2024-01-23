import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

//components
import PersonalDetailsSummary from './PersonalDetailsSummary'
import RoomDetailsSummary from './RoomDetailsSummary'
import Loader from '../../../shared/components/Loader'

//context
import { useBookNowContext } from '../../../Context/BookNowContext'

//icons
import arrow from '../../../assets/icons/right-arrow-3.png'

//utility
import createAccount from '../../../utility/createAccount'

export default function SummaryBox({toggleShowSummaryBox, selectedRoom}) {
    const navigate = useNavigate()
    //context values
    const {
        bookNowFormData,
        isBookNowFormDataReady,
    } = useBookNowContext()

    const [summaryHeader, setSummaryHeader] = useState('personalDetails')
    const [studentAccountData, setStudentAccountData] = useState({})
    const [isBookingConfirmed, setIsBookingConfirmed] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const [isAccountCreating, setIsAccountCreating] = useState(false)
    const [accountCreationMsg, setAccountCreationMsg] = useState('Creating your account. Pls do not refresh the page')




    //confirms rooms user selects
    const confirmSelectedRoom = (room) => {
        if (room) {
            if (isBookNowFormDataReady) {
                setStudentAccountData({...bookNowFormData, roomID: room.roomID})
                setIsBookingConfirmed(true)
                setIsLoading(true)
            } else {
                navigate('/booknow?message=Fill booking form first.')
            }
        }
    }

    //listen to changes in student account data and booking confirmation
    useEffect(() => {
        if (isBookingConfirmed && Object.keys(studentAccountData).length !== 0) {
            try {  
                console.log('yep booking confirmed: ', studentAccountData);
            } catch (error) {
                
            }
        }
    }, [studentAccountData, isBookingConfirmed])

    //dummy useffect
    useEffect(() => {
        if (isLoading) {
            setTimeout(() => (setIsLoading(false)), 5000)
        }
    }, [isLoading])

    const closeSummaryBox = () => {
        setStudentAccountData({})
        toggleShowSummaryBox(false)
    }

  return (
        <div className='booking-summary overflow-y-auto fixed bg-[#000000c0] left-0 top-0 w-full h-full flex justify-center items-center py-[40px] px-[5%]'>
            {
                /* !loader.isLoading 
                ?
                    <div className='bg-white border md:min-w-[450px] rounded-md shadow-sm p-8 flex justify-center items-center flex-wrap'>
                        <div className='text-center grid gap-3'>
                            <Loader />
                            <p>{loader.loaderMsg}</p>                             
                            <p>Please, do not refresh the page.</p>                             
                        </div>
                    </div>  
                : */
                <div className='booking-summary-box p-4 bg-white border rounded shadow-primary  w-[500px] h-[500px]'>
                    {
                        
                            <div className=''>
                        <div className='flex gap-4 justify-between items-center'>
                            <h2 className='font-normal text-[20px] capitalize'>
                                Booking Summary 
                            </h2>

                            <div 
                                className={`hover:bg-secondary ${isLoading ? 'cursor-not-allowed' : 'cursor-pointer'} p-1 rounded-[50%]`}
                                onClick={() => {
                                    if (!isLoading) {
                                        closeSummaryBox()
                                    }
                                }}
                                title={isLoading ? 'Please wait for booking confirmation' : 'Close'} 
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                            </div>
                        </div>
                        
                        <hr className='my-2' />

                        <div className='flex gap-4 '>
                            <h4
                                className={`${summaryHeader === 'personalDetails' ? 'active-box-link' : ''} pb-1 cursor-pointer`}
                                onClick={() => (setSummaryHeader('personalDetails'))}
                            >
                                Personal Details
                            </h4>

                            <h4
                                className={`${summaryHeader === 'roomDetails' ? 'active-box-link' : ''} pb-1 cursor-pointer`}
                                onClick={() => (setSummaryHeader('roomDetails'))}
                            >
                                Room Details
                            </h4>
                        </div>

                        <hr className='mb-4' />

                        {
                            summaryHeader === 'personalDetails' &&
                            <PersonalDetailsSummary/>
                        }   
                        
                        {
                            summaryHeader === 'roomDetails' &&
                            <RoomDetailsSummary selectedRoom={selectedRoom} />
                        }   

                        <div className='mt-6 flex gap-3 flex-wrap'>
                            <button 
                                className={`${isLoading ? 'btn-disabled' : 'btn-primary1'} flex justify-center items-center gap-2 group text-white`}
                                onClick={() => (confirmSelectedRoom(selectedRoom))}
                                disabled={isLoading}
                            >
                                {
                                    isLoading ?
                                        'Confirming Booking'
                                    :
                                        'Confirm Booking'
                                }
                                {
                                    isLoading ?
                                        <Loader />
                                    :
                                        <figure className='arrow w-5 group-hover:translate-x-1 transition-all duration-150'>
                                            <img src={arrow} alt='right arrow'/>
                                        </figure>
                                }
                            </button>
                        </div>
                            </div>
                    }
                </div>
            }
        </div>
  )
}
