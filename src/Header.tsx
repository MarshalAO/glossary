import { useEffect, useState } from 'react'

import './Header.css'
import logo from './logo.png'

export default function Header () {
  const [isDark, setIsDark] = useState(false);

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

      <div id="name">Marshal Glossary</div>
      <div id="spacer" />

      <div id="language">
        <select>
          <option defaultValue="Thai">Thai</option>
        </select>
      </div>

      <div id="theme-switcher">
        <label>
          <input
            type="checkbox"
            checked={isDark}
            onChange={toggleTheme}
          />
          <span className="slider" />
        </label>
      </div>
      
    </div>
  );
}
