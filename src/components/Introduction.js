import React from 'react'
import '../css/Home.css';
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
        },
        {
            url : "https://www.linkedin.com/in/lester-achondo-773a7115b/",
            img : linkedIn,
        }
    ],
  }
  return (
    <>
        <div className='home-details' style={ detailsStyle }>
            <p className='home-introduction'>
                <span className='home-hello'>{detailsData.hello}</span>
                <br/>
                <span className='home-name'>{detailsData.name}</span>
                <br/>
                <span className='home-and'>{detailsData.and}</span><span className='home-designation'>{detailsData.designation}</span>
            </p>
            <p className='home-description'>{detailsData.description}</p>
            <div className='home-social-icons'>
                {detailsData.links.map((item) => <span><a href={item.url} target="_blank" ><img src={item.img} /></a></span>)}
            </div>
        </div>
    </>
  )
}

export default Introduction