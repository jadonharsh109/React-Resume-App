import React from 'react'
import './Nav.css'
import {AiOutlineHome, AiOutlineUser, AiOutlineBook} from "react-icons/ai"
import {MdOutlineDesignServices} from "react-icons/md"
import {IoMdContact} from "react-icons/io"
import { useState } from 'react'

const Nav = ()=>{

    const [activeNav, setActiveNav] = useState("#")

    return(
        <nav>
            <a href="#" onClick={()=> setActiveNav("#") } className={activeNav === "#" ? "active" : ""}><AiOutlineHome/></a>
            <a href="#about" onClick={()=> setActiveNav("#about") } className={activeNav === "#about" ? "active" : ""}><AiOutlineUser/></a>
            <a href="#experience"  onClick={()=> setActiveNav("#experience") } className={activeNav === "#experience" ? "active" : ""}><AiOutlineBook/></a>
            <a href="#services"  onClick={()=> setActiveNav("#services") } className={activeNav === "#services" ? "active" : ""}><MdOutlineDesignServices/></a>
            <a href="#contact"  onClick={()=> setActiveNav("#contact") } className={activeNav === "#contact" ? "active" : ""}><IoMdContact/></a>
        </nav>
    )
}

export default Nav;