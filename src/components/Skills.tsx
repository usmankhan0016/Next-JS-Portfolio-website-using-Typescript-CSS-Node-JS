import React from 'react'
import "@/app/styles/skills.css"
const Skills = () => {
  return (
    <div id='skills' className='skills-container'>
      <div className='skills-grid'>
        {/* first column: heading & paragraph */}
        <div className='skills-left'>
            <h2 className='skills-heading'data-aos="fade-right">
                Technologies I Work With:
            </h2>
            <p className='skills-text' data-aos="fade-right">
            I possess a strong foundation in web development,specializing in HTML, CSS, and JavaScript, along with experience in building interactive applications using frameworks like React and Next.js. My knowledge of Tailwind CSS allows me to create clean, responsive designs efficiently. I am dedicated to keeping up with the latest trends and technologies to enhance my capabilities and deliver impactful results in my projects.
            </p>
              </div>
              {/* second column: skills */}
              <div className='skills-right'>
                <div className='skills-icons-grid'>
                    <div className='skills-space'>
                        <h2 data-aos="fade-left">Typescript</h2>
                        <h2 data-aos="fade-left">React.JS</h2>
                        <h2 data-aos="fade-left">Next-JS</h2>
                    </div>

                    <div className='skills-space'>
                        <h2 data-aos="fade-left">Tailwind</h2>
                        <h2 data-aos="fade-left">CSS</h2>
                        <h2 data-aos="fade-left">Node-JS</h2>
                    </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
