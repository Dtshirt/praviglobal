'use client';
import React, { useState } from 'react';
import {
  Heart,
  Activity,
  Award,
  Phone,
  Calendar,
  MapPin,
  Clock,
  CheckCircle2,
  CheckSquare,
  FileText,
  HelpCircle,
  ChevronRight
} from 'lucide-react';

const FemaleInfertilityPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const categories = [
    {
      title: "Polycystic Ovary Syndrome (PCOS)",
      details: "High levels of male hormones (androgens) disrupt monthly egg release. We manage PCOS through precise ovulation induction, lifestyle shifts, and targeted metabolic balancing."
    },
    {
      title: "Endometriosis Barriers",
      details: "Endometrial tissue grows outside the uterus, causing pelvic adhesions and local inflammatory factors. Our team specializes in micro-laparoscopic removals to restore pelvic health."
    },
    {
      title: "Blocked Fallopian Tubes",
      details: "Physical blockages prevent egg fertilization. We perform precise tubal patency checks (HSG/HyCoSy) and offer solutions including advanced IVF options."
    },
    {
      title: "Diminished Ovarian Reserve (DOR)",
      details: "Low egg count or poor egg quality associated with maternal age or genetic factors. Managed via customized embryo stimulation and donor options."
    }
  ];

  return (
    <div className="min-h-screen bg-[#FDFCF7] text-gray-800 font-sans">
      {/* High-End Hero Section */}
      <div className="relative bg-gradient-to-br from-[#7C6244] via-[#9E8364] to-[#59432B] text-white py-20 px-4 md:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.05),transparent)] pointer-events-none" />
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 space-y-6">
            <span className="inline-block bg-amber-400/20 text-amber-200 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase">
              Empathetic Gyne Diagnostics
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white">
              Female Infertility Treatment in Lajpat Nagar Delhi
            </h1>
            <p className="text-lg text-amber-100 font-light max-w-xl">
              Understanding female reproductive health requires a comprehensive, holistic approach. We diagnose and treat PCOS, endometriosis, and tubal barriers with premium warmth and accuracy.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="https://share.google/1tIS2ANVnK0VHQa2V"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                <HelpCircle className="w-5 h-5" />
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
            <div className="flex items-center gap-6 text-sm text-amber-200">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-amber-300" />
                <span>Lajpat Nagar, South Delhi</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-amber-300" />
                <span>Mon-Sat: 10 AM - 6 PM</span>
              </div>
            </div>
          </div>
          <div className="md:col-span-5 hidden md:block">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-2xl space-y-6">
              <h3 className="text-lg font-bold text-amber-200">Personalized Diagnostics</h3>
              <p className="text-sm text-amber-100 font-light leading-relaxed">
                Every female body operates differently. We never apply generic protocols. Your diagnostic mapping is customized to match your baseline ovarian reserve and cycle parameters.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="max-w-6xl mx-auto px-4 py-16 grid lg:grid-cols-12 gap-12">
        {/* Left Main Content Block */}
        <div className="lg:col-span-8 space-y-12">
          {/* Section 1: Intro */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 border-l-4 border-amber-600 pl-4">
              Restoring Female Reproductive Health: A Scientific Approach
            </h2>
            <p className="text-gray-600">
              Getting pregnant naturally requires a lot of biological steps to line up perfectly each month. Your ovaries need to release a healthy egg, your fallopian tubes have to be open, and your uterine lining must be ready to receive the embryo. If even one of these steps is slightly off, it can cause delays in conceiving. Our program for <strong>Female Infertility Treatment in Lajpat Nagar Delhi</strong> is all about finding and fixing these subtle disruptions with highly detailed, clinical accuracy.
            </p>
            <p className="text-gray-600">
              At Pravi Global IVF, we mix high-tech diagnostics with supportive, friendly counseling. We want you to feel clear, confident, and completely looked after during your checks. For simple visual explanations and patient guides, go watch our helpful videos on the <a href="https://www.youtube.com/@ivfcentre1Msubscriber" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Pravi IVF YouTube Channel</a>.
            </p>
          </section>

          {/* Section 2: PCOS and Ovulation */}
          <section className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Comprehensive Ovulation Disorders and PCOS Care
            </h2>
            <p className="text-gray-600">
              Irregular ovulation is one of the most common reasons why couples face delays in getting pregnant, and it often points to Polycystic Ovary Syndrome (PCOS). In a typical healthy cycle, one follicle matures fully and releases an egg. But with PCOS, many tiny follicles start growing partially but never release an egg, which leads to missed periods and metabolic changes.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {categories.map((cat, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-amber-100 shadow-sm space-y-3">
                  <h4 className="font-bold text-[#7C6244] text-lg">{cat.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed font-light">{cat.desc || cat.details}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3: Subheadings with keywords */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Endometriosis and Fallopian Tube Assessment
            </h2>
            <p className="text-gray-600">
              Sometimes, physical blockages or pelvic scarring can stand in the way of a pregnancy. A common example is endometriosis, which is when cells similar to your uterine lining start growing outside the womb in the pelvic area, leading to pain and inflammation.
            </p>
            <p className="text-gray-600">
              To see what's actually going on, we use detailed scans and 3D pelvic mapping. If we find any blockages or cysts, our expert surgeons can perform very gentle keyhole repairs using advanced <a href="/laparoscopy-surgery-in-lajpat-nagar-delhi" className="text-blue-600 hover:underline">laparoscopy surgery</a> to restore everything before we begin your IUI or IVF cycle.
            </p>
          </section>
        </div>

        {/* Sidebar Column */}
        <div className="lg:col-span-4 space-y-8">
          <div className="bg-white border border-amber-100 shadow-lg rounded-3xl p-8 space-y-6">
            <h3 className="text-lg font-bold text-gray-900">Patient Reviews</h3>
            <p className="text-sm text-gray-600 font-light">
              Read how our dedicated team has helped thousands of women overcome complex fertility challenges in Delhi.
            </p>
            <a
              href="https://share.google/1tIS2ANVnK0VHQa2V"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-[#7C6244] hover:bg-[#634E35] text-white font-bold py-4 rounded-xl shadow-md transition-all text-sm"
            >
              View Google Ratings
            </a>
            <a
              href="tel:+918009150040"
              className="block w-full text-center border-2 border-amber-100 text-[#7C6244] hover:bg-amber-50 font-bold py-4 rounded-xl transition-all text-sm"
            >
              Call Female Health Team
            </a>
          </div>

          <div className="bg-[#FAF8F5] rounded-3xl p-8 border border-amber-100 space-y-4">
            <h3 className="text-md font-bold text-[#7C6244]">Clinic Directives</h3>
            <ul className="space-y-3 text-xs text-gray-600 leading-relaxed font-light">
              <li>Comprehensive 3D ultrasound mapping of the uterine cavity.</li>
              <li>Cycle-matched baseline hormonal checks.</li>
              <li>PCOS weight management and lifestyle plans.</li>
              <li>Confidential, compassionate care.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white py-16 border-t border-amber-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Female Infertility Treatment in Lajpat Nagar Delhi FAQ
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "What is the primary causes of female infertility in lajpat nagar delhi?",
                a: "The most common causes include ovulation issues such as PCOS, physical blockages in the fallopian tubes, pelvic scarring from endometriosis, and age-related ovarian reserve decline."
              },
              {
                q: "How is a blocked fallopian tube diagnosed at Pravi Global IVF?",
                a: "We utilize gentle, highly precise diagnostic methods including Hysterosalpingography (HSG) and saline-contrast sonography (SIS) to verify tubal patency."
              },
              {
                q: "Can lifestyle changes improve female fertility?",
                a: "Yes. Balancing metabolic factors, managing body mass index (BMI), reducing refined sugar intake, and avoiding severe stress significantly boost natural ovulation and egg quality."
              },
              {
                q: "Is PCOS treatment safe for young women planning future pregnancies?",
                a: "Absolutely. Early metabolic balancing and lifestyle coaching not only boost current wellness but protect future egg reserves and ovulation health."
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
      <div className="bg-[#59432B] text-white py-16 text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          <h2 className="text-3xl font-bold text-amber-200">
            Compassionate Care for Female Reproductive Wellness
          </h2>
          <p className="text-sm text-amber-100/80 font-light">
            Empower your reproductive health with absolute clarity and state-of-the-art medical support.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="https://wa.me/918009150040"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-500 hover:bg-amber-600 font-bold px-8 py-4 rounded-xl transition-all shadow-md text-white text-sm"
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

export default FemaleInfertilityPage;
