import React from 'react'
import "./Footer.css"
import ekoduslogo from "../../assets/ekodus_logo.png"
import footercallicon from "../../assets/footer-callicon.png"
import footeremailicon from "../../assets/footer-emailicon.png"

import {FaFacebookF} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {AiOutlineGooglePlus} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {Link} from "react-router-dom"
import Swal from 'sweetalert2'


const Footer = () => {
    const submitHandler = (e) =>{
        e.preventDefault()

        Swal.fire({
            title: 'Success',
            text: 'Thanks for subscribing to us',
            icon: 'success',
            confirmButtonText: 'Okay'

          })
    }
  return (
    <div className='footer'>
        <div className='footer_main_container'>
            <div className='footer_main'>
            <div className='footer_main_info'>
                <img className='footer_logo' src={ekoduslogo} alt="" />
                <p>Step into the world of Ekodus, where creativity, innovation, and technology intertwine. With our unrivaled digital solutions and AI designs, we empower Canadian businesses to soar to new heights.</p>
                <div className='footer_main_info_contacts'>
                    <div className='footer_main_info_contact'>
                        <img src={footercallicon} alt="" />
                        <div>
                            <h3>Call us: </h3>
                            <p>+1 647-460-3579</p>
                        </div>
                    </div>
                    <div className='footer_main_info_contact'>
                        <img src={footeremailicon} alt="" />
                        <div>
                            <h3>Email us: </h3>
                            <p>info@ekodus.com</p>
                        </div>
                    </div>

                </div>
            </div>
            <div className='footer_link'>
                <h2>Quick Links</h2>
                <ul>
                    <Link to={"/"} style={{textDecoration: "none", color: "white"}}><li>Home</li></Link>
                    <Link to={"/about"} style={{textDecoration: "none", color: "white"}}><li>About us</li></Link>
                    <Link to={"/services"} style={{textDecoration: "none", color: "white"}}><li>Services</li></Link>
                    <Link to={"/products"} style={{textDecoration: "none", color: "white"}}><li>Products</li></Link>
                    <Link to={"/career"} style={{textDecoration: "none", color: "white"}}><li>Career</li></Link>
                    <Link to={"/contact"} style={{textDecoration: "none", color: "white"}}><li>Contact</li></Link>
                    <Link to={"/blogspage"} style={{textDecoration: "none", color: "white"}}><li>Blogs</li></Link>
                </ul>

            </div>
          
            </div>
            <div className='footer_copyright'>
                <p>Copyright ©2023 Ekodus.com All Rights Reserved</p>
                <div className='footer_socialicons'>
                    <a href="https://www.facebook.com/profile.php?id=100075469916772&mibextid=ZbWKwL" target='_blank'>
                    <FaFacebookF size={"20"} color='white'  />
                    </a>
                    <a href="https://www.linkedin.com/company/ekodus-technologies-canada-inc/" target='_blank'>
                    <AiFillLinkedin size={"20"} color='white'  />
                    </a>
                    <a href="https://instagram.com/ekodustechnologiescanada?igshid=MzRlODBiNWFlZA==" target='_blank'>
                    <AiOutlineInstagram size={"20"} color='white'  />
                    </a>
                </div>
            </div>
        </div>
        <div className='footer_subscribe'>
            <h2>Subscribe to our newsletter today</h2>
            <form onSubmit={submitHandler}>
                <input type="text" required name="" id="" placeholder='Enter your email' />
                <button type='submit' >Subscribe now</button>
            </form>
        </div>
    </div>
  )
}

export default Footer