"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=1000", category: "Fade" },
  { src: "https://images.unsplash.com/photo-1599351431613-18ef1fdd27e1?q=80&w=1000", category: "Beard" },
  { src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=1000", category: "Style" },
  { src: "https://images.unsplash.com/photo-1503951914875-452162b7f30a?q=80&w=1000", category: "Classic" },
  { src: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=1000", category: "Modern" },
  { src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=1000", category: "Grooming" },
];

export default function Gallery() {
  const sectionRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".gallery-item", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="gallery" ref={sectionRef} className="py-32 bg-dark-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-serif text-5xl md:text-6xl text-white mb-6">Our Work</h2>
          <p className="text-gray-400 text-lg">Browse our portfolio of premium cuts and styles</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, idx) => (
            <div 
              key={idx} 
              className={`gallery-item relative group cursor-pointer overflow-hidden rounded-lg ${idx === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
              onClick={() => setSelectedImage(idx)}
            >
              <Image 
                src={image.src} 
                alt={image.category}
                width={600}
                height={600}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center">
                  <ZoomIn className="w-12 h-12 text-gold-400 mx-auto mb-2" />
                  <span className="text-white font-bold uppercase tracking-wider">{image.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <button className="absolute top-6 right-6 text-white hover:text-gold-400 transition-colors">
            <X size={40} />
          </button>
          <Image 
            src={galleryImages[selectedImage].src} 
            alt="Gallery"
            width={1000}
            height={1000}
            className="max-w-full max-h-[90vh] object-contain"
          />
        </div>
      )}
    </section>
  );
}