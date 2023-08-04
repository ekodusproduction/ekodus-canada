import React from 'react'
import "./ProjectCard.css"
import {BsFillArrowRightCircleFill} from 'react-icons/bs'
import projectimg1 from  "../assets/case-image4.jpg"

const ProjectCard = ({img,title,desc}) => {
  return (
    <div>
        <div className='project_card'>
          <img className='project_img' src={img} alt="" />
          <div className='project_card_overlay'></div>
          <div className='project_card_content'>
              <div className='project_card_text'>
                  <p className='project_card_starttext'>Development</p>
                  <div>
                    <h3>{title}</h3>
                    <p>{desc}</p>
                  </div>
              </div>
              {/* <button>
              <BsFillArrowRightCircleFill size={"45"} className='arrowbtn'  />
              </button> */}
            </div>
         </div>
    </div>
  )
}

export default ProjectCard