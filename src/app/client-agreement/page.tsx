"use client";

import React, { useEffect, useState, MouseEvent } from "react";
import { motion, useAnimate } from "framer-motion";
import { SimpleThemeToggle } from '../../components/SimpleThemeToggle';

import Link from 'next/link';
import RobustVideo from "../../components/RobustVideo";

const navItems = [
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Selected Works",
    href: "/",
  },
  {
    label: "FQ",
    href: "/",
  },
  {
    label: "Client Agreement",
    href: "/client-agreement",
  },
  {
    label: "shop",
    href: "/pricing",
  },
];

const ClientAgreementPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navScope, navAnimate] = useAnimate();
  const [mounted, setMounted] = useState(false);

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
    
    // Handle external routes (like /about, /client-agreement)
    if (typeof window !== 'undefined' && url.pathname !== window.location.pathname) {
      window.location.href = url.href;
      return;
    }
    
    // Handle internal hash navigation
    const hash = url.hash;
    if (typeof window !== 'undefined') {
      const target = document.querySelector(hash);
      if (!target) return;
      target.scrollIntoView({behavior:'smooth'});
    }
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen);
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
                <Link href="/">
                  <span className="cursor-pointer text-lg lg:text-base font-bold uppercase text-black dark:text-white hover:text-black/70 dark:hover:text-white/70 transition-all duration-500">ENSAIN</span>
                </Link>
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
                      const url = new URL(e.currentTarget.href);
                      
                      // Handle external routes (like /about, /client-agreement)
                      if (typeof window !== 'undefined' && url.pathname !== window.location.pathname) {
                        window.location.href = url.href;
                        return;
                      }
                      
                      // Handle internal hash navigation
                      const hash = url.hash;
                      if (typeof window !== 'undefined') {
                        const target = document.querySelector(hash);
                        if (target) target.scrollIntoView({behavior:'smooth'});
                      }
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
                  className="text-black dark:text-white font-black text-base sm:text-lg uppercase tracking-wider hover:opacity-70 transition-opacity duration-300 relative z-10 px-3 py-2 min-w-[60px] min-h-[44px] flex items-center justify-center" 
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

      {/* CLIENT AGREEMENT Section */}
      <section className="min-h-screen bg-stone-100 dark:bg-black text-black dark:text-white pt-16 lg:pt-20 w-full overflow-x-hidden transition-colors duration-300 relative">
        {/* WebGL Background */}
        <div id="webgl-background" className="absolute inset-0 z-0 opacity-20"></div>
        
        <div className="relative z-10 w-full px-4 sm:px-6 py-8 lg:py-24">
          {/* CLIENT AGREEMENT Text */}
          <div className="text-center mb-8 lg:mb-16 w-full">
            <motion.h1 
              className="text-3xl sm:text-3xl md:text-6xl lg:text-7xl xl:text-9xl font-black uppercase leading-none mb-4 lg:mb-8 w-full"
              style={{ 
                letterSpacing: '0.1em',
                wordBreak: 'keep-all',
                overflowWrap: 'normal'
              }}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              CLIENT<br />
              AGREEMENT
            </motion.h1>
          </div>

          {/* Video Section */}
          <motion.div 
            className="w-full max-w-6xl mx-auto px-0 lg:px-4 mb-12 lg:mb-20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="relative aspect-[4/5] sm:aspect-[3/2] lg:aspect-[16/9] overflow-hidden shadow-2xl rounded-lg">
              <RobustVideo
                src="/videos/octat.mp4"
                className="w-full h-full object-cover"
                autoPlay={true}
                muted={true}
                loop={true}
                playsInline={true}
                controls={false}
                preload="auto"
              />
              
              {/* Video Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-100/20 dark:from-black/20 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </motion.div>

          {/* Agreement Topics Carousel */}
          <AgreementCarousel />

          {/* Contact Form Section */}
          <ContactForm />
        </div>
      </section>

      {/* WebGL Background - Removed to prevent SSR Html import errors */}
    </div>
  );
};

