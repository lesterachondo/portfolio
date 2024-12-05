import React from 'react'
import Navbar from '../components/Navbar';

const Portfolio = (props) => {
  const activeKey = 3;
  return (
    <>
        <Navbar list={props.list} activeKey={activeKey} />
    </>
  )
}

export default Portfolio