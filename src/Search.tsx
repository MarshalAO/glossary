
import React from 'react';
import './Search.css';
import * as FaIcons from 'react-icons/fa';


export default function Search () {
  return (
    <div id="search">
      <div id="search-box">
        <input type='text' className='input' placeholder="Type something..." />
        <button className='btn'>
          {React.createElement(FaIcons.FaSearch as React.ElementType)}
        </button>
      </div>
    </div>
  )
}

