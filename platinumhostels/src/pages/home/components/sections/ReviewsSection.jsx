import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

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
    320: { slidesPerView: 1 },
    640: { slidesPerView: 1 },
    768: { slidesPerView: 3 },
    1024: { slidesPerView: 3 },
  };

  return (
    <section className='review-section bg-[#fafafa]'>
        <div className='section-container'>
            <div className='section-header capitalize text-center'>
                <h2>
                  hear from our community
                </h2>
            </div>

            <div className='section-body'>
              <Swiper
                  breakpoints={breakpoints}
                  modules={[Navigation]}
                  navigation
                  spaceBetween={30}
                  className=''
              >
                {
                  Reviewers.map(reviewer => (
                    <SwiperSlide className=''>
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
