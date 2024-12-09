import React from 'react'
import '../css/Navbar.css';
import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo-transparent.png'
import navigationToggle from '../images/icons/nav-toggle.png'

const Navbar = ({list,activeKey}) => {
  const active = list[activeKey];
  const [toggle,setToggle] = useState(false);
  return (
    <div className='Navigation'>
        {/* Navigation-inline */}
        <img src={logo} className="App-logo" alt="logo" />
        <ul className='Navigation-inline'>
          {list.map((item,key) => <li key={key} >
            <Link className={(item == active) ? 'active' : 'inactive'} to={(key == 0) ? '/' : '/'+item}>
              <p>
                {item.replace(/\b[a-z]/g, (letter) => {
                  return letter.toUpperCase();
                })}
              </p>
            </Link>
          </li>)}
        </ul>
        {/* Navigation-toggle */}
        <img src={navigationToggle} className='Navigation-toggle' onClick={()=>{setToggle(!toggle)}} />
        <ul className={(!toggle) ? 'Navigation-toggle-hidden':'Navigation-toggle-list'} >
          {list.map((item,key) => <li key={key} >
            <Link className={(item == active) ? 'active' : 'inactive'} to={(key == 0) ? '/' : '/'+item}>
              <p>
                {item.replace(/\b[a-z]/g, (letter) => {
                  return letter.toUpperCase();
                })}
              </p>
            </Link>
          </li>)}
        </ul>
    </div>
  )
}

export default Navbar