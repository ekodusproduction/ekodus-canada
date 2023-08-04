import React from 'react'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'

import "./ServiceCard.css"
import {Link} from "react-router-dom"

const ServiceCard = ({title,desc,img}) => {
  return (
    <div className='service_card'>
        <div className='service_card_img'>
            <img src={img} alt="" />
        </div>
        <div className='service_card_info'>
            <h2>{title} </h2>
            <p>{desc}</p>
        </div>
        <button>
          <Link to='/services'>
            <BsFillArrowRightCircleFill size={"45"} className='arrowbtn'  />
            </Link> 
        </button>

    </div>
  )
}

export default ServiceCard