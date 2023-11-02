import About from "@/components/About"
import Experience from "@/components/Experience"
import Skills from "@/components/Skills"
import Intro from "@/components/intro"
import Projects from "@/components/projects"
import SectionDivider from "@/components/sectionDivider"


export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro/>
     <SectionDivider/>
     <About/>
     <Projects/>
     <Skills/>
     <Experience/>
    </main>
  )
}
