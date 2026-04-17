"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";

const Cardcourses = () => {
  // Array me description dynamic hai
  const courses = [
    { 
      id: 1, 
      desc: "The Fellowship in Aesthetic Medicine (FAM) is a comprehensive program offering in-depth knowledge and hands-on training in the latest aesthetic techniques.", 
      img: "/images/cardcourses/FMA1.png" 
    },
    { 
      id: 2, 
      desc: "The Fellowship in Medical Cosmetology (FMC) is a specialized course for aspiring professionals looking to gain in-depth knowledge and skills in medical cosmetology.", 
      img: "/images/cardcourses/FMC-2.png" 
    },
    { 
      id: 3, 
      desc: "The Post Graduate Diploma in Clinical Cosmetology (PGDCC) is a course designed to provide training in clinical cosmetology, with advanced aesthetic techniques.", 
      img: "/images/cardcourses/pgdcc3.png" 
    },
    { 
      id: 4, 
      desc: "The Master Course in Vitiligo Surgery (MCVS) is a program offering specialized training in vitiligo treatment and surgical techniques in cosmetic surgery.", 
      img: "/images/cardcourses/MCVS-4.png" 
    },
  ];

  // Expanded state manage karne ke liye (ID store karega)
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="bg-[#f5f0e3] py-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {courses.map((course) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: expandedId === course.id ? 0 : -5 }}
              className="bg-white p-6 rounded-2xl shadow-md border border-zinc-100 flex flex-col items-center text-center group transition-all duration-300"
            >
              {/* Rounded Image */}
              <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-[#D4AF37]/30 mb-5 shadow-sm shrink-0">
                <img
                  src={course.img}
                  alt="Course"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Description Section */}
              <div className="flex flex-col flex-grow items-center w-full">
                <div className="overflow-hidden transition-all duration-300">
                  <p className={`text-black text-[13px] md:text-sm leading-snug font-medium mb-5 transition-all duration-300 ${expandedId === course.id ? "" : "line-clamp-3"}`}>
                    {course.desc}
                  </p>
                </div>
                
                {/* Learn More Button - Click logic added */}
                <button 
                  onClick={() => toggleExpand(course.id)}
                  className="w-full py-2 bg-black text-white font-bold text-[10px] uppercase tracking-widest hover:bg-[#D4AF37] transition-colors duration-300 rounded-lg mt-auto"
                >
                  {expandedId === course.id ? "Show Less" : "Learn More"}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cardcourses;