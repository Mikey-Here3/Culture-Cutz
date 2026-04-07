"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Scissors, User, Clock, CheckCircle, Sparkles, Award } from "lucide-react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const services = [
  { 
    title: "Classic Haircut", 
    price: "$30", 
    duration: "30 min",
    image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=1000&auto=format&fit=crop",
    description: "Precision cut tailored to your face shape and lifestyle. Includes consultation, wash, cut, and style.",
    features: ["Consultation", "Hair Wash", "Precision Cut", "Styling"]
  },
  { 
    title: "Skin Fade", 
    price: "$35", 
    duration: "45 min",
    image: "https://images.unsplash.com/photo-1599351431613-18ef1fdd27e1?q=80&w=1000&auto=format&fit=crop",
    description: "Seamless gradient from skin to hair. The ultimate modern look with razor-sharp precision.",
    features: ["Taper Fade", "Line Up", "Razor Finish", "Hot Towel"]
  },
  { 
    title: "Beard Sculpting", 
    price: "$20", 
    duration: "20 min",
    image: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=1000&auto=format&fit=crop",
    description: "Complete beard grooming with hot towel treatment, trim, shape, and oil application.",
    features: ["Hot Towel", "Trim & Shape", "Razor Line", "Beard Oil"]
  },
  { 
    title: "The Full Package", 
    price: "$45", 
    duration: "60 min",
    image: "https://images.unsplash.com/photo-1503951914875-452162b7f30a?q=80&w=1000&auto=format&fit=crop",
    description: "Our signature service combining haircut and beard trim for the complete gentleman's look.",
    features: ["Haircut", "Beard Trim", "Hot Towel", "Premium Products"]
  },
  { 
    title: "Kids Cut", 
    price: "$25", 
    duration: "30 min",
    image: "https://images.unsplash.com/photo-1599351431613-18ef1fdd27e1?q=80&w=1000&auto=format&fit=crop",
    description: "Patient, friendly service for young gentlemen. Making haircuts fun and stress-free.",
    features: ["Kid-Friendly", "Fun Atmosphere", "Quality Cut", "Lollipop"]
  },
  { 
    title: "Executive Grooming", 
    price: "$65", 
    duration: "75 min",
    image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=1000&auto=format&fit=crop",
    description: "Premium VIP experience with facial treatment, haircut, beard service, and styling.",
    features: ["Facial Treatment", "Hair & Beard", "Scalp Massage", "Premium Styling"]
  },
];

export default function Services() {
const sectionRef = useRef<HTMLElement | null>(null);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
     gsap.fromTo(
  ".service-card",
  { y: 100, opacity: 0 },
  {
    y: 0,
    opacity: 1,
    duration: 1,
    stagger: 0.15,
    ease: "power3.out",
    scrollTrigger: {
      trigger: sectionRef.current,
      start: "top 95%",
    },
  }
);
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-32 bg-dark-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gold-400/10 border border-gold-400/30 rounded-full px-6 py-2 mb-6">
            <Award className="text-gold-400 w-5 h-5" />
            <span className="text-gold-400 font-bold text-sm tracking-widest uppercase">Premium Services</span>
          </div>
          <h2 className="font-serif text-5xl md:text-6xl text-white mb-6">Our Services</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Experience world-class grooming with our comprehensive range of services designed for the modern gentleman.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="service-card group relative bg-dark-900 rounded-xl overflow-hidden border border-white/5 hover:border-gold-400/50 transition-all duration-500"
              onMouseEnter={() => setActiveCard(idx)}
              onMouseLeave={() => setActiveCard(null)}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent z-10"></div>
                <Image 
                  src={service.image} 
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 z-20 bg-gold-400 text-dark-900 font-bold px-4 py-2 rounded-full">
                  {service.price}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 relative">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                    <div className="flex items-center gap-2 text-gold-400 text-sm">
                      <Clock size={16} />
                      <span>{service.duration}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3 text-sm text-gray-300">
                      <CheckCircle className="text-gold-400 w-4 h-4" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full bg-transparent border-2 border-gold-400 text-gold-400 font-bold uppercase tracking-wider py-3 rounded-lg hover:bg-gold-400 hover:text-dark-900 transition-all duration-300"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}