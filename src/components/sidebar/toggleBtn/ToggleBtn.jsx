import React from 'react';
import {RiCloseLine, RiMenu3Line} from "react-icons/ri";

function ToggleBtn({open,setOpen}) {
    return (
        <button onClick={()=>setOpen(prev => !prev)}>
            {open ? <RiCloseLine size={20}/> : <RiMenu3Line size={20}/>}
        </button>
    );
}

export default ToggleBtn;