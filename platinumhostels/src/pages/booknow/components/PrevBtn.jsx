import React from 'react'

import arrowBack from '../../../assets/icons/right-arrow.png'

export default function PrevBtn({decreaseFormStep}) {
  const onKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleClick(event);
    }
  }

  const handleClick = (event) => {
    event.preventDefault();
    decreaseFormStep()
  }
  return (
    <button 
        className='text-sm rounded-[8px] cursor-pointer font-semibold px-6 py-3 transition-all duration-150 text-primary border-[2px] border-secondary bg-secondary hover:bg-[#e5e4e2e8] flex justify-center items-center gap-2 group'
        onClick={(event) => (handleClick(event))}
        onKeyDown={(event) => (onKeyDown(event))}
    >
        <figure className='arrow w-5 rotate-180 group-hover:-translate-x-1 transition-all duration-150'>
            <img src={arrowBack} alt='right arrow'/>
        </figure>
        Back
    </button>
  )
}
