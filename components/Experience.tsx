"use client"

import React, { useContext, useEffect } from 'react'
import SectionHeading from './sectionHeading'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './experience.css'
import { experiencesData } from '@/lib/data'
import {useInView} from "react-intersection-observer"
import { useActiveSectionContext } from '@/context/active-section-context';
import { useTheme } from '@/context/theme-context';

export default function Experience() {
   const {theme} = useTheme()
    const {ref, inView} = useInView({
        threshold:0.75,
      })
     const {setActiveSection ,timeOfLastClick} =  useActiveSectionContext();
    
    //  we use useEffect to synchronise an expternal system
      useEffect(() => {
        if(inView && Date.now() - timeOfLastClick > 1000){
          setActiveSection("Experience")
         }
      },[inView, setActiveSection, timeOfLastClick])
  return (
    <section id='experience' className='scroll-mt-28' ref={ref}>
        <SectionHeading>My experience</SectionHeading>
        <VerticalTimeline lineColor=''>
            {
                experiencesData.map((item,index) => (
                    <React.Fragment key={index}>

                    <VerticalTimelineElement
                    contentStyle={{
                        background: theme==='light' ? "#f3f4f6" : 'rgba(255,255,255,0.05)',
                        boxShadow: "none",
                        border: "1px solid rgbz(0,0,0,0.05)",
                        textAlign:"left",
                        padding:"1.3rem 2rem",
                        
                    }}
                    contentArrowStyle={{
                        borderRight: theme ==='light' ?"0.4rem solid #9ca3af" : "0.4rem solid rgba(255,255,255,0.05)",
                    }}
                    date={item.date}
                    icon={item.icon}
                    iconStyle={{
                        background: theme==='light' ?"white" : 'rgba(255,255,255,0.15)',
                        fontSize:"1.5rem",
                    }}
                    >
                        <h3 className='font-semibold capitalize'>{item.title}</h3>
                        <p className='font-normal !mt-0'>{item.location}</p>
                        <p className='!mt-11 !font-normal text-gray-700 dark:text-white/75'>{item.description}</p>

                    </VerticalTimelineElement>
                    </React.Fragment>
                ))
            }
        </VerticalTimeline>
    </section>
  )
}
