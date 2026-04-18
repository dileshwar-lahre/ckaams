"use client";

import React from 'react';
import { motion } from "framer-motion";
import { CheckCircle2, Clock, Users, ArrowRight, Award, Zap, ShieldCheck, Sparkles } from 'lucide-react';

const FMCFellowshipPage = () => {
  return (
    <div className="bg-[#fcfbf7] min-h-screen pt-28 pb-20 px-4 md:px-12 relative overflow-hidden">
      
      {/* Background Subtle Accent Glows */}
      <div className="absolute top-[-10%] right-[-10%] w-[300px] h-[300px] bg-[#ae965b]/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[250px] h-[250px] bg-[#ae965b]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- 1. HERO SECTION: PREMIUM SPLIT LAYOUT --- */}
        <section className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-28 border-b border-black/5 pb-16">
          
          {/* Left: Text Content */}
          <div className="w-full lg:w-3/5 space-y-6 text-center lg:text-left order-2 lg:order-1 flex flex-col items-center lg:items-start">
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-3 text-[#ae965b]"
            >
              <div className="w-8 h-[2px] bg-[#ae965b]" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em]">Medical Beauty Expert</span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-1"
            >
              <h1 className="text-black text-5xl md:text-6xl font-black uppercase italic tracking-tighter leading-none mb-2">
                FMC <span className="text-[#ae965b] not-italic underline decoration-1 underline-offset-8">Fellowship.</span>
              </h1>
              <p className="text-zinc-500 text-sm md:text-base font-bold uppercase tracking-[0.15em] italic">
                Fellowship in Medical Cosmetology
              </p>
            </motion.div>

            {/* --- TOP BRAND LOGO --- */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="pt-2 pb-2"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-white shadow-xl overflow-hidden bg-white p-1 border-[#ae965b]/20 hover:border-[#ae965b] transition-colors">
                <img 
                  src="/images/ckaams.jpg" 
                  className="w-full h-full rounded-full object-cover" 
                  alt="CKAAMS Official Logo" 
                />
              </div>
            </motion.div>

            <p className="text-zinc-500 text-xs md:text-sm max-w-lg leading-relaxed font-medium mx-auto lg:mx-0 opacity-90">
              Master the art and science of medical cosmetology. This comprehensive program combines skincare techniques with medical expertise to transform lives through beauty.
            </p>
            
            <motion.a
              href="#enroll"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-5 bg-black text-[#ae965b] px-10 py-4 rounded-full font-black uppercase text-[10px] tracking-[0.3em] shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:bg-[#ae965b] hover:text-black transition-all"
            >
              Enroll Now ➔
            </motion.a>
          </div>

          {/* Right: Framed Image (FMC-2.png) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-2/5 flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <div className="relative group max-w-[450px]">
               <div className="relative rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl aspect-[3/4] lg:aspect-[4/5] bg-white hover:border-[#ae965b]/20 transition-colors">
                  <img 
                    src="/images/cardcourses/FMC-2.png" 
                    className="w-full h-full object-cover object-center" 
                    alt="FMC Medical Cosmetology" 
                  />
               </div>
               <div className="absolute -top-4 -right-4 w-5 h-5 bg-green-500 border-4 border-white rounded-full animate-pulse shadow-lg"></div>
            </div>
          </motion.div>
        </section>

        {/* --- 2. QUICK DETAILS --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-28">
          {[
            { icon: <Clock size={20}/>, t: "Duration", v: "6 Months Program" },
            { icon: <Users size={20}/>, t: "Eligibility", v: "Medical & Allied Physicians" },
            { icon: <ShieldCheck size={20}/>, t: "Training", v: "Live + 9 Days Practical" }
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 md:p-8 rounded-[2rem] border border-black/5 flex items-center gap-5 shadow-sm hover:shadow-lg transition-shadow">
               <div className="bg-[#ae965b]/10 p-3 rounded-xl text-[#ae965b]">{item.icon}</div>
               <div>
                  <p className="text-[9px] font-black uppercase opacity-40 tracking-widest">{item.t}</p>
                  <p className="text-black font-bold text-sm uppercase tracking-tight">{item.v}</p>
               </div>
            </div>
          ))}
        </div>

        {/* --- 3. LEARN HIGHLIGHTS --- */}
        <div className="mb-28">
          <div className="text-left mb-12 flex flex-col items-start gap-1">
             <p className="text-[#ae965b] text-[10px] font-black uppercase tracking-[0.4em]">Curriculum</p>
             <h3 className="text-black text-2xl font-black uppercase italic tracking-tighter border-b-2 border-black w-fit pb-2 leading-tight">Expertise in <span className="text-[#ae965b]">Cosmetology</span></h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-[2.5rem] border border-black/5 hover:border-[#ae965b]/50 transition-colors group">
              <h3 className="text-black font-black uppercase italic text-lg mb-4 border-b border-black/5 pb-3 group-hover:text-[#ae965b]">Skin Biology</h3>
              <ul className="space-y-3">
                {["Fundamentals", "Skin Biology Basics", "Common Skin Concerns", "Medical Grade Products"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-zinc-500 text-[10px] font-black uppercase tracking-widest">
                    <CheckCircle2 size={14} className="text-[#ae965b]" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-[2.5rem] border border-black/5 hover:border-[#ae965b]/50 transition-colors group">
              <h3 className="text-black font-black uppercase italic text-lg mb-4 border-b border-black/5 pb-3 group-hover:text-[#ae965b]">Advanced Tech</h3>
              <ul className="space-y-3">
                {["Chemical Peels", "Microdermabrasion", "Laser Treatments", "Botox & Fillers"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-zinc-500 text-[10px] font-black uppercase tracking-widest">
                    <CheckCircle2 size={14} className="text-[#ae965b]" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-[2.5rem] border border-black/5 hover:border-[#ae965b]/50 transition-colors group">
              <h3 className="text-black font-black uppercase italic text-lg mb-4 border-b border-black/5 pb-3 group-hover:text-[#ae965b]">Patient Care</h3>
              <ul className="space-y-3">
                {["Client Consultation", "Safety Protocols", "Ethical Practices", "Hands-on Training"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-zinc-500 text-[10px] font-black uppercase tracking-widest">
                    <CheckCircle2 size={14} className="text-[#ae965b]" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* --- 4. WHY FMC? --- */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-black text-4xl md:text-6xl font-black uppercase italic tracking-tighter leading-none">
               Why <span className="text-[#ae965b] not-italic">FMC?</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { t: "Live Sessions", d: "6 Months of interactive live lectures with experts." },
              { t: "Hands-On", d: "9 Days of intensive clinical on-campus training." },
              { t: "Networking", d: "Join a global alumni network of medical cosmetologists." },
              { t: "Faculty", d: "Learn from internationally recognized medical professionals." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-[2rem] border border-black/5 flex flex-col items-center text-center shadow-sm">
                <Award size={24} className="text-[#ae965b] mb-4" />
                <h4 className="font-black uppercase italic text-sm mb-2 leading-tight">{item.t}</h4>
                <p className="text-zinc-400 text-[9px] font-bold uppercase leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- 5. ENROLLMENT FORM --- */}
        <div id="enroll" className="max-w-4xl mx-auto bg-white p-8 md:p-16 rounded-[3rem] shadow-[0_30px_100px_rgba(0,0,0,0.05)] border border-black/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#ae965b]/10 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="text-center mb-10 relative z-10">
            <h2 className="text-black text-3xl md:text-5xl font-black uppercase italic tracking-tighter leading-none text-center">Enroll <span className="text-[#ae965b]">Now</span></h2>
            <p className="text-[#ae965b] font-black uppercase text-[10px] tracking-[0.4em] mt-3">Advanced Clinical Excellence</p>
          </div>
          
          <form className="relative z-10 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" placeholder="NAME (required)" required className="w-full bg-[#fcfbf7] p-4 rounded-xl outline-none text-black font-bold text-xs tracking-widest border border-black/5 focus:border-[#ae965b] transition-all" />
              <input type="tel" placeholder="PHONE (required)" required className="w-full bg-[#fcfbf7] p-4 rounded-xl outline-none text-black font-bold text-xs tracking-widest border border-black/5 focus:border-[#ae965b] transition-all" />
            </div>
            <textarea placeholder="YOUR MESSAGE (optional)" rows="4" className="w-full bg-[#fcfbf7] p-4 rounded-xl outline-none text-black font-bold text-xs tracking-widest border border-black/5 focus:border-[#ae965b] transition-all h-28 resize-none"></textarea>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-black text-[#ae965b] py-5 rounded-xl font-black uppercase text-[10px] tracking-[0.5em] hover:bg-[#ae965b] hover:text-black transition-all shadow-xl"
            >
              Submit Application ➔
            </motion.button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default FMCFellowshipPage;