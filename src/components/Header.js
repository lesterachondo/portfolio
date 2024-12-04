import React from 'react'
import { useState } from 'react'
import logo from '../images/logo-transparent.png'
import navToggle from '../images/icons/nav-toggle.png'

const Header = ({list}) => {
  const [active,setActive] = useState(list[0]);
  const [toggle,setToggle] = useState(false);
  return (
    <div className='Navigation'>
        <img src={logo} className="App-logo" alt="logo" />
        <ul className='Navigation-inline'>
          {list.map((item) => <li className={(item == active) ? 'active' : ''} onClick={()=>{setActive(item)}}><p>{item}</p></li>)}
        </ul>
        {/* "Navigation-toggle" */}
        <img src={navToggle} className='Navigation-toggle' onClick={()=>{setToggle(!toggle)}} />
        <ul className={(!toggle) ? 'Navigation-toggle-hidden':'Navigation-toggle-list'} >
          {list.map((item) => <li className={(item == active) ? 'toggleActive' : ''} onClick={()=>{setActive(item)}}><p>{item}</p></li>)}
        </ul>
    </div>
  )
}

export default Header