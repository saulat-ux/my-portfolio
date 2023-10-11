"use client"


import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion"
import Link from 'next/link'
import { BsArrowRight, BsLinkedin } from "react-icons/bs"
import { HiDownload } from "react-icons/hi"
import Me from '../public/me_2-fotor.png'
import { FaGithubSquare } from 'react-icons/fa'
import { useEffect, useState ,useRef } from 'react'
import { Component } from 'react'


const Intro = () => {
 
  return (
<section className='mb-28 max-w-[50rem] text-center sm:mb-0'>
        <div className='flex items-center justify-center'>
                <div className='relative'>
                    <motion.div
                    initial = {{opacity: 0 , scale: 0}}
                    animate = {{opacity:1 , scale : 1}}
                    transition={{
                        type: "tween",
                        duration: 0.2,
                    }}
                    >
                    <Image className='object-cover h-40 w-40 rounded-full border-[0.35rem] border-white
                    shadow-xl' src={Me} alt='saulat portrait'/>
                    </motion.div>
                  
                    <motion.span 
                     initial = {{opacity: 0 , scale: 0}}
                     animate = {{opacity:1 , scale : 1}}
                     transition={{
                        type: 'spring',
                        stiffness: 125,
                        delay: 0.1,
                        duration: 0.7,
                     }}
                    className='text-4xl absolute bottom-0 left-0'>👋</motion.span>
                </div>
        </div>

        <motion.h1 className='mb-10 mt-4 text-2xl font-medium 
        sm:text-4xl'
        initial= {{ opacity:0, y:100}}
        animate = {{opacity:1, y:0 }}
        >
          <div className=''>
            <div className='text-start'>
             <span className={` font-bold text-blue-800 text-7xl`}>Hi, I'm Saulat Zubair.</span> 
                     <AnimateTyping text={'  world how you doing'} />
                     </div>
        </div>
        
    </motion.h1>
   

    <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-2 
      px-4 text-lg font-medium'
      initial = {{opacity: 0 , y:100}}
      animate = {{opacity: 1 , y:0}}
      transition={{
        delay: 0.1,
      }}
      >
        <Link className='group bg-gray-900 text-white px-7 py-3 flex items-center
        gap-2 rounded-full outline-none 
        focus:scale-110 hover:scale-110
         hover:bg-gray-950 active:scale-110 transition' href='#contact'>Contact me here
            <BsArrowRight className='opacity-70 group-hover:translate-x-3 transition'/>
            </Link>

        <a href="" className='group bg-white px-7 py-3 flex items-center
        gap-2 rounded-full outline-none 
        focus:scale-110 hover:scale-110 active:scale-110 transition border border-black/10'>Download CV <HiDownload
        className=' opacity-60 group-hover:translate-y-1 transition'
        /></a>

        <a href="http://linkedin.com" target='_blank' className='bg-white p-4 text-[1.35rem] text-gray-700 flex items-center
        gap-2 rounded-full focus:scale-110 hover:scale-110
        hover:text-gray-950 active:scale-110 transition border border-black/10 '>
            <BsLinkedin/>
        </a>

        <a href="http://github.com" target='_blank' className='bg-white p-4 text-[1.7rem] text-gray-700 flex items-center
        gap-2 rounded-full focus:scale-110 hover:scale-110
        hover:text-gray-950 active:scale-110  transition border border-black/10'>
            <FaGithubSquare/>
        </a>
    </motion.div> 
</section>
  )
}

function AnimateTyping({text}) {
  const [currentText , setCurrentText] = useState('')

  const index = useRef(0)

  useEffect(() => {
    index.current =0;
    setCurrentText('')
  },[text])

   const timeOutid = useEffect(() => {
  
    setTimeout(() => {
      setCurrentText((value) => value + text.charAt(index.current))
      index.current += 1;
    },50)
    return() => {
      clearTimeout(timeOutid)
    }
  
  },[currentText,text])

    return <div>{currentText}</div>
}



export default Intro
