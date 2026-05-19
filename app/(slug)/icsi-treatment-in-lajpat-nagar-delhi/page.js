'use client';
import React, { useState } from 'react';
import {
  Calendar,
  Phone,
  MapPin,
  Clock,
  Compass,
  CheckCircle2,
  TrendingUp,
  Award,
  Video,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';

const IcsiTreatmentPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const comparison = [
    {
      title: "Conventional IVF",
      desc: "Approximately 50,000 to 100,000 sperm are placed in a culture dish alongside a single egg, allowing natural fertilization to take place. Requires robust sperm counts and motility."
    },
    {
      title: "ICSI Micromanipulation",
      desc: "A senior embryologist utilizes an ultra-fine glass micro-needle to gently inject a single, high-quality sperm directly into the egg cytoplasm, securing excellent fertilization regardless of sperm counts."
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAF9] text-gray-800 font-sans">
      {/* High-End Micro-precision Hero Section */}
      <div className="relative bg-gradient-to-br from-[#0F382B] via-[#1B5E4B] to-[#0A261D] text-white py-20 px-4 md:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.05),transparent)] pointer-events-none" />
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 space-y-6">
            <span className="inline-block bg-emerald-400/20 text-emerald-300 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase">
              Micro-Precision Fertilization
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white">
              ICSI Treatment in Lajpat Nagar Delhi
            </h1>
            <p className="text-lg text-emerald-100 font-light max-w-xl">
              Intracytoplasmic Sperm Injection (ICSI) provides absolute biological leverage when natural fertilization barriers exist. By selecting a single, healthy sperm cell for direct injection, we bypass motility concerns.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="https://wa.me/918009150040"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                <Calendar className="w-5 h-5" />
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
            <div className="flex items-center gap-6 text-sm text-emerald-200">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-emerald-300" />
                <span>Lajpat Nagar, South Delhi</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-emerald-300" />
                <span>Mon-Sat: 10 AM - 6 PM</span>
              </div>
            </div>
          </div>
          <div className="md:col-span-5 hidden md:block">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-2xl space-y-6">
              <h3 className="text-lg font-bold text-emerald-200">Why Choose ICSI?</h3>
              <ul className="space-y-4 text-sm text-emerald-100 font-light">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-300 rounded-full" />
                  Ideal for low sperm count & motility
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-300 rounded-full" />
                  Bypasses thick outer egg shells
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-300 rounded-full" />
                  Secures excellent fertilization rates
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Structured Content Area */}
      <div className="max-w-6xl mx-auto px-4 py-16 grid lg:grid-cols-12 gap-12">
        {/* Main Content Area */}
        <div className="lg:col-span-8 space-y-12">
          {/* Section 1: Intro */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 border-l-4 border-emerald-500 pl-4">
              Overcoming Severe Male Factor Infertility
            </h2>
            <p className="text-gray-600">
              When raw semen tests reveal severe motility barriers (sluggish sperm) or low count, conventional IVF can lead to low fertilization rates or complete cycle failures. Intracytoplasmic Sperm Injection (ICSI) represents the most successful micro-manipulation technology available. At Pravi Global IVF, we provide comprehensive, personalized care for <strong>ICSI Treatment in Lajpat Nagar Delhi</strong> to ensure high-standard fertilization success.
            </p>
            <p className="text-gray-600">
              Under our high-definition microscopes (magnified up to 400x), our embryologists isolate a single, structurally perfect sperm cell, immobilize it, and gently inject it directly into the mature egg. This level of precision eliminates the reliance on sperm motility, allowing couples to achieve excellent results. To watch how our micromanipulators work in real-time, visit the <a href="https://www.youtube.com/@ivfcentre1Msubscriber" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Pravi IVF YouTube Channel</a>.
            </p>
          </section>

          {/* Section 2: Comparison Cards */}
          <section className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Selecting the Single Healthiest Sperm for Injection
            </h2>
            <p className="text-gray-600">
              Understanding the difference between standard IVF and micromanipulation is essential before planning your cycle:
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {comparison.map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-emerald-100 shadow-sm space-y-3">
                  <h4 className="font-bold text-[#1B5E4B] text-lg">{item.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed font-light">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3: Subheadings with keywords */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Tailored ICSI Lab Stage Protocols
            </h2>
            <p className="text-gray-600">
              ICSI is highly recommended for specific clinical challenges. This includes obstructive and non-obstructive azoospermia, high sperm DNA fragmentation (DFI), unexplained IVF failures in previous cycles, or when utilizing frozen egg assets.
            </p>
            <p className="text-gray-600">
              When semen samples show zero sperm in the ejaculate, we coordinate with senior andrologists to perform minimal surgical extractions. By harvesting sperm directly from the epididymis or testes via advanced <a href="/tesa-and-pesa-treatment-in-lajpat-nagar-delhi" className="text-blue-600 hover:underline">TESA and PESA treatment</a>, we extract highly viable sperm to complete the ICSI procedure successfully. For regular laboratory walkthroughs and clinical results, follow the <a href="https://www.instagram.com/ivfpravi/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Pravi IVF Instagram Profile</a>.
            </p>
          </section>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 space-y-8">
          <div className="bg-white border border-emerald-100 shadow-lg rounded-3xl p-8 space-y-6">
            <h3 className="text-lg font-bold text-gray-900">Book Consult</h3>
            <p className="text-sm text-gray-600 font-light">
              Schedule a baseline diagnostic check with our senior embryologists to plan your ICSI cycle.
            </p>
            <a
              href="https://wa.me/918009150040"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 rounded-xl shadow-md transition-all text-sm"
            >
              Book via WhatsApp
            </a>
            <a
              href="tel:+918009150040"
              className="block w-full text-center border-2 border-emerald-100 text-emerald-600 hover:bg-emerald-50 font-bold py-4 rounded-xl transition-all text-sm"
            >
              Call Embryology Lab
            </a>
          </div>

          <div className="bg-slate-900 text-white rounded-3xl p-8 shadow-md space-y-4">
            <h3 className="text-md font-bold text-emerald-300">Lab Standards</h3>
            <ul className="space-y-3 text-xs text-gray-300 leading-relaxed font-light">
              <li>High-precision micromanipulators with high-stability platforms.</li>
              <li>Heated microscope stages maintaining exactly 37°C.</li>
              <li>Smarter RFID double-witness tracking systems.</li>
              <li>Advanced clean room (Class 10,000 environment).</li>
            </ul>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white py-16 border-t border-emerald-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            ICSI Treatment in Lajpat Nagar Delhi FAQ
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "What is the primary difference between IVF and ICSI?",
                a: "In IVF, multiple sperm are mixed with the egg in a dish to fertilize naturally. In ICSI, a single premium sperm is micro-injected directly into the egg cytoplasm by a senior embryologist."
              },
              {
                q: "What is the cost of ICSI treatment in lajpat nagar delhi?",
                a: "ICSI involves advanced micromanipulation tools and embryology expertise, adding a moderate cost to standard IVF. Please contact our front desk directly for detailed packages."
              },
              {
                q: "Does ICSI damage the egg during micro-injection?",
                a: "The survival rate of mature eggs after micro-injection exceeds 95% in our advanced laboratory, owing to the high dexterity of our senior embryologists and the precision of our glass needles."
              },
              {
                q: "Are the success rates of ICSI higher than standard IVF?",
                a: "For couples with severe male factor concerns or past unexplained fertilization failure, ICSI delivers significantly higher fertilization and pregnancy success."
              }
            ].map((faq, idx) => (
              <div key={idx} className="pb-6 border-b border-gray-150 last:border-0">
                <h4 className="font-bold text-gray-900 text-lg mb-2">{faq.q}</h4>
                <p className="text-gray-600 text-sm leading-relaxed font-light">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Footer */}
      <div className="bg-[#0A261D] text-white py-16 text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          <h2 className="text-3xl font-bold text-emerald-200">
            Micro-Precision Technology Delivering High Fertilization
          </h2>
          <p className="text-sm text-emerald-100/80 font-light">
            Take a confident, scientifically validated step toward biological parenthood with Delhi's elite ICSI team.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="https://wa.me/918009150040"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-500 hover:bg-emerald-600 font-bold px-8 py-4 rounded-xl transition-all shadow-md text-white text-sm"
            >
              Book via WhatsApp
            </a>
            <a
              href="tel:+918009150040"
              className="border border-white/20 hover:border-white font-bold px-8 py-4 rounded-xl transition-all text-white text-sm"
            >
              Call +91 800 915 0040
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IcsiTreatmentPage;
