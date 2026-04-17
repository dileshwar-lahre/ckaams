"use client";

import React from 'react';
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <div className="bg-[#f5f0e3] min-h-screen pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        
        {/* --- SECTION 1: DR. NEERAJ PANDEY (Left Aligned) --- */}
        <header className="mb-8 border-l-4 border-[#ae965b] pl-6">
          <p className="text-[#ae965b] text-[10px] font-black uppercase tracking-[0.4em]">Director Profile</p>
          <h1 className="text-black text-2xl md:text-3xl font-black uppercase tracking-tighter mt-1 italic">
            Dr. Neeraj Pandey
          </h1>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-32">
          {/* Image - Chota size (lg:col-span-4) */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="lg:col-span-4 order-1"
          >
            <div className="rounded-2xl overflow-hidden shadow-xl border-2 border-white aspect-[4/5] max-w-[320px] mx-auto lg:mx-0">
              <img src="/images/dr-neeraj-pandey.jpg" className="w-full h-full object-cover object-top" alt="Dr. Neeraj Pandey" />
            </div>
          </motion.div>
          
          {/* Text - Top Margin add kiya hai (mt-6) */}
          <div className="lg:col-span-8 order-2 mt-2 lg:mt-6 space-y-5">
            <h3 className="text-[#ae965b] font-black text-sm uppercase tracking-widest">Director, CKAAMS | MBBS, DNB (Plastic Surgery)</h3>
            <p className="text-zinc-800 text-sm md:text-base leading-relaxed font-medium">
              Dr. Neeraj Pandey is a highly regarded plastic surgeon, hair transplant surgeon, and cosmetologist based in Raipur, Chhattisgarh. He is the Head of Department and Chief Operating Surgeon at Cosmetic Krafts, a well-known center for advanced aesthetic treatments in the region.
            </p>
            <p className="text-zinc-700 text-sm md:text-base leading-relaxed italic border-l-2 border-[#ae965b]/30 pl-6">
              With over 14 years of experience, Dr. Pandey has established a reputation for practical, genuine care and precise diagnosis. His approach combines a keen eye for detail with a compassionate bedside manner.
            </p>
            <p className="text-zinc-500 text-xs uppercase font-bold tracking-tight">
              IAPS, ISSH, NABI Member
            </p>
          </div>
        </section>


        {/* --- SECTION 2: DR. KSHAMA PANDEY (Right Aligned) --- */}
        <header className="mb-8 border-r-4 border-[#ae965b] pr-6 text-right">
          <p className="text-[#ae965b] text-[10px] font-black uppercase tracking-[0.4em]">Director Profile</p>
          <h1 className="text-black text-2xl md:text-3xl font-black uppercase tracking-tighter mt-1 italic">
            Dr. Kshama Pandey
          </h1>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-20">
          {/* Text - Top Margin add kiya hai (mt-6) */}
          <div className="lg:col-span-8 order-2 lg:order-1 mt-2 lg:mt-6 space-y-5 text-right flex flex-col items-end">
            <h3 className="text-[#ae965b] font-black text-sm uppercase tracking-widest">Director, CKAAMS | MBBS, ABAM (USA)</h3>
            <p className="text-zinc-800 text-sm md:text-base leading-relaxed font-medium">
              Dr. Kshama Pandey is a distinguished Medical Aesthetician and Director at CKAAMS, specializing in the intersection of clinical excellence and aesthetic artistry. Her expertise lies in non-surgical facial rejuvenation and advanced laser treatments.
            </p>
            <p className="text-zinc-700 text-sm md:text-base leading-relaxed italic border-r-2 border-[#ae965b]/30 pr-6">
              A Fellow of the American Board of Aesthetic Medicine (ABAM), she brings international standards of care to Central India. Her patient-centric approach focuses on enhancing natural beauty through safe and minimally invasive procedures.
            </p>
            <p className="text-zinc-500 text-xs font-bold italic">
              Consultant Medical Aesthetician
            </p>
          </div>

          {/* Image - Chota size (lg:col-span-4) */}
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
        

      </div>
      {/* --- THE SOUL OF CKAAMS (Human-Centric Section) --- */}
        <section className="mt-40 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="space-y-10"
            >
              <div className="inline-block px-4 py-1 border border-[#ae965b]/30 rounded-full text-[#ae965b] text-[10px] font-bold uppercase tracking-[0.3em]">
                Crafting Excellence
              </div>
              
              <h2 className="text-4xl md:text-7xl font-black uppercase italic tracking-tighter text-black leading-none">
                More than just <br /> 
                <span className="text-[#ae965b] not-italic">Education.</span>
              </h2>

              <div className="space-y-6 max-w-2xl mx-auto">
                <p className="text-zinc-800 text-lg md:text-2xl font-light leading-relaxed italic">
                  "At CKAAMS, we don't just teach techniques; we nurture the artistic vision behind every medical procedure."
                </p>
                <p className="text-zinc-500 text-sm md:text-base leading-relaxed">
                  Welcome to a space where **beauty meets science**. As a core part of Cosmo Meducation Private Limited, our institute stands as a lighthouse for professionals who are ready to redefine the standards of Aesthetic Medicine.
                </p>
              </div>

              <div className="flex justify-center gap-4 pt-4">
                 <div className="w-12 h-[1px] bg-[#ae965b] self-center" />
                 <span className="text-[#ae965b] text-[10px] font-black uppercase tracking-[0.5em]">Founders' Promise</span>
                 <div className="w-12 h-[1px] bg-[#ae965b] self-center" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- MISSION & VISION (Minimalist Aesthetic) --- */}
        <section className="mt-32 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto px-6">
          <div className="relative p-10 bg-white/50 backdrop-blur-sm rounded-[3rem] border border-[#ae965b]/10">
            <span className="text-5xl font-black text-[#ae965b]/5 absolute top-6 right-10 select-none">MISSION</span>
            <h3 className="text-black text-2xl font-black uppercase italic mb-6">Our Mission</h3>
            <p className="text-zinc-600 text-sm md:text-base leading-relaxed font-medium">
              To empower the next generation of doctors with clinical precision and an eye for aesthetics, ensuring they deliver results that enhance lives, not just appearances.
            </p>
          </div>

          <div className="relative p-10 bg-white/50 backdrop-blur-sm rounded-[3rem] border border-[#ae965b]/10">
            <span className="text-5xl font-black text-[#ae965b]/5 absolute top-6 right-10 select-none">VISION</span>
            <h3 className="text-black text-2xl font-black uppercase italic mb-6">Our Vision</h3>
            <p className="text-zinc-600 text-sm md:text-base leading-relaxed font-medium">
              To build a global community of specialists who set the gold standard in cosmetology, where every graduate is a symbol of trust, skill, and artistry.
            </p>
          </div>
        </section>

        {/* --- WHY CKAAMS (Premium List Layout) --- */}
        <section className="mt-40 pb-32 max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
               <h2 className="text-black text-4xl md:text-6xl font-black uppercase italic tracking-tighter sticky top-32">
                 Why Choose <br /> <span className="text-[#ae965b]">Us?</span>
               </h2>
            </div>
            
            <div className="lg:col-span-8 space-y-12">
              {[
                {
                  title: "High-End Clinical Training",
                  desc: "Hands-on experience that goes beyond textbooks. We focus on real-patient scenarios to build real-world confidence."
                },
                {
                  title: "Lifelong Alumni Mentorship",
                  desc: "Our relationship doesn't end with a certificate. We stand by our students throughout their career journey."
                },
                {
                  title: "Industry-Leading Faculty",
                  desc: "Learn from specialists who are actively shaping the future of Aesthetic Medicine across the globe."
                },
                {
                  title: "Elite Professional Network",
                  desc: "Gain access to an exclusive community of peers and experts that opens doors to international opportunities."
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="group flex gap-8 border-b border-black/5 pb-10"
                >
                  <span className="text-[#ae965b] font-black text-2xl opacity-30 group-hover:opacity-100 transition-opacity">0{i+1}</span>
                  <div className="space-y-2">
                    <h3 className="text-black text-xl font-black uppercase tracking-tight group-hover:text-[#ae965b] transition-colors">{item.title}</h3>
                    <p className="text-zinc-500 text-sm md:text-base leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-24 text-center">
             <motion.a 
               href="/contact"
               className="inline-flex items-center gap-4 bg-black text-white px-10 py-5 rounded-full hover:bg-[#ae965b] transition-all duration-500 shadow-2xl group"
             >
                <span className="text-xs font-black uppercase tracking-widest">Start Your Journey</span>
                <span className="group-hover:translate-x-2 transition-transform">➔</span>
             </motion.a>
          </div>
        </section>
    </div>
  );
};

export default AboutPage;