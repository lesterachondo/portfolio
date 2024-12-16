import React from 'react'
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
        { name: 'HTML', src: htmlLogo, value: 90, width: 'w-11/12', },
        { name: 'CSS', src: cssLogo, value: 80, width: 'w-10/12', },
        { name: 'Bootstrap', src: bootstrapLogo, value: 80, width: 'w-10/12', },
        { name: 'Javasript', src: jsLogo, value: 70, width: 'w-9/12', },
        { name: 'Jquery', src: jqueryLogo, value: 80, width: 'w-10/12', },
        { name: 'React', src: reactLogo, value: 30, width: 'w-4/12', },
        { name: 'PHP', src: phpLogo, value: 80, width: 'w-10/12', },
        { name: 'Codeigniter', src: codeigniterLogo, value: 80, width: 'w-10/12', },
        { name: 'Twig', src: twigLogo, value: 80, width: 'w-10/12', },
        { name: 'RESTful-API', src: restapiLogo, value: 80, width: 'w-10/12', },
        { name: 'MySQL', src: mysqlLogo, value: 80, width: 'w-10/12', },
    ];
  return (
    <>
        <div className='px-12 2xl:px-16 py-10 2xl:py-8 h-3/5 2xl:h-4/6 overflow-y-scroll 2xl:overflow-y-auto 
            [&::-webkit-scrollbar]:w-2 
            [&::-webkit-scrollbar-track]:bg-gray-100 
            [&::-webkit-scrollbar-thumb]:bg-active 
            dark:[&::-webkit-scrollbar-track]:bg-neutral-700 
            dark:[&::-webkit-scrollbar-thumb]:bg-active' >
            <ul className='content-center'>
                {frontendList.map(
                    (item) => <li className='list-none float-left px-12 py-4 content-center'>
                        <img src={item.src} className='w-24 pb-4'/>
                        <div className='w-full bg-white rounded-full h-3 dark:bg-gray-700 mb-2'>
                            <div className={'bg-active h-3 rounded-full '+item.width} ></div>
                        </div>
                        <center><span className='font-extrabold'>{item.value}%</span></center>
                    </li> 
                )}
            </ul>
        </div>
    </>
  )
}

export default SkillsDetails