import React, { useEffect } from 'react'
import { Form } from 'react-router-dom'

export default function ProfileForm({enableBtn}) {
  return (
    <Form onChange={()=>(enableBtn())}>
        <div>
            <h3>
                My Personal Profile
            </h3>
            
            <div className='mt-5 grid grid-cols-1 sm:grid-cols-2 gap-5'>
                <div className='flex flex-col gap-2 sm:col-span-2'>
                    <label className='text-primary text-sm'>
                        Full Name
                    </label>
                    <input 
                        type='text'
                        name='name'
                        id='name'
                        placeholder='John Doe'
                        defaultValue='John Doe'
                        className='text-[14px] border outline-primary rounded py-2 px-4 placeholder:font-light'
                    />
                </div>

                <div className='flex flex-col gap-2'>
                    <label className='text-primary text-sm'>
                        Phone Number
                    </label>
                    <input 
                        type='tel'
                        name='tel'
                        id='tel'
                        placeholder='0123456789'
                        defaultValue={'0123456789'}
                        className='text-[14px] border outline-primary rounded py-2 px-4 placeholder:font-light'
                    />
                </div>

                <div className='flex flex-col gap-2'>
                    <label className='text-primary text-sm'>
                        Gender/Sex
                    </label>
                    <select 
                        name='gender'
                        id='gender'
                        disabled
                        defaultValue={'male'}
                        className='text-[14px] border outline-primary rounded py-2 px-4 cursor-not-allowed'
                    >
                        <option value={'none'}></option>
                        <option value={'female'}>Female</option>
                        <option value={'male'}>Male</option>
                    </select>
                </div>
            </div>
        </div>

        <hr className='my-10'/>

        <div>
            <h3>
                My Academic Profile
            </h3>
            
            <div className='mt-5 student-info grid grid-cols-1 sm:grid-cols-2 gap-5'>
                <div className='flex flex-col gap-2'>
                    <label className='text-primary text-sm'>
                        Course/Program
                    </label>
                    <input 
                        type='text'
                        name='course'
                        id='course'
                        placeholder='BSc Physics'
                        defaultValue='BSc Physics'
                        className='text-[14px] border outline-primary rounded py-2 px-4 placeholder:font-light'
                    />
                </div>

                <div className='flex flex-col gap-2'>
                    <label className='text-primary text-sm'>
                        Level
                    </label>
                    <select 
                        name='level'
                        id='level'
                        defaultValue={'300'}
                        className='text-[14px] border outline-primary rounded py-2 px-4 cursor-pointer'
                    >
                        <option value={'none'}></option>
                        <option value={'100'}>Level 100</option>
                        <option value={'200'}>Level 200</option>
                        <option value={'300'}>Level 300</option>
                        <option value={'400'}>Level 400</option>
                        <option value={'500'}>Level 500</option>
                        <option value={'600'}>Level 600</option>
                        <option value={'700'}>Level 700</option>
                    </select>
                </div>
            </div>
        </div>

        <hr className='my-10'/>

        <div>
            <h3>
                Privacy Preferences
            </h3>
            <p className='mt-2 text-primary text-sm'>
                Customize what information you share with your roommates. Your comfort and privacy matter.
            </p>
            
            <div className='mt-5 student-info grid grid-cols-1 sm:grid-cols-3 gap-5'>
                <div className='flex items-center gap-2'>
                    <input 
                        type='checkbox'
                        name='course'
                        id='course'
                        placeholder='BSc Physics'
                        defaultValue='BSc Physics'
                        className='text-[14px] border outline-primary rounded py-2 px-4 placeholder:font-light'
                    />
                    <label className='text-primary text-sm'>
                        Profile Picture
                    </label>
                </div>

                <div className='flex items-center gap-2'>
                    <input 
                        type='checkbox'
                        name='course'
                        id='course'
                        placeholder='BSc Physics'
                        defaultValue='BSc Physics'
                        className='text-[14px] border outline-primary rounded py-2 px-4 placeholder:font-light cursor-not-allowed'
                        checked
                        disabled
                    />
                    <label className='text-primary text-sm'>
                        Full Name
                    </label>
                </div>

                <div className='flex items-center gap-2'>
                    <input 
                        type='checkbox'
                        name='course'
                        id='course'
                        placeholder='BSc Physics'
                        defaultValue='BSc Physics'
                        className='text-[14px] border outline-primary rounded py-2 px-4 placeholder:font-light'
                        checked
                        disabled
                    />
                    <label className='text-primary text-sm'>
                        Phone Number
                    </label>
                </div>

                <div className='flex items-center gap-2'>
                    <input 
                        type='checkbox'
                        name='course'
                        id='course'
                        placeholder='BSc Physics'
                        defaultValue='BSc Physics'
                        className='text-[14px] border outline-primary rounded py-2 px-4 placeholder:font-light'
                    />
                    <label className='text-primary text-sm'>
                        Email Address
                    </label>
                </div>
                <div className='flex items-center gap-2'>
                    <input 
                        type='checkbox'
                        name='course'
                        id='course'
                        placeholder='BSc Physics'
                        defaultValue='BSc Physics'
                        className='text-[14px] border outline-primary rounded py-2 px-4 placeholder:font-light'
                    />
                    <label className='text-primary text-sm'>
                        Course/Program
                    </label>
                </div>
                <div className='flex items-center gap-2'>
                    <input 
                        type='checkbox'
                        name='course'
                        id='course'
                        placeholder='BSc Physics'
                        defaultValue='BSc Physics'
                        className='text-[14px] border outline-primary rounded py-2 px-4 placeholder:font-light'
                    />
                    <label className='text-primary text-sm'>
                        Level
                    </label>
                </div>

                
            </div>
        </div>
    </Form>
  )
}
