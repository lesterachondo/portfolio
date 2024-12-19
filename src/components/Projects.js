import React from 'react'
import rms from '../images/rms.png'
import rpta from '../images/rpta.png'
import bootstrapLogo from '../images/icons/bootstrap-logo.png'
import twigLogo from '../images/icons/twig-logo.png'
import jqueryLogo from '../images/icons/jquery-logo.png'
import codeigniterLogo from '../images/icons/codeigniter-logo.png'
import mysqlLogo from '../images/icons/mysql-logo.png'
import restapiLogo from '../images/icons/restapi-logo.png'

const Projects = () => {
    const details = [
        { 
            name: 'Request Management System', 
            src: rms, 
            logos: [bootstrapLogo,twigLogo,jqueryLogo,codeigniterLogo,mysqlLogo,restapiLogo], 
            link: 'https://rms.amellar.com/index.php/', 
            description: 'A Request Management System (RMS) is a structured digital solution designed to facilitate the efficient handling, tracking, and resolution of service requests within an organization. This system aims to enhance communication, improve response times, and ensure accountability across various departments or service units.'
        },
        { 
            name: 'Real Property Tax Administration System', 
            logos: [bootstrapLogo,twigLogo,jqueryLogo,codeigniterLogo,mysqlLogo,restapiLogo], 
            src: rpta, 
            link: 'https://www.binanbplserv.com/rpta-online-cloud-testv2/', 
            description: 'The Real Property Tax Administration System (RPTAS) is an all-inclusive technological solution designed to streamline the management, assessment, collection, and reporting of real property taxes. This system serves as a vital tool for local government units (LGUs) and tax authorities to ensure transparency, efficiency, and accuracy in handling property-related tax obligations.', 
        },
    ]
  return (
    <>
        <div className='w-full  h-3/5 2xl:h-4/6 p-6 overflow-y-scroll 2xl:overflow-y-auto 
            [&::-webkit-scrollbar]:w-2 
            [&::-webkit-scrollbar-track]:bg-gray-100 
            [&::-webkit-scrollbar-thumb]:bg-active 
            dark:[&::-webkit-scrollbar-track]:bg-neutral-700 
            dark:[&::-webkit-scrollbar-thumb]:bg-active' >
            <ul>
                {details.map(
                    (item) => <li className='p-6'>
                        <div className='flex flex-col 2xl:flex-row'>
                            <div className='w-full 2xl:w-1/2'>
                                <a href={item.link}><img src={item.src} className='w-full'/></a>
                            </div>
                            <div className='w-full 2xl:w-1/2 px-6 py-2'>
                                <label className='font-extrabold text-lg 2xl:text-2xl text-active'>{item.name}</label>
                                <p className='text-sm 2xl:text-lg my-4'>{item.description}</p>
                                <label className='text-sm 2xl:text-lg'>Technology Used:</label>
                                <div className='flex flex-row my-2'>
                                    {item.logos.map((src) => <img src={src} className='w-8 2xl:w-16 mx-2' />)}
                                </div>
                                <button className='h-6 2xl:h-8 text-xs 2xl:text-md px-2 2xl:px-6 bg-active my-4 rounded-lg'><a href={item.link} >See Project</a></button>
                            </div>
                        </div>
                    </li>
                )}
            </ul>
        </div>
    </>
  )
}

export default Projects