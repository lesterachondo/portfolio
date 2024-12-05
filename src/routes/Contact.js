import React from 'react'
import Navbar from '../components/Navbar';

const Contact = (props) => {
  const activeKey = 4;
  return (
    <>
        <Navbar list={props.list} activeKey={activeKey} />
    </>
  )
}

export default Contact