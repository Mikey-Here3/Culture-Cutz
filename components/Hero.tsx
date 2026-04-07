"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowRight, Phone, Star } from "lucide-react";

export default function Hero() {
const heroRef = useRef<HTMLElement | null>(null);
const textRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero text animation
     if (textRef.current) {
  gsap.from(textRef.current.children, {
    y: 100,
    opacity: 0,
    duration: 1.2,
    stagger: 0.2,
    ease: "power4.out",
  });
}

      // Parallax effect on scroll
      gsap.to(".hero-bg", {
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
        y: 200,
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="hero-bg absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-barber-cutting-a-mans-hair-with-scissors-4248-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900/90 via-dark-900/70 to-dark-900"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 border border-gold-400/30 rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/3 right-10 w-32 h-32 border border-gold-400/20 rounded-full animate-pulse delay-1000"></div>

      <div ref={textRef} className="relative z-10 container mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-8">
          <Star className="text-gold-400 w-5 h-5 fill-current" />
          <span className="text-white font-semibold">4.3 Rating (59 Reviews)</span>
        </div>
        
        <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-6 leading-none">
          CULTURE <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-yellow-300 to-gold-400">CUTZ</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-4 font-light tracking-wide">
          Fresh Cuts. Clean Style. Confidence.
        </p>
        
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12 font-light">
          Santa Clara's premier destination for modern grooming. Where tradition meets contemporary style.
        </p>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <a 
            href="#booking" 
            className="group relative bg-gold-400 text-dark-900 px-10 py-5 font-bold uppercase tracking-wider overflow-hidden rounded-sm"
          >
            <span className="relative z-10 flex items-center gap-3">
              Book Appointment <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
          </a>
          
          <a 
            href="tel:+16693369591" 
            className="group flex items-center gap-3 text-white border-2 border-white/30 px-10 py-5 font-bold uppercase tracking-wider hover:bg-white/10 transition-all"
          >
            <Phone size={20} /> Call Now
          </a>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-gold-400 mb-2">5+</div>
            <div className="text-gray-400 text-sm uppercase tracking-wider">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-gold-400 mb-2">10k+</div>
            <div className="text-gray-400 text-sm uppercase tracking-wider">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-gold-400 mb-2">6</div>
            <div className="text-gray-400 text-sm uppercase tracking-wider">Expert Barbers</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2">
          <div className="w-1 h-3 bg-gold-400 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}