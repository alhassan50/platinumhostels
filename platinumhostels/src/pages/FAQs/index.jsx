import React, { useEffect, useState } from 'react'

import faqs from '../../data/FAQs.json'

export default function FAQs() {
    const [openedFAQ, setOpenedFAQ] = useState(null);

  const toggleIsOpened = (faqId) => {
    setOpenedFAQ((prevOpenedFAQ) => (prevOpenedFAQ === faqId ? null : faqId));
  };

  return (
    <div>
        <div className='bg-white rounded-md py-8 px-4'>
            <h2 className='text-primary text-left'>
                Frequently Asked Questions
            </h2>

            <p className='mt-4'>
                Explore our Frequently Asked Questions (FAQs) page to find answers to common queries and concerns.
            </p>
        </div>

        <div className='grid gap-4 mt-4'>
            {faqs.map(faq => (
                <div 
                    key={faq.id} 
                    id={faq.id}
                    className={`bg-white rounded-md py-4 px-8`}
                >
                    <div className='flex justify-between items-center cursor-pointer'
                        onClick={() => toggleIsOpened(faq.id)}
                    >
                        <h3>
                            {faq.faq}
                        </h3>

                        {
                            openedFAQ === faq.id ?
                            <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/></svg>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" fill='#2F4858'/></svg>
                        }
                    </div>
                    
                    {
                        openedFAQ === faq.id &&
                        <div>
                            <hr className='my-4'/>
                            <div>
                                <p className='text-primary'>
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    }
                </div>
            ))}
        </div>
    </div>
  )
}
