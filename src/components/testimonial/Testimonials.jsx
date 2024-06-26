import React from 'react'
import css from './Testimonials.module.css'
import Hero from '../../assets/img12.png'
import {TestimonialsData} from '../../data/testimonials'
import { Swiper, SwiperSlide } from 'swiper/react'

const Testimonials = () => {
  return (
    <div className={css.testimonials}>
        <div className={css.wrapper}>
            <div className={css.container}>
                <span>Top Rated</span>
                <span>
                    Our Liquid make up saves the day everytime
                </span>
            </div>

            <img src={Hero} alt="" />

            <div className={css.container}>
                <span>100k</span>
                <span>
                    Happy Customers With Us
                </span>
            </div>
        </div>

        <div className={css.reviews}>Reviews</div>

        <div className={css.carousel}>
            <Swiper
                slidesPerView={3}
                slidesPerGroup={1}
                spaceBetween={20}

                className={css.tcarousel}

                //applying breakpoint for different screens
                breakpoints={{    
                    856: {
                        slidesPerView: 3
                    },
                    640: {
                        slidesPerView: 2
                    },
                    0: {
                        slidesPerView: 1
                    }
                }}
            >
                {
                    TestimonialsData.map((testimonial, i) => (
                        <SwiperSlide>
                            <div className={css.testimonial}>
                                {/* <img src={testimonial.image} alt="" /> */}
                                <span>{testimonial.comment}</span>
                                    
                                <hr/>

                                <span>{testimonial.name}</span>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    </div>
  )
}

export default Testimonials