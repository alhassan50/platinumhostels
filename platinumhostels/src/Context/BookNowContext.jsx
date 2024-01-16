import React, { useState, useContext, createContext, useEffect } from 'react'
import {useNavigate} from 'react-router-dom';

const BookNowContext = createContext()


export function BookNowContextProvider({children}) {
    const defaultValues = {
        fullName: '',
        phoneNumber: '',
        gender: 'none',
        course: '',
        level: 'none',
        email: '',
        password: '',
        confirmPassword: '',
        hostelLocation: 'none',
        roomType: 'none',
    }
    const navigate = useNavigate()

    const [bookNowFormData, setBookNowFormData] = useState(defaultValues)
    const [roomBookData, setRoomBookData] = useState(null)
    
    const [isBookNowFormDataReady, setIsBookNowFormDataReady] = useState(false)
    const [isRoomBookDataReady, setIsRoomBookDataReady] = useState(false)

    const makeBookNowFormDataReady = () => {
        setIsBookNowFormDataReady(true)
    }

    const makeRoomBookDataReady = () => {
        setIsRoomBookDataReady(true)
    }

    const handleFormData = (formData) => {
        /* console.log('start handling'); */

        setBookNowFormData(formData)
        
        /* console.log('stop handling'); */
    }

    const handleRoomData = (roomData) => {
        /* console.log('start handling room data'); */
        setRoomBookData(roomData)
        /* console.log('stop handling room data'); */
    }

  return (
    <BookNowContext.Provider value={{
        defaultValues,
        bookNowFormData,
        roomBookData,
        handleFormData,
        handleRoomData,
        isBookNowFormDataReady,
        isRoomBookDataReady,
        makeBookNowFormDataReady,
        makeRoomBookDataReady
    }}>
        {children}
    </BookNowContext.Provider>
  )
}

export const useBookNowContext = () => {
    return useContext(BookNowContext)
}