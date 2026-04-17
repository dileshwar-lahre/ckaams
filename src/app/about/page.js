"use client";

import React from 'react';
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <div className="bg-[#f5f0e3] min-h-screen pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        
        {/* --- SECTION 1: DR. NEERAJ PANDEY --- */}
        <header className="mb-8 border-l-4 border-[#ae965b] pl-6">
          <p className="text-[#ae965b] text-[10px] font-black uppercase tracking-[0.4em]">Director Profile</p>
          <h1 className="text-black text-2xl md:text-3xl font-black uppercase tracking-tighter mt-1 italic">
            Dr. Neeraj Pandey
          </h1>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-32">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="lg:col-span-4 order-1"
          >
            <div className="rounded-2xl overflow-hidden shadow-xl border-2 border-white aspect-[4/5] max-w-[320px] mx-auto lg:mx-0">
              <img src="/images/dr-neeraj-pandey.jpg" className="w-full h-full object-cover object-top" alt="Dr. Neeraj Pandey" />
            </div>
          </motion.div>
          
          <div className="lg:col-span-8 order-2 mt-2 lg:mt-6 space-y-5">
            <h3 className="text-[#ae965b] font-black text-sm uppercase tracking-widest">Director, CKAAMS | MBBS, DNB (Plastic Surgery)</h3>
            <p className="text-zinc-800 text-sm md:text-base leading-relaxed font-medium">
              Dr. Neeraj Pandey is a highly regarded plastic surgeon, hair transplant surgeon, and cosmetologist based in Raipur, Chhattisgarh. He is the Head of Department and Chief Operating Surgeon at Cosmetic Krafts.
            </p>
            <p className="text-zinc-700 text-sm md:text-base leading-relaxed italic border-l-2 border-[#ae965b]/30 pl-6">
              With over 14 years of experience, Dr. Pandey has established a reputation for practical, genuine care and precise diagnosis.
            </p>
            <p className="text-zinc-500 text-xs uppercase font-bold tracking-tight">IAPS, ISSH, NABI Member</p>
          </div>
        </section>

        {/* --- SECTION 2: DR. KSHAMA PANDEY --- */}
        <header className="mb-8 border-r-4 border-[#ae965b] pr-6 text-right">
          <p className="text-[#ae965b] text-[10px] font-black uppercase tracking-[0.4em]">Director Profile</p>
          <h1 className="text-black text-2xl md:text-3xl font-black uppercase tracking-tighter mt-1 italic">
            Dr. Kshama Pandey
          </h1>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-32">
          <div className="lg:col-span-8 order-2 lg:order-1 mt-2 lg:mt-6 space-y-5 text-right flex flex-col items-end">
            <h3 className="text-[#ae965b] font-black text-sm uppercase tracking-widest">Director, CKAAMS | MBBS, ABAM (USA)</h3>
            <p className="text-zinc-800 text-sm md:text-base leading-relaxed font-medium">
              Dr. Kshama Pandey is a distinguished Medical Aesthetician and Director at CKAAMS, specializing in the intersection of clinical excellence and aesthetic artistry.
            </p>
            <p className="text-zinc-700 text-sm md:text-base leading-relaxed italic border-r-2 border-[#ae965b]/30 pr-6">
              A Fellow of the American Board of Aesthetic Medicine (ABAM), she brings international standards of care to Central India.
            </p>
            <p className="text-zinc-500 text-xs font-bold italic">Consultant Medical Aesthetician</p>
          </div>

          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="lg:col-span-4 order-1 lg:order-2"
          >
            <div className="rounded-2xl overflow-hidden shadow-xl border-2 border-white aspect-[4/5] max-w-[320px] mx-auto lg:ml-auto">
              <img src="/images/Dr.-Kshama-Pandey-1.png" className="w-full h-full object-cover object-top" alt="Dr. Kshama Pandey" />
            </div>
          </motion.div>
        </section>

        {/* --- BRAND SHOWCASE SECTION (Replaced Why Choose Us) --- */}
        <section className="mt-20 py-20 border-t border-black/5 flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative group cursor-pointer"
          >
            {/* Soft Glow behind the image */}
            <div className="absolute inset-0 bg-[#ae965b]/20 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl">
              <img 
                src="/images/ckaams.jpg" 
                alt="CKAAMS Brand" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          
          <div className="mt-12 text-center space-y-4">
             <h2 className="text-black text-3xl md:text-5xl font-black uppercase italic tracking-tighter leading-none">
               International Institute <br /> 
               <span className="text-[#ae965b] not-italic text-2xl md:text-4xl">of Surgical & Aesthetic Medicine</span>
             </h2>
             <div className="w-20 h-1 bg-black mx-auto" />
             <p className="text-zinc-400 text-[10px] font-black uppercase tracking-[0.5em]">Defining the Gold Standard</p>
          </div>

          <div className="mt-16">
            <motion.a 
              href="/contact"
              whileHover={{ scale: 1.05 }}
              className="px-10 py-4 bg-black text-[#ae965b] border border-[#ae965b] rounded-full text-[10px] font-black uppercase tracking-[0.3em] hover:bg-[#ae965b] hover:text-black transition-all"
            >
              Get Started ➔
            </motion.a>
          </div>
        </section>

      </div>
    </div>
  );
};

export default AboutPage;