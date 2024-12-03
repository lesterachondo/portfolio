import React from 'react'
import logo from '../logo_transparent.png'

const Header = () => {
  return (
    <div className='Navigation'>
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
            <li><p>Home</p></li>
            <li><p>About</p></li>
            <li><p>Skill</p></li>
            <li><p>Portfolio</p></li>
            <li><p>Contact</p></li>
        </ul>
    </div>
  )
}

export default Header