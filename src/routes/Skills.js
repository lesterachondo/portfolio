import React from 'react'
import Navbar from '../components/Navbar';

const Skills = (props) => {
    const activeKey = 2;
    return (
      <>
          <Navbar list={props.list} activeKey={activeKey} />
      </>
    )
}

export default Skills