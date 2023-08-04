import React from 'react'
import "./Homeabout.css"
import homeaboutimgmain from "../../assets/about-image1.jpg"
import homeaboutimgsub from "../../assets/about-image2.jpg"
import homeaboutbackcircle from "../../assets/about-rightcircle.png"
import { Link } from 'react-router-dom'

const Homeabout = () => {
  return (
    <div className='homeabout'>
      <img className='homeaboutbackcircle' src={homeaboutbackcircle} alt="" />
      <div className='homeabout_imgcontainer'>
        <div className='textcircle_homeabout'>
          <h3>30+</h3>
          <p>Years of experience</p>
        </div>
        <img className='homeabout_imgmain' src={homeaboutimgmain} alt="" />
        <img className='homeabout_imgsub' src={homeaboutimgsub} alt="" />
      </div>
      <div className='homeabout_right'>
        <div className='homeabout_right_text'>
          <p className='homeabout_right_text_start'>ABOUT US</p>
          <h2>WE HELP CLIENTS INVENT THEIR FUTURE</h2>
          <p className='homeabout_right_text_desc'>At Ekodus, we are a team of innovation and technology enthusiasts dedicated to driving digital transformation. Since our inception, we have been providing cutting-edge digital solutions, designing, and AI solutions for our clients. But our reach extends beyond IT services, as we cater to various business sectors across the globe, with a strong presence in North America and the Asia Pacific regions..</p>
          <Link to='/about'><button className='btn-primary btn-homeabout'>Read More</button></Link>
      </div>

      </div>
    </div>
  )
}

export default Homeabout