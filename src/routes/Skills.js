import React from 'react'
import Navbar from '../components/Navbar';
import SkillsDetails from '../components/SkillsDetails';
import Footer from '../components/Footer';

const Skills = (props) => {
    const activeKey = 2;
    return (
      <>
          <Navbar list={props.list} activeKey={activeKey} />
          <SkillsDetails />
          <Footer />
      </>
    )
}

export default Skills