import React, {useState} from 'react'
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import "./Testimonials.css"
import testimage1 from "../../assets/testimonial-centerimage.png"
import testimage2 from "../../assets/testimonial-image1.png"
import testimage3 from "../../assets/testimonial-image2.png"
import testimage4 from "../../assets/testimonial-image3.png"
import testimage5 from "../../assets/testimonial-image4.png"

import testicon from "../../assets/offer-icon1.png" 

import {AiOutlineArrowLeft} from 'react-icons/ai'
import {AiOutlineArrowRight} from 'react-icons/ai'
import {BsChatRightQuoteFill} from "react-icons/bs"
const Testimonials = () => {
  const [activeIndex,setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      fullname: "Peter M - Project Manager",
      review: "Ekodus has been a trusted partner and always willing to help resolve the most complex of issues. The quality of services and in general work done has been very admiring. I would recommend them for your business branding. " 
    },
    {
      id: 2,
      fullname: "Steve R - Small businesses",
      review: "The organization is very professional, talented, and helpful in their work. The team that is responsible for our account goes to great lengths to not only solve problems but also suggest improvements beyond the scope of the task." 
    },
    {
      id: 3,
      fullname: "Robert R - School Owner",
      review: "I am impressed by the quality of services that I received from Ekodus. You were right on schedule, were professional and courteous in dealings, and deliver services well before time. I am looking forward to working with your company for many years to come." 
    },
    {
      id: 4,
      fullname: "John K - Business Owner",
      review: "I wanted to take a moment to thank the whole team of Ekodus Technologies for the services that you have provided. Your team has been a pleasure to work with mere professionalism and dedication. I am satisfied with your cooperation regarding the development of our website and would like to work with you on our future projects."
    }
  ];

  const prevfunction = () =>{
    if(activeIndex!=0){
      setActiveIndex(activeIndex-1)
    }
    else{
      setActiveIndex(testimonials.length-1)
    }

  }
  const nextfunction = () =>{
    if(activeIndex!=testimonials.length-1){
      setActiveIndex(activeIndex+1)
    }
    else{
      setActiveIndex(0)
    }
    
  }

  return (
    <div className='testimonials'>
      <div className='testimonials_left'>
        <img className='testimg1' src={testimage1} alt="" />
        <img className='testimg2' src={testimage2} alt="" />
        <img className='testimg3' src={testimage3} alt="" />
        <img className='testimg4' src={testimage4} alt="" />
        <img className='testimg5' src={testimage5} alt="" />

      </div>
      <div className='testimonials_right'>
        <p>TESTIMONIALS</p>
        <h2><span>WHAT OUR CUSTOMERS</span><span>HAVE TO SAY</span></h2>
        <SwitchTransition component={null}>
          <CSSTransition 
            key={testimonials[activeIndex].id}
            timeout={300}
            classNames={"fade"}
          >
            <div className='testimonial_reviews'>
              <p className='testimonial_review'>{testimonials[activeIndex].review}</p>
              <div className='testimonial_identity'>
                <div className='testicon'>
                  <BsChatRightQuoteFill color='white' size={30}/>
                </div>

                <h3>{testimonials[activeIndex].fullname}</h3>
              </div>
            </div>
          </CSSTransition>
        </SwitchTransition>
          <div className='testimonial_arrowbtns'>
            <button onClick={prevfunction} style={{color:"black"}}>
              <AiOutlineArrowLeft/>
            </button>
            <button onClick={nextfunction} style={{color:"#fa6220"}}>
              <AiOutlineArrowRight/>
            </button>
          </div>

        </div>
      </div>
    
  )
}

export default Testimonials