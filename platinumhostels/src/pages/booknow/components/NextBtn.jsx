import React from 'react'

//icons
import arrow from '../../../assets/icons/right-arrow-3.png'

export default function NextBtn({increaseFormStep}) {
  return (
    <div 
        className='text-sm cursor-pointer rounded-[8px] font-semibold px-6 py-3 transition-all duration-150 border-[2px] border-primary bg-primary hover:bg-[#2f4858f1] text-white flex justify-center items-center gap-2 group'
        onClick={() => (increaseFormStep())}
    >
        Next
        <figure className='arrow w-5 group-hover:translate-x-1 transition-all duration-150'>
            <img src={arrow} alt='right arrow'/>
        </figure>
    </div>
  )
}
