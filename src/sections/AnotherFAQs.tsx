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
    <section id="AnotherFAQs">
    <div className="flex-grow flex items-center justify-center px-8">
        <div className="grid grid-cols-2 gap-8 items-center max-w-6xl w-full">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold" ref={scope}>2024</h1>
            <p className="text-lg text-gray-400 max-w-md">
              Over two years of working worldwide, offering a range of creative and strategic websites.
            </p>
          </div>
          
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
      <div className="relative flex justify-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="overflow-hidden mt-12 bg-stone-900 rounded-2xl  lg:mr-96 lg:flex">
              <CardContent className="p-0">
             <Image 
             src= {wwwImage}
             alt="ice image"
             width={300}
             height={300}
            
             />
              </CardContent>
            </Card>
          </motion.div>
          
        </div>
        <div className=" w-full border-t border-gray-700 my-8"></div>
      </section>
  )
}

export default AnotherFAQs