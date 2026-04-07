"use client";
import { Phone, Calendar } from "lucide-react";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-4 md:hidden">
      <a href="tel:+16693369591" className="w-14 h-14 bg-dark-800 border border-white/20 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-gold-400 hover:text-dark-900 transition-colors">
        <Phone size={24} />
      </a>
      <a href="#booking" className="w-14 h-14 bg-gold-400 rounded-full flex items-center justify-center text-dark-900 shadow-lg hover:bg-white transition-colors">
        <Calendar size={24} />
      </a>
    </div>
  );
}