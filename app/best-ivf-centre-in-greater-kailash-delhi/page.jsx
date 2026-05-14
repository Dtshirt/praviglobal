'use client'
import React, { useState } from 'react';
import { Phone, CheckCircle, Activity, Heart, Shield, Users, MapPin, Plus, Minus, ArrowRight, Star, Award, Info, Sparkles, Instagram, Facebook, Youtube, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function GreaterKailashIVFPage() {
  const [activeFaq, setActiveFaq] = useState(null);

  const treatments = [
    { title: "IVF Treatment In Greater Kailash", desc: "Our IVF Clinic In Greater Kailash provides the most advanced IVF Treatment In Greater Kailash with a High IVF Success Rate Delhi." },
    { title: "IUI Treatment Delhi", desc: "Expert IUI Treatment Delhi at our Fertility Centre In Greater Kailash. A simple and effective first step in GK Delhi." },
    { title: "ICSI Treatment Delhi", desc: "Specialized ICSI Treatment Delhi for male fertility factors at our leading IVF Hospital In GK." },
    { title: "Male Infertility Treatment Delhi", desc: "Compassionate Male Infertility Treatment Delhi in South Delhi. Our IVF Doctor In GK finds solutions for every family." },
    { title: "Female Infertility Specialist Delhi", desc: "Consult our Female Infertility Specialist Delhi at the Best IVF Clinic In Greater Kailash for personalized fertility care." },
    { title: "PCOS Fertility Treatment Delhi", desc: "Specialized PCOS Fertility Treatment Delhi at our IVF Centre In GK Delhi to help you conceive safely." },
    { title: "Low AMH Treatment Delhi", desc: "Expert Low AMH Treatment Delhi using customized protocols at our Fertility Clinic In South Delhi." },
    { title: "Affordable IVF Treatment Delhi", desc: "World-class care with Affordable IVF Treatment Delhi. Transparent pricing at the best IVF Hospital In GK." },
  ];

  const doctors = [
    {
      name: "Dr. Monica Sachdev",
      title: "Medical Director & Senior IVF Specialist",
      experience: "18+ Years",
      specialty: "IVF & Embryo Transfer Specialist",
      image: "/images/praviivf68adeb4f45d30_1756228431.png",
    },
    {
      name: "Dr. Ankita",
      title: "Clinical Director & Senior IVF Consultant",
      experience: "15+ Years",
      specialty: "IVF & Reproductive Medicine",
      image: "/images/dr-ankita.png",
    },
    {
      name: "Dr. Rit Shukla",
      title: "Chief Embryologist & Scientific Director",
      experience: "18+ Years",
      specialty: "Intracytoplasmic Sperm Injection (ICSI)",
      image: "/images/praviivf68adeb76c3b74_1756228470.png",
    },
    {
      name: "Dr. Sakshi Tandon",
      title: "Obstetrics Gynaecology",
      experience: "10+ Years",
      specialty: "OBS.Gynae, IVF Specialist",
      image: "/images/praviivf68adeb8d21097_1756228493.png",
    }
  ];

  const faqs = [
    {
      q: "Which is the best ivf center in Greater Kailash delhi?",
      a: "Our clinic is widely recognized as the Best IVF Centre In Greater Kailash, New Delhi due to our High IVF Success Rate Delhi, senior specialists, and honest, ethical approach to fertility care."
    },
    {
      q: "What makes you the Best IVF Clinic In Greater Kailash?",
      a: "It’s our combination of a High IVF Success Rate Delhi, compassionate care from an IVF Specialist In Greater Kailash, and transparent Affordable IVF Treatment Delhi."
    },
    {
      q: "Do you offer IUI Treatment Delhi?",
      a: "Yes, we often recommend IUI Treatment Delhi as a simpler first step at our Fertility Centre In Greater Kailash."
    },
    {
      q: "Can I see a Male Infertility Treatment Delhi specialist?",
      a: "Absolutely. We provide complete Male Infertility Treatment Delhi within our IVF Hospital In GK."
    },
    {
      q: "What is the success rate for PCOS Fertility Treatment Delhi?",
      a: "Women with PCOS often have very high success rates at our IVF Centre In GK Delhi once their cycles are managed by the Best IVF Doctor In GK."
    }
  ];

  return (
    <div className="bg-stone-50 min-h-screen text-stone-800">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-blue-900 text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-emerald-950 opacity-90 z-10"></div>
        
        <div className="max-w-7xl mx-auto relative z-20 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 bg-blue-500/20 backdrop-blur-md border border-blue-400 rounded-full px-5 py-2 text-blue-100 font-semibold text-sm mb-8">
              <Sparkles className="w-4 h-4 text-blue-300"/>
              <span>Best IVF Clinic In Greater Kailash</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8">
              Best <span className="text-blue-300 italic">IVF Clinic In Greater Kailash</span>: Your Path to Parenthood.
            </h1>
            <p className="text-xl text-teal-100 mb-10 max-w-xl leading-relaxed">
              Experience the Best IVF Treatment In Greater Kailash with a High IVF Success Rate Delhi. Our Fertility Centre In Greater Kailash is here to help you build your family.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
              {[
                "Best Fertility Doctor In Saket Delhi",
                "Leading IVF Hospital In GK",
                "Advanced ICSI Treatment Delhi",
                "Expert IUI Treatment Delhi"
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <CheckCircle className="text-blue-300 w-5 h-5 flex-shrink-0" />
                  <span className="text-stone-100 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-5">
              <Link href="#appointment" className="bg-blue-500 hover:bg-blue-600 text-white px-10 py-5 rounded-full font-bold text-lg text-center transition-all shadow-2xl">
                Book GK Delhi Consultation
              </Link>
              <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer" className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-10 py-5 rounded-full font-bold text-lg text-center transition-all flex items-center justify-center gap-2">
                WhatsApp IVF Specialist In Greater Kailash
              </a>
            </div>
          </div>

          {/* Lead Form */}
          <div className="bg-white rounded-[2.5rem] p-10 shadow-2xl relative border border-stone-100" id="appointment">
            <h3 className="text-3xl font-bold text-stone-900 mb-3">Talk to an IVF Doctor In GK</h3>
            <p className="text-stone-500 mb-8 leading-relaxed">Consult the best Fertility Clinic In South Delhi for a personalized plan.</p>
            
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-stone-400 mb-2">Full Name</label>
                  <input type="text" className="w-full px-5 py-4 bg-stone-50 border border-stone-200 rounded-2xl focus:ring-2 focus:ring-teal-500 focus:outline-none" placeholder="Name" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-stone-400 mb-2">Phone</label>
                  <input type="tel" className="w-full px-5 py-4 bg-stone-50 border border-stone-200 rounded-2xl focus:ring-2 focus:ring-teal-500 focus:outline-none" placeholder="Mobile" />
                </div>
              </div>
              <button type="button" className="w-full bg-blue-800 hover:bg-blue-900 text-white font-bold py-5 rounded-2xl transition-all shadow-lg active:scale-95">
                Request GK Delhi Callback
              </button>
              <div className="flex items-center justify-center gap-2 text-[10px] uppercase tracking-widest text-stone-400">
                <Shield className="w-3 h-3"/> Affordable IVF Treatment Delhi
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* 2. ABOUT SECTION */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-8 leading-tight">Advanced IVF Treatment In Greater Kailash at our IVF Centre In GK Delhi</h2>
            <div className="space-y-6 text-lg text-stone-600 leading-relaxed font-light">
              <p>
                As the Best IVF Clinic In Greater Kailash, we offer a High IVF Success Rate Delhi for every family. Our Fertility Centre In Greater Kailash provides world-class care in South Delhi.
              </p>
              <p>
                Whether you need IUI Treatment Delhi or specialized Female Infertility Specialist Delhi care, our IVF Hospital In GK is equipped with advanced technology.
              </p>
            </div>
          </div>
          <div className="bg-stone-100 rounded-[3rem] p-12 relative overflow-hidden border border-stone-200">
             <h3 className="text-2xl font-bold text-blue-900 mb-8 text-center">GK Delhi Excellence</h3>
             <ul className="space-y-6">
               {[
                 "Consultations with the Best IVF Doctor In GK.",
                 "High IVF Success Rate Delhi in complex cases.",
                 "Transparent and Affordable IVF Treatment Delhi.",
                 "Specialized PCOS Fertility Treatment Delhi.",
                 "Expert Male Infertility Treatment Delhi in GK."
               ].map((item, i) => (
                 <li key={i} className="flex items-start gap-4">
                   <CheckCircle className="w-6 h-6 text-blue-800 flex-shrink-0 mt-0.5" />
                   <span className="text-stone-700 font-medium leading-relaxed">{item}</span>
                 </li>
               ))}
             </ul>
          </div>
        </div>
      </section>

      {/* 3. TREATMENTS SECTION */}
      <section className="py-24 bg-stone-900 text-stone-100 px-4 text-center">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">Expert IVF Treatment In Greater Kailash</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {treatments.map((treatment, i) => (
              <div key={i} className="bg-stone-800/50 border border-stone-700 rounded-3xl p-8 hover:bg-stone-800 transition-all">
                <h3 className="text-xl font-bold mb-4">{treatment.title}</h3>
                <p className="text-stone-400 text-sm leading-relaxed font-light">{treatment.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctor Profiles */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-100 px-4 py-2 rounded-full mb-4">
              <Users className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-semibold text-emerald-700">Expert Team</span>
            </div>
            <h2 className="text-4xl font-bold text-stone-900 mb-4">Meet Our Specialists</h2>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto">
              Led by internationally recognized fertility experts with decades of combined experience
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {doctors.map((doctor, index) => (
              <div key={index} className="bg-stone-50 rounded-[2.5rem] shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-stone-100">
                <div className="p-8">
                  <div className="flex justify-center mb-6">
                    <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-teal-400 rounded-full flex items-center justify-center shadow-xl overflow-hidden">
                      <Image
                        src={doctor.image}
                        alt={doctor.name}
                        width={130}
                        height={130}
                        className=" object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  <h4 className="text-2xl font-bold text-stone-800 mb-2 text-center">{doctor.name}</h4>
                  <p className="text-teal-600 font-medium mb-1 text-center">{doctor.title}</p>
                  <p className="text-stone-500 text-sm text-center mb-4 italic">{doctor.specialty}</p>
                  <div className="flex items-center justify-center gap-2 text-blue-600 font-bold">
                    <Award className="w-4 h-4"/> {doctor.experience} Exp.
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FAQ SECTION */}
      <section className="py-24 px-4 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-stone-900 mb-16 text-center">GK Delhi FAQ</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white border border-stone-100 rounded-2xl overflow-hidden shadow-sm">
              <button 
                onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                className="w-full text-left px-10 py-7 font-bold text-stone-800 flex justify-between items-center hover:bg-stone-50"
              >
                <span>{faq.q}</span>
                {activeFaq === i ? <Minus className="w-5 h-5 text-blue-800" /> : <Plus className="w-5 h-5 text-stone-300" />}
              </button>
              {activeFaq === i && (
                <div className="px-10 pb-10 text-stone-600 leading-relaxed font-light border-t border-stone-50 pt-8 bg-stone-50/30">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Social & Trust Connections */}
      <section className="py-20 px-4 bg-white border-t border-stone-100 text-stone-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center text-left">
            <div>
              <h2 className="text-3xl font-bold text-stone-900 mb-6 font-serif italic">Connect With Our Community</h2>
              <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                Stay updated with the latest in fertility science, watch real patient success stories, and join our growing community of hopeful parents across New Delhi.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="https://www.instagram.com/praviglobalivfpolyclinic/" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-bold transition-transform hover:scale-105">
                  <Instagram className="w-5 h-5"/> Instagram
                </a>
                <a href="https://www.facebook.com/PraviIVF" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-[#1877F2] text-white rounded-full font-bold transition-transform hover:scale-105">
                  <Facebook className="w-5 h-5"/> Facebook
                </a>
                <a href="https://www.youtube.com/watch?v=2N0bx-OFLYQ" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-[#FF0000] text-white rounded-full font-bold transition-transform hover:scale-105">
                  <Youtube className="w-5 h-5"/> Watch Success Stories
                </a>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a href="https://www.practo.com/delhi/clinic/pravi-global-ivf-polyclinic-lajpat-nagar-4/abo" target="_blank" rel="noreferrer" className="p-6 bg-stone-50 border border-stone-100 rounded-2xl hover:border-blue-200 transition-all group">
                <div className="text-blue-600 mb-3 group-hover:scale-110 transition-transform"><Activity className="w-8 h-8"/></div>
                <h4 className="font-bold text-stone-900 mb-1">Practo Verified</h4>
                <p className="text-xs text-stone-500">Read patient reviews and book appointments easily.</p>
              </a>
              <a href="https://www.justdial.com/Kanpur/Pravi-Ivf-Fertility-Centre-Near-Raj-Ratan-Saree-Motijheel-Chauraha-Swaroop-Nagar/0512PX512-X512-160714183543-G2T4_BZDET" target="_blank" rel="noreferrer" className="p-6 bg-stone-50 border border-stone-100 rounded-2xl hover:border-blue-200 transition-all group">
                <div className="text-blue-600 mb-3 group-hover:scale-110 transition-transform"><Star className="w-8 h-8"/></div>
                <h4 className="font-bold text-stone-900 mb-1">JustDial Top Rated</h4>
                <p className="text-xs text-stone-500">Highest rated fertility centre with trusted feedback.</p>
              </a>
              <a href="https://share.google/l3CxCfdJJf9C1DQBL" target="_blank" rel="noreferrer" className="p-6 bg-stone-50 border border-stone-100 rounded-2xl hover:border-blue-200 transition-all group">
                <div className="text-blue-600 mb-3 group-hover:scale-110 transition-transform"><MapPin className="w-8 h-8"/></div>
                <h4 className="font-bold text-stone-900 mb-1">Find Us on Maps</h4>
                <p className="text-xs text-stone-500">Visit our flagship South Delhi centre in Lajpat Nagar.</p>
              </a>
              <a href="https://praviivf.in/" target="_blank" rel="noreferrer" className="p-6 bg-stone-50 border border-stone-100 rounded-2xl hover:border-blue-200 transition-all group">
                <div className="text-blue-600 mb-3 group-hover:scale-110 transition-transform"><ExternalLink className="w-8 h-8"/></div>
                <h4 className="font-bold text-stone-900 mb-1">Main Website</h4>
                <p className="text-xs text-stone-500">Explore our full range of services across India.</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Locations (Internal Links) */}
      <section className="py-20 px-4 bg-stone-50 border-t border-stone-200 text-stone-800">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-stone-900 mb-8 uppercase tracking-widest">Explore Other Locations</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/best-ivf-centre-in-south-delhi" className="px-6 py-3 bg-white border border-stone-200 rounded-xl hover:bg-blue-800 hover:text-white transition-all font-medium text-sm text-center">Best IVF Centre In South Delhi</Link>
            <Link href="/best-ivf-centre-in-saket-delhi" className="px-6 py-3 bg-white border border-stone-200 rounded-xl hover:bg-blue-800 hover:text-white transition-all font-medium text-sm text-center">Best IVF Centre In Saket, New Delhi</Link>
            <Link href="/best-ivf-centre-in-greater-kailash-delhi" className="px-6 py-3 bg-white border border-stone-200 rounded-xl hover:bg-blue-800 hover:text-white transition-all font-medium text-sm text-center">Best IVF Centre In Greater Kailash (GK I & GK II), New Delhi</Link>
            <Link href="/best-ivf-centre-in-hauz-khas-delhi" className="px-6 py-3 bg-white border border-stone-200 rounded-xl hover:bg-blue-800 hover:text-white transition-all font-medium text-sm text-center">Best IVF Centre In Hauz Khas, New Delhi</Link>
            <Link href="/best-ivf-centre-in-green-park-delhi" className="px-6 py-3 bg-white border border-stone-200 rounded-xl hover:bg-blue-800 hover:text-white transition-all font-medium text-sm text-center">Best IVF Centre In Green Park, New Delhi</Link>
            <Link href="/best-ivf-centre-in-malviya-nagar-delhi" className="px-6 py-3 bg-white border border-stone-200 rounded-xl hover:bg-blue-800 hover:text-white transition-all font-medium text-sm text-center">Best IVF Centre In Malviya Nagar, New Delhi</Link>
            <Link href="/best-ivf-centre-in-defence-colony-delhi" className="px-6 py-3 bg-white border border-stone-200 rounded-xl hover:bg-blue-800 hover:text-white transition-all font-medium text-sm text-center">Best IVF Centre In Defence Colony, New Delhi</Link>
            <Link href="/best-ivf-centre-in-lajpat-nagar-delhi" className="px-6 py-3 bg-white border border-stone-200 rounded-xl hover:bg-blue-800 hover:text-white transition-all font-medium text-sm text-center">Best IVF Centre In Lajpat Nagar, New Delhi</Link>
            <Link href="/best-ivf-centre-in-kalkaji-delhi" className="px-6 py-3 bg-white border border-stone-200 rounded-xl hover:bg-blue-800 hover:text-white transition-all font-medium text-sm text-center">Best IVF Centre In Kalkaji, New Delhi</Link>
            <Link href="/best-ivf-centre-in-vasant-kunj-delhi" className="px-6 py-3 bg-white border border-stone-200 rounded-xl hover:bg-blue-800 hover:text-white transition-all font-medium text-sm text-center">Best IVF Centre In Vasant Kunj, New Delhi</Link>
            <Link href="/best-ivf-centre-in-vasant-vihar-delhi" className="px-6 py-3 bg-white border border-stone-200 rounded-xl hover:bg-blue-800 hover:text-white transition-all font-medium text-sm text-center">Best IVF Centre In Vasant Vihar, New Delhi</Link>
            <Link href="/best-ivf-centre-in-chittaranjan-park-delhi" className="px-6 py-3 bg-white border border-stone-200 rounded-xl hover:bg-blue-800 hover:text-white transition-all font-medium text-sm text-center">Best IVF Centre In Chittaranjan Park (CR Park), New Delhi</Link>
            <Link href="/best-ivf-centre-in-new-friends-colony-delhi" className="px-6 py-3 bg-white border border-stone-200 rounded-xl hover:bg-blue-800 hover:text-white transition-all font-medium text-sm text-center">Best IVF Centre In New Friends Colony, New Delhi</Link>
            <Link href="/best-ivf-centre-in-jangpura-delhi" className="px-6 py-3 bg-white border border-stone-200 rounded-xl hover:bg-blue-800 hover:text-white transition-all font-medium text-sm text-center">Best IVF Centre In Jangpura, New Delhi</Link>
            <Link href="/best-ivf-centre-in-south-extension-delhi" className="px-6 py-3 bg-white border border-stone-200 rounded-xl hover:bg-blue-800 hover:text-white transition-all font-medium text-sm text-center">Best IVF Centre In South Extension (South Ex I & II), New Delhi</Link>
            <Link href="/best-ivf-centre-in-panchsheel-park-delhi" className="px-6 py-3 bg-white border border-stone-200 rounded-xl hover:bg-blue-800 hover:text-white transition-all font-medium text-sm text-center">Best IVF Centre In Panchsheel Park, New Delhi</Link>
            <Link href="/best-ivf-centre-in-mehrauli-delhi" className="px-6 py-3 bg-white border border-stone-200 rounded-xl hover:bg-blue-800 hover:text-white transition-all font-medium text-sm text-center">Best IVF Centre In Mehrauli, New Delhi</Link>
            <Link href="/best-ivf-centre-in-sarita-vihar-delhi" className="px-6 py-3 bg-white border border-stone-200 rounded-xl hover:bg-blue-800 hover:text-white transition-all font-medium text-sm text-center">Best IVF Centre In Sarita Vihar, New Delhi</Link>
            <Link href="/best-ivf-centre-in-okhla-delhi" className="px-6 py-3 bg-white border border-stone-200 rounded-xl hover:bg-blue-800 hover:text-white transition-all font-medium text-sm text-center">Best IVF Centre In Okhla, New Delhi</Link>
            <Link href="/best-ivf-centre-in-nehru-place-delhi" className="px-6 py-3 bg-white border border-stone-200 rounded-xl hover:bg-blue-800 hover:text-white transition-all font-medium text-sm text-center">Best IVF Centre In Nehru Place, New Delhi</Link>
            <Link href="/best-ivf-centre-in-khan-market-delhi" className="px-6 py-3 bg-white border border-stone-200 rounded-xl hover:bg-blue-800 hover:text-white transition-all font-medium text-sm text-center">Best IVF Centre In Khan Market, New Delhi</Link>
          </div>
        </div>
      </section>

      {/* 5. FINAL CTA SECTION */}
      <section className="bg-blue-900 text-white py-24 px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">Trust the Best IVF Clinic In Greater Kailash</h2>
        <p className="text-xl text-teal-100 mb-12">
          Consult our IVF Specialist In Greater Kailash for world-class IVF Treatment In Greater Kailash.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link href="#appointment" className="bg-blue-500 text-white px-12 py-5 rounded-full font-bold text-lg shadow-2xl">
            GK Delhi Consultation
          </Link>
          <a href="tel:+919999999999" className="bg-blue-950/40 text-white px-12 py-5 rounded-full font-bold text-lg border border-blue-800">
            Call IVF Hospital In GK
          </a>
        </div>
      </section>

    </div>
  );
}
