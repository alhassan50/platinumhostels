import React, { useState, useEffect, useContext, createContext } from 'react'

//utility
import { unsubscribe } from '../utility/authUtility'
import PageLoader from '../shared/components/PageLoader'

const UserContext = createContext()

export function UserContextProvider({children}) {
    const [user, setUser] = useState(null)
    const [userTokenID, setUserTokenID] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [userSignedOut, setUserSignedOut] = useState(false)
    

    useEffect(() => { 
        unsubscribe(setUser, setIsLoading, setUserTokenID)
        return () => {
            unsubscribe(setUser, setIsLoading, setUserTokenID)
        }
    }, [])

    useEffect(() => {
        
    }, [userTokenID])

    return (
        <UserContext.Provider
            value={{user, setUser, userTokenID, userSignedOut, setUserSignedOut}}
        >
            {/* {   
                isLoading ? 
                    <PageLoader />
                :
                    children
            } */}
            {children}
        </UserContext.Provider>
    )
}

export function useUserContext() {
    return useContext(UserContext)
}