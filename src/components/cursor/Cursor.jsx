import React, {useEffect, useState} from 'react';
import './cursor.scss'
import {motion} from "framer-motion";

function Cursor(props) {

    const [cursorPosition, setCursorPosition] = useState({x: 0, y: 0})

    useEffect(()=>{
        const mouseMove = (e) => {
            setCursorPosition({x: e.clientX, y: e.clientY});
        }
        window.addEventListener("mousemove", mouseMove);

        return ()=>{
            window.removeEventListener('mousemove', mouseMove)
        }
    },[])


    return (
        <motion.div animate={{x:cursorPosition.x, y: cursorPosition.y}} className="cursor"></motion.div>
    );
}

export default Cursor;