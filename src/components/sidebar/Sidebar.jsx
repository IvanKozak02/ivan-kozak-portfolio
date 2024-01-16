import React, {useState} from 'react';
import './sidebar.scss'
import Links from "./Links/Links.jsx";
import ToggleBtn from "./toggleBtn/ToggleBtn.jsx";
import {motion} from "framer-motion";

function Sidebar() {
    const [open, setOpen] = useState(false);

    const variants = {
        open: {
            clipPath: "circle(1200px at 50px 50px)",
            transition: {
                type: "spring",
                stiffness: 20,
            }
        },
        closed: {
            clipPath: "circle(30px at 50px 50px)",
            transition: {
                delay: 0.2,
                type: "spring",
                stiffness: 400,
                damping: 40,
            }
        }
    }

    return (
        <motion.div className="sidebar" animate={open ? "open" : "closed"}>
            <motion.div className="bg" variants={variants}>
                <Links/>
            </motion.div>
            <ToggleBtn setOpen={setOpen} open={open}/>
        </motion.div>
    );
}

export default Sidebar;