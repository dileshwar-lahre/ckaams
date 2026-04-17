"use client";

import React from 'react';
import { motion } from "framer-motion";

const GalleryPage = () => {
  // 20 Images ka auto-generate loop (lib1.jpg to lib20.jpg)
  const totalImages = 20;
  const galleryImages = Array.from({ length: totalImages }, (_, i) => ({
    id: i + 1,
    // public/images/gallery/lib1.jpg
    src: `/images/gallery/lib${i + 1}.jpg`, 
  }));

  return (
    <div className="bg-[#f5f0e3] min-h-screen pt-32 pb-32 px-6 md:px-12 relative overflow-hidden">
      
      {/* Subtle Background Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#ae965b]/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#ae965b]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Simple Header (No Text, just structure) */}
        <div className="mb-20" />

        {/* --- CLEAN MASONRY GRID (No Text Overlays) --- */}
        {/* Columns adjust automatically: 1 on mobile, 2 on tablet, 3 on desktop */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.05, duration: 0.6 }} // Staggered delay for each image
              whileHover={{ scale: 1.03, y: -5 }} // Subtle zoom & lift on hover
              className="relative overflow-hidden rounded-[2rem] border-4 border-white shadow-[0_15px_60px_rgba(0,0,0,0.06)] cursor-pointer bg-white transition-all duration-500 hover:shadow-[0_25px_80px_rgba(174,150,91,0.1)]"
            >
              
              {/* Image with subtle hover rotation */}
              <img
                src={image.src}
                alt={`CKAAMS Gallery ${image.id}`}
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:rotate-1"
              />

              {/* Minimalist Hover Overlay (Optional - Just for a soft glow) */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#ae965b]/10 to-transparent opacity-0 hover:opacity-100 transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        {/* --- BOTTOM CALL TO ACTION (Contact Button Only) --- */}
        <footer className="mt-40 text-center">
          <div className="flex flex-col items-center gap-10">
            <div className="w-16 h-[1px] bg-[#ae965b]/30" />
            
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-4 bg-black text-[#ae965b] border border-[#ae965b] px-12 py-5 rounded-full hover:bg-[#ae965b] hover:text-black transition-all shadow-2xl group"
            >
              <span className="text-xs font-black uppercase tracking-[0.3em]">
                Get In Touch
              </span>
              <span className="text-lg group-hover:translate-x-1 transition-transform">➔</span>
            </motion.a>
          </div>
        </footer>

      </div>
    </div>
  );
};

export default GalleryPage;