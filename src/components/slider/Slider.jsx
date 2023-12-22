import React from 'react'
import './Slider.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Pagination, Navigation} from 'swiper'

// import swiper style
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { SliderProducts } from '../../data/products'

const Slider = () => {
  return (
    <div className="s_container">

        {/* slider */}

        <Swiper
        // slider breakpoints
        breakpoints={{
            // from screen size 640px and above display 3 slides
            640: {
                slidesPerView: 3
            },
            // from size 0 to 640px display 1 slide
            0: {
                slidesPerView: 1
            }
        }}

        // ................
        modules={[Pagination, Navigation]}
        className='MySlider'
        navigation={true}
        loopFillGroupWithBlank={true}
        // number of slides
        slidesPerView={3}
        // gap between slides 40px
        spaceBetween={40}
        // group of slides
        slidesPerGroup={1}
        // make slide continous/infinite
        loop={true} >

            {/* map through slider products in data folder and return slide contents */}
            {SliderProducts.map((slide, i) => (
                <SwiperSlide key={i}>
                    
                    <div className="left_s">
                        <div className="name">
                            <span>{slide.name}</span>
                            <span>{slide.detail}</span>
                        </div>

                        <span>{slide.price}$</span>
                        <div>Shop Now</div>
                    </div>

                    <div className="right_s">
                        <img src={slide.img} alt="Product" className='product_img' />
                    </div>

                </SwiperSlide>
            ))}
        </Swiper>
    </div>
  )
}

export default Slider