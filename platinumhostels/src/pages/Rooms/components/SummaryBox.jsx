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
import createRecord from '../../../utility/createRecord'
import { signInUserWithToken } from '../../../utility/authUtility'
import createRoomie from '../../../utility/createRoomie'

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
    const [customToken, setCustomToken] = useState(null)
    const [userRecord, setUserRecord] = useState(null)
    const [errorMsg, setErrorMsg] = useState(null)
    const [signUpStatus, setSignUpStatus] = useState(null)

    //confirms rooms user selects
    const confirmSelectedRoom = (room) => {
        if (room) {
            setErrorMsg(null)
            if (isBookNowFormDataReady) {
                setStudentAccountData({...bookNowFormData, roomID: room.roomID, roomPrice: room.roomPrice, roomType: room.roomType})
                setIsBookingConfirmed(true)
                setIsLoading(true)
            } else {
                navigate('/booknow?message=Booking form must be filled first.')
            }
        }
    }

    //listen to changes in student account data and booking confirmation
    useEffect(() => {
        async function createUserAccount(studentAccountData) {
            try {     
                const userRecord = await createAccount(studentAccountData)

                await addRoomie(userRecord.accountData, userRecord.uid)

                const customToken = await getCustomToken(userRecord.accountData, userRecord.uid)

                setCustomToken(customToken)
                return userRecord
            } catch (error) {
                setErrorMsg(error)
                setIsLoading(false)
                setSignUpStatus(null)
            }
        }

        async function addRoomie(studentAccountData, uid) {
            try {     
                await createRoomie(studentAccountData, uid)
            } catch (error) {
                throw error
            }
        }
        
        async function getCustomToken(studentAccountData, uid) {
            let customToken
            try {     
                customToken = await createRecord(studentAccountData, uid)
                return customToken
            } catch (error) {
                throw error
            }
        }

        if (isBookingConfirmed && Object.keys(studentAccountData).length !== 0) {
            createUserAccount(studentAccountData)
        }
    }, [studentAccountData, isBookingConfirmed])

    //listens for customTokens and signs user in
    useEffect(() => {
        const signInUser = async () => {
            try {
                setSignUpStatus('sign in')
                await signInUserWithToken(customToken)
                navigate('/platinumportal/dashboard', {replace: true})
            } catch (error) {
                console.log("token login error: ", error);
                setErrorMsg(error.message)
            } finally {
                setIsLoading(false)
            }
        }

        if(customToken) {
            signInUser(customToken) 
        }
    }, [customToken])

    const closeSummaryBox = () => {
        setStudentAccountData({})
        toggleShowSummaryBox(false)
    }

  return (
        <div className='booking-summary overflow-y-auto fixed bg-[#000000c0] left-0 top-0 w-full h-full flex justify-center items-center py-[40px] px-[5%]'>
            <div className='booking-summary-box overflow-scroll min-w-[400px] p-4 bg-white border rounded shadow-primary  w-[500px] h-[500px]'>
                {
                    signUpStatus === 'sign in' ?
                        <div className='flex justify-center items-center flex-col w-full h-full'>
                            <Loader />
                            <p>
                                Setting up your account. Please do not refresh the page!
                            </p>
                        </div>
                    :
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
                                    className={`${summaryHeader === 'personalDetails' ? 'active-box-link' : 'opacity-50'} font-bold pb-1  cursor-pointer`}
                                    onClick={() => (setSummaryHeader('personalDetails'))}
                                >
                                    Personal Details
                                </h4>

                                <h4
                                    className={`${summaryHeader === 'roomDetails' ? 'active-box-link' : 'opacity-50'} pb-1 cursor-pointer font-bold`}
                                    onClick={() => (setSummaryHeader('roomDetails'))}
                                >
                                    Room Details
                                </h4>
                            </div>

                            <hr className='mb-4' />

                            {
                                errorMsg &&
                                <div className='my-4 bg-[#efefef] p-2 rounded flex gap-4 items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className='fill fill-red-600' height="16" width="16" viewBox="0 0 512 512"><path d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>
                                    <p className='text-red-600 text-[14px]'>{errorMsg}</p>
                                </div>
                            }

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
        </div>
  )
}
