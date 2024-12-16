import React from 'react'

const AboutDetails = () => {
  const details = {
    header : "So, who am I?",
    paragraphs : [
      {
        content : "I’m Lester, a full-stack web developer with expertise in both front-end and back-end development. My career began when I earned a Bachelor of Science in Computer Science from the University of Caloocan City, where I gained skills in both hardware and software.",
      },
      {
        content : "I started my career as a field service engineer, providing technical solutions for machines like POS systems and data servers. Later, I moved into an IT engineer role in an office, where I gained experience in management and technical tasks.", 
      },
      {
        content : "I then transitioned to a junior web developer role, where I deepened my knowledge on core web technologies such as HTML, CSS, and JavaScript. On the front end, I worked with Bootstrap for the previous systems I developed and maintained. Currently, I am working with React to build dynamic user interfaces and have learned how to create efficient, maintainable code using component-based architecture. I am eager to expand my React knowledge, particularly with advanced features like state management, hooks, and lifecycle methods.", 
      },
      {
        content : "On the back end, I have experience with PHP and databases like MySQL and Oracle. I’ve built full-stack applications, handling both client-side and server-side tasks, which has helped me understand how to structure applications and integrate front-end and back-end components seamlessly.", 
      },
      {
        content : "I’m always looking for new challenges and opportunities to grow as a developer, and I’m excited to continue building applications that make a meaningful impact.", 
      }
    ],
  }
  return (
    <>
      <div className='px-6 sm:px-12 py-0 2xl:my-20 2xl:py-12 max-h-96 overflow-y-auto lg:overflow-y-hidden'>
        <p className='text-sm 2xl:text-4xl font-bold md:pt-4 2xl:pt-10 pb-2 2xl:pb-10'>{details.header}</p>
        {details.paragraphs.map((item) => <p className='text-sm 2xl:text-xl'>{item.content}</p>)}
      </div>
    </>
  )
}

export default AboutDetails