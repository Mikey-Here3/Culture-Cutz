"use client";
import { useState, useEffect } from "react";
import { Menu, X, Scissors } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? "bg-dark-900/95 backdrop-blur-md py-4 border-b border-gold-400/20 shadow-lg" : "bg-transparent py-6"}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <Scissors className="text-gold-400 w-10 h-10 group-hover:rotate-12 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gold-400 blur-xl opacity-0 group-hover:opacity-50 transition-opacity"></div>
          </div>
          <div>
            <span className="font-serif text-2xl font-bold tracking-wider text-white block leading-none">
              CULTURE
            </span>
            <span className="text-gold-400 font-bold tracking-[0.3em] text-xs block">CUTZ</span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {['Services', 'Team', 'Gallery', 'Reviews', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-sm uppercase tracking-widest text-gray-300 hover:text-gold-400 transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gold-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
          <a 
            href="#booking" 
            className="bg-gold-400 text-dark-900 px-8 py-3 font-bold uppercase text-xs tracking-wider hover:bg-white transition-all transform hover:scale-105"
          >
            Book Now
          </a>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-dark-900 border-b border-gold-400/20 p-6 flex flex-col gap-6 md:hidden animate-in slide-in-from-top-5">
          {['Services', 'Team', 'Gallery', 'Reviews', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              onClick={() => setIsOpen(false)} 
              className="text-xl font-medium text-white hover:text-gold-400 transition-colors"
            >
              {item}
            </a>
          ))}
          <a 
            href="#booking" 
            onClick={() => setIsOpen(false)} 
            className="bg-gold-400 text-center text-dark-900 py-4 font-bold uppercase tracking-wider"
          >
            Book Appointment
          </a>
        </div>
      )}
    </nav>
  );
}