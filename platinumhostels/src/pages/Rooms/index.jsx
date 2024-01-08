import React, { useEffect, useState } from 'react'
import { Link, useNavigate, redirect } from 'react-router-dom';
import { useBookNowContext } from '../../Context/BookNowContext';
import {useLockBodyScroll, useToggle} from 'react-use';

//fake data
import availableRooms from '../../data/rooms.json'

//icons
import arrow from '../../assets/icons/right-arrow-3.png'

//components
import SummaryBox from './components/SummaryBox';
import TableView from './components/TableView';
import PictorialView from './components/PictorialView';

export const loader = ({params, request}) => {
    return 0;
}

export default function Rooms() {    
    

    //use booking context
    const {
        bookNowFormData, 
        handleRoomData, 
        roomBookData, 
        defaultValues,
        isBookNowFormDataReady,
        makeRoomBookDataReady
    } = useBookNowContext()
    const navigate = useNavigate()
    
    //handle illegal routing to rooms page
    useEffect(() => {
        if (!isBookNowFormDataReady) {
            navigate('/booknow?message=Fill booking form first.', {replace: true})
        } else {
            console.log('is form ready - ',isBookNowFormDataReady);
            console.log('form - ', bookNowFormData);
        }
    },[isBookNowFormDataReady, bookNowFormData, navigate])
    
    //adds event listner for summary box
    useEffect(() => {
        const closeSummaryBox = (event) =>{
            if (event.key === 'Escape' || event.key === 'Esc') {
                toggleShowSummaryBox(false)
            }      
        }
         
        //add eventlistener
        document.addEventListener('keydown', closeSummaryBox)

        // Remove event listener on component unmount
        return () => {
            document.removeEventListener('keydown', closeSummaryBox);
        };
    }, [])

    const [view, setView] =useState('pictorial')
    const [showSummaryBox, setShowSummaryBox] =useState(false)
    const [selectedRoom, setSelectedRoom] = useState('')

    useLockBodyScroll(showSummaryBox);
    
    
    //switches display view between table and pictorial
    const toggleView = (view) => {
        return setView(view)
    }
    
    //opens or closes the summary dialogue box
    const toggleShowSummaryBox = (state) => {
        return setShowSummaryBox(state)
    }
    
    //handle rooms user selects
    const handleSelectedRoom = (room) => {
        if (room) {
            toggleShowSummaryBox(true)
            setSelectedRoom(room)
            /* handleRoomData(room) */
            /* console.log(bookNowFormData); */
        } else {
            
        }
    }
    
    
    

    /* useEffect(() => {
        if (roomBookData != null & bookNowFormData !== defaultValues) {
            console.log('ready - ', roomBookData);
            console.log('form - ', bookNowFormData);
            console.log('def - ', defaultValues);
            console.log(bookNowFormData === defaultValues);
        } else {
            console.log('booking incomplete');
            console.log('room - ', roomBookData);
            console.log('form - ', bookNowFormData);
            console.log('def - ', defaultValues);
            console.log(roomBookData !== null);
            console.log(bookNowFormData !== defaultValues);
            setDisableConformBtn(true)
        }
    }, [roomBookData, bookNowFormData]) */

    /* useEffect(() => {
        if (!isBookNowFormDataReady) {
            navigate('/booknow?message=Fill booking form first.')
        } else {
            console.log('dd',isBookNowFormDataReady);
        }
    }, [isBookNowFormDataReady]) */


  return (
    <div className='px-[1%] sm:px-[2%] md:px-[3%] s-lg:px-[4%] lg:px-[5%] py-[30px] relative'>
        <div className='grid gap-6'>
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
                            id={view === 'table' ? "tableView" : ''}
                            className={`room-info-view cursor-pointer rounded-[50%] p-3  hover:bg-primary`}
                            title='Table View'
                            onClick={() => (toggleView('table'))}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512"><path d="M64 256V160H224v96H64zm0 64H224v96H64V320zm224 96V320H448v96H288zM448 256H288V160H448v96zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z" /></svg>
                        </div>

                        <div 
                            id={view === 'pictorial' ? "pictorialView" : ''}
                            className={`room-info-view cursor-pointer rounded-[50%] p-3  hover:bg-primary`}
                            title='Pictorial View'
                            onClick={() => (toggleView('pictorial'))}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512"><path d="M448 80c8.8 0 16 7.2 16 16V415.8l-5-6.5-136-176c-4.5-5.9-11.6-9.3-19-9.3s-14.4 3.4-19 9.3L202 340.7l-30.5-42.7C167 291.7 159.8 288 152 288s-15 3.7-19.5 10.1l-80 112L48 416.3l0-.3V96c0-8.8 7.2-16 16-16H448zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" /></svg>
                        </div>
                    </div>
                </div>

                <hr className='mt-5 mb-8' />

                <div className=''> 
                    { 
                        view === 'pictorial' ? 
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
