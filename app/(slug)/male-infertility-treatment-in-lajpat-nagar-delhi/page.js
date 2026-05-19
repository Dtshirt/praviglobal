'use client';
import React, { useState } from 'react';
import {
  Shield,
  Activity,
  Award,
  Phone,
  Calendar,
  MapPin,
  Clock,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  Sliders,
  ChevronRight
} from 'lucide-react';

const MaleInfertilityPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const stats = [
    { label: "Semen Concentration", standard: "> 15 Million/ml", borderline: "10-15 Million/ml" },
    { label: "Total Sperm Motility", standard: "> 40% Active", borderline: "30-40% Progressive" },
    { label: "Kruger Morphology", standard: "> 4% Normal Forms", borderline: "2-4% Borderline" },
    { label: "DNA Fragmentation Index (DFI)", standard: "< 15% Excellent", borderline: "15-30% Moderate" }
  ];

  return (
    <div className="min-h-screen bg-[#F7F9FC] text-gray-800 font-sans">
      {/* High-End Hero Section */}
      <div className="relative bg-gradient-to-br from-[#1B355A] via-[#2A4D7C] to-[#112440] text-white py-20 px-4 md:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.04),transparent)] pointer-events-none" />
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 space-y-6">
            <span className="inline-block bg-blue-500/20 text-blue-300 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase">
              Scientific Male Andrology
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white">
              Male Infertility Treatment in Lajpat Nagar Delhi
            </h1>
            <p className="text-lg text-blue-100 font-light max-w-xl">
              Fertility is a shared biological path. Nearly half of all conception challenges are linked to male reproductive factors. Discover precise diagnostic diagnostics and advanced andrology support.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="https://wa.me/918009150040"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
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
            <div className="flex items-center gap-6 text-sm text-blue-200">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-blue-300" />
                <span>Next to Rama Gallery, Lajpat Nagar</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-blue-300" />
                <span>Mon-Sat: 10 AM - 6 PM</span>
              </div>
            </div>
          </div>
          <div className="md:col-span-5 hidden md:block">
            <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-2xl space-y-6">
              <div className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-blue-300" />
                <h3 className="text-lg font-bold text-white">Strict Confidentiality</h3>
              </div>
              <p className="text-sm text-blue-100 font-light leading-relaxed">
                We understand that fertility testing requires supreme comfort and privacy. Our dedicated semen collection rooms are highly private, hygienic, and stress-free.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Dynamic Content Grid */}
      <div className="max-w-6xl mx-auto px-4 py-16 grid lg:grid-cols-12 gap-12">
        {/* Main Content Area */}
        <div className="lg:col-span-8 space-y-12">
          {/* Section 1: Intro */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 border-l-4 border-blue-500 pl-4">
              Breaking the Stigma: Understanding Shared Fertility Responsibility
            </h2>
            <p className="text-gray-600">
              For a long time, people assumed that struggling to have a baby was almost always a female health issue. Today, medical research proves that this is simply not true. In about half of all couples facing conception delays, the key factor points to male semen health—like low sperm count, slow movement, or structural issues. At Pravi Global IVF, we're here to change the narrative. We offer supportive, direct evaluations for <strong>Male Infertility Treatment in Lajpat Nagar Delhi</strong> so both partners get clear, high-quality answers together.
            </p>
            <p className="text-gray-600">
              We look closely at all parameters using modern computerized analysis (CASA) and check DNA fragmentation to spot the real issues early on. Our doctors sit down with you to plan out a realistic path forward that fits your body. You can check our patient feedback and map details directly on the <a href="https://share.google/1tIS2ANVnK0VHQa2V" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Pravi IVF Google Maps Page</a>.
            </p>
          </section>

          {/* Section 2: Semen Standards Table */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Advanced Semen Analysis and Sperm DNA Fragmentation
            </h2>
            <p className="text-gray-600">
              While a standard analysis just counts the sperm, we do a much deeper check to get the full picture. We look at the Sperm DNA Fragmentation Index (DFI) to check for microscopic genetic damage in the sperm. A high DFI score often explains why previous IVF cycles failed or why a couple faced early miscarriages, giving us the clues we need to fix it.
            </p>
            <div className="bg-white border border-gray-150 rounded-2xl overflow-hidden shadow-sm">
              <div className="p-6 bg-gray-50 border-b border-gray-100">
                <h4 className="font-bold text-gray-900">WHO Diagnostic Sperm Benchmarks</h4>
              </div>
              <div className="divide-y divide-gray-100 text-sm">
                {stats.map((stat, idx) => (
                  <div key={idx} className="p-4 grid sm:grid-cols-3 gap-2">
                    <span className="font-semibold text-gray-900">{stat.label}</span>
                    <span className="text-emerald-600 font-medium">WHO Standard: {stat.standard}</span>
                    <span className="text-amber-600">Borderline: {stat.borderline}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 3: Subheadings with keywords */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Overcoming Azoospermia and Low Sperm Count
            </h2>
            <p className="text-gray-600">
              Finding out you have azoospermia (which means zero sperm are showing up in the sample) can feel incredibly overwhelming. But don't lose hope—it definitely doesn't mean you can't have a biological child. In many cases, the body is still producing healthy sperm, but a tiny blockage in the tract is just stopping them from coming out.
            </p>
            <p className="text-gray-600">
              For these blockages, we do simple, very gentle outpatient procedures. We can collect healthy sperm directly from the source using <a href="/tesa-and-pesa-treatment-in-lajpat-nagar-delhi" className="text-blue-600 hover:underline">TESA and PESA treatment</a>, then use them in an ICSI cycle to help you conceive successfully. To see how these simple procedures work, check out our patient guides on the <a href="https://www.youtube.com/@ivfcentre1Msubscriber" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Pravi IVF YouTube Channel</a>.
            </p>
            <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-150 flex items-start gap-4">
              <AlertCircle className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Lifestyle & Wellness Focus</h4>
                <p className="text-sm text-gray-600">
                  Many minor parameters can be significantly boosted through targeted nutritional therapies, reduction in heat exposure, and hormone balancing over 90 days.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Sidebar Column */}
        <div className="lg:col-span-4 space-y-8">
          <div className="bg-white border border-gray-150 shadow-lg rounded-3xl p-8 space-y-6">
            <h3 className="text-lg font-bold text-gray-900">Get Directions</h3>
            <p className="text-sm text-gray-600 font-light">
              Visit our state-of-the-art clinic in Lajpat Nagar to complete your semen analysis securely.
            </p>
            <a
              href="https://share.google/1tIS2ANVnK0VHQa2V"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-md transition-all text-sm"
            >
              Get Location on Google
            </a>
            <a
              href="tel:+918009150040"
              className="block w-full text-center border-2 border-blue-100 text-blue-600 hover:bg-blue-50 font-bold py-4 rounded-xl transition-all text-sm"
            >
              Call Andrology Lab
            </a>
          </div>

          <div className="bg-slate-900 text-white rounded-3xl p-8 shadow-md space-y-4">
            <h3 className="text-md font-bold text-blue-300">Lab Standards</h3>
            <ul className="space-y-3 text-xs text-gray-300 font-light leading-relaxed">
              <li>Computer-Assisted Semen Analysis (CASA) for 100% objective metrics.</li>
              <li>Dual-embryologist check system.</li>
              <li>Thermal-controlled collection and handling systems.</li>
              <li>Strict hygiene and private collection spaces.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white py-16 border-t border-gray-150">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Male Infertility Treatment in Lajpat Nagar Delhi FAQ
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "What is the recommended abstinence period before a semen analysis in lajpat nagar delhi?",
                a: "A strict abstinence period of 2 to 5 days is recommended. Shorter abstinence can lower sperm count, while longer periods can reduce sperm motility."
              },
              {
                q: "Can stress or smoking affect my sperm parameters?",
                a: "Yes, significantly. Chronic stress, smoking, and heavy alcohol use elevate oxidative stress in the testes, leading to lower motility and higher DNA fragmentation."
              },
              {
                q: "What is the cost of semen analysis at Pravi Global IVF?",
                a: "Our diagnostic services are highly transparent and affordable. Please contact our front desk directly for detailed pricing and package options."
              },
              {
                q: "Is an abnormal semen report a sign of absolute infertility?",
                a: "No. Semen parameters naturally fluctuate. A single abnormal report is never conclusive. We always recommend repeating the check after 2-3 weeks."
              }
            ].map((faq, idx) => (
              <div key={idx} className="pb-6 border-b border-gray-100 last:border-0">
                <h4 className="font-bold text-gray-900 text-lg mb-2">{faq.q}</h4>
                <p className="text-gray-600 text-sm leading-relaxed font-light">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Footer */}
      <div className="bg-[#1B355A] text-white py-16 text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          <h2 className="text-3xl font-bold text-blue-200">
            Secure, Scientific Andrology Solutions
          </h2>
          <p className="text-sm text-blue-100/80 font-light">
            Empower your reproductive plans with absolute scientific validation of your semen health.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="https://wa.me/918009150040"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-600 font-bold px-8 py-4 rounded-xl transition-all shadow-md text-white text-sm"
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

export default MaleInfertilityPage;
