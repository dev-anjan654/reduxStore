import React from 'react';
import './Home.css';
import Products from '../../component/Products/Products';
import bannerImg from '../../assets/model_photo.png';
import { useNavigate } from 'react-router';

const Home = () => {
  const navigate = useNavigate();
  
  return (
    <div className='home-section'>
      <div className="banner-text">
        <h1>SALE</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas nesciunt sunt deleniti, dignissimos asperiores reiciendis laboriosam eos earum tenetur unde!</p>
        <div className="banner-buttons">
          <button className='product-btn' onClick={()=>navigate("/products")}>VIEW PRODUCTS</button>
          <button className='readmore-btn'>READ MORE</button>
        </div>
      </div>
      <div className="banner-image">
        <img src={bannerImg} alt="Banner Model"/> 
      </div>   
    </div>
  )
}

export default Home