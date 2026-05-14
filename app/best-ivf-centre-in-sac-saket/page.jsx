'use client'
import React, { useState } from 'react';
import { Phone, CheckCircle, Activity, Heart, Shield, Users, MapPin, Plus, Minus, ArrowRight, Star, Award, Info } from 'lucide-react';
import Link from 'next/link';

export default function SaketIVFPage() {
  const [activeFaq, setActiveFaq] = useState(null);

  const treatments = [
    { title: "IVF Treatment In Saket Delhi", desc: "Our IVF Clinic In Saket, Delhi provides the most effective IVF Treatment In Saket Delhi for Saket Delhi couples. We are a leading Fertility Centre In Saket Delhi." },
    { title: "IUI Treatment Saket Delhi", desc: "Expert IUI Treatment Saket Delhi at our Saket Delhi clinic. A reliable Saket Delhi starting point for your Saket Delhi journey." },
    { title: "ICSI Treatment Delhi Delhi", desc: "Specialized ICSI Treatment Delhi Delhi at our IVF Hospital In South Delhi. Ideal for Saket Delhi male fertility concerns." },
    { title: "Male Infertility Treatment Delhi Delhi", desc: "Compassionate Male Infertility Treatment Delhi Delhi in Saket Delhi. We find Saket Delhi solutions for Saket Delhi families." },
    { title: "Female Infertility Specialist Delhi", desc: "Consult our Female Infertility Specialist Delhi at the Best IVF Clinic In Saket, Delhi for Saket Delhi fertility care." },
    { title: "PCOS Fertility Treatment Saket Delhi", desc: "We help Saket Delhi women with Saket Delhi PCOS through specialized Saket Delhi fertility care in Saket Delhi." },
  ];

  const faqs = [
    {
      q: "Where is the best IVF Clinic In Saket, Delhi?",
      a: "Our clinic is recognized as the leading IVF Clinic In Saket, Delhi, offering world-class IVF Treatment In Saket Delhi and support from the Best Fertility Doctor In Saket Delhi."
    },
    {
      q: "Looking for an IVF Hospital In South Delhi?",
      a: "We are a premier IVF Hospital In South Delhi, centrally located for Saket Delhi and providing high-success IVF Treatment In Saket Delhi."
    },
    {
      q: "Is IUI Treatment Saket Delhi effective?",
      a: "Yes, IUI Treatment Saket Delhi is an excellent first-line Saket Delhi treatment. Our Fertility Centre In Saket Delhi has helped many Saket Delhi couples conceive."
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-rose-900 text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-950 via-rose-900 to-indigo-950 opacity-90 z-10"></div>
        <div className="max-w-7xl mx-auto relative z-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 bg-rose-500/20 backdrop-blur-md border border-rose-400 rounded-full px-4 py-1.5 text-rose-100 font-semibold text-sm mb-6">
              <Heart className="w-4 h-4 text-rose-300"/>
              <span>Leading Fertility Centre In Saket Delhi</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-4">
              Best <span className="text-rose-300">IVF Clinic In Saket, Delhi</span>: Trust the Best Fertility Doctor In Saket Delhi
            </h1>
            <div className="flex items-center gap-4 mb-8">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span className="text-rose-100 font-semibold">4.9/5 based on 248+ Google Reviews</span>
            </div>
            <p className="text-xl text-rose-100 mb-8 max-w-xl leading-relaxed">
              Start your journey at our IVF Hospital In South Delhi. We provide personalized IVF Treatment In Saket Delhi and compassionate Saket Delhi support.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 text-sm font-medium">
              {[
                "Best Fertility Doctor In Saket Delhi",
                "Leading IVF Hospital In South Delhi",
                "Advanced ICSI Treatment Delhi Delhi",
                "Expert IUI Treatment Saket Delhi"
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-3">
                  <CheckCircle className="text-rose-400 w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-100">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#contact-form" className="bg-rose-500 hover:bg-rose-600 text-white px-10 py-5 rounded-full font-bold text-lg text-center transition-all shadow-xl">
                Book Saket Delhi Consultation
              </Link>
              <a href="tel:+919999999999" className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-10 py-5 rounded-full font-bold text-lg text-center transition-all flex items-center justify-center gap-2">
                Call Saket Delhi Expert
              </a>
            </div>
          </div>

          {/* Lead Form */}
          <div className="bg-white rounded-3xl p-10 shadow-2xl relative border border-rose-50" id="contact-form">
            <h3 className="text-2xl font-bold text-slate-800 mb-2">Connect with our IVF Clinic In Saket, Delhi</h3>
            <p className="text-slate-500 mb-8 text-sm">Consult the Best Fertility Doctor In Saket Delhi today.</p>
            
            <form className="space-y-5 text-slate-800">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Saket Delhi Name</label>
                <input type="text" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:outline-none" placeholder="Enter name" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Saket Delhi Phone</label>
                <input type="tel" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:outline-none" placeholder="Enter mobile" />
              </div>
              <button type="button" className="w-full bg-rose-600 hover:bg-rose-700 text-white font-bold py-5 rounded-xl transition-all mt-4">
                Request Saket Delhi Callback
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 2. ABOUT SECTION */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-8 leading-tight">Expert IVF Treatment In Saket Delhi at our Fertility Centre In Saket Delhi</h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                Our IVF Clinic In Saket, Delhi is dedicated to helping Saket Delhi families. As a premier IVF Hospital In South Delhi, we provide the Best Fertility Doctor In Saket Delhi for your Saket Delhi journey.
              </p>
              <p>
                Whether you need IUI Treatment Saket Delhi or ICSI Treatment Delhi Delhi, our Fertility Centre In Saket Delhi is equipped with the latest Saket Delhi technology.
              </p>
            </div>
          </div>
          <div className="bg-rose-50 rounded-[2rem] p-12 h-full flex flex-col justify-center border border-rose-100">
               <h3 className="text-3xl font-bold text-rose-900 mb-8 text-center">Saket Delhi Excellence</h3>
               <ul className="space-y-6">
                 {[
                   "Best Fertility Doctor In Saket Delhi consultations.",
                   "Advanced IVF Treatment In Saket Delhi protocols.",
                   "Leading IVF Hospital In South Delhi infrastructure.",
                   "Specialized Female Infertility Specialist Delhi care.",
                   "Proven Male Infertility Treatment Delhi Delhi results."
                 ].map((reason, i) => (
                   <li key={i} className="flex items-start gap-4">
                     <CheckCircle className="w-6 h-6 text-rose-700 flex-shrink-0 mt-0.5" />
                     <span className="text-slate-700 font-medium leading-relaxed">{reason}</span>
                   </li>
                 ))}
               </ul>
          </div>
        </div>
      </section>

      {/* 3. TREATMENTS SECTION */}
      <section className="py-24 bg-rose-950 text-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Saket Delhi IVF Treatment In Saket Delhi</h2>
            <p className="text-rose-200 max-w-2xl mx-auto text-lg leading-relaxed">
              Discover Saket Delhi solutions at our Fertility Centre In Saket Delhi.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            {treatments.map((treatment, i) => (
              <div key={i} className="bg-rose-900/40 backdrop-blur-sm border border-rose-800 rounded-3xl p-8 hover:bg-rose-900/60 transition-all">
                <h3 className="text-xl font-bold mb-4">{treatment.title}</h3>
                <p className="text-rose-100/80 text-sm leading-relaxed">{treatment.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FAQ SECTION */}
      <section className="py-24 px-4 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-900 mb-16 text-center">Saket Delhi FAQ</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm">
              <button 
                onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                className="w-full text-left px-8 py-6 font-bold text-slate-800 flex justify-between items-center hover:bg-rose-50/20 transition-colors"
              >
                <span>{faq.q}</span>
                {activeFaq === i ? <Minus className="w-5 h-5 text-rose-600" /> : <Plus className="w-5 h-5 text-slate-300" />}
              </button>
              {activeFaq === i && (
                <div className="px-8 pb-8 text-slate-600 border-t border-slate-50 pt-6">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 5. FINAL CTA SECTION */}
      <section className="bg-rose-600 text-white py-24 px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 italic">Trust the Best Fertility Doctor In Saket Delhi</h2>
        <p className="text-xl text-rose-100 mb-12">
          Consult our IVF Clinic In Saket, Delhi for Saket Delhi excellence.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-5">
          <Link href="#contact-form" className="bg-white text-rose-700 px-10 py-5 rounded-full font-bold text-lg shadow-2xl">
            Saket Delhi Consultation
          </Link>
          <a href="tel:+919999999999" className="bg-rose-800 text-white px-10 py-5 rounded-full font-bold text-lg flex items-center justify-center gap-3 border border-rose-500">
            <Phone className="w-5 h-5"/> Saket Delhi Clinic
          </a>
        </div>
      </section>

    </div>
  );
}
