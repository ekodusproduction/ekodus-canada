import React from 'react'
import "./Contact.css"
import {BsArrowRight} from 'react-icons/bs'
import {GoLocation} from "react-icons/go"
import {AiOutlineMail} from "react-icons/ai"
import {BsFillTelephoneFill} from "react-icons/bs"
import Swal from 'sweetalert2'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Contact = () => {
  const submitHandler = (e) =>{
    e.preventDefault();
    document.getElementById('submitbtn').disabled=true;
    document.getElementById('submitbtn').innerHTML="Please Wait.."
    axios.defaults.headers.post['Content-Type'] = 'application/json';
    axios.post('https://formsubmit.co/ajax/info@ekodus.com', {
    name: document.getElementById('fullname').value,
    email: document.getElementById('emailid').value,
    message: document.getElementById('messageid').value
})
    .then(response => {
      
      Swal.fire({
        title: 'Success!',
        text: 'Thank you for reaching out to us',
        icon: 'success',
        confirmButtonText: 'Okay'

      })
      document.getElementById('submitbtn').disabled=false;
      document.getElementById('submitbtn').innerHTML="SEND NOW"
      document.getElementById('fullname').value="",
      document.getElementById('emailid').value="",
      document.getElementById('messageid').value=""
    })
    .catch(error => {
      Swal.fire({
        title: 'Error!',
        text: 'Something went wrong',
        icon: 'error',
        confirmButtonText: 'Okay'

      })
      document.getElementById('submitbtn').disabled=false;
      document.getElementById('submitbtn').innerHTML="SEND NOW"
      document.getElementById('fullname').value="",
      document.getElementById('emailid').value="",
      document.getElementById('messageid').value="" 
     });
  }
  return (
    <div className='contact_page'>
        <div className='contact_page_header_container'>
      <div className='contact_page_header'>
        <h1>CONTACT US</h1>
        <div className='contact_header_loc'>
        <p><Link to={"/"} style={{textDecoration: "none" ,color:"white"}}>Home</Link></p>
          <BsArrowRight/>
          <p style={{color: "#fa6220"}}>Contact</p>

        </div>
      </div>
      </div>
      <div className='contact_page_body'>
        <div className='contact_page_location'>
            <div className='contact_page_location_header'>
                <p>CONTACT INFO</p>
                <h2>GET IN TOUCH</h2>
            </div>
            <div className='contact_addresses'>
                <div className='contact_address'>
                    <GoLocation size={45} color='#fa6220'/>
                    <div className='contact_address_info'>
                        <h3>Canada Satellite Office:</h3>
                        <p>Ekodus Technologies Canada, Inc. 60 Atlantic Avenue, Suite 200 Toronto, ON M6K 1X9</p>
                    </div>
                </div>
                <div className='contact_address'>
                    <AiOutlineMail size={45} color='#fa6220'/>
                    <div className='contact_address_info'>
                        <h3>Email</h3>
                        <p>info@ekodus.com</p>
                    </div>
                </div>
                <div className='contact_address'>
                    <BsFillTelephoneFill size={45} color='#fa6220'/>
                    <div className='contact_address_info'>
                        <h3>Phone</h3>
                        <p>+1 647-460-3579</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='contact_page_form'>
          <p>WRITE TO US</p>
          <h2>SEND US A MESSAGE</h2>
          <form onSubmit={submitHandler} >
            <input type="text" placeholder='Your Name: ' name='name' required id='fullname' />
            <input type="email" placeholder='Your Email: ' name='email' required id='emailid' />
            <textarea placeholder='Message' name="message" rows="12" cols="60" required id='messageid'/>
            {/* <input type="hidden" name="_next" value={ Swal.fire({
            title: 'Success!',
            text: 'You application was submitted',
            icon: 'success',
            confirmButtonText: 'Okay'

          })}></input> */}
          <input type="hidden" name="_captcha" value="false"></input>
          <input type="hidden" name=""></input>
          <button type='submit' id='submitbtn'>SEND NOW</button>

          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact