import { useEffect, useRef } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import img from '../Images/bg.jpeg'
const About = () => {
  const aboutRef = useRef(null)

  

  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
  }, [])

  return (
    <section id="about" className="py-20 bg-white" ref={aboutRef}>
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center" data-aos="fade-up">About Me</h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0" data-aos="fade-right">
            <img src={img} alt="Profile" className="rounded-full mx-auto ml-5" />
          </div>
          <div className="md:w-1/2" data-aos="fade-left">
            <p className="text-lg mb-4">
            Hi, I’m <span className='font-bold text-yellow-500 text-xl'>Bayu Husada</span>, a passionate front-end developer dedicated to creating responsive and user-friendly web applications. I focus on clean design, efficient code, and continuously learning to deliver great digital experiences.
            </p>
            <p className="text-lg"></p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

