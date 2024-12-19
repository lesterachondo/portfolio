import React from 'react'
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

const Portfolio = (props) => {
  const activeKey = 3;
  return (
    <>
        <Navbar list={props.list} activeKey={activeKey} />
        <Projects />
        <Footer />
    </>
  )
}

export default Portfolio