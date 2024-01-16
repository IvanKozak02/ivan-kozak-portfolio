import React, {useRef} from 'react';
import './single.scss'
import {useScroll, useTransform,motion} from "framer-motion";
function Single({item}) {

    const ref = useRef(null);
    const {scrollYProgress} = useScroll({target: ref});
    const y = useTransform(scrollYProgress,[0,1], [-100,100])

    return (
        <section className="single">
            <div className="project-image" ref={ref}>
                <img src={item.img} alt=""/>
            </div>
            <motion.div className="project-description" style={{y}}>
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
                <button>See demo</button>
            </motion.div>
        </section>
    );
}

export default Single;