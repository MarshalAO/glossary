import { useEffect, useState } from 'react';
// import { useState } from 'react';
// import { useEffect } from 'react';

import './Header.css'
import logo from './logo.png'


export default function Header () {
  const [isDark, setIsDark] = useState(false);

  // const [colorMode, setColorMode] = useState('Light');

  // function toggleColorMode () {
  //   if (colorMode === 'Light') {
  //     setColorMode('Dark');
  //   } else {
  //     setColorMode('Light');
  //   }
  // }

  
//   const toggleTheme = () => {
//   const body = document.body;
//   body.classList.toggle('dark-theme');
// };
// โหลดธีมจาก localStorage เมื่อ component โหลด
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      setIsDark(true);
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    setIsDark(!isDark);
  };

  return (
    <div id="header">
      <div id="logo">
        <img src={logo} alt="Marshal Logo" />
      </div>

      <div id="name">Marshal Updated Glossary</div>
      <div id="spacer" />

      <div className="container">
        <label className="theme-switch">
          <input
            type="checkbox"
            checked={isDark}
            onChange={toggleTheme}
          />
          <span className="slider" />
        </label>
      </div>

      <div id="language">
        <select>
          <option defaultValue="Thai">Thai</option>
        </select>
      </div>
      
    </div>
  );
}

      /* <div id="color-mode">
        <button onClick={toggleColorMode}>{colorMode} Mode</button>
      </div> */
  