// Agreement Carousel Component
const AgreementCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "INTRO",
      content: (
        <>
          <p>This Client Agreement ("Agreement") is entered into between The Client, hereinafter referred to as the "Client," and ENSAIN , a development studio based in Egypt, hereinafter referred to as "the ENS."</p>
          <p>Any use of "I" refers to design concept, development, branding, ideas, concepts and materials and any and all work that results from any project.</p>
          <p>By engaging with ENSAIN  for development/design services, the Client agrees to the terms and conditions outlined in this Agreement.</p>
        </>
      )
    },
    {
      id: 2,
      title: "SCOPE OF WORK",
      content: (
        <>
          <p><strong>2.1)</strong> The ENS agrees to provide development/design services to the Client as outlined in the attached proposal signed by both parties. The scope of work, deliverables, and project timeline will be detailed in the received project proposal.</p>
          <p><strong>2.2)</strong> Two (2) rounds of edits/revisions are included within the quoted price. The Client must respond to revision requests, further revisions will be charged at an hourly rate as specified in the proposal.</p>
        </>
      )
    },
    {
      id: 3,
      title: "FEES AND PAYMENTS",
      content: (
        <>
          <p><strong>3.1) Payment Terms:</strong> The Client agrees to pay the total project fee as outlined in the project proposal. Payment schedule will be 50% upfront deposit, with remaining balance due upon project completion.</p>
          <p><strong>3.2) Late Payments:</strong> Invoices are due within 30 days. Late payments may incur a 1.5% monthly service charge.</p>
          <p><strong>3.3) Additional Work:</strong> Any work beyond the agreed scope will be billed separately at our standard hourly rate.</p>
        </>
      )
    },
    {
      id: 4,
      title: "PROJECT MANAGEMENT",
      content: (
        <>
          <p><strong>4.1) Communication:</strong> All project communication will be conducted via email and scheduled video calls. The Client agrees to respond to requests for information within 5 business days.</p>
          <p><strong>4.2) Timeline:</strong> Project timelines are estimates based on receiving timely feedback and materials from the Client.</p>
          <p><strong>4.3) Deliverables:</strong> All final files will be delivered electronically in the formats specified in the project proposal.</p>
        </>
      )
    },
    {
      id: 5,
      title: "TERMINATION",
      content: (
        <>
          <p><strong>5.1)</strong> Either party may terminate this agreement with 14 days written notice. The Client will be billed for work completed up to the termination date.</p>
          <p><strong>5.2)</strong> Upon termination, all work completed to date becomes property of the Client upon final payment of all outstanding invoices.</p>
          <p><strong>5.3)</strong> ENSIAN reserves the right to terminate the agreement immediately in case of non-payment or breach of contract.</p>
        </>
      )
    },
    {
      id: 6,
      title: "CONFLICT OF INTEREST",
      content: (
        <>
          <p><strong>6.1)</strong> ENSAIN will disclose any potential conflicts of interest before beginning work and obtain written consent from the Client to proceed.</p>
          <p><strong>6.2)</strong> ENSAIN agrees not to work on directly competing projects during the duration of this agreement without prior written consent.</p>
          <p><strong>6.3)</strong> All conflicts of interest will be resolved in favor of the Client's best interests.</p>
        </>
      )
    },
    {
      id: 7,
      title: "CONFIDENTIALITY",
      content: (
        <>
          <p><strong>7.1)</strong> Both parties agree to maintain confidentiality of proprietary information shared during the project.</p>
          <p><strong>7.2)</strong> ENSIAN will not disclose any confidential business information, trade secrets, or proprietary data without written consent.</p>
          <p><strong>7.3)</strong> This confidentiality agreement remains in effect for 5 years after project completion.</p>
        </>
      )
    },
    {
      id: 8,
      title: "INDEMNIFICATION",
      content: (
        <>
          <p><strong>8.1)</strong> The Client agrees to indemnify and hold harmless the Studio from any claims arising from the use of completed work.</p>
          <p><strong>8.2)</strong> ENSIAN's liability is limited to the total amount paid for the project.</p>
          <p><strong>8.3)</strong> Neither party will be liable for indirect, incidental, or consequential damages.</p>
        </>
      )
    },
    {
      id: 9,
      title: "SUB-CONTRACTORS",
      content: (
        <>
          <p><strong>9.1)</strong> ENSIAN may engage qualified sub-contractors to complete portions of the work, subject to the same confidentiality and quality standards.</p>
          <p><strong>9.2)</strong> All sub-contractors will be bound by the same terms and conditions as outlined in this agreement.</p>
          <p><strong>9.3)</strong> ENSIAN remains fully responsible for all work performed by sub-contractors.</p>
        </>
      )
    },
    {
      id: 10,
      title: "INTELLECTUAL PROPERTY",
      content: (
        <>
          <p><strong>10.1) Ownership:</strong> Upon full payment, the Client will own the final delivered work. ENSAIN retains rights to preliminary concepts, sketches, and unused designs.</p>
          <p><strong>10.2) Portfolio Rights:</strong> ENSAIN reserves the right to display completed work in portfolios, websites, and promotional materials.</p>
          <p><strong>10.3) Third-Party Assets:</strong> Any stock photography, fonts, or other third-party materials used will require separate licensing by the Client.</p>
        </>
      )
    },
    {
      id: 11,
      title: "TERMS AND CONDITIONS",
      content: (
        <>
          <p><strong>11.1) Governing Law:</strong> This agreement will be governed by the laws of Egypt and any disputes will be resolved through arbitration.</p>
          <p><strong>11.2) Force Majeure:</strong> Neither party will be liable for delays caused by circumstances beyond their reasonable control.</p>
          <p><strong>11.3) Amendments:</strong> Any changes to this agreement must be made in writing and signed by both parties.</p>
        </>
      )
    },
    {
      id: 12,
      title: "ACCEPTANCE OF AGREEMENT",
      content: (
        <>
          <p><strong>12.1)</strong> By signing below or by making payment for services, the Client acknowledges that they have read, understood, and agree to be bound by all terms and conditions outlined in this agreement.</p>
          <p><strong>12.2)</strong> This agreement becomes effective upon signature by both parties or upon receipt of initial payment, whichever comes first.</p>
          <div className="mt-6 pt-6 border-t border-black/20 dark:border-white/20">
            <p className="font-semibold">Contact: contact@ensain.com</p>
          </div>
        </>
      )
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <motion.div 
      className="w-full max-w-6xl mx-auto"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
    >
      <div className="relative">
        {/* Mobile Layout - Better responsive design */}
        <div className="lg:hidden">
          <div className="relative min-h-[70vh] sm:min-h-[80vh] py-6 px-4 sm:px-6">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                  index === currentSlide ? 'opacity-100 translate-x-0' : 
                  index < currentSlide ? 'opacity-0 -translate-x-full' : 'opacity-0 translate-x-full'
                }`}
              >
                <div className="flex flex-col h-full pt-6 px-2 sm:px-4 overflow-y-auto">
                  {/* Topic Title (Mobile) */}
                  <div className="flex-shrink-0 mb-6">
                    <div className="font-black uppercase leading-tight text-black dark:text-white">
                      <div className="text-xl sm:text-2xl opacity-70 mb-2">{String(slide.id).padStart(2, '0')}</div>
                      {slide.title.split(' ').map((word, i) => (
                        <div key={i} className="leading-none text-lg sm:text-xl md:text-2xl">{word}</div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Content (Mobile) */}
                  <div className="flex-1 overflow-y-auto">
                    <div className="client-agreement-content text-sm sm:text-base leading-relaxed space-y-4 text-black dark:text-white pr-2">
                      {slide.content}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Navigation Arrows - Mobile */}
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 z-20
                text-black dark:text-white p-2
                transition-all duration-200 hover:scale-110 hover:opacity-70"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 z-20
                text-black dark:text-white p-2
                transition-all duration-200 hover:scale-110 hover:opacity-70"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Slide Counter - Mobile */}
            <div className="absolute top-4 right-4 bg-black/5 dark:bg-white/5 rounded-lg px-2 py-1 text-black dark:text-white text-xs font-medium">
              {currentSlide + 1} / {slides.length}
            </div>
          </div>
        </div>

        {/* Desktop Layout - Split design without box */}
        <div className="hidden lg:block">
          <div className="relative min-h-[600px] py-12 px-20 xl:px-24">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                  index === currentSlide ? 'opacity-100 translate-x-0' : 
                  index < currentSlide ? 'opacity-0 -translate-x-full' : 'opacity-0 translate-x-full'
                }`}
              >
                <div className="grid grid-cols-10 gap-12 xl:gap-16 h-full items-center px-12 xl:px-16">
                  {/* Left Side - Topic Title (Desktop) */}
                  <div className="col-span-3">
