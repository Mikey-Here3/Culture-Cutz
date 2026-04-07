"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const team = [
  {
    name: "Marcus Johnson",
    role: "Master Barber & Owner",
    image: "https://images.unsplash.com/photo-1583336137340-61e50bb20fdc?q=80&w=1000&auto=format&fit=crop",
    specialty: "Fades & Classic Cuts",
    experience: "8 years"
  },
  {
    name: "David Chen",
    role: "Senior Barber",
    image: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=1000&auto=format&fit=crop",
    specialty: "Beard Sculpting",
    experience: "6 years"
  },
  {
    name: "James Rodriguez",
    role: "Style Specialist",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop",
    specialty: "Modern Styles",
    experience: "5 years"
  },
  {
    name: "Alex Thompson",
    role: "Junior Barber",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop",
    specialty: "Kids Cuts",
    experience: "3 years"
  }
];

export default function Team() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".team-member", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-dark-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-serif text-5xl md:text-6xl text-white mb-6">Meet The Team</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Our skilled barbers are dedicated to crafting your perfect look with precision and style.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, idx) => (
            <div key={idx} className="team-member group relative">
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg mb-6">
                <Image 
                  src={member.image} 
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent opacity-60"></div>
                
                {/* Social Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <a href="#" className="inline-flex items-center gap-2 text-gold-400 hover:text-white transition-colors">
                    <FaInstagram size={20} /> Follow
                  </a>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
              <p className="text-gold-400 font-medium mb-2">{member.role}</p>
              <div className="flex justify-between text-sm text-gray-400">
                <span>{member.specialty}</span>
                <span>{member.experience}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}