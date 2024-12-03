import React from 'react'
import logo from '../logo-transparent.png'

const Header = () => {
  const list = ['Home','About','Skills','Portfolio','Contact']
  return (
    <div className='Navigation'>
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
          {list.map((item,key) => <li className={(key == 0) ? 'active' : ''}><p>{item}</p></li>)}
        </ul>
    </div>
  )
}

export default Header