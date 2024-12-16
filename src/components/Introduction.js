import React from 'react'
import fb from '../images/icons/fb-logo.png'
import linkedIn from '../images/icons/linkedin-logo.png'
import homeImg from '../images/home-img.png'


const Introduction = () => {
  const detailsStyle = {
    backgroundImage: `url(${homeImg})`,
  }
  const detailsData = {
    hello : "Hello, It's Me",
    name : "Lester Achondo",
    and : "And I'm a",
    designation : "Web Developer",
    description : "I am a Junior Web Developer with a strong passion for creating dynamic, user-friendly websites and web applications.",
    links : [
        {
            url : "https://www.facebook.com/lester.achondo",
            img : fb,
            title: "Facebook",
        },
        {
            url : "https://www.linkedin.com/in/lester-achondo-773a7115b/",
            img : linkedIn,
            title: "LinkedIn",
        }
    ],
  }
  return (
    <>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 h-4/5'>
          <div className='order-last md:order-first'>
            <p className='px-12 pt-2 md:pt-16 lg:pt-10 xl:pt-20 2xl:pt-48 font-bold'>
                <span className='text-xl md:text-2xl lg:text-3xl'>{detailsData.hello}</span>
                <br/>
                <span className='text-2xl md:text-4xl lg:text-5xl'>{detailsData.name}</span>
                <br/>
                <span className='text-lg md:text-xl'>{detailsData.and}</span> <span className='text-xl text-active'>{detailsData.designation}</span>
            </p>
            <p className='px-12 pt-4 lg:pt-8 text-sm md:text-md lg:text-lg'>{detailsData.description}</p>
            <div className='px-12 pt-2'>
                {detailsData.links.map(
                  (item) => <span className='m-1.5' title={item.title}>
                    <a href={item.url} target="_blank" >
                      <img src={item.img} className='h-6 md:h-8 xl:h-10 curson-pointer inline'/>
                    </a>
                  </span>
                )}
            </div>
          </div>
          <div className='h-40 md:h-80 xl:h-4/5 bg-no-repeat bg-contain bg-center' style={ detailsStyle }></div>
        </div>
    </>
  )
}

export default Introduction