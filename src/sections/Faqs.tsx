"use client";

import React, { useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef } from 'react';
import OptimizedVideo from '../components/OptimizedVideo';
import Link from 'next/link';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const Faqs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    setOpenItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const faqData: FAQItem[] = [
    {
      id: "development",
      question: "What development services do you offer?",
      answer: " specialize in full-stack web development, creating responsive websites, e-commerce platforms, portfolio sites, and custom web applications. From frontend design to backend functionality, I deliver end-to-end solutions tailored to your specific business needs."
    },
    {
      id: "technologies", 
      question: "What technologies do you work with?",
      answer: "work with modern technologies including React, Next.js, Node.js, TypeScript, Tailwind CSS, and various databases. staying updated with the latest trends to ensure your project uses cutting-edge technology for optimal performance and scalability."
    },
    {
      id: "timeline",
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on complexity. A simple portfolio site typically takes 1-2 weeks, while complex e-commerce platforms or web applications can take 4-8 weeks. always provide detailed timelines during our consultation to set clear expectations."
    },
    {
      id: "process",
      question: "What's your development process like?",
      answer: "we follow an agile approach: Discovery & Planning → Design & Prototyping → Development → Testing → Launch → Support. You'll receive regular updates and can provide feedback throughout the process to ensure the final product exceeds your expectations."
    },
    {
      id: "pricing",
      question: "How do you structure your pricing?",
      answer: "we offer transparent, project-based pricing tailored to your specific requirements. After understanding your needs, we provide a detailed quote with no hidden fees. we also offer flexible payment plans and ongoing maintenance packages for long-term partnerships."
    }
  ];

  return (
    <section ref={ref} className="min-h-screen bg-stone-100 dark:bg-black text-black dark:text-white p-4 sm:p-6 lg:p-8 transition-colors duration-300" id="AnotherFAQs">
      <div className="max-w-7xl mx-auto">
        
        {/* Mobile/Tablet First: Main Heading with Paragraph */}
        <div className="block lg:hidden mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-6 text-center">
              YOUR EVERY
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 
                             dark:from-blue-400 dark:via-cyan-400 dark:to-blue-300">
                QUESTION HAS AN
              </span>
              <br />
              IMPACT ON
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 
                             dark:from-blue-400 dark:via-cyan-400 dark:to-blue-300">
                YOUR PROJECT
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl leading-relaxed text-black dark:text-white text-center max-w-3xl mx-auto">
            Over two years of working worldwide, offering a range of creative and strategic websites.
            </p>
          </motion.div>
        </div>

        {/* Desktop First: Paragraph Section */}
        <motion.div
          className="hidden lg:block mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-black dark:text-white text-center max-w-4xl mx-auto">
          Over two years of working worldwide, offering a range of creative and strategic websites.
          </p>
        </motion.div>

        {/* Second: Video Section */}
        <motion.div 
          className="mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Enhanced Video Container */}
          <div className="relative max-w-4xl mx-auto rounded-3xl overflow-hidden 
                         bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100/50 
                         dark:from-gray-800 dark:via-gray-900 dark:to-blue-900/20 
                         p-6 lg:p-8 shadow-2xl shadow-blue-500/10 dark:shadow-blue-500/20">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-black/20 dark:shadow-black/40">
              <OptimizedVideo
                src="https://ext.same-assets.com/2567977451/1444996367.mp4"
                className="w-full h-full object-cover"
                autoPlay={true}
                muted={true}
                loop={true}
                playsInline={true}
                controls={false}
                preload="auto"
              />
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* Left Column - Desktop Main Heading and Button */}
          <motion.div 
            className="hidden lg:block order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {/* Enhanced Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6 lg:mb-8">
                YOUR EVERY
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 
                               dark:from-blue-400 dark:via-cyan-400 dark:to-blue-300">
                  QUESTION HAS AN
                </span>
                <br />
                IMPACT ON
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 
                               dark:from-blue-400 dark:via-cyan-400 dark:to-blue-300">
                  YOUR PROJECT
                </span>
              </h1>

              <Link href="/client-agreement">
                <motion.button 
                  className="inline-flex items-center px-8 py-4 lg:px-10 lg:py-5 
                           bg-gradient-to-r from-black to-gray-800 dark:from-white dark:to-gray-200 
                           text-white dark:text-black font-bold rounded-full 
                           hover:from-blue-600 hover:to-cyan-600 dark:hover:from-blue-500 dark:hover:to-cyan-500
                           hover:text-white dark:hover:text-white
                           transition-all duration-300 text-sm lg:text-base
                           shadow-xl shadow-black/20 dark:shadow-white/20
                           hover:shadow-2xl hover:shadow-blue-500/30 dark:hover:shadow-blue-400/30
                           transform hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Client Agreement
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column - FAQ Questions */}
          <motion.div 
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            {/* FAQ Header */}
            <motion.div 
              className="mb-6 lg:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <h2 className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-4 text-black/60 dark:text-white/60">
                Your questions
              </h2>
            </motion.div>

            {/* Clean FAQ List - No Backgrounds */}
            <div className="space-y-4 sm:space-y-6">
              {faqData.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="group cursor-pointer"
                  onClick={() => toggleItem(item.id)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: 1.4 + index * 0.1 }}
                >
                  {/* Question with Plus Icon */}
                  <div className="flex items-center justify-between py-3 sm:py-4 border-b border-black/10 dark:border-white/10 group-hover:border-blue-500/30 transition-colors duration-300">
                    <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-black dark:text-white leading-tight 
                                 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 pr-4">
                      {item.question}
                    </h3>
                    
                    <motion.div
                      animate={{ rotate: openItems.has(item.id) ? 45 : 0 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                      className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center"
                    >
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-black/70 dark:text-white/70 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300" 
                           fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                      </svg>
                    </motion.div>
                  </div>

                  {/* Fast Expandable Answer */}
                  <AnimatePresence>
                    {openItems.has(item.id) && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pt-3 sm:pt-4 pb-2">
                          <p className="text-xs sm:text-sm lg:text-base text-black/70 dark:text-white/70 leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Mobile/Tablet Button */}
        <div className="block lg:hidden mt-12 text-center">
          <Link href="/client-agreement">
            <motion.button 
              className="inline-flex items-center px-8 py-4 
                       bg-gradient-to-r from-black to-gray-800 dark:from-white dark:to-gray-200 
                       text-white dark:text-black font-bold rounded-full 
                       hover:from-blue-600 hover:to-cyan-600 dark:hover:from-blue-500 dark:hover:to-cyan-500
                       hover:text-white dark:hover:text-white
                       transition-all duration-300 text-sm
                       shadow-xl shadow-black/20 dark:shadow-white/20
                       hover:shadow-2xl hover:shadow-blue-500/30 dark:hover:shadow-blue-400/30
                       transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Client Agreement
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
