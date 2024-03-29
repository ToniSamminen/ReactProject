import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {GrFacebook} from 'react-icons/gr'
import {GrInstagram} from 'react-icons/gr'


const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://linkedin.com" target="_blank"><BsLinkedin/></a>
        <a href="https://facebook.com" target="_blank"><GrFacebook/></a>
        <a href="https://instagram.com" target="_blank"><GrInstagram/></a>
    </div>
  )
}

export default HeaderSocials