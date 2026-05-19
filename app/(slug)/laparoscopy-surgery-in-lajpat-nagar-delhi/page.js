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
  Zap
} from 'lucide-react';

const LaparoscopyPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const benefits = [
    {
      title: "Micro-Incisions",
      desc: "Performed via 1 or 2 tiny keyholes (5mm to 10mm) instead of a large abdominal incision, leaving almost zero noticeable scarring."
    },
    {
      title: "Same-Day Discharge",
      desc: "A highly convenient daycare procedure. Most patients are discharged comfortably to their homes within 4 to 6 hours of surgery."
    },
    {
      title: "Minimal Discomfort",
      desc: "Gentle surgical techniques translate to significantly less post-operative muscle soreness and reduced reliance on pain medications."
    },
    {
      title: "Direct Diagnostic Clarity",
      desc: "Allows our surgeons to view the pelvic organs directly in real-time, verifying tubal patency and resolving adhesions simultaneously."
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAFBFB] text-gray-800 font-sans">
      {/* High-End Keyhole Surgery Hero Section */}
      <div className="relative bg-gradient-to-br from-[#1A3438] via-[#2F5256] to-[#0E1F21] text-white py-20 px-4 md:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.05),transparent)] pointer-events-none" />
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 space-y-6">
            <span className="inline-block bg-white/20 text-[#D5EBF6] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase">
              Minimally Invasive Gynecology
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white">
              Laparoscopy Surgery in Lajpat Nagar Delhi
            </h1>
            <p className="text-lg text-teal-100 font-light max-w-xl">
              Advanced surgical precision with zero down-time. We resolve ovarian cysts, endometriosis, and tubal barriers using minimal keyhole incisions for rapid, painless recovery.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="https://www.practo.com/delhi/clinic/pravi-global-ivf-polyclinic-lajpat-nagar-4/about"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                Book Doctor Consult
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
                <MapPin className="w-4 h-4 text-teal-300" />
                <span>Next to Rama Gallery, Lajpat Nagar</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-teal-300" />
                <span>Mon-Sat: 10 AM - 6 PM</span>
              </div>
            </div>
          </div>
          <div className="md:col-span-5 hidden md:block">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-2xl space-y-6">
              <div className="flex items-center gap-3">
                <Zap className="w-6 h-6 text-teal-200" />
                <h3 className="text-lg font-bold text-white">Advanced Care</h3>
              </div>
              <p className="text-sm text-teal-100 font-light leading-relaxed">
                Our surgical theater features ultra-precision laparoscopic cameras, harmonic scalpels, and specialized carbon dioxide insufflators to ensure rapid recovery.
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
            <h2 className="text-3xl font-bold text-gray-900 border-l-4 border-teal-600 pl-4">
              Minimally Invasive Keyhole Surgical Interventions
            </h2>
            <p className="text-gray-600">
              When baseline diagnostics reveal structural blockages, large ovarian cysts, or pelvic scarring, planning surgical corrections can feel intimidating. However, modern keyhole surgery (laparoscopy) allows doctors to evaluate and resolve these conditions with exceptional safety, minimal scarring, and quick recovery. At Pravi Global IVF, we provide comprehensive, personalized care for <strong>Laparoscopy Surgery in Lajpat Nagar Delhi</strong> to ensure you achieve excellent results.
            </p>
            <p className="text-gray-600">
              By introducing a thin, lighted telescope (laparoscope) through a tiny incision in the navel, our senior surgeons obtain a direct, high-definition view of your uterus, fallopian tubes, and ovaries. This enables us to treat ovarian cysts, remove fibroids, and restore your pelvic health simultaneously. For detailed expert surgical guides, visit the <a href="https://www.youtube.com/@ivfcentre1Msubscriber" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Pravi IVF YouTube Channel</a>.
            </p>
          </section>

          {/* Section 2: Benefits Grid */}
          <section className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Releasing Endometrial Adhesions and Tubal Blockages
            </h2>
            <p className="text-gray-600">
              We specialize in resolving a wide range of pelvic conditions that act as barriers to conception:
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-teal-100 shadow-sm space-y-3">
                  <h4 className="font-bold text-[#2F5256] text-lg">{item.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed font-light">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3: Subheadings with keywords */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Post-Operative Recovery and Care Guidelines
            </h2>
            <p className="text-gray-600">
              Most diagnostic and operative laparoscopy procedures are simple, same-day daycare surgeries. Patients typically return to light daily activities within 24 to 48 hours, reporting minimal muscle soreness and excellent healing.
            </p>
            <p className="text-gray-600">
              When intrauterine adhesions or polyps are suspected simultaneously, we coordinate laparoscopy with a detailed, cut-free <a href="/hysteroscopy-treatment-in-lajpat-nagar-delhi" className="text-blue-600 hover:underline">hysteroscopy treatment</a> to ensure a comprehensive, high-standard evaluation.
            </p>
          </section>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 space-y-8">
          <div className="bg-white border border-teal-100 shadow-lg rounded-3xl p-8 space-y-6">
            <h3 className="text-lg font-bold text-gray-900">Book Consult</h3>
            <p className="text-sm text-gray-600 font-light">
              Schedule a baseline diagnostic consult with our senior surgical panel to discuss your laparoscopy checks.
            </p>
            <a
              href="https://www.practo.com/delhi/clinic/pravi-global-ivf-polyclinic-lajpat-nagar-4/about"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-teal-500 hover:bg-teal-600 text-white font-bold py-4 rounded-xl shadow-md transition-all text-sm"
            >
              Book via Practo
            </a>
            <a
              href="tel:+918009150040"
              className="block w-full text-center border-2 border-teal-100 text-teal-600 hover:bg-teal-50 font-bold py-4 rounded-xl transition-all text-sm"
            >
              Call Surgical Desk
            </a>
          </div>

          <div className="bg-slate-900 text-white rounded-3xl p-8 shadow-md space-y-4">
            <h3 className="text-md font-bold text-teal-300">Theater Standards</h3>
            <ul className="space-y-3 text-xs text-gray-300 leading-relaxed font-light">
              <li>High-definition 4K camera systems.</li>
              <li>Outpatient daycare setup with rapid recovery.</li>
              <li>Complete legal and clinical compliance.</li>
              <li>Expert surgical specialists.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white py-16 border-t border-teal-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Laparoscopy Surgery in Lajpat Nagar Delhi FAQ
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "How long does a typical laparoscopy procedure take?",
                a: "A diagnostic laparoscopy takes about 15 to 30 minutes. Operative surgeries to treat endometriosis or ovarian cysts can take 45 to 90 minutes depending on complexity."
              },
              {
                q: "Is general anesthesia required for laparoscopy surgery?",
                a: "Yes. General anesthesia is utilized to ensure complete muscle relaxation and zero discomfort for the patient during the procedure."
              },
              {
                q: "Can laparoscopy help clear blocked fallopian tubes?",
                a: "Yes, absolutely. By introducing a delicate dye (chromotubation) under direct vision, we can verify patency and clear minor adhesions blockages."
              },
              {
                q: "What is the recovery time before returning to active work?",
                a: "Most patients return to light desk jobs within 3 to 5 days, while heavy physical activities or gym workouts should be avoided for 2 to 3 weeks."
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
      <div className="bg-[#0E1F21] text-white py-16 text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          <h2 className="text-3xl font-bold text-teal-200">
            Advanced Keyhole Precision for an Active Recovery
          </h2>
          <p className="text-sm text-teal-100/80 font-light">
            Empower your reproductive plans with absolute clinical safety and high-definition surgical validation.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="https://www.practo.com/delhi/clinic/pravi-global-ivf-polyclinic-lajpat-nagar-4/about"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-teal-500 hover:bg-teal-600 font-bold px-8 py-4 rounded-xl transition-all shadow-md text-white text-sm"
            >
              Book via Practo
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

export default LaparoscopyPage;
