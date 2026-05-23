'use client'
import React, { useState, useEffect } from 'react';
import { 
  Phone, CheckCircle, Activity, Heart, Shield, Users, Calendar, Clock, 
  Check, User, MessageSquare, ChevronDown, ChevronUp, Search, 
  Calculator, ShieldCheck, Sparkle, RefreshCw, Send, CheckCircle2,
  Award, Info, Sparkles, Star
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function AdvancedFertilityCarePage() {
  // States
  const [leadForm, setLeadForm] = useState({ name: '', phone: '', email: '', message: '', service: 'IVF' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [calcStep, setCalcStep] = useState(1);
  const [calcAnswers, setCalcAnswers] = useState({ age: '', yearsTrying: '', priorAttempts: '', healthFactor: '' });
  const [showCalcResult, setShowCalcResult] = useState(false);
  const [calculatedScore, setCalculatedScore] = useState(null);

  const [activeTreatment, setActiveTreatment] = useState('ivf');
  
  const [selectedDoctor, setSelectedDoctor] = useState('Dr. Monica Sachdev');
  const [selectedDay, setSelectedDay] = useState('Today');
  const [selectedTime, setSelectedTime] = useState('');
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [bookingName, setBookingName] = useState('');
  const [bookingPhone, setBookingPhone] = useState('');

  const [faqSearch, setFaqSearch] = useState('');
  const [activeFaq, setActiveFaq] = useState(null);
  const [testimonialIdx, setTestimonialIdx] = useState(0);

  // Data
  const doctors = [
    { name: 'Dr. Monica Sachdev', role: 'Senior IVF Specialist', exp: '18+ Years', image: '/images/praviivf68adeb4f45d30_1756228431.png' },
    { name: 'Dr. Ankita', role: 'Gynecologist & Fertility Specialist', exp: '6+ Years', image: '/images/dr-ankita.png' },
    { name: 'Dr. Rit Shukla', role: 'Chief Embryologist', exp: '18 Years', image: '/images/praviivf68adeb76c3b74_1756228470.png' },
    { name: 'Dr. Sakshi Tandon', role: 'Obstetrics & Gynaecology', exp: '10+ Years', image: '/images/praviivf68adeb8d21097_1756228493.png' }
  ];

  const treatments = {
    ivf: {
      title: 'In-Vitro Fertilization (IVF)', tagline: 'World-Class Assisted Reproductive Technology',
      desc: 'Our advanced IVF treatment utilizes customized stimulation protocols and state-of-the-art laboratory standards to achieve success even in complex cases.',
      steps: ['Ovarian Stimulation', 'Egg Retrieval', 'Fertilization in Lab', 'Embryo Culture', 'Precision Embryo Transfer'],
      successRate: '55% - 65%', benefits: ['Customized protocols', 'Blastocyst transfer option', 'Laser-assisted hatching available']
    },
    icsi: {
      title: 'Intracytoplasmic Sperm Injection (ICSI)', tagline: 'Defeating Severe Male Factor Infertility',
      desc: 'When standard fertilization is a challenge, our embryologists manually select the single healthiest sperm and micro-inject it directly into the egg.',
      steps: ['Egg Collection', 'Sperm Selection (Morphology & Motility)', 'Direct Micro-Injection', 'Embryo Development', 'Embryo Transfer'],
      successRate: '58% - 65%', benefits: ['Overcomes low sperm count', 'High fertilization rates', 'Perfect for prior IVF failures']
    },
    iui: {
      title: 'Intrauterine Insemination (IUI)', tagline: 'A Simple, Gentle, and Natural First Step',
      desc: 'A less-invasive, highly natural method where concentrated, healthy sperm is directly placed inside the uterus around the time of ovulation.',
      steps: ['Cycle Monitoring', 'Trigger Injection', 'Sperm Washing & Concentration', 'Direct Insemination', 'Luteal Phase Support'],
      successRate: '15% - 25%', benefits: ['Highly affordable', 'Quick & painless procedure', 'No anesthesia required']
    },
    eggFreezing: {
      title: 'Egg Freezing & Vitrification', tagline: 'Preserve Your Fertility, Choose Your Timeline',
      desc: 'Take control of your biological clock. Our high-tech vitrification process instantly freezes your eggs at their peak quality for future motherhood.',
      steps: ['Hormone Stimulation', 'Monitoring Cycles', 'Safe Egg Retrieval', 'Instant Vitrification (Flash Freezing)', 'Secure Cryo-Storage'],
      successRate: '90%+ Survival Rate', benefits: ['Preserve young egg quality', 'Secure career and life timeline', 'Zero damage cryo-technology']
    }
  };

  const testimonials = [
    { name: "Priya & Rahul Mehta", text: "5 saal ki koshish aur har jagah se nirasha ke baad, hum Pravi IVF aaye. Yahan advanced tech aur doctor ke support se aaj hamare ghar me twin baby girls ki kilkariyan goonj rahi hain.", location: "Kanpur", rating: 5 },
    { name: "Anjali Sharma", text: "At age 38, I was losing all hope. Dr. Monica Sachdev guided me with transparency and empathy. The treatment was personalized, and now I am a proud mother of a healthy baby boy.", location: "Delhi NCR", rating: 5 },
    { name: "Vikram & Neha Patel", text: "Humne male infertility ki wajah se ICSI treatment karwaya. The embryology lab here is state-of-the-art. First attempt me hi success mili!", location: "Delhi", rating: 5 }
  ];

  const faqs = [
    { q: "What is the success rate of IVF at Pravi Global?", a: "Our clinic achieves a high success rate of 55% to 65% for patients under 35 years of age. Success rates vary depending on individual medical factors like age, lifestyle, and history." },
    { q: "Is the IVF treatment process very painful?", a: "With modern technologies like our Needle-Free Injection options and safe anesthesia during egg retrieval, the discomfort is minimized significantly." },
    { q: "What is the Electronic Witness System (EWS)?", a: "EWS is an advanced RFID-based digital tracking safety system that verifies and double-checks every egg, sperm, and embryo sample, completely eliminating any risk of sample mix-ups." },
    { q: "How long does one complete IVF cycle take?", a: "Typically, one complete IVF cycle takes about 4 to 6 weeks, which includes ovarian stimulation, egg monitoring, retrieval, lab fertilization, and the final embryo transfer." },
    { q: "What are the common causes of IVF failure?", a: "IVF failure can occur due to chromosomal issues in embryos, poor egg/sperm quality, or uterine receptivity issues. We use advanced diagnostic testing (like PGT-A screening) to resolve these challenges." }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTestimonialIdx((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Handlers
  const handleLeadSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Construct WhatsApp message
    const whatsappMsg = `Hello Pravi Global IVF! I have sent a Free Consultation request from the Homepage:\n\n` +
      `- *Name:* ${leadForm.name}\n` +
      `- *Phone:* ${leadForm.phone}\n` +
      `- *Treatment:* ${leadForm.service}\n` +
      `- *Message:* ${leadForm.message || 'No additional details'}\n\n` +
      `Please contact me soon. Thank you!`;
      
    const whatsappUrl = `https://api.whatsapp.com/send/?phone=918009150040&text=${encodeURIComponent(whatsappMsg)}&type=phone_number&app_absent=0`;
    
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setIsSubmitting(false);
      setFormSubmitted(true);
      setLeadForm({ name: '', phone: '', email: '', message: '', service: 'IVF' });
    }, 800);
  };

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    if (!selectedTime || !bookingName || !bookingPhone) {
      alert("Please complete all required fields and select a time slot.");
      return;
    }
    const formattedMsg = `Hello Pravi Global IVF! I have successfully scheduled a slot using the Consultation Scheduler:\n\n` +
      `- *Doctor:* ${selectedDoctor}\n` +
      `- *Day:* ${selectedDay}\n` +
      `- *Time Slot:* ${selectedTime}\n` +
      `- *Patient Name:* ${bookingName}\n` +
      `- *Phone:* ${bookingPhone}\n\n` +
      `Please confirm my reserved slot. Thank you!`;
    const whatsappUrl = `https://api.whatsapp.com/send/?phone=918009150040&text=${encodeURIComponent(formattedMsg)}&type=phone_number&app_absent=0`;
    window.open(whatsappUrl, '_blank');
    setBookingSuccess(true);
  };

  const handleCalcAnswer = (field, val) => {
    setCalcAnswers({ ...calcAnswers, [field]: val });
    if (calcStep < 4) setCalcStep(calcStep + 1);
  };

  const calculateSuccessProbability = () => {
    let base = 65;
    if (calcAnswers.age === '30-35') base -= 8;
    else if (calcAnswers.age === '35-40') base -= 20;
    else if (calcAnswers.age === '40+') base -= 38;
    
    if (calcAnswers.yearsTrying === '1-3') base -= 5;
    else if (calcAnswers.yearsTrying === '3+') base -= 10;
    
    if (calcAnswers.priorAttempts === '1-2') base += 5;
    else if (calcAnswers.priorAttempts === '3+') base -= 12;
    
    if (calcAnswers.healthFactor === 'pcos' || calcAnswers.healthFactor === 'male') base -= 5;
    else if (calcAnswers.healthFactor === 'lowAmh') base -= 15;
    
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
    <div className="bg-[#005a5a] min-h-screen text-slate-100 antialiased font-sans overflow-x-hidden selection:bg-white/30 selection:text-white relative">
      
      {/* Brand Ambient Background using RGB(0, 90, 90) Base */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#006a6a] via-[#005a5a] to-[#004a4a] opacity-90 pointer-events-none"></div>
      <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.04] pointer-events-none mix-blend-overlay"></div>

      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Rozha+One&family=Yatra+One&display=swap');
        body { font-family: 'Outfit', sans-serif; }
        
        .devanagari-calligraphy {
          font-family: 'Rozha One', 'Yatra One', serif;
          font-weight: 400;
          text-shadow: 0 4px 15px rgba(0,0,0,0.3);
        }

        /* Clean subtle scrollbar */
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.3); border-radius: 10px; }
        ::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.5); }

        .brand-panel {
          background: rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.2);
        }

        .btn-brand {
          background: #ffffff;
          color: #005a5a;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,1);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .btn-brand:hover {
          box-shadow: 0 8px 25px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,1);
          transform: translateY(-2px);
          background: #f8f9fa;
        }
      `}} />

      {/* DESKTOP SPLIT: LEFT PANEL - CLINICAL HUB APP SHELL */}
      <div className="lg:fixed lg:top-0 lg:left-0 lg:w-[480px] lg:h-screen bg-[#004a4a]/80 backdrop-blur-3xl border-r border-white/10 z-40 flex flex-col relative shadow-[20px_0_50px_rgba(0,0,0,0.3)]">
        
        {/* Soft Ambient Light Orbs - Brand Colors */}
        <div className="absolute top-[-10%] left-[-20%] w-[500px] h-[500px] bg-[#008a8a]/30 rounded-full filter blur-[120px] pointer-events-none animate-pulse"></div>
        <div className="absolute bottom-[0%] right-[-10%] w-[400px] h-[400px] bg-emerald-400/10 rounded-full filter blur-[120px] pointer-events-none"></div>

        {/* Scrollable Clinical Mockup Area */}
        <div className="flex-1 overflow-y-auto relative z-10 custom-scrollbar">
          
          {/* Full Hero Image Display (Flush to top) */}
          <div className="relative w-full shadow-[0_20px_50px_-10px_rgba(0,0,0,0.5)] bg-white overflow-hidden group cursor-pointer hover:opacity-95 transition-opacity">
            <a href="https://api.whatsapp.com/send/?phone=918009150040&text=Hello%20Pravi%20IVF" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
              <Image 
                src="/images/dream-parenthood-v2.jpg" 
                alt="Dream of Parenthood - Pravi IVF" 
                width={1000}
                height={1400}
                className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.01]" 
                priority
              />
            </a>
          </div>

          <div className="p-8">
            <div className="flex items-center gap-4 mb-6 mt-2 flex-wrap">
              <Image 
                src="/images/footer-logo.svg" 
                width={130} 
                height={42} 
                alt="Pravi IVF" 
                className="object-contain filter invert brightness-0 saturate-100" 
              />
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full text-white font-bold text-[11px] tracking-[0.15em] uppercase shadow-sm">
                Lajpat Nagar, Delhi
              </div>
            </div>

          <h1 className="devanagari-calligraphy text-[34px] sm:text-[40px] tracking-tight leading-[1.25] text-white mb-10">
            माता-पिता बनने का सपना होगा पूरा, <br/>
            <span className="text-white/90 border-b-2 border-white/30 pb-1 font-semibold">एडवांस्ड IVF केयर</span> के साथ
          </h1>

          {/* Live Activity Ticker (Real-time clinical feel) */}
          <div className="brand-panel rounded-3xl p-6 relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-white"></div>
            <h4 className="text-[9px] font-bold text-white/60 uppercase tracking-widest flex items-center gap-2 mb-5">
              <Activity className="h-3.5 w-3.5 text-white" /> Clinical Feed
            </h4>
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <span className="bg-white/10 text-white p-2 rounded-xl"><ShieldCheck className="h-4 w-4" /></span>
                <p className="text-xs text-white/80 leading-relaxed pt-1">Sample verified <span className="font-mono text-[#005a5a] font-bold bg-white px-1.5 py-0.5 rounded ml-1">#EWS-492</span></p>
              </div>
              <div className="flex gap-4 items-start">
                <span className="bg-white/10 text-white p-2 rounded-xl"><CheckCircle2 className="h-4 w-4" /></span>
                <p className="text-xs text-white/80 leading-relaxed pt-1">Environment optimal: <span className="text-white font-bold">37°C / 37% RH</span></p>
              </div>
              <div className="flex gap-4 items-start">
                <span className="bg-white/10 text-white/80 p-2 rounded-xl"><Clock className="h-4 w-4" /></span>
                <p className="text-xs text-white/80 leading-relaxed pt-1">Next priority slot in <span className="text-white font-bold">12 mins</span></p>
              </div>
            </div>
          </div>
          </div>

        </div>
      </div>

      {/* DESKTOP SPLIT: RIGHT PANEL - SCROLLABLE DASHBOARD */}
      <div className="lg:ml-[480px] w-full lg:w-[calc(100%-480px)] min-h-screen relative pb-28 lg:pb-0">
        
        {/* Top iOS-Style Section Tabs (Sticky on right pane) */}
        <div className="sticky top-0 z-30 bg-[#005a5a]/90 backdrop-blur-2xl border-b border-white/10 p-4 sm:p-5">
          <div className="max-w-5xl mx-auto flex gap-2 sm:gap-3 overflow-x-auto hide-scrollbar pb-1">
            {[
              { id: 'estimator', label: 'Estimator', icon: Calculator },
              { id: 'treatments', label: 'Treatments', icon: Activity },
              { id: 'booking', label: 'Book Slot', icon: Calendar },
              { id: 'reviews', label: 'Reviews', icon: Star },
              { id: 'faqs', label: 'FAQs', icon: Info },
            ].map(tab => (
              <button 
                key={tab.id}
                onClick={() => {
                  const el = document.getElementById(tab.id);
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="flex items-center gap-2 whitespace-nowrap px-5 py-2.5 rounded-full bg-white/10 border border-white/10 text-[11px] font-bold text-white hover:bg-white/20 transition-all tracking-widest uppercase shadow-sm"
              >
                <tab.icon className="h-3.5 w-3.5" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="p-5 sm:p-10 lg:p-16 max-w-[1000px] mx-auto space-y-24 relative z-10">
          
          {/* Hero Form / CTA Block */}
          <section id="hero-form" className="relative">
            <div className="brand-panel p-8 sm:p-14 rounded-[48px] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-[100px] pointer-events-none"></div>
              
              {formSubmitted ? (
                <div className="text-center py-12 space-y-5 relative z-10">
                  <div className="bg-white text-[#005a5a] w-24 h-24 rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <CheckCircle2 className="h-12 w-12 animate-bounce" />
                  </div>
                  <h3 className="text-3xl font-extrabold text-white tracking-tight">Registration Successful</h3>
                  <p className="text-white/80 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you for trusting Pravi Global. Our senior concierge will connect with you within 2 hours.
                  </p>
                  <button onClick={() => setFormSubmitted(false)} className="mt-8 btn-brand font-bold py-4 px-10 rounded-full transition-all text-[11px] uppercase tracking-widest">
                    Submit Another Query
                  </button>
                </div>
              ) : (
                <div className="relative z-10">
                  <div className="w-12 h-1.5 bg-white/20 rounded-full mx-auto mb-10"></div>
                  <h3 className="text-3xl sm:text-[42px] font-extrabold text-white text-center tracking-tight mb-4">Book Free Advisory</h3>
                  <p className="text-white/70 text-sm text-center mb-12 max-w-lg mx-auto leading-relaxed">Skip the waiting room. Provide your details below to reserve an exclusive, confidential doctor consultation.</p>
                  
                  <form onSubmit={handleLeadSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2.5">
                        <label className="block text-[10px] font-bold text-white/60 uppercase tracking-widest pl-1">Full Name</label>
                        <input type="text" required value={leadForm.name} onChange={(e) => setLeadForm({...leadForm, name: e.target.value})} placeholder="E.g. Priya Sharma" className="w-full bg-[#004a4a] border border-white/20 focus:border-white rounded-2xl px-6 py-4 text-white placeholder-white/40 focus:outline-none focus:ring-1 focus:ring-white transition-all text-sm font-medium shadow-inner" />
                      </div>
                      <div className="space-y-2.5">
                        <label className="block text-[10px] font-bold text-white/60 uppercase tracking-widest pl-1">Phone Number</label>
                        <input type="tel" required value={leadForm.phone} onChange={(e) => setLeadForm({...leadForm, phone: e.target.value})} placeholder="+91 00000 00000" className="w-full bg-[#004a4a] border border-white/20 focus:border-white rounded-2xl px-6 py-4 text-white placeholder-white/40 focus:outline-none focus:ring-1 focus:ring-white transition-all text-sm font-medium shadow-inner" />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2.5">
                        <label className="block text-[10px] font-bold text-white/60 uppercase tracking-widest pl-1">Treatment Type</label>
                        <div className="relative">
                          <select value={leadForm.service} onChange={(e) => setLeadForm({...leadForm, service: e.target.value})} className="w-full bg-[#004a4a] border border-white/20 focus:border-white rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-1 focus:ring-white transition-all text-sm font-medium appearance-none cursor-pointer shadow-inner">
                            <option value="IVF">IVF Treatment</option>
                            <option value="ICSI">ICSI Infertility</option>
                            <option value="IUI">IUI Insemination</option>
                            <option value="Freezing">Egg Freezing</option>
                            <option value="Consultation">General Consultation</option>
                          </select>
                          <ChevronDown className="h-4 w-4 text-white/60 absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none" />
                        </div>
                      </div>
                      <div className="space-y-2.5">
                        <label className="block text-[10px] font-bold text-white/60 uppercase tracking-widest pl-1">Brief Diagnosis</label>
                        <input type="text" value={leadForm.message} onChange={(e) => setLeadForm({...leadForm, message: e.target.value})} placeholder="Explain briefly (Optional)" className="w-full bg-[#004a4a] border border-white/20 focus:border-white rounded-2xl px-6 py-4 text-white placeholder-white/40 focus:outline-none focus:ring-1 focus:ring-white transition-all text-sm font-medium shadow-inner" />
                      </div>
                    </div>
                    <button type="submit" disabled={isSubmitting} className="w-full btn-brand py-5 px-8 rounded-2xl flex items-center justify-center gap-3 text-[11px] font-extrabold uppercase tracking-widest mt-6">
                      {isSubmitting ? <><RefreshCw className="h-4 w-4 animate-spin" /> Submitting securely...</> : <><Send className="h-4 w-4" /> Secure Consultation Slot</>}
                    </button>
                    <p className="text-center text-[10px] text-white/50 tracking-wide mt-5 font-medium">
                      <Shield className="inline h-3.5 w-3.5 mr-1.5 mb-0.5 text-white/80" /> 100% HIPAA-compliant data encryption
                    </p>
                  </form>
                </div>
              )}
            </div>

            {/* Widgets */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-10">
              {[
                { icon: Award, label: 'Success Rate', val: 'Up to 65%*' },
                { icon: ShieldCheck, label: 'Safety Tech', val: 'EWS Verified' },
                { icon: Users, label: 'Experience', val: '18+ Years' },
                { icon: Heart, label: 'Pain-Free', val: 'Needle-Free' }
              ].map((item, idx) => (
                <div key={idx} className="brand-panel p-6 rounded-[32px] flex flex-col justify-between h-[140px] transition-all duration-500 hover:-translate-y-2 hover:border-white/30">
                  <div className="flex justify-between items-start w-full">
                    <div className="bg-white/10 p-2.5 rounded-2xl border border-white/20">
                      <item.icon className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <div className="text-[9px] text-white/60 uppercase font-bold tracking-[0.2em]">{item.label}</div>
                    <div className="text-lg font-extrabold text-white mt-1 tracking-tight">{item.val}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Dynamic IVF Success Estimator */}
          <section id="estimator" className="pt-4">
            <div className="mb-12 text-center sm:text-left">
              <span className="text-[#005a5a] font-bold tracking-widest uppercase text-[9px] inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-white/20 mb-4">
                <Calculator className="h-3 w-3" /> Predictive AI
              </span>
              <h2 className="text-4xl sm:text-[42px] font-extrabold text-white tracking-tight">Personalized Score</h2>
              <p className="text-white/70 mt-4 text-sm sm:text-base max-w-xl leading-relaxed">Complete this 4-step clinical questionnaire to intelligently estimate your fertility success probability based on robust clinic data.</p>
            </div>

            <div className="brand-panel rounded-[48px] p-8 sm:p-14 relative overflow-hidden group">
              {!showCalcResult ? (
                <div className="relative z-10">
                  <div className="flex justify-between items-center mb-12 border-b border-white/20 pb-6">
                    <span className="text-[10px] font-bold text-white tracking-widest uppercase">Phase {calcStep} of 4</span>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4].map((s) => (
                        <span key={s} className={`h-1.5 rounded-full transition-all duration-500 ${s <= calcStep ? 'w-10 bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]' : 'w-3 bg-white/20'}`}></span>
                      ))}
                    </div>
                  </div>

                  {calcStep === 1 && (
                    <div className="space-y-8 animate-fade-in">
                      <h3 className="text-2xl font-extrabold text-white tracking-tight">Q1: What is the age of the female partner?</h3>
                      <div className="grid sm:grid-cols-2 gap-5">
                        {[
                          { label: 'Under 30 Years', val: 'under30', desc: 'Highest natural reserve' },
                          { label: '30 to 35 Years', val: '30-35', desc: 'Mild age effect' },
                          { label: '35 to 40 Years', val: '35-40', desc: 'Moderate ovarian reserve decline' },
                          { label: '40+ Years', val: '40+', desc: 'Advanced reproductive age' }
                        ].map((opt) => (
                          <button key={opt.val} onClick={() => handleCalcAnswer('age', opt.val)} className="bg-[#004a4a] border border-white/10 hover:border-white hover:bg-white/10 rounded-[32px] p-8 text-left transition-all duration-300 group/btn shadow-inner">
                            <div className="font-extrabold text-white text-xl transition-colors">{opt.label}</div>
                            <div className="text-sm font-medium text-white/60 mt-2">{opt.desc}</div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {calcStep === 2 && (
                    <div className="space-y-8 animate-fade-in">
                      <h3 className="text-2xl font-extrabold text-white tracking-tight">Q2: How long have you been actively trying?</h3>
                      <div className="grid sm:grid-cols-3 gap-5">
                        {[
                          { label: 'Less than 1 Year', val: 'under1' },
                          { label: '1 to 3 Years', val: '1-3' },
                          { label: 'More than 3 Years', val: '3+' }
                        ].map((opt) => (
                          <button key={opt.val} onClick={() => handleCalcAnswer('yearsTrying', opt.val)} className="bg-[#004a4a] border border-white/10 hover:border-white hover:bg-white/10 rounded-[32px] p-8 text-center transition-all duration-300 group/btn shadow-inner">
                            <span className="font-extrabold text-white text-lg transition-colors">{opt.label}</span>
                          </button>
                        ))}
                      </div>
                      <button onClick={() => setCalcStep(1)} className="text-white/60 hover:text-white text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 mt-8 transition-colors"><ChevronUp className="h-4 w-4 -rotate-90" /> Back</button>
                    </div>
                  )}

                  {calcStep === 3 && (
                    <div className="space-y-8 animate-fade-in">
                      <h3 className="text-2xl font-extrabold text-white tracking-tight">Q3: Any prior IVF or IUI treatment cycles?</h3>
                      <div className="grid sm:grid-cols-3 gap-5">
                        {[
                          { label: 'No Prior Cycles', val: 'none' },
                          { label: '1 to 2 Cycles', val: '1-2' },
                          { label: '3 or More Cycles', val: '3+' }
                        ].map((opt) => (
                          <button key={opt.val} onClick={() => handleCalcAnswer('priorAttempts', opt.val)} className="bg-[#004a4a] border border-white/10 hover:border-white hover:bg-white/10 rounded-[32px] p-8 text-center transition-all duration-300 group/btn shadow-inner">
                            <span className="font-extrabold text-white text-lg transition-colors">{opt.label}</span>
                          </button>
                        ))}
                      </div>
                      <button onClick={() => setCalcStep(2)} className="text-white/60 hover:text-white text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 mt-8 transition-colors"><ChevronUp className="h-4 w-4 -rotate-90" /> Back</button>
                    </div>
                  )}

                  {calcStep === 4 && (
                    <div className="space-y-8 animate-fade-in">
                      <h3 className="text-2xl font-extrabold text-white tracking-tight">Q4: Are you diagnosed with any of the following?</h3>
                      <div className="grid sm:grid-cols-2 gap-5">
                        {[
                          { label: 'No Specific Diagnosis', val: 'none', desc: 'Ready for evaluation' },
                          { label: 'PCOS / PCOD', val: 'pcos', desc: 'Need hormonal balancing' },
                          { label: 'Low AMH', val: 'lowAmh', desc: 'Requires customized stimulation' },
                          { label: 'Male Fertility Factors', val: 'male', desc: 'Perfect candidate for ICSI' }
                        ].map((opt) => (
                          <button key={opt.val} onClick={() => setCalcAnswers({ ...calcAnswers, healthFactor: opt.val })} className={`border rounded-[32px] p-8 text-left transition-all duration-300 shadow-inner ${calcAnswers.healthFactor === opt.val ? 'bg-white text-[#005a5a] border-white' : 'bg-[#004a4a] text-white border-white/10 hover:border-white/30'}`}>
                            <div className={`font-extrabold text-xl ${calcAnswers.healthFactor === opt.val ? 'text-[#005a5a]' : 'text-white'}`}>{opt.label}</div>
                            <div className={`text-sm font-medium mt-2 ${calcAnswers.healthFactor === opt.val ? 'text-[#005a5a]/70' : 'text-white/60'}`}>{opt.desc}</div>
                          </button>
                        ))}
                      </div>
                      <div className="flex justify-between items-center pt-10 mt-10 border-t border-white/20">
                        <button onClick={() => setCalcStep(3)} className="text-white/60 hover:text-white text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 transition-colors"><ChevronUp className="h-4 w-4 -rotate-90" /> Back</button>
                        <button onClick={() => calculateSuccessProbability()} disabled={!calcAnswers.healthFactor} className="btn-brand disabled:opacity-50 font-bold py-5 px-10 rounded-full transition-all flex items-center gap-2 text-[11px] uppercase tracking-widest">
                          Generate Report <Sparkle className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="space-y-8 text-center py-8 animate-fade-in relative z-10">
                  <div className="max-w-md mx-auto space-y-5">
                    <span className="text-[#005a5a] font-bold uppercase tracking-widest text-[9px] bg-white border border-white/20 px-4 py-2 rounded-full">Analysis Completed</span>
                    <h3 className="text-3xl font-extrabold text-white tracking-tight">Estimated Success Rate</h3>
                    
                    <div className="relative w-56 h-56 mx-auto flex items-center justify-center my-12">
                      <div className="absolute inset-0 bg-white/5 rounded-full blur-2xl"></div>
                      <svg className="w-full h-full transform -rotate-90 relative z-10">
                        <circle cx="112" cy="112" r="100" strokeWidth="6" stroke="rgba(255,255,255,0.1)" fill="transparent" />
                        <circle cx="112" cy="112" r="100" strokeWidth="10" stroke="#ffffff" fill="transparent" strokeLinecap="round"
                          strokeDasharray={628.3} strokeDashoffset={628.3 - (628.3 * calculatedScore) / 100}
                          className="transition-all duration-[2.5s] ease-out drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]" />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
                        <span className="text-6xl font-black text-white tracking-tighter">{calculatedScore}%</span>
                        <span className="text-[10px] text-white/70 mt-1 font-bold uppercase tracking-widest">Probability</span>
                      </div>
                    </div>

                    <p className="text-white/80 text-base leading-relaxed">
                      Based on your profile, you hold a highly optimistic success rate. At Pravi Global, we can maximize this utilizing advanced protocols.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row justify-center gap-4 pt-8">
                    <button onClick={() => { document.getElementById('hero-form').scrollIntoView({ behavior: 'smooth' }); }} className="btn-brand font-bold py-4 px-10 rounded-full transition-all text-[11px] uppercase tracking-widest">
                      Consult Specialist
                    </button>
                    <button onClick={resetCalculator} className="bg-white/10 border border-white/20 hover:bg-white/20 text-white font-bold py-4 px-10 rounded-full transition-all flex items-center justify-center gap-2 text-[11px] uppercase tracking-widest shadow-sm">
                      <RefreshCw className="h-4 w-4" /> Retake
                    </button>
                  </div>
                </div>
              )}
            </div>
          </section>


          {/* Treatment Explorer */}
          <section id="treatments" className="pt-4">
            <div className="mb-10 text-center sm:text-left">
              <h2 className="text-4xl sm:text-[42px] font-extrabold text-white tracking-tight">Clinical Treatments</h2>
            </div>

            <div className="flex flex-wrap justify-center sm:justify-start gap-3 mb-10">
              {Object.keys(treatments).map((key) => (
                <button
                  key={key} onClick={() => setActiveTreatment(key)}
                  className={`px-6 py-3.5 rounded-full font-bold text-[10px] uppercase tracking-widest transition-all border ${
                    activeTreatment === key 
                      ? 'btn-brand border-transparent' 
                      : 'bg-white/10 text-white/70 border-white/20 hover:border-white/40 hover:text-white shadow-sm'
                  }`}
                >
                  {treatments[key].title.split(' (')[0]}
                </button>
              ))}
            </div>

            <div className="brand-panel rounded-[48px] p-8 sm:p-14 relative overflow-hidden border-white/10">
              <div className="grid lg:grid-cols-12 gap-16 items-center relative z-10">
                <div className="lg:col-span-7 space-y-6">
                  <span className="text-[9px] text-[#005a5a] font-bold tracking-widest uppercase bg-white px-4 py-2 rounded-full inline-block border border-white/20">
                    Expected Rate: {treatments[activeTreatment].successRate}
                  </span>
                  <h3 className="text-3xl sm:text-[40px] font-extrabold text-white tracking-tight leading-tight">{treatments[activeTreatment].title}</h3>
                  <p className="text-white font-medium text-lg italic">"{treatments[activeTreatment].tagline}"</p>
                  <p className="text-white/80 leading-relaxed text-base">{treatments[activeTreatment].desc}</p>

                  <div className="space-y-5 pt-6 border-t border-white/20">
                    <h4 className="font-bold text-white/60 text-[10px] uppercase tracking-widest">Key Advantages</h4>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {treatments[activeTreatment].benefits.map((b, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-sm text-[#005a5a] bg-white p-4 rounded-2xl shadow-inner">
                          <Check className="h-4 w-4 text-[#005a5a] flex-shrink-0" />
                          <span className="text-xs font-semibold">{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-[#004a4a] p-10 rounded-[40px] border border-white/20 relative shadow-inner">
                  <h4 className="font-bold text-sm text-white mb-8 flex items-center gap-2 border-b border-white/20 pb-5">
                    <Activity className="h-4 w-4 text-white" /> Treatment Timeline
                  </h4>
                  <div className="space-y-8 relative before:absolute before:left-4 before:top-2 before:bottom-2 before:w-[2px] before:bg-gradient-to-b before:from-white before:to-white/0">
                    {treatments[activeTreatment].steps.map((step, idx) => (
                      <div key={idx} className="flex items-start gap-6 relative z-10 group">
                        <span className="w-8 h-8 rounded-full bg-[#005a5a] border-[3px] border-white text-white font-extrabold text-xs flex items-center justify-center flex-shrink-0 shadow-[0_0_10px_rgba(255,255,255,0.3)] group-hover:bg-white group-hover:text-[#005a5a] transition-all">
                          {idx + 1}
                        </span>
                        <div className="pt-1.5">
                          <h5 className="font-extrabold text-white text-sm tracking-wide">{step}</h5>
                          <p className="text-[9px] text-white/60 mt-1.5 uppercase tracking-widest font-medium">Standard Protocol</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>


          {/* Consultation Scheduler */}
          <section id="booking" className="pt-4">
            <div className="mb-10 text-center sm:text-left">
              <span className="text-[#005a5a] font-bold uppercase tracking-widest text-[9px] bg-white border border-white/20 px-4 py-2 rounded-full mb-4 inline-block">Slot Scheduler</span>
              <h2 className="text-4xl sm:text-[42px] font-extrabold text-white tracking-tight">Reserve a Session</h2>
            </div>

            <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
              <div className="lg:col-span-7 space-y-6">
                <h3 className="font-bold text-white/60 text-[10px] uppercase tracking-widest mb-6 border-b border-white/20 pb-4">1. Select Specialist</h3>
                <div className="grid sm:grid-cols-2 gap-5">
                  {doctors.map((doc) => (
                    <button key={doc.name} onClick={() => { setSelectedDoctor(doc.name); setBookingSuccess(false); }}
                      className={`p-6 rounded-[32px] border text-left flex flex-row items-center gap-5 transition-all duration-300 hover:-translate-y-1 ${
                        selectedDoctor === doc.name 
                          ? 'border-white bg-white/20 shadow-[0_15px_30px_-10px_rgba(0,0,0,0.3)]' 
                          : 'border-white/20 bg-white/5 shadow-sm hover:border-white/40 hover:bg-white/10'
                      }`}
                    >
                      <div className="relative w-16 h-16 rounded-2xl overflow-hidden bg-[#004a4a] border border-white/10 flex-shrink-0">
                        <Image src={doc.image} alt={doc.name} fill className="object-cover" />
                      </div>
                      <div className="flex flex-col justify-center">
                        <h4 className={`font-extrabold text-base tracking-tight text-white`}>{doc.name}</h4>
                        <p className={`text-[10px] mt-1.5 uppercase tracking-widest font-medium text-white/70`}>{doc.role}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 brand-panel p-8 sm:p-10 rounded-[48px] relative border-white/20">
                {bookingSuccess ? (
                  <div className="text-center py-14 space-y-6">
                    <div className="bg-white text-[#005a5a] w-20 h-20 rounded-full flex items-center justify-center mx-auto border border-white">
                      <CheckCircle className="h-10 w-10" />
                    </div>
                    <h4 className="text-3xl font-extrabold text-white">Slot Reserved</h4>
                    <p className="text-sm text-white/80 leading-relaxed max-w-xs mx-auto">Appointment with <strong className="text-white font-bold">{selectedDoctor}</strong> on <strong className="text-white font-bold">{selectedDay}</strong> registered.</p>
                    <div className="bg-[#004a4a] border border-white/20 p-5 rounded-2xl text-xs text-white font-extrabold tracking-widest uppercase shadow-inner">{selectedTime || 'Morning Slot'}</div>
                    <button onClick={() => { setBookingSuccess(false); setSelectedTime(''); }} className="mt-8 bg-white/10 border border-white/20 hover:bg-white/20 text-white font-bold py-3.5 px-8 rounded-full text-[10px] uppercase tracking-widest transition-all shadow-sm">
                      Schedule Another
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleBookingSubmit} className="space-y-8">
                    <div className="space-y-5">
                      <h4 className="font-bold text-white/70 text-[10px] uppercase tracking-widest flex items-center gap-2">
                        <Calendar className="h-3.5 w-3.5 text-white" /> 2. Select Date
                      </h4>
                      <div className="grid grid-cols-3 gap-3">
                        {['Today', 'Tomorrow', 'Day After'].map((day) => (
                          <button key={day} type="button" onClick={() => { setSelectedDay(day); setBookingSuccess(false); }}
                            className={`py-3.5 rounded-2xl text-[11px] font-bold transition-all border shadow-sm ${
                              selectedDay === day ? 'bg-white text-[#005a5a] border-white shadow-[0_0_15px_rgba(255,255,255,0.3)]' : 'bg-[#004a4a] text-white/70 border-white/20 hover:bg-white/10 hover:border-white/40'
                            }`}
                          >{day}</button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-5">
                      <h4 className="font-bold text-white/70 text-[10px] uppercase tracking-widest flex items-center gap-2">
                        <Clock className="h-3.5 w-3.5 text-white" /> 3. Pick Slot
                      </h4>
                      <div className="grid grid-cols-2 gap-3">
                        {['10:30 AM', '12:00 PM', '02:30 PM', '04:00 PM'].map((slot) => (
                          <button key={slot} type="button" onClick={() => { setSelectedTime(slot); setBookingSuccess(false); }}
                            className={`py-4 px-2 rounded-2xl text-[11px] font-extrabold text-center transition-all border tracking-widest shadow-sm ${
                              selectedTime === slot ? 'bg-white text-[#005a5a] border-white shadow-[0_0_15px_rgba(255,255,255,0.3)]' : 'bg-[#004a4a] text-white/70 border-white/20 hover:bg-white/10 hover:border-white/40'
                            }`}
                          >{slot}</button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-5 border-t border-white/20 pt-8">
                      <h4 className="font-bold text-white/70 text-[10px] uppercase tracking-widest flex items-center gap-2 mb-4">
                        <User className="h-3.5 w-3.5 text-white" /> 4. Contact Info
                      </h4>
                      <input type="text" required value={bookingName} onChange={(e) => setBookingName(e.target.value)} placeholder="Full Name" className="w-full bg-[#004a4a] border border-white/20 focus:border-white rounded-2xl px-6 py-4 text-white placeholder-white/40 focus:outline-none focus:ring-1 focus:ring-white transition-all text-sm font-medium shadow-inner" />
                      <input type="tel" required value={bookingPhone} onChange={(e) => setBookingPhone(e.target.value)} placeholder="Phone Number" className="w-full bg-[#004a4a] border border-white/20 focus:border-white rounded-2xl px-6 py-4 text-white placeholder-white/40 focus:outline-none focus:ring-1 focus:ring-white transition-all text-sm font-medium shadow-inner" />
                    </div>

                    <button type="submit" className="w-full btn-brand py-5 px-6 rounded-2xl text-[11px] font-extrabold uppercase tracking-widest flex items-center justify-center gap-3 mt-8">
                      <Check className="h-4 w-4" /> Register Slot
                    </button>
                  </form>
                )}
              </div>
            </div>
          </section>


          {/* Testimonials */}
          <section id="reviews" className="pt-4">
            <div className="brand-panel rounded-[48px] p-8 sm:p-16 relative overflow-hidden border-white/20">
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
              
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full text-white font-bold text-[9px] uppercase tracking-widest mb-8 relative z-10">
                <Heart className="h-3.5 w-3.5 text-white" /> Patient Stories
              </div>
              
              <h2 className="text-4xl sm:text-[42px] font-extrabold text-white mb-12 relative z-10 tracking-tight">Success Stories</h2>

              <div className="bg-[#004a4a]/80 border border-white/20 p-8 sm:p-14 rounded-[32px] relative shadow-inner min-h-[260px] flex flex-col justify-between">
                <div className="space-y-8">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
                    <span className="font-extrabold text-2xl text-white tracking-tight">{testimonials[testimonialIdx].name}</span>
                    <span className="text-[9px] font-bold uppercase tracking-widest bg-white/10 border border-white/20 px-4 py-2 rounded-full text-white/80 shadow-sm w-fit">{testimonials[testimonialIdx].location}</span>
                  </div>
                  <p className="text-white/90 text-lg sm:text-xl leading-relaxed italic font-light">"{testimonials[testimonialIdx].text}"</p>
                </div>
                <div className="flex items-center justify-between border-t border-white/20 pt-8 mt-10">
                  <div className="flex text-white gap-1.5">
                    {[...Array(testimonials[testimonialIdx].rating)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]" />)}
                  </div>
                  <div className="flex gap-2.5">
                    {testimonials.map((_, i) => (
                      <button key={i} onClick={() => setTestimonialIdx(i)} className={`h-2 rounded-full transition-all duration-500 ${i === testimonialIdx ? 'w-10 bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]' : 'w-2 bg-white/30'}`}></button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQs */}
          <section id="faqs" className="pt-4 border-t border-white/20">
            <div className="mb-12 text-center sm:text-left">
              <h2 className="text-4xl sm:text-[42px] font-extrabold text-white tracking-tight">Common Questions</h2>
              <div className="relative max-w-md mt-8 shadow-sm rounded-full">
                <Search className="absolute inset-y-0 left-6 h-full w-4 text-white/60" />
                <input type="text" value={faqSearch} onChange={(e) => setFaqSearch(e.target.value)} placeholder="Search queries..." className="w-full bg-[#004a4a] border border-white/20 focus:border-white rounded-full pl-16 pr-6 py-4 text-white placeholder-white/50 focus:outline-none transition-all text-sm font-medium shadow-inner" />
              </div>
            </div>

            <div className="space-y-4">
              {filteredFaqs.map((faq, index) => {
                const isOpen = activeFaq === index;
                return (
                  <div key={index} className="border border-white/20 rounded-[32px] brand-panel overflow-hidden transition-all duration-300 hover:border-white/40">
                    <button onClick={() => setActiveFaq(isOpen ? null : index)} className="w-full px-8 py-7 text-left flex justify-between items-center transition-colors">
                      <span className="font-extrabold text-white text-base pr-6 tracking-wide">{faq.q}</span>
                      <span className={`flex-shrink-0 p-2.5 rounded-full transition-colors border ${isOpen ? 'bg-white text-[#005a5a] border-white' : 'bg-white/10 text-white/70 border-white/20'}`}>
                        {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                      </span>
                    </button>
                    <div className={`transition-all duration-500 ease-in-out ${isOpen ? 'max-h-60 opacity-100 border-t border-white/20' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                      <div className="px-8 py-7 text-sm sm:text-base text-white/80 leading-relaxed bg-[#004a4a]/80 font-medium">{faq.a}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Footer App-style */}
          <footer className="pt-16 pb-32 border-t border-white/20 text-center">
            <div className="flex justify-center mb-6">
              <Image 
                src="/images/footer-logo.svg" 
                width={140} 
                height={45} 
                alt="Pravi IVF" 
                className="object-contain filter invert brightness-0 saturate-100 opacity-90" 
              />
            </div>
            <p className="text-xs text-white/70 leading-relaxed font-medium max-w-sm mx-auto tracking-wide">Building number 41, First Floor, Ring Rd, Lajpat Nagar IV, New Delhi, 110024</p>
            <p className="text-[10px] text-white/50 font-bold mt-8 tracking-widest uppercase">&copy; {new Date().getFullYear()} Pravi Global IVF. All rights reserved.</p>
          </footer>

        </div>
      </div>

      {/* MOBILE FLOATING BOTTOM NAV (iOS style) */}
      <div className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[92%] max-w-sm brand-panel py-3 px-6 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex justify-between items-center z-50 border-white/20">
        {[
          { id: 'estimator', label: 'Score', icon: Calculator },
          { id: 'treatments', label: 'Clinic', icon: Activity },
          { id: 'booking', label: 'Book', icon: Calendar },
          { id: 'chat', label: 'Chat', icon: MessageSquare, action: () => window.open('https://api.whatsapp.com/send/?phone=+918009150040&text=Hello', '_blank') }
        ].map((tab, idx) => (
          <button key={idx} onClick={() => { if(tab.action) { tab.action(); } else { const el = document.getElementById(tab.id); if(el) el.scrollIntoView({ behavior: 'smooth' }); } }} className="flex flex-col items-center flex-1 text-white/60 hover:text-white transition-colors group">
            <tab.icon className="h-5 w-5 mb-1.5 group-hover:-translate-y-1 transition-transform duration-300" />
            <span className="text-[9px] font-bold tracking-widest uppercase">{tab.label}</span>
          </button>
        ))}
      </div>

    </div>
  );
}
