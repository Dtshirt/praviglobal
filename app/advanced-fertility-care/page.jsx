'use client'
import React, { useState, useEffect } from 'react';
import { 
  Phone, CheckCircle, Activity, Heart, Shield, Users, MapPin, Plus, 
  Minus, ArrowRight, Star, Award, Info, Sparkles, Calendar, Clock, 
  Check, User, MessageSquare, ChevronDown, ChevronUp, Search, 
  Calculator, ShieldCheck, Sparkle, RefreshCw, Send, CheckCircle2 
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function AdvancedFertilityCarePage() {
  // 1. Lead Form State
  const [leadForm, setLeadForm] = useState({ name: '', phone: '', email: '', message: '', service: 'IVF' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 2. Success Calculator State
  const [calcStep, setCalcStep] = useState(1);
  const [calcAnswers, setCalcAnswers] = useState({ age: '', yearsTrying: '', priorAttempts: '', healthFactor: '' });
  const [showCalcResult, setShowCalcResult] = useState(false);
  const [calculatedScore, setCalculatedScore] = useState(null);

  // 3. Treatment Explorer State
  const [activeTreatment, setActiveTreatment] = useState('ivf');

  // 4. Booking Scheduler State
  const [selectedDoctor, setSelectedDoctor] = useState('Dr. Monica Sachdev');
  const [selectedDay, setSelectedDay] = useState('Today');
  const [selectedTime, setSelectedTime] = useState('');
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [bookingName, setBookingName] = useState('');
  const [bookingPhone, setBookingPhone] = useState('');

  // 5. FAQ State
  const [faqSearch, setFaqSearch] = useState('');
  const [activeFaq, setActiveFaq] = useState(null);

  // 6. Testimonial State
  const [testimonialIdx, setTestimonialIdx] = useState(0);

  const doctors = [
    { name: 'Dr. Monica Sachdev', role: 'Senior IVF Specialist', exp: '18+ Years', image: '/images/praviivf68adeb4f45d30_1756228431.png' },
    { name: 'Dr. Ankita', role: 'Gynecologist & Fertility Specialist', exp: '6+ Years', image: '/images/dr-ankita.png' },
    { name: 'Dr. Rit Shukla', role: 'Chief Embryologist', exp: '18 Years', image: '/images/praviivf68adeb76c3b74_1756228470.png' },
    { name: 'Dr. Sakshi Tandon', role: 'Obstetrics & Gynaecology', exp: '10+ Years', image: '/images/praviivf68adeb8d21097_1756228493.png' }
  ];

  const treatments = {
    ivf: {
      title: 'In-Vitro Fertilization (IVF)',
      tagline: 'World-Class Assisted Reproductive Technology',
      desc: 'Our advanced IVF treatment utilizes customized stimulation protocols and state-of-the-art laboratory standards to achieve success even in complex cases.',
      steps: ['Ovarian Stimulation', 'Egg Retrieval', 'Fertilization in Lab', 'Embryo Culture', 'Precision Embryo Transfer'],
      successRate: '55% - 65%',
      benefits: ['Customized protocols', 'Blastocyst transfer option', 'Laser-assisted hatching available']
    },
    icsi: {
      title: 'Intracytoplasmic Sperm Injection (ICSI)',
      tagline: 'Defeating Severe Male Factor Infertility',
      desc: 'When standard fertilization is a challenge, our embryologists manually select the single healthiest sperm and micro-inject it directly into the egg.',
      steps: ['Egg Collection', 'Sperm Selection (Morphology & Motility)', 'Direct Micro-Injection', 'Embryo Development', 'Embryo Transfer'],
      successRate: '58% - 65%',
      benefits: ['Overcomes low sperm count', 'High fertilization rates', 'Perfect for prior IVF failures']
    },
    iui: {
      title: 'Intrauterine Insemination (IUI)',
      tagline: 'A Simple, Gentle, and Natural First Step',
      desc: 'A less-invasive, highly natural method where concentrated, healthy sperm is directly placed inside the uterus around the time of ovulation.',
      steps: ['Cycle Monitoring', 'Trigger Injection', 'Sperm Washing & Concentration', 'Direct Insemination', 'Luteal Phase Support'],
      successRate: '15% - 25%',
      benefits: ['Highly affordable', 'Quick & painless procedure', 'No anesthesia required']
    },
    eggFreezing: {
      title: 'Egg Freezing & Vitrification',
      tagline: 'Preserve Your Fertility, Choose Your Timeline',
      desc: 'Take control of your biological clock. Our high-tech vitrification process instantly freezes your eggs at their peak quality for future motherhood.',
      steps: ['Hormone Stimulation', 'Monitoring Cycles', 'Safe Egg Retrieval', 'Instant Vitrification (Flash Freezing)', 'Secure Cryo-Storage'],
      successRate: '90%+ Survival Rate',
      benefits: ['Preserve young egg quality', 'Secure career and life timeline', 'Zero damage cryo-technology']
    }
  };

  const testimonials = [
    { name: "Priya & Rahul Mehta", text: "5 saal ki koshish aur har jagah se nirasha ke baad, hum Pravi IVF aaye. Yahan advanced tech aur doctor ke support se aaj hamare ghar me twin baby girls ki kilkariyan goonj rahi hain. Sabse acche doctors hain!", location: "Kanpur", rating: 5 },
    { name: "Anjali Sharma", text: "At age 38, I was losing all hope. Dr. Monica Sachdev guided me with transparency and empathy. The treatment was personalized, and now I am a proud mother of a healthy baby boy. Highly recommended!", location: "Delhi NCR", rating: 5 },
    { name: "Vikram & Neha Patel", text: "Humne male infertility ki wajah se ICSI treatment karwaya. The embryology lab here is state-of-the-art. First attempt me hi success mili! Pravi Global team ko bohot bohot dhanyawad.", location: "Delhi", rating: 5 }
  ];

  const faqs = [
    { q: "What is the success rate of IVF at Pravi Global?", a: "Our clinic achieves a high success rate of 55% to 65% for patients under 35 years of age. Success rates vary depending on individual medical factors like age, lifestyle, and history, which we thoroughly assess during consultation." },
    { q: "Is the IVF treatment process very painful?", a: "With modern technologies like our Needle-Free Injection options and safe anesthesia during egg retrieval, the discomfort is minimized significantly. Most patients describe it as highly manageable." },
    { q: "What is the Electronic Witness System (EWS)?", a: "EWS is an advanced RFID-based digital tracking safety system that verifies and double-checks every egg, sperm, and embryo sample, completely eliminating any risk of sample mix-ups." },
    { q: "How long does one complete IVF cycle take?", a: "Typically, one complete IVF cycle takes about 4 to 6 weeks, which includes ovarian stimulation, egg monitoring, retrieval, lab fertilization, and the final embryo transfer." },
    { q: "What are the common causes of IVF failure?", a: "IVF failure can occur due to chromosomal issues in embryos, poor egg/sperm quality, or uterine receptivity issues. We use advanced diagnostic testing (like PGT-A screening) to resolve these challenges." }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setTestimonialIdx((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Form Handlers
  const handleLeadSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      setLeadForm({ name: '', phone: '', email: '', message: '', service: 'IVF' });
    }, 1500);
  };

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    if (!selectedTime) {
      alert("Please select a time slot first!");
      return;
    }
    if (!bookingName || !bookingPhone) {
      alert("Please enter your name and phone number!");
      return;
    }

    try {
      // 1. Send the email inquiry to praviglobalinfo@praviivf.in via consultation route
      await fetch('/api/consultation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: bookingName,
          email: 'praviglobalinfo@praviivf.in', // Target brand email!
          phone: bookingPhone,
          country: `Slot Scheduled: ${selectedDoctor} - ${selectedDay} (${selectedTime})`
        })
      });
    } catch (err) {
      console.error("Booking email dispatch failed:", err);
    }

    // 2. Format custom WhatsApp message
    const formattedMsg = `Hello Pravi Global IVF! I have successfully scheduled a slot using the Consultation Scheduler:\n\n` +
      `- *Doctor:* ${selectedDoctor}\n` +
      `- *Day:* ${selectedDay}\n` +
      `- *Time Slot:* ${selectedTime}\n` +
      `- *Patient Name:* ${bookingName}\n` +
      `- *Phone:* ${bookingPhone}\n\n` +
      `Please confirm my reserved slot. Thank you!`;
    
    const whatsappUrl = `https://api.whatsapp.com/send/?phone=918009150040&text=${encodeURIComponent(formattedMsg)}&type=phone_number&app_absent=0`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');

    setBookingSuccess(true);
  };

  // Calculator Logic
  const handleCalcAnswer = (field, val) => {
    setCalcAnswers({ ...calcAnswers, [field]: val });
    if (calcStep < 4) {
      setCalcStep(calcStep + 1);
    }
  };

  const calculateSuccessProbability = () => {
    let base = 65; // Initial ideal success rate capped at 65%
    
    // Age modifiers
    if (calcAnswers.age === '30-35') base -= 8;
    else if (calcAnswers.age === '35-40') base -= 20;
    else if (calcAnswers.age === '40+') base -= 38;

    // Years trying modifiers
    if (calcAnswers.yearsTrying === '1-3') base -= 5;
    else if (calcAnswers.yearsTrying === '3+') base -= 10;

    // Prior attempts modifiers
    if (calcAnswers.priorAttempts === '1-2') base += 5; // higher rate of successful adjustment
    else if (calcAnswers.priorAttempts === '3+') base -= 12;

    // Health factors
    if (calcAnswers.healthFactor === 'pcos' || calcAnswers.healthFactor === 'male') base -= 5;
    else if (calcAnswers.healthFactor === 'lowAmh') base -= 15;

    // Ensure within realistic bounds (15% to 65% as capped by user requirement)
    const finalScore = Math.max(18, Math.min(65, base));
    setCalculatedScore(finalScore);
    setShowCalcResult(true);
  };

  const resetCalculator = () => {
    setCalcStep(1);
    setCalcAnswers({ age: '', yearsTrying: '', priorAttempts: '', healthFactor: '' });
    setShowCalcResult(false);
    setCalculatedScore(null);
  };

  const filteredFaqs = faqs.filter(faq => 
    faq.q.toLowerCase().includes(faqSearch.toLowerCase()) || 
    faq.a.toLowerCase().includes(faqSearch.toLowerCase())
  );

  return (
    <div className="bg-[#001c1c] min-h-screen text-slate-800 antialiased font-sans">
      
      {/* Calligraphy Google Font Imports */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Rozha+One&family=Yatra+One&display=swap');
        .devanagari-calligraphy {
          font-family: 'Rozha One', 'Yatra One', serif;
          font-weight: 400;
        }
      `}} />
      {/* 📱 NATIVE APP-STYLE STICKY HEADER */}
      <header className="absolute top-0 inset-x-0 z-50 backdrop-blur-md bg-[#001c1c]/30 border-b border-white/[0.03] py-3.5 px-4 sm:px-8 flex items-center justify-between transition-all">
        {/* Left: Brand Logo */}
        <Link href="/" className="flex items-center select-none">
          <Image 
            src="/images/footer-logo.svg" 
            width={130} 
            height={42} 
            alt="Pravi IVF Logo"
            className="h-8 sm:h-9 w-auto object-contain" 
          />
        </Link>

        {/* Action Button */}
        <div className="flex items-center gap-3">
          <a 
            href="tel:+918009150040" 
            className="hidden sm:flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 hover:bg-emerald-500/20 text-emerald-400 text-xs font-bold py-1.5 px-3.5 rounded-full transition-all"
          >
            <Phone className="h-3.5 w-3.5" /> Call Helpline
          </a>
          <button 
            onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
            className="bg-teal-600 hover:bg-teal-500 text-white text-xs font-bold py-1.5 px-4 rounded-full transition-all shadow-md shadow-teal-500/15"
          >
            Book Now
          </button>
        </div>
      </header>
      
      {/* 1. HERO SECTION WITH GLASSMORPHIC FORM */}
      <section className="relative bg-[#001c1c] pt-0 lg:pt-28 pb-16 overflow-hidden">
        {/* Ambient Mesh Glow Effects */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-teal-600/10 to-emerald-600/10 rounded-full filter blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gradient-to-br from-teal-500/10 to-emerald-500/5 rounded-full filter blur-[80px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-white text-center lg:text-left">
              
              {/* Mother, Father & Newborn Baby Top Hero Image Banner */}
              <div className="relative w-[calc(100%+2rem)] sm:w-[calc(100%+3rem)] lg:w-full h-[280px] sm:h-80 lg:h-72 -mx-4 sm:-mx-6 lg:mx-0 rounded-none lg:rounded-[32px] overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] border-b lg:border border-white/10 group">
                <Image 
                  src="/images/happy_family_baby.png" 
                  alt="Mother, Father and Newborn Baby - Pravi IVF success story" 
                  fill 
                  className="object-cover object-center group-hover:scale-103 transition-all duration-700" 
                  priority
                />
                {/* Double Gradient Overlay for Perfect Header & Text Legibility */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#001c1c]/80 via-transparent to-[#001c1c]/90"></div>
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                  <div className="bg-[#001c1c]/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-xs font-semibold text-white flex items-center gap-2">
                    <Heart className="h-3.5 w-3.5 text-rose-500 fill-rose-500" />
                    Pravi IVF: Realizing Parenthood Dreams
                  </div>
                  <div className="bg-emerald-500/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-white text-[10px] font-bold tracking-wider uppercase">
                    ✓ High Success Rate
                  </div>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 bg-white/[0.04] border border-white/[0.08] px-4.5 py-2 rounded-full text-slate-300 font-semibold text-xs tracking-wider uppercase backdrop-blur-md">
                <Sparkles className="h-3.5 w-3.5 text-yellow-400" />
                Delhi's Premium & Advanced IVF Center
              </div>
              
              <h1 className="devanagari-calligraphy text-4xl sm:text-5xl lg:text-6.5xl tracking-normal leading-[1.3] text-white">
                माता-पिता बनने का सपना होगा पूरा, <span className="bg-gradient-to-r from-teal-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent drop-shadow-sm font-semibold">एडवांस्ड IVF केयर</span> के साथ
              </h1>
              
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-light">
                Experience exceptional care combining 18+ years of expertise with high success rates, advanced safety technologies like the <strong>Electronic Witness System</strong>, and virtually painless <strong>Needle-Free Injections</strong>.
              </p>

              {/* Minimalist Premium USP Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 text-left">
                {[
                  { icon: Award, label: 'Success Rate', val: 'Up to 65%*', color: 'text-yellow-400' },
                  { icon: ShieldCheck, label: 'Safety Tech', val: 'EWS Verified', color: 'text-teal-400' },
                  { icon: Users, label: 'Experience', val: '18+ Years', color: 'text-teal-400' },
                  { icon: Heart, label: 'Painless Options', val: 'Needle-Free', color: 'text-rose-400' }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white/[0.02] hover:bg-white/[0.05] backdrop-blur-md p-4 rounded-2xl border border-white/[0.06] flex items-center gap-3 transition-all duration-300">
                    <item.icon className={`h-6 w-6 ${item.color} flex-shrink-0`} />
                    <div>
                      <div className="text-[10px] text-slate-400 uppercase tracking-wider">{item.label}</div>
                      <div className="text-xs font-bold text-white mt-0.5">{item.val}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust Rating Banner */}
              <div className="flex items-center justify-center lg:justify-start gap-4 pt-5 border-t border-white/[0.08]">
                <div className="flex -space-x-2">
                  <span className="w-9 h-9 rounded-full bg-teal-600 border-2 border-slate-950 flex items-center justify-center text-xs font-bold text-white">D1</span>
                  <span className="w-9 h-9 rounded-full bg-teal-600 border-2 border-slate-950 flex items-center justify-center text-xs font-bold text-white">D2</span>
                  <span className="w-9 h-9 rounded-full bg-purple-600 border-2 border-slate-950 flex items-center justify-center text-xs font-bold text-white">D3</span>
                </div>
                <div className="text-left">
                  <div className="flex items-center text-yellow-400 gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                    <span className="ml-1.5 text-sm font-semibold text-white">4.9/5 Rating</span>
                  </div>
                  <p className="text-xs text-slate-400">Trusted by over 5,000+ happy families in Delhi NCR</p>
                </div>
              </div>
            </div>

            {/* Right Enquire Form */}
            <div className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-emerald-600 rounded-3xl blur-2xl opacity-20"></div>
              
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-2xl relative">
                
                {formSubmitted ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="bg-emerald-500/20 text-emerald-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto border border-emerald-400/30">
                      <CheckCircle2 className="h-10 w-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Registration Successful!</h3>
                    <p className="text-slate-300 text-sm">
                      Thank you for contacting Pravi Global IVF. Our senior fertility consultant will call you back within 2 hours.
                    </p>
                    <button 
                      onClick={() => setFormSubmitted(false)}
                      className="mt-6 bg-teal-600 hover:bg-teal-500 text-white font-bold py-2.5 px-6 rounded-full transition-all text-sm"
                    >
                      Enquire Again
                    </button>
                  </div>
                ) : (
                  <>
                    <h3 className="text-2xl font-bold text-white text-center">Book Free Consultation</h3>
                    <p className="text-slate-300 text-sm text-center mb-6 mt-1">Get custom advisory and start your journey today</p>
                    
                    <form onSubmit={handleLeadSubmit} className="space-y-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">Your Full Name</label>
                        <input 
                          type="text" 
                          required
                          value={leadForm.name}
                          onChange={(e) => setLeadForm({...leadForm, name: e.target.value})}
                          placeholder="Enter your name" 
                          className="w-full bg-white/5 border border-white/15 focus:border-teal-400 focus:bg-white/10 rounded-xl px-4 py-2.5 text-white placeholder-slate-400 focus:outline-none transition-all"
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1">Phone Number</label>
                          <input 
                            type="tel" 
                            required
                            value={leadForm.phone}
                            onChange={(e) => setLeadForm({...leadForm, phone: e.target.value})}
                            placeholder="Mobile no." 
                            className="w-full bg-white/5 border border-white/15 focus:border-teal-400 focus:bg-white/10 rounded-xl px-4 py-2.5 text-white placeholder-slate-400 focus:outline-none transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1">Treatment Type</label>
                          <select 
                            value={leadForm.service}
                            onChange={(e) => setLeadForm({...leadForm, service: e.target.value})}
                            className="w-full bg-slate-800 border border-white/15 focus:border-teal-400 rounded-xl px-3 py-2.5 text-white focus:outline-none transition-all"
                          >
                            <option value="IVF">IVF Treatment</option>
                            <option value="ICSI">ICSI Infertility</option>
                            <option value="IUI">IUI Insemination</option>
                            <option value="Freezing">Egg Freezing</option>
                            <option value="Consultation">General Consultation</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">Explain Your Case Briefly</label>
                        <textarea 
                          rows="2"
                          value={leadForm.message}
                          onChange={(e) => setLeadForm({...leadForm, message: e.target.value})}
                          placeholder="How can we help you?" 
                          className="w-full bg-white/5 border border-white/15 focus:border-teal-400 focus:bg-white/10 rounded-xl px-4 py-2 text-white placeholder-slate-400 focus:outline-none transition-all"
                        ></textarea>
                      </div>

                      <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-500 hover:to-emerald-500 text-white font-bold py-3 px-6 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg"
                      >
                        {isSubmitting ? (
                          <>
                            <RefreshCw className="h-5 w-5 animate-spin" />
                            Submitting...
                          </>
                        ) : (
                          <>
                            <Send className="h-5 w-5" />
                            Book Appointment Now
                          </>
                        )}
                      </button>
                    </form>
                    <p className="text-[10px] text-center text-slate-400 mt-4 leading-normal">
                      🛡️ **Privacy Guaranteed:** Your personal and clinical details are kept 100% confidential and secure.
                    </p>
                  </>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. DYNAMIC IVF SUCCESS ESTIMATOR */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-teal-600 font-bold tracking-wider uppercase text-sm inline-flex items-center gap-1.5">
              <Calculator className="h-4 w-4" /> Interactive Widget
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
              Check Your Personalized IVF Success Score
            </h2>
            <p className="text-slate-600 mt-3 max-w-xl mx-auto">
              Answer 4 simple clinical questions to get an automated estimate of your fertility success probability based on our clinic records.
            </p>
          </div>

          <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-teal-500/10 rounded-full filter blur-3xl"></div>
            
            {!showCalcResult ? (
              <div>
                {/* Step indicator */}
                <div className="flex justify-between items-center mb-8 border-b border-slate-800 pb-4">
                  <span className="text-sm font-semibold text-slate-400">Step {calcStep} of 4</span>
                  <div className="flex gap-1.5">
                    {[1, 2, 3, 4].map((s) => (
                      <span key={s} className={`h-1.5 w-10 rounded-full transition-all ${s <= calcStep ? 'bg-teal-500' : 'bg-slate-700'}`}></span>
                    ))}
                  </div>
                </div>

                {/* Step 1: Age */}
                {calcStep === 1 && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold">Q1: What is the age of the female partner?</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {[
                        { label: 'Under 30 Years', val: 'under30', desc: 'Highest natural reserve' },
                        { label: '30 to 35 Years', val: '30-35', desc: 'Mild age effect' },
                        { label: '35 to 40 Years', val: '35-40', desc: 'Moderate ovarian reserve decline' },
                        { label: '40+ Years', val: '40+', desc: 'Advanced reproductive age' }
                      ].map((opt) => (
                        <button 
                          key={opt.val} 
                          onClick={() => handleCalcAnswer('age', opt.val)}
                          className="bg-slate-800 border border-slate-700 hover:border-teal-500 hover:bg-slate-800/80 rounded-2xl p-4 text-left transition-all hover:scale-[1.02]"
                        >
                          <div className="font-bold text-white">{opt.label}</div>
                          <div className="text-xs text-slate-400 mt-1">{opt.desc}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 2: Years Trying */}
                {calcStep === 2 && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold">Q2: For how long have you been actively trying to conceive?</h3>
                    <div className="grid sm:grid-cols-3 gap-4">
                      {[
                        { label: 'Less than 1 Year', val: 'under1' },
                        { label: '1 to 3 Years', val: '1-3' },
                        { label: 'More than 3 Years', val: '3+' }
                      ].map((opt) => (
                        <button 
                          key={opt.val} 
                          onClick={() => handleCalcAnswer('yearsTrying', opt.val)}
                          className="bg-slate-800 border border-slate-700 hover:border-teal-500 hover:bg-slate-800/80 rounded-2xl p-5 text-center transition-all hover:scale-[1.02]"
                        >
                          <span className="font-bold">{opt.label}</span>
                        </button>
                      ))}
                    </div>
                    <button onClick={() => setCalcStep(1)} className="text-slate-400 hover:text-white text-sm flex items-center gap-1 mt-4">
                      ← Back to Previous
                    </button>
                  </div>
                )}

                {/* Step 3: Prior Attempts */}
                {calcStep === 3 && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold">Q3: How many prior IVF or IUI treatment cycles have you undergone?</h3>
                    <div className="grid sm:grid-cols-3 gap-4">
                      {[
                        { label: 'No Prior Cycles', val: 'none' },
                        { label: '1 to 2 Cycles', val: '1-2' },
                        { label: '3 or More Cycles', val: '3+' }
                      ].map((opt) => (
                        <button 
                          key={opt.val} 
                          onClick={() => handleCalcAnswer('priorAttempts', opt.val)}
                          className="bg-slate-800 border border-slate-700 hover:border-teal-500 hover:bg-slate-800/80 rounded-2xl p-5 text-center transition-all hover:scale-[1.02]"
                        >
                          <span className="font-bold">{opt.label}</span>
                        </button>
                      ))}
                    </div>
                    <button onClick={() => setCalcStep(2)} className="text-slate-400 hover:text-white text-sm flex items-center gap-1 mt-4">
                      ← Back to Previous
                    </button>
                  </div>
                )}

                {/* Step 4: Health Factors */}
                {calcStep === 4 && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold">Q4: Are you diagnosed with any of the following fertility factors?</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {[
                        { label: 'No Specific Diagnosis / Unexplained', val: 'none', desc: 'Ready for evaluation' },
                        { label: 'PCOS / PCOD', val: 'pcos', desc: 'Need hormonal balancing' },
                        { label: 'Low Ovarian Reserve (Low AMH)', val: 'lowAmh', desc: 'Requires customized stimulation' },
                        { label: 'Male Fertility Factors (Count/Motility)', val: 'male', desc: 'Perfect candidate for ICSI' }
                      ].map((opt) => (
                        <button 
                          key={opt.val} 
                          onClick={() => {
                            setCalcAnswers({ ...calcAnswers, healthFactor: opt.val });
                          }}
                          className={`border rounded-2xl p-4 text-left transition-all hover:scale-[1.02] ${calcAnswers.healthFactor === opt.val ? 'bg-teal-600/30 border-teal-500' : 'bg-slate-800 border-slate-700 hover:border-slate-500'}`}
                        >
                          <div className="font-bold">{opt.label}</div>
                          <div className="text-xs text-slate-400 mt-1">{opt.desc}</div>
                        </button>
                      ))}
                    </div>

                    <div className="flex justify-between items-center pt-6 mt-4 border-t border-slate-800">
                      <button onClick={() => setCalcStep(3)} className="text-slate-400 hover:text-white text-sm flex items-center gap-1">
                        ← Back to Previous
                      </button>
                      <button 
                        onClick={() => calculateSuccessProbability()}
                        disabled={!calcAnswers.healthFactor}
                        className="bg-teal-600 hover:bg-teal-500 disabled:opacity-50 text-white font-bold py-3 px-8 rounded-full transition-all flex items-center gap-2"
                      >
                        Calculate Score <Sparkle className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                )}

              </div>
            ) : (
              // Results Display
              <div className="space-y-8 text-center py-6">
                <div className="max-w-md mx-auto space-y-4">
                  <span className="text-emerald-400 font-bold uppercase tracking-wider text-xs bg-emerald-500/10 border border-emerald-400/20 px-3 py-1 rounded-full">
                    Analysis Completed
                  </span>
                  <h3 className="text-2xl font-bold">Your Estimated Success Rate is</h3>
                  
                  {/* Big Score Visualizer */}
                  <div className="relative w-44 h-44 mx-auto flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle cx="88" cy="88" r="76" strokeWidth="8" stroke="#1e293b" fill="transparent" />
                      <circle cx="88" cy="88" r="76" strokeWidth="10" stroke="#3b82f6" fill="transparent" 
                        strokeDasharray={477.5}
                        strokeDashoffset={477.5 - (477.5 * calculatedScore) / 100}
                        className="transition-all duration-1000 ease-out"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-4xl sm:text-5xl font-black text-white">{calculatedScore}%</span>
                      <span className="text-xs text-slate-400 mt-1">Success Probability</span>
                    </div>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed mt-4">
                    Based on your profile, you hold a highly optimistic success rate. At Pravi Global, we can maximize this utilizing advanced protocols.
                  </p>
                </div>

                {/* Recommendations */}
                <div className="max-w-2xl mx-auto bg-slate-800/80 border border-slate-700/60 p-6 rounded-2xl text-left space-y-4">
                  <h4 className="font-bold text-lg flex items-center gap-2 text-teal-400">
                    <Award className="h-5 w-5" /> Personalized Clinic Recommendations:
                  </h4>
                  <ul className="space-y-2.5 text-sm text-slate-300">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle className="h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span><strong>Advanced Stimulation:</strong> Custom hormone cycle regulation to ensure maximum retrieval of mature eggs.</span>
                    </li>
                    {calcAnswers.healthFactor === 'lowAmh' && (
                      <li className="flex items-start gap-2.5">
                        <CheckCircle className="h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                        <span><strong>Double Stimulation Protocol:</strong> Specially structured to collect eggs from multiple cycles for Low AMH cases.</span>
                      </li>
                    )}
                    {calcAnswers.healthFactor === 'male' && (
                      <li className="flex items-start gap-2.5">
                        <CheckCircle className="h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                        <span><strong>Specialized ICSI:</strong> Microscopic single sperm selection to guarantee fertilization.</span>
                      </li>
                    )}
                    <li className="flex items-start gap-2.5">
                      <CheckCircle className="h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span><strong>Safety Verification:</strong> Safe tracking with Electronic Witness System throughout the treatment.</span>
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                  <button 
                    onClick={() => {
                      // Scroll to hero contact form
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="bg-teal-600 hover:bg-teal-500 text-white font-bold py-3 px-8 rounded-full transition-all hover:scale-105"
                  >
                    Claim Free Specialist Consultation
                  </button>
                  <button 
                    onClick={resetCalculator}
                    className="bg-slate-800 border border-slate-700 hover:bg-slate-700 text-white font-semibold py-3 px-8 rounded-full transition-all flex items-center justify-center gap-1.5"
                  >
                    <RefreshCw className="h-4 w-4" /> Recalculate / Retake
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 3. PREMIUM HERO GRAPHICS DISPLAY */}
      <section className="py-16 bg-slate-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual Block (Left) */}
            <div className="lg:col-span-6 relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-teal-600 to-emerald-600 rounded-3xl blur-xl opacity-30"></div>
              
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-800 h-[480px]">
                <Image 
                  src="/images/premium_ivf_hero.png" 
                  alt="Advanced IVF Laboratory & Specialist - Pravi Global IVF Clinic Delhi" 
                  fill 
                  className="object-cover hover:scale-105 transition-all duration-700"
                />
                
                {/* Floating Tag */}
                <div className="absolute top-6 left-6 bg-slate-900/90 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/10 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
                  <span className="text-xs font-bold text-white tracking-wider">PREMIUM QUALITY STANDARDS</span>
                </div>

                {/* Patient Success Indicator Badge */}
                <div className="absolute bottom-6 right-6 left-6 bg-slate-900/85 backdrop-blur-md p-4 rounded-2xl border border-white/10 flex items-center gap-4">
                  <div className="w-12 h-12 bg-teal-600 text-white rounded-xl flex items-center justify-center font-bold text-lg">
                    18+
                  </div>
                  <div>
                    <h5 className="font-bold text-white text-sm">Years of Reproductive Excellence</h5>
                    <p className="text-slate-400 text-xs mt-0.5">Custom clinical guidelines ensuring positive outcomes</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Block (Right) */}
            <div className="lg:col-span-6 text-white space-y-6">
              <span className="text-teal-400 font-bold uppercase tracking-wider text-xs inline-flex items-center gap-1">
                <Sparkle className="h-4 w-4" /> State-of-the-Art Laboratory
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Humara Target: Safe, High-Tech Aur Painless IVF Journey
              </h2>
              <p className="text-slate-300 leading-relaxed text-base">
                Pravi Global IVF Clinic provides cutting-edge embryology equipment combined with a compassionate environment. Our clinical lab remains strictly sterilized and adheres to global standards, ensuring your precious embryos receive optimal care.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-400 flex items-center justify-center flex-shrink-0">
                    <Shield className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base">Advanced Safety double-check</h4>
                    <p className="text-slate-400 text-sm mt-0.5">RFID technology tracks samples ensuring absolute clinical safety.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 flex items-center justify-center flex-shrink-0">
                    <Heart className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base">Patient Comfort First</h4>
                    <p className="text-slate-400 text-sm mt-0.5">Virtually painless drug administration designed for minimal physical strain.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex gap-4">
                <a 
                  href="tel:+918009150040"
                  className="bg-teal-600 hover:bg-teal-500 text-white font-bold py-3 px-8 rounded-full transition-all inline-flex items-center gap-2"
                >
                  <Phone className="h-4 w-4" /> Call Helpline: +91 8009150040
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE TREATMENT ROADMAP EXPLORER */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <span className="text-teal-600 font-bold uppercase tracking-wider text-sm">Treatment Catalog</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
              Explore Our Custom Reproductive Treatments
            </h2>
            <p className="text-slate-600 mt-3 max-w-xl mx-auto">
              Select a treatment options to review how we plan, structure, and execute each clinical method.
            </p>
          </div>

          {/* Treatment Tabs */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-10">
            {Object.keys(treatments).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTreatment(key)}
                className={`px-6 py-3 rounded-full font-bold text-sm sm:text-base transition-all ${
                  activeTreatment === key 
                    ? 'bg-teal-600 text-white shadow-lg' 
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {treatments[key].title.split(' (')[0]}
              </button>
            ))}
          </div>

          {/* Active Treatment Card */}
          <div className="bg-white rounded-3xl border border-slate-200/80 p-8 sm:p-10 shadow-xl transition-all duration-300">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs text-teal-600 font-bold tracking-wider uppercase bg-teal-100 px-3 py-1 rounded-full">
                  Expected Success Rate: {treatments[activeTreatment].successRate}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  {treatments[activeTreatment].title}
                </h3>
                <p className="text-teal-600 font-semibold text-lg italic">
                  "{treatments[activeTreatment].tagline}"
                </p>
                <p className="text-slate-600 leading-relaxed">
                  {treatments[activeTreatment].desc}
                </p>

                {/* Benefits */}
                <div className="space-y-2.5">
                  <h4 className="font-bold text-slate-800">Key Clinic Advantages:</h4>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {treatments[activeTreatment].benefits.map((b, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                        <Check className="h-4.5 w-4.5 text-emerald-500 flex-shrink-0" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Steps Visual Timeline (Right) */}
              <div className="lg:col-span-5 bg-[#001c1c] text-white p-6 sm:p-8 rounded-2xl border border-slate-800 relative">
                <h4 className="font-bold text-lg mb-6 flex items-center gap-2 border-b border-slate-800 pb-3">
                  <Activity className="h-5 w-5 text-teal-400" />
                  Clinical Treatment Timeline
                </h4>
                
                <div className="space-y-6 relative before:absolute before:left-3.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-800">
                  {treatments[activeTreatment].steps.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-4 relative z-10 group">
                      <span className="w-7.5 h-7.5 rounded-full bg-teal-600 text-white font-bold text-xs flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                        {idx + 1}
                      </span>
                      <div>
                        <h5 className="font-bold text-white text-sm sm:text-base">{step}</h5>
                        <p className="text-xs text-slate-400 mt-0.5">Strict execution standards followed by IVF team</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 5. INTERACTIVE DOCTOR CONSULTATION PLANNER */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <span className="text-teal-600 font-bold uppercase tracking-wider text-sm">Consultation Scheduler</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
              Select Your Specialist & Preferred Time Slot
            </h2>
            <p className="text-slate-600 mt-3 max-w-xl mx-auto">
              Skip waiting rooms. Choose a qualified fertility doctor, select an available appointment slot, and book instantly.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8">
            
            {/* Left: Doctor Selection Cards */}
            <div className="lg:col-span-7 space-y-4">
              <h3 className="font-bold text-slate-800 text-lg mb-2">1. Choose a Doctor</h3>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {doctors.map((doc) => (
                  <button 
                    key={doc.name}
                    onClick={() => {
                      setSelectedDoctor(doc.name);
                      setBookingSuccess(false);
                    }}
                    className={`p-4 rounded-2xl border text-left flex gap-4 transition-all hover:scale-[1.01] ${
                      selectedDoctor === doc.name 
                        ? 'border-teal-500 bg-teal-50/50 shadow-md ring-2 ring-teal-500/20' 
                        : 'border-slate-200 bg-white'
                    }`}
                  >
                    <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-slate-100 flex-shrink-0">
                      <Image src={doc.image} alt={doc.name} fill className="object-cover" />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-slate-900 text-sm sm:text-base">{doc.name}</h4>
                      <p className="text-xs text-teal-600 font-medium mt-0.5">{doc.role}</p>
                      <div className="flex items-center gap-1 mt-1">
                        <Award className="h-3.5 w-3.5 text-slate-400" />
                        <span className="text-xs text-slate-500">{doc.exp} Experience</span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Slot Selection & Action Form */}
            <div className="lg:col-span-5 bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200/80">
              
              {bookingSuccess ? (
                <div className="text-center py-10 space-y-4">
                  <div className="bg-emerald-100 text-emerald-600 w-14 h-14 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
                    <CheckCircle className="h-8 w-8" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">Slot Reserved Successfully!</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Your appointment with <strong>{selectedDoctor}</strong> for <strong>{selectedDay}</strong> has been tentatively registered.
                  </p>
                  <div className="bg-slate-100 p-3.5 rounded-xl text-xs text-slate-700 font-medium">
                    Requested Slot: {selectedTime || 'Morning Slot'}
                  </div>
                  <p className="text-xs text-slate-500">
                    Our desk will call you within 15 minutes to confirm the exact meeting room link or clinic floor.
                  </p>
                  <button 
                    onClick={() => {
                      setBookingSuccess(false);
                      setSelectedTime('');
                    }}
                    className="mt-4 bg-slate-800 hover:bg-slate-700 text-white font-bold py-2 px-6 rounded-full text-xs transition-all"
                  >
                    Schedule Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleBookingSubmit} className="space-y-6">
                  
                  {/* Select Day */}
                  <div className="space-y-2">
                    <h4 className="font-bold text-slate-800 text-sm flex items-center gap-1.5">
                      <Calendar className="h-4 w-4 text-teal-500" /> 2. Select a Day
                    </h4>
                    <div className="grid grid-cols-3 gap-2">
                      {['Today', 'Tomorrow', 'Day After'].map((day) => (
                        <button
                          key={day}
                          type="button"
                          onClick={() => {
                            setSelectedDay(day);
                            setBookingSuccess(false);
                          }}
                          className={`py-2 rounded-xl text-xs font-bold transition-all border ${
                            selectedDay === day 
                              ? 'bg-teal-600 text-white border-teal-600' 
                              : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                          }`}
                        >
                          {day}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Select Time */}
                  <div className="space-y-2">
                    <h4 className="font-bold text-slate-800 text-sm flex items-center gap-1.5">
                      <Clock className="h-4 w-4 text-teal-500" /> 3. Pick an Available Slot
                    </h4>
                    <div className="grid grid-cols-2 gap-2.5">
                      {[
                        '10:30 AM - 11:30 AM', 
                        '12:00 PM - 01:00 PM', 
                        '02:30 PM - 03:30 PM', 
                        '04:00 PM - 05:00 PM'
                      ].map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => {
                            setSelectedTime(slot);
                            setBookingSuccess(false);
                          }}
                          className={`py-2.5 px-2 rounded-xl text-[11px] sm:text-xs font-semibold text-center transition-all border ${
                            selectedTime === slot 
                              ? 'bg-slate-900 text-white border-slate-900 ring-2 ring-slate-800/10' 
                              : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Patient Info Inputs */}
                  <div className="space-y-3.5 border-t border-slate-200 pt-4">
                    <h4 className="font-bold text-slate-800 text-sm flex items-center gap-1.5">
                      <User className="h-4 w-4 text-teal-500" /> 4. Enter Your Contact Details
                    </h4>
                    <div className="space-y-3">
                      <div>
                        <label className="block text-[11px] font-semibold text-slate-600 mb-1">Full Name</label>
                        <input 
                          type="text" 
                          required
                          value={bookingName}
                          onChange={(e) => setBookingName(e.target.value)}
                          placeholder="Enter your name" 
                          className="w-full bg-white border border-slate-200 focus:border-teal-500 rounded-xl px-4 py-2.5 text-slate-800 placeholder-slate-400 focus:outline-none transition-all text-xs"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-semibold text-slate-600 mb-1">Phone Number</label>
                        <input 
                          type="tel" 
                          required
                          value={bookingPhone}
                          onChange={(e) => setBookingPhone(e.target.value)}
                          placeholder="Mobile no." 
                          className="w-full bg-white border border-slate-200 focus:border-teal-500 rounded-xl px-4 py-2.5 text-slate-800 placeholder-slate-400 focus:outline-none transition-all text-xs"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Final Register CTA */}
                  <div className="border-t border-slate-200 pt-4 space-y-3">
                    <div className="flex justify-between text-xs text-slate-500 font-medium">
                      <span>Doctor Selected:</span>
                      <span className="font-bold text-slate-800">{selectedDoctor}</span>
                    </div>
                    <div className="flex justify-between text-xs text-slate-500 font-medium">
                      <span>Day:</span>
                      <span className="font-bold text-slate-800">{selectedDay}</span>
                    </div>

                    <button 
                      type="submit" 
                      className="w-full bg-teal-600 hover:bg-teal-500 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-md text-sm flex items-center justify-center gap-2 mt-2"
                    >
                      <Check className="h-4.5 w-4.5" /> Confirm and Register Slot
                    </button>
                  </div>

                </form>
              )}

            </div>

          </div>
        </div>
      </section>

      {/* 6. EMOTIONAL TRUST & SUCCESS SECTION */}
      <section className="py-20 bg-[#001c1c] text-white relative overflow-hidden">
        
        {/* Decorative elements */}
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-teal-600/10 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-600/10 rounded-full filter blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual (Left) */}
            <div className="lg:col-span-5 order-2 lg:order-1 relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-500 to-teal-500 rounded-3xl blur-xl opacity-20"></div>
              
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-800 h-[450px]">
                <Image 
                  src="/images/happy_family_baby.png" 
                  alt="Happy Indian Parents holding their IVF baby - Pravi Global IVF Clinic Delhi" 
                  fill 
                  className="object-cover" 
                />
                
                {/* Visual Glow Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#001c1c] via-transparent to-transparent opacity-80"></div>
                
                {/* Micro-Quote Card inside image */}
                <div className="absolute bottom-6 left-6 right-6 bg-slate-900/90 backdrop-blur-md p-4 rounded-xl border border-white/10 text-left">
                  <div className="flex text-yellow-400 gap-0.5">
                    {[...Array(5)].map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-current" />)}
                  </div>
                  <p className="text-[11px] text-slate-200 italic mt-1.5 leading-normal">
                    "Pravi IVF is truly a blessing for us. They gave us our twins after 5 long years of trial. Outstanding staff!"
                  </p>
                  <span className="block text-[10px] font-bold text-slate-400 mt-1">— Rahul & Priya M., Verified Patients</span>
                </div>
              </div>
            </div>

            {/* Testimonials Slider & Text (Right) */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              
              <div className="inline-flex items-center gap-1.5 bg-teal-500/20 border border-teal-400/30 px-3 py-1 rounded-full text-teal-300 font-semibold text-xs uppercase tracking-wider">
                <Heart className="h-3.5 w-3.5 text-rose-500" /> Patient Testimonials
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Pravi Global Ki Happy Families Se Suniye Unki Zubani
              </h2>
              
              <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
                Kuch logo ke liye parent banna asaan hota hai, lekin jinke liye nahi hota, hum unka sath kabhi nahi chhodte. Yahan humare successful couples ki sacchi kahaniyan di gayi hain:
              </p>

              {/* Slider Content */}
              <div className="bg-slate-900 border border-slate-800 p-6 sm:p-8 rounded-2xl relative shadow-xl min-h-[220px] flex flex-col justify-between transition-all duration-500">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-extrabold text-base text-white">{testimonials[testimonialIdx].name}</span>
                    <span className="text-xs bg-slate-800 px-3 py-1 rounded-full text-slate-400">{testimonials[testimonialIdx].location}</span>
                  </div>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed italic">
                    "{testimonials[testimonialIdx].text}"
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-slate-800 pt-4 mt-6">
                  <div className="flex text-yellow-400 gap-0.5">
                    {[...Array(testimonials[testimonialIdx].rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  
                  {/* Manual selector buttons */}
                  <div className="flex gap-2">
                    {testimonials.map((_, i) => (
                      <button 
                        key={i} 
                        onClick={() => setTestimonialIdx(i)}
                        className={`h-2.5 rounded-full transition-all ${i === testimonialIdx ? 'w-8 bg-teal-500' : 'w-2.5 bg-slate-700'}`}
                      ></button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quick Info Counter Grid */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-800 text-center">
                <div>
                  <div className="text-3xl font-black text-white">5,000+</div>
                  <div className="text-slate-500 text-xs mt-1">Happy Families</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-white">18+</div>
                  <div className="text-slate-500 text-xs mt-1">Years Clinical Exp.</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-white">65%*</div>
                  <div className="text-slate-500 text-xs mt-1">Peak Success Rates</div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 7. SEARCHABLE ACCORDION FAQS SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-10">
            <span className="text-teal-600 font-bold uppercase tracking-wider text-sm">Frequently Asked Questions</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
              Frequently Asked Questions (FAQs)
            </h2>
            
            {/* Search Input */}
            <div className="relative max-w-md mx-auto mt-6">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Search className="h-5 w-5" />
              </span>
              <input 
                type="text" 
                value={faqSearch}
                onChange={(e) => setFaqSearch(e.target.value)}
                placeholder="Search queries (e.g. success, pain, EWS)..." 
                className="w-full bg-slate-50 border border-slate-200 focus:border-teal-400 focus:bg-white rounded-full pl-11 pr-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none transition-all text-sm shadow-sm"
              />
              {faqSearch && (
                <button 
                  onClick={() => setFaqSearch('')} 
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-xs font-bold text-slate-400 hover:text-slate-600"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Accordion List */}
          <div className="space-y-3.5">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => {
                const isOpen = activeFaq === index;
                return (
                  <div 
                    key={index} 
                    className="border border-slate-200 rounded-2xl bg-white overflow-hidden transition-all shadow-sm"
                  >
                    <button 
                      onClick={() => setActiveFaq(isOpen ? null : index)}
                      className="w-full px-6 py-4.5 text-left flex justify-between items-center hover:bg-slate-50 transition-colors"
                    >
                      <span className="font-bold text-slate-900 text-sm sm:text-base leading-tight pr-4">{faq.q}</span>
                      <span className="flex-shrink-0 text-slate-400">
                        {isOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                      </span>
                    </button>
                    
                    <div 
                      className={`transition-all duration-300 ease-in-out ${
                        isOpen ? 'max-h-60 opacity-100 border-t border-slate-100' : 'max-h-0 opacity-0 overflow-hidden'
                      }`}
                    >
                      <div className="px-6 py-4.5 text-sm sm:text-base text-slate-600 leading-relaxed bg-slate-50/50">
                        {faq.a}
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="text-center py-10 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
                <Info className="h-10 w-10 text-slate-400 mx-auto mb-2" />
                <p className="font-bold text-slate-600 text-sm">No results match your search query.</p>
                <p className="text-xs text-slate-400 mt-1">Please try searching using different words.</p>
              </div>
            )}
          </div>

          {/* Bottom helpline prompt */}
          <div className="mt-8 bg-teal-50 border border-teal-100/50 p-6 rounded-2xl text-center space-y-3">
            <h4 className="font-bold text-slate-800 text-sm sm:text-base">Hormonals, reports, or pricing query?</h4>
            <p className="text-slate-600 text-xs sm:text-sm">Speak directly with our clinical desk counselor for a detailed personal response.</p>
            <a 
              href="tel:+918009150040" 
              className="inline-flex items-center gap-1.5 text-sm font-extrabold text-teal-600 hover:text-blue-700 transition-colors"
            >
              <Phone className="h-4 w-4" /> Call Helpline: +91 8009150040 →
            </a>
          </div>

        </div>
      </section>

      {/* 📱 NATIVE APP-STYLE COMPACT FOOTER */}
      <footer className="bg-[#001c1c] border-t border-white/[0.04] py-8 px-4 text-center relative z-10">
        <div className="max-w-md mx-auto space-y-4">
          <div className="flex justify-center gap-2 select-none">
            <span className="font-extrabold text-sm tracking-wide text-white">PRAVI</span>
            <span className="bg-gradient-to-r from-teal-400 to-teal-400 text-[9px] font-black tracking-widest uppercase text-slate-950 px-2 py-0.5 rounded-md">
              GLOBAL IVF
            </span>
          </div>
          <p className="text-[11px] text-slate-500 leading-normal font-light">
            Building number 41, First Floor, Ring Rd, Lajpat Nagar IV, New Delhi, 110024
          </p>
          <div className="flex justify-center gap-4 text-xs font-medium text-slate-400">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span className="text-slate-700">•</span>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
          <p className="text-[10px] text-slate-600 font-light">
            &copy; {new Date().getFullYear()} Pravi Global IVF Polyclinic. All rights reserved.
          </p>
        </div>
      </footer>

      {/* 📱 FLOATING APP BOTTOM NAVIGATION BAR (iOS / Android Mobile Native Feel) */}
      <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-sm bg-[#001c1c]/80 backdrop-blur-xl border border-white/[0.08] py-2 px-3 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex justify-between items-center select-none">
        {[
          { 
            label: 'Estimator', 
            icon: Calculator, 
            action: () => {
              const el = document.querySelector('section:nth-of-type(2)');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }
          },
          { 
            label: 'Treatments', 
            icon: Activity, 
            action: () => {
              const el = document.querySelector('section:nth-of-type(4)');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }
          },
          { 
            label: 'Book Slot', 
            icon: Calendar, 
            action: () => {
              const el = document.querySelector('section:nth-of-type(5)');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }
          },
          { 
            label: 'Chat Consult', 
            icon: MessageSquare, 
            action: () => {
              window.open('https://api.whatsapp.com/send/?phone=+918009150040&text=Hello%21+I+would+like+to+know+more+about+your+services.&type=phone_number&app_absent=0', '_blank');
            }
          }
        ].map((tab, idx) => (
          <button 
            key={idx}
            onClick={tab.action}
            className="flex flex-col items-center justify-center flex-1 py-1 text-slate-400 hover:text-white transition-colors cursor-pointer group"
          >
            <tab.icon className="h-5 w-5 group-hover:scale-110 transition-transform text-slate-300" />
            <span className="text-[9px] font-bold mt-1 text-slate-400">{tab.label}</span>
          </button>
        ))}
      </div>

    </div>
  );
}
