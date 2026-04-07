import { MapPin, Phone, Clock} from "lucide-react";
import { BsInstagram, BsFacebook } from "react-icons/bs";

export default function Footer() {
  return (
    <footer id="contact" className="bg-black pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-bold text-white mb-6">CULTURE <span className="text-gold-400">CUTZ</span></h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Premium grooming for the modern gentleman. Located in the heart of Santa Clara.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-dark-800 flex items-center justify-center text-white hover:bg-gold-400 hover:text-dark-900 transition-colors"><BsInstagram size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-dark-800 flex items-center justify-center text-white hover:bg-gold-400 hover:text-dark-900 transition-colors"><BsFacebook size={18} /></a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Contact Us</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="text-gold-400 w-5 h-5 shrink-0" />
                <span>2213 The Alameda, Santa Clara, CA 95050</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-gold-400 w-5 h-5 shrink-0" />
                <a href="tel:+16693369591" className="hover:text-white transition-colors">+1 (669) 336-9591</a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Hours</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex justify-between"><span>Mon - Fri</span> <span className="text-white">9am - 7pm</span></li>
              <li className="flex justify-between"><span>Saturday</span> <span className="text-white">9am - 6pm</span></li>
              <li className="flex justify-between"><span>Sunday</span> <span className="text-white">10am - 4pm</span></li>
            </ul>
          </div>

          {/* Map Placeholder */}
          <div className="h-48 bg-dark-800 rounded-lg overflow-hidden relative">
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3166.863467448656!2d-121.9686349235966!3d37.35096597197554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb49624952779%3A0x6b8e84556166141!2s2213%20The%20Alameda%2C%20Santa%20Clara%2C%20CA%2095050!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
               width="100%" height="100%" style={{border:0}} allowFullScreen={true} loading="lazy" className="absolute inset-0 grayscale hover:grayscale-0 transition-all"></iframe>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} Culture Cutz Barbershop. All rights reserved.
        </div>
      </div>
    </footer>
  );
}