"use client";

import { FC, useEffect, useState, MouseEvent } from "react";
import { motion, useInView, useAnimate } from "framer-motion";
import { SimpleThemeToggle } from '../components/SimpleThemeToggle';


const navItems = [
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Selected Works",
    href: "#Projects",
  },
  {
    label: "Shop",
    href: "/pricing",
  },
  {
    label: "Client Agreement",
    href: "/client-agreement",
  },
 
  {
    label: "FQ",
    href: "#AnotherFAQs",
  },
  {
    label: "Get in touch",
    href: "#NewFooter",
  },
 
];

const AnotherHeader: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navScope, navAnimate] = useAnimate();
  const [mounted, setMounted] = useState(false);
  const [showLoader, setShowLoader] = useState(false);

  // Initialize theme toggle
  useEffect(() => {
    setMounted(true);
  }, []);

  // Initialize navigation to closed state on mount and after page refresh
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    // Ensure nav starts closed
    setIsOpen(false);
    
    // Prevent horizontal scrolling completely
    if (typeof document !== 'undefined') {
      document.body.style.overflowX = 'hidden';
      document.documentElement.style.overflowX = 'hidden';
    }
    
    // Initialize nav height to 0
    if (navScope.current) {
      navScope.current.style.height = '0px';
    }
    
    return () => {
      if (typeof document !== 'undefined') {
        document.body.style.overflowX = 'auto';
        document.documentElement.style.overflowX = 'auto';
      }
    };
  }, [navScope]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    if (isOpen) {
      navAnimate(navScope.current, {
        height: "100vh"
      },
      {
        duration: 0.7,
      });
      // Prevent body scroll when nav is open
      if (typeof document !== 'undefined') {
        document.body.style.overflow = 'hidden';
      }
    } else {
      navAnimate(navScope.current, {
        height: 0
      });
      // Restore body scroll when nav is closed
      if (typeof document !== 'undefined') {
        document.body.style.overflow = 'auto';
      }
    }
  }, [isOpen, navScope, navAnimate]);

  const handleClickMobileNavItem = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsOpen(false);
    const url = new URL(e.currentTarget.href);
    
    if (typeof window === 'undefined') return;
    
    // Always navigate to /about if that's the link
    if (url.pathname === '/about') {
      window.location.href = '/about';
      return;
    }
    // Handle external routes
    if (url.pathname !== window.location.pathname) {
      window.location.href = url.href;
      return;
    }
    // Handle internal hash navigation
    const hash = url.hash;
    const target = document.querySelector(hash);
    if (!target) return;
    target.scrollIntoView({behavior:'smooth'});
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


 
  const handleLoaderComplete = () => {
    setShowLoader(false);
    if (typeof window !== 'undefined') {
      window.location.href = '/about';
    }
  };

  return (
    <div className="overflow-x-hidden w-full">
    
      {/* Navigation Header */}
      <header className="relative w-full">
        {/* Mobile Sliding Navigation */}
        <div className="fixed top-0 left-0 w-full h-0 overflow-hidden z-40 bg-stone-100 dark:bg-black transition-colors duration-300" ref={navScope}>
          <nav className="mt-16 sm:mt-20 flex flex-col w-full">
          {navItems.map(({label, href}) => (
            <a 
              href={href} 
              key={label} 
                className="text-black dark:text-white border-t last:border-b border-black/10 dark:border-white/10 py-6 sm:py-8 group/nav-items relative isolate bg-stone-100 dark:bg-black w-full transition-colors duration-300" 
              onClick={handleClickMobileNavItem}
            >
                <div className="container mx-auto px-4 sm:px-6 flex items-center justify-start bg-stone-100 dark:bg-black">
                  <div className="absolute w-full h-0 bg-black/5 dark:bg-white/5 group-hover/nav-items:h-full transition-all duration-500 bottom-0 -z-10"></div>
                  <span className="text-2xl sm:text-3xl group-hover/nav-items:pl-4 transition-all duration-500 font-medium">{label}</span>
              </div>
            </a>
          ))}
            
            {/* Theme Toggle inside Mobile Menu */}
            <div className="border-t border-black/10 dark:border-white/10 py-6 sm:py-8 bg-stone-100 dark:bg-black transition-colors duration-300">
              <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
                <span className="text-2xl sm:text-3xl font-medium text-black dark:text-white">Theme</span>
                <SimpleThemeToggle />
              </div>
            </div>
        </nav>
      </div>

        {/* Fixed Header - Always on top */}
        <div className="fixed top-0 left-0 right-0 w-full z-50 bg-stone-100/95 dark:bg-black/95 backdrop-blur-sm transition-colors duration-300">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between lg:justify-center items-center h-16 lg:h-20 relative">
              {/* Logo */}
              <div className="lg:absolute lg:left-8 flex-shrink-0">
              <a href="/">
                  <span className="cursor-pointer text-md lg:text-xl font-black uppercase text-black dark:text-white hover:text-black/70 dark:hover:text-white/70 transition-all duration-500 tracking-wider">ENSAIN</span>
              </a>
            </div>
              
              {/* Desktop Navigation - Centered */}
              <nav className="hidden lg:flex items-center justify-center space-x-8 xl:space-x-12">
                {navItems.map(({label, href}) => (
                  <a 
                    href={href} 
                    key={label} 
                    className="relative text-black dark:text-white hover:text-black/70 dark:hover:text-white/70 transition-colors duration-300 text-base font-medium py-2 group"
                    onClick={(e) => {
                      e.preventDefault();
                      if (typeof window === 'undefined') return;
                      
                      if (href === '/about') {
                        window.location.href = '/about';
                        return;
                      }
                      if (href.startsWith('/')) {
                        window.location.href = href;
                        return;
                      }
                      const target = document.querySelector(href);
                      if (target) target.scrollIntoView({behavior:'smooth'});
                    }}
              >
                    {label}
                    {/* Hover line effect */}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black dark:bg-white transition-all duration-300 group-hover:w-full"></span>
                  </a>
                ))}
              </nav>
              
              {/* Desktop Theme Toggle */}
              <div className="hidden lg:flex lg:absolute lg:right-8 items-center">
                <SimpleThemeToggle />
              </div>
              
              {/* Mobile Menu Button - Always Visible on Top */}
              <div className="lg:hidden flex items-center">
                <button 
                  className="text-black dark:text-white font-black text-lg uppercase tracking-wider hover:opacity-70 transition-opacity duration-300 relative z-10 px-2 py-1" 
                  onClick={toggleMenu}
                  aria-label={isOpen ? 'Close menu' : 'Open menu'}
                >
                  {isOpen ? 'CLOSE' : 'MENU'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section - Updated for dark mode */}
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
              E N S A I N
            </motion.h1>
            
            <motion.h2 
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold uppercase tracking-wider mb-4 lg:mb-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              THE END OF LIMITS.
            </motion.h2>
            
            <motion.div 
              className="max-w-4xl mx-auto mb-8 lg:mb-12 px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-6 lg:mb-8 text-black/80 dark:text-white/80">
                The future won't wait, and neither will we. We combine human judgment with AI execution to{" "}
                <span className="text-black dark:text-white font-semibold">build systems that get things done</span> - faster, smarter, and at scale.
              </p>
              
              <a href="/client-agreement">
              <motion.button 
                className="inline-flex items-center px-6 py-3 lg:px-8 lg:py-4 bg-black dark:bg-stone-100 text-stone-100 dark:text-black font-semibold rounded-full hover:bg-black/80 dark:hover:bg-stone-100/80 transition-all duration-300 text-sm lg:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                Connect now
              </motion.button>
              </a>
            </motion.div>
          </div>

          {/* Video Section */}
          <motion.div 
            className="w-full max-w-6xl mx-auto px-0 lg:px-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
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
                <source src="https://ext.same-assets.com/3527148141/645958585.octet-stream" type="video/webm" />
                <source src="https://ext.same-assets.com/3527148141/645958585.octet-stream" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Video Overlay - Updated for dark mode */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-100/20 dark:from-black/20 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </motion.div>
        </div>
      </section>
      </div>
  );
};

export default AnotherHeader;