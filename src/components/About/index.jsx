import React from 'react'
import "./About.css"
import aboutimgmain from "../../assets/about-image1.jpg"
import homeaboutimgsub from "../../assets/about-image2.jpg"
import homeaboutbackcircle from "../../assets/about-rightcircle.png"

import {BsArrowRight} from "react-icons/bs"
import {BsEmojiSmileFill} from "react-icons/bs"
import {MdGroups2} from "react-icons/md"
import {AiOutlineFieldTime} from "react-icons/ai"
import toplayer from "../../assets/offer-toplayer.png"
import stylelayer from "../../assets/service-leftlayer.png"
import Homeabout from '../Home/Homeabout'
import markimg from "../../assets/mark-image.png"
import { Link } from 'react-router-dom'
import { color } from 'framer-motion'

const About = () => {
  return (
    <div className='about_page'>
    
      <div className='about_page_header_container'>
      <div className='about_page_header'>
        <h1>ABOUT US</h1>
        <div className='about_header_loc'>
          <p><Link to={"/"} style={{textDecoration: "none" ,color:"white"}}>Home</Link></p>
          <BsArrowRight/>
          <p style={{color: "#fa6220"}}>About</p>

        </div>
      </div>
      </div>
      <div className='aboutus_content'>
    
        {/* <img src={toplayer} className='about_top_layer' alt="" />
        <img src={stylelayer} className='about_style_layer' alt="" /> */}
  
        <div className='aboutus_content_text'>
        <h2>About us</h2>
        <p>At Ekodus, we are a team of innovation and technology enthusiasts dedicated to driving digital transformation. Since our inception, we have been providing cutting-edge digital solutions, designing, and AI solutions for our clients. But our reach extends beyond IT services, as we cater to various business sectors across the globe, with a strong presence in North America and the Asia Pacific regions.
            <br /><br /> Our bespoke solutions and services are designed to support our clients across all business verticals, including healthcare, IT solutions, telecom, manufacturing, retail, financial services, educational services, wealth management, and insurance. We believe in redefining the possibilities of digital experiences, and our solutions are tailored to help our clients stay ahead in the ever-evolving digital landscape.
            At Ekodus, we are committed to providing exceptional services with a focus on delivering value, quality, and excellence to our clients. <br /><br /> Join us in creating a brighter, more innovative digital future for businesses worldwide
        </p>
        </div>
        <div className='aboutus_content_img'>
          <img src={aboutimgmain} className='aboutus_content_img_primary' alt="" />
          <img src={homeaboutimgsub} className='aboutus_content_img_sec' alt="" />
        </div>
       
      </div>
      <div className='about_content_two'>
      <div className='about_two_imgcontainer'>
        <div className='textcircle'>
          <h3>30+</h3>
          <p>Years of experience</p>
        </div>
        <img className='about_two_imgmain' src={aboutimgmain} alt="" />
        <img className='about_two_imgsub' src={homeaboutimgsub} alt="" />
      </div>
      <div className='header_about_right'>
        <div className='header_right_text'>
        
          <h2>WHY SHOULD YOU CHOOSE US ?</h2>
          <p className='header_right_text_desc'>
            <ul>
              <li>Achieve your clients’ goals and outcomes with our strategic business assessments.</li>
              <li>Get a customized digital strategy and assessment for effective digital marketing.</li>
              <li>Reach customers in different areas with our social media app for mobile devices.</li>
              <li>All activities are monitored by higher authorities to ensure compliance with regulations and best practices.</li>
              <li>With a skilled team of professionals, we are capable of meeting all your business requirements, ensuring that your operations run smoothly and efficiently.. </li>
              <li>To ensure optimal performance and reliability, our applications are maintained with high-performance levels.</li>
              <li>Expand your business's reach globally through online marketing with our website and customized web solutions.</li>
              <li>Enhance your marketing efforts with appealing graphics that attract customers.</li>
              <li>Stay ahead of the curve with our knowledge center, providing practical and theoretical knowledge on upcoming trends.</li>
              <li>By utilizing proven digital marketing methodologies and best practices, our content migration strategies deliver optimal results for your business.</li>
            </ul>
          </p>

      </div>

      </div>
    </div>
    <div className='about_content_three'>
      <h2>A word from company owner</h2>
      <div>
        <div className='owner_img'>
        <img src={markimg} alt="" />
        <h4>~ Mark Bordoloi (Global President)</h4>
        </div>
        <p>Ekodus Technologies incorporates creativity and imagination to add tangible value to the business of the customers. Since its inception, Ekodus Technologies has been powered by a single vision: to apply our knowledge and skills to the advantage of customers, to help them increase their competitiveness and profitability.
Our strategy is simple; removing the stress from technology and making it more an asset. We use innovative and new ideas in making the process of web development smooth and fast. We bring a bouquet of cutting edge solutions and expert IT services including web development, Digital Marketing, IT Staffing, IT training, Domain and Hosting, and Wealth Management.

We completely understand your business needs and accordingly build a creative, unique website that makes you stand out from the crowd. We intend to create clear designs and visuals which compel visitors to stay on your page. We work diligently to fulfill your vision of creating a unique brand, identity, and reputation and guarantee 100% satisfaction with the results.</p>
      </div>
    </div>
    <div className='about_content_four'>
      <div className='about_content_four_numbers'>
        <BsEmojiSmileFill size={40} color='#fa6220'/>
        <div>
          <h2>300+</h2>
          <p>Happy Clients</p>
        </div>

      </div>
      <div className='about_content_four_numbers'>
        <MdGroups2  size={40} color='#fa6220'/>
        <div>
          <h2>120+</h2>
          <p>Team Members</p>
        </div>

      </div>
      <div className='about_content_four_numbers'>
        <AiOutlineFieldTime  size={40} color='#fa6220'/>
        <div>
          <h2>9+</h2>
          <p>Years in business</p>
        </div>

      </div>
    </div>

    </div>
  )
}

export default About