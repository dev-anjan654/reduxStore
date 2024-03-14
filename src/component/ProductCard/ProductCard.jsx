import React from 'react';
import './ProductCard.css';
import { useDispatch } from 'react-redux';
import { addCart } from '../../store/cartSlice';

const ProductCard = ({data}) => {
  const dispatch = useDispatch();

  const handleAddCart = (cartData) => {
    dispatch(addCart(cartData));
  }
  
  return (
    <div className="product-card">
      <img src={data?.image} alt="" />
      <h4>{data?.title}</h4>
      <h5>${Math.floor(data?.price)}</h5>
      <button onClick={()=>handleAddCart(data)}><i className="fa-solid fa-cart-plus"></i>Add to Cart</button>
    </div>
  )
}

export default ProductCard