import React from 'react'
import Heading from './Heading'
import Cards from './Cards'
import "@/app/styles/project.css"

const data = [
    {
        id: 0,
        title: "Youtube Homepage Clone",
        desc: "A fullied responsive Youtube homepage clone built with HTML, CSS",
        img: "/Youtube_project-1.png",
        tags: ["HTML", "CSS", "Typescript"]
    },
    {
        id: 1,
        title: "Static Resume",
        desc: "A Typescript based interactive resume built with  HTML, CSS, Node-JS",
        img: "/resume.Jpeg.png",
        tags: ["HTML", "CSS", "Typescript","Node-JS"]
    },
]

function Project() {
  return (
    <div id='projects' className='projects-container'>
    <Heading title ="My Projects"/>
    <div className='projects-grid projects-grid-xl projects-grid-md-2 projects-grid-lg-3 projects-center'>
        {data.map((el) => (<Cards
        key={el.id}
        title={el.title}
        desc={el.desc}
        img={el.img}
        tags={el.tags}
        />))}
    </div>
    </div>
  )
}

export default Project
