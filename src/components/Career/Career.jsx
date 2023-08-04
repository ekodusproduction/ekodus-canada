import React,{useState,useEffect} from 'react'
import "./Career.css"
import { BsArrowRight } from 'react-icons/bs'
import {AiOutlineConsoleSql, AiOutlineProject} from 'react-icons/ai'
import {BsGraphUp} from 'react-icons/bs'
import {BsFillPeopleFill} from 'react-icons/bs'
import {FaBalanceScale} from 'react-icons/fa'
import {MdDeveloperMode} from 'react-icons/md'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import {Link} from "react-router-dom"

import htmlReactParser from 'html-react-parser';
const Career = () => {
  const [openings, setOpenings]= useState([]);
  useEffect(() => {
    fetch("https://admin.ekodus.ca/api/career/get")
    .then(response => response.json())
    .then(data=>{
      setOpenings(data.careers)

    })

    
    
  },[])

  return (
    <div>
    <div className='career_page_header_container'>
      <div className='career_page_header'>
        <h1>CAREER</h1>
        <div className='career_header_loc'>
        <p><Link to={"/"} style={{textDecoration: "none" ,color:"white"}}>Home</Link></p>
          <BsArrowRight/>
          <p style={{color: "#fa6220"}}>Career</p>

        </div>
      </div>
      </div>
     
        <div className='career_content_intro'>
          <h2>Why should you join us?</h2>
          <p>Welcome to Ekodus Technology, where innovation and excellence converge! If you're seeking an exciting and rewarding career in the technology industry, you've landed at the right place. At Ekodus, we are a leading technology company dedicated to delivering state-of-the-art solutions to clients across various industries.</p>

          <a href={"#career_opening_id"}><button className='btn-primary'>Check for Openings</button></a>
          
        </div>
      
      <div className='career_content_intro_cards'>
      
            <div className='career_content_intro_card'>
              <div>
                <AiOutlineProject size={"35"} color={'#fa6220'}/>
                <h3>Inspiring and Stimulating Projects</h3>
              </div>
              <p>At Ekodus, we offer inspiring and stimulating projects that push technological boundaries, providing you the opportunity to leverage the latest tools and frameworks to solve intricate problems.</p>

            </div>
            <div className='career_content_intro_card'>
              <div>
                <BsGraphUp size={"35"} color={'#fa6220'}/>
                <h3>Professional Growth and Development</h3>
              </div>
              <p>Ekodus invests in the professional growth and development of its employees. We offer comprehensive training programs, mentorship opportunities, and access to industry conferences and events.</p>

            </div>
            <div className='career_content_intro_card'>
              <div>
                <BsFillPeopleFill size={"35"} color={'#fa6220'}/>
                <h3>Collaborative and Supportive Environment</h3>
              </div>
              <p>Join our team for a culture of collaboration, teamwork, and open communication. Learn from experienced professionals, work with industry experts, and contribute to an inclusive atmosphere.</p>

            </div>
            <div className='career_content_intro_card'>
              <div>
                <FaBalanceScale size={"35"} color={'#fa6220'}/>
                <h3>Work-Life Balance</h3>
              </div>
              <p>At Ekodus, we understand the importance of a balanced life. Our flexible work environment, remote options, and well-being initiatives support your personal and professional growth. Thrive in both your career and personal life with us.</p>

            </div>
            <div className='career_content_intro_card'>
              <div>
                <MdDeveloperMode size={"35"} color={'#fa6220'}/>
                <h3>Cutting-Edge Technologies</h3>
              </div>
              <p>Join Ekodus, a tech-driven company embracing the latest advancements. Gain hands-on experience with emerging technologies and stay ahead in your field.</p>

            </div>
            <div className='career_content_intro_card'>
              <div>
                <AiOutlineFundProjectionScreen size={"35"} color={'#fa6220'}/>
                <h3>Impactful Projects</h3>
              </div>
              <p>Make a difference at Ekodus. Contribute to projects that drive growth and improve lives, creating a positive impact on society.</p>

            </div>
          </div>
          <div className='career_openings' id='career_opening_id'>
            <h2>Openings at Ekodus Technologies</h2>
            
            <div className='job_cards'>
              {openings.length ? openings.map(opening=>(
                <div className='job_card'>
                <div className='job_card_header'>
                <p>{opening.job_location}</p>
                <div>
                <p>{opening.job_experience} years</p>
                  <p>{opening.job_shift}</p>
                </div>
                </div>
                <h3>{opening.job_title}</h3>
                <div className='current_job_info'>
                  <p className='job_desc'>{htmlReactParser(opening.job_description)}</p>
                </div>
                <Link to= {`/careerdetails/${opening.id}`}  params={{"id": opening.id}} className='btn_link'>Apply</Link>
              </div>
              )) : <p className='noopeningsmsg' style={{textAlign:"center"}}>No openings as of now! Check back later</p> }
             
              

             
            </div>
          </div>
    </div>
  )
}

export default Career