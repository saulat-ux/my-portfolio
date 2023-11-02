"use client"

import React, { useEffect } from 'react'
import SectionHeading from './sectionHeading'
import { skillsData } from '@/lib/data'
import { motion } from 'framer-motion'
import {useInView} from "react-intersection-observer"
import { useActiveSectionContext } from '@/context/active-section-context';

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y:100
    },
    animate: (index:number) =>({
        opacity:1,
        y:0,
        transition:{
            delay: 0.05 * index,
        }
    })
}

const Skills = () => {
    
  const {ref, inView} = useInView({
    threshold:0.3,
  })
 const {setActiveSection ,timeOfLastClick} =  useActiveSectionContext();

//  we use useEffect to synchronise an expternal system
  useEffect(() => {
    if(inView && Date.now() - timeOfLastClick > 1000){
      setActiveSection("Skills")
     }
  },[inView, setActiveSection, timeOfLastClick])
  return (
    <section className='mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40 mt-20 ' id='skills' ref={ref}>
        <SectionHeading> My Skills</SectionHeading>
        <ul className='flex flex-wrap justify-center gap-2 text-lg text-gray-800'>
            {
                skillsData.map((skill,index) => (
                    <motion.li
                    variants={fadeInAnimationVariants}
                    initial= "initial"
                    whileInView="animate"
                    viewport={{
                        once:true,
                    }}
                    custom={index}
                    key={index} className='bg-white border border-black/[0.1] rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80 '>{skill}</motion.li>
                ))

            }
        </ul>
    </section>
  )
}

export default Skills