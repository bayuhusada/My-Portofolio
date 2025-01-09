import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const Hero = () => {

    const email = 'bayuhusada080@gmail.com'
    const subject = 'Hello Bayu'

    const cv = 'https://drive.google.com/file/d/1hKy3LOA55JhAQyagoAfxsWNR9WP3xLrD/view?usp=sharing'


  // const UnderlineRef = useRef(null);

  // const handleMouseEnter = () => {
  //   gsap.to(UnderlineRef.current, {
  //     width: '100%',
  //     duration: 0.5,
  //     ease: 'power2.out'
  //   });
  // }

  // const handleMouseLeave = () => {
  //   gsap.to(UnderlineRef.current, {
  //     width: '0%',
  //     duration: 0.5,
  //     ease: 'power2.out'
  //   });
  // }


  const heroRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(heroRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out'
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section id="home" className="h-screen flex items-center justify-center bg-gray-100" ref={heroRef}>
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4" data-aos="fade-up">BAYU HUSADA</h1>
        <p className="text-xl mb-8 flex items-center justify-center content-center underline " data-aos="fade-up">I am a FrontEnd Developer</p>
        <button 
        className="bg-yellow-400 text-black px-6 py-3 shadow-[-7px_7px_0px_#aa9728] transform transition duration-300 ease-in-out hover:bg-[#bba62c] hover:scale105 hover:shadow-lg "
        onClick={() => {
          window.open(
            `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}`,
            "_blank"
          ) 
        }}
        data-aos="fade-up"
        >
          Hire Me
        </button>
        <button 
        className="bg-white-400 ml-4 text-black px-6 py-3 shadow-[-7px_7px_0px_#000000] transform transition duration-300 ease-in-out hover:text-yellow-400 hover:bg-[#000000] hover:scale105 hover:shadow-lg "
        onClick={() => {
          window.open(
            cv,
            "_blank"
          ) 
        }}
        data-aos="fade-up"
        >
          Curriculum vitae
        </button>

      {/* <div
        className="relative group text-xl font-bold cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Hover Me
        <div
          ref={UnderlineRef}
          className="absolute left-0 bottom-0 h-1 bg-blue-500 w-0"
        ></div>
      </div> */}
    </div>

    </section>
  )
}

export default Hero

