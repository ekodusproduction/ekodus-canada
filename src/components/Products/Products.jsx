import React,{useEffect,useState} from 'react'
import "./Products.css"
import { BsArrowRight } from 'react-icons/bs'
import productdummyimg from "../../assets/blog-image3.jpg"
import { Link } from 'react-router-dom'
import htmlReactParser from 'html-react-parser';

const Products = () => {

  const [products,setProducts] = useState([]);
  
  useEffect(() => {
    fetch("https://admin.ekodus.ca/api/products/get")
    .then(response => response.json())
    .then(data=>{
      setProducts(data.products)
      console.log(data)

    })

      
   
  },[])
  return (
    <div className='products'>
        <div className='products_page_header_container'>
      <div className='products_page_header'>
        <h1>OUR PRODUCTS</h1>
        <div className='products_header_loc'>
        <p><Link to={"/"} style={{textDecoration: "none" ,color:"white"}}>Home</Link></p>
          <BsArrowRight/>
          <p style={{color: "#fa6220"}}>Products</p>

        </div>
      </div>
      </div>
      <div className='products_content_container'>
        <h2>Our Products</h2>
      <div className='products_content'>
       
       {products.map((product)=>(
         
          <div className='products_card'>
           
          <img src={`https://admin.ekodus.ca/${product.image}`} alt="" />
          <div className='product_card_text'>
          <h2>{product.title}</h2>
          <p>{htmlReactParser(String(product.short_description))}</p>
          <Link to={`/productdetails/${product.id}`}  params={{"id": product.id}}>Know more</Link>
          </div>
        </div>

       ))}
        {/* <div className='products_card'>
          <img src={productdummyimg} alt="" />
          <div className='product_card_text'>
          <h2>KoduCRM</h2>
          <p>Our KoduCRM will help you focus on your organization’s relationships with individual</p>
          <Link to='/productservicedetails'>Know more</Link>
          </div>
        </div>
        <div className='products_card'>
          <img src={productdummyimg} alt="" />
          <div className='product_card_text'>
          <h2>YMOC.com</h2>
          <p>Your Meal on Call, abbreviated as YMOC.com, is a food delivery app founded by Mark Bordoloi (President, Ekodus) in the year 2018.</p>
          <Link to="/productservicedetails">Know more</Link>
          </div>
        </div>
        <div className='products_card'>
          <img src={productdummyimg} alt="" />
          <div className='product_card_text'>
          <h2>BiryaniOnCloud.com</h2>
          <p>As the name suggests “Biryani” is a special dish widely available in Indian subcontinent and South Asian Countries.</p>
          <Link to="/productservicedetails">Know more</Link>
          </div>
        </div> */}
      </div>
      </div>
    </div>
  )
}

export default Products