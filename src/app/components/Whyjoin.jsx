"use client";

import React from 'react';
import { motion } from "framer-motion";

const Whyjoin = () => {
  const reasons = [
    {
      id: 1,
      title: "Expert Mentorship",
      desc: "Learn directly from Dr. Neeraj Pandey and top industry experts who bring years of clinical experience in plastic surgery and aesthetics."
    },
    {
      id: 2,
      title: "Hands-on Training",
      desc: "We prioritize practical skills with live patient demonstrations and hands-on sessions to ensure you are clinical-ready."
    },
    {
      id: 3,
      title: "Global Recognition",
      desc: "Our certifications are designed to meet international standards, giving you the edge to practice globally in the field of aesthetics."
    },
    {
      id: 4,
      title: "Advanced Technology",
      desc: "Get access to the latest aesthetic tools, lasers, and surgical equipment used in modern clinical cosmetology."
    }
  ];

  return (
    <section className="bg-[#f5f0e3] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Headline */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-black text-3xl md:text-4xl font-black tracking-tighter uppercase italic">
            Why Join With <span className="text-[#D4AF37]">CKAAMS</span>
          </h2>
          <div className="w-16 h-1 bg-[#D4AF37] mx-auto mt-4" />
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
          {reasons.map((reason) => (
            <motion.div
              key={reason.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: reason.id * 0.1 }}
              className="flex flex-col items-start text-left group"
            >
              <span className="text-[#D4AF37] font-black text-2xl mb-4 opacity-30 group-hover:opacity-100 transition-opacity">
                0{reason.id}.
              </span>
              <h3 className="text-black font-extrabold text-xl mb-3 uppercase tracking-tight">
                {reason.title}
              </h3>
              <p className="text-zinc-700 text-sm md:text-base leading-relaxed font-medium">
                {reason.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Certificate Full Size Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full mt-20"
        >
          <div className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white/20">
            <img 
              src="/images/certificate.png" 
              alt="CKAAMS Certification" 
              className="w-full h-auto object-contain"
            />
            {/* Light Overlay for Premium Feel */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
          </div>
          
          <p className="text-center mt-6 text-zinc-500 text-xs md:text-sm uppercase tracking-[0.3em] font-bold">
             Internationally Recognized Certification
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Whyjoin;