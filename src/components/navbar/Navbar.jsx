import React from 'react';
import './navbar.scss'
import facebook from '../../../public/facebook.png'
import instagram from '../../../public/instagram.png'
import youtube from '../../../public/youtube.png'
import {motion} from "framer-motion";
import Sidebar from "../sidebar/Sidebar.jsx";
function Navbar() {

    const variants = {
        visible:{
            opacity:1,
            transition: {duration: 0.5},
            scale:1
        },
        hidden: {
            opacity: 0,
            scale: 0.5
        }
    }

    return (
        <div className="navbar">
            <Sidebar/>
            <div className="wrapper">
                <motion.span variants={variants} initial="hidden" animate="visible">
                    Kozak dev
                </motion.span>
                <div className="social">
                    <a href="https://www.facebook.com/profile.php?id=100017827656439"><img src="/facebook.png"/></a>
                    <a href="https://www.instagram.com/kozak8930?igsh=MW9lb3czZnpwbzVzOQ%3D%3D&utm_source=qr"><img src="/instagram.png"/></a>
                    <a href="https://github.com/IvanKozak02/"><img src="/github-icon.png"/></a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;