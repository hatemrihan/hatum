"use client";

import React, { useEffect } from "react";
import { motion, useInView } from "framer-motion";
import useTextRevealAnimation from '@/hooks/useTextRevealAnimation';
import Link from "next/link";

// Social icons (replace with your own SVGs or use a library if you have one)
const InstagramIcon = () => (
  <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="5" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>
);
const TwitterIcon = () => (
  <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M22 5.924c-.793.352-1.645.59-2.54.698a4.48 4.48 0 0 0 1.964-2.475 8.94 8.94 0 0 1-2.828 1.082A4.48 4.48 0 0 0 12 9.03c0 .352.04.695.116 1.022C8.728 9.89 5.8 8.2 3.872 5.7a4.48 4.48 0 0 0-.606 2.254c0 1.555.792 2.93 2.002 3.736a4.48 4.48 0 0 1-2.03-.56v.057a4.48 4.48 0 0 0 3.6 4.393c-.193.052-.397.08-.607.08-.148 0-.292-.014-.432-.04a4.48 4.48 0 0 0 4.18 3.11A8.98 8.98 0 0 1 2 19.07a12.7 12.7 0 0 0 6.88 2.017c8.26 0 12.78-6.84 12.78-12.78 0-.195-.004-.39-.013-.583A9.13 9.13 0 0 0 24 4.59a8.98 8.98 0 0 1-2.6.713Z" fill="currentColor"/></svg>
);
const FacebookIcon = () => (
  <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M17 2.05c-2.76 0-5 2.24-5 5v2H8v4h4v8h4v-8h3l1-4h-4V7.05c0-.55.45-1 1-1h3V2.05h-3z" fill="currentColor"/></svg>
);
const DribbbleIcon = () => (
  <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/><path d="M2 14s2.5-2 10-2 10 2 10 2" stroke="currentColor" strokeWidth="2"/><path d="M12 2c2.5 4 4 8 4 10s-1.5 6-4 10" stroke="currentColor" strokeWidth="2"/></svg>
);