<div className="font-black uppercase leading-tight text-black dark:text-white">
  <div className="text-xl xl:text-2xl opacity-70 mb-2">{String(slide.id).padStart(2, '0')}</div>
  {slide.title.split(' ').map((word, i) => (
    <div key={i} className="leading-none text-2xl xl:text-3xl 2xl:text-4xl">{word}</div>
  ))}
</div>
                  </div>
                  
                  {/* Right Side - Content (Desktop) */}
                  <div className="col-span-7">
<div className="text-base lg:text-lg xl:text-xl leading-relaxed space-y-4 lg:space-y-5 text-black dark:text-white">
  {slide.content}
</div>
                  </div>
                </div>
              </div>
            ))}

            {/* Navigation Arrows - Desktop (No Background) */}
            <button
              onClick={prevSlide}
              className="absolute -left-8 xl:-left-10 top-1/2 transform -translate-y-1/2 z-20
   text-black dark:text-white p-4
   transition-all duration-200 hover:scale-110 hover:opacity-70"
            >
              <svg className="w-7 h-7 xl:w-8 xl:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute -right-8 xl:-right-10 top-1/2 transform -translate-y-1/2 z-20
   text-black dark:text-white p-4
   transition-all duration-200 hover:scale-110 hover:opacity-70"
            >
              <svg className="w-7 h-7 xl:w-8 xl:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Slide Counter - Desktop */}
            <div className="absolute top-4 right-8 bg-black/5 dark:bg-white/5 rounded-lg px-3 py-1 text-black dark:text-white text-sm font-medium">
              {currentSlide + 1} / {slides.length}
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center mt-6 lg:-mt-36 space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-200 ${
                index === currentSlide 
                  ? 'bg-black dark:bg-white scale-125' 
                  : 'bg-black/30 dark:bg-white/30 hover:bg-black/50 dark:hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
  
};


