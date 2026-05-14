'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  { image: "/images/hero1.png", alt: "Best IVF Centre in Delhi - Pravi Global IVF Specialized Fertility Care" },
  { image: "/images/hero2.png", alt: "Top IVF Doctor in Delhi - Advanced Reproductive Technology at Pravi IVF" },
  { image: "/images/hero3.png", alt: "Affordable IVF Cost in Delhi - High Success Rates and Compassionate Care" },
  { image: "/images/hero4.png", alt: "World Class IVF Treatment in India - Expert Fertility Specialists" },
  { image: "/images/hero15.png", alt: "Pravi Global IVF - Your Path to Parenthood with Modern IVF Solutions" }
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative w-full bg-white overflow-hidden group">
      {/* VISUALLY HIDDEN H1 FOR SEO - CRITICAL FOR GOOGLE RANKING */}
      <h1 className="sr-only">
        Best IVF Centre in Delhi - Top IVF Doctor for Advanced Fertility Treatment & Affordable IVF Cost
      </h1>

      {/* 16:9 ASPECT RATIO SLIDER CONTAINER */}
      <div className="relative w-full aspect-[16/9]">
        {slides.map((slide, idx) => {
          // Optimization: Only render the current slide on the server (idx 0 initially)
          // or render all if mounted to allow transitions
          if (!mounted && idx !== 0) return null;
          
          return (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              {/* Standard 16:9 Banner Display */}
              <div className="relative w-full h-full">
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  className="object-contain"
                  priority={idx === 0}
                  sizes="100vw"
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/10 hover:bg-black/20 backdrop-blur-md border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button 
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/10 hover:bg-black/20 backdrop-blur-md border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              idx === current ? 'w-8 bg-teal-600 shadow-sm' : 'w-2 bg-black/20'
            }`}
          />
        ))}
      </div>

      {/* Google Rating Floating Badge */}
      <div className="absolute top-6 right-6 z-30 hidden sm:flex items-center gap-3 bg-white/95 backdrop-blur-sm p-3 rounded-2xl shadow-xl border border-teal-100 animate-fade-in">
        <div className="flex-shrink-0 w-10 h-10 bg-[#f1f3f4] rounded-full flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-6 h-6">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
        </div>
        <div>
          <div className="flex items-center gap-1 mb-0.5">
            <span className="text-lg font-bold text-gray-900">4.9</span>
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
          <p className="text-[10px] uppercase tracking-wider font-bold text-gray-500 leading-none">Google Rating · 248 Reviews</p>
        </div>
      </div>
    </section>
  );
}
