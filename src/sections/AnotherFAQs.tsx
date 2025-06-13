"use client";
import React, { useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'motion/react';
import Image from 'next/image';
import wwwImage from '../assets/images/www-image.jpg';
import useTextRevealAnimation from '@/hooks/useTextRevealAnimation';
import ShinyText from '@/components/ShinyText';

const AnotherFAQs = () => {
  const {scope, entranceAnimation} = useTextRevealAnimation();
  useEffect(()=>{
    entranceAnimation();
  },[entranceAnimation]);
  return (
    <section id="AnotherFAQs" className="min-h-screen bg-stone-100 dark:bg-black text-black dark:text-white transition-colors duration-300">
      <div className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl w-full">
          <div className="space-y-4 lg:space-y-6 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold" ref={scope}>2024</h1>
            <p className="text-base sm:text-lg text-black/70 dark:text-white/70 max-w-md mx-auto lg:mx-0">
              Over two years of working worldwide, offering a range of creative and strategic websites.
            </p>
          </div>
          
          <div className="space-y-3 lg:space-y-4 text-center lg:text-right flex flex-col">
            <ShinyText className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold">Software</ShinyText>
            <ShinyText className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold">Frontend</ShinyText>
            <ShinyText className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold">Backend</ShinyText>
            <ShinyText className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold">Research</ShinyText>
            <ShinyText className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold">Ui & Ux</ShinyText>
            <ShinyText className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold">Web Design</ShinyText>
          <div className="space-y-4 text-right flex flex-col">
            <ShinyText className="lg:text-6xl font-bold sm:text-3xl">Software</ShinyText>
            <ShinyText className="lg:text-6xl font-bold sm:text-3xl">Frontend</ShinyText>
            <ShinyText className="lg:text-6xl font-bold sm:text-3xl">Backend</ShinyText>
            <ShinyText className="lg:text-6xl font-bold sm:text-3xl">Research</ShinyText>
            <ShinyText className="lg:text-6xl font-bold sm:text-3xl">Ui & Ux</ShinyText>
            <ShinyText className="lg:text-6xl font-bold sm:text-3xl">Web Design</ShinyText>
          </div>
        </div>
      </div>
      
      <div className="relative flex justify-center mb-8 lg:mb-12 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
          <Card className="overflow-hidden mt-8 lg:mt-12 bg-white dark:bg-gray-800 border border-black/10 dark:border-white/10 rounded-2xl max-w-sm lg:max-w-md xl:max-w-lg mx-auto lg:mr-24 xl:mr-96 shadow-lg">
              <CardContent className="p-0">
             <Image 
                src={wwwImage}
             alt="ice image"
             width={300}
             height={300}
                className="w-full h-auto object-cover"
             />
              </CardContent>
            </Card>
          </motion.div>
      </div>
          
      <div className="w-full border-t border-black/20 dark:border-white/20 my-6 lg:my-8 mx-4 sm:mx-6 lg:mx-8"></div>
      </section>
  )
}

export default AnotherFAQs