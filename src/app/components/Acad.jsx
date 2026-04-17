"use client";

import React from 'react';
import { motion } from "framer-motion";

const Acad = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden">
      
      {/* BACKGROUND IMAGE - Full Size */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/creative.png" 
          alt="CKAAMS Background" 
          // Responsive: Mobile pe image center rahegi, desktop pe right align
          className="w-full h-full object-cover object-center lg:object-right" 
        />
        {/* Overlay: Mobile par thoda zyada dark rakha hai taaki text readable rahe */}
        <div className="absolute inset-0 bg-black/60 lg:bg-transparent lg:bg-gradient-to-r lg:from-black/80 lg:to-transparent" />
      </div>

      {/* CONTENT AREA - Responsive Padding and Width */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 md:px-16 w-full py-20">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="max-w-2xl text-white space-y-4 md:space-y-6"
        >
          {/* Main Headline Section - Responsive Font Sizes */}
          <div className="space-y-1">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-light italic tracking-tight">
              Your Career of
            </h2>
            <h1 className="text-4xl sm:text-5xl md:text-5xl font-black uppercase tracking-tighter leading-none">
              Cosmetology
            </h1>
            <div className="flex items-baseline gap-2 md:gap-3">
              <span className="text-lg md:text-2xl font-medium italic text-[#D4AF37]">with</span>
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-widest text-[#D4AF37]">
                CKAAMS
              </h2>
            </div>
          </div>

          {/* Paragraphs - Mobile pe text size chota kiya hai */}
          <div className="space-y-4 md:space-y-6 pt-2 md:pt-4">
            <p className="text-zinc-200 text-xs sm:text-sm md:text-base leading-relaxed max-w-lg">
              Welcome to CKAAMS, a premier training institute dedicated to providing world-class 
              education in <span className="font-bold underline decoration-[#D4AF37]">aesthetic medicine and cosmetic procedures</span>. 
              Our specialized courses are designed to empower professionals.
            </p>

            <p className="text-zinc-300 text-xs sm:text-sm md:text-base leading-relaxed max-w-lg border-l-2 border-[#D4AF37] pl-4 md:pl-5 italic">
              As a result, patients experience noticeable improvements in their skin health. 
              Or medical professionals who aspire to excel in the rapidly growing field of 
              cosmetology, dermatology, and aesthetic surgery.
            </p>
          </div>

          {/* Footer Text & CTA - Button mobile responsive */}
          <div className="pt-4 md:pt-8 space-y-4 md:space-y-6">
            <p className="text-[#D4AF37] font-bold text-[10px] sm:text-xs md:text-base tracking-widest uppercase">
              Search for best Cosmetic Institute & ask yourself the question?
            </p>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              className="bg-[#D4AF37] text-black font-black px-8 md:px-10 py-3 md:py-4 rounded-sm uppercase text-[10px] md:text-xs tracking-[0.2em] flex items-center gap-3 transition-all hover:bg-white"
            >
              Contact Us <span>➔</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Acad;