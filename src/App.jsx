import './App.css'
import {BrowserRouter, Routes, Route, useLocation} from "react-router-dom"

import Navbar from './components/Navbar/Navbar.jsx'
import Home from "./components/Home/index.jsx"
import About from './components/About/index.jsx'
import Footer from './components/Footer/index.jsx'
import Layout from './UI/Layout'
import Services from "./components/Services/index.jsx"
import Career from './components/Career/Career'
import Products from './components/Products/Products'
import ProductDetails from './components/Products/ProductDetails'
import ServiceDetails from './components/Services/ServiceDetails'
import CareerDetails from './components/Career/CareerDetails'
import BlogDetails from './components/Blogs/BlogDetails'

import Contact from './components/Contact/Contact'
import { useEffect } from 'react'
import BlogsPage from './components/Blogs/BlogsPage'


function App() {
  const { pathname } = useLocation();
  useEffect(()=>{
    window.scrollTo(0,0)
  },[pathname])

  

  return (
    <div className='App'>
    
    
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
            <Route path="/career" element={<Career />} />
            <Route path="/productdetails/:id" element={<ProductDetails />} />
            <Route path="/servicedetails/:id" element={<ServiceDetails />} />
            <Route path="/careerdetails/:id" element={<CareerDetails />} />
            <Route path="/blogdetails/:id" element={<BlogDetails />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blogspage" element={<BlogsPage />} />
           
          </Route>
        </Routes>
        

       
      

  
    </div>
  )
}

export default App
