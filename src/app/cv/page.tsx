'use client';

import Link from 'next/link';
import { useState, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

export default function CVPage() {
  const componentRef = useRef(null);

  const handlePrint = useReactToPrint({
    contentRef: componentRef,
  });

  return (
    <div className="p-5 max-w-4xl mx-auto">
      <div className="mb-4 flex justify-end border-2 border-red-500 p-2">
        <button 
          onClick={handlePrint} 
          style={{
            backgroundColor: '#059669',
            color: 'white',
            padding: '8px 16px',
            borderRadius: '4px',
            border: 'none',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: '500'
          }}
        >
          Download PDF
        </button>
      </div>
      
      <div ref={componentRef} className="bg-white p-4 shadow-md text-xs">
        {/* Header */}
        <div className="mb-3 text-center">
          <h1 className="text-xl font-bold text-gray-800 mb-1">Hatem Rihan</h1>
          <div className="text-xs text-gray-600 flex flex-wrap justify-center gap-2">
            <span>+20 1018 226899</span>
            <span>•</span>
            <a href="mailto:hatemrihann@gmail.com" className="underline">hatemrihann@gmail.com</a>
            <span>•</span>
            <a href="https://www.linkedin.com/in/hatem-rihan-298753309/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" className="underline">LinkedIn</a>
            <span>•</span>
            <a href="https://github.com/hatemrihan" target="_blank" rel="noopener noreferrer" className="underline">GitHub</a>
            <span>•</span>
            <a href="https://hatum.vercel.app/" target="_blank" rel="noopener noreferrer" className="underline">Portfolio</a>
          </div>
        </div>
                
        {/* Profile Section */}
        <div className="mb-3">
          <div className="flex">
            <div className="w-1/4">
        <h2 className="text-xs font-bold uppercase tracking-wider text-gray-700">PROFILE</h2>
       
            </div>
            <div className="w-3/4">
              <p className="text-xs text-gray-700">
                Undergrad student at the University of Mansoura, Egypt.
                Majoring in Computer and Communication Engineering.
                Passionate about software development espicially in web development and seeking to grow in the field.
                Currently wroking as a freelancer as a full stack developer.
              </p>
            </div>
          </div>
        </div>
                     {/* Interns */}
           <div className="mb-3">
           <div className="flex">
             <div className="w-1/4">
               <h2 className="text-xs font-bold uppercase tracking-wider text-gray-700">INTERNS</h2>
             </div>
             <div className="w-3/4">
               <div className="mb-2">
                 <div className="flex justify-between mb-1">
                   <h3 className="text-xs font-bold text-gray-800">Software Development Intern</h3>
                   <div className="text-xs text-gray-600">
                     <span>Samama Holding Company</span>
                   </div>
                 </div>
                 <div className="flex justify-between mb-1">
                   <div className="text-xs text-gray-600"> 2022 — Riyadh, Saudi Arabia</div>
                 </div>
                 <ul className="list-disc pl-3 text-xs text-gray-700 space-y-0">
                   <li>Learned about IT infrastructure, security, and networking</li>
                   <li>Learned about the company's operations and how to use the company's software</li>
                   <li>Learned about the company's culture and how to interact with the company's employees</li>
                 </ul>
               </div>
             </div>
           </div>
         </div>
         
        
                 {/* Projects */}
         <div className="mb-3">
           <div className="flex">
             <div className="w-1/4">
               <h2 className="text-xs font-bold uppercase tracking-wider text-gray-700">Projects</h2>
             </div>
             <div className="w-3/4">
               <div className="mb-2">
                 <div className="flex justify-between mb-1">
                   <h3 className="text-xs font-bold text-gray-800">Eleve, Egyptian Local Brand</h3>
                   <div className="text-xs text-gray-600">
                     <span>E-Commerce</span>
                   </div>
                 </div>
                 <ul className="list-disc pl-3 text-xs text-gray-700 space-y-0">
                   <li>Built admin dashboard dashboard doesn't just show only numbers – it shows patterns. Revenue trends, customer behavior, product performance.</li>
                   <li>Built Ambassador Program Integration,a complete relationship management system. Every ambassador has their own commission, their own analytics, their own performance metrics.</li>
                   <li>Managed monthly waitlist management, and email marketing.</li>
                   <li>User Experience That Actually Works Dark mode, Technical Sophistication Next.js 14 with App Router, real-time updates, dynamic components, proper state management,MongooDB fot the database, Cloudinary for images and files, Google Auth for authentication, Google Cloud Provider.</li>
                   <li>Built export functionality specifically for shipping companies. No unit prices, no coupon codes – just the data they need.</li>
                 </ul>
               </div>
               
               <div className="mb-2">
                 <div className="flex justify-between mb-1">
                   <h3 className="text-xs font-bold text-gray-800">NE- LA7 Gym Coach</h3>
                   <div className="text-xs text-gray-600">
                     <span>Portfolio</span>
                   </div>
                 </div>
                 <ul className="list-disc pl-3 text-xs text-gray-700 space-y-0">
                   <li>Build a portfolio showcase for the coach that shows his services and his programs</li>
                   <li>Using Next.js,Tailwind CSS, Shadcn Ui, Framer Motion, React-cione, Styled made components and Type script.</li>
                 </ul>
               </div>
               
               <div className="mb-2">
                 <div className="flex justify-between mb-1">
                   <h3 className="text-xs font-bold text-gray-800">AF - STUDIO</h3>
                   <div className="text-xs text-gray-600">
                     <span>Portfolio</span>
                   </div>
                 </div>
                 <ul className="list-disc pl-3 text-xs text-gray-700 space-y-0">
                   <li>Built a portfolio showcase for the artist that shows his two services, the first is for Photography and the second is for Graphic design</li>
                   <li>Using Next.js,Tailwind CSS, Shadcn Ui, Framer Motion and Type script.</li>
                   <li>Using Three js, GSAP for the 3D model of the artist.</li>
                 </ul>
               </div>
             </div>
           </div>
         </div>
                   {/* Courses */}
          <div className="mb-3">
           <div className="flex">
             <div className="w-1/4">
               <h2 className="text-xs font-bold uppercase tracking-wider text-gray-700">Courses</h2>
             </div>
             <div className="w-3/4">
               <div className="mb-2">
                 <div className="flex justify-between mb-1">
                   <h3 className="text-xs font-bold text-gray-800">Frontend Development</h3>
                   <div className="text-xs text-gray-600">
                     <span> MU</span>
                   </div>
                 </div>
                 <ul className="list-disc pl-3 text-xs text-gray-700 space-y-0">
                   <li>Completed The training program in web design (Front end) at MU</li>
                 </ul>
               </div>
               <div className="mb-2">
                 <div className="flex justify-between mb-1">
                   <h3 className="text-xs font-bold text-gray-800">UI/UX Design</h3>
                   <div className="text-xs text-gray-600">
                     <span>HCL</span>
                   </div>
                 </div>
                 <ul className="list-disc pl-3 text-xs text-gray-700 space-y-0">
                   <li> Master UI/UX: Steps to Build a Successful Design Career at GUVI — HCL</li>
                 </ul>
               </div>
             </div>
           </div>
         </div>
        
                 {/* Education */}
         <div className="mb-3">
           <div className="flex">
             <div className="w-1/4">
               <h2 className="text-xs font-bold uppercase tracking-wider text-gray-700">EDUCATION</h2>
             </div>
             <div className="w-3/4">
               <div className="mb-2">
                 <div className="flex justify-between mb-1">
                   <h3 className="text-xs font-bold text-gray-800">Bachelor of Computer and Communication Engineering, Mansoura University</h3>
                   <div className="text-xs text-gray-600">
                     <span>Mansoura</span>
                   </div>
                 </div>
                 <div className="flex justify-between mb-1">
                   <div className="text-xs text-gray-600"> 2023 —  2028</div>
                 </div>
                 <ul className="list-disc pl-3 text-xs text-gray-700">
                   <li>Third year undergard student with current GPA of 3.3</li>
                 </ul>
               </div>
             </div>
           </div>
         </div>
        
                 {/* Skills */}
         <div className="mb-3">
           <div className="flex">
             <div className="w-1/4">
               <h2 className="text-xs font-bold uppercase tracking-wider text-gray-700">SKILLS</h2>
             </div>
             <div className="w-3/4">
               <div className="grid grid-cols-1 gap-1">
                 <div className="flex justify-between">
                   <span className="text-xs text-gray-700">HTML,CSS, JavaScript, React, Next.js, TypeScript,TailiwindCSS,MongooDB,OAuth, Node.js, GIT, React-to-excel.</span>
                 </div>
               </div>
             </div>
           </div>
         </div>
        
     
      </div>
    </div>
  );
}