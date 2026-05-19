'use client'
import React, { useState } from 'react';
import { Phone, CheckCircle, Activity, Award, Heart, Shield, Users, MapPin, Plus, Minus, ArrowRight, Star, Instagram, Facebook, Youtube, GraduationCap, Briefcase } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { doctors } from '@/lib/data';

export default function FertilitySpecialistLajpatNagar() {
  const [activeFaq, setActiveFaq] = useState(null);

  const stats = [
    { number: "18+ Years", label: "Clinical Experience" },
    { number: "10,000+", label: "Happy Families" },
    { number: "Class 100", label: "IVF Lab Infrastructure" },
    { number: "65% - 75%", label: "IVF Success Rates" }
  ];

  const highlights = [
    {
      title: "Decades of Clinical Expertise",
      desc: "Our specialists hold top-tier reproductive degrees and fellowships from internationally recognized institutions."
    },
    {
      title: "Highly Personalized Protocols",
      desc: "No one-size-fits-all treatments. Every patient receives custom stimulation schedules matching their unique biology."
    },
    {
      title: "Ethical & Transparent Care",
      desc: "100% upfront pricing with zero hidden charges. We prioritize evidence-based protocols to maximize safety."
    },
    {
      title: "State-of-the-Art Diagnostics",
      desc: "In-house 3D transvaginal scans, high-resolution laparoscopy, and fully certified embryology facilities."
    }
  ];

  const faqs = [
    {
      q: "Who is the best fertility specialist in Lajpat Nagar Delhi?",
      a: "<Link href='/best-ivf-doctors-in-lajpat-nagar-delhi' class='text-teal-600 hover:underline font-normal'>Dr. Monica Sachdev</Link>, with over 18+ years of dedicated clinical experience, is highly regarded as the premier fertility specialist in Lajpat Nagar Delhi. Along with Dr. Ankita and our senior embryologists, Pravi IVF delivers highly successful, compassionate care."
    },
    {
      q: "What conditions does a fertility specialist in lajpat nagar delhi treat?",
      a: "A fertility specialist in lajpat nagar delhi diagnoses and treats various reproductive challenges, including female factor issues (PCOS, endometriosis, blocked tubes, low ovarian reserve) and male factor challenges (azoospermia, low sperm count/motility), using IUI, IVF, ICSI, and fertility preservation."
    },
    {
      q: "When should I consult a fertility specialist in lajpat nagar delhi?",
      a: "If you are under 35 and have been trying to conceive naturally for 1 year, or over 35 and trying for 6 months without success, it is highly recommended to seek an expert fertility evaluation from a top fertility specialist in lajpat nagar delhi."
    },
    {
      q: "What is the success rate of fertility treatment in delhi at Pravi IVF?",
      a: "Our success rates for fertility treatment in delhi are exceptionally high, with up to 65-75% cumulative success per cycle for women under 35, achieved through personalized treatments and advanced laboratory technology at the best ivf centre in lajpat nagar delhi."
    },
    {
      q: "Is there support for male factor infertility?",
      a: "Absolutely. We offer comprehensive male fertility services, including detailed semen analysis, ICSI (Intracytoplasmic Sperm Injection), and surgical sperm retrieval procedures like <Link href='/tesa-and-pesa-treatment-in-lajpat-nagar-delhi' class='text-teal-600 hover:underline font-normal'>TESA/PESA</Link>."
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-r from-teal-950 via-teal-900 to-slate-950 text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-black/35 z-10"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-700 via-teal-955 to-black"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-1.5 bg-teal-500/20 backdrop-blur-md border border-teal-400/40 rounded-full text-teal-100 font-semibold text-sm mb-6 uppercase tracking-wider">
              🏆 Verified Best Fertility Clinic in South Delhi
            </div>
            <h1 className="text-4xl lg:text-5.5xl font-extrabold leading-tight mb-6">
              Consult the Best <span className="text-teal-300">Fertility Specialist in Lajpat Nagar Delhi</span>
            </h1>
            <p className="text-lg text-slate-200 mb-8 max-w-xl leading-relaxed">
              Achieve your dream of parenthood with highly experienced reproductive doctors, personalized treatment protocols, and high IVF success rates at Pravi Global IVF.
            </p>
            
            <div className="space-y-4 mb-8">
              {[
                "Led by Dr. Monica Sachdev (18+ Years Experience)",
                "Advanced AI-Assisted Class 100 Embryology Lab",
                "Personalized Stimulation Protocols Tailored to Your Body",
                "100% Ethical & Transparent Costs with Easy EMI"
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <CheckCircle className="text-teal-400 w-5 h-5 flex-shrink-0" />
                  <span className="text-slate-100 font-medium text-base">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#appointment-form" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-bold text-lg text-center transition-all shadow-lg hover:shadow-blue-500/30">
                Book Free Consultation
              </Link>
              <a href="tel:+918009150040" className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg text-center transition-all flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                Call Fertility Expert
              </a>
            </div>
          </div>

          {/* Lead Form */}
          <div id="appointment-form" className="bg-white rounded-2xl p-8 shadow-2xl relative text-slate-800 border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Connect with a Specialist</h3>
            <p className="text-slate-600 mb-6 text-sm">Schedule a detailed consultation & personalized fertility assessment today.</p>
            
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                <input type="text" className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none" placeholder="Enter your name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                <input type="tel" className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none" placeholder="Enter mobile number" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Fertility Inquiry</label>
                <select className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none bg-white">
                  <option>Consultation with Dr. Monica Sachdev</option>
                  <option>IVF Treatment Inquiry</option>
                  <option>PCOS / Female Fertility evaluation</option>
                  <option>Male Factor Azoospermia / ICSI</option>
                  <option>Second Opinion / Failed IVF cycles</option>
                </select>
              </div>
              <button type="button" className="w-full bg-slate-955 hover:bg-slate-900 text-white font-bold py-4 rounded-lg transition-colors mt-2 text-base">
                Book Expert Appointment Now
              </button>
              <p className="text-xs text-center text-slate-500 mt-4">🔒 100% Safe & Confidential Clinical Communication.</p>
            </form>
          </div>
        </div>
      </section>

      {/* 2. STATS STRIP */}
      <section className="bg-white border-b border-slate-200 py-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <div key={i} className="border-r last:border-0 border-slate-100 px-4">
              <div className="text-3xl md:text-4xl font-extrabold text-teal-600 mb-1">{stat.number}</div>
              <div className="font-semibold text-slate-600 text-sm md:text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. CORE EXPLANATION / INTRODUCTION */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold uppercase tracking-wider text-sm block mb-3">EXPERTISE YOU CAN TRUST</span>
          <h2 className="text-3xl md:text-4.5xl font-extrabold text-slate-900 mb-6">
            Consulting a Trusted Fertility Specialist in Lajpat Nagar Delhi
          </h2>
          <p className="text-slate-600 max-w-4xl mx-auto text-lg leading-relaxed font-light">
            Infertility is a deeply personal journey that requires far more than just clinical treatment. It requires highly specialized care, world-class diagnostics, and an empathetic approach. At Pravi Global IVF Polyclinic in Lajpat Nagar, Delhi, we specialize in offering custom reproductive solutions driven by evidence-based medicine and senior clinical expertise.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-800 leading-tight">Advanced Care Under Internationally Trained Specialists</h3>
            <p className="text-slate-600 text-lg leading-relaxed font-light">
              Choosing the right <Link href="/about-fertility-treatment-in-delhi" className="text-teal-600 hover:underline font-normal">fertility specialist in lajpat nagar delhi</Link> makes a monumental difference in your chances of conceiving. Our clinical team, led by <Link href="/best-ivf-doctors-in-lajpat-nagar-delhi" className="text-teal-600 hover:underline font-normal">Dr. Monica Sachdev</Link>, works in perfect synchronization with highly trained embryologists to monitor embryo quality under strict parameters.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed font-light">
              We focus on diagnosing the precise underlying causes of infertility—be it diminished ovarian reserve (low AMH), severe male factors, recurrent implantation failures, or complex PCOS disorders—and devise direct, ethical treatments to solve them.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, idx) => (
              <div key={idx} className="bg-teal-50/50 border border-teal-100/50 p-6 rounded-2xl">
                <h4 className="font-bold text-teal-900 text-base mb-2">{item.title}</h4>
                <p className="text-slate-600 text-xs leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. DETAILED DOCTORS PORTRAITS */}
      <section className="py-24 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full mb-4">
              <Users className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-semibold text-blue-700">Senior Medical Team</span>
            </div>
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Meet Our Infertility & IVF Experts</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Highly credentialed specialists dedicated to your parenthood dreams
            </p>
          </div>

          <div className="space-y-16">
            {doctors.map((doctor, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={doctor.id}
                  className={`grid lg:grid-cols-5 gap-12 items-center ${isEven ? '' : 'lg:grid-flow-dense'}`}
                >
                  {/* Doctor Image Block */}
                  <div className={`lg:col-span-2 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-tr from-slate-100 to-teal-50 border border-slate-100 group">
                      <Image
                        src={doctor.image}
                        alt={`Dr. ${doctor.name} - Fertility Specialist in Lajpat Nagar Delhi`}
                        width={500}
                        height={450}
                        className="object-cover w-full h-[380px] lg:h-[420px] group-hover:scale-102 transition-all duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-955/80 via-transparent to-transparent"></div>
                      <div className="absolute bottom-6 left-6 right-6 text-white">
                        <div className="flex items-center mb-1 text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-current mr-0.5" />
                          ))}
                        </div>
                        <p className="text-sm font-medium text-slate-200">Patients' Top Choice Specialist</p>
                      </div>
                    </div>
                  </div>

                  {/* Doctor Info Block */}
                  <div className={`lg:col-span-3 ${isEven ? 'lg:order-2' : 'lg:order-1'} space-y-6`}>
                    <div>
                      <h3 className="text-3xl font-extrabold text-slate-900 mb-2">
                        {doctor.name}
                      </h3>
                      <p className="text-teal-600 text-xl font-bold">
                        {doctor.specialty}
                      </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="flex items-center space-x-3 bg-slate-50 border border-slate-100 p-4 rounded-xl">
                        <GraduationCap className="h-6 w-6 text-teal-600 flex-shrink-0" />
                        <div>
                          <div className="text-xs font-semibold text-slate-500">Qualifications</div>
                          <div className="font-bold text-sm text-slate-700">{doctor.qualification.split(',')[0]} (Obs & Gynae)</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3 bg-slate-50 border border-slate-100 p-4 rounded-xl">
                        <Briefcase className="h-6 w-6 text-teal-600 flex-shrink-0" />
                        <div>
                          <div className="text-xs font-semibold text-slate-500">Clinical Experience</div>
                          <div className="font-bold text-sm text-slate-700">{doctor.experience}</div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-bold text-slate-800 text-lg mb-2">About the Specialist</h4>
                      <p
                        className="text-slate-600 leading-relaxed text-base font-light"
                        dangerouslySetInnerHTML={{ __html: doctor.bio }}
                      />
                    </div>

                    <div>
                      <h4 className="font-bold text-slate-800 text-lg mb-3">Key Areas of Reproductive Expertise</h4>
                      <div className="grid sm:grid-cols-2 gap-2.5">
                        {doctor.specialties.map((spec, sIdx) => (
                          <div key={sIdx} className="flex items-center text-slate-700">
                            <CheckCircle className="w-4 h-4 text-teal-600 mr-2 flex-shrink-0" />
                            <span className="text-sm font-medium">{spec}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2">
                      <Link href="#appointment-form" className="bg-teal-900 hover:bg-teal-950 text-white font-bold px-8 py-3.5 rounded-full text-base transition-colors inline-flex items-center">
                        Schedule Consultation <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE FAQs */}
      <section className="py-24 px-4 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-teal-600 font-bold uppercase tracking-wider text-sm block mb-3">YOUR QUESTIONS ANSWERED</span>
          <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-slate-600">Get insights regarding fertility specialists and advanced IVF procedures in Lajpat Nagar</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <button 
                onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                className="w-full text-left px-6 py-5 font-bold text-slate-800 flex justify-between items-center focus:outline-none text-base md:text-lg"
              >
                {faq.q}
                {activeFaq === i ? <Minus className="w-5 h-5 text-teal-600" /> : <Plus className="w-5 h-5 text-slate-400" />}
              </button>
              {activeFaq === i && (
                <div className="px-6 pb-5 text-slate-600 border-t border-slate-100 pt-4 leading-relaxed text-base font-light">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 6. SOCIAL CONNECTIVITY & VERIFIED BADGES */}
      <section className="py-20 px-4 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6 font-serif italic">Connect With Our Community</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed font-light">
                Watch patient success journeys, check live clinics details, and stay updated with key advancements in fertility science from our active community.
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
                <h4 className="font-bold text-slate-900 mb-1">Practo Verified Clinic</h4>
                <p className="text-xs text-slate-500">Consult top rated fertility specialists safely.</p>
              </a>
              <a href="https://share.google/l3CxCfdJJf9C1DQBL" target="_blank" rel="noreferrer" className="p-6 bg-slate-50 border border-slate-100 rounded-2xl hover:border-blue-200 transition-all group">
                <div className="text-blue-600 mb-3 group-hover:scale-110 transition-transform"><MapPin className="w-8 h-8"/></div>
                <h4 className="font-bold text-slate-900 mb-1">Find Us on Google Maps</h4>
                <p className="text-xs text-slate-500">Visit our flagship South Delhi centre in Lajpat Nagar.</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 7. LOCAL AREA LINKS */}
      <section className="py-20 px-4 bg-slate-100 border-t border-slate-200">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-slate-800 mb-8 uppercase tracking-widest">Explore Other Service Locations</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/best-ivf-centre-in-south-delhi" className="px-6 py-3 bg-white border border-slate-200 rounded-xl hover:bg-teal-900 hover:text-white transition-all font-medium text-sm">Best IVF Centre In South Delhi</Link>
            <Link href="/best-ivf-centre-in-saket-delhi" className="px-6 py-3 bg-white border border-slate-200 rounded-xl hover:bg-teal-900 hover:text-white transition-all font-medium text-sm">Best IVF Centre In Saket, New Delhi</Link>
            <Link href="/best-ivf-centre-in-greater-kailash-delhi" className="px-6 py-3 bg-white border border-slate-200 rounded-xl hover:bg-teal-900 hover:text-white transition-all font-medium text-sm">Best IVF Centre In Greater Kailash</Link>
            <Link href="/best-ivf-centre-in-hauz-khas-delhi" className="px-6 py-3 bg-white border border-slate-200 rounded-xl hover:bg-teal-900 hover:text-white transition-all font-medium text-sm">Best IVF Centre In Hauz Khas</Link>
            <Link href="/best-ivf-centre-in-lajpat-nagar-delhi" className="px-6 py-3 bg-white border border-slate-200 rounded-xl hover:bg-teal-900 hover:text-white transition-all font-medium text-sm">Best IVF Centre In Lajpat Nagar</Link>
            <Link href="/best-ivf-centre-in-defence-colony-delhi" className="px-6 py-3 bg-white border border-slate-200 rounded-xl hover:bg-teal-900 hover:text-white transition-all font-medium text-sm">Best IVF Centre In Defence Colony</Link>
          </div>
        </div>
      </section>

      {/* 8. BOTTOM CTA */}
      <section className="bg-gradient-to-r from-teal-955 to-slate-950 text-white py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 leading-tight">Begin Your Path to Joyful Parenthood Today</h2>
          <p className="text-xl text-teal-100 mb-10 leading-relaxed font-light">
            Do not let unexplained reproductive challenges delay your dream. Our top fertility specialist in Lajpat Nagar Delhi is here to guide you with clinical accuracy and empathetic support.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="#appointment-form" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors">
              Book Your Appointment Now
            </Link>
            <a href="https://wa.me/918009150040" target="_blank" rel="noreferrer" className="bg-teal-700 hover:bg-teal-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors border border-teal-500">
              WhatsApp Us Instantly
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
