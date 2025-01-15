import React from 'react'
import Navbar from '../components/Navbar';
import AboutDetails from '../components/AboutDetails'

const About = (props) => {
  const activeKey = 1;
  return (
    <>
        <Navbar list={props.list} activeKey={activeKey} />
        <AboutDetails />
    </>
  )
}

export default About