import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = (props) => {
  const activeKey = 4;
  return (
    <>
        <Navbar list={props.list} activeKey={activeKey} />
        <Footer />
    </>
  )
}

export default Contact