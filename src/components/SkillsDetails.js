import React from 'react'
import '../css/Skills.css';
import htmlLogo from '../images/icons/html-logo.png'
import cssLogo from '../images/icons/css-logo.png'
import jsLogo from '../images/icons/js-logo.png'
import bootstrapLogo from '../images/icons/bootstrap-logo.png'
import reactLogo from '../images/icons/react-logo.png'
import jqueryLogo from '../images/icons/jquery-logo.png'
import codeigniterLogo from '../images/icons/codeigniter-logo.png'
import phpLogo from '../images/icons/php-logo.png'
import restapiLogo from '../images/icons/restapi-logo.png'
import twigLogo from '../images/icons/twig-logo.png'
import mysqlLogo from '../images/icons/mysql-logo.png'

const SkillsDetails = () => {
    const frontendList = [
        { name: 'HTML', src: htmlLogo, value: 9, },
        { name: 'CSS', src: cssLogo, value: 8, },
        { name: 'Bootstrap', src: bootstrapLogo, value: 8, },
        { name: 'Javasript', src: jsLogo, value: 7, },
        { name: 'Jquery', src: jqueryLogo, value: 8, },
        { name: 'React', src: reactLogo, value: 3, },
        { name: 'PHP', src: phpLogo, value: 8, },
        { name: 'Codeigniter', src: codeigniterLogo, value: 8, },
        { name: 'Twig', src: twigLogo, value: 8, },
        { name: 'RESTful-API', src: restapiLogo, value: 8, },
        { name: 'MySQL', src: mysqlLogo, value: 8, },
    ];
  return (
    <>
        <div className='skills-content'>
            <ul>
                {frontendList.map( (item) => <li><img src={item.src} /> <progress value={item.value} max="10"></progress> <center><strong>{item.value}0%</strong></center> </li> )}
            </ul>
        </div>
    </>
  )
}

export default SkillsDetails