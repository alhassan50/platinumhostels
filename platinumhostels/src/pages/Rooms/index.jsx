import React, { useEffect, useState, useMemo } from 'react'
import { Link, useNavigate, redirect, useLoaderData, defer, Await } from 'react-router-dom';
import { useBookNowContext } from '../../Context/BookNowContext';

//utility
import getAvailableRooms from '../../utility/getAvailableRooms';

//components
import SummaryBox from './components/SummaryBox';
import TableView from './components/TableView';
import PictorialView from './components/PictorialView';
import Loader from '../../shared/components/Loader';
import TryAgain from './components/TryAgain';

//icons
import arrow from '../../assets/icons/right-arrow.png'

export const loader = async ({params, request}) => {
    const hostelLocation = new URL(request.url).searchParams.get('hostelLocation')
    const roomType = new URL(request.url).searchParams.get('roomType')
    const gender = new URL(request.url).searchParams.get('gender')

    return {hostelLocation, roomType, gender}
}

const loadAvailableRooms = (hostelLocation, roomType, gender) => {
    const availableRoomsPromise = getAvailableRooms(hostelLocation, roomType, gender)
    return defer({availableRooms: availableRoomsPromise});
}

export default function Rooms() {  
    console.log('room component mounted'); 
    const navigate = useNavigate()

    //search params from loader function
    const {hostelLocation, roomType, gender} = useLoaderData()

    //forces component to be remounted on state value change
    const [refreshComponent, setRefreshComponent] = useState(false)

    //rooms are fetched one initial component mount and when component is refreshed
    const availableRoomsPromise = useMemo(() => {
        return loadAvailableRooms(hostelLocation, roomType, gender)
    }, [hostelLocation, roomType, gender, refreshComponent])

    //use booking context
    const {
        bookNowFormData, 
        defaultValues,
        isBookNowFormDataReady,
    } = useBookNowContext()
    
    //handle illegal routing to rooms page
    useEffect(() => {
        if (!isBookNowFormDataReady) {
            navigate('/booknow?message=Fill booking form first.', {replace: true})
        }
    },[isBookNowFormDataReady, bookNowFormData, navigate])

    //user is asked to confirm page reload
    useEffect(() => {
        // Add event listener to intercept page refresh
        const handleBeforeUnload = (e) => {
            const confirmationMessage = 'Form booking process will restart. Are you sure you want to leave?';
            e.returnValue = confirmationMessage; // Standard for most browsers
            return confirmationMessage; // For some older browsers
        };

        //reload event listner
        window.addEventListener('beforeunload', handleBeforeUnload)
    
    
        return () => {
            // Cleanup: remove event listener when component unmounts
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    
    }, [bookNowFormData, defaultValues])

    const [roomResultsView, setRoomResultsView] =useState('pictorial')
    const [showSummaryBox, setShowSummaryBox] =useState(false)
    const [selectedRoom, setSelectedRoom] = useState('')    
    
    //switches display view between table and pictorial
    const toggleRoomResultsView = (roomResultsView) => {
        return setRoomResultsView(roomResultsView)
    }
    
    //opens or closes the summary dialogue box
    const toggleShowSummaryBox = (isOpened) => {
        return setShowSummaryBox(isOpened)
    }
    
    //handle rooms user selects
    const handleSelectedRoom = (room) => {
        if (room) {
            toggleShowSummaryBox(true)
            setSelectedRoom(room)
            /* handleRoomData(room) */
            /* console.log(bookNowFormData); */
        }
    }

  return (
    <div className='px-[1%] sm:px-[2%] md:px-[3%] s-lg:px-[4%] lg:px-[5%] py-[30px] relative'>
        <div className='grid gap-6 max-w-[1500px] mx-auto'>
            <div className='px-4'>
                <Link
                    to={'..'}
                > 
                    <div className='flex gap-2 items-center group'>
                        <figure className='w-4 rotate-180 group-hover:-translate-x-1 transition-all duration-150'>
                            <img src={arrow} alt='arrow'/>
                        </figure>
                        <h3>
                            Room Details
                        </h3>
                    </div>
                </Link>
            </div>
            <div className='bg-white rounded-md py-8 px-4 border'>
                <h2 className='text-primary text-left'>
                    Platinum Room Allocation
                </h2>

                <p className='mt-4'>
                    Browse available rooms and effortlessly secure your ideal accommodation at Platinum Hostels. Elevate your college experience with personalized room selection.
                </p>
            </div>

            <div className='bg-white rounded-md py-8 px-4 border'>
                <div className='flex justify-between flex-wrap items-center gap-8'>
                    <h3 className='text-[24px]'>
                        Available Rooms
                    </h3>

                    <div className='flex gap-4'
                    >
                        <div 
                            id={roomResultsView === 'table' ? "tableView" : ''}
                            className={`room-info-view cursor-pointer rounded-[50%] p-3  hover:bg-primary`}
                            title='Table View'
                            onClick={() => (toggleRoomResultsView('table'))}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512"><path d="M64 256V160H224v96H64zm0 64H224v96H64V320zm224 96V320H448v96H288zM448 256H288V160H448v96zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z" /></svg>
                        </div>

                        <div 
                            id={roomResultsView === 'pictorial' ? "pictorialView" : ''}
                            className={`room-info-view cursor-pointer rounded-[50%] p-3  hover:bg-primary`}
                            title='Pictorial View'
                            onClick={() => (toggleRoomResultsView('pictorial'))}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512"><path d="M448 80c8.8 0 16 7.2 16 16V415.8l-5-6.5-136-176c-4.5-5.9-11.6-9.3-19-9.3s-14.4 3.4-19 9.3L202 340.7l-30.5-42.7C167 291.7 159.8 288 152 288s-15 3.7-19.5 10.1l-80 112L48 416.3l0-.3V96c0-8.8 7.2-16 16-16H448zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" /></svg>
                        </div>
                    </div>
                </div>

                <hr className='mt-5 mb-8' />

                <React.Suspense 
                    fallback={
                        <div className='flex items-center'>
                            <p>
                                Fetching rooms. Please wait 
                            </p>
                            &nbsp;<Loader/>
                        </div>
                    }
                >
                    <Await 
                        resolve={availableRoomsPromise.data.availableRooms} 
                        errorElement={<TryAgain setRefreshComponent={setRefreshComponent} />}
                    >
                        {(availableRooms) => {
                            //console.log(availableRooms);
                            return (
                                <div className=''> 
                                    { 
                                        roomResultsView === 'pictorial' ? 
                                        <PictorialView 
                                            availableRooms={availableRooms}
                                            handleSelectedRoom={handleSelectedRoom}
                                        />
                                        :
                                        <TableView 
                                            availableRooms={availableRooms}
                                            handleSelectedRoom={handleSelectedRoom}
                                        />
                                        
                                    }
                                </div>
                            )
                        }}
                    </Await>
                </React.Suspense>

            </div>
        </div>

        {
            showSummaryBox &&
            <SummaryBox
                toggleShowSummaryBox={toggleShowSummaryBox}
                selectedRoom={selectedRoom}
            />
        }
    </div>
  )
}
