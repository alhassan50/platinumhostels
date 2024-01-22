import React, { useState, useEffect, useContext, createContext } from 'react'

//utility
import { unsubscribe } from '../utility/authUtility'

//component
import Loader from '../shared/components/Loader'


const PageLoader = () => {
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className='flex justify-center items-center'>
                <h3>
                    Please Wait
                </h3>
                &nbsp;
                <Loader />
            </div>
        </div>
    )
}
const UserContext = createContext()

export function UserContextProvider({children}) {
    const [user, setUser] = useState(null)
    const [userTokenID, setUserTokenID] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [userSignedOut, setUserSignedOut] = useState(false)

    const [showSideBar, setShowSideBar] = useState(false)

    const toggleSideBar = () => {
        setShowSideBar(prevValue => (!prevValue))
      }
    

    useEffect(() => { 
        unsubscribe(setUser, setIsLoading, setUserTokenID)
        return () => {
            unsubscribe(setUser, setIsLoading, setUserTokenID)
        }
    }, [])

    return (
        <UserContext.Provider
            value={{user, userTokenID, userSignedOut, setUserSignedOut, showSideBar, toggleSideBar}}
        >
            {   
                isLoading ? 
                    <PageLoader />
                :
                    children
            }
        </UserContext.Provider>
    )
}

export function useUserContext() {
    return useContext(UserContext)
}