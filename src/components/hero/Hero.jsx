import React from 'react';
import './hero.scss'
import {motion} from "framer-motion";
function Hero(props) {

    const textVariants = {
        initial: {
            x: -500,
            opacity: 0
        },
        animate:{
            x: 0,
            opacity: 1,
            transition:{
                duration: 1,
                staggerChildren: 0.1
            }
        },
        scrollButton: {
            opacity: 0,
            y: 10,
            transition: {
                duration: 2,
                repeat: Infinity
            }
        }
    }

    const sliderVariants = {
        initial: {
            x: 0,
        },
        animate:{
            x: "-220%",
            transition:{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 20,
            }
        }
    }


    return (
        <section className="hero">
            <div className="hero-container">
                <motion.div className="text-container"
                            variants={textVariants}
                            initial={"initial"}
                            animate={"animate"}>
                    <motion.h2 variants={textVariants}>IVAN KOZAK</motion.h2>
                    <motion.h1 variants={textVariants}>Fullstack developer</motion.h1>
                    <motion.div variants={textVariants} className="user-interaction-btns">
                        <motion.a href={'#Portfolio'} variants={textVariants} className="latest-work-a">See the latest works</motion.a>
                        <motion.a href={'#Contact'} variants={textVariants} className="contact-a">Contact me</motion.a>
                    </motion.div>
                    <motion.img variants={textVariants} animate={'scrollButton'} src="/scroll.png" alt=""/>
                </motion.div>

                <div className="image-container">
                    <img src="/portfolio-img.png" alt=""/>
                </div>
            </div>
            <motion.div variants={sliderVariants} initial={"initial"} animate={"animate"} className="slider-text-container">
                Fullstack developer
            </motion.div>
        </section>
    );
}

export default Hero;