// import React, { useEffect } from 'react'
// import {useInView} from "react-intersection-observer"
// import { useActiveSectionContext } from '@/context/active-section-context';

// export function useSectionView({sectionName}) {
     
//   const {ref, inView} = useInView({
//     threshold:0.3,
//   })
//  const {setActiveSection ,timeOfLastClick} =  useActiveSectionContext();

// //  we use useEffect to synchronise an expternal system
//   useEffect(() => {
//     if(inView && Date.now() - timeOfLastClick > 1000){
//       setActiveSection("Projects")
//      }
//   },[inView, setActiveSection, timeOfLastClick])

//   return {
//     ref
//   }
// }