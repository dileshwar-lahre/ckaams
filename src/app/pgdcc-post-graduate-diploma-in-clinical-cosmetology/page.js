"use client";

import React from 'react';
import { motion } from "framer-motion";
import { CheckCircle2, Clock, Users, ArrowRight, Award, ShieldCheck } from 'lucide-react';

const PGDCCPage = () => {
  return (
    <div className="bg-[#fcfbf7] min-h-screen pt-20 pb-20">
      
      {/* --- 1. HERO BANNER (Full Width + Enroll Button) --- */}
      <section className="relative w-full h-[50vh] md:h-[80vh] overflow-hidden mt-4">
        <img 
          src="/images/cardcourses/FMA1.png" 
          className="w-full h-full object-cover object-top" 
          alt="PGDCC Header" 
        />
        {/* Subtle Overlay */}
        <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-center px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white text-4xl md:text-7xl font-black uppercase italic tracking-tighter"
          >
            PGDCC
          </motion.h1>
          <p className="text-white text-sm md:text-lg font-bold uppercase tracking-[0.2em] mt-2 opacity-90">
            Clinical Cosmetology
          </p>
          
          {/* Enroll Button on Image */}
          <motion.a
            href="#enroll"
            whileHover={{ scale: 1.05 }}
            className="mt-8 bg-[#ae965b] text-black px-8 py-3 rounded-full font-black uppercase text-[10px] tracking-[0.3em] shadow-2xl transition-all hover:bg-white"
          >
            Enroll Now ➔
          </motion.a>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 mt-20">
        
        {/* --- 2. PROGRAMME OVERVIEW (No Black BG) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          <div className="lg:col-span-8 bg-white p-10 rounded-[3rem] border border-black/5 shadow-sm">
            <h2 className="text-black text-2xl font-black uppercase italic mb-4">The Programme</h2>
            <p className="text-zinc-600 leading-relaxed font-medium text-base italic border-l-4 border-[#ae965b] pl-6">
              "Equipping doctors with elite expertise in aesthetic treatments through advanced clinical breakthroughs."
            </p>
          </div>
          
          {/* Quick Stats in White Cards */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-[2rem] border border-[#ae965b]/20 flex flex-col items-center justify-center text-center">
              <Clock className="text-[#ae965b] mb-2" size={20} />
              <p className="text-[9px] font-black uppercase opacity-40">Duration</p>
              <p className="font-bold text-sm">3 MONTHS</p>
            </div>
            <div className="bg-white p-6 rounded-[2rem] border border-[#ae965b]/20 flex flex-col items-center justify-center text-center">
              <Users className="text-[#ae965b] mb-2" size={20} />
              <p className="text-[9px] font-black uppercase opacity-40">Eligible</p>
              <p className="font-bold text-[10px]">MBBS/BAMS/BDS</p>
            </div>
          </div>
        </div>

        {/* --- 3. KEY HIGHLIGHTS (Clean Grid) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {/* Skin & Aesthetic */}
          <div className="bg-white p-8 rounded-[2.5rem] border border-black/5 hover:border-[#ae965b] transition-all group">
            <h3 className="text-black font-black uppercase italic mb-6 border-b border-black/5 pb-4 group-hover:text-[#ae965b]">Skin & Aesthetics</h3>
            <ul className="space-y-4">
              {["Chemical Peels", "Microdermabrasion", "Skin Rejuvenation", "Laser Therapies"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-zinc-500 text-[10px] font-black uppercase tracking-widest">
                  <CheckCircle2 size={14} className="text-[#ae965b]" /> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Hair & Trichology */}
          <div className="bg-white p-8 rounded-[2.5rem] border border-black/5 hover:border-[#ae965b] transition-all group">
            <h3 className="text-black font-black uppercase italic mb-6 border-b border-black/5 pb-4 group-hover:text-[#ae965b]">Trichology</h3>
            <ul className="space-y-4">
              {["Hair Loss Treatments", "PRP Therapy", "Mesotherapy", "Scalp Care"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-zinc-500 text-[10px] font-black uppercase tracking-widest">
                  <CheckCircle2 size={14} className="text-[#ae965b]" /> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Advanced Injectables */}
          <div className="bg-white p-8 rounded-[2.5rem] border border-black/5 hover:border-[#ae965b] transition-all group">
            <h3 className="text-black font-black uppercase italic mb-6 border-b border-black/5 pb-4 group-hover:text-[#ae965b]">Injectables</h3>
            <ul className="space-y-4">
              {["Botox Expertise", "Dermal Fillers", "Facial Contouring", "Anti-aging"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-zinc-500 text-[10px] font-black uppercase tracking-widest">
                  <CheckCircle2 size={14} className="text-[#ae965b]" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* --- 4. WHY CHOOSE US (Clean Cards) --- */}
        <section className="mb-32">
          <div className="text-center mb-12">
            <h2 className="text-black text-3xl font-black uppercase italic tracking-tighter">Why Choose <span className="text-[#ae965b] not-italic">CKAAMS?</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-[3rem] border border-black/5 flex items-start gap-6">
              <div className="bg-[#ae965b]/10 p-4 rounded-2xl text-[#ae965b]"><Award size={24}/></div>
              <div>
                <h4 className="font-black uppercase italic text-sm mb-2">Industry Curriculum</h4>
                <p className="text-zinc-500 text-xs font-medium leading-relaxed uppercase">Learn the latest techniques from international faculty and experts.</p>
              </div>
            </div>
            <div className="bg-white p-10 rounded-[3rem] border border-black/5 flex items-start gap-6">
              <div className="bg-[#ae965b]/10 p-4 rounded-2xl text-[#ae965b]"><ShieldCheck size={24}/></div>
              <div>
                <h4 className="font-black uppercase italic text-sm mb-2">Hands-On Training</h4>
                <p className="text-zinc-500 text-xs font-medium leading-relaxed uppercase">Perform procedures on live patients under expert clinical supervision.</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- 5. ENROLL FORM --- */}
        <div id="enroll" className="max-w-4xl mx-auto bg-white p-12 md:p-20 rounded-[4rem] shadow-2xl border border-black/5">
          <div className="text-center mb-12">
            <h2 className="text-black text-4xl font-black uppercase italic tracking-tighter">Enroll Now</h2>
            <p className="text-[#ae965b] font-black uppercase text-[10px] tracking-[0.4em] mt-2">Start your aesthetic journey</p>
          </div>
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <input type="text" placeholder="NAME" className="w-full bg-[#fcfbf7] p-5 rounded-2xl outline-none text-[10px] font-black tracking-widest text-black border border-black/5 focus:border-[#ae965b] transition-all" />
              <input type="tel" placeholder="PHONE" className="w-full bg-[#fcfbf7] p-5 rounded-2xl outline-none text-[10px] font-black tracking-widest text-black border border-black/5 focus:border-[#ae965b] transition-all" />
            </div>
            <textarea placeholder="MESSAGE" className="w-full bg-[#fcfbf7] p-5 rounded-2xl outline-none text-[10px] font-black tracking-widest text-black border border-black/5 focus:border-[#ae965b] transition-all h-32 resize-none"></textarea>
            <button className="w-full bg-black text-[#ae965b] py-6 rounded-2xl font-black uppercase text-[10px] tracking-[0.5em] hover:bg-[#ae965b] hover:text-black transition-all">
              Submit Inquiry ➔
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default PGDCCPage;