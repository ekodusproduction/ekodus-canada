import React from 'react'
import "./Homeoffer.css"
import offericon1 from '../../assets/Home/offer-icon1.png'
import offericon2 from '../../assets/Home/offer-icon2.png'
import offericon3 from '../../assets/Home/offer-icon3.png'
import offerimg1 from "../../assets/Home/offer-image1.jpg"
import offerimg2 from "../../assets/Home/offer-image2.jpg"
import offerimg3 from "../../assets/Home/offer-image3.jpg"
import offertopback from "../../assets/offer-toplayer.png"
import offerbottomback from "../../assets/offer-bottomlayer.png"

import Card from '../../UI/Card'

const Homeoffer = () => {
  return (
    <div className='homeoffer'>
        <img className='offertopback' src={offertopback} alt="" />
        <div className='homeoffer_container'>
        <div className='homeoffer_header'>
            <p className='homeoffer_header_start'>What we offer</p>
            <h2>WHY SHOULD YOU CHOOSE US</h2>
            <p className='homeoffer_header_info'>Power your business towards success with our comprehensive solutions and expert strategies</p>
        </div>
        <div className='homeoffer_cards'>
            <Card offericon={offericon1} img={offerimg1} title="Perfect solutions that business demands"/>
            <Card offericon={offericon2} img={offerimg2} title="Expand your business's reach globally"/>
            <Card offericon={offericon3} img={offerimg3} title="Get a customized digital strategy"/>
        </div>
        </div>
        {/* <img className='offerbottomback' src={offerbottomback} alt="" /> */}
    </div>
  )
}

export default Homeoffer