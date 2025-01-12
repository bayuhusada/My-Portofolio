import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

// images
import img1 from '../Images/chatbot.jpg'
import img2 from '../Images/bawaslu.jpg'
import img3 from '../Images/POS.jpg'
import img4 from '../Images/rak.jpg'
import img5 from '../Images/RestApi.jpg'
import img6 from '../Images/blog.jpg'


const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])



  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center" data-aos="fade-right">My Projects</h2>
       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-40'>
          <div className='gap-10' data-aos="fade-up">
            <a href="https://webitucb.netlify.app/">
            <img src={img1} alt="" className='rounded-3xl filter grayscale hover:filter-none duration-1000' />
            </a>
            <h1 className='text-xl m-3 text-center w-40 p-1 outline outline-yellow-400 items-center shadow-[-7px_7px_0px_#bba62c] '>CHATBOT</h1>
          </div>
          <div className='gap-10' data-aos="fade-up">
            <a href="#">
            <img src={img2} alt="" className='rounded-3xl filter grayscale hover:filter-none duration-1000' />
            </a>
            <h1 className='text-xl m-3 text-center w-40 p-1 outline outline-yellow-400 items-center shadow-[-7px_7px_0px_#bba62c] '>Pengaduan Bawaslu</h1>
          </div>
          <div className='gap-10' data-aos="fade-up">
            <a href="#">
            <img src={img3} alt="" className='rounded-3xl filter grayscale hover:filter-none duration-1000' />
            </a>
            <h1 className='text-xl m-3 text-center w-40 p-1 outline outline-yellow-400 items-center shadow-[-7px_7px_0px_#bba62c] '>POS inventory system</h1>
          </div>
          <div className='gap-10' data-aos="fade-up">
            <a href="https://rakbukubay.netlify.app/">
            <img src={img4} alt="" className='rounded-3xl filter grayscale hover:filter-none duration-1000' />
            </a>
            <h1 className='text-xl m-3 text-center w-40 p-1 outline outline-yellow-400 items-center shadow-[-7px_7px_0px_#bba62c] '>Rak Buku</h1>
          </div>
          <div className='gap-10' data-aos="fade-up">
            <a href="https://api-anime-list.netlify.app/">
            <img src={img5} alt="" className='rounded-3xl filter grayscale hover:filter-none duration-1000' />
            </a>
            <h1 className='text-xl m-3 text-center w-40 p-1 outline outline-yellow-400 items-center shadow-[-7px_7px_0px_#bba62c] '>Rest Api Anime</h1>
          </div>
          <div className='gap-10' data-aos="fade-up">
            <a href="https://api-anime-list.netlify.app/">
            <img src={img6} alt="" className='rounded-3xl filter grayscale hover:filter-none duration-1000' />
            </a>
            <h1 className='text-xl m-3 text-center w-40 p-1 outline outline-yellow-400 items-center shadow-[-7px_7px_0px_#bba62c] '>Blog Website</h1>
          </div>

       </div>
      </div>
    </section>
  )
}

export default Projects

