import React from 'react'
import Navbar from '../components/Navbar';
import Introduction from '../components/Introduction';

const Home = (props) => {
  const activeKey = 0;
  return (
    <>
        <Navbar list={props.list} activeKey={activeKey} />
        <Introduction />
        
    </>
  )
}

export default Home