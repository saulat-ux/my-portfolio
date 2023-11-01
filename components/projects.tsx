"use client";

import SectionHeading from './sectionHeading'
import { projectsData } from '@/lib/data'
import Project from './project'
import React, { useEffect } from 'react'
import {useInView} from "react-intersection-observer"
import { useActiveSectionContext } from '@/context/active-section-context';

const Projects = () => {

  
  const {ref, inView} = useInView({
    threshold:0.3,
  })
 const {setActiveSection ,timeOfLastClick} =  useActiveSectionContext();

//  we use useEffect to synchronise an expternal system
  useEffect(() => {
    if(inView && Date.now() - timeOfLastClick > 1000){
      setActiveSection("Projects")
     }
  },[inView, setActiveSection, timeOfLastClick])
  return (
   <section className='scroll-mt-[8.5rem]' id='projects' ref= {ref}>
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
