"use client";

import React from 'react';
import { motion } from "framer-motion";
import { CheckCircle2, Clock, Users, ArrowRight, Award, ShieldCheck } from 'lucide-react';

// 1. Component ka naam hamesha Capital letter se start hona chahiye (FAMPage)
const FAMPage = () => {
  return (
    <div className="bg-[#fcfbf7] min-h-screen pt-20 pb-20">
      
      {/* --- HERO BANNER --- */}
      <section className="relative w-full h-[50vh] md:h-[80vh] overflow-hidden mt-4">
        <img 
          src="/images/cardcourses/FMA1.png" // Apni image ka sahi path check kar lena
          className="w-full h-full object-cover object-top" 
          alt="FAM Header" 
        />
        <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-center px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white text-4xl md:text-7xl font-black uppercase italic tracking-tighter"
          >
            FAM
          </motion.h1>
          <p className="text-white text-sm md:text-lg font-bold uppercase tracking-[0.2em] mt-2 opacity-90">
            Fellowship in Aesthetic Medicine
          </p>
          
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
        {/* Baaki ka content jo aapne PGDCC wale page mein rakha tha, wahi yahan bhi daal sakte ho */}
        <div className="text-center py-20 bg-white rounded-[3rem] border border-black/5">
            <h2 className="text-black text-2xl font-black uppercase italic">Course Details Coming Soon</h2>
        </div>
      </div>
    </div>
  );
};

// 2. SABSE IMPORTANT LINE: Ye missing hogi isliye error aa raha hai
export default FAMPage;