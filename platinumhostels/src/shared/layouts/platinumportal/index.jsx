  import {React, useState} from 'react'
  import {Outlet, ScrollRestoration, Navigate, useLoaderData} from 'react-router-dom'


  //custom components
  import PortalHeader from '../../components/PortalHeader'
  import PortalMobileHeader from '../../components/PortalMobileHeader'
  

  //import userJSON from '../../../data/user.json'

  //context
  import { useUserContext } from '../../../Context/UserContext'

  export const loader = async ({params, request}) => {
    const path = new URL(request.url).pathname
    return path;
  }

  export default function PlatinumPortal() {
    //console.log('plat port mounting....');
    const {user, userTokenID, userSignedOut} = useUserContext()

    const [showSideBar, setShowSideBar] = useState(false)

    const toggleSideBar = (showSideBar) => {
        setShowSideBar(prevValue => {
          return (showSideBar != null) ? showSideBar : !prevValue
        })
    }

    const path = useLoaderData()

    if (!user) {
      return (
        userSignedOut ?
          <Navigate
            to={`/login`}
            replace
          />
        :
          <Navigate
            to={`/login?message=Log in to access your portal&redirect=${path}`}
            replace
          />
      )
    }

    //console.log('user: ', user);
    //console.log('user token: ', userTokenID);
     
    return (
      <div className='overflow-x-hidden platinum-portal'>
          <ScrollRestoration/>
          <div className='grid grid-cols-1 s-lg:grid-cols-[250px,auto]'>
              <PortalHeader 
                showSideBar={showSideBar} 
                toggleSideBar={toggleSideBar}
              />

              {/* <div></div> */}

              <div className='bg-[#fbfbfb] px-4 pb-4 pt-16 s-lg:pt-4 min-h-screen'>
                  <PortalMobileHeader 
                    showSideBar={showSideBar} 
                    toggleSideBar={toggleSideBar} 
                  />
                  
                  <Outlet context={{showSideBar, toggleSideBar}} />
              </div>
          </div>
      </div>
    )
  }