import React, {useRef} from 'react';
import './portfolio.scss'
import {motion,useScroll, useSpring} from "framer-motion";
import {portfolioItems} from "../../data/portfolio-items.js";
import Single from "./SingleProject/Single.jsx";

function Portfolio(props) {

    const ref = useRef(null);
    const {scrollYProgress} = useScroll({target: ref, offset: ['end end', 'start start']});
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    })
    console.log(scrollYProgress)
    return (
        <div className='portfolio' ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{scaleX}} className="progress-bar"></motion.div>
            </div>
            {portfolioItems.map((item)=>{
                return <Single key={item.id} item={item} />
            })}
        </div>
    );
}

export default Portfolio;