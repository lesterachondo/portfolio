import React from 'react'
import '../css/Home.css';
import fb from '../images/icons/fb-logo.png'
import linkedIn from '../images/icons/linkedin-logo.png'
import homeImg from '../images/home-img.png'


const Introduction = () => {
  const detailsStyle = {
    backgroundImage: `url(${homeImg})`,
  }
  return (
    <>
        <div className='Home-details' style={ detailsStyle }>
            <p className='Home-introduction'>
                <span className='Home-hello'>Hello, It's Me</span>
                <br/>
                <span className='Home-name'>Lester Achondo</span>
                <br/>
                <span className='Home-and'>And I'm a </span><span className='Home-designation'>Web Developer</span>
            </p>
            <p className='Home-description'>
                I am a Junior Web Developer with a strong passion for creating dynamic, user-friendly websites and web applications.
            </p>
            <div className='Home-social-icons'>
                <span>
                    <a href={'https://www.facebook.com/lester.achondo'} target="_blank" >
                        <img src={fb} />
                    </a>
                </span>
                <span>
                    <a href={'https://www.linkedin.com/in/lester-achondo-773a7115b/'} target="_blank" >
                        <img src={linkedIn} />
                    </a>
                </span>
            </div>
        </div>
    </>
  )
}

export default Introduction