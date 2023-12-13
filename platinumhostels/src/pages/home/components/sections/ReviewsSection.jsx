import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// css
import 'swiper/css';
import 'swiper/css/bundle'
import 'swiper/css/autoplay'
import '../../styles/reviews.css'

//custom components
import ReviewCard from '../cards/ReviewCard'

//data
import {Reviewers} from '../../../../data/data components/Reviewers'

export default function ReviewsSection() {
  const breakpoints = {
    320: {
      slidesPerView: 1,
  },
  // when window width is >= 640px
  640: {
      slidesPerView: 2,
  },
  // when window width is >= 768px
  768: {
      slidesPerView: 2,
  },
  // when window width is >= 1024px
  1024: {
      slidesPerView: 3,
  },
  };

  return (
    <section className='bg-[#fafafa]'>
        <div className='section-container'>
            <div className='section-header capitalize text-center'>
                <h2>
                  hear from our community
                </h2>
            </div>

            <div className='section-body'>
              <Swiper
                  breakpoints={breakpoints}
                  spaceBetween={20}
                  className='grid gap-3'
              >
                {
                  Reviewers.map(reviewer => (
                    <SwiperSlide>
                      <ReviewCard reviewer={reviewer}/>
                    </SwiperSlide>
                  ))
                }
              </Swiper>
            </div>
        </div>
    </section>
  )
}
