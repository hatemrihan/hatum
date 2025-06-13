import Image from 'next/image';
import React from 'react';
import { motion, useInView } from 'framer-motion';
import runImage from '../assets/images/run-image.JPG';
import teamImage from '../assets/images/team-image.JPG';
import photoImage from '../assets/images/photo-image.jpg';
import teametnenImage from '../assets/images/teametnen-image.JPG';

const PastSpread: React.FC = () => {
  const sectionRef = React.useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <div ref={sectionRef} className="min-h-screen bg-stone-100 dark:bg-black text-black dark:text-white flex flex-col transition-colors duration-300" id="NewPart">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Text Column */}
          <motion.div 
            className="lg:col-span-4 flex flex-col justify-center text-center lg:text-left mb-8 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1 
              className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold text-black dark:text-white leading-none tracking-tighter mb-4 lg:mb-6"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              PAST
            </motion.h1>
            <motion.p 
              className="text-sm sm:text-base lg:text-lg text-black/70 dark:text-white/70 leading-relaxed max-w-md mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 0.7, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Since his young age and his passion for football wasn&apos;t limited, back to 2018 he started his journey in Egypt from a small Academy called Chiko. At 2022, he went to Saudi Arabia he was a footballer for Riyadh-Club, Seeking his journey in Saudi Arabia to be in the first team. But Unfortunately he had an ankle sprain that stopped him from playing at the top again.
            </motion.p>
          </motion.div>

          {/* Image Grid Column */}
          <motion.div 
            className="lg:col-span-8 grid grid-cols-3 gap-3 sm:gap-4 lg:gap-6"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Image 1 - Larger */}
            <motion.div 
              className="col-span-3 row-span-2 mb-3 sm:mb-4 lg:mb-6"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <motion.div 
                className="aspect-[4/3] bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Image 
                  src={runImage}
                  alt="Large Past Image" 
                  className="w-full h-full object-cover hover:grayscale-0 grayscale transition-all duration-300 hover:scale-105"
                />
              </motion.div>
            </motion.div>

            {/* Image 2 */}
            <motion.div 
              className="col-span-1"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <motion.div 
                className="aspect-square bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Image 
                  src={photoImage}
                  alt="Past Image 2" 
                  className="w-full h-full object-cover hover:grayscale-0 grayscale transition-all duration-300 hover:scale-105"
                />
              </motion.div>
            </motion.div>

            {/* Image 3 */}
            <motion.div 
              className="col-span-1"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.div 
                className="aspect-square bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Image 
                  src={teamImage} 
                  alt="Past Image 3" 
                  className="w-full h-full object-cover hover:grayscale-0 grayscale transition-all duration-300 hover:scale-105"
                />
              </motion.div>
            </motion.div>

            {/* Image 4 */}
            <motion.div 
              className="col-span-1"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <motion.div 
                className="aspect-square bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Image 
                  src={teametnenImage}
                  alt="Past Image 4" 
                  className="w-full h-full object-cover hover:grayscale-0 grayscale transition-all duration-300 hover:scale-105"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      <div className="w-full border-t border-black/20 dark:border-white/20 mx-4 sm:mx-6 lg:mx-8 mb-8 lg:mb-12"></div>
    </div>
  );
};

export default PastSpread;