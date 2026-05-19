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
  Dna
} from 'lucide-react';

const VerificationPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const workflow = [
    {
      num: "01",
      title: "RFID Identity Matching",
      desc: "Every patient couple is assigned a unique RFID card linked directly to their clinical profiles. Our matching system scans and confirms identities before any procedures."
    },
    {
      num: "02",
      title: "Vessel Activation check",
      desc: "All culture dishes and sample tubes are fitted with smart electronic RFID tags. The embryology lab workstations scan and verify matching parameters continuously."
    },
    {
      num: "03",
      title: "Double Embryologist Witness",
      desc: "Critical embryological transfer stages are double-checked under direct clinical supervision by two senior embryologists, providing total human and machine validation."
    },
    {
      num: "04",
      title: "Vitrification Audits",
      desc: "Flash-frozen biological assets in our liquid nitrogen cryo-tanks are cross-referenced with centralized electronic database records."
    }
  ];

  return (
    <div className="min-h-screen bg-[#F9FAF9] text-gray-800 font-sans">
      {/* High-End Tech Hero Section */}
      <div className="relative bg-gradient-to-br from-[#0F1E36] via-[#1A365D] to-[#0A1424] text-white py-20 px-4 md:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.06),transparent)] pointer-events-none" />
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 space-y-6">
            <span className="inline-block bg-white/20 text-[#D5EBF6] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase">
              Double-Witness Laboratory Safety
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white">
              Verification Services in Lajpat Nagar Delhi
            </h1>
            <p className="text-lg text-blue-100 font-light max-w-xl">
              Zero margins for error. By integrating advanced RFID electronic double-witness systems, we provide absolute security and matching for your eggs, sperm, and embryos.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="https://share.google/1tIS2ANVnK0VHQa2V"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-400 hover:bg-amber-500 text-slate-900 px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                <Compass className="w-5 h-5" />
                Find Us on Google Maps
              </a>
              <a
                href="tel:+918009150040"
                className="border-2 border-white/20 hover:border-white text-white px-8 py-4 rounded-xl font-bold transition-all flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call +91 800 915 0040
              </a>
            </div>
            <div className="flex items-center gap-6 text-sm text-[#D5EBF6]">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>Next to Rama Gallery, Lajpat Nagar</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-amber-400" />
                <span>Mon-Sat: 10 AM - 6 PM</span>
              </div>
            </div>
          </div>
          <div className="md:col-span-5 hidden md:block">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-2xl space-y-6">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-amber-300" />
                <h3 className="text-lg font-bold text-white">RFID Electronic Witness</h3>
              </div>
              <p className="text-sm text-blue-100 font-light leading-relaxed">
                Our lab tracks all biological assets continuously via integrated RFID receptors. Any sample mismatch triggers immediate lockouts, guaranteeing absolute safety.
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
            <h2 className="text-3xl font-bold text-gray-900 border-l-4 border-amber-400 pl-4">
              RFID Electronic Witness and Sample Tracking System
            </h2>
            <p className="text-gray-600">
              When planning an IVF cycle, intended parents naturally experience severe emotional stress regarding sample security. The silent question in every parent's mind is simple: "How can I be 100% sure that my biological samples are never mismatched?" A professional program for <strong>Verification Services in Lajpat Nagar Delhi</strong> at Pravi Global IVF provides absolute, automated security through our electronic double-witness systems.
            </p>
            <p className="text-gray-600">
              Unlike clinics that rely entirely on simple handwritten labels, our laboratories utilize advanced electronic RFID witnesses. Every culture dish, test tube, and cryo-straw is embedded with a smart electronic chip linked exclusively to your profile. This electronic barcode tracks your assets at every micro-stage. For detailed video guides outlining these safety measures, visit the <a href="https://www.youtube.com/@ivfcentre1Msubscriber" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Pravi IVF YouTube Channel</a>.
            </p>
          </section>

          {/* Section 2: Steps Grid */}
          <section className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Tailored Patient Safety and Verification Standards
            </h2>
            <p className="text-gray-600">
              Our clinic ensures all clinical and legal stages are conducted in strict conformity with national laws:
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {workflow.map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-blue-100 shadow-sm space-y-3 relative overflow-hidden">
                  <span className="absolute right-4 top-4 text-4xl font-extrabold text-blue-50">{item.num}</span>
                  <h4 className="font-bold text-[#1A365D] text-lg">{item.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed font-light">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3: Subheadings with keywords */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Legal Consent and ART Act Identity Compliance
            </h2>
            <p className="text-gray-600">
              Beyond molecular double-witness safety, identity verification is essential to secure your legal parental rights under Indian laws. We verify Aadhaar card numbers, consent papers, and marriage registries, creating clear compliance audit trails.
            </p>
            <p className="text-gray-600">
              This strict level of verification is especially critical when coordinating complex reproductive options including <a href="/donor-services-in-lajpat-nagar-delhi" className="text-blue-600 hover:underline">donor services</a> or surrogacy programs.
            </p>
          </section>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 space-y-8">
          <div className="bg-white border border-blue-100 shadow-lg rounded-3xl p-8 space-y-6">
            <h3 className="text-lg font-bold text-gray-900">Book Consult</h3>
            <p className="text-sm text-gray-600 font-light">
              Schedule a baseline diagnostic consult with our senior embryologists to discuss our electronic safety systems.
            </p>
            <a
              href="https://share.google/1tIS2ANVnK0VHQa2V"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-[#1A365D] hover:bg-[#0F1E36] text-white font-bold py-4 rounded-xl shadow-md transition-all text-sm"
            >
              Book via Google Maps
            </a>
            <a
              href="tel:+918009150040"
              className="block w-full text-center border-2 border-blue-100 text-[#1A365D] hover:bg-slate-50 font-bold py-4 rounded-xl transition-all text-sm"
            >
              Call Embryology Lab
            </a>
          </div>

          <div className="bg-slate-900 text-white rounded-3xl p-8 shadow-md space-y-4">
            <h3 className="text-md font-bold text-amber-300">Lab Standards</h3>
            <ul className="space-y-3 text-xs text-gray-300 leading-relaxed font-light">
              <li>RFID Electronic witness sample matching systems.</li>
              <li>Dual human-witness laboratory checklists.</li>
              <li>Aadhaar and biometric patient logs.</li>
              <li>Liquid nitrogen vault double logging.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white py-16 border-t border-blue-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Verification Services in Lajpat Nagar Delhi FAQ
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "What is an RFID electronic witness system?",
                a: "An RFID witness system uses smart microchips on culture dishes and test tubes. If an embryologist places an egg and sperm from different couples in the same workstation, the system sound alarms and locks the work surface instantly."
              },
              {
                q: "What is the cost of verification services in lajpat nagar delhi?",
                a: "Automated RFID double-witnessing is integrated as standard procedure in all our treatment cycles at no additional cost to ensure patient safety and trust."
              },
              {
                q: "Why is patient Aadhaar verification required?",
                a: "In strict alignment with the ART (Assisted Reproductive Technology) Act of India, identity verification is essential to document legal parentage and avoid sample mix-ups."
              },
              {
                q: "How are frozen embryos tracked in cryo-storage?",
                a: "Vitrified embryos are stored in marked straws with high-contrast dual labeling and electronic tags, with locations recorded on our secured local servers."
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
      <div className="bg-[#0F1E36] text-white py-16 text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          <h2 className="text-3xl font-bold text-amber-200">
            Absolute Sample Security and Identity Verification
          </h2>
          <p className="text-sm text-blue-100/80 font-light">
            Empower your reproductive plans with absolute clinical safety and automated electronic double-witnessing.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="https://share.google/1tIS2ANVnK0VHQa2V"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-400 hover:bg-amber-500 font-bold px-8 py-4 rounded-xl transition-all shadow-md text-slate-900 text-sm"
            >
              Book via Google Maps
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

export default VerificationPage;
