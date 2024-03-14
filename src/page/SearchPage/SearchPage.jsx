import React from 'react';
import './SearchPage.css';

const SearchPage = ({ setShowSearchPage, showSearchPage, search }) => {
  return (
    <div className={`SearchPage ${showSearchPage ? "active" : ""}`}>
        <h4>{`Search result for "${search}"`}</h4>
        <i className='fa-solid fa-xmark' onClick={()=>setShowSearchPage(false)}></i>
    </div>
  )
}

export default SearchPage