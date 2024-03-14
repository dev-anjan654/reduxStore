import React, { useState, useEffect } from 'react';
import './Header.css';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import Cart from '../../page/Cart/Cart';
import SearchPage from '../../page/SearchPage/SearchPage';

const Header = () => {
  const cartData = useSelector(state => state.cart);
  const navigate = useNavigate();

  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [show, setShow] = useState("sticky");
  const [showCart, setShowCart] = useState(false);
  const [showSearchPage, setShowSearchPage] = useState(false);
  const [search, setSearch] = useState("");

  const mobileSearchHandler = () => {
      if(showSearch === false){
          setShowSearch(true);
      }
      else{
          setShowSearch(false);
      }
  }
  const controlHeader = () => {
    if(window.scrollY > 50){
        setShow("sticky solid");
    }
    else{
        setShow("sticky");
    }
  }
  useEffect(()=>{
    window.addEventListener("scroll", controlHeader)
    return () => {
      window.removeEventListener("scroll", controlHeader)
    }
  },[]);

  const searchHandler = (e) => {
    if(e.key === "Enter"){
      if(search === ""){
        null
      }
      else{
        setShowSearchPage(true);
        setShowSearch(false);
      }
    }
  }

  return (
    <header className={show}>
      <i className="fa-solid fa-bars" onClick={()=>setShowMobileMenu(true)}></i>
        <div className="web-logo" onClick={()=>navigate("/")}>
            <strong>Redux Store</strong>
        </div>
        <nav className={showMobileMenu === true ? "active" : ""}>
            <i className='fa-solid fa-xmark' onClick={()=>setShowMobileMenu(false)}></i>
            <ul>
                <li className='active' onClick={()=>navigate("/")}>Home</li>
                <li onClick={()=>{navigate("/products"); setShowMobileMenu(false)}}>Products</li>
                <li>Contact</li>
                <li>About Us</li>
            </ul>
        </nav>
        <div className="mobile-search" onClick={mobileSearchHandler}>
          <i className='fa-solid fa-magnifying-glass'></i>
        </div>
        <div className={`mobile-search-field ${showSearch ? "active" : ""}`}>
            <input type="text" 
              placeholder='Search Product Here...'
              onKeyDown={searchHandler}
              value={search}
              onChange={(e)=>setSearch(e.target.value)}
            />
        </div>
        <div className="search-bar">
            <input type="text" 
              placeholder='Search'
              onKeyDown={searchHandler}
              value={search}
              onChange={(e)=>setSearch(e.target.value)}
            />
            <i className='fa-solid fa-magnifying-glass'></i>
        </div>
        <div className="cart">
            <i className='fa-solid fa-cart-shopping' onClick={()=>setShowCart(true)}></i>
            <span>{cartData.length}</span>
        </div>
        <Cart showCart={showCart} setShowCart={setShowCart}/>
        <SearchPage 
          setShowSearchPage={setShowSearchPage}
          showSearchPage={showSearchPage}
          search={search}
        />
    </header>
  )
}

export default Header