import React from 'react'
import Navbar from '../components/Navbar';
import SkillsDetails from '../components/SkillsDetails';

const Skills = (props) => {
    const activeKey = 2;
    return (
      <>
          <Navbar list={props.list} activeKey={activeKey} />
          <SkillsDetails />
      </>
    )
}

export default Skills