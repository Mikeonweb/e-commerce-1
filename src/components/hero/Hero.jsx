import React from 'react'
import css from './Hero.module.css'
import HeroImg from '../../assets/img11.png'
import {GiShoppingBag} from 'react-icons/gi'
import {BiRightArrowAlt} from 'react-icons/bi'
//import framer motion
import { motion } from "framer-motion"

 const Hero = () => {
    //declaring type of animation
    const transition = {duration: 3,type: 'spring'}

  return (
    <div className={css.container}>

        {/* left side */}
        <div className={css.h_sides}>
            <span className={css.text1}>Skin care products</span>

            <div className={css.text2}>
                <span>Luxury Brands</span>
                <span>You Never go out of trend with our carefully selected class of luxury brands</span>
            </div>
        </div>

        {/* hero image area*/}
        <div className={css.wrapper}>
            {/* adding motion to circle, image & cart button*/}

            {/* blue circle */}
            <motion.div 
            initial={{bottom: "2rem"}} // initial motion start position on page load/refresh/scroll
            whileInView={{bottom: '0rem'}} // end position of animation
            transition={transition} // assign already declared transtion variable
            className={css.circle}></motion.div>

            {/* image */}
            <motion.img
            initial={{bottom: '-2rem'}}
            whileInView={{bottom: '0rem'}}
            transition={transition}
             src={HeroImg} alt="" width={600} />
             

             {/* cart button */}
            <motion.div
            transition={transition}
            initial={{right: '6%'}}
            whileInView={{right: '2%'}}
            className={css.cart2}>
                <GiShoppingBag />

                <div className={css.signup}>
                    <span>Best Signup Offers</span>

                    <div>
                        <BiRightArrowAlt />
                    </div>
                </div>
            </motion.div>
        </div>

        {/* right side */}
        <div className={css.h_sides}>
            <div className={css.traffic}>
                <span>3M</span>
                <span>Monthly Traffic</span>
            </div>

            <div className={css.customers}>
                <span>500K</span>
                <span>Happy Customers</span>
            </div>
        </div>
    </div>
  )
}

export default Hero
