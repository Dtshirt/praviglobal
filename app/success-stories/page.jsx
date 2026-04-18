'use client'
import React from 'react';
import { successStoryCategories } from '@/lib/successStoriesData';
import Link from 'next/link';
import { ArrowRight, Star, Heart } from 'lucide-react';

export default function AllSuccessStories() {
  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-rose-100 px-4 py-2 rounded-full mb-6">
            <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
            <span className="text-sm font-semibold text-rose-700">Patient Journeys</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6">Success Stories from the Best IVF Center in Delhi</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            At the Best IVF center in Delhi, nothing brings us more joy than helping patients overcome fertility challenges and start their journey toward parenthood. Discover real stories of hope, resilience, and clinical excellence that reflect our commitment to successful outcomes.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {successStoryCategories.map((category, idx) => (
             <Link href={`/success-stories/${category.slug}`} key={idx} className="block group">
               <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100 h-full flex flex-col group-hover:-translate-y-2">
                 <div className="flex items-center gap-1 mb-4">
                     {[...Array(5)].map((_, i) => (
                       <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                     ))}
                 </div>
                 <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-teal-600 transition-colors">
                   {category.title}
                 </h3>
                 <p className="text-slate-600 mb-8 flex-grow leading-relaxed">
                   {category.description}
                 </p>
                 <div className="flex items-center text-teal-600 font-bold group-hover:translate-x-2 transition-transform">
                   Read Patient Experiences <ArrowRight className="w-5 h-5 ml-2" />
                 </div>
               </div>
             </Link>
          ))}
        </div>

        {/* CTA Bottom */}
        <div className="mt-20 max-w-4xl mx-auto bg-gradient-to-r from-teal-500 to-indigo-600 rounded-3xl p-10 sm:p-14 text-center shadow-xl">
           <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Start Your Own Success Story</h2>
           <p className="text-teal-100 text-lg sm:text-xl mb-8">Schedule a consultation with our fertility experts today to explore your personalized treatment path.</p>
           <Link href="/book-appointment" className="inline-block bg-white text-teal-700 font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all">
              Book Your Appointment
           </Link>
        </div>
      </div>
    </div>
  );
}
