import React from 'react'
import "./Card.css"
import offericon1 from '../assets/offer-icon1.png'
import image1 from "../assets/offer-image1.jpg"
import { Link } from 'react-router-dom'

const Card = ({offericon,img,title,to,id}) => {
  return (
    <div className='homeoffer_card'>
        <div className='homeoffer_card_imagesection'>
          <img src={img} alt="" />
          
        </div>
        <div className='offericon'>
            <img className='offericonimg'  src={offericon} alt="" />
        </div>
        <div className='homeoffer_card_textsection'>
           <Link to={to} style={{textDecoration: 'none'}} params={{id: id}}><h2>{title}</h2></Link> 
        </div>
     </div>
  )
}

export default Card