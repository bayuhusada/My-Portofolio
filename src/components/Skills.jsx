import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Skills = () => {
  const skillsRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.skill-item', {
        scrollTrigger: {
          trigger: skillsRef.current,
          start: 'top center',
        },
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 1,
        ease: 'power3.out'
      })
    })

    return () => ctx.revert()
  }, [])

  const skills = ['HTML', 'CSS', 'JavaScript', 'ReactJs', 'NextJs', 'Figma', 'Git', 'Figma' , 'TailwindCSS', 'Bootsrap', 'PHP', 'MySQL', 'RestAPI', 'Linux']

  return (
    <section id="skills" className="py-20 bg-white" ref={skillsRef}>
      <div className="container mx-auto px-6">
        <h2 className="text-xl font-bold mb-8 text-center">My Skills</h2>
        <div className="grid grid-cols-4 md:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item bg-yellow-400 rounded-lg p-2 w-10 text-center shadow-[-7px_7px_0px_#bba62c]">
              <span className="text-lg font-semibold">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

