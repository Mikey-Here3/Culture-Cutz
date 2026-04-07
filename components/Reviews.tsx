"use client";
import { Star } from "lucide-react";

const reviews = [
  { name: "Michael T.", text: "Best fade in Santa Clara! The attention to detail is unmatched.", rating: 5 },
  { name: "David R.", text: "Clean shop, professional barbers, and great vibes. Highly recommend.", rating: 5 },
  { name: "James L.", text: "Finally found a barber who understands how to cut curly hair. 10/10.", rating: 4 },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-dark-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-gold-400 font-bold tracking-widest uppercase mb-2">Testimonials</h2>
            <h3 className="font-serif text-4xl text-white">What Locals Say</h3>
          </div>
          <div className="mt-4 md:mt-0 flex items-center gap-2 bg-dark-800 px-6 py-3 rounded-full border border-white/10">
            <div className="flex text-gold-400"><Star fill="currentColor" size={20} /><Star fill="currentColor" size={20} /><Star fill="currentColor" size={20} /><Star fill="currentColor" size={20} /><Star size={20} /></div>
            <span className="font-bold text-white">4.3/5 Rating</span>
            <span className="text-gray-500 text-sm">(59 Reviews)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-dark-800 p-8 rounded-lg border border-white/5 hover:border-gold-400/30 transition-colors">
              <div className="flex text-gold-400 mb-4">
                {[...Array(review.rating)].map((_, i) => <Star key={i} fill="currentColor" size={16} />)}
              </div>
              <p className="text-gray-300 mb-6 italic">"{review.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold-400 text-dark-900 flex items-center justify-center font-bold">
                  {review.name[0]}
                </div>
                <span className="font-bold text-white">{review.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}