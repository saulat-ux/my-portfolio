"use client"

import React from 'react'
import {useRef} from 'react'
import { projectsData } from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link'
import  {useScroll, motion, useTransform} from "framer-motion"

type ProjectProps = typeof projectsData[number]

const Project = ({
    title,
    description,
    tags,
    imageUrl,
    github,
    demo,
}:ProjectProps ) => {
    const ref = useRef<HTMLDivElement>(null)
   const { scrollYProgress } = useScroll({
        target:ref,
        offset:["0 1", "1.33 1"],
    })
    const scaleProgress = useTransform(scrollYProgress,[0,1], [0.8,1] )
    const opacityProgress = useTransform(scrollYProgress,[0,1], [0.6,1] )

  return (
    <motion.div
    ref={ref}
    style= {{
        scale: scaleProgress,
        opacity: opacityProgress,
    }}
   className='mb-3 sm:mb-8 last:mb-0 group' >

   
   <section
   
     className="  bg-gray-100 max-w-[25rem] sm:max-w-[62rem] border
    border-black/5 rounded-lg overflow-hidden
     sm:pr-8 relative h-[25rem] sm:h-[30rem] hover:bg-gray-200
      transition sm:group-even:pl-8 dark:text-white
       dark:bg-white/10 dark:hover:bg-white/20  ">
        {/* fix */}
   <div className="pt-4 pb-16 px-2 sm:pl-10 sm:pr-2 sm:pt-0 max-w-[48%] sm:max-w-[50%]
    flex flex-col h-full group-even:ml-[12rem] md:group-even:ml-[24rem] lg:group-even:ml-[28rem]" >


    <h3 className='text-xl font-bold sm:text-4xl'>{title}</h3>
    <p  className='mt-2 leading-relaxed text-gray-700 text-sm sm:text-2xl dark:text-white/70' >{description}</p>
    <ul className='flex flex-wrap mt-4 gap-2 sm:mt-auto'>
        {tags.map((tag,index) => (
            <li className='bg-black/[0.7] px-3 py-1 text-[0.5rem] sm:text-[0.9rem] uppercase tracking-wider text-white 
            rounded-full dark:text-white/70' key={index}>{tag}</li>
        ))}
    </ul>
    <div className=' mt-5 md:mt-2 gap-3 flex'>
            <Link href={github} target='_blank' className='bg-black/[0.7] px-1 sm:px-4  py-2  md:px-4 md:py-2 text-[0.8rem] sm:text-[0.8rem] tracking-wider hover:bg-black transition duration-500
            rounded-lg text-white '> Github</Link>
            <Link href={demo} target='_blank' className='bg-black/[0.7] px-1 sm:px-4   py-2  md:px-4 md:py-2 text-[0.8rem] sm:text-[0.8rem] tracking-wider hover:bg-black transition duration-500
            rounded-lg text-white '> Live Demo</Link>

    </div>
    </div>
    <Image src={imageUrl} alt='project of mine' quality={95} className='absolute top-8 -right-20 sm:-right-40 w-[16.25rem] sm:w-[32.25rem] lg:w-[36.25rem] rounded-t-lg shadow-2xl
    group-even:right-[initial] group-even:-left-20
    group-hover:-translate-x-3
      group-hover:translate-y-3
      group-hover:scale-[1.04]
       group-hover:-rotate-2

      group-even:group-hover:translate-x-3
      group-even:group-hover:translate-y-3
      group-even:group-hover:rotate-2 transition '/>
   </section>
   </motion.div>
  )
}

export default Project
