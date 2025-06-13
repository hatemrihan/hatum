"use client";

import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const New = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="min-h-screen bg-stone-100 dark:bg-black text-black dark:text-white flex items-center justify-center p-4 sm:p-6 lg:p-8 transition-colors duration-300">
      {/* Content */}
      <div className="text-center max-w-5xl w-full">
        {/* Header */}
        <motion.div 
          className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-8 lg:mb-12 opacity-80"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 0.8, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Areas of Focus — What We Are Building
        </motion.div>

        {/* Main Title */}
        <motion.h1 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light leading-tight mb-8 lg:mb-12 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Unified purpose.<br />
          A limitless future.
        </motion.h1>

        {/* Description */}
        <motion.p 
          className="text-sm sm:text-base lg:text-lg leading-relaxed mb-12 lg:mb-16 max-w-4xl mx-auto opacity-90 font-normal px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 0.9, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          The world is changing fast, and we building faster. At ENSAIN, I work across the full stack to deliver AI-native platforms spanning Infrastructure, Cloud,  and Applications. No patchwork. No vendor chaos. Just one integrated stack—engineered for scale and built to solve real-world problems. Every layer I touch is designed for impact. Every system I help create is ready to run.


        </motion.p>

        {/* Feature Section - Centered without background box */}
        <motion.div 
          className="flex justify-center mt-16 lg:mt-20 px-4"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <motion.div 
            className="text-center max-w-md"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="text-base lg:text-lg font-semibold mb-3 opacity-90">
              Applications & Solutions
            </h3>
            <p className="text-sm lg:text-base leading-relaxed opacity-70">
              End-to-end solutions that work out of the box
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default New;
