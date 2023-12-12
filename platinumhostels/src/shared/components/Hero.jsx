import React from 'react'

export default function Hero({children, headerText, desc, bgImage}) {
  return (
    <section className={`hero-section ${bgImage}`}>
        
        <div className='section-container flex justify-center items-center'>
            <div className='flex justify-center items-center flex-col'>
                <h1>
                    {headerText}
                </h1>

                <p className='hero-desc'>
                    {desc}
                </p>

                {children}
            </div>
        </div>
    </section>
  )
}
