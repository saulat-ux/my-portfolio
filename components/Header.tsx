"use client"

import React, { useContext, useState } from 'react'
import { motion } from "framer-motion"
import { links } from '@/lib/data'
import Link from 'next/link'
import logo from '../public/favicon.ico'
import Image from 'next/image'
import {HiOutlineMenuAlt2} from 'react-icons/hi'
import clsx from "clsx"
import { ActiveSectionContext, useActiveSectionContext } from '@/context/active-section-context'




export default function Header() {
 const {activeSection, setActiveSection, setTimeOfLastClick} = useActiveSectionContext()
  const [open ,setOpen] = useState(false)
 

  return <header className='z-[999] relative'>
    <motion.div className='hidden lg:block lg:fixed top-0 left-1/2 h-[3.5rem] w-full
     lg:rounded-none lg:border
      border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03]
      backdrop-blur-[0.5rem] sm:top-0 sm:h-[6.75rem] sm:w-full dark:bg-gray-950 dark:border-black/40  dark:bg-opacity-75'
      initial = {{y:-100, x: "-50%", opacity: 0}}
      animate = {{y:0 , x: "-50%", opacity: 1}}
      ></motion.div>

      <nav className=' hidden lg:block lg:flex fixed  left-1/2 h-12 -translate-x-1/2
      py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0 '>

        <motion.div
        initial= {{opacity:0 , scale:0}}
        animate= {{opacity: 1 , scale: 1}}
        transition ={{
          type:"tween",
          duration:0.2,
        }}
        
        className='flex gap-2 items-center  sm:mr-48' >
          <Image src={logo} alt='an image' width={100} height={100} className=' bg-white'/>
         <h2 className='text-[1.2rem] font-medium text-gray-500 sm:w-[initial]'>Saulat Zubair</h2>
        </motion.div>

          <ul className='flex w-[22rem] flex-wrap items-center justify-center
          gap-y-1 text-[1.2rem] font-medium text-gray-500 sm:w-[initial]
          sm:flex-nowrap sm:gap-5 sm:mr-52'>
            {links.map((link) => (
                <motion.li key={link.hash} className='h-3/4 flex items-center justify-center relative'
                initial = {{y:-100, opacity: 0}}
                animate = {{y:0 ,  opacity: 1}}>
                    <Link className={clsx("flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300" ,{
                      "text-gray-950 dark:text-gray-200 ": activeSection === link.name
                    })}
                    href={link.hash}

                    // the click
                    
                    onClick={() => {
                      setTimeOfLastClick(Date.now())
                      setActiveSection(link.name)}}
                    >
                    {link.name}

                    {link.name === activeSection && (

                    <motion.span className='bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800'
                    layoutId='activeSection'
                    transition={{
                      type:"spring",
                      stiffness:380,
                      damping:30,
                    }}
                    ></motion.span>
                    )}
                    </Link>
                </motion.li>
            ))}
          </ul>
      </nav>
              {/* mobile and tablet view */}
      <div className=' block lg:hidden fixed top-0 h-auto w-full rounded-none border
      border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03]
      backdrop-blur-[0.5rem]  dark:bg-gray-950 dark:border-black/40  dark:bg-opacity-75'
      >

      <nav className=''>
        <div className='flex justify-between' >
          <Image src={logo} alt='an image' width={100} height={100} className=' bg-white'/>
      
         <button className='text-3xl font-medium mr-3' onClick={() => setOpen(!open)}><HiOutlineMenuAlt2/></button>
        </div>

        {/* height */}
              
          <ul className={` ${open ? 'h-auto max-h-screen opacity-100' : 'max-h-0 opacity-0'}
          transition-max-height duration-500 ease-in-out overflow-hidden 
          gap-y-3 text-[1.2rem] font-medium text-gray-500 p-2`} >
            {links.map((link) => (
                <motion.li key={link.hash} className='h-3/4 flex items-center justify-center p-4'
                initial = {{y:-100, opacity: 0}}
                animate = {{y:0 ,  opacity: 1}}>
                    <Link className=' dark:text-gray-500 dark:hover:text-gray-300' href={link.hash}>{link.name}
                    <div className='border-b border-black my-2'></div></Link>
                   
                </motion.li>
            ))}
          </ul>
        
         
      </nav>
      </div>
   </header>
  
}


