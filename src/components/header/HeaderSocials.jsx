import React from 'react'
import {BsLinkedin, BsGithub, BsInstagram} from "react-icons/bs"

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="/" target="blank"><BsLinkedin/></a>
        <a href="/" target="blank"><BsGithub/></a>
        <a href="/" target="blank"><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials