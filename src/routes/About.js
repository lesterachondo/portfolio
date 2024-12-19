import React from 'react'
import Navbar from '../components/Navbar';
import AboutDetails from '../components/AboutDetails'
import Footer from '../components/Footer';

const About = (props) => {
  const activeKey = 1;
  return (
    <>
        <Navbar list={props.list} activeKey={activeKey} />
        <AboutDetails />
        <Footer />
    </>
  )
}

export default About