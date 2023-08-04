import React,{useState,useEffect} from 'react'
import { BsArrowRight } from 'react-icons/bs'
import "./ServiceDetails.css"
import servicedetailsdummyimg from "../../assets/servicebanner_img.jpg"
import {FaAngleDoubleRight} from "react-icons/fa"
import contactcardimg from "../../assets/testimonial-image1.png"

import { useParams } from 'react-router-dom'
import parse from 'html-react-parser';
import htmlReactParser from 'html-react-parser';
import { Link } from 'react-router-dom'
const ServiceDetails = () => {
    const [services, setServices] = useState([]);
    let {id}= useParams();
   
    useEffect(() => {
        fetch(`https://admin.ekodus.ca/api/service/details?service_id=${id}`)
        .then(response => response.json())
        .then(data=>{
          setServices(data.service_details)
          console.log(data)
    
        })
       
      },[])
    
    
  return (
    <div>
      
      <div className='service_details_header'>
        <h1>{services.title}</h1>
        <div className='service_details_header_loc'>
        <p><Link to={"/services"} style={{textDecoration: "none" ,color:"white"}}>Services</Link></p>
          <BsArrowRight/>
          <p style={{color: "#fa6220"}}>{services.title}</p>

        </div>
      </div>
      <div className='service_details_body'>
        <div className='service_details_body_head'>
            {/* <div className='service_list'>
                <h3>Services</h3>
                <ul>
                    <li>
                        <p>Web Development</p>
                        <FaAngleDoubleRight/>
                    </li>
                    <li>
                        <p>Web Development</p>
                        <FaAngleDoubleRight/>
                    </li>
                    <li>
                        <p>Web Development</p>
                        <FaAngleDoubleRight/>
                    </li>
                    <li>
                        <p>Web Development</p>
                        <FaAngleDoubleRight/>
                    </li>
                    <li>
                        <p>Web Development</p>
                        <FaAngleDoubleRight/>
                    </li>
                    <li>
                        <p>Web Development</p>
                        <FaAngleDoubleRight/>
                    </li>
                    <li>
                        <p>Web Development</p>
                        <FaAngleDoubleRight/>
                    </li>
                    <li>
                        <p>Web Development</p>
                        <FaAngleDoubleRight/>
                    </li>
                    
                </ul>
            </div> */}
            <img src={`https://admin.ekodus.ca/${services.image}`} alt="" />

        </div>
        <div className='service_details_body_container'>
        <div className='service_details_body_content'>
            <div className='contact_card'>
                <h3>Need any help?</h3>
                <img src={contactcardimg} alt="" />
                <div className='contact_no'>
                    <p>+1 647-460-3579</p>
                </div>
                <Link to="/contact" className=' contact_now_btn'>Contact Now</Link>
            </div>
            <div className='service_details_body_content_text'>
                <h2>{services.title}</h2>
                <div>{htmlReactParser(String(services.full_description))}</div>
            </div>
        </div>
        
        </div>
      </div>
      </div>
    
  )
}

export default ServiceDetails