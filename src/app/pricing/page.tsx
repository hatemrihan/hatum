"use client";

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import PricingLoader from '../../components/PricingLoader';
import wmmImage from '../../assets/images/wmm-image.jpg';
import wmmmImage from '../../assets/images/wmmm-image.jpg';
import gumImage from '../../assets/images/gum-image.png';
import gummImage from '../../assets/images/gumm-image.png';
import nouraImage from '../../assets/images/noura-image.png';
import nouraaImage from '../../assets/images/nouraa-image.png';
import WMImage from '../../assets/images/WM-image.jpg';
import Footer from '../../sections/Footer';

interface Project {
  title: string;
  mainImage: any;
  leftImage: any;
  rightImage: any;
  description: string;
  isUrl?: boolean;
  isVideo?: boolean;
}




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

const PricingPage = () => {
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

  // Add a useEffect to update the time and temperature dynamically
  useEffect(() => {
    function updateTimeAndTemp() {
      const now = new Date();
      // Egypt is UTC+2
      const egyptTime = new Date(now.toLocaleString('en-US', { timeZone: 'Africa/Cairo' }));
      const hours = egyptTime.getHours();
      const minutes = egyptTime.getMinutes().toString().padStart(2, '0');
      const ampm = hours >= 12 ? 'PM' : 'AM';
      const displayHour = hours % 12 === 0 ? 12 : hours % 12;
      const timeElem = document.getElementById('egypt-time');
      const tempElem = document.getElementById('egypt-temp');
      if (timeElem) timeElem.textContent = `${displayHour}:${minutes} ${ampm}`;
      if (tempElem) tempElem.textContent = '28';
    }
    updateTimeAndTemp();
    const interval = setInterval(updateTimeAndTemp, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleLoaderComplete = () => {
    setShowLoader(false);
    // Start counting with a small delay after loader completes as fallback
    setTimeout(() => {
      setStartCounting(true);
    }, 1000);
  };

  if (showLoader) {
    return <PricingLoader onComplete={handleLoaderComplete} />;
  }

  return (
    <>
    
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
              className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-black uppercase leading-none mb-4 lg:mb-8 w-full"
              style={{ 
                letterSpacing: '0.1em',
                wordBreak: 'keep-all',
                overflowWrap: 'normal'
              }}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              See the Masterpiece
            </motion.h1>
            
            <motion.h2 
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold uppercase tracking-wider mb-4 lg:mb-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
             Whatever you want to build, we'll.
            </motion.h2>
            
            <motion.div 
              className="max-w-4xl mx-auto mb-8 lg:mb-12 px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-6 lg:mb-8 text-black/80 dark:text-white/80">
                You won't wait, and neither will we. We combine human thoughts to convert them into{" "}
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
                {/* <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black dark:text-white">
                  Hatem Rihan, Founder
                </h2>
                <p className="text-base sm:text-lg lg:text-xl text-black/70 dark:text-white/70">
                  Seeker
                </p> */}
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

            {/* Creative Sales Section */}
           
          </div>
        </div>
      </section>


    </div>
     <ProjectShowcaseSection />
     <Footer />
   </>
  );
};

export default PricingPage;

// Project Showcase Component
const ProjectShowcaseSection = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [overlayActive, setOverlayActive] = useState<boolean>(false);
  
  const imageItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const overlayItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  // 4 Projects with imported images and URLs
  const projects: Project[] = [
   
    {
      title: "Home Council",
      mainImage: "/videos/homes.mp4",
      leftImage: gumImage,
      rightImage: gummImage,
      description: "Builiding and ready for sale ",
      isUrl: false,
      isVideo: true
    },
    {
      title: "nouraa",
      mainImage: "/videos/noura.mp4",
      leftImage: nouraImage,
      rightImage: nouraaImage,
      description: "Developed a unique portoflio for a talented graphic designer and photographer, this website is showcase two sections one for his work showing his art and the other for shooting images,so  happy to do a masterpiece customized for him.",
      isUrl: false,
      isVideo: true
    },
    {
      title: "WM",
      mainImage: WMImage,
      leftImage:wmmImage,
      rightImage:wmmmImage,
      description: "Developed a responsive well enahnced,unique and well UI/UX live website, Calisthenics club based in Cairo,Egypt. where the user can see the club's events,classes, reservations and more.",
      isUrl: false,
      isVideo: false
    },
    
  ];

  const handleHover = (index: number) => {
    if (!overlayActive) {
      setActiveIndex(index);
      imageItemsRef.current.forEach((item, i) => {
        if (item) {
          item.style.opacity = i === index ? '1' : '0';
        }
      });
    }
  };

  const handleProjectClick = (url: string) => {
    window.open(url, '_blank');
  };

  const openOverlay = (index: number) => {
    setActiveIndex(index);
    setOverlayActive(true);
    const overlayItem = overlayItemsRef.current[index];
    if (overlayItem) {
      overlayItem.style.display = 'block';
      // Trigger smooth animation
      setTimeout(() => {
        overlayItem.style.opacity = '1';
        overlayItem.style.transform = 'translateY(0)';
      }, 10);
    }
  };

  const closeOverlay = () => {
    setOverlayActive(false);
    overlayItemsRef.current.forEach(item => {
      if (item) {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        setTimeout(() => {
          item.style.display = 'none';
        }, 300);
      }
    });
  };

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeOverlay();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const getImageSrc = (imageObj: any) => {
    if (typeof imageObj === 'string') return imageObj;
    if (imageObj && typeof imageObj === 'object' && imageObj.src) return imageObj.src;
    if (imageObj && typeof imageObj === 'object' && imageObj.default) return imageObj.default;
    return imageObj;
  };

  const renderMedia = (project: Project, className: string) => {
    if (project.isVideo) {
      return (
        <video
          className={className}
          autoPlay
          muted
          loop
          playsInline
          controls={false}
          preload="auto"
        >
          <source src={project.mainImage} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    } else {
      return (
        <img 
          src={getImageSrc(project.mainImage)} 
          alt={project.title} 
          className={className}
        />
      );
    }
  };

  return (
     <section ref={sectionRef} className="relative min-h-screen bg-stone-100 dark:bg-black text-black dark:text-white p-4 sm:p-6 lg:p-8 transition-colors duration-300" id="Projects">
     <motion.div 
       className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-8 lg:mb-12 opacity-80 text-center"
       initial={{ opacity: 0, y: 30 }}
       animate={isInView ? { opacity: 0.8, y: 0 } : { opacity: 0, y: 30 }}
       transition={{ duration: 0.6, delay: 0.1 }}
     >
       — What We Are Building
     </motion.div>
     <motion.div 
       className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 h-full max-w-5xl mx-auto"
       initial={{ opacity: 0, y: 50 }}
       animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
       transition={{ duration: 0.8, delay: 0.2 }}
     >
       {/* Mobile & Tablet: Titles first */}
       <motion.div 
         className="flex items-center lg:hidden order-first"
         initial={{ opacity: 0, x: -50 }}
         animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
         transition={{ duration: 0.6, delay: 0.4 }}
       >
         <ul className="w-full flex flex-col justify-center items-start space-y-3 sm:space-y-4 list-none">
           {projects.map((project, index) => (
             <motion.li 
               key={`title-mobile-${index}`}
               className={`transition-opacity duration-200 relative group ${activeIndex === index ? 'font-bold' : ''}`}
               onMouseEnter={() => handleHover(index)}
               initial={{ opacity: 0, y: 20 }}
               animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
               transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
             >
               <button 
                 className="bg-transparent border-0 p-0 text-black dark:text-white font-['PP_Neue_Montreal',Arial,sans-serif] cursor-pointer w-full text-left"
                 onClick={() => openOverlay(index)}
               >
                 <h2 className="main-title text-lg sm:text-xl md:text-2xl font-medium tracking-tight relative
                   after:absolute after:content-[''] after:top-1/2 after:right-[-1rem] sm:after:right-[-1.5rem] after:w-4 sm:after:w-6 after:h-0.5 
                   after:rounded-full after:bg-current after:opacity-0 after:transition-all after:duration-500 
                   after:transform after:translate-x-full after:scale-0 
                   group-hover:after:translate-x-0 group-hover:after:scale-100 group-hover:after:opacity-100 group-hover:after:w-2">
                   {index === activeIndex ? "→ " : ""}{project.title}
                 </h2>
               </button>
             </motion.li>
           ))}
         </ul>
       </motion.div>
       
       {/* Images - Reduced sizing for better viewing */}
       <motion.div 
         className="relative h-[250px] sm:h-[300px] lg:h-[400px] order-2 lg:order-1"
         initial={{ opacity: 0, scale: 0.9 }}
         animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
         transition={{ duration: 0.8, delay: 0.3 }}
       >
         <div className="relative w-full h-full">
           {projects.map((project, index) => (
             <div 
               key={index}
               className="absolute w-full h-full transition-opacity duration-300" 
               ref={(el) => { imageItemsRef.current[index] = el; }}
               style={{ opacity: index === 0 ? 1 : 0 }}
             >
               {renderMedia(project, "w-full h-full object-cover rounded-lg shadow-lg")}
             </div>
           ))}
         </div>
       </motion.div>
       
       {/* Desktop: Titles on right */}
       <motion.div 
         className="hidden lg:flex items-center order-3"
         initial={{ opacity: 0, x: 50 }}
         animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
         transition={{ duration: 0.6, delay: 0.4 }}
       >
         <ul className="w-full flex flex-col justify-center items-end space-y-3 xl:space-y-4 list-none pr-4 xl:pr-6">
           {projects.map((project, index) => (
             <motion.li 
               key={`title-${index}`}
               className={`transition-opacity duration-200 relative group cursor-pointer ${activeIndex === index ? 'text-black dark:text-white' : 'text-black/80 dark:text-white/80'}`} 
               onMouseEnter={() => handleHover(index)}
               initial={{ opacity: 0, y: 20 }}
               animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
               transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
             >
               <button 
                 className="bg-transparent border-0 p-0 font-['PP_Neue_Montreal',Arial,sans-serif] cursor-pointer text-right"
                 onClick={() => openOverlay(index)}
               >
                 <h2 className="main-title text-xl xl:text-2xl 2xl:text-3xl font-medium tracking-tight relative
                   after:absolute after:content-[''] after:top-1/2 after:left-[-1.5rem] after:w-6 after:h-0.5 
                   after:rounded-full after:bg-current after:opacity-0 after:transition-all after:duration-500 
                   after:transform after:translate-x-[-100%] after:scale-0 
                   group-hover:after:translate-x-0 group-hover:after:scale-100 group-hover:after:opacity-100 group-hover:after:w-2">
                   {project.title} {index === activeIndex ? " ←" : ""}
                 </h2>
               </button>
             </motion.li>
           ))}
         </ul>
       </motion.div>
     </motion.div>
     
     {/* Overlay - Mobile responsive with reduced sizes */}
     <div className="fixed inset-0 z-50 pointer-events-none">
       {projects.map((project, index) => (
         <div 
           key={`overlay-${index}`}
           className="overlay-item hidden pb-16 pointer-events-auto bg-stone-100 dark:bg-black text-black dark:text-white h-full overflow-y-auto transition-all duration-300 ease-out"
           ref={(el) => { 
             overlayItemsRef.current[index] = el;
             if (el) {
               el.style.opacity = '0';
               el.style.transform = 'translateY(20px)';
             }
           }}
         >
           <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-24 pb-16 sm:pb-20 lg:pb-24">
             <div className="flex flex-col items-center mb-8 lg:mb-12">
               <div className="text-center mb-6 lg:mb-8">
                 <a 
                   target="_blank"
                   rel="noopener noreferrer"
                   className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium text-black dark:text-white hover:opacity-70 transition-opacity duration-200 underline decoration-2 underline-offset-4 sm:underline-offset-6 cursor-pointer block"
                   style={{ fontFamily: "'Panchang-Bold', 'Panchang-Variable', sans-serif" }}
                 >
                   {project.title}
                 </a>
               </div>
               <div className="w-full max-w-3xl h-[35vh] sm:h-[45vh] lg:h-[55vh]">
                 {renderMedia(project, "w-full h-full object-cover rounded-lg")}
               </div>
             </div>
             <div className="overlay-row grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 mb-8 lg:mb-12">
               <div className="flex flex-col gap-4 lg:gap-6">
                 <div className="h-[200px] sm:h-[250px] lg:h-[300px]">
                   <img 
                     src={getImageSrc(project.leftImage)} 
                     alt="" 
                     className="w-full h-full object-cover rounded-lg" 
                   />
                 </div>
               </div>
               <div className="flex flex-col gap-4 lg:gap-6">
                 <div className="h-[200px] sm:h-[250px] lg:h-[300px]">
                   <img 
                     src={getImageSrc(project.rightImage)} 
                     alt="" 
                     className="w-full h-full object-cover rounded-lg" 
                   />
                 </div>
                 <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-black/90 dark:text-white/90">{project.description}</p>
               </div>
             </div>
             {/* Navigation buttons - Mobile responsive */}
             <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 lg:pt-8 border-t border-black/10 dark:border-white/10">
               <button 
                 className="bg-transparent border-0 p-0 text-black dark:text-white hover:opacity-70 transition-opacity duration-200 cursor-pointer order-2 sm:order-1"
                 onClick={closeOverlay}
               >
                 <p className="text-base lg:text-lg">Back to list</p>
               </button>
               <p className="text-sm lg:text-lg text-black/70 dark:text-white/70 order-1 sm:order-2">Scroll to explore</p>
             </div>
           </div>
         </div>
       ))}
     </div>
   </section>
  );
};