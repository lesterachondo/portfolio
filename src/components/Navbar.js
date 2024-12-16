import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo-transparent.png'
import navigationToggle from '../images/icons/nav-toggle.png'

const Navbar = ({list,activeKey}) => {
  const active = list[activeKey];
  const [toggle,setToggle] = useState(false);
  return (
    <div className='flex px-4 py-4'>
        {/* navigation-inline */}
        <img 
          src={logo} 
          className="flex-none h-10 sm:h-12 md:h-14 lg:h-24 pointer-events-none" 
          alt="logo" 
        />
        <div className='flex-1'>
          <ul className='m-0 p-1.5 list-none float-right hidden lg:block'>
            {list.map((item,key) => <li key={key} className='px-4 py-7 float-left cursor-pointer no-underline'>
              <Link className={(item == active) ? 'text-active' : 'text-white hover:text-active'} to={(key == 0) ? '/' : '/'+item}>
                <p className='font-semibold'>
                  {item.replace(/\b[a-z]/g, (letter) => {
                    return letter.toUpperCase();
                  })}
                </p>
              </Link>
            </li>)}
          </ul>
          {/* navigation-toggle */}
          <img 
            src={navigationToggle} 
            className='h-10 mx-2.5 float-right block lg:hidden border-2 border-solid border-active rounded-lg' 
            onClick={()=>{setToggle(!toggle)}} 
          />
        </div>
        <ul className={(!toggle) ? 'hidden':'block lg:hidden absolute left-1/4 md:left-1/2 ml-16'} >
          {list.map((item,key) => <li key={key} className='pl-5 pr-12 md:pr-20 py-2 bg-active cursor-pointer no-underline text-left'>
            <Link className={(item == active) ? 'text-white' : 'text-black'} to={(key == 0) ? '/' : '/'+item}>
              <p className='font-semibold'>
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