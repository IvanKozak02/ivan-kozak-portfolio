import React, {useRef} from 'react';
import './services.scss'
import {motion, useInView} from "framer-motion";

function Services(props) {

    const ref = useRef(null);
    const isInView = useInView(ref, {});

    const variants = {
        initial:{
            opacity: 0,
            x: -500,
        },
        animate: {
            x: 0,
            opacity: 1,
            transition:{
                duration: 1,
                staggerChildren: 0.1
            }
        }
    }

    return (
            <motion.div ref={ref} className="services" variants={variants} initial={'initial'} animate={isInView && 'animate'}>
                    <motion.div className="text-container" variants={variants}>
                        <p>I'm ready to be challenged and eager to learn</p>
                        <hr/>
                    </motion.div>
                    <motion.div className="title-container" variants={variants}>
                        <div className="title">
                            <img src="/people.webp" alt=""/>
                            <h2><b>Unique</b> Ideas</h2>
                        </div>
                        <div className="title">
                            <h2><b>For Your</b> Business</h2>
                            <button>WHAT WE DO?</button>
                        </div>
                    </motion.div>
                    <motion.div className="list-container" variants={variants}>
                        <div className="box">
                            <h2>Branding</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Amet aut autem consectetur consequatur delectus distinctio eligendi enim fuga illo iusto,
                                labore laboriosam magnam molestias natus nisi odio optio provident quae quasi quia quidem
                                reprehenderit repudiandae rerum sed similique sit
                                vero voluptates? Corporis culpa dolores eius iste minima nesciunt officiis quasi.</p>
                            <button>Go</button>
                        </div>
                        <div className="box">
                            <h2>Branding</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Amet aut autem consectetur consequatur delectus distinctio eligendi enim fuga illo iusto,
                                labore laboriosam magnam molestias natus nisi odio optio provident quae quasi quia quidem
                                reprehenderit repudiandae rerum sed similique sit
                                vero voluptates? Corporis culpa dolores eius iste minima nesciunt officiis quasi.</p>
                            <button>Go</button>
                        </div>
                        <div className="box">
                            <h2>Branding</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Amet aut autem consectetur consequatur delectus distinctio eligendi enim fuga illo iusto,
                                labore laboriosam magnam molestias natus nisi odio optio provident quae quasi quia quidem
                                reprehenderit repudiandae rerum sed similique sit
                                vero voluptates? Corporis culpa dolores eius iste minima nesciunt officiis quasi.</p>
                            <button>Go</button>
                        </div>
                        <div className="box">
                            <h2>Branding</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Amet aut autem consectetur consequatur delectus distinctio eligendi enim fuga illo iusto,
                                labore laboriosam magnam molestias natus nisi odio optio provident quae quasi quia quidem
                                reprehenderit repudiandae rerum sed similique sit
                                vero voluptates? Corporis culpa dolores eius iste minima nesciunt officiis quasi.</p>
                            <button>Go</button>
                        </div>
                    </motion.div>
            </motion.div>

    );
}

export default Services;