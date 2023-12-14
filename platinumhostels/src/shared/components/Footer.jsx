import React from 'react'
import { Link } from 'react-router-dom'

import { FullLogo } from './Logo'
import { QuickLinks } from '../../data/data components/footerlinks'

export default function Footer() {
  return (
    <footer className='bg-primary'>
        <div className='section-container px-[5%] py-10 text-secondary'>
            <div className='grid gap-10 md:gap-20 md:grid-cols-[96px,auto]'>
                
                <div className='basis-[96px]'>
                    <FullLogo />
                </div>
                
                <div className='flex flex-wrap gap-10 s-sm:justify-between basis-auto'>

                    {
                        QuickLinks.map((section, index) => (
                            <div key={index} className='capitalize'>
                                <h3 className='text-secondary text-[14px]'>{section.header}</h3>

                                <div className='flex gap-2 flex-col mt-3'>
                                    {section.links.map((link) => (
                                        <Link key={link.to} to={link.to}>
                                            <p className='text-[14px] hover:underline'>{link.title}</p>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                    ))}
                </div>
            </div>

            <hr className='my-10' />

            <div className='text-center'>
                <p className='text-[14px]'>
                    © 2023 Copyright Platinum Hostels. All Rights Reserved. Website Developed By Alhassan Baaba
                </p>
            </div>
        </div>
    </footer>
  )
}
