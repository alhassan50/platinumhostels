import React, { useState, useContext, createContext, useEffect } from 'react'
import {useNavigate} from 'react-router-dom';

const BookNowContext = createContext()


export function BookNowContextProvider({children}) {
    //book now form default values
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
    const [bookNowFormData, setBookNowFormData] = useState(defaultValues)
    const [isBookNowFormDataReady, setIsBookNowFormDataReady] = useState(false)

    //book now form step
    const [formStep, setFormStep] = useState(0) 

    const makeBookNowFormDataReady = () => {
        setIsBookNowFormDataReady(true)
    }

    const handleFormData = (formData) => {
        setBookNowFormData(formData)
    }

  return (
    <BookNowContext.Provider value={{
        defaultValues,
        bookNowFormData,
        handleFormData,
        isBookNowFormDataReady,
        makeBookNowFormDataReady,
        formStep,
        setFormStep
    }}>
        {children}
    </BookNowContext.Provider>
  )
}

export const useBookNowContext = () => {
    return useContext(BookNowContext)
}