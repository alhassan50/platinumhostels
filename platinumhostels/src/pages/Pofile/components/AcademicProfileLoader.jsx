import React from 'react'

export default function AcademicProfileLoader() {
  return (
    <div className='mt-5 student-info grid grid-cols-1 sm:grid-cols-2 gap-5'>
        <div className='flex flex-col gap-2'>
            <div className='bg-neutral-200 rounded-lg animate-pulse h-2 w-[30%]'></div>
            <div className='bg-neutral-200 rounded-lg animate-pulse py-3 px-6 h-11 w-full'></div>
        </div>
        
        <div className='flex flex-col gap-2'>
            <div className='bg-neutral-200 rounded-lg animate-pulse h-2 w-[40%]'></div>
            <div className='bg-neutral-200 rounded-lg animate-pulse py-3 px-6 h-11 w-full'></div>
        </div>
    </div>
  )
}
