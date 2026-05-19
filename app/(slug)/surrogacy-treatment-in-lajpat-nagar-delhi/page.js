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
  ChevronRight,
  ShieldCheck,
  Activity,
  FileText
} from 'lucide-react';

const SurrogacyPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const legalSteps = [
    {
      step: "01",
      title: "Legal Eligibility Check",
      desc: "We assist intended parents in navigating the legal requirements, securing essential medical certificates and local board approvals."
    },
    {
      step: "02",
      title: "Altruistic Surrogate Mapping",
      desc: "In accordance with Indian law, surrogates must be married female relatives who have already had at least one healthy child of their own."
    },
    {
      step: "03",
      title: "IVF & Embryo Transfer",
      desc: "Advanced IVF protocols utilizing the intended parents' or donor gametes are conducted in our Class 10,000 embryology labs."
    },
    {
      step: "04",
      title: "Birth Registration",
      desc: "All birth paperwork is issued directly in the name of the intended parents, ensuring total legal protection from day one."
    }
  ];

  return (
    <div className="min-h-screen bg-[#FBF9FB] text-gray-800 font-sans">
      {/* High-End Noble Surrogacy Hero Section */}
      <div className="relative bg-gradient-to-br from-[#3B1E4A] via-[#5C2E70] to-[#241030] text-white py-20 px-4 md:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.05),transparent)] pointer-events-none" />
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 space-y-6">
            <span className="inline-block bg-white/20 text-[#ECD5F6] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase">
              Ethical & Compliant Surrogacy
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white">
              Surrogacy Treatment in Lajpat Nagar Delhi
            </h1>
            <p className="text-lg text-purple-100 font-light max-w-xl">
              Bringing your biological child home safely. We offer completely transparent, legally secure, and compassionate altruistic surrogacy solutions in strict alignment with Indian laws.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="https://share.google/1tIS2ANVnK0VHQa2V"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                <Compass className="w-5 h-5" />
                Read Google Reviews
              </a>
              <a
                href="tel:+918009150040"
                className="border-2 border-white/20 hover:border-white text-white px-8 py-4 rounded-xl font-bold transition-all flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call +91 800 915 0040
              </a>
            </div>
            <div className="flex items-center gap-6 text-sm text-[#ECD5F6]">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-purple-300" />
                <span>Next to Rama Gallery, Lajpat Nagar</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-purple-300" />
                <span>Mon-Sat: 10 AM - 6 PM</span>
              </div>
            </div>
          </div>
          <div className="md:col-span-5 hidden md:block">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-2xl space-y-6">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-purple-200" />
                <h3 className="text-lg font-bold text-white">100% Legal Clearance</h3>
              </div>
              <p className="text-sm text-purple-100 font-light leading-relaxed">
                We secure complete clearance certificates from the district and state medical boards before any embryo transfers, protecting your legal rights comprehensively.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Narrative Area */}
      <div className="max-w-6xl mx-auto px-4 py-16 grid lg:grid-cols-12 gap-12">
        {/* Left Column */}
        <div className="lg:col-span-8 space-y-12">
          {/* Section 1: Intro */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 border-l-4 border-purple-600 pl-4">
              Altruistic Surrogacy Laws under the 2021 Act
            </h2>
            <p className="text-gray-600">
              When physical or medical conditions prevent a woman from carrying a pregnancy to term, surrogacy offers a beautiful and highly successful alternative to biological parenthood. However, navigating the legal, physical, and emotional aspects of surrogacy requires absolute clarity and technical expertise. At Pravi Global IVF, we provide comprehensive, personalized care for <strong>Surrogacy Treatment in Lajpat Nagar Delhi</strong> to ensure a safe, legally secure, and transparent experience.
            </p>
            <p className="text-gray-600">
              Under the current Surrogacy (Regulation) Act of India, only altruistic surrogacy is legal for eligible Indian couples who have a documented medical necessity. We guide you through every legal check, securing all board clearances and handling documentation transparently. For regular updates on legal standards and expert discussions, visit the <a href="https://www.youtube.com/@ivfcentre1Msubscriber" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Pravi IVF YouTube Channel</a>.
            </p>
          </section>

          {/* Section 2: Process Steps */}
          <section className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Comprehensive Surrogate Screening and Medical Preparation
            </h2>
            <p className="text-gray-600">
              Our clinic ensures all clinical and legal stages are conducted in strict conformity with national laws:
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {legalSteps.map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-purple-100 shadow-sm space-y-3 relative overflow-hidden">
                  <span className="absolute right-4 top-4 text-4xl font-extrabold text-purple-50">{item.step}</span>
                  <h4 className="font-bold text-[#5C2E70] text-lg">{item.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed font-light">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3: Subheadings with keywords */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Tailored Embryo Transfer and Clinical Stages
            </h2>
            <p className="text-gray-600">
              Once legal clearances are secured, the biological process begins. In gestational surrogacy (the only legal form of surrogacy in India), the surrogate carries a pregnancy created using the intended parents' or donor gametes, ensuring she has zero genetic link to the child.
            </p>
            <p className="text-gray-600">
              The embryos are created using our advanced <a href="/ivf-treatment-in-lajpat-nagar-delhi" className="text-blue-600 hover:underline">IVF treatment</a> systems and subsequently transferred to the surrogate's uterus after precise hormonal preparation. For visual guides outlining our genetic screening standards, visit the <a href="https://www.instagram.com/ivfpravi/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Pravi IVF Instagram Profile</a>.
            </p>
          </section>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 space-y-8">
          <div className="bg-white border border-purple-100 shadow-lg rounded-3xl p-8 space-y-6">
            <h3 className="text-lg font-bold text-gray-900">Book Consult</h3>
            <p className="text-sm text-gray-600 font-light">
              Schedule a baseline diagnostic consult with our legal and clinical panel to discuss your surrogacy plans.
            </p>
            <a
              href="https://wa.me/918009150040"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-purple-500 hover:bg-purple-600 text-white font-bold py-4 rounded-xl shadow-md transition-all text-sm"
            >
              Book via WhatsApp
            </a>
            <a
              href="tel:+918009150040"
              className="block w-full text-center border-2 border-purple-100 text-purple-600 hover:bg-purple-50 font-bold py-4 rounded-xl transition-all text-sm"
            >
              Call Surrogacy Desk
            </a>
          </div>

          <div className="bg-slate-900 text-white rounded-3xl p-8 shadow-md space-y-4">
            <h3 className="text-md font-bold text-purple-300">Law Conformity</h3>
            <ul className="space-y-3 text-xs text-gray-300 leading-relaxed font-light">
              <li>100% compliance with Assisted Reproductive Technology and Surrogacy Acts.</li>
              <li>Liquid nitrogen vitrification for embryo storage.</li>
              <li>Detailed physical and psychological evaluations for surrogates.</li>
              <li>Complete legal drafting and coordination.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white py-16 border-t border-purple-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Surrogacy Treatment in Lajpat Nagar Delhi FAQ
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "Is commercial surrogacy legal in India?",
                a: "No. Only altruistic surrogacy is legal. The surrogate mother must be an eligible female relative who cannot receive commercial compensation beyond medical expenses and health insurance coverage."
              },
              {
                q: "What is the cost of surrogacy treatment in lajpat nagar delhi?",
                a: "Surrogacy involves multi-stage legal drafting, board clearances, IVF cycles, surrogate care, and delivery fees. Please contact our front desk directly for detailed counseling and pricing guides."
              },
              {
                q: "Is the surrogate genetically related to the child?",
                a: "In gestational surrogacy (the only legal form in India), the surrogate is NOT genetically related to the child. The embryo is created using the intended parents' or donor assets."
              },
              {
                q: "How are surrogates screened for safety?",
                a: "Surrogates undergo strict physical health checks, infectious screening, uterine cavity checks, and psychological evaluation before legal clearances are drafted."
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
      <div className="bg-[#241030] text-white py-16 text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          <h2 className="text-3xl font-bold text-purple-200">
            A Safe, Legal, and Reassuring Path to Family Success
          </h2>
          <p className="text-sm text-purple-100/80 font-light">
            Empower your parenthood dreams with absolute clinical safety and legal transparency.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="https://wa.me/918009150040"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-500 hover:bg-purple-600 font-bold px-8 py-4 rounded-xl transition-all shadow-md text-white text-sm"
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

export default SurrogacyPage;
