import React, { useEffect } from 'react';
import './Cart.css';
import { useDispatch, useSelector } from 'react-redux';
import { cartQuantityDecrease, cartQuantityIncrease, removeCartItem } from '../../store/cartSlice';
import emptyCartImg from '../../assets/empty-cart.png';

const Cart = ({ showCart, setShowCart }) => {
  const cartData = useSelector(state => state.cart);
  const dispatch = useDispatch();
  
  const handleRemove = (productId) => {
    dispatch(removeCartItem(productId));
  }

  const decreaseQntHandler = (productId) => {
    dispatch(cartQuantityDecrease(productId));
  }
  const increaseQntHandler = (productId) => {
    dispatch(cartQuantityIncrease(productId));
  }
  return (
    <div className={`cart-layout ${showCart === true ? "active" : ""}`}>
      <div className="cart-slide">
        <div className="cart-head">
          <h4 className='cart-heading'>Cart</h4>
          <i className='fa-solid fa-xmark' onClick={() => setShowCart(false)}></i>
        </div>
        <div className="cartItems-container">
          {
            cartData.length === 0 ? (
              <div className='emptyCart-layout'>
                <img src={emptyCartImg}/>
              </div>
            ) :
            cartData.map(item => {
              return(
                <div className="cartItem" key={item.id}>
                  <img src={item.image} alt="" />
                  <div className="item-info">
                    <h4 className='item-title'>{item.title}</h4>
                    <p className='item-price'>${Math.floor(item.price)}</p>
                  </div>
                  <div className="cartItem-buttons">
                    <div className="increase-decrease-btns">
                      <button onClick={()=>decreaseQntHandler(item.id)}>-</button>
                      <input type="text" readOnly value={item.quantity}/>
                      <button onClick={()=>increaseQntHandler(item.id)}>+</button>
                    </div>
                    <i className='fa-solid fa-trash' onClick={()=>handleRemove(item.id)}></i>
                  </div>                  
                </div>
              )
            })
          }
        </div>
        <div className="cart-footer">
          <h4>Total Amount: <span>$
            {
              Math.floor(
                cartData.map(item => {
                  return item.price * item.quantity
                }).reduce((total, value) => total + value, 0)
              )
            }
          </span></h4>
          <button style={cartData.length > 0 ? {background: "coral"} : {background: "gray"}}>Place Order</button>
        </div>
      </div>
    </div>
  )
}

export default Cart