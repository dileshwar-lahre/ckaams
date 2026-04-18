"use client";

import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full flex flex-col">
      
      {/* Main Footer Section - New Theme Color */}
      <div className="bg-[#8e7941] py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 text-white">
          
          {/* 1. Opening Time - Left Aligned */}
          <div className="flex flex-col items-center md:items-start md:pr-10 pb-10 md:pb-0">
            <h3 className="text-xl font-bold mb-8 border-b-2 border-white/20 pb-1 uppercase tracking-tight">
              Opening Time
            </h3>
            <div className="space-y-5">
              <div>
                <p className="text-xs uppercase tracking-widest opacity-80 mb-1">Monday - Saturday</p>
                <p className="text-xl font-black italic">11 AM To 8 PM</p>
              </div>
              <div className="pt-2">
                <p className="text-xs uppercase tracking-widest opacity-80 mb-1">Sundays</p>
                <p className="text-xl font-black italic opacity-90 underline decoration-white/30">
                  Will be Holidays
                </p>
              </div>
            </div>
          </div>

          {/* 2. Welcome Message - Center Aligned with Vertical Lines */}
          <div className="flex flex-col items-center text-center justify-center py-10 md:py-0 px-4 md:px-10 border-y md:border-y-0 md:border-x border-white/20">
            <p className="text-sm md:text-base leading-relaxed font-medium italic opacity-95">
              "Welcome to The Medical Cosmetic Institute in Raipur, where beauty meets science and artistry. 
              We provide safe, effective, and innovative aesthetic solutions in a luxurious environment."
            </p>
          </div>

          {/* 3. CONTACT US - Right Aligned with Icon focus */}
          <div className="flex flex-col items-center md:items-start md:pl-12 lg:pl-16 pt-10 md:pt-0">
            <h3 className="text-xl font-bold mb-8 border-b-2 border-white/20 pb-1 uppercase tracking-tight">
              Contact Us
            </h3>
            <div className="space-y-7">
              {/* Phone */}
              <div className="flex items-center gap-4 group">
                <div className="shrink-0 w-10 h-10 flex items-center justify-center bg-white/10 rounded-full group-hover:bg-white/20 transition-all">
                  <Phone size={18} className="text-white" />
                </div>
                <span className="text-sm md:text-base font-bold tracking-widest">+91 9770408633</span>
              </div>
              
              {/* Email */}
              <div className="flex items-center gap-4 group">
                <div className="shrink-0 w-10 h-10 flex items-center justify-center bg-white/10 rounded-full group-hover:bg-white/20 transition-all">
                  <Mail size={18} className="text-white" />
                </div>
                <span className="text-sm md:text-base font-bold tracking-wide">ckaams.edu@gmail.com</span>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4 max-w-[300px] group">
                <div className="shrink-0 w-10 h-10 flex items-center justify-center bg-white/10 rounded-full group-hover:bg-white/20 transition-all">
                  <MapPin size={20} className="text-white" />
                </div>
                <p className="text-[11px] md:text-xs font-black leading-tight uppercase pt-1 tracking-wider">
                  CKAAMS, 47/B-6, Civil Lines, Next to ICICI Bank, Ambedkar Chowk, Raipur, 492001
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Copyright Section - Black Background */}
      <div className="bg-black py-12 flex flex-col items-center justify-center text-center px-4">
        <div className="flex items-center gap-4 mb-6 opacity-30">
          <div className="w-16 md:w-32 h-[1px] bg-[#8e7941]" />
          <div className="text-[#8e7941] text-2xl italic font-serif">❦</div>
          <div className="w-16 md:w-32 h-[1px] bg-[#8e7941]" />
        </div>
        
        <p className="text-[#8e7941] text-[10px] md:text-xs tracking-[0.3em] font-bold uppercase">
          Ckaams © 2025. <span className="text-white/20 mx-2">|</span> Designed by <span className="text-[#8e7941] hover:text-white transition-colors cursor-pointer">My Digital Patron.</span>
        </p>
      </div>

    </footer>
  );
};

export default Footer;