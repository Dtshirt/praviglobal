'use client';
import React, { useState } from 'react';
import {
  Calendar,
  Phone,
  MapPin,
  Clock,
  Compass,
  ArrowRight,
  TrendingUp,
  Award,
  Video,
  Plus,
  Minus
} from 'lucide-react';

const FollicularMonitoringPage = () => {
  const [activeTab, setActiveTab] = useState(0);

  const steps = [
    {
      day: "Day 2-3 (Baseline Scan)",
      title: "Antral Follicle Count",
      desc: "We check the ovaries during early menstruation to establish the count of resting follicles and exclude any residual cysts."
    },
    {
      day: "Day 9-10 (First Growth Check)",
      title: "Dominant Follicle Selection",
      desc: "Identifying the leading follicle that has started growing faster than others, typically reaching 10-12mm by this stage."
    },
    {
      day: "Day 12-14 (Trigger Window)",
      title: "Mature Follicle & Endometrial Check",
      desc: "The follicle reaches optimal maturity (18-22mm), and the uterine lining exhibits a clear triple-line pattern."
    },
    {
      day: "Post-Ovulation Confirm",
      title: "Release Verification",
      desc: "A final rapid check confirming the follicle has successfully ruptured and released the egg into the fallopian tube."
    }
  ];

  return (
    <div className="min-h-screen bg-rose-50/20 text-gray-800 font-sans">
      {/* Warm and inviting Hero Section */}
      <div className="relative bg-gradient-to-br from-[#804256] via-[#B0607A] to-[#602D3C] text-white py-20 px-4 md:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.06),transparent)] pointer-events-none" />
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 space-y-6">
            <span className="inline-block bg-white/20 text-rose-200 px-4 py-1 rounded-full text-xs font-semibold tracking-wider uppercase">
              Precision Ovulation Mapping
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
              Follicular Monitoring in Lajpat Nagar Delhi
            </h1>
            <p className="text-lg text-rose-100 font-light max-w-xl">
              Natural conception depends entirely on timing. Our specialized follicular checks monitor egg maturation in real-time, matching intercourse or treatments with your golden window.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="https://share.google/1tIS2ANVnK0VHQa2V"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-rose-400 hover:bg-rose-500 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
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
            <div className="flex items-center gap-6 text-sm text-rose-200">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-rose-300" />
                <span>Lajpat Nagar, South Delhi</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-rose-300" />
                <span>Mon-Sat: 10 AM - 6 PM</span>
              </div>
            </div>
          </div>
          <div className="md:col-span-5 hidden md:block">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-2xl space-y-6">
              <h3 className="text-xl font-bold text-rose-200">Why Map Ovulation?</h3>
              <ul className="space-y-4 text-sm text-rose-100 font-light">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-rose-300 rounded-full" />
                  No guesswork – exact ovulation dates
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-rose-300 rounded-full" />
                  Checks uterine lining thickness
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-rose-300 rounded-full" />
                  Perfect for natural & cycle coordination
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Structured Content Area */}
      <div className="max-w-6xl mx-auto px-4 py-16 grid lg:grid-cols-12 gap-12">
        {/* Left main content block */}
        <div className="lg:col-span-8 space-y-12">
          {/* Section 1: Introduction */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 border-l-4 border-rose-500 pl-4">
              Tracking Ovulation with Follicle Scans
            </h2>
            <p className="text-gray-600">
              Conceiving naturally requires perfect biological coordination. Many couples experience unexplained delay simply because they estimate their ovulation using generic mobile apps. A professional <strong>Follicular Monitoring in Lajpat Nagar Delhi</strong> at Pravi Global IVF replaces guesswork with scientific certainty, mapping follicle growth through gentle ultrasound assessments.
            </p>
            <p className="text-gray-600">
              Through serial transvaginal scans (TVS), our senior specialists track the small fluid-filled sacs in your ovaries. We measure their size, calculate growth speed (typically 1.5mm to 2mm per day), and verify if the egg is released successfully. This enables us to coordinate timed intercourse or plan procedures such as an <a href="/iui-treatment-in-lajpat-nagar-delhi" className="text-blue-600 hover:underline">IUI treatment</a>. Detailed step-by-step videos are available on our <a href="https://www.youtube.com/@ivfcentre1Msubscriber" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">YouTube channel</a>.
            </p>
          </section>

          {/* Section 2: Timeline Steps */}
          <section className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Dynamic Follicular Monitoring Protocol
            </h2>
            <p className="text-gray-600">
              A standard follicular monitoring cycle consists of 3 to 5 rapid ultrasound checks, starting in the early phase of your period. Below is our clinical timeline:
            </p>
            <div className="relative border-l-2 border-rose-200 ml-4 pl-8 space-y-8">
              {steps.map((step, idx) => (
                <div key={idx} className="relative">
                  <span className="absolute -left-12 top-1.5 w-8 h-8 rounded-full bg-rose-500 text-white flex items-center justify-center font-bold text-sm shadow-md">
                    {idx + 1}
                  </span>
                  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
                    <span className="text-xs font-semibold text-rose-500 uppercase tracking-wider">{step.day}</span>
                    <h4 className="font-bold text-gray-900">{step.title}</h4>
                    <p className="text-sm text-gray-600 font-light">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3: Subheadings with keywords */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Endometrial Receptivity and Egg Size Assessment
            </h2>
            <p className="text-gray-600">
              Monitoring follicles alone is only half the battle. A healthy, mature egg requires a receptive uterine bed to implant successfully. During each scan, we assess the endometrial lining's thickness and pattern. An optimal lining should reach at least 7-8mm and showcase a beautiful "triple-line" appearance on the ultrasound screen before ovulation occurs.
            </p>
            <p className="text-gray-600">
              If the lining is thin, we intervene early with targeted medications to boost local blood flow. Our clinical expertise helps you address these biological factors quietly and effectively.
            </p>
          </section>
        </div>

        {/* Right sidebar block */}
        <div className="lg:col-span-4 space-y-8">
          <div className="bg-white border border-rose-100 shadow-lg rounded-3xl p-8 space-y-6">
            <h3 className="text-lg font-bold text-gray-900">Schedule a Scan</h3>
            <p className="text-sm text-gray-600 font-light">
              Register early to align the scans with your upcoming cycle.
            </p>
            <a
              href="https://wa.me/918009150040"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-rose-500 hover:bg-rose-600 text-white font-bold py-4 rounded-xl shadow-md transition-all"
            >
              Book via WhatsApp
            </a>
            <a
              href="tel:+918009150040"
              className="block w-full text-center border-2 border-rose-200 text-rose-500 hover:bg-rose-50 font-bold py-4 rounded-xl transition-all"
            >
              Call Clinic
            </a>
          </div>

          <div className="bg-[#FAF6F7] rounded-3xl p-8 border border-rose-100">
            <h3 className="text-md font-bold mb-4 text-rose-800">Scan Guidelines</h3>
            <ul className="space-y-3 text-xs text-gray-600 leading-relaxed font-light">
              <li>No fasting is required for transvaginal scans.</li>
              <li>Scans only take about 5-10 minutes.</li>
              <li>Please wear comfortable, loose clothing.</li>
              <li>An empty bladder is required for transvaginal ultrasound.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Accordion FAQ Area */}
      <div className="bg-white py-16 border-t border-rose-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Follicular Monitoring in Lajpat Nagar Delhi FAQ
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "How many scans are required during follicular monitoring in lajpat nagar delhi?",
                a: "Most cycles require 3 to 5 scans, depending on your follicle growth rate and your natural cycle length."
              },
              {
                q: "Is a transvaginal scan painful?",
                a: "No, it is highly comfortable. We use thin, lubricated, hygienic probes and gentle techniques to ensure an entirely painless experience."
              },
              {
                q: "Can follicular scans increase natural pregnancy success rates?",
                a: "Yes. By identifying your exact fertile window, it maximizes natural conception chances for couples with irregular cycles."
              },
              {
                q: "Can I go to work immediately after a scan?",
                a: "Absolutely. The scan is a simple outpatient diagnostic check with zero downtime, allowing you to return to work immediately."
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-rose-50/30 rounded-xl p-6 border border-rose-100/50">
                <h4 className="font-bold text-gray-900 mb-2">{faq.q}</h4>
                <p className="text-sm text-gray-600 leading-relaxed font-light">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Footer */}
      <div className="bg-rose-950 text-white py-16 text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          <h2 className="text-3xl font-bold text-rose-200">
            Perfect Your Timing, Perfect Your Chances
          </h2>
          <p className="text-sm text-rose-100/80 font-light">
            Empower your conception journey with absolute scientific validation of your ovulation patterns.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="https://wa.me/918009150040"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-rose-400 hover:bg-rose-500 font-bold px-8 py-4 rounded-xl transition-all shadow-md text-white"
            >
              Book via WhatsApp
            </a>
            <a
              href="tel:+918009150040"
              className="border border-white/20 hover:border-white font-bold px-8 py-4 rounded-xl transition-all text-white"
            >
              Call +91 800 915 0040
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FollicularMonitoringPage;
