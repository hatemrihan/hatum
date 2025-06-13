"use client";

import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import PageLoader from '../../components/PageLoader';
import NewFooter from '@/sections/NewFooter';
import NewPart from '@/sections/NewPart';

// Animated Counter Hook
const useCounter = (end: number, duration = 5000, shouldStart = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, shouldStart]);

  return count;
};

const AboutPage = () => {
  const [showLoader, setShowLoader] = useState(true);
  const [startCounting, setStartCounting] = useState(false);
  const statsRef = React.useRef(null);
  const isStatsInView = useInView(statsRef, { once: true, amount: 0.3 });
  const [hasStarted, setHasStarted] = useState(false);
  
  const count140 = useCounter(140, 5000, startCounting);
  const count30 = useCounter(30, 5000, startCounting);
  const count80 = useCounter(80, 5000, startCounting);

  // Start counting when stats come into view
  useEffect(() => {
    if (isStatsInView && !showLoader && !hasStarted) {
      setStartCounting(true);
      setHasStarted(true);
    }
  }, [isStatsInView, showLoader, hasStarted]);

  const handleLoaderComplete = () => {
    setShowLoader(false);
    // Start counting with a small delay after loader completes as fallback
    setTimeout(() => {
      setStartCounting(true);
    }, 1000);
  };

  if (showLoader) {
    return <PageLoader onComplete={handleLoaderComplete} />;
  }

  return (
    <div className="min-h-screen bg-stone-100 dark:bg-black text-black dark:text-white transition-colors duration-300 overflow-x-hidden">
      {/* Navigation Header */}
      <header className="fixed top-0 left-0 right-0 w-full z-50 bg-stone-100/95 dark:bg-black/95 backdrop-blur-sm transition-colors duration-300">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between lg:justify-center items-center h-16 lg:h-20 relative">
            {/* Logo */}
            <div className="lg:absolute lg:left-8 flex-shrink-0">
              <Link href="/">
                <span className="cursor-pointer text-lg lg:text-xl font-black uppercase text-black dark:text-white hover:text-black/70 dark:hover:text-white/70 transition-all duration-500 tracking-wider">ENSAIN</span>
              </Link>
            </div>
            
            {/* Back to Home */}
            <div className="lg:absolute lg:right-8">
              <Link href="/">
                <span className="cursor-pointer text-sm lg:text-base text-black dark:text-white hover:text-black/70 dark:hover:text-white/70 transition-all duration-500">← Back to Home</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section with Video Background */}
      <section className="min-h-screen bg-stone-100 dark:bg-black text-black dark:text-white pt-16 lg:pt-20 w-full overflow-x-hidden transition-colors duration-300">
        <div className="w-full px-4 sm:px-6 py-8 lg:py-24">
          {/* Hero Text */}
          <div className="text-center mb-8 lg:mb-16 w-full">
            <motion.h1 
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black uppercase leading-none mb-4 lg:mb-8 w-full"
              style={{ 
                letterSpacing: '0.1em',
                wordBreak: 'keep-all',
                overflowWrap: 'normal'
              }}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Who's ENSAIN?
            </motion.h1>
            
            <motion.h2 
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold uppercase tracking-wider mb-4 lg:mb-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              A NEW ERA.
            </motion.h2>
            
            <motion.div 
              className="max-w-4xl mx-auto mb-8 lg:mb-12 px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-6 lg:mb-8 text-black/80 dark:text-white/80">
                The future won't wait to move on , and neither will we. We combine human judgment with AI execution to{" "}
                <span className="text-black dark:text-white font-semibold">build systems that get things done</span> - faster, smarter, and at scale.
              </p>
            </motion.div>
          </div>

          {/* Video Section */}
          <motion.div 
            className="w-full max-w-6xl mx-auto px-0 lg:px-4 mb-12 lg:mb-20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <div className="relative aspect-[4/5] sm:aspect-[3/2] lg:aspect-[16/9] overflow-hidden shadow-2xl rounded-lg">
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                controls={false}
                preload="auto"
              >
                <source src="/videos/about.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Video Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-100/20 dark:from-black/20 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Profile Information Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Profile Information */}
            <motion.div
              className="space-y-4 lg:space-y-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="space-y-2 lg:space-y-3">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black dark:text-white">
                  HATEM, FOUNDER.
                </h2>
                <p className="text-base sm:text-lg lg:text-xl text-black/70 dark:text-white/70">
                  Ensain
                </p>
                {/* <p className="text-base sm:text-lg lg:text-xl text-black/70 dark:text-white/70">
                 
                </p>
                <p className="text-base sm:text-lg lg:text-xl text-black/70 dark:text-white/70">
                  Previously CEO-CTO Operations
                </p> */}
              </div>

              <div className="pt-6 lg:pt-8" ref={statsRef}>
                <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-12">
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black dark:text-white mb-1 lg:mb-2">
                      {count140}+
                    </div>
                    <div className="text-xs sm:text-sm lg:text-base text-black/60 dark:text-white/60">
                      Hours of work
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black dark:text-white mb-1 lg:mb-2">
                      {count30}+
                    </div>
                    <div className="text-xs sm:text-sm lg:text-base text-black/60 dark:text-white/60">
                      websites made
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black dark:text-white mb-1 lg:mb-2">
                      {count80}+
                    </div>
                    <div className="text-xs sm:text-sm lg:text-base text-black/60 dark:text-white/60">
                      Under Research
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Additional Content */}
            <motion.div
              className="space-y-6 lg:space-y-8"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="space-y-4">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-black dark:text-white">
                 OUR MISSION
                </h3>
                <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-black/70 dark:text-white/70">
                  To bridge the gap between human creativity and AI capability, creating systems that amplify human potential rather than replace it.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-black dark:text-white">
                 OUR APPROACH
                </h3>
                <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-black/70 dark:text-white/70">
                  We combine strategic thinking with cutting-edge technology to deliver solutions that are both innovative and practical.
                  We believe in the power of collaboration and clear communication. Every project begins with understanding your vision and goals, then we craft solutions that not only meet your needs but exceed your expectations. From concept to launch, we're with you every step of the way.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
<NewPart />
<NewFooter />
    </div>
  );
};

export default AboutPage; 
