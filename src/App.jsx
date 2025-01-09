'use client'

import { useEffect, useState } from 'react'
import IntroLoader from './components/IntroLoader'
import Portfolio from './components/Portfolio'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })

    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="min-h-screen bg-gray-100">
      {loading ? <IntroLoader/> : <Portfolio />}
    </main>
  )
}