const Footer = () => {
  const { scope, entranceAnimation } = useTextRevealAnimation();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) entranceAnimation();
  }, [isInView, entranceAnimation]);

  return (
    <footer
      ref={ref}
      className="relative w-full bg-stone-100 dark:bg-black text-black dark:text-white overflow-x-hidden pt-20 pb-8 px-4 sm:px-8 transition-colors duration-300"
      style={{ borderRadius: '60px' }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 md:gap-0">
        {/* Left: Main Text */}
        <div className="flex-1 min-w-[220px] mb-10 md:mb-0">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ fontFamily: 'PP Neue Montreal, Arial, sans-serif' }}>
            Whenever, wherever.<br />We're meant to work together.
          </h2>
          <p
            ref={scope}
            className="text-base sm:text-lg text-black/70 dark:text-white/70 max-w-xs mb-6"
            style={{ fontFamily: 'PP Neue Montreal, Arial, sans-serif' }}
          >
            Get in touch with us for custom design, custom project, or simply to say hello. we believe we can convert ideas into digital Solution. 
          </p>
        </div>

        {/* Center: Explore */}
        <div className="flex-1 min-w-[180px] mb-10 md:mb-0">
          <h3 className="text-lg font-semibold mb-4" style={{ fontFamily: 'PP Neue Montreal, Arial, sans-serif' }}>Explore</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="hover:underline text-base flex items-center gap-2" style={{ fontFamily: 'PP Neue Montreal, Arial, sans-serif' }}>
                About me <span className="ml-2 px-2 py-0.5 text-xs bg-black/10 dark:bg-white/10 rounded-full">SOON</span>
              </Link>
            </li>
            <li>
              <span className="text-base flex items-center gap-2 opacity-60 cursor-not-allowed" style={{ fontFamily: 'PP Neue Montreal, Arial, sans-serif' }}>
                Articles <span className="ml-2 px-2 py-0.5 text-xs bg-black/10 dark:bg-white/10 rounded-full">SOON</span>
              </span>
            </li>
            <li>
              <span className="text-base flex items-center gap-2 opacity-60 cursor-not-allowed" style={{ fontFamily: 'PP Neue Montreal, Arial, sans-serif' }}>
                Weekly Newsletter
              </span>
            </li>
          </ul>
        </div>

        {/* Center Right: Say Hello */}
        <div className="flex-1 min-w-[180px] mb-10 md:mb-0">
          <h3 className="text-lg font-semibold mb-4" style={{ fontFamily: 'PP Neue Montreal, Arial, sans-serif' }}>Say hello!</h3>
          <ul className="space-y-3">
            <li>
              <a href="https://instagram.com" target="_blank" rel="noopener" className="flex items-center gap-2 hover:underline text-base" style={{ fontFamily: 'PP Neue Montreal, Arial, sans-serif' }}>
                <InstagramIcon /> Instagram
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noopener" className="flex items-center gap-2 hover:underline text-base" style={{ fontFamily: 'PP Neue Montreal, Arial, sans-serif' }}>
                <TwitterIcon /> Twitter (X)
              </a>
            </li>
            <li>
              <a href="https://facebook.com" target="_blank" rel="noopener" className="flex items-center gap-2 hover:underline text-base" style={{ fontFamily: 'PP Neue Montreal, Arial, sans-serif' }}>
                <FacebookIcon /> Facebook
              </a>
            </li>
            <li>
              <a href="https://dribbble.com" target="_blank" rel="noopener" className="flex items-center gap-2 hover:underline text-base" style={{ fontFamily: 'PP Neue Montreal, Arial, sans-serif' }}>
                <DribbbleIcon /> Dribbble
              </a>
            </li>
          </ul>
        </div>

        {/* Right: Creative Tools & CTA */}
        <div className="flex-1 min-w-[220px] flex flex-col items-end gap-8">
          <div className="w-full flex flex-col items-end">
            <span className="text-sm mb-2 opacity-70" style={{ fontFamily: 'PP Neue Montreal, Arial, sans-serif' }}>Shop here</span>
            <Link href="/pricing" className="flex items-center gap-2 text-lg font-semibold underline underline-offset-4 hover:opacity-80 transition group" style={{ fontFamily: 'PP Neue Montreal, Arial, sans-serif' }}>
              Shop & Resources
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-black text-white group-hover:bg-black/80 transition">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M8 16l6-6M8 8h8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
            </Link>
          </div>
          <div className="w-full flex flex-col items-end mt-8">
            <span className="text-sm mb-2 opacity-70" style={{ fontFamily: 'PP Neue Montreal, Arial, sans-serif' }}>Let's Prepare a Meal.</span>
            <Link href="/client-agreement" className="flex items-center gap-2 text-lg font-semibold underline underline-offset-4 hover:opacity-80 transition group" style={{ fontFamily: 'PP Neue Montreal, Arial, sans-serif' }}>
              Got an Idea?
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-orange-500 text-white group-hover:bg-orange-600 transition">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M8 16l6-6M8 8h8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* ENSAIN SVG LOGO - Custom font, responsive, no border box */}
      <div className="relative w-full flex justify-center items-center overflow-hidden" style={{ minHeight: '30vw', height: '30vw', maxHeight: 260, margin: 0, padding: 0 }}>
        <svg
          viewBox="0 0 1600 260"
          width="100%"
          height="100%"
          style={{ display: 'block', position: 'absolute', left: 0, top: 0, width: '100%', height: '100%' }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <text
            x="50%"
            y="70%"
            textAnchor="middle"
            fontFamily="'Panchang-Variable', 'Panchang-Bold', sans-serif"
            fontWeight="800"
            fontSize="240"
            fill="black"
            style={{ letterSpacing: '0.4em', fontStretch: 'normal', width: '100%' }}
            dominantBaseline="middle"
          >
            ENSAIN
          </text>
        </svg>
      </div>

      {/* Footer bottom row */}
      <div className="w-full flex flex-col md:flex-row justify-between items-center text-xs text-black/60 dark:text-white/60 mt-2" style={{ fontFamily: 'PP Neue Montreal, Arial, sans-serif' }}>
        <span>Ensain © 2025</span>
        <span className="mt-2 md:mt-0">JUST &nbsp; BUILD &nbsp; NOW</span>
      </div>
    </footer>
  );
};

export default Footer;
