import React from 'react'
import { projectsData } from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link'

type ProjectProps = typeof projectsData[number]

const Project = ({
    title,
    description,
    tags,
    imageUrl,
    github,
    demo,
}:ProjectProps ) => {
  return (
   <section>
    <h3 className='text-2xl'>{title}</h3>
    <p mt-2 leading-relaxed text-gray-700>{description}</p>
    <ul className='flex flex-wrap mt-4 gap-2'>
        {tags.map((tag,index) => (
            <li className='bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white 
            rounded-full' key={index}>{tag}</li>
        ))}
    </ul>
    <div className='mt-5 gap-2 flex'>
            <Link href={github} target='_blank' className='bg-black/[0.7] px-4 py-2 text-[1.2rem] tracking-wider hover:bg-black transition duration-500
            rounded-lg text-white '> Github</Link>
            <Link href={demo} target='_blank' className='bg-black/[0.7] px-4 py-2 text-[1.2rem] tracking-wider hover:bg-black transition duration-500
            rounded-lg text-white '> Live Demo</Link>

    </div>
    <Image src={imageUrl} alt='project of mine' quality={95}/>
   </section>
  )
}

export default Project
