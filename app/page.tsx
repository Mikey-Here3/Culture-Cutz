import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Gallery from "@/components/Gallery";
import BookingForm from "@/components/BookingForm";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-900 selection:bg-gold-400 selection:text-dark-900">
      <Navbar />
      <Hero />
      <Services />
      <Team />
      <Gallery />
      <BookingForm />
      <Reviews />
      <Footer />
      <FloatingButtons />
    </main>
  );
}