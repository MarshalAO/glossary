
import { useState } from 'react';

import './Header.css'
import logo from './logo.png'

export default function Header () {

  const [colorMode, setColorMode] = useState('Light');

  function toggleColorMode () {
    if (colorMode === 'Light') {
      setColorMode('Dark');
    } else {
      setColorMode('Light');
    }
  }

  return (
    <div id="header">
      <div id="logo">
        <img src={logo} alt="Marshal Logo"></img>
      </div>
      <div id="name">Marshal Glossary</div>
      <div id="spacer"/>
      <div id="language">
        <select>
          <option selected>Thai</option>
        </select>
      </div>
      <div id="color-mode">
        <button onClick={toggleColorMode}>{colorMode} Mode</button>
      </div>
    </div>
  )
}
