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
import {useInView} from "react-intersection-observer"
import { useActiveSectionContext } from '@/context/active-section-context';



const Intro = () => {

  const {ref, inView} = useInView({
    threshold:0.75,
  })
 const {setActiveSection , timeOfLastClick} =  useActiveSectionContext();

//  we use useEffect to synchronise an expternal system
  useEffect(() => {
    if(inView && Date.now() - timeOfLastClick > 1000){
      setActiveSection("Home")
     }
  },[inView, setActiveSection, timeOfLastClick])

 
  return (
<section className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]' id='home' ref={ref}>
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

        <motion.h1 className=' mt-4 text-2xl font-medium 
        sm:text-4xl'
        initial= {{ opacity:0, y:100}}
        animate = {{opacity:1, y:0 }}
        >
          <div className=''>
            <div className='text-start text-gray-800'>
             <span className={` font-bold  text-3xl sm:text-5xl`}>Hi, I'm Saulat Zubair.</span> 
             <AnimateTyping className='mt-10 mb-4 text-lg sm:text-2xl'/>
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

        <a  className='group bg-white px-7 py-3 flex items-center
        gap-2 rounded-full outline-none 
        focus:scale-110 hover:scale-110 active:scale-110 transition border border-black/10 dark:bg-white/10' href="/saulat resume.pdf" download>Download CV <HiDownload
        className=' opacity-60 group-hover:translate-y-1 transition'
        /></a>

        <a href="https://www.linkedin.com/in/saulatzubair/" target='_blank' className='bg-white p-4 text-[1.35rem] text-gray-700 flex items-center
        gap-2 rounded-full focus:scale-110 hover:scale-110
        hover:text-gray-950 active:scale-110 transition border border-black/10 dark:bg-white/10 dark:text-white/60 '>
            <BsLinkedin/>
        </a>

        <a href="https://github.com/saulat-ux/" target='_blank' className='bg-white p-4 text-[1.7rem] text-gray-700 flex items-center
        gap-2 rounded-full focus:scale-110 hover:scale-110
        hover:text-gray-950 active:scale-110  transition border border-black/10 dark:bg-white/10 dark:text-white/60'>
            <FaGithubSquare/>
        </a>
    </motion.div> 
</section>
  )
}

interface AnimateTypingProps{
  className?: string;
}



const AnimateTyping: React.FC<AnimateTypingProps> =  (props) => {
  const [text, setText] = useState("");
  const speed = 50;
  const texts = ["A Full-Stack Software Engineer.", "A React and NextJs Expert.", "With a focus on Node and ExpressJs."];
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    let timer1: NodeJS.Timeout;
    let timer2:NodeJS.Timeout;

    const typeCharacter = () => {
      if (charIndex < texts[index].length) {
        setText((prevText) => prevText + texts[index][charIndex]);
        setCharIndex(charIndex + 1);
        timer1 = setTimeout(typeCharacter, speed);
      } else {
        timer2 = setTimeout(() => {
          setCharIndex(0);
          setText("");
          setIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 1000);
      }
    };

    timer1 = setTimeout(typeCharacter, speed);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [index, charIndex]);

  return <p {...props}>{text}</p>;
}


export default Intro
