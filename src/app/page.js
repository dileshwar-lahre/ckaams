"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Courses from "./components/Courses";

export default function Home() {
  const images = [
    "/images/sliderimages1.png",
    "/images/sliderimage2.png",
  ];

  const [[page, direction], setPage] = useState([0, 0]);
  const currentIndex = page;

  const paginate = useCallback((newDirection) => {
    let nextIndex = currentIndex + newDirection;
    if (nextIndex < 0) nextIndex = images.length - 1;
    if (nextIndex >= images.length) nextIndex = 0;
    setPage([nextIndex, newDirection]);
  }, [currentIndex, images.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 60000); 
    return () => clearInterval(timer);
  }, [paginate]);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: { zIndex: 1, x: 0, opacity: 1 },
    exit: (direction) => ({ zIndex: 0, x: direction < 0 ? 1000 : -1000, opacity: 0 }),
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#f5f0e3]">
      
      {/* 1. MOBILE VIEW - Full Width & Height + Animated Arrow */}
      <section className="md:hidden w-full h-[90vh] mt-20 relative overflow-hidden">
        <img 
          src="/images/doctorphone.png" 
          alt="CKAAMS Mobile" 
          className="w-full h-full object-cover"
        />
        
        {/* Subtle Bottom Gradient for the Arrow */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/20 to-transparent" />

        {/* Animated Transparent Arrow */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={1.5} 
            stroke="white" 
            className="w-8 h-8 opacity-70"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </motion.div>
      </section>

      {/* 2. DESKTOP SLIDER */}
      <section className="hidden md:block relative w-full h-[85vh] overflow-hidden mt-28 mx-auto max-w-[1600px] md:rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)]">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.4 }
            }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={images[currentIndex]}
              alt={`CKAAMS Slider ${currentIndex + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />
          </motion.div>
        </AnimatePresence>

        {/* Desktop Navigation */}
        <div className="absolute inset-x-0 bottom-10 flex flex-col items-center gap-6 z-20">
          <div className="flex gap-3 px-6 py-3 bg-black/20 backdrop-blur-xl rounded-full border border-white/10">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setPage([index, index > currentIndex ? 1 : -1])}
                className={`transition-all duration-500 rounded-full ${
                  currentIndex === index ? "w-10 bg-[#D4AF37]" : "w-2.5 bg-white/40"
                } h-2.5`}
              />
            ))}
          </div>
        </div>

        {/* Side Arrows */}
        <div className="absolute inset-0 hidden md:flex items-center justify-between px-10 z-30">
          <button onClick={() => paginate(-1)} className="p-5 rounded-full border border-white/20 bg-black/10 text-white backdrop-blur-md">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
          </button>
          <button onClick={() => paginate(1)} className="p-5 rounded-full border border-white/20 bg-black/10 text-white backdrop-blur-md">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
          </button>
        </div>
      </section>

      <Courses/>
    </div>
  );
}