import React, {useEffect} from 'react';
import './Products.css';
import ProductCard from '../ProductCard/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { STATUS, fetchProducts } from '../../store/productSlice';
import { RotatingLines } from 'react-loader-spinner';

const Products = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchProducts());
  },[])
  const { data, status } = useSelector(state => state.product);
  
  return (
    <div className='product-container'>
      {
        status === STATUS.LOADING ? (
          <RotatingLines
            visible={true}
            height="96"
            width="96"
            color="#fff"
            strokeWidth="5"
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        ) :
        data.map((item)=>{
          return (
            <ProductCard data={item} key={item.id}/>
          )
        })
      }     
    </div>
  )
}

export default Products