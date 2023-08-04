import React from 'react'
import './Header.css'
import stripe from "../../assets/service-leftlayer.png"
import bannerimg from "../../assets/banner-image.jpg"
import bannervideoimg from "../../assets/banner-vedioimage.png"
import designicon1 from "../../assets/about-rightcircle.png"

import {FaFacebookF} from 'react-icons/fa'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiOutlineGooglePlus} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiFillLinkedin} from "react-icons/ai"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header_container'>
        <div className='header'>
          <div className='header__left'>
            <div className='header_social_icons'>
            <a href="https://www.facebook.com/profile.php?id=100075469916772&mibextid=ZbWKwL" style={{color:'white'}} target='_blank'>
              <button>
                <FaFacebookF size={"22"} className='header_social_icon'  />
              </button>
              </a>
              <a href="https://www.linkedin.com/company/ekodus-technologies-canada-inc/" style={{color:'white'}} target='_blank'>
              <button>
                <AiFillLinkedin size={"25"} className='header_social_icon'  />
              </button>
              </a>
              <a href="https://instagram.com/ekodustechnologiescanada?igshid=MzRlODBiNWFlZA==" style={{color:'white'}} target='_blank'>
              <button>
                <AiOutlineInstagram size={"25"} className='header_social_icon'  />
              </button>
              </a>
            </div>
            <div className='header__left_content'>
              <div className='header__left_content_text'>
                <p className='header_starting_text'>WE PROVIDE OUTSOURCED</p>
                <h1><span> IT SERVICES & </span><span>SOLUTIONS</span> </h1>
                <p className='header__description'>Transform your brand and connect globally - Our platform provides the power and reach you need to succeed!</p>
              </div>
              <div className='header__left_content_buttons'>
                {/* <button className='btn-primary'>Get Started</button> */}
                <Link to='/contact'><button className='btn-primary'>Contact Us</button></Link>
              </div>
            </div>
            <div className='header__banner_img'>
            <img className='header__banner_img_icon' src={bannervideoimg} alt="" />
            <img className='header__banner_img_main' src={bannerimg} alt="" />
          </div>
          <div className='header_designicon1'>
          <img src={designicon1} alt="" />
        </div> 
          </div>
          
        </div>
       
    </div>
  )
}

export default Header