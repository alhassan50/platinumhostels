import React from 'react'

export default function PaymentLoader() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 justify-center items-start mt-4'>
        <div className='bg-white rounded-md py-8 px-4 row-span-2 border'>
            <h3>Payment Details</h3>
            <table className='w-full mt-4'>
                <tbody>
                    <tr>
                        <th>
                            <div className='bg-neutral-200 animate-pulse w-[100%] h-4 rounded-lg'></div>
                        </th>
                        <td>
                            <div className='bg-neutral-200 animate-pulse w-[100%] h-4 rounded-lg'></div>                        
                        </td>
                    </tr>

                    <tr>
                        <th>
                            <div className='bg-neutral-200 animate-pulse w-[100%] h-4 rounded-lg'></div>
                        </th>
                        <td>
                            <div className='bg-neutral-200 animate-pulse w-[100%] h-4 rounded-lg'></div>                        
                        </td>
                    </tr>

                    <tr>
                        <th>
                            <div className='bg-neutral-200 animate-pulse w-[100%] h-4 rounded-lg'></div>
                        </th>
                        <td>
                            <div className='bg-neutral-200 animate-pulse w-[100%] h-4 rounded-lg'></div>                        
                        </td>
                    </tr>

                    <tr>
                        <th>
                            <div className='bg-neutral-200 animate-pulse w-[100%] h-4 rounded-lg'></div>
                        </th>
                        <td>
                            <div className='bg-neutral-200 animate-pulse w-[100%] h-4 rounded-lg'></div>                        
                        </td>
                    </tr>

                    <tr>
                        <th>
                            <div className='bg-neutral-200 animate-pulse w-[100%] h-4 rounded-lg'></div>
                        </th>
                        <td>
                            <div className='bg-neutral-200 animate-pulse w-[100%] h-4 rounded-lg'></div>                        
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div className='bg-white rounded-md py-8 px-4 row-span-2 border'>
            <h3>Payment History</h3>
            <table className='w-full mt-4'>
                <tbody>
                    <tr>
                        <th>
                            <div className='bg-neutral-200 animate-pulse w-[100%] h-4 rounded-lg'></div>
                        </th>
                        <td>
                            <div className='bg-neutral-200 animate-pulse w-[100%] h-4 rounded-lg'></div>                        
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <div className='bg-neutral-200 animate-pulse w-[100%] h-4 rounded-lg'></div>
                        </th>
                        <td>
                            <div className='bg-neutral-200 animate-pulse w-[100%] h-4 rounded-lg'></div>                        
                        </td>
                    </tr>
                </tbody>
            </table>

            <div className='bg-neutral-200 rounded-lg animate-pulse py-3 px-6 mt-4 h-11 w-full max-w-[140px]'>
            </div>
        </div>
    </div>
  )
}
