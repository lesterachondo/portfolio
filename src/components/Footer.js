import React from 'react'
import reactLogo from '../images/icons/react-logo.png'
import tailwindLogo from '../images/icons/tailwind-logo.png'

const Footer = () => {
  return (
    <>
        <div className='w-full h-24 content-end'>
            <div className='flex flex-row justify-center'>
                <span className='content-center px-2 text-xs 2xl:text-sm'>This page is powered by:</span>
                <img src={reactLogo} className='w-6 2xl:w-8 2xl:mx-2'/>
                <img src={tailwindLogo} className='w-6 2xl:w-8 2xl:mx-2'/>
            </div>    
        </div>    
    </>
  )
}

export default Footer