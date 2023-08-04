import React,{useState,useEffect} from 'react'


import "./Services.css"

import { BsArrowRight } from 'react-icons/bs'

import { Link } from 'react-router-dom'
import { AiFillCheckCircle } from 'react-icons/ai'

import parse from 'html-react-parser';

const index = () => {
  const [services,setServices] = useState([]);
  
  useEffect(() => {
    fetch("https://admin.ekodus.ca/api/service/get")
    .then(response => response.json())
    .then(data=>{
      setServices(data.services)
      console.log(data)

    })
  },[])
  return (
    <div className='services_page'>
      <div className='service_page_header_container'>
      <div className='service_page_header'>
        <h1>OUR SERVICES</h1>
        <div className='service_header_loc'>
        <p><Link to={"/"} style={{textDecoration: "none" ,color:"white"}}>Home</Link></p>
          <BsArrowRight/>
          <p style={{color: "#fa6220"}}>Services</p>

        </div>
      </div>
      
      </div>
      <div className='service_content'>
        <h2><span>For your very specific industry,</span> 
            <span>we have highly-tailored IT solutions.</span> </h2>
        <div className='services_container'>
        
       {services.map((service)=>(
        <div className='service'>
            
        <AiFillCheckCircle color='#fa6220' className='service_icon' size={35}/>

      <div className='service_text'>
      <h3>{service.title}</h3>
      <span>{parse(service.short_description)}</span>
      <Link to={`/servicedetails/${service.id}`} params={{"id": service.id}} style={{color:"#fa6220"}}>Discover Now</Link>
      </div>
    </div>
        
       ))}

        </div>
      </div>
      <div className='service_prefooter'>
        <h3>Hurry up and contact us today</h3>
        <h2>Free First Consultation</h2>
        <Link to={"/contact"}><button className='btn-primary'>Book your consultation</button></Link>
      </div>
     
    </div>

  )
}

export default index