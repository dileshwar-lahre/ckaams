"use client";

import React from 'react';
import { motion } from "framer-motion";
import Cardcourses from './Cardcourses';
import Whyjoin from './Whyjoin';
import Acad from './Acad';
import Testimonials from './Testimonials';

const Courses = () => {
  return (
    <div className="bg-[#f5f0e3] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 flex flex-col items-center">
        
        {/* 1. Main Headline */}
        <motion.h1 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-black text-xl md:text-2xl lg:text-3xl font-bold tracking-tight uppercase text-center leading-tight"
        >
          Cosmetic Krafts Academy of Aesthetic Medicine & Surgery
        </motion.h1>

        {/* Subtle Divider */}
        <div className="w-16 h-[1.5px] bg-[#D4AF37] my-8" />

        {/* 2. Welcome & Sub-headline */}
        <div className="text-center mb-8">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-black text-[13px] md:text-sm font-semibold uppercase tracking-[0.2em] mb-3"
          >
            Welcome to CKAAMS (Cosmetic Krafts Academy of Aesthetic Medicine and Surgery)
          </motion.p>
          
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-black text-base md:text-lg font-medium italic opacity-90"
          >
            Elevate Your Career in Aesthetics
          </motion.h2>
        </div>

        {/* 3. Description Paragraph */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="max-w-4xl text-center"
        >
          <p className="text-zinc-800 text-sm md:text-base leading-relaxed font-normal">
            Cosmetic Krafts Academy of Aesthetic Medicine and Surgery (CKAAMS) is your 
            premier destination for world-class education in aesthetic medicine and 
            cosmetic surgery. <span className="font-bold text-black underline decoration-[#D4AF37]/40">CKAAMS is the brainchild of Dr. Neeraj Pandey</span>, 
            who is a renowned plastic surgeon of central India. We are committed to 
            empowering medical professionals with cutting-edge knowledge, hands-on skills, 
            and internationally recognized certifications that set you apart in the 
            rapidly evolving field of aesthetics.
          </p>
        </motion.div>

        {/* 4. Section Header - Our Courses */}
        <div className="mt-20 w-full flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center"
          >
            <h2 className="text-black text-xl md:text-2xl font-bold tracking-[0.3em] uppercase">
              OUR <span className="text-[#D4AF37]">COURSES</span>
            </h2>
            <div className="w-10 h-[2px] bg-black mt-3" />
          </motion.div>

          {/* New Paragraph under Our Courses */}
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-8 max-w-2xl text-center text-zinc-700 text-sm md:text-base italic font-medium leading-relaxed"
          >
            Transform your career with our courses in aesthetics and cosmetology. 
            Gain advanced skills, hands-on experience, and expert guidance for success 
            in the <span className="text-black font-bold">medical cosmetology in Raipur</span>.
          </motion.p>
        </div>
<Cardcourses/>
<Whyjoin/>
<Acad/>
<Testimonials/>
      </div>
    </div>
  )
}

export default Courses;