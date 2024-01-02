  import {React, lazy} from 'react'
  import {Outlet, ScrollRestoration, redirect} from 'react-router-dom'


  //custom components
  import PortalHeader from '../../components/PortalHeader'
  import userJSON from '../../../data/user.json'


  export const loader = ({params, request}) => {
    console.log('plat port');
    let isLoggedIn = true
    const url = new URL(request.url)
    if (!isLoggedIn) {
      throw redirect(`/login?pageToAccess=${url}`)
    }
    return 0;
  }

  export default function PlatinumPortal() {
    const user = userJSON
    console.log(user);
    return (
      <div className='overflow-x-hidden'>
          <ScrollRestoration/>
          <div className='grid grid-cols-1 s-lg:grid-cols-[250px,auto]'>
              <PortalHeader />
              <div></div>
              <div className='bg-[#fbfbfb] p-4 min-h-screen'>
                  <Outlet user={user} />
              </div>
          </div>
      </div>
    )
  }