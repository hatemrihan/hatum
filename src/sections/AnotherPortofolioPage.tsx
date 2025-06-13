import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import useTextRevealAnimation from '../hooks/useTextRevealAnimation';
// Using public paths for images

const AnotherPortofolioPage = () => {
  const {scope, entranceAnimation} =useTextRevealAnimation();
  const sectionRef = React.useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
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
    <div ref={sectionRef} className="min-h-screen bg-stone-100 dark:bg-black text-black dark:text-white flex flex-col transition-colors duration-300" id="AnotherPortofolioPage">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 flex-grow">
        <motion.h1 
          className="text-xs sm:text-sm mb-8 lg:mb-12 font-bold text-black/70 dark:text-white/70 leading-none text-center"
          ref={scope}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 0.7, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
           Selected work
        </motion.h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Large Typography */}
          <motion.div 
            className="lg:col-span-6 flex items-center justify-center lg:justify-start mb-8 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold text-black dark:text-white leading-none" ref={scope}>
            more
          </h1>
          </motion.div>

        {/* Image Sections */}
          <motion.div 
            className="lg:col-span-6 grid grid-cols-2 gap-4 sm:gap-6"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {/* Project 1 */}
            <motion.div 
              className="col-span-1 space-y-3 sm:space-y-4"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <div className="text-xs sm:text-sm text-black/70 dark:text-white/70 uppercase tracking-wider" ref={scope}>
              Project
            </div>
              <motion.div 
                className="aspect-[3/4] bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <a href="https://naderemad.netlify.app" target="_blank" rel="noopener noreferrer">
              <Image 
                src="/images/bound-image.jpg" 
                    alt="Nader Emad Portfolio" 
                    className="w-full h-full object-cover hover:grayscale-0 grayscale cursor-pointer transition-all duration-300 hover:scale-105"
                    width={300}
                    height={400}
              />
              </a>
              </motion.div>
              <div className="text-xs sm:text-sm text-black/80 dark:text-white/80">
              Nader Emad — STYLE&apos;47
            </div>
            </motion.div>

            {/* Project 2 */}
            <motion.div 
              className="col-span-1 space-y-3 sm:space-y-4"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="text-xs sm:text-sm text-black/70 dark:text-white/70 uppercase tracking-wider" ref={scope}>
              Project
            </div>
              <motion.div 
                className="aspect-[3/4] bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <a href="https://iflagg.netlify.app" target="_blank" rel="noopener noreferrer">
              <Image 
                src="/images/hola-image.jpg" 
                    alt="Iflag Portfolio" 
                    className="w-full h-full object-cover hover:grayscale-0 grayscale cursor-pointer transition-all duration-300 hover:scale-105"
                    width={300}
                    height={400}
              />
              </a>
              </motion.div>
              <div className="text-xs sm:text-sm text-black/80 dark:text-white/80">
              Iflag — PORT. GQ
            </div>
            </motion.div>
            
            {/* Project 3 */}
            <motion.div 
              className="col-span-1 space-y-3 sm:space-y-4"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <div className="text-xs sm:text-sm text-black/70 dark:text-white/70 uppercase tracking-wider" ref={scope}>
              Project
            </div>
              <motion.div 
                className="aspect-[3/4] bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <a href="https://nadamahmoudd.wixstudio.com/nada" target="_blank" rel="noopener noreferrer">
              <Image 
                src="/images/nada-image.JPG" 
                    alt="Nada Portfolio" 
                    className="w-full h-full object-cover hover:grayscale-0 grayscale cursor-pointer transition-all duration-300 hover:scale-105"
                    width={300}
                    height={400}
              />
              </a>
              </motion.div>
              <div className="text-xs sm:text-sm text-black/80 dark:text-white/80">
              Nada — Model. GQ
            </div>
            </motion.div>
            
            {/* Project 4 */}
            <motion.div 
              className="col-span-1 space-y-3 sm:space-y-4"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <div className="text-xs sm:text-sm text-black/70 dark:text-white/70 uppercase tracking-wider" ref={scope}>
              Project
            </div>
              <motion.div 
                className="aspect-[3/4] bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <a href="https://hatemrihan.github.io/TOMM-WEB/h.HTML?fbclid=PAZXh0bgNhZW0CMTEAAaYYRv6Z8j2U5HkWj2p4e6y7OVWsEcNQYfz9PA-SYYdgVTgyaRf_ly5luTY_aem_rphh00mGa1FsY07bJuMr4w" target="_blank" rel="noopener noreferrer">
              <Image 
                src="/images/hero-image.jpg" 
                    alt="Hatum Portfolio" 
                    className="w-full h-full object-cover hover:grayscale-0 grayscale cursor-pointer transition-all duration-300 hover:scale-105"
                    width={300}
                    height={400}
              />
              </a>
              </motion.div>
              <div className="text-xs sm:text-sm text-black/80 dark:text-white/80">
              Hatum — First. One
            </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        className="text-center pb-8 lg:pb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 1.1 }}
      >
        <h1 className="text-xs sm:text-sm font-bold text-black/70 dark:text-white/70 leading-none" ref={scope}>
           Click it to see
          </h1>
      </motion.div>
      
      <div className="w-full border-t border-black/20 dark:border-white/20 mx-4 sm:mx-6 lg:mx-8"></div>
  </div>
  )
}

export default AnotherPortofolioPage
 