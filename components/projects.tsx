
import React from 'react'
import SectionHeading from './sectionHeading'
import { projectsData } from '@/lib/data'
import Project from './project'

const Projects = () => {
  return (
   <section className=''>
    <SectionHeading>My projects</SectionHeading>
    <div className=''>
    {
        projectsData.map((project ,index) => (
            <React.Fragment key={index}>
                <Project {...project}/>
            </React.Fragment>
        ))
    }
    </div>
    </section>
  )
}

export default Projects
