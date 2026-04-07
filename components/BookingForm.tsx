"use client";
import { useState } from "react";
import { Calendar, Clock, User, Phone, MessageCircle, Check } from "lucide-react";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "Classic Haircut",
    barber: "Any Available",
    date: "",
    time: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    
    setTimeout(() => {
      const message = `Hi Culture Cutz! I'd like to book:%0A%0AName: ${formData.name}%0APhone: ${formData.phone}%0AService: ${formData.service}%0ABarber: ${formData.barber}%0ADate: ${formData.date}%0ATime: ${formData.time}%0A%0APlease confirm my appointment.`;
      window.location.href = `sms:+16693369591?body=${message}`;
      setSubmitted(false);
    }, 1500);
  };

  const services = ["Classic Haircut - $30", "Skin Fade - $35", "Beard Sculpting - $20", "The Full Package - $45", "Kids Cut - $25", "Executive Grooming - $65"];
  const barbers = ["Any Available", "Marcus Johnson", "David Chen", "James Rodriguez", "Alex Thompson"];

  return (
    <section id="booking" className="py-32 bg-dark-900 relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-5xl md:text-6xl text-white mb-6">Book Your Appointment</h2>
            <p className="text-gray-400 text-lg">Secure your spot in just a few clicks</p>
          </div>

          <div className="bg-dark-800 p-8 md:p-12 rounded-2xl border border-white/10 shadow-2xl">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-gold-400 text-sm font-bold uppercase tracking-wider flex items-center gap-2">
                      <User size={16} /> Full Name
                    </label>
                    <input 
                      required 
                      name="name" 
                      onChange={handleChange} 
                      type="text" 
                      placeholder="John Doe" 
                      className="w-full bg-dark-900 border border-white/10 rounded-lg p-4 text-white focus:border-gold-400 focus:outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="text-gold-400 text-sm font-bold uppercase tracking-wider flex items-center gap-2">
                      <Phone size={16} /> Phone Number
                    </label>
                    <input 
                      required 
                      name="phone" 
                      onChange={handleChange} 
                      type="tel" 
                      placeholder="(669) 336-9591" 
                      className="w-full bg-dark-900 border border-white/10 rounded-lg p-4 text-white focus:border-gold-400 focus:outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-gold-400 text-sm font-bold uppercase tracking-wider">Select Service</label>
                    <select 
                      name="service" 
                      onChange={handleChange} 
                      className="w-full bg-dark-900 border border-white/10 rounded-lg p-4 text-white focus:border-gold-400 focus:outline-none transition-all"
                    >
                      {services.map((s, i) => <option key={i} value={s}>{s}</option>)}
                    </select>
                  </div>

                  <div className="space-y-3">
                    <label className="text-gold-400 text-sm font-bold uppercase tracking-wider">Preferred Barber</label>
                    <select 
                      name="barber" 
                      onChange={handleChange} 
                      className="w-full bg-dark-900 border border-white/10 rounded-lg p-4 text-white focus:border-gold-400 focus:outline-none transition-all"
                    >
                      {barbers.map((b, i) => <option key={i} value={b}>{b}</option>)}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-gold-400 text-sm font-bold uppercase tracking-wider flex items-center gap-2">
                      <Calendar size={16} /> Date
                    </label>
                    <input 
                      required 
                      name="date" 
                      onChange={handleChange} 
                      type="date" 
                      className="w-full bg-dark-900 border border-white/10 rounded-lg p-4 text-white focus:border-gold-400 focus:outline-none transition-all [color-scheme:dark]"
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="text-gold-400 text-sm font-bold uppercase tracking-wider flex items-center gap-2">
                      <Clock size={16} /> Time
                    </label>
                    <input 
                      required 
                      name="time" 
                      onChange={handleChange} 
                      type="time" 
                      className="w-full bg-dark-900 border border-white/10 rounded-lg p-4 text-white focus:border-gold-400 focus:outline-none transition-all [color-scheme:dark]"
                    />
                  </div>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-gold-400 to-yellow-500 hover:from-white hover:to-gray-100 text-dark-900 font-bold uppercase tracking-widest py-5 rounded-lg transition-all duration-300 flex items-center justify-center gap-3 text-lg"
                >
                  Confirm Booking <MessageCircle size={20} />
                </button>

                <p className="text-center text-gray-500 text-sm">
                  By booking, you'll be redirected to SMS to confirm your appointment
                </p>
              </form>
            ) : (
              <div className="text-center py-16">
                <div className="w-20 h-20 bg-gold-400 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                  <Check className="w-10 h-10 text-dark-900" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Preparing Your Request...</h3>
                <p className="text-gray-400">Redirecting to SMS app</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}