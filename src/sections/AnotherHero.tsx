"use client";
import useTextRevealAnimation from '../hooks/useTextRevealAnimation';
import { useInView } from 'motion/react';
import React, { useEffect, useState } from 'react'

const AnotherHero = () => {
    const {scope, entranceAnimation} =useTextRevealAnimation();
    useEffect(()=>{
  entranceAnimation();
    },[entranceAnimation]);
    const handleClickMobileNavItem= (e:React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      setIsOpen(false);
      const url = new URL(e.currentTarget.href);
      const hash = url.hash;
      if (typeof window !== 'undefined') {
        const target = document.querySelector(hash);
        if (!target) return;
        target.scrollIntoView({behavior:'smooth'});
      }
    }
    const [isOpen, setIsOpen] = useState(false);
    const inView = useInView(scope);
    useEffect(()=>{
      if (inView){
        entranceAnimation();
      }
    }, [inView, entranceAnimation]);
  return (
    <div className="min-h-screen bg-stone-100 dark:bg-black text-black dark:text-white transition-colors duration-300" id="AnotherHero">
      <div className="flex-grow flex flex-col justify-center px-4 sm:px-6 lg:px-8 xl:px-16 py-8 lg:py-16">
        <h1 className="text-[15vw] sm:text-[20vw] lg:text-[20vw] mt-8 lg:mt-16 text-center font-black leading-none tracking-tighter uppercase mb-1">
     Hatum
    </h1>

    {/* Subtitle and Description */}
        <div className="max-w-2xl mt-6 lg:mt-8 mx-auto lg:mx-0">
          <p className="text-xs sm:text-sm mb-3 lg:mb-4 text-black/70 dark:text-white/70">2024 — 25 • Selected Works</p>
          <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed" ref={scope}>
        Hatem Rihan (Hatum) is a creative thinker based in Cairo and Riyadh who works worldwide with Software development and digital design.
      </p>

      {/* Book a Call Button */}
          <a href="https://calendly.com/hatemrihan100/30min" className="inline-block">
            <button className="mt-4 lg:mt-6 bg-black dark:bg-stone-100 text-white dark:text-black px-4 sm:px-6 py-2 sm:py-3 rounded-full flex items-center hover:bg-black/80 dark:hover:bg-stone-100/80 transition-colors text-sm sm:text-base">
        Book a call
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
                className="ml-2 sm:ml-2 sm:w-5 sm:h-5"
        >
          <line x1="7" y1="17" x2="17" y2="7"></line>
          <polyline points="7 7 17 7 17 17"></polyline>
        </svg>
      </button>
      </a>
          <div className="w-full border-t border-black/20 dark:border-white/20 my-6 lg:my-8"></div>
        </div>
      </div>
    </div>
  )
}

export default AnotherHero