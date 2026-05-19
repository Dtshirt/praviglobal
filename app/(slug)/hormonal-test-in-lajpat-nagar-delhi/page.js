'use client';
import React, { useState } from 'react';
import {
  FlaskRound,
  CheckCircle2,
  Clock,
  Phone,
  Calendar,
  MapPin,
  HelpCircle,
  TrendingUp,
  Activity,
  ArrowRight,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

const HormonalTestPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (idx) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-gray-800 font-sans leading-relaxed">
      {/* Premium Elegant Hero Section */}
      <div className="relative bg-gradient-to-br from-[#1E2A4A] via-[#2E3D65] to-[#121A30] text-white py-20 px-4 md:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.05),transparent)] pointer-events-none" />
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 space-y-6">
            <span className="inline-block bg-amber-400/20 text-amber-300 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
              Diagnostic Endocrinology & Fertility
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white">
              Hormonal Test in Lajpat Nagar Delhi
            </h1>
            <p className="text-lg text-blue-100 font-light max-w-xl">
              Hormones act as the chemical messengers coordinating your body's reproductive rhythm. When structural checks show no blockages, hormonal diagnostics clarify the silent pathways of egg development and ovulation.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="https://wa.me/918009150040"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-400 hover:bg-amber-500 text-[#121A30] px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
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
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>Next to Rama Gallery, Lajpat Nagar</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-amber-400" />
                <span>Daily: 10 AM - 6 PM</span>
              </div>
            </div>
          </div>
          <div className="md:col-span-5 hidden md:block">
            <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-2xl relative">
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center text-[#1E2A4A] font-bold shadow-lg">
                AMH
              </div>
              <h3 className="text-xl font-bold mb-4 text-amber-300">Fast-Track Diagnostics</h3>
              <div className="space-y-4 text-sm text-blue-100">
                <div className="pb-3 border-b border-white/10 flex justify-between">
                  <span>Anti-Müllerian Hormone (AMH)</span>
                  <span className="font-semibold text-white">Same-Day Reports</span>
                </div>
                <div className="pb-3 border-b border-white/10 flex justify-between">
                  <span>FSH & LH Dynamics</span>
                  <span className="font-semibold text-white">Precise Assays</span>
                </div>
                <div className="pb-3 border-b border-white/10 flex justify-between">
                  <span>Thyroid & Prolactin Panels</span>
                  <span className="font-semibold text-white">Comprehensive</span>
                </div>
                <div className="flex justify-between">
                  <span>Progesterone & Estrogen</span>
                  <span className="font-semibold text-white">Cycle-Mapped</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modern Dynamic Content Section */}
      <div className="max-w-6xl mx-auto px-4 py-16 grid lg:grid-cols-12 gap-12">
        {/* Main Body */}
        <div className="lg:col-span-8 space-y-12">
          {/* Section 1: Intro */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 border-l-4 border-amber-400 pl-4">
              Decoding Fertility: Why a Hormonal Assessment is the First Critical Step
            </h2>
            <p className="text-gray-600">
              When couples experience delays in conceiving, they often focus entirely on anatomical factors. However, the delicate interplay of hormones acts as the true biological engine behind egg development, endometrial receptive prep, and sperm quality. By undertaking a comprehensive <strong>Hormonal Test in Lajpat Nagar Delhi</strong> at Pravi Global IVF, you obtain an exact blueprint of your reproductive ecosystem, allowing our doctors to customize your care from day one.
            </p>
            <p className="text-gray-600">
              Unlike broad-spectrum blood checkups, fertility hormone testing is cycle-dependent. An FSH level taken on Day 3 of your cycle carries a completely different diagnostic meaning than one checked on Day 14. We map your tests meticulously to match your personal menstrual cycle, avoiding false alarms and delivering clinical clarity. Our diagnostic protocols are aligned with the latest clinical findings shared on our <a href="https://www.youtube.com/@ivfcentre1Msubscriber" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Pravi IVF YouTube Channel</a>.
            </p>
          </section>

          {/* Section 2: Detailed Breakdown */}
          <section className="space-y-8">
            <div className="bg-amber-50/50 rounded-2xl p-8 border border-amber-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Evaluating Ovarian Reserve Blood Tests
              </h2>
              <p className="text-gray-600 mb-6">
                Evaluating the quality and quantity of your egg reserve is essential before planning any treatment, whether natural conception, IUI, or IVF.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm space-y-3">
                  <h4 className="font-bold text-blue-900">Anti-Müllerian Hormone (AMH)</h4>
                  <p className="text-sm text-gray-600">
                    Unlike other hormones, AMH remains stable throughout your monthly cycle. It indicates the remaining follicle pool, helping doctors predict response to ovarian stimulation.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm space-y-3">
                  <h4 className="font-bold text-blue-900">Follicle-Stimulating Hormone (FSH)</h4>
                  <p className="text-sm text-gray-600">
                    Measured on Day 2 or 3 of the menstrual cycle. Elevated FSH levels suggest the ovaries are working extra hard, indicating declining egg quantity.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Subheadings with keywords */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Thyroid and Prolactin Evaluation for Fertility
            </h2>
            <p className="text-gray-600">
              Even a minor thyroid imbalance (hypothyroidism or hyperthyroidism) can disrupt ovulation and prevent a fertilized egg from successfully implanting in the uterine wall. Similarly, elevated Prolactin levels—the hormone responsible for breast milk production—can completely shut down ovulation, causing erratic cycles or secondary amenorrhea.
            </p>
            <p className="text-gray-600">
              At Pravi Global IVF, we screen for these silent factors as standard procedure. By balancing thyroid stimulating hormone (TSH) and prolactin levels, we frequently restore regular ovulation cycles naturally, removing the need for complex interventions. For visual insights into our laboratory standards, feel free to visit the <a href="https://www.instagram.com/ivfpravi/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Pravi IVF Instagram Profile</a>.
            </p>
            <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100 flex items-start gap-4">
              <ShieldCheck className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Cycle Coordination Advantage</h4>
                <p className="text-sm text-gray-600">
                  We highly recommend combining these diagnostics with our precise <a href="/follicular-monitoring-in-lajpat-nagar-delhi" className="text-blue-600 hover:underline">follicular monitoring</a> to map actual egg growth alongside your hormone levels.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 space-y-8">
          <div className="bg-gradient-to-b from-gray-900 to-slate-800 text-white rounded-3xl p-8 shadow-lg space-y-6">
            <h3 className="text-xl font-bold text-amber-300">Locate Our Clinic</h3>
            <p className="text-sm text-gray-300">
              Easily accessible in South Delhi. Convenient parking and excellent connectivity.
            </p>
            <div className="space-y-4">
              <a
                href="https://share.google/1tIS2ANVnK0VHQa2V"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white/10 hover:bg-white/20 p-4 rounded-xl transition-all"
              >
                <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <span className="text-xs text-gray-100 font-medium">Get Directions on Google Maps</span>
              </a>
              <a
                href="https://share.google/1tIS2ANVnK0VHQa2V"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white/10 hover:bg-white/20 p-4 rounded-xl transition-all"
              >
                <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <span className="text-xs text-gray-100 font-medium">View Reviews on Google</span>
              </a>
            </div>
          </div>

          <div className="border border-gray-100 bg-white rounded-3xl p-8 shadow-md">
            <h3 className="text-lg font-bold mb-4 text-gray-900">Why Pravi IVF?</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>NABL Accredited Diagnostics</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Cycle-Calibrated Testing</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>No Hidden Fees</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Compassionate Phlebotomists</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Accordion FAQ Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Hormonal Test in Lajpat Nagar Delhi FAQ
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "On which day of my period should I schedule a hormonal test in lajpat nagar delhi?",
                a: "For baseline hormones such as FSH, LH, and Estradiol, Day 2 or Day 3 of your menstrual bleeding is recommended. AMH and Thyroid tests can be done on any day of the cycle."
              },
              {
                q: "Are fertility blood tests painful?",
                a: "No. Testing involves a quick, simple blood draw from the arm. Our experienced team ensures maximum comfort and utilizes ultra-thin needles."
              },
              {
                q: "How long does it take to receive report findings?",
                a: "Most baseline hormonal results are processed within 24 to 48 hours. AMH reports are typically ready within 24 hours of collection at our clinic."
              },
              {
                q: "Can high Prolactin levels prevent successful pregnancy?",
                a: "Yes. High Prolactin levels suppress ovulation, making regular cycles difficult. Fortunately, this is highly manageable with simple oral medications."
              }
            ].map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden cursor-pointer"
                onClick={() => toggleFaq(idx)}
              >
                <div className="flex justify-between items-center p-6 hover:bg-gray-50 transition-colors">
                  <span className="font-bold text-gray-900 text-left">{faq.q}</span>
                  <ChevronRight
                    className={`w-5 h-5 text-gray-400 transition-transform ${
                      activeFaq === idx ? "rotate-90 text-blue-600" : ""
                    }`}
                  />
                </div>
                {activeFaq === idx && (
                  <div className="p-6 bg-gray-50 border-t border-gray-100 text-sm text-gray-600 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dynamic CTA */}
      <div className="bg-[#1E2A4A] text-white py-16 text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Uncover Your True Biological Blueprint
          </h2>
          <p className="text-blue-100 text-lg font-light">
            Take a proactive, stress-free step toward your family goals. Reserve a personal diagnostic slot today.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="https://wa.me/918009150040"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-400 hover:bg-amber-500 text-[#1E2A4A] font-bold px-8 py-4 rounded-xl transition-all shadow-md"
            >
              Book via WhatsApp
            </a>
            <a
              href="tel:+918009150040"
              className="border-2 border-white/20 hover:border-white font-bold px-8 py-4 rounded-xl transition-all"
            >
              Call +91 800 915 0040
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HormonalTestPage;
