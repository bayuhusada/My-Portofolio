'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function IntroLoader() {
  const loaderRef = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline()

    tl.to(loaderRef.current, {
      duration: 1,
      opacity: 1,
      ease: 'power2.inOut',
    })
    .to(textRef.current, {
      duration: 1,
      opacity: 1,
      y: 0,
      ease: 'power2.out',
    })
    .to([loaderRef.current, textRef.current], {
      duration: 1,
      opacity: 0,
      delay: 1,
      ease: 'power2.inOut',
    })
  }, [])

  return (
    <div ref={loaderRef} className="fixed inset-0 flex items-center justify-center bg-black opacity-0">
      <h1 ref={textRef} className="text-4xl font-bold text-yellow-500 opacity-0 transform translate-y-10">
        Welcome To My Portfolio
      </h1>
    </div>
  )
}

