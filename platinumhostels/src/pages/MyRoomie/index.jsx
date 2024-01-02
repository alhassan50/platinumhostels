import React from 'react'

//section
import SectionHeder from './components/sections/SectionHeder'

//card
import RoomieCard from './components/cards/RoomieCard'

export default function MyRoomie() {
  return (
    <div>
        <div>
            <SectionHeder />
        </div>

        <div className='mt-4 bg-white py-8 px-4 rounded-md'>
            <div className='grid grid-col-1 md:grid-cols-2 gap-5'>
                <RoomieCard 
                    profileBg={'bg-lime-600'} 
                    nameInit={'AB'} 
                    fullName="Alhassan Baaba"  
                    phoneNumber={'03246875649'} 
                    course={'Bsc Computer Science'}
                />
                <RoomieCard 
                    profileBg={'b bg-pink-600'} 
                    nameInit={'OP'} 
                    fullName="Oteng Prince"  
                    phoneNumber={'0473627184'} 
                    email={'otprince@gmail.com'} 
                />
            </div>
        </div>
    </div>
  )
}
