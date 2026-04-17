"use client";

import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const courses = [
    { code: "PGDCC", name: "Post Graduate Diploma in Clinical Cosmetology", link: "/pgdcc-post-graduate-diploma-in-clinical-cosmetology" },
    { code: "FAM", name: "Fellowship in Aesthetic Medicine", link: "/fam" },
    { code: "FMC", name: "Fellowship in Medical Cosmetology", link: "/fmc" },
    { code: "MCVS", name: "Master Course in Vitiligo Surgery", link: "/mcvs" }
  ];

  const navLinks = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about" },
    { name: "Gallery", link: "/gallery" },
    { name: "Contact Us", link: "/contact" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
      scrolled ? 'bg-black/95 backdrop-blur-md h-20 border-b border-[#D4AF37]/30 shadow-2xl' : 'bg-black h-28'
    }`}>
      <div className="max-w-7xl mx-auto h-full px-6 flex justify-between items-center">
        
        {/* Logo Section */}
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="relative w-16 h-16 md:w-20 md:h-20 transition-transform duration-500 group-hover:scale-110">
            <img 
              src="/images/ckaams.jpg" 
              alt="CKAAMS Logo" 
              className="w-full h-full object-contain rounded-full border border-[#D4AF37]/30"
            />
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="text-[#D4AF37] text-2xl font-black tracking-tighter leading-none">CKAAMS</span>
            <span className="text-white text-[10px] tracking-[0.3em] uppercase opacity-70">Academy</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10">
          <ul className="flex items-center gap-8">
            {navLinks.slice(0, 2).map((item) => (
              <li key={item.name} className="relative group py-2">
                <a href={item.link} className="text-[15px] uppercase tracking-widest font-bold text-white/80 hover:text-[#D4AF37] transition-colors">
                  {item.name}
                </a>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#D4AF37] group-hover:w-full transition-all duration-300"></span>
              </li>
            ))}

            {/* Dropdown Courses */}
            <li 
              className="relative py-8 group cursor-pointer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="flex items-center gap-2 text-[15px] uppercase tracking-widest font-bold text-[#D4AF37]">
                Our Courses
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transition-transform duration-500 ${isHovered ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              <div className={`absolute top-full left-[-100px] w-[450px] bg-[#0c0c0c] border border-[#D4AF37]/20 rounded-2xl overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.9)] transition-all duration-500 transform ${
                isHovered ? 'opacity-100 translate-y-0 visible scale-100' : 'opacity-0 -translate-y-10 invisible scale-95'
              }`}>
                <div className="p-5 bg-[#D4AF37]/5 border-b border-[#D4AF37]/10">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] font-black">Specialized Programs</span>
                </div>
                <div className="grid grid-cols-1">
                  {courses.map((course, index) => (
                    <a key={index} href={course.link} className="group/item flex items-center px-6 py-5 hover:bg-gradient-to-r hover:from-[#D4AF37]/10 hover:to-transparent transition-all border-b border-white/5 last:border-0">
                      <div className="min-w-[60px] h-10 flex items-center justify-center bg-black border border-[#D4AF37]/20 text-[#D4AF37] text-[10px] font-bold rounded group-hover/item:bg-[#D4AF37] group-hover/item:text-black transition-all">
                        {course.code}
                      </div>
                      <p className="ml-4 text-xs font-bold text-white/90 group-hover/item:text-white leading-relaxed uppercase tracking-wider">
                        {course.name}
                      </p>
                    </a>
                  ))}
                </div>
              </div>
            </li>

            {navLinks.slice(2).map((item) => (
              <li key={item.name} className="relative group py-2">
                <a href={item.link} className="text-[15px] uppercase tracking-widest font-bold text-white/80 hover:text-[#D4AF37] transition-colors">
                  {item.name}
                </a>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#D4AF37] group-hover:w-full transition-all duration-300"></span>
              </li>
            ))}
          </ul>

          <button className="px-8 py-3 bg-[#D4AF37] text-black font-black uppercase text-xs tracking-[0.2em] rounded-md hover:bg-white transition-all">
            Apply Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-[#D4AF37] z-[110] relative">
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Slide - Left to Right */}
      <div className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[105] transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'} lg:hidden`} onClick={() => setIsOpen(false)}>
        <div 
          className={`absolute top-0 left-0 w-[80%] max-w-[300px] h-full bg-[#0c0c0c] border-r border-[#D4AF37]/20 p-8 pt-24 transition-transform duration-500 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a key={link.name} href={link.link} className="text-xl font-bold uppercase tracking-wider text-white hover:text-[#D4AF37]" onClick={() => setIsOpen(false)}>
                {link.name}
              </a>
            ))}
            
            <div className="h-[1px] bg-white/10 my-2" />
            
            <p className="text-[#D4AF37] text-xs font-black uppercase tracking-[0.3em] mb-2">Our Courses</p>
            <div className="flex flex-col gap-4">
              {courses.map((course) => (
                <a key={course.code} href={course.link} className="text-sm font-medium text-white/70 hover:text-white" onClick={() => setIsOpen(false)}>
                  {course.code} - {course.name}
                </a>
              ))}
            </div>

            <button className="mt-8 px-6 py-4 bg-[#D4AF37] text-black font-black uppercase tracking-widest rounded-md text-sm">
              Admission Open
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;