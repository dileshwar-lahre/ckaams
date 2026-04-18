"use client";

import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll effect to change navbar height/bg
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when screen resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const courses = [
    { code: "PGDCC", name: "Clinical Cosmetology", link: "/pgdcc" },
    { code: "FAM", name: "Aesthetic Medicine", link: "/fam" },
    { code: "FMC", name: "Medical Cosmetology", link: "/medical-cosmetic" },
    { code: "MCVS", name: "Vitiligo Surgery", link: "/mcvs" }
  ];

  const navLinks = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about" },
    { name: "Gallery", link: "/gallery" },
    { name: "Contact Us", link: "/contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-[9999] transition-all duration-300 ${
      scrolled ? 'bg-black/95 h-20 shadow-xl' : 'bg-black h-24'
    } border-b border-[#8e7941]/20`}>
      
      <div className="max-w-7xl mx-auto h-full px-6 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img 
            src="/images/ckaams.jpg" 
            alt="Logo" 
            className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-[#8e7941]"
          />
          <div className="flex flex-col">
            <span className="text-[#8e7941] text-xl font-bold tracking-tight">CKAAMS</span>
            <span className="text-white text-[8px] tracking-widest uppercase opacity-60">Academy</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-8 text-sm font-semibold uppercase tracking-wider">
            {navLinks.slice(0, 2).map((item) => (
              <li key={item.name}>
                <a href={item.link} className="text-white/80 hover:text-[#8e7941] transition-colors">{item.name}</a>
              </li>
            ))}

            {/* Simple Dropdown */}
            <li 
              className="relative group py-4"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <button className="flex items-center gap-1 text-[#8e7941]">
                Courses
                <svg className={`w-4 h-4 transition-transform ${isHovered ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>

              {isHovered && (
                <ul className="absolute top-full left-0 w-56 bg-[#111] border border-[#8e7941]/30 rounded-md py-2 shadow-2xl animate-in fade-in slide-in-from-top-2">
                  {courses.map((course) => (
                    <li key={course.code}>
                      <a href={course.link} className="block px-4 py-3 text-xs text-white/80 hover:bg-[#8e7941] hover:text-black transition-all">
                        {course.name}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {navLinks.slice(2).map((item) => (
              <li key={item.name}>
                <a href={item.link} className="text-white/80 hover:text-[#8e7941] transition-colors">{item.name}</a>
              </li>
            ))}
          </ul>

          {/* Desktop Apply Now Button - Updated to Link */}
          <a 
            href="/contact" 
            className="ml-4 px-6 py-2.5 bg-[#8e7941] text-black font-bold text-xs uppercase rounded-sm hover:bg-white transition-all text-center inline-block"
          >
            Apply Now
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="lg:hidden text-[#8e7941] p-2 focus:outline-none"
        >
          {isOpen ? (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          ) : (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black z-[10000] lg:hidden transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full p-8">
          {/* Mobile Close Button */}
          <div className="flex justify-end">
            <button onClick={() => setIsOpen(false)} className="text-[#8e7941]">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </div>

          <div className="mt-10 flex flex-col gap-6">
            {navLinks.map((link) => (
              <a key={link.name} href={link.link} className="text-2xl font-bold text-white border-b border-white/10 pb-2" onClick={() => setIsOpen(false)}>
                {link.name}
              </a>
            ))}
            
            <div className="mt-4">
              <p className="text-[#8e7941] text-sm font-bold uppercase mb-4">Our Courses</p>
              <div className="flex flex-col gap-4 pl-4 border-l border-[#8e7941]/30">
                {courses.map((course) => (
                  <a key={course.code} href={course.link} className="text-white/70 text-lg" onClick={() => setIsOpen(false)}>
                    {course.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile Admission Button - Updated to Link */}
            <a 
              href="/contact" 
              className="mt-10 w-full py-4 bg-[#8e7941] text-black font-bold uppercase tracking-widest text-center"
              onClick={() => setIsOpen(false)}
            >
              Admission Open
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;