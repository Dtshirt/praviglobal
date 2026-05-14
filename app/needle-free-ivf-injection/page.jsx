'use client'
import React, { useState, useEffect } from 'react';
import { 
  Wind, 
  ShieldCheck, 
  Sparkles, 
  Heart, 
  Smile, 
  CheckCircle2, 
  Phone, 
  MessageCircle, 
  Plus, 
  Minus, 
  ArrowRight,
  Award,
  Zap,
  Target,
  Thermometer,
  Activity,
  Star,
  Users
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function NeedleFreePage() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const benefits = [
    { title: "Reduced Discomfort", desc: "Virtually painless delivery without skin-piercing trauma.", icon: <Smile className="w-8 h-8 text-blue-500" /> },
    { title: "Less Needle Anxiety", desc: "Perfect for patients with phobias or anxiety about injections.", icon: <Heart className="w-8 h-8 text-pink-500" /> },
    { title: "Comfortable IVF", desc: "Transforms the daily injection routine into a stress-free experience.", icon: <Sparkles className="w-8 h-8 text-amber-500" /> },
    { title: "Precision Delivery", desc: "Accurate dosage delivery through advanced pressure technology.", icon: <Target className="w-8 h-8 text-teal-500" /> },
    { title: "Advanced Fertility Care", desc: "State-of-the-art technology for modern reproductive health.", icon: <Zap className="w-8 h-8 text-indigo-500" /> },
    { title: "Patient-Friendly", desc: "Designed around your comfort and emotional well-being.", icon: <Users className="w-8 h-8 text-blue-600" /> },
  ];

  const testimonials = [
    {
      name: "Ritu Sharma",
      loc: "South Delhi",
      text: "I was terrified of the daily injections required for IVF. Discovering the needle-free technology at Pravi was a lifesaver. It made my journey so much easier and completely stress-free.",
      rating: 5
    },
    {
      name: "Anjali Gupta",
      loc: "Lajpat Nagar",
      text: "The technology is amazing. You barely feel a thing. It's so much better than traditional needles, especially when you have to do it every day. Highly recommend Pravi Global IVF!",
      rating: 5
    },
    {
      name: "Megha Singh",
      loc: "Greater Kailash",
      text: "Modern IVF treatment at its best. The needle-free option made my second cycle so much more comfortable than my first one elsewhere. Thank you Dr. Monica and team.",
      rating: 5
    }
  ];

  const faqs = [
    {
      q: "Is needle-free IVF injection painful?",
      a: "Most patients describe the sensation as a light 'flick' or a quick puff of air. It is significantly less painful than traditional needle injections and eliminates the trauma of skin piercing."
    },
    {
      q: "Is it safe during fertility treatment?",
      a: "Yes, needle-free technology is FDA-cleared and has been used safely for various medical treatments for years. It ensures accurate medication delivery without compromising the efficacy of your IVF drugs."
    },
    {
      q: "Who can use needle-free injections?",
      a: "Most IVF patients are candidates for needle-free injections, especially those with needle phobia or those who experience bruising from traditional injections. Your specialist will confirm if your specific medications are compatible."
    },
    {
      q: "Are all IVF medicines available needle-free?",
      a: "Many common IVF medications can be delivered via needle-free injectors. However, some specific oil-based or high-volume medications may still require traditional methods. We will customize your protocol for maximum comfort."
    },
    {
      q: "Is this technology available at Pravi Global IVF Delhi?",
      a: "Yes, we are proud to be among the leading centers in Delhi offering this advanced technology to our patients as part of our commitment to painless and compassionate fertility care."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans">
      
      {/* STICKY MOBILE CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-[100] md:hidden flex border-t border-slate-100 bg-white/80 backdrop-blur-lg p-2 gap-2">
        <a href="tel:+918009150040" className="flex-1 bg-slate-900 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 text-sm">
          <Phone className="w-4 h-4" /> Call Now
        </a>
        <a href="https://wa.me/918009150040" className="flex-1 bg-green-500 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 text-sm">
          <MessageCircle className="w-4 h-4" /> WhatsApp
        </a>
      </div>

      {/* 1. HERO SECTION */}
      <section className="relative pt-24 pb-32 px-4 overflow-hidden bg-gradient-to-b from-blue-50/50 to-white">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-100/20 rounded-l-[10rem] -z-10 translate-x-1/4"></div>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 rounded-full px-4 py-1.5 font-bold text-xs uppercase tracking-widest">
              <Sparkles className="w-4 h-4" />
              <span>Modern Painless IVF Technology</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-slate-900">
              Advanced <span className="text-blue-600">Needle-Free</span> Injection Technology
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-xl font-light">
              Experience a more comfortable fertility treatment journey with advanced needle-free medication delivery at Pravi Global IVF. Say goodbye to needle anxiety.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/book-appointment" className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-full font-bold transition-all shadow-xl shadow-blue-200 active:scale-95 flex items-center gap-2">
                Book Consultation <ArrowRight className="w-5 h-5" />
              </Link>
              <div className="flex items-center gap-4">
                 <a href="tel:+918009150040" className="w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center text-slate-700 hover:bg-slate-200 transition-colors">
                    <Phone className="w-6 h-6" />
                 </a>
                 <a href="https://wa.me/918009150040" className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center text-green-600 hover:bg-green-100 transition-colors border border-green-100">
                    <MessageCircle className="w-6 h-6" />
                 </a>
              </div>
            </div>
            
            <div className="flex items-center gap-6 pt-8">
               <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                     <Image src="/images/1.jpg" width={40} height={40} alt="User" className="object-cover h-full" />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                     <Image src="/images/2.jpg" width={40} height={40} alt="User" className="object-cover h-full" />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                     <Image src="/images/3.jpeg" width={40} height={40} alt="User" className="object-cover h-full" />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                     <Image src="/images/4.jpeg" width={40} height={40} alt="User" className="object-cover h-full" />
                  </div>
               </div>
               <div className="text-sm">
                  <div className="flex items-center gap-1 text-amber-500 mb-0.5">
                     <Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" />
                  </div>
                  <div className="text-slate-500 font-medium">Trusted by 5000+ Happy Families</div>
               </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-blue-600/5 blur-3xl rounded-full"></div>
            <div className="relative rounded-[3.5rem] overflow-hidden shadow-2xl border-4 border-white">
              <Image 
                src="/images/needle-free-injection.png" 
                alt="Needle-Free Injection Technology for IVF" 
                width={800} 
                height={600} 
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTRODUCTION SECTION */}
      <section className="py-24 px-4 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-slate-900 mb-8">What is Needle-Free Injection?</h2>
        <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-light">
          <p>
            Traditional IVF treatments often involve a series of daily injections over several weeks. For many, the fear of needles (trypanophobia) or the physical discomfort of repeated shots can add significant stress to an already emotional journey.
          </p>
          <p>
            <strong>Needle-free injection technology</strong> is a revolutionary way to deliver medication through the skin without using a traditional needle. It uses high-pressure technology to create a microscopic stream of medicine that penetrates the skin in a fraction of a second, making the process virtually painless and stress-free.
          </p>
        </div>
      </section>

      {/* 3. HOW IT WORKS */}
      <section className="py-24 bg-slate-50 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Precision Science, Maximum Comfort</h2>
            <p className="text-slate-500 font-light">How pressure-based delivery eliminates the need for needles.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { step: "01", title: "Pressure Setup", desc: "The injector uses a powerful spring or gas system to create precise pressure.", icon: <Zap className="w-12 h-12 text-blue-600" /> },
              { step: "02", title: "Micro-Stream", desc: "Medicine is pushed through a microscopic nozzle, creating a stream thinner than a hair.", icon: <Wind className="w-12 h-12 text-blue-600" /> },
              { step: "03", title: "Fast Delivery", desc: "The stream passes through the skin pores instantly, delivering the dose accurately.", icon: <ShieldCheck className="w-12 h-12 text-blue-600" /> }
            ].map((item, i) => (
              <div key={i} className="relative group">
                <div className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 text-center">
                  <div className="text-6xl font-black text-slate-50 absolute -top-4 -right-2 z-0 group-hover:text-blue-50 transition-colors">{item.step}</div>
                  <div className="relative z-10">
                    <div className="flex justify-center mb-8">{item.icon}</div>
                    <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                    <p className="text-slate-500 leading-relaxed font-light">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. BENEFITS SECTION */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-slate-900">Why Choose Needle-Free?</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, i) => (
            <div key={i} className="p-10 rounded-3xl bg-white border border-slate-100 shadow-sm hover:border-blue-200 transition-all group">
              <div className="mb-6 group-hover:scale-110 transition-transform">{benefit.icon}</div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h4>
              <p className="text-slate-500 leading-relaxed text-sm font-light">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. PATIENT PREFERENCE SECTION */}
      <section className="py-24 bg-[#001B3D] text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold leading-tight italic">Why IVF Patients Prefer <span className="text-blue-400">Painless Options</span></h2>
            <div className="space-y-6 text-lg text-blue-100/80 font-light leading-relaxed">
              <p>
                An average IVF cycle can involve 30 to 50 injections. For many women, this is the most daunting part of the process. The physical bruising and mental fatigue can take a toll.
              </p>
              <p>
                By offering needle-free technology, we remove the "fear factor." Patients feel more in control, more relaxed, and more positive about their treatment, which we believe is essential for a successful outcome.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
               <div>
                  <div className="text-4xl font-bold text-blue-400">95%</div>
                  <div className="text-xs uppercase tracking-widest text-slate-400 mt-2">Patient Satisfaction</div>
               </div>
               <div>
                  <div className="text-4xl font-bold text-blue-400">Zero</div>
                  <div className="text-xs uppercase tracking-widest text-slate-400 mt-2">Needle Phobia Issues</div>
               </div>
            </div>
          </div>
          <div className="bg-white/5 backdrop-blur-md p-10 rounded-[3rem] border border-white/10">
             <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <Smile className="text-blue-400" /> Patient Experiences
             </h3>
             <div className="min-h-[200px] flex flex-col justify-center">
                <div className="animate-fade-in key={activeTestimonial}">
                   <div className="flex text-amber-400 mb-4 gap-1">
                      {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                   </div>
                   <p className="text-xl italic text-blue-50 mb-6 leading-relaxed">"{testimonials[activeTestimonial].text}"</p>
                   <div className="font-bold">{testimonials[activeTestimonial].name}</div>
                   <div className="text-xs text-blue-400 font-bold uppercase tracking-widest mt-1">{testimonials[activeTestimonial].loc}</div>
                </div>
             </div>
             <div className="flex gap-2 mt-10">
                {testimonials.map((_, i) => (
                  <button key={i} onClick={() => setActiveTestimonial(i)} className={`h-1.5 rounded-full transition-all ${activeTestimonial === i ? 'w-8 bg-blue-400' : 'w-3 bg-white/20'}`}></button>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* 6. ADVANCED TECH AT PRAVI */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-20">
           <h2 className="text-4xl font-bold text-slate-900 mb-4">Advanced Care at Pravi Global IVF</h2>
           <p className="text-slate-500 font-light">Combining science with deep human compassion.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
           {[
             { title: "Advanced IVF Lab", icon: <Activity className="text-blue-600" />, desc: "World-class embryology facilities with 24/7 monitoring." },
             { title: "Modern Embryology", icon: <Thermometer className="text-blue-600" />, desc: "State-of-the-art culture systems for healthy embryo growth." },
             { title: "Personalized Care", icon: <Heart className="text-blue-600" />, desc: "Every treatment protocol is customized to your unique profile." },
             { title: "Int'l Protocols", icon: <Award className="text-blue-600" />, desc: "Adhering to global standards of reproductive medical excellence." }
           ].map((item, i) => (
             <div key={i} className="p-8 bg-white border border-slate-100 rounded-[2rem] hover:shadow-lg transition-all text-center">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                   {item.icon}
                </div>
                <h4 className="font-bold text-lg mb-3">{item.title}</h4>
                <p className="text-sm text-slate-500 font-light leading-relaxed">{item.desc}</p>
             </div>
           ))}
        </div>
      </section>

      {/* 7. FAQ SECTION */}
      <section className="py-24 px-4 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all hover:border-blue-400">
              <button 
                onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                className="w-full text-left px-8 py-6 font-bold text-slate-800 flex justify-between items-center focus:outline-none"
              >
                <span>{faq.q}</span>
                {activeFaq === i ? <Minus className="w-5 h-5 text-blue-600" /> : <Plus className="w-5 h-5 text-slate-400" />}
              </button>
              {activeFaq === i && (
                <div className="px-8 pb-8 text-slate-600 leading-relaxed font-light border-t border-slate-50 pt-6 bg-slate-50/50">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 8. DOCTOR CONSULTATION CTA */}
      <section className="py-24 px-4">
         <div className="max-w-7xl mx-auto bg-gradient-to-r from-blue-600 to-blue-800 rounded-[4rem] p-16 relative overflow-hidden text-center text-white">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
            <div className="relative z-10 space-y-10">
               <h2 className="text-4xl md:text-6xl font-bold">Talk to Our Fertility Experts Today</h2>
               <p className="text-xl text-blue-50 max-w-2xl mx-auto font-light leading-relaxed">
                  Every journey starts with a single conversation. Let's discuss how our advanced technology can make your dream of parenthood come true.
               </p>
               <div className="flex flex-col sm:flex-row justify-center gap-6">
                  <Link href="/book-appointment" className="bg-white text-blue-600 px-12 py-5 rounded-full font-bold text-lg shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-2">
                     Schedule Appointment <ArrowRight className="w-5 h-5" />
                  </Link>
                  <a href="https://wa.me/918009150040" className="bg-green-500 text-white px-12 py-5 rounded-full font-bold text-lg shadow-2xl hover:bg-green-600 transition-all flex items-center justify-center gap-2">
                     <MessageCircle className="w-6 h-6" /> WhatsApp Consultation
                  </a>
               </div>
            </div>
         </div>
      </section>

      {/* 9. FOOTER CTA */}
      <section className="py-20 px-4 text-center border-t border-slate-100">
         <h3 className="text-2xl font-bold text-slate-900 mb-4 max-w-3xl mx-auto">
            Start Your Parenthood Journey with Advanced IVF Technology at Pravi Global IVF Delhi
         </h3>
         <p className="text-slate-500 mb-8 font-light">Your comfort is as important as your success.</p>
         <div className="flex justify-center gap-4 text-xs font-bold uppercase tracking-widest text-slate-400">
            <span className="flex items-center gap-2"><Award className="w-4 h-4" /> Trusted Worldwide</span>
            <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> 100% Ethical</span>
         </div>
      </section>

      {/* Floating WhatsApp Button */}
      <a href="https://wa.me/918009150040" target="_blank" rel="noreferrer" className="fixed bottom-24 right-6 md:bottom-10 md:right-10 bg-green-500 text-white p-5 rounded-full shadow-2xl hover:bg-green-600 transition-all z-[100] flex items-center justify-center hover:scale-110 active:scale-90 shadow-lg group">
        <MessageCircle className="w-8 h-8" />
        <span className="absolute right-full mr-4 bg-white text-slate-800 px-4 py-2 rounded-xl text-sm font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-slate-100">Chat with Expert</span>
      </a>

    </div>
  );
}
