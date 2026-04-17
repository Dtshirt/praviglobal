'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Phone, Dot } from 'lucide-react';
import { hospitalInfo } from '@/lib/data';

const slides = [
  {
    image: "/images/banner/World IVF.jpeg",
    title: "Affordable World Class IVF Treatment",
    subtitle: "for International, NRI and OCI Patients"
  },
  {
    image: "/images/banner/Dr Monica.jpeg",
    title: "Expert Care & Compassion",
    subtitle: "World-class care with Dr. Monica Sachdev"
  },
  {
    image: "/images/banner/Dr Aradhna.jpeg",
    title: "Best IVF Center in India",
    subtitle: "Evidence-based fertility care with Dr. Ankita"
  },
  {
    image: "/images/banner/Dr rit Shukla.jpeg",
    title: "State of the Art Embryology Lab",
    subtitle: "Highest success rates ensured by Dr. Rit Shukla"
  },
  {
    image: "/images/banner/Hr Kuldeep Centre Head.jpeg",
    title: "Dedicated International Patient Coordinator",
    subtitle: "Mr Kuldeep (Centre Head)"
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Crossfade every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">

      {/* Background Images & Content Slider */}
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-[78%_top] md:bg-center bg-no-repeat -z-20"
            style={{ backgroundImage: `url('${slide.image}')` }}
          />

          {/* Blue Gradient Overlay (Kept exactly as requested for style consistency) */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#005353f1] to-[#00535345] -z-10" />

          {/* Hero Content aligned to layout */}
          <div className="relative h-full flex items-center z-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-3xl">
                {idx === 2 ? (
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                    {slide.title}
                  </h1>
                ) : (
                  <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                    {slide.title}
                  </h2>
                )}
                <p className="text-xl md:text-2xl text-blue-50 mb-8 leading-relaxed font-medium drop-shadow-md">
                  {slide.subtitle}
                </p>
                <div className="flex flex-wrap gap-4 hidden md:block">
                  <Link href="/book-appointment" className="btn-primary text-lg px-8 py-4 hover:scale-105 text-white shadow-xl">
                    Book Appointment <ArrowRight className="ml-2 h-5 w-5 inline" />
                  </Link>
                  <Link href="https://api.whatsapp.com/send/?phone=+918009150040&text=Hello%21+I+would+like+to+know+more+about+your+services.&type=phone_number&app_absent=0" className="btn-secondary text-lg px-8 py-4 hover:scale-105 shadow-xl bg-white text-teal-900 border-none">
                    WhatsApp Us <ArrowRight className="ml-2 h-5 w-5 inline" />
                  </Link>
                </div>

                <div className="grid w-full grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-10">
                  <div className="flex items-center space-x-2 text-white bg-black/20 w-fit px-4 py-2 rounded-full backdrop-blur-sm">
                    <Link href="/surrogacy"><span className="text-lg flex items-center font-medium"><Dot />Surrogacy</span></Link>
                  </div>
                  <div className="flex items-center space-x-2 text-white bg-black/20 w-fit px-4 py-2 rounded-full backdrop-blur-sm">
                    <Link href="donor-services"><span className="text-lg flex items-center font-medium"><Dot />ART Bank</span></Link>
                  </div>
                  <div className="flex items-center space-x-2 text-white bg-black/20 w-fit px-4 py-2 rounded-full backdrop-blur-sm">
                    <Link href="/pgspgd"><span className="text-lg flex items-center font-medium"><Dot />PGT-A/M/SR</span></Link>
                  </div>
                  <div className="flex items-center space-x-2 text-white bg-black/20 w-fit px-4 py-2 rounded-full backdrop-blur-sm">
                    <Link href="/tesa-and-pesa"><span className="text-lg flex items-center font-medium"><Dot />Micro TESE</span></Link>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Slide Indicators / Dots */}
      <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center space-x-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'
              }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