// Contact Form Component
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div 
      className="w-full max-w-4xl mx-auto mt-16 lg:mt-24"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.8 }}
    >
      {/* Contact Form Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-black dark:text-white mb-4">
          GET IN 
        </h2>
        <p className="text-sm sm:text-base lg:text-lg text-black/70 dark:text-white/70">
         Lets prepare a masterpiece for you.
        </p>
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
        {/* Name and Email Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-black dark:text-white uppercase tracking-wider">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-0 py-3 bg-stone-100 border-0 border-b-2 border-black/20 dark:border-white/20 
   text-black dark:text-white placeholder-black/50 dark:placeholder-white/50
   focus:border-black dark:focus:border-white focus:outline-none transition-colors duration-300
   text-sm sm:text-base"
              placeholder="Your full name"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-black dark:text-white uppercase tracking-wider">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-0 py-3 bg-stone-100 border-0 border-b-2 border-black/20 dark:border-white/20 
   text-black dark:text-white placeholder-black/50 dark:placeholder-white/50
   focus:border-black dark:focus:border-white focus:outline-none transition-colors duration-300
   text-sm sm:text-base"
              placeholder="your.email@example.com"
            />
          </div>
        </div>

        {/* Phone Number */}
        <div className="space-y-2">
          <label htmlFor="phone" className="block text-sm font-medium text-black dark:text-white uppercase tracking-wider">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-0 py-3 bg-stone-100 border-0 border-b-2 border-black/20 dark:border-white/20 
 text-black dark:text-white placeholder-black/50 dark:placeholder-white/50
 focus:border-black dark:focus:border-white focus:outline-none transition-colors duration-300
 text-sm sm:text-base"
            placeholder="+20 123456789"
          />
        </div>

        {/* Message */}
        <div className="space-y-2">
          <label htmlFor="message" className="block text-sm font-medium text-black dark:text-white uppercase tracking-wider">
            Your Message *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-black/20 dark:border-white/20 
 text-black dark:text-white placeholder-black/50 dark:placeholder-white/50
 focus:border-black dark:focus:border-white focus:outline-none transition-colors duration-300
 resize-none text-sm sm:text-base"
            placeholder="Tell us about your project, timeline, budget, and any specific requirements..."
          />
        </div>

        {/* Submit Button */}
        <div className="flex flex-col items-center space-y-4 pt-6">
          <button
            type="submit"
            disabled={isSubmitting}
            className="group relative px-8 py-4 bg-black dark:bg-white text-white dark:text-black 
 font-bold uppercase tracking-wider text-sm sm:text-base
 hover:bg-black/80 dark:hover:bg-white/80
 disabled:opacity-50 disabled:cursor-not-allowed
 transition-all duration-300 transform hover:scale-105
 border-2 border-black dark:border-white
 focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20" >
            {isSubmitting ? (
              <span className="flex items-center space-x-2">
                <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Sending...</span>
              </span>
            ) : (
              'Send Message'
            )}
          </button>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <motion.p 
              className="text-green-600 dark:text-green-400 text-sm font-medium"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              ✓ Message sent successfully! We'll get back to you within 24 hours.
            </motion.p>
          )}
          
          {submitStatus === 'error' && (
            <motion.p 
              className="text-red-600 dark:text-red-400 text-sm font-medium"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              ✗ Error sending message. Please try again or contact us directly.
            </motion.p>
          )}
        </div>
      </form>
    </motion.div>
  );
};

export default ClientAgreementPage; 