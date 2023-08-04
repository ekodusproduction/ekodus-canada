import React, {useState, useEffect} from 'react'
import logo from "../../assets/ekodus_logo.png"
import contactimg from "../../assets/nav-phoneimage.png"
import "./Navbar.css"

import {Link, NavLink} from "react-router-dom"

import Menu from '../../UI/Menu'
import { BiMenuAltLeft } from "react-icons/bi";
import EkodusLogo from "../../assets/Ekodus_canada_final_logo.png"


const Navbar = () => {
  const [menuOpen, ismenuOpen] = useState(false);
  const [navbar,setNavbar] = useState(false)
  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }
  useEffect(() => {
    changeBackground()
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground)
  })
  
  return (
   <div className={`${navbar? 'navbar_active':'navbar'}`}>
    
      <div className='navbar__logo'>
        <img src={EkodusLogo} alt="ekodus_logo" />
      </div>
      <div className='navbar__links'>
        <ul>
          <li className='navbar__link'>
            <NavLink to={"/"} >Home</NavLink>
          </li>
          <li className='navbar__link'>
            <NavLink to={"/about"}>About us</NavLink>
          </li>
          <li className='navbar__link'>
            <NavLink to={"/services"}>Services</NavLink>
          </li>
          <li className='navbar__link'>
            <NavLink to={"/products"}>Products</NavLink>
          </li>
          <li className='navbar__link'>
            <NavLink to={"/career"}>Career</NavLink>
          </li>
          <li className='navbar__link'>
            <NavLink to={"/blogspage"}>Blogs</NavLink>
          </li>
          <li>
          <Link style={{textDecoration: "none"}} to='/contact'>
      <div className='navbar__contact'>
        <div className='navbar__contact_img'>
        <img src={contactimg} alt="" />
        </div>
        <div className='navbar__contact_text'>
          <p style={{color:"white"}}>Call anytime:</p>
          <p style={{color:"white"}}><b>+1 647-460-3579</b></p>
        </div>

      </div>
      </Link>
          </li>
        </ul>
      </div>
     

        {menuOpen? ( <Menu ismenuOpen={ismenuOpen}/>) :
        (<button
          onClick={()=>ismenuOpen(true)}
          className='menu_icon'
        >
          <BiMenuAltLeft size={"35"} />
        </button>)

        }
        
     
     
   </div>
  )
}

export default Navbar