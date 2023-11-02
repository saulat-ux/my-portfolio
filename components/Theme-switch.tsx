"use client"

import React, { useEffect, useState } from 'react'
import { BsMoon, BsSun } from 'react-icons/bs'
import { useTheme } from '@/context/theme-context';



export default function ThemeSwitch() {
  
 const {theme , toggleTheme} = useTheme()

  return (
    <button
    onClick={toggleTheme}
    className='fixed bottom-5 right-5 bg-gray-950 text-white  w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full
    flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-white dark:text-gray-950'
    
    >
        {
            theme==="light" ?    <BsMoon/>    : <BsSun/>
        }
        
    </button>
  )
}
