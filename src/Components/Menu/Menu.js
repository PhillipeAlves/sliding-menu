import React, { useState } from 'react';
import { NavBar } from '../Navbar/Navbar'
import './Menu.css'

export const Menu = () => {
    const [toggle, setToggle] = useState(false);
    return ( 
        <>
            <NavBar toggle={toggle} onClick={() => setToggle(!toggle)}/>     
            <span
                className={`toggle-menu-btn ${toggle ? 'active-menu-btn' : ''}`}
                onClick={() => setToggle(!toggle)}
            ></span>
        </>
    );
}