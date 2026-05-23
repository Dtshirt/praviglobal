'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar, Heart, Award, Shield, CheckCircle, Users, Clock, ChevronRight, Star, Phone, TrendingUp, Send, CheckCircle2, RefreshCw, ShieldCheck, Sparkles } from 'lucide-react';
import { hospitalInfo, services, doctors, testimonials, whyChooseUs, stats } from '@/lib/data';

// Static imports for instant, pre-fetched rendering (0ms loading delay)
import DoctorCard from '@/components/DoctorCard';
import TestimonialCard from '@/components/TestimonialCard';
import HealthcareServices2 from '@/components/HealthcareServices2';
import HomeSeoContent from '@/components/HomeSeoContent';
import ServiceCard from '@/components/ServiceCard';
import HealthcareServices from '@/components/HealthcareServices';
import MapSection from '@/components/MapSection';

export default function HomePage() {

  // 🌸 Homepage Hero Image Slider State
  const [activeHeroSlide, setActiveHeroSlide] = useState(0);
  const innerSlides = [
    '/images/hero1.png',
    '/images/hero2.png',
    '/images/hero3.png',
    '/images/hero4.png'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveHeroSlide((prev) => (prev + 1) % innerSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // 🌸 Homepage Hero Lead Form State
  const [leadForm, setLeadForm] = useState({ name: '', phone: '', service: 'IVF', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleLeadSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send the inquiry to the consultation API route
      await fetch('/api/consultation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: leadForm.name,
          email: 'praviglobalinfo@praviivf.in', // Official target email
          phone: leadForm.phone,
          country: `Homepage Hero Form (Treatment: ${leadForm.service})`,
          message: leadForm.message
        })
      });
    } catch (err) {
      console.error("Homepage hero lead dispatch failed:", err);
    }

    // Trigger WhatsApp notification for instant notification
    const whatsappMsg = `Hello Pravi Global IVF! I have sent a Free Consultation request from the Homepage:\n\n` +
      `- *Name:* ${leadForm.name}\n` +
      `- *Phone:* ${leadForm.phone}\n` +
      `- *Treatment:* ${leadForm.service}\n` +
      `- *Message:* ${leadForm.message || 'No additional details'}\n\n` +
      `Please contact me soon. Thank you!`;
    const whatsappUrl = `https://api.whatsapp.com/send/?phone=918009150040&text=${encodeURIComponent(whatsappMsg)}&type=phone_number&app_absent=0`;

    // Open in new tab
    window.open(whatsappUrl, '_blank');

    setIsSubmitting(false);
    setFormSubmitted(true);
    setLeadForm({ name: '', phone: '', service: 'IVF', message: '' });
  };

  // 🌸 Ovulation Calculator State
  const [showOvulationModal, setShowOvulationModal] = useState(false);
  const [lmpDate, setLmpDate] = useState('');
  const [cycleLength, setCycleLength] = useState(28);
  const [ovulationResult, setOvulationResult] = useState(null);

  // Set today's date as default for LMP Date
  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    setLmpDate(today);
  }, []);

  const calculateOvulation = (e) => {
    e.preventDefault();
    if (!lmpDate) return;

    const lmp = new Date(lmpDate);

    // 1. Next Period Start = LMP + cycleLength days
    const nextPeriod = new Date(lmp.getTime());
    nextPeriod.setDate(nextPeriod.getDate() + parseInt(cycleLength));

    // 2. Ovulation Date = Next Period Start - 14 days
    const ovulation = new Date(nextPeriod.getTime());
    ovulation.setDate(ovulation.getDate() - 14);

    // 3. Fertile Window Start = Ovulation - 5 days
    const fertileStart = new Date(ovulation.getTime());
    fertileStart.setDate(fertileStart.getDate() - 5);

    // 4. Fertile Window End = Ovulation + 1 day
    const fertileEnd = new Date(ovulation.getTime());
    fertileEnd.setDate(fertileEnd.getDate() + 1);

    // 5. Estimated Due Date = LMP + 280 days
    const dueDate = new Date(lmp.getTime());
    dueDate.setDate(dueDate.getDate() + 280);

    // Format helper
    const formatDate = (date) => {
      return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' });
    };

    setOvulationResult({
      nextPeriod: formatDate(nextPeriod),
      ovulationDate: formatDate(ovulation),
      fertileStart: formatDate(fertileStart),
      fertileEnd: formatDate(fertileEnd),
      dueDate: formatDate(dueDate),
    });
  };



  return (
    <>

      {/* 1. HERO SECTION WITH GLASSMORPHIC FORM */}
      <section className="relative bg-[#001c1c] pt-2 lg:pt-4 pb-12 overflow-hidden">
        {/* Ambient Mesh Glow Effects */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-teal-600/10 to-emerald-600/10 rounded-full filter blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gradient-to-br from-teal-500/10 to-emerald-500/5 rounded-full filter blur-[80px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">

            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-white text-center lg:text-left">

              {/* Mother, Father & Newborn Baby Top Hero Image Banner Slider */}
              <div className="relative w-[calc(100%+2rem)] sm:w-[calc(100%+3rem)] lg:w-full aspect-[16/9] lg:aspect-auto lg:h-[280px] xl:h-[320px] -mx-4 sm:-mx-6 lg:mx-0 rounded-none lg:rounded-[32px] overflow-hidden border-b lg:border border-white/10 group">
                {innerSlides.map((img, idx) => (
                  <div
                    key={idx}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === activeHeroSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                  >
                    <Image
                      src={img}
                      alt="Pravi IVF success story and advanced clinical care"
                      fill
                      className="object-cover object-center group-hover:scale-103 transition-all duration-700"
                      priority={idx === 0}
                    />
                  </div>
                ))}

                {/* Double Gradient Overlay for Perfect Header & Text Legibility */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-5 flex items-center justify-between z-30">
                  <div className="bg-[#001c1c]/80 backdrop-blur-md px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/10 text-[9px] sm:text-xs font-semibold text-white flex items-center gap-1.5">
                    <Heart className="h-3.5 w-3.5 text-rose-500 fill-rose-500" />
                    Pravi IVF: Realizing Parenthood Dreams
                  </div>
                  <div className="bg-emerald-500/90 backdrop-blur-sm px-2.5 sm:px-4 py-1.5 rounded-full text-white text-[8px] sm:text-[10px] font-bold tracking-wider uppercase flex-shrink-0">
                    ✓ High Success Rate
                  </div>
                </div>

                {/* Dot Indicators */}
                <div className="absolute top-3 right-3 sm:top-5 sm:right-5 flex gap-1.5 z-30">
                  {innerSlides.map((_, idx) => (
                    <div
                      key={idx}
                      className={`w-1.5 h-1.5 rounded-full transition-all ${idx === activeHeroSlide ? 'bg-teal-400 w-3' : 'bg-white/40'}`}
                    />
                  ))}
                </div>
              </div>

              <Link href="/free-webinar" prefetch={true} className="block w-full max-w-md mx-auto lg:mx-0 bg-gradient-to-r from-rose-500 to-rose-600 border border-rose-400 p-4 rounded-2xl mb-6 shadow-[0_0_30px_rgba(244,63,94,0.3)] hover:scale-[1.02] transition-transform group">
                <div className="flex items-center justify-between text-white">
                  <div className="text-left">
                    <span className="bg-white/20 text-xs px-2 py-1 rounded-full font-bold uppercase tracking-wide mb-2 inline-block animate-pulse">🔴 LIVE FERTILITY Webinar</span>
                    <h4 className="font-bold text-[17px] leading-tight">प्रेगनेंसी क्यों नहीं हो रही?</h4>
                    <p className="text-xs font-semibold text-white/90 mt-1 flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5" /> 7 June 2026 | 2:00 PM
                    </p>
                  </div>
                  <div className="bg-white text-rose-600 rounded-full w-10 h-10 flex items-center justify-center shrink-0 group-hover:translate-x-1 transition-transform">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </Link>

              <h1 className="text-4xl sm:text-5xl lg:text-6.5xl tracking-normal leading-[1.2] text-white font-extrabold">
                Best IVF Centre in <span className="bg-gradient-to-r from-teal-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent drop-shadow-sm">Lajpat Nagar, Delhi</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-light">
                Welcome to Pravi Global IVF, the most trusted and advanced fertility clinic in Lajpat Nagar, Delhi. Advanced safety technologies like the <strong>Electronic Witness System</strong>, and virtually painless <strong>Needle Free Injections</strong> to realize your dream of parenthood.
              </p>


            </div>

            {/* Right Enquire Form - Hidden on Mobile, Shown on Desktop */}
            <div className="hidden lg:block lg:col-span-5 relative">
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
                      <div className="text-left">
                        <label className="block text-xs font-semibold text-slate-300 mb-1">Your Full Name</label>
                        <input
                          type="text"
                          required
                          value={leadForm.name}
                          onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                          placeholder="Enter your name"
                          className="w-full bg-white/5 border border-white/15 focus:border-teal-400 focus:bg-white/10 rounded-xl px-4 py-2.5 text-white placeholder-slate-400 focus:outline-none transition-all text-xs"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-left">
                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1">Phone Number</label>
                          <input
                            type="tel"
                            required
                            value={leadForm.phone}
                            onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })}
                            placeholder="Mobile no."
                            className="w-full bg-white/5 border border-white/15 focus:border-teal-400 focus:bg-white/10 rounded-xl px-4 py-2.5 text-white placeholder-slate-400 focus:outline-none transition-all text-xs"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1">Treatment Type</label>
                          <select
                            value={leadForm.service}
                            onChange={(e) => setLeadForm({ ...leadForm, service: e.target.value })}
                            className="w-full bg-slate-800 border border-white/15 focus:border-teal-400 rounded-xl px-3 py-2.5 text-white focus:outline-none transition-all text-xs"
                          >
                            <option value="IVF">IVF Treatment</option>
                            <option value="ICSI">ICSI Infertility</option>
                            <option value="IUI">IUI Insemination</option>
                            <option value="Freezing">Egg Freezing</option>
                            <option value="Consultation">General Consultation</option>
                          </select>
                        </div>
                      </div>

                      <div className="text-left">
                        <label className="block text-xs font-semibold text-slate-300 mb-1">Explain Your Case Briefly</label>
                        <textarea
                          rows="2"
                          value={leadForm.message}
                          onChange={(e) => setLeadForm({ ...leadForm, message: e.target.value })}
                          placeholder="How can we help you?"
                          className="w-full bg-white/5 border border-white/15 focus:border-teal-400 focus:bg-white/10 rounded-xl px-4 py-2 text-white placeholder-slate-400 focus:outline-none transition-all text-xs"
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-500 hover:to-emerald-500 text-white font-bold py-3 px-6 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg text-xs uppercase tracking-wider"
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

                      <p className="text-[10px] text-slate-400 text-center leading-normal">
                        🛡️ Your personal and clinical details are kept 100% confidential and secure.
                      </p>
                    </form>
                  </>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-1 px-2 sm:px-2 bg-gradient-to-r mt-6 relative z-10">
        <HealthcareServices /></section>
      <section className="py-1 px-2 sm:px-2 bg-gradient-to-r relative z-10">
        <HealthcareServices2 /></section>
      {/* <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 -mt-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-100 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* <ServicesSection /> */}

      {/* About Preview Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-blue-600 font-semibold mb-2 block">ABOUT US</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Best IVF Centre in Lajpat Nagar, Delhi
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                At Pravi Global IVF best ivf centre in lajpat nagar delhi, we understand that the journey to parenthood can be challenging.
                Our team of experienced fertility specialists is dedicated to providing personalized, compassionate care
                using the latest reproductive technologies.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                With state-of-the-art facilities, a patient-centered approach, and a proven track record, we've helped
                thousands of families realize their dream of having a child.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div className="ml-3">
                    <p className="font-semibold text-gray-900">Expert Team</p>
                    <p className="text-gray-600 text-sm">Highly qualified specialists</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div className="ml-3">
                    <p className="font-semibold text-gray-900">Advanced Tech</p>
                    <p className="text-gray-600 text-sm">Latest IVF technology</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div className="ml-3">
                    <p className="font-semibold text-gray-900">High Success</p>
                    <p className="text-gray-600 text-sm">65% success rate</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div className="ml-3">
                    <p className="font-semibold text-gray-900">Personal Care</p>
                    <p className="text-gray-600 text-sm">Customized treatment</p>
                  </div>
                </div>
              </div>

              <Link href="/about-fertility-treatment-in-delhi/" prefetch={true} className="btn-primary text-white py-3 px-10">
                Learn More About Us <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="relative h-96 lg:h-full min-h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/visit-clinic-bg.jpeg"
                  alt="Best IVF Centre in Delhi - Pravi Global IVF Clinic"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center">
                  <div className="bg-blue-600 text-white w-16 h-16 rounded-xl flex items-center justify-center mr-4">
                    <TrendingUp className="h-8 w-8" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-900">15+</div>
                    <div className="text-gray-600 text-sm">Years Excellence</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold mb-2 block">OUR SERVICES</span>
            <h2 className="section-heading">Fertility Solutions in Lajpat Nagar, Delhi</h2>
            <p className="section-subheading mt-4  mx-auto">
              Tailored treatments designed to meet your unique needs and maximize success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {services.slice(0, 8).map((service, idx) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="text-center">
            <Link href="/fertility-services-in-lajpat-nagar-delhi/" prefetch={true} className="btn-primary text-lg px-8 py-4 text-white">
              View All Services <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold mb-2 block">WHY CHOOSE US</span>
            <h2 className="section-heading">What Makes Us Different</h2>
            <p className="section-subheading mt-4 text-cente  mx-auto">
              We combine cutting-edge technology with personalized care to give you the best chance of success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, idx) => {
              const icons = { Award, Shield, Heart, CheckCircle, Users, Clock };
              const Icon = icons[item.icon];
              return (
                <div
                  key={idx}
                  className="card p-8 text-center hover:-translate-y-2 transition-all duration-300"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="h-10 w-10 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="py-12 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold mb-2 block">OUR EXPERTS</span>
            <h2 className="section-heading">Meet Our Best IVF Doctors in  Delhi</h2>
            <p className="section-subheading mt-4  mx-auto">
              Highly qualified doctors dedicated to helping you achieve your dream of parenthood
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {doctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>

          <div className="text-center">
            <Link href="/best-ivf-doctors-in-lajpat-nagar-delhi/" prefetch={true} className="btn-primary text-lg px-8 py-4 text-white">
              Meet All Doctors <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-200 font-semibold mb-2 block">TESTIMONIALS</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Success Stories from Our Families
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Real experiences from couples who achieved their dreams with us
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 6).map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <MapSection />

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-12 md:p-16 shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Your IVF Journey?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Book a chat with our friendly fertility experts today. We're here to help you take that very first step toward holding your baby.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book-appointment"
                prefetch={true}
                className="bg-white text-blue-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-all hover:scale-105 inline-flex items-center justify-center text-lg font-semibold"
              >
                <Calendar className="mr-2 h-6 w-6" />
                Book Your Appointment
              </Link>
              <button
                onClick={() => setShowOvulationModal(true)}
                className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white px-8 py-4 rounded-full hover:shadow-[0_8px_20px_rgb(244,63,94,0.3)] transition-all hover:scale-105 inline-flex items-center justify-center text-lg font-semibold shadow-lg"
              >
                🌸 Ovulation Calculator
              </button>
              <Link
                href="/contact"
                prefetch={true}
                className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-blue-600 transition-all hover:scale-105 inline-flex items-center justify-center text-lg font-semibold"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <HomeSeoContent />

      {/* 🌸 FLOATING OVULATION CALCULATOR BADGE */}
      <button
        onClick={() => setShowOvulationModal(true)}
        className="fixed bottom-24 right-5 sm:right-8 z-40 bg-white/95 backdrop-blur-md text-slate-800 font-bold py-3 px-5 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.15)] hover:shadow-[0_15px_35px_rgba(244,63,94,0.25)] flex items-center gap-2.5 transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 select-none text-xs sm:text-sm border border-rose-100 group"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
        </span>
        <span className="text-base sm:text-lg animate-bounce group-hover:scale-120 transition-transform">🌸</span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-700 tracking-wide font-semibold">Ovulation Calculator</span>
        <span className="bg-rose-100 text-rose-600 text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full shrink-0">Free</span>
      </button>

      {/* 🌸 INTERACTIVE OVULATION CALCULATOR POPUP MODAL */}
      {showOvulationModal && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md transition-all">
          <div className="relative w-full max-w-2xl bg-white border border-rose-100 rounded-[32px] p-6 sm:p-8 shadow-[0_25px_50px_-12px_rgba(244,63,94,0.15)] space-y-6 overflow-y-auto max-h-[90vh]">

            {/* Close Button */}
            <button
              onClick={() => {
                setShowOvulationModal(false);
                setOvulationResult(null);
              }}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-rose-50 text-slate-500 hover:text-rose-500 flex items-center justify-center transition-all font-bold text-xs"
            >
              ✕
            </button>

            {/* Header */}
            <div className="flex items-center gap-3 border-b border-rose-100 pb-4">
              <div className="w-12 h-12 rounded-2xl bg-rose-50 border border-rose-100 text-rose-500 flex items-center justify-center shadow-sm">
                <Heart className="h-6 w-6 animate-pulse text-rose-500 fill-rose-500" />
              </div>
              <div className="text-left">
                <h3 className="font-black text-slate-900 text-xl sm:text-2xl">Ovulation & Fertility Calculator</h3>
                <p className="text-xs text-rose-500 font-bold uppercase tracking-wider">Know Your Most Fertile Days Instantly</p>
              </div>
            </div>

            {/* Main Grid */}
            <div className="grid md:grid-cols-2 gap-6 items-start">

              {/* Form Input Block */}
              <form onSubmit={calculateOvulation} className="space-y-4 bg-slate-50/60 p-5 rounded-2xl border border-slate-100 text-left">
                <h4 className="font-extrabold text-slate-800 text-sm flex items-center gap-1.5">
                  <Clock className="h-4 w-4 text-rose-400" /> Enter Cycle Details
                </h4>

                <div>
                  <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                    First Day of Last Period (LMP)
                  </label>
                  <input
                    type="date"
                    required
                    value={lmpDate}
                    onChange={(e) => setLmpDate(e.target.value)}
                    className="w-full bg-white border border-slate-200 focus:border-rose-400 focus:ring-1 focus:ring-rose-200 rounded-xl px-4 py-2.5 text-slate-800 focus:outline-none transition-all text-sm"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                    Average Cycle Length ({cycleLength} Days)
                  </label>
                  <input
                    type="range"
                    min="21"
                    max="45"
                    value={cycleLength}
                    onChange={(e) => setCycleLength(parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-rose-500 focus:outline-none"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-semibold">
                    <span>21 Days</span>
                    <span>28 Days</span>
                    <span>45 Days</span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-rose-500 hover:bg-rose-600 text-white font-bold py-3.5 px-6 rounded-xl transition-all shadow-md hover:scale-[1.01] text-xs uppercase tracking-wider flex items-center justify-center gap-2 mt-4"
                >
                  Calculate Fertile Days <ArrowRight className="h-4 w-4" />
                </button>
              </form>

              {/* Result Block */}
              <div className="space-y-4 text-left">
                {!ovulationResult ? (
                  <div className="h-full min-h-[220px] border border-dashed border-slate-200 rounded-2xl flex flex-col items-center justify-center p-6 text-center text-slate-400 bg-slate-50/20">
                    <span className="text-3xl mb-2">🌸</span>
                    <h5 className="font-bold text-slate-700 text-sm">Calculate Your Fertile Window</h5>
                    <p className="text-xs text-slate-400 mt-1 leading-normal max-w-xs">
                      Enter the first day of your last period and cycle duration to generate a personalized ovulation schedule and estimated due date.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4 animate-fade-in">
                    <h4 className="font-extrabold text-slate-800 text-sm flex items-center gap-1.5">
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" /> Your Fertility Schedule
                    </h4>

                    {/* Peak Ovulation Card */}
                    <div className="bg-gradient-to-r from-rose-50 to-pink-50 border border-rose-100/80 p-4.5 rounded-2xl text-left shadow-sm">
                      <div className="text-[10px] text-rose-500 font-bold uppercase tracking-wider">Next Ovulation Date</div>
                      <div className="text-lg font-black text-slate-800 mt-0.5">{ovulationResult.ovulationDate}</div>
                      <div className="text-[10px] text-slate-400 mt-1 font-semibold">Your peak fertility window occurs on this day.</div>
                    </div>

                    {/* Fertile Window */}
                    <div className="bg-teal-50/50 border border-teal-100 p-4 rounded-xl flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-teal-100/60 text-teal-600 flex items-center justify-center flex-shrink-0 font-bold text-sm">
                        ✓
                      </div>
                      <div>
                        <div className="text-[10px] text-teal-600 font-bold uppercase tracking-wider">Most Fertile Window</div>
                        <div className="text-xs font-bold text-slate-800 mt-0.5">
                          {ovulationResult.fertileStart} - {ovulationResult.fertileEnd}
                        </div>
                        <div className="text-[9px] text-slate-400 mt-0.5">Best time to attempt natural conception.</div>
                      </div>
                    </div>

                    {/* Due Date Card */}
                    <div className="bg-slate-50 border border-slate-100 p-4 rounded-xl flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-slate-200 text-slate-600 flex items-center justify-center flex-shrink-0 font-bold text-sm">
                        👶
                      </div>
                      <div>
                        <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Estimated Due Date</div>
                        <div className="text-xs font-bold text-slate-800 mt-0.5">
                          {ovulationResult.dueDate}
                        </div>
                        <div className="text-[9px] text-slate-400 mt-0.5">If conception happens in this cycle.</div>
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        setShowOvulationModal(false);
                        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                      }}
                      className="w-full bg-slate-850 hover:bg-slate-800 border border-slate-200 hover:border-slate-300 text-slate-800 hover:text-white font-bold py-2.5 rounded-xl text-[11px] uppercase tracking-wider transition-all"
                    >
                      Book Free Consultation
                    </button>
                  </div>
                )}
              </div>

            </div>

            {/* Disclaimer */}
            <div className="bg-slate-50 border border-slate-100 p-3 rounded-2xl text-[10px] text-slate-400 leading-normal text-center">
              <strong>Note:</strong> This calendar provides estimates only and should not be used as contraception. Cycle lengths can vary. For personalized reproductive clinical advice, consult Pravi Global IVF specialists.
            </div>

          </div>
        </div>
      )}

    </>
  );
}