import React from 'react'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'
import servicecardimg1 from "../../assets/Home/digital marketing.png"
import servicecardimg2 from "../../assets/Home/Data.png"
import servicecardimg3 from "../../assets/Home/service-producticon.png"
import servicecardimg4 from "../../assets/Home/UIUX.png"

import backlayer1 from "../../assets/service-leftlayer.png"
import backlayer2 from "../../assets/service-rightcircle.png"

import "./HomeServices.css"
import ServiceCard from '../../UI/ServiceCard'
import { Link } from 'react-router-dom'


const Services = () => {
    const servicelist = [
        {
            title: "Website Development",
            desc: "Creating dynamic, responsive websites tailored to meet businesses' unique online requirements for success."
        },
        {
            title: "Digital Marketing",
            desc: "- Utilizing digital technologies and channels to effectively promote products, services, or brands and engage potential customers.  "
        },
        {
            title: "IT Training",
            desc: "Offering comprehensive programs for acquiring technical skills and staying updated with the latest technologies. "
        },
        {
            title: "Staff Augmentation",
            desc: "Supplying skilled professionals to support businesses in achieving objectives and timely project completion. "
        }
    ]
  return (
    <div className='services'>
        <img className='backlayer_one' src={backlayer1} alt="" />
        <div className='service_cards'>
    
            <ServiceCard title={servicelist[0].title} desc={servicelist[0].desc} img={servicecardimg4}/>
            <div className='service_card_right'>
                <ServiceCard title={servicelist[1].title} desc={servicelist[1].desc} img={servicecardimg1} />

            </div>
            <ServiceCard title={servicelist[2].title} desc={servicelist[2].desc} img={servicecardimg3}/>
            <div className='service_card_right'>
                <ServiceCard title={servicelist[3].title} desc={servicelist[3].desc} img={servicecardimg2}/>

            </div>
        </div>
        <div className='service_info'>
            <img className='backlayer_two' src={backlayer2} alt="" />
            <div className='services_info_header'>
                <p>Our Services</p>
                <h2>BEST IT SOLUTION <br /> FOR YOUR BUSINESS</h2>
            </div>
            <div className='services_info_body'>
                <p>Empower your business with Ekodus Services—a leading-edge company providing website development, software solutions, digital marketing, IT training, staff augmentation, Salesforce implementation, UI/UX designing, and data analytics.</p>
                <ul>
                    <li>Website Development
                    </li>
                    <li>Software Development 
                    </li>
                    <li>Digital Marketing 
                    </li>
                    <li>IT Training 
                    </li>
                    <li>Sales force 
                    </li>
                    <li>Staff Augmentation 
                    </li>
                    <li>UI/UX Designing 
                    </li>
                    <li>Data Analysis 
                    </li>
                </ul>
            </div>
           <Link to='/services'><button className='btn-primary'>Get Started</button></Link> 
        </div>
    </div>
  )
}

export default Services