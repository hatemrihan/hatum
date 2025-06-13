"use client";

import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import '../assets/Fonts/WEB/css/panchang.css';

// Import all images
import iflaggImage from '../assets/images/iflagg-image.png';
import iflagggImage from '../assets/images/iflaggg-image.png';
import naderrImage from '../assets/images/naderr-image.png';
import naderrrImage from '../assets/images/naderrr-image.png';
import faraggImage from '../assets/images/faragg-image.png';
import faragImage from '../assets/images/farag-image.png';
import eleveImage from '../assets/images/eleve-image.png';
import eleveeImage from '../assets/images/elevee-image.png';
import eleveeeImage from '../assets/images/eleveee-image.png';

interface Project {
  title: string;
  mainImage: any;
  leftImage: any;
  rightImage: any;
  description: string;
  url: string;
  isVideo?: boolean;
}

// Interactive Project Showcase Component
const Projects = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [overlayActive, setOverlayActive] = useState<boolean>(false);
  
  const imageItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const overlayItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  // 4 Projects with imported images and URLs
  const projects: Project[] = [
   
    {
      title: "NaderEmad",
      mainImage: "/videos/nadervid.mp4",
      leftImage: naderrImage,
      rightImage: naderrrImage,
      description: "Developed a unique portfolio website for a talented Coach, designed to showcase his coaching services and expertise, everything is customized and unique for Coach Nader.",
      url: "https://nader-emad.vercel.app/",
      isVideo: true
    },
    {
      title: "Farag",
      mainImage: "/videos/scene.mp4",
      leftImage: faraggImage,
      rightImage: faragImage,
      description: "Developed a unique portoflio for a talented graphic designer and photographer, this website is showcase two sections one for his work showing his art and the other for shooting images,so  happy to do a masterpiece customized for him.",
      url: "https://faragg.netlify.app/",
      isVideo: true
    },
    {
      title: "IFLAG",
      mainImage: "/videos/iflag.MP4",
      leftImage: iflaggImage,
      rightImage: iflagggImage,
      description: "Developed a responsive well enahnced,unique and well UI/UX live website, Calisthenics club based in Cairo,Egypt. where the user can see the club's events,classes, reservations and more.",
      url: "https://iflaggg.vercel.app/",
      isVideo: true
    },
    {
      title: "Eleve",
      mainImage: eleveeeImage,
      leftImage: eleveImage,
      rightImage: eleveeImage,
      description: " what's fascinating about this project? It's not just another admin dashboard – it's a complete e-commerce ecosystem that solves real business problems I see companies struggling with every day. Here's what makes this special:  Business Intelligence Most e-commerce platforms give you basic order lists. We built something that actually understands your business. The dashboard doesn't just show you numbers – it shows you patterns. Revenue trends, customer behavior, product performance... it's like having a business analyst working 24/7. The Ambassador Program Integration This is where it gets interesting. We didn't just build affiliate tracking – we built a complete relationship management system. Every ambassador has their own journey, their own analytics, their own performance metrics. It's like CRM meets affiliate marketing, and it's beautiful. Smart Operational Features Here's something most developers miss: we built the export functionality specifically for shipping companies. No unit prices, no coupon codes – just the data they need. That's not coding, that's understanding business flow.  User Experience That Actually Works Dark mode isn't just trendy – it's practical for people managing orders at 2 AM. Mobile responsiveness isn't just about looking good – it's about checking orders while you're away from your desk. Every pixel serves a purpose. Technical Sophistication Next.js 14 with App Router, real-time updates, dynamic components, proper state management... but here's the thing – the tech stack isn't the hero. The business logic is. We built something that scales not just technically, but operationally.  What I'm Most Proud Of The system thinks ahead. It doesn't just manage your current orders – it helps you understand your business trajectory. Want to know which products to restock? Which ambassadors to invest in? Which regions are performing best? It's all there. The Real Value? Most e-commerce tools are built by developers who've never run an online business. This was built by someone who understands that every click costs time, every extra step costs money, and every insight drives growth. That's not just development – that's partnership.",
      url: "https://elevee.netlify.app/",
      isVideo: false
    }
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
    if (typeof window !== 'undefined') {
      window.open(url, '_blank');
    }
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
    if (typeof window === 'undefined') return;
    
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
                    href={project.url}
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

export default Projects; 