'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import {
  Heart,
  Users,
  Shield,
  CheckCircle,
  ArrowRight,
  MapPin,
  Clock,
  Compass,
  Phone,
  HelpCircle,
  TrendingUp,
  Award,
  ChevronRight
} from 'lucide-react';
import Image from 'next/image';
import { services } from '@/lib/data';

const iconMap = {
  Heart: Heart,
  Users: Users,
  Shield: Shield
};

export default function ServicesPage() {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (idx) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  return (
    <div className="min-h-screen bg-[#FCFDFD] text-gray-800 font-sans">
      {/* High-End Custom Hero Section */}
      <div className="relative bg-gradient-to-br from-[#0F362D] via-[#1B5C4D] to-[#0A261F] text-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.06),transparent)] pointer-events-none" />
        <div className="max-w-6xl mx-auto text-center space-y-6 relative z-10">
          <span className="inline-block bg-white/20 text-[#D5F6EC] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase">
            Pravi Global IVF & Fertility
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white max-w-4xl mx-auto">
            Fertility Services in Lajpat Nagar Delhi
          </h1>
          <p className="text-lg md:text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed font-light">
            Deciding to start fertility support is a beautiful, highly personal milestone. Our elite South Delhi clinic delivers transparent, science-backed solutions mapped directly to your budget and history.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a
              href="https://wa.me/918009150040"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-400 hover:bg-emerald-500 text-slate-900 px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              <Compass className="w-5 h-5" />
              Book via WhatsApp
            </a>
            <a
              href="tel:+918009150040"
              className="border-2 border-white/20 hover:border-white text-white px-8 py-4 rounded-xl font-bold transition-all flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call +91 800 915 0040
            </a>
          </div>
          <div className="flex justify-center items-center gap-6 text-sm text-emerald-200 pt-2">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-emerald-300" />
              <span>Block Q, Lajpat Nagar IV</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-emerald-300" />
              <span>Daily: 10 AM - 6 PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Core Treatments Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-16 text-center">
            Our Premium Reproductive Technologies
          </h2>
          <div className="grid gap-16">
            {services.map((service, idx) => {
              const Icon = iconMap[service.icon] || Heart;
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={service.id}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${isEven ? '' : 'lg:grid-flow-dense'}`}
                >
                  <div className={isEven ? 'lg:order-1' : 'lg:order-2'}>
                    <div className="bg-gradient-to-br from-emerald-50/20 to-white p-8 md:p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-emerald-100/30">
                      <div className="bg-emerald-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      
                      <h3 className="text-3xl font-extrabold text-gray-900 mb-4">
                        {service.name}
                      </h3>
                      
                      <p className="text-gray-600 text-lg mb-6 leading-relaxed font-light">
                        {service.fullDescription}
                      </p>

                      <div className="space-y-3 mb-8">
                        <h4 className="font-bold text-gray-900 uppercase text-xs tracking-wider">Key Treatment Highlights:</h4>
                        {service.features.map((feature, fIdx) => (
                          <div key={fIdx} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                            <span className="ml-3 text-gray-600 font-light text-base">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex gap-4">
                        <Link 
                          href={service.url}
                          className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-bold text-sm inline-flex items-center transition-all hover:scale-103 shadow-md"
                        >
                          Explore Treatment <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'} relative h-96 lg:h-[450px]`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-3xl transform rotate-2"></div>
                    <div className="absolute inset-0 bg-white rounded-3xl shadow-xl overflow-hidden ring-4 ring-gray-50">
                      <div className="w-full h-full bg-gradient-to-br from-emerald-600/10 to-emerald-800/10 flex items-center justify-center">
                        <Image 
                          src={service.image} 
                          alt={service.name}
                          fill
                          className="object-cover hover:scale-102 transition-transform duration-500"
                        />  
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50 border-t border-gray-150">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-bold uppercase tracking-wider text-xs block mb-2">OUR PROCESS</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
              Your Journey to Parenthood
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto text-base font-light">
              We keep the entire process easy, transparent, and direct
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { 
                step: '01',
                title: 'First Chat & Advice',
                desc: 'Detailed discussion about your medical history and initial options.'
              },
              { 
                step: '02',
                title: 'Simple Testing',
                desc: 'Essential scans and hormone checks to see what is actually happening.'
              },
              { 
                step: '03',
                title: 'Custom Protocol',
                desc: 'A precise treatment cycle planned specifically for your safety.'
              },
              { 
                step: '04',
                title: 'Continuous Help',
                desc: 'Regular tracking, emotional support, and friendly medical coordination.'
              }
            ].map((item, idx) => (
              <div key={idx} className="text-center bg-white p-6 rounded-2xl shadow-sm border border-gray-150 relative">
                <div className="bg-emerald-600 text-white w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold shadow-md">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Rates Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-bold uppercase tracking-wider text-xs block mb-2">SUCCESS RATES</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
              Proven Results
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto text-base font-light">
              Our clinical outcomes match top-tier international standards
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { rate: '65%', label: 'IVF Success Rate', desc: 'For women under 35' },
              { rate: '70%', label: 'ICSI Success Rate', desc: 'Male factor infertility' },
              { rate: '55%', label: 'IUI Success Rate', desc: 'Per cycle average' }
            ].map((stat, idx) => (
              <div key={idx} className="bg-gradient-to-br from-emerald-700 to-emerald-900 text-white p-8 rounded-2xl text-center shadow-md">
                <div className="text-4xl font-extrabold mb-2">{stat.rate}</div>
                <h3 className="text-lg font-bold mb-1">{stat.label}</h3>
                <p className="text-emerald-100 text-sm font-light">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep-Dive SEO Content Section */}
      <section className="py-20 bg-gray-50 border-t border-gray-150">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <h2 className="text-3xl font-extrabold text-gray-900 border-l-4 border-emerald-500 pl-4">
            Finding a Fertility Clinic in South Delhi That You Can Trust
          </h2>
          <p className="text-gray-700 leading-relaxed font-light">
            Deciding to get help with starting your family is a huge step, and it naturally comes with a lot of emotions. If you've been trying to get pregnant for a year (or six months if you're over 35) without success, it's completely normal to feel lost in all the medical terms and clinical jargon out there. Finding a team that respects your time, emotions, and budget is everything. At Pravi Global IVF in Lajpat Nagar, Delhi, we believe in giving you honest, down-to-earth medical advice without pushing you into endless, unnecessary tests or procedures.
          </p>
          <p className="text-gray-700 leading-relaxed font-light">
            Our doctors sit down with you, go through your medical history carefully, and actually listen to what you've been going through. Since every couple's body is different, we map out a simple, custom treatment plan that makes absolute sense for your specific situation, rather than using a rigid, one-size-fits-all formula.
          </p>

          <h2 className="text-3xl font-extrabold text-gray-900 border-l-4 border-emerald-500 pl-4">
            Smart Treatments and What Goes Into Good Success Rates
          </h2>
          <p className="text-gray-700 leading-relaxed font-light">
            Lots of couples worry that visiting a clinic means they'll have to start complex, expensive lab procedures immediately. But actually, most of our cases start with very basic, simple diagnostics. A simple scan, a quick hormone check, or a basic semen analysis is usually all it takes to see what's really going on.
          </p>
          <p className="text-gray-700 leading-relaxed font-light">
            Once we pinpoint the exact issue, we always discuss the simplest, gentlest solutions first. Sometimes that's just a few simple lifestyle tweaks, some daily tablets, or a gentle <Link href="/iui-treatment-in-lajpat-nagar-delhi" className="text-rose-600 hover:text-rose-700 font-bold hover:underline">IUI treatment</Link>. We only discuss advanced options like <Link href="/ivf-treatment-in-lajpat-nagar-delhi" className="text-rose-600 hover:text-rose-700 font-bold hover:underline">IVF treatment</Link> if it's truly the best path for you. You can check out real patient feedback and ratings on our <a href="https://share.google/1tIS2ANVnK0VHQa2V" target="_blank" rel="noopener noreferrer" className="text-rose-600 hover:text-rose-700 font-bold hover:underline">Pravi IVF Google Ratings Page</a>.
          </p>
          <p className="text-gray-700 leading-relaxed font-light">
            We want you to feel comfortable, confident, and completely clear about every single step of this journey. If you want to see our lab setup or watch simple patient guide videos, go have a look at the <a href="https://www.youtube.com/@ivfcentre1Msubscriber" target="_blank" rel="noopener noreferrer" className="text-rose-600 hover:text-rose-700 font-bold hover:underline">Pravi IVF YouTube Channel</a> or follow us on our <a href="https://www.instagram.com/ivfpravi/" target="_blank" rel="noopener noreferrer" className="text-rose-600 hover:text-rose-700 font-bold hover:underline">Pravi IVF Instagram Profile</a> where we share regular updates.
          </p>
        </div>
      </section>

      {/* Accordion FAQ Area */}
      <div className="bg-white py-16 border-t border-gray-150">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Fertility Services in Lajpat Nagar Delhi FAQ
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "What is the average cost of fertility services in lajpat nagar delhi?",
                a: "It depends a lot on the treatment you actually need. Basic options like follicular scans or IUI are very low-cost and friendly on the pocket, while more complex cycles like IVF or ICSI that need advanced lab work are priced clearly up-front so there are never any surprise charges."
              },
              {
                q: "Do you offer donor programs for older couples?",
                a: "Yes, we do. We help couples with fully compliant, legally secure donor egg and sperm services, all handled strictly according to the guidelines of the national ART Act."
              },
              {
                q: "How can I schedule a consultation at Pravi Global IVF?",
                a: "It's super easy—just drop us a quick text on WhatsApp or give our front desk a ring at +91 800 915 0040 to pick a time that works for you."
              }
            ].map((faq, idx) => (
              <div
                key={idx}
                className="bg-[#FAFDFD] rounded-xl shadow-sm border border-gray-150 overflow-hidden cursor-pointer"
                onClick={() => toggleFaq(idx)}
              >
                <div className="flex justify-between items-center p-6 hover:bg-emerald-50/20 transition-colors">
                  <span className="font-bold text-gray-900 text-left">{faq.q}</span>
                  <ChevronRight
                    className={`w-5 h-5 text-gray-400 transition-transform ${
                      activeFaq === idx ? "rotate-90 text-emerald-600" : ""
                    }`}
                  />
                </div>
                {activeFaq === idx && (
                  <div className="p-6 bg-white border-t border-gray-100 text-sm text-gray-600 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dynamic CTA */}
      <div className="bg-[#0F362D] text-white py-16 text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Start Your Journey with Scientific Confidence
          </h2>
          <p className="text-emerald-100 text-lg font-light">
            Take a proactive, stress-free step toward your family goals. Schedule a private consultation slot today.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="https://wa.me/918009150040"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-400 hover:bg-emerald-500 text-slate-900 font-bold px-8 py-4 rounded-xl transition-all shadow-md text-sm"
            >
              Book via WhatsApp
            </a>
            <a
              href="https://share.google/1tIS2ANVnK0VHQa2V"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white/20 hover:border-white font-bold px-8 py-4 rounded-xl transition-all text-white text-sm"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}