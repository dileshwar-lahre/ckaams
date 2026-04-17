"use client";

import React from 'react';
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, MessageCircle } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="bg-[#f5f0e3] min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        
        {/* --- TOP PROFILE LOGO --- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative mb-6 group"
        >
          <div className="w-32 h-32 md:w-44 md:h-44 rounded-full border-[6px] border-white overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-1 bg-white group-hover:border-[#ae965b] transition-all duration-500">
            <img 
              src="/images/ckaams.jpg" 
              className="w-full h-full rounded-full object-cover group-hover:scale-110 transition-transform duration-500"
              alt="CKAAMS Official Logo" 
            />
          </div>
          <div className="absolute bottom-4 right-4 w-6 h-6 bg-green-500 border-4 border-white rounded-full animate-pulse"></div>
        </motion.div>

        {/* --- MAIN TITLES --- */}
        <div className="text-center mb-16">
          <h1 className="text-black text-5xl md:text-7xl font-black uppercase italic tracking-tighter">
            Get In <span className="text-[#ae965b] not-italic text-4xl md:text-6xl italic">Touch</span>
          </h1>
          <p className="text-zinc-500 font-bold uppercase tracking-[0.3em] text-[10px] mt-2 italic">Connect for Admissions & Inquiries</p>
        </div>

        {/* --- INTERACTIVE ACTION CARDS (Call, WhatsApp, Email) --- */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full mb-12">
          <a href="tel:+919770408633" className="group bg-white p-8 rounded-[2.5rem] shadow-sm border border-black/5 flex flex-col items-center text-center hover:bg-black transition-all duration-500 hover:shadow-2xl">
            <div className="bg-[#ae965b]/10 p-4 rounded-2xl text-[#ae965b] mb-4 group-hover:bg-[#ae965b] group-hover:text-black transition-colors">
              <Phone size={24}/>
            </div>
            <h4 className="text-[10px] font-black uppercase text-zinc-400 mb-1">Direct Call</h4>
            <p className="text-black font-black text-sm group-hover:text-white transition-colors">+91 9770408633</p>
          </a>

          <a href="https://wa.me/919770408633" target="_blank" className="group bg-white p-8 rounded-[2.5rem] shadow-sm border border-black/5 flex flex-col items-center text-center hover:bg-[#25D366] transition-all duration-500 hover:shadow-2xl">
            <div className="bg-[#25D366]/10 p-4 rounded-2xl text-[#25D366] mb-4 group-hover:bg-white group-hover:text-[#25D366] transition-colors">
              <MessageCircle size={24}/>
            </div>
            <h4 className="text-[10px] font-black uppercase text-zinc-400 mb-1">WhatsApp Us</h4>
            <p className="text-black font-black text-sm group-hover:text-white transition-colors">Chat Now</p>
          </a>

          <a href="mailto:ckaams.edu@gmail.com" className="group bg-white p-8 rounded-[2.5rem] shadow-sm border border-black/5 flex flex-col items-center text-center hover:bg-black transition-all duration-500 hover:shadow-2xl">
            <div className="bg-[#ae965b]/10 p-4 rounded-2xl text-[#ae965b] mb-4 group-hover:bg-[#ae965b] group-hover:text-black transition-colors">
              <Mail size={24}/>
            </div>
            <h4 className="text-[10px] font-black uppercase text-zinc-400 mb-1">Send Email</h4>
            <p className="text-black font-black text-sm group-hover:text-white transition-colors">ckaams.edu@gmail.com</p>
          </a>
        </div>

        {/* --- PREMIUM CONTACT FORM (Visible Text Fix) --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-white w-full p-10 md:p-16 rounded-[3.5rem] shadow-2xl border border-black/5 mb-24 relative overflow-hidden"
        >
          <div className="absolute -top-10 -right-10 text-9xl font-black text-black/[0.02] select-none pointer-events-none uppercase tracking-tighter italic">Forms</div>
          
          <form className="relative z-10 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-[#ae965b] ml-2">Full Name</label>
                <input 
                  type="text" 
                  placeholder="Enter your name" 
                  className="w-full bg-[#f5f0e3] p-5 rounded-2xl border-2 border-transparent focus:border-[#ae965b] outline-none text-black font-bold text-base placeholder:text-zinc-400 transition-all shadow-inner" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-[#ae965b] ml-2">Phone Number</label>
                <input 
                  type="tel" 
                  placeholder="Enter mobile number" 
                  className="w-full bg-[#f5f0e3] p-5 rounded-2xl border-2 border-transparent focus:border-[#ae965b] outline-none text-black font-bold text-base placeholder:text-zinc-400 transition-all shadow-inner" 
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-[#ae965b] ml-2">Your Message</label>
              <textarea 
                placeholder="How can we help you today?" 
                rows="4" 
                className="w-full bg-[#f5f0e3] p-5 rounded-2xl border-2 border-transparent focus:border-[#ae965b] outline-none text-black font-bold text-base placeholder:text-zinc-400 resize-none transition-all shadow-inner"
              ></textarea>
            </div>
            <button className="w-full bg-black text-[#ae965b] p-6 rounded-2xl font-black uppercase text-xs tracking-[0.4em] hover:bg-[#ae965b] hover:text-black transition-all shadow-[0_10px_30px_rgba(0,0,0,0.2)] flex items-center justify-center gap-3 active:scale-95">
              Send Inquiry ➔
            </button>
          </form>
        </motion.div>

        {/* --- MAP SECTION --- */}
        <div className="w-full space-y-6">
          <div className="flex items-center gap-4 px-6">
             <MapPin className="text-[#ae965b]" />
             <h3 className="text-black font-black uppercase italic text-xl">Find us on <span className="text-[#ae965b]">Map</span></h3>
          </div>
          <div className="w-full h-[500px] rounded-[3.5rem] overflow-hidden shadow-2xl border-8 border-white bg-white group">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.9634919532657!2d81.63660307595561!3d21.233282280205842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dd16a5035f29%3A0xc665132205562d5a!2sAmbedkar%20Chowk%2C%20Civil%20Lines%2C%20Raipur%2C%20Chhattisgarh%20492001!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="transition-all duration-700 group-hover:scale-105"
            ></iframe>
          </div>
          <div className="text-center mt-6">
             <p className="text-zinc-400 font-bold text-[10px] uppercase tracking-widest leading-relaxed">
                47/B-6, Civil Lines, Next to ICICI Bank, <br />
                Ambedkar Chowk, Raipur, Chhattisgarh 492001
             </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactPage;