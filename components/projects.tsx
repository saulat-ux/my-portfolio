"use client"
import React from 'react'
import SectionHeading from './sectionHeading'
import { projectsData } from '@/lib/data'
import Link from 'next/link'
import Project from './project'

const Projects = () => {
  return (
   <section className='bg-gray-100 max-w-[82rem] border border-black/5 overflow-hidden 
   sm:pr-8'>
    <SectionHeading>My projects</SectionHeading>
    <div>
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
