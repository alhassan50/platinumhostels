import React from 'react'

export default function PageLoader () {
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className='flex  flex-col gap-6 min-w-[80px]'>
                <div className='min-w-full flex justify-center items-center '>
                    <div className={`w-10 h-10 border-primary border-[5px] rounded-b-[50%]`}>
                    </div>
                </div>
                
                <div className='min-w-full bg-[#eee]'>
                    <div className={`bg-slate-500 w-[10px] h-1 rounded-[50px] page-loader`}>
                    </div>
                </div>
            </div>
        </div>
    )
}
