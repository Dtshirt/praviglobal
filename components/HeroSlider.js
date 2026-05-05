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
    </section>
  );
}
