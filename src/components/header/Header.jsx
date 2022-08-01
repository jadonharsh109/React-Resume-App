import React from 'react'
import './Header.css'
import CTA from './CTA'
import Me from "../../assets/harsh2.png"
import HeaderSocials from './HeaderSocials'

const Header = ()=>{
    return(
        <header>
            <div className="container header_container">
                <h5 className='left__h5'>HELLO I'M</h5>
                <h1>HarshVardhan SIngh Jadon</h1>
                <h5 className="text-light">Front-End Developer</h5>
                <CTA/>
                <HeaderSocials/>

                <div className="me">
                    <img src={Me} alt="It's Me" />
                </div>
                <a href="#contact" className='scroll__down'>Scroll Down</a>
            </div>
        </header>
    )
}

export default Header;