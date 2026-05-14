'use client'
import React, { useState } from 'react';
import { Phone, CheckCircle, Activity, Heart, Shield, Users, MapPin, Plus, Minus, ArrowRight, Star, Award, Info, Instagram, Facebook, Youtube, ExternalLink } from 'lucide-react';
import Link from 'next/link';

import Image from 'next/image';

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
      q: "Which is the best ivf center in Saket delhi?",
      a: "Our clinic is widely recognized as the Best IVF Centre In Saket, New Delhi due to our High IVF Success Rate Delhi, senior specialists, and honest, ethical approach to fertility care."
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
      <section className="relative bg-blue-900 text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950 opacity-90 z-10"></div>
        <div className="max-w-7xl mx-auto relative z-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 bg-blue-500/20 backdrop-blur-md border border-blue-400 rounded-full px-4 py-1.5 text-blue-100 font-semibold text-sm mb-6">
              <Heart className="w-4 h-4 text-blue-300"/>
              <span>Leading Fertility Centre In Saket Delhi</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Best <span className="text-blue-300">IVF Clinic In Saket, Delhi</span>: Trust the Best Fertility Doctor In Saket Delhi
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-xl leading-relaxed">
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
                  <CheckCircle className="text-blue-400 w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-100">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#contact-form" className="bg-blue-500 hover:bg-blue-600 text-white px-10 py-5 rounded-full font-bold text-lg text-center transition-all shadow-xl">
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
                <input type="text" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none" placeholder="Enter name" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Saket Delhi Phone</label>
                <input type="tel" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none" placeholder="Enter mobile" />
              </div>
              <button type="button" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 rounded-xl transition-all mt-4">
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
          <div className="bg-rose-50 rounded-[2rem] p-12 h-full flex flex-col justify-center border border-blue-100">
               <h3 className="text-3xl font-bold text-blue-900 mb-8 text-center">Saket Delhi Excellence</h3>
               <ul className="space-y-6">
                 {[
                   "Best Fertility Doctor In Saket Delhi consultations.",
                   "Advanced IVF Treatment In Saket Delhi protocols.",
                   "Leading IVF Hospital In South Delhi infrastructure.",
                   "Specialized Female Infertility Specialist Delhi care.",
                   "Proven Male Infertility Treatment Delhi Delhi results."
                 ].map((reason, i) => (
                   <li key={i} className="flex items-start gap-4">
                     <CheckCircle className="w-6 h-6 text-blue-700 flex-shrink-0 mt-0.5" />
                     <span className="text-slate-700 font-medium leading-relaxed">{reason}</span>
                   </li>
                 ))}
               </ul>
          </div>
        </div>
      </section>

      {/* 3. TREATMENTS SECTION */}
      <section className="py-24 bg-blue-950 text-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Saket Delhi IVF Treatment In Saket Delhi</h2>
            <p className="text-rose-200 max-w-2xl mx-auto text-lg leading-relaxed">
              Discover Saket Delhi solutions at our Fertility Centre In Saket Delhi.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            {treatments.map((treatment, i) => (
              <div key={i} className="bg-blue-900/40 backdrop-blur-sm border border-blue-800 rounded-3xl p-8 hover:bg-blue-900/60 transition-all">
                <h3 className="text-xl font-bold mb-4">{treatment.title}</h3>
                <p className="text-blue-100/80 text-sm leading-relaxed">{treatment.desc}</p>
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
              <span className="text-sm font-semibold text-blue-700">Expert Team</span>
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Meet Our Specialists</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Led by internationally recognized fertility experts with decades of combined experience
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {doctors.map((doctor, index) => (
              <div key={index} className="bg-slate-50 rounded-[2rem] shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-slate-100">
                <div className="p-8">
                  <div className="flex justify-center mb-6">
                    <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full flex items-center justify-center shadow-xl overflow-hidden">
                      <Image
                        src={doctor.image}
                        alt={doctor.name}
                        width={130}
                        height={130}
                        className=" object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  <h4 className="text-2xl font-bold text-slate-800 mb-2 text-center">{doctor.name}</h4>
                  <p className="text-blue-600 font-medium mb-1 text-center">{doctor.title}</p>
                  <p className="text-slate-500 text-sm text-center mb-4 italic">{doctor.specialty}</p>
                  <div className="flex items-center justify-center gap-2 text-indigo-600 font-bold">
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
        <h2 className="text-4xl font-bold text-slate-900 mb-16 text-center">Saket Delhi FAQ</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm">
              <button 
                onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                className="w-full text-left px-8 py-6 font-bold text-slate-800 flex justify-between items-center hover:bg-rose-50/20 transition-colors"
              >
                <span>{faq.q}</span>
                {activeFaq === i ? <Minus className="w-5 h-5 text-blue-600" /> : <Plus className="w-5 h-5 text-slate-300" />}
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

      {/* Social & Trust Connections */}
      <section className="py-20 px-4 bg-white border-t border-slate-100 text-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center text-left">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6 font-serif italic">Connect With Our Community</h2>
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
              <a href="https://www.practo.com/delhi/clinic/pravi-global-ivf-polyclinic-lajpat-nagar-4/abo" target="_blank" rel="noreferrer" className="p-6 bg-slate-50 border border-slate-100 rounded-2xl hover:border-blue-200 transition-all group">
                <div className="text-blue-600 mb-3 group-hover:scale-110 transition-transform"><Activity className="w-8 h-8"/></div>
                <h4 className="font-bold text-slate-900 mb-1">Practo Verified</h4>
                <p className="text-xs text-slate-500">Read patient reviews and book appointments easily.</p>
              </a>
              <a href="https://www.justdial.com/Kanpur/Pravi-Ivf-Fertility-Centre-Near-Raj-Ratan-Saree-Motijheel-Chauraha-Swaroop-Nagar/0512PX512-X512-160714183543-G2T4_BZDET" target="_blank" rel="noreferrer" className="p-6 bg-slate-50 border border-slate-100 rounded-2xl hover:border-blue-200 transition-all group">
                <div className="text-blue-600 mb-3 group-hover:scale-110 transition-transform"><Star className="w-8 h-8"/></div>
                <h4 className="font-bold text-slate-900 mb-1">JustDial Top Rated</h4>
                <p className="text-xs text-stone-500">Highest rated fertility centre with trusted feedback.</p>
              </a>
              <a href="https://share.google/l3CxCfdJJf9C1DQBL" target="_blank" rel="noreferrer" className="p-6 bg-slate-50 border border-slate-100 rounded-2xl hover:border-blue-200 transition-all group">
                <div className="text-blue-600 mb-3 group-hover:scale-110 transition-transform"><MapPin className="w-8 h-8"/></div>
                <h4 className="font-bold text-slate-900 mb-1">Find Us on Maps</h4>
                <p className="text-xs text-slate-500">Visit our flagship South Delhi centre in Lajpat Nagar.</p>
              </a>
              <a href="https://praviivf.in/" target="_blank" rel="noreferrer" className="p-6 bg-slate-50 border border-slate-100 rounded-2xl hover:border-blue-200 transition-all group">
                <div className="text-blue-600 mb-3 group-hover:scale-110 transition-transform"><ExternalLink className="w-8 h-8"/></div>
                <h4 className="font-bold text-slate-900 mb-1">Main Website</h4>
                <p className="text-xs text-slate-500">Explore our full range of services across India.</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Locations (Internal Links) */}
      <section className="py-20 px-4 bg-slate-50 border-t border-slate-200 text-slate-800">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 uppercase tracking-widest">Explore Other Locations</h2>
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
      <section className="bg-blue-600 text-white py-24 px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 italic">Trust the Best Fertility Doctor In Saket Delhi</h2>
        <p className="text-xl text-blue-100 mb-12">
          Consult our IVF Clinic In Saket, Delhi for Saket Delhi excellence.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-5">
          <Link href="#contact-form" className="bg-white text-blue-700 px-10 py-5 rounded-full font-bold text-lg shadow-2xl">
            Saket Delhi Consultation
          </Link>
          <a href="tel:+919999999999" className="bg-blue-800 text-white px-10 py-5 rounded-full font-bold text-lg flex items-center justify-center gap-3 border border-blue-500">
            <Phone className="w-5 h-5"/> Saket Delhi Clinic
          </a>
        </div>
      </section>

    </div>
  );
}
