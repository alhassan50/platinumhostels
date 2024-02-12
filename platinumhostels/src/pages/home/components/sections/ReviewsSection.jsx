import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import {motion} from "framer-motion"
import { fadeIn } from '../../../../shared/components/MotionVariants'

// css
import 'swiper/css';
import 'swiper/css/bundle'
import '../../../../styles/customSwiper.css'

//custom components
import ReviewCard from '../cards/ReviewCard'

//data
import {Reviewers} from '../../../../data/data components/Reviewers'

export default function ReviewsSection() {
  const breakpoints = {
    320: { slidesPerView: 1 }
  };

  return (
    <section className='review-section bg-[#fafafa]'>
        <div className='section-container'>
            <div className='section-header capitalize text-center'>
                <motion.h2
                  variants={fadeIn("up", .5, 0)}
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0 }}
                >
                  hear from our community
                </motion.h2>
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
                  Reviewers.map((reviewer, index) => (
                    <SwiperSlide 
                      key={reviewer.name} 
                      className=''
                    >
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
