import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// css
import 'swiper/css';
import 'swiper/css/bundle'
import 'swiper/css/autoplay'

//data
import { EndorsementData } from '../../../../data/data components/EndorsementsData';

export default function EndorsementsSection() {
    const breakpoints = {
        320: { slidesPerView: 3 },
        500: { slidesPerView: 3 },
        640: { slidesPerView: 4 },
        768: { slidesPerView: 5 },
        900: { slidesPerView: 6 },
        1024: { slidesPerView: 7 },
    };

    const autoplay = {
        delay: 2500,
        disableOnInteraction: false,
    }
    
  return (
    <div className='px-[5%] py-6'>
        <div className='section-container'>
            <div className='section-header text-center'>
                <h2 className='text-[24px] opacity-60'>
                    Endorsed By
                </h2>
            </div>

            <div className='section-body mt-10'>
                <div>
                    <Swiper
                        modules={[Autoplay]}
                        loop
                        autoplay={autoplay}
                        breakpoints={breakpoints}
                    >
                        {
                            EndorsementData.map((endorsement) => (
                                <SwiperSlide key={endorsement.alt}>
                                    <figure className={`opacity-60 ${endorsement.width}`}>
                                        <img 
                                            src={endorsement.image} 
                                            alt={endorsement.alt} 
                                            title={endorsement.alt}
                                        />
                                    </figure>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
        </div>
    </div>
  )
}
