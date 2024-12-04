import React from 'react'
import logo from '../images/logo-transparent.png'
import navToggle from '../images/icons/nav-toggle.png'

const Header = () => {
  const list = ['Home','About','Skills','Portfolio','Contact']
  return (
    <div className='Navigation'>
        <img src={logo} className="App-logo" alt="logo" />
        <ul className='Navigation-inline'>
          {list.map((item,key) => <li className={(key == 0) ? 'active' : ''}><p>{item}</p></li>)}
        </ul>
        <img src={navToggle} className="Navigation-toggle" />
        <ul className='Navigation-hidden'>
          {list.map((item,key) => <li className={(key == 0) ? 'active' : ''}><p>{item}</p></li>)}
        </ul>
    </div>
  )
}

export default Header