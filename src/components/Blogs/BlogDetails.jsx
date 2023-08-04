import React,{useEffect,useState} from 'react'
import {BsArrowRight} from "react-icons/bs"
import {BiArrowBack} from "react-icons/bi"
import blogimg from "../../assets/blog_image.jpg"
import "./BlogDetails.css"
import Blogs from "../Blogs/Blogs"
import { useParams } from 'react-router-dom'
import htmlReactParser from 'html-react-parser';
import { Link } from 'react-router-dom'



const BlogDetails = ({title}) => {
  const [blogs, setBlogs] = useState([]);
  let {id}= useParams();


  useEffect(() => {
    fetch(`https://admin.ekodus.ca/api/blogs/details?blog_id=${id}`)
    .then(response => response.json())
    .then(data=>{
      setBlogs(data.blog_details)

    })
   
  },[])




 
  return (

    <div>
         <div className='career_page_header_container'>
      <div className='career_page_header'>
        <h1>Blogs</h1>
        <div className='career_header_loc'>
        <p><Link to={"/blogspage"} style={{textDecoration: "none" ,color:"white"}}>Blogs</Link></p>
          <BsArrowRight/>
          <p style={{color: "#fa6220"}}>Blog</p>

        </div>
      </div>
      </div>
     
          <div className='blog_page_body'>
            <div className='blog_page_content'>
              <div className='blog_page_content_left'>
                  <div style={{marginBlock: "1rem"}}> <BiArrowBack/><Link to={"/blogspage"}> Go back</Link></div>
                  <img src={`https://admin.ekodus.ca/${blogs.image}`} alt="" />
              </div>
              <div className='blog_page_content_right'>
                  {/* <div className='blog_nav'>
                      <ul>
                          <li>Revolutionizing Lives</li>
                          <li>Revolutionizing Lives</li>
                          <li>Revolutionizing Lives</li>
                          <li>Revolutionizing Lives</li>
                          <li>Revolutionizing Lives</li>
                          <li>Revolutionizing Lives</li>
                      </ul>
                      
                  </div> */}
              </div>
            </div>
            <div className='blog_main_content'>
                  <h3>{blogs.title}</h3>
                  <div>{htmlReactParser(String(blogs.content))}</div>
              </div>
          </div>
       
    </div>
  )
}

export default BlogDetails