"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Dr. Ankit Sharma, Jaipur",
      msg: "“PGDCC gave me the skills I needed to confidently offer advanced skin and hair treatments. The curriculum was very well-structured and easy to follow.”",
      img: "/images/testimonials/Dr. Ankit Sharma, Jaipur.png"
    },
    {
      id: 2,
      name: "Dr. Priya Mehta, Mumbai",
      msg: "“The FMC course was a game-changer for my career. The practical exposure and expert guidance helped me build confidence and start my own cosmetology practice.”",
      img: "/images/testimonials/Dr. Priya Mehta, Mumbai.png"
    }
  ];

  const [index, setIndex] = useState(0);

  const nextStep = () => {
    setIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const prevStep = () => {
    setIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  return (
    <section className="bg-[#f5f0e3] py-24 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.span className="text-[#8e7941] font-bold tracking-[0.4em] uppercase text-xs">
            TESTIMONIALS
          </motion.span>
          <h2 className="text-black text-3xl md:text-5xl font-black tracking-tighter uppercase mt-2">
            What Our Students <span className="text-zinc-500 font-light italic">Have To Say</span>
          </h2>
        </div>

        {/* Slider Container */}
        <div className="relative flex flex-col items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="flex flex-col items-center text-center"
            >
              {/* Image - Rounded & Simple */}
              <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-2 border-[#8e7941]/30 mb-8">
                <img 
                  src={reviews[index].img} 
                  alt={reviews[index].name} 
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Minimal Message - No card, no border */}
              <p className="text-black text-lg md:text-2xl leading-relaxed italic font-medium max-w-2xl mb-8">
                {reviews[index].msg}
              </p>

              {/* Name */}
              <h4 className="text-[#8e7941] font-black text-base md:text-xl uppercase tracking-widest">
                {reviews[index].name}
              </h4>
            </motion.div>
          </AnimatePresence>

          {/* Simple Navigation Buttons */}
          <div className="flex gap-10 mt-12">
            <button 
              onClick={prevStep}
              className="text-black/40 hover:text-black transition-colors text-2xl font-light"
            >
              ←
            </button>
            
            {/* Dots Indicator */}
            <div className="flex items-center gap-2">
              {reviews.map((_, i) => (
                <div 
                  key={i}
                  className={`h-1.5 transition-all duration-300 rounded-full ${index === i ? "w-6 bg-[#8e7941]" : "w-1.5 bg-black/10"}`}
                />
              ))}
            </div>

            <button 
              onClick={nextStep}
              className="text-black/40 hover:text-black transition-colors text-2xl font-light"
            >
              →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;