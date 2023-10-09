import React from 'react'
type SectionHeadingProp ={
    children: React.ReactNode;
}

const SectionHeading = ({
    children,
}: SectionHeadingProp) => {
  return (
   <h2 className='text-3xl font-medium capitalizemb-8'>{children} </h2>
  )
}

export default SectionHeading
