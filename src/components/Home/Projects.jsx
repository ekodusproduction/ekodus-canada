import React from 'react'

import offertoplayer from "../../assets/offer-toplayer.png"
import offerbottomlayer from "../../assets/offer-bottomlayer.png"

import {RxDotFilled} from 'react-icons/rx'

import koducrm from "../../assets/koducrm1.jpg"
import ymoc from "../../assets/ymoc1.jpg"
import biryanicloud from "../../assets/biryanicloud1.jpg"

import {Link} from 'react-router-dom'

import "./Projects.css"
const Projects = () => { 
  
  const CustomDot = ({ onMove, onClick, active }) => {
    // onMove means if dragging or swiping in progress.
    // active is provided by this lib for checking if the item is active or not.
    return (
      <li
        className={active ? "sliderdots_active" : "sliderdots_inactive"}
        onClick={() => onClick()}
      >
        <RxDotFilled size={"25"} className='slider_dot'   />
      </li>
    );
  };

    
  return (
    <div className='projects'>
  
        <div className='project_header'>
        <img className='offertoplayer' src={offertoplayer} alt="" />
        <img className='offerbottomlayer' src={offerbottomlayer} alt="" />
            <p className='project_header_start'>RECENT PROJECTS</p>
            <h2>OUR LATEST CASE STUDIES</h2>
            <p className='project_header_desc'>Embark on a journey of inspiration with our latest case studies, illustrating the transformative solutions we provide.</p>
           

        </div>
        <div className='project_body'>
        <div className='project_card'>
           
           <img src={koducrm} alt="" />
           <div className='project_card_text'>
           <h2>KoduCRM</h2>
           <p>Our KoduCRM is designed to assist you in concentrating on building strong connections with individuals within your organization</p>
           <Link to={`/products`} style={{textDecoration: "none"}}>Know more</Link>
           </div>
         </div>
         <div className='project_card'>
           
           <img src={ymoc} alt="" />
           <div className='project_card_text'>
           <h2>YMOC.com</h2>
           <p>YMOC.com is a food delivery application founded by Mark Bordoloi, who is the President of Ekodus, in 2018. It provides an easy way to order food for delivery straight to your doorstep.</p>
           <Link to={`/products`} style={{textDecoration: "none"}}>Know more</Link>
           </div>
         </div>
         <div className='project_card'>
           
           <img src={biryanicloud} alt="" />
           <div className='project_card_text'>
           <h2>Biryanicloud.com </h2>
           <p>Biryani is a popular dish found throughout the Indian subcontinent and various South Asian countries, as the name suggests</p>
           <Link to={`/products`} style={{textDecoration: "none"}}>Know more</Link>
           </div>
         </div>
         
       
        </div>
    </div>
  )
}

export default Projects