'use client'
import React, { useState } from 'react';
import {
  ShieldCheck,
  Cpu,
  Scan,
  BellRing,
  AlertTriangle,
  Lock,
  CheckCircle2,
  Users,
  ClipboardCheck,
  Activity,
  ArrowRight,
  Plus,
  Minus,
  Microscope,
  Database,
  History,
  Sparkles,
  Award,
  Zap
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function EWSPage() {
  const [activeFaq, setActiveFaq] = useState(null);

  const steps = [
    { title: "Semen Collection", icon: <Database className="w-6 h-6" /> },
    { title: "Oocyte Retrieval", icon: <Microscope className="w-6 h-6" /> },
    { title: "ICSI", icon: <Activity className="w-6 h-6" /> },
    { title: "Fertilization Check", icon: <CheckCircle2 className="w-6 h-6" /> },
    { title: "Embryo Culture", icon: <Zap className="w-6 h-6" /> },
    { title: "Embryo Biopsy", icon: <Scan className="w-6 h-6" /> },
    { title: "Cryopreservation", icon: <Lock className="w-6 h-6" /> },
    { title: "Embryo Transfer", icon: <History className="w-6 h-6" /> },
  ];

  const advantages = [
    {
      category: "Patient Safety",
      items: ["Minimizes risk of sample mix-up", "Improves traceability"],
      icon: <ShieldCheck className="w-8 h-8 text-blue-500" />
    },
    {
      category: "Legal Protection",
      items: ["Strong medico-legal documentation", "Audit trail for every action"],
      icon: <ClipboardCheck className="w-8 h-8 text-purple-500" />
    },
    {
      category: "Quality Assurance",
      items: ["NABH/JCI/CAP compliance", "Standardized IVF lab workflow"],
      icon: <Award className="w-8 h-8 text-teal-500" />
    },
    {
      category: "Staff Confidence",
      items: ["Reduces human error", "Efficiency during busy cycles"],
      icon: <Users className="w-8 h-8 text-orange-500" />
    }
  ];

  const faqs = [
    {
      q: "What is an Electronic Witness System (EWS)?",
      a: "An Electronic Witness System (EWS) is a safety technology used in IVF labs to prevent gamete or embryo mix-ups. It acts as a digital double-check system, ensuring that the right eggs, sperm, and embryos are always matched with the right patient."
    },
    {
      q: "Does EWS replace human embryologists?",
      a: "No, EWS is an additional layer of safety. It does not replace the expertise and care of our embryologists but provides them with a digital tool to verify every step, eliminating the possibility of human error during high-stakes procedures."
    },
    {
      q: "How does the system use RFID or Barcodes?",
      a: "Every dish, tube, and container used for a patient is tagged with a unique RFID (radiofrequency identification) chip or barcode. Readers in the lab automatically detect these tags and verify identity before any procedure begins."
    },
    {
      q: "What happens if there is a mismatch?",
      a: "If the system detects a potential mismatch (e.g., trying to use sperm from Patient A with eggs from Patient B), it immediately triggers an audible alarm, shows a visual warning on the screen, and blocks the workflow until corrected."
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 font-sans">

      {/* 1. HERO SECTION */}
      <section className="relative bg-[#001B3D] text-white py-28 px-4 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/40 via-transparent to-transparent opacity-60"></div>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]"></div>

        <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-blue-500/20 backdrop-blur-md border border-blue-400/30 rounded-full px-5 py-2 text-blue-300 font-semibold text-sm">
              <Sparkles className="w-4 h-4" />
              <span>Next-Gen Lab Safety Protocol</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Electronic Witness System <span className="text-blue-400 block mt-2 text-4xl lg:text-5xl">(EWS)</span>
            </h1>

            <p className="text-xl text-slate-300 max-w-xl leading-relaxed font-light">
              At Pravi IVF, your peace of mind is our priority. We use the world's most advanced <strong>"Digital Double-Check"</strong> technology to ensure 100% accuracy in every step of your treatment.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 p-4 rounded-2xl">
                <ShieldCheck className="w-10 h-10 text-blue-400" />
                <div>
                  <div className="text-sm font-bold">Zero Mix-up Risk</div>
                  <div className="text-xs text-slate-400">Automated verification</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 p-4 rounded-2xl">
                <Scan className="w-10 h-10 text-teal-400" />
                <div>
                  <div className="text-sm font-bold">Full Traceability</div>
                  <div className="text-xs text-slate-400">RFID & Barcode tracking</div>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Link href="#contact" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold transition-all shadow-xl shadow-blue-900/20 active:scale-95 group">
                Consult Our Experts <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full"></div>
            <div className="relative rounded-[3rem] overflow-hidden border-8 border-white/5 shadow-2xl">
              <Image
                src="/images/ews-system.png"
                alt="IVF Electronic Witness System in Action"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
              <div className="absolute bottom-6 left-6 right-6 bg-slate-900/80 backdrop-blur-md p-4 rounded-2xl border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs font-bold uppercase tracking-wider text-green-400">System Active & Verifying</span>
                </div>
                <div className="text-[10px] text-slate-400">Ver: 4.2.0.8</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. HOW IT WORKS */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl font-bold text-slate-900">How It Works</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg font-light">
            A sophisticated interplay of hardware and software designed to act as a silent guardian for your precious samples.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-md transition-all group">
            <div className="w-16 h-16 bg-blue-100 rounded-3xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <Cpu className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Unique Identity</h3>
            <p className="text-slate-600 leading-relaxed font-light">
              Every dish, tube, and container is tagged with a unique <strong>RFID chip or Barcode</strong> linked specifically to your patient profile.
            </p>
          </div>

          <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-md transition-all group">
            <div className="w-16 h-16 bg-teal-100 rounded-3xl flex items-center justify-center mb-8 group-hover:bg-teal-600 group-hover:text-white transition-colors">
              <Scan className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Auto-Verification</h3>
            <p className="text-slate-600 leading-relaxed font-light">
              Whenever an embryologist brings samples together, the system automatically reads the tags and verifies the <strong>Right Patient, Sperm, Eggs, and Embryos.</strong>
            </p>
          </div>

          <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-md transition-all group">
            <div className="w-16 h-16 bg-red-100 rounded-3xl flex items-center justify-center mb-8 group-hover:bg-red-600 group-hover:text-white transition-colors">
              <BellRing className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Safety Interlock</h3>
            <p className="text-slate-600 leading-relaxed font-light">
              In the event of a mismatch, the system triggers <strong>audible alarms</strong> and <strong>visual warnings</strong>, blocking the workflow until it is corrected.
            </p>
          </div>
        </div>
      </section>

      {/* 3. WORKFLOW STEPS */}
      <section className="py-24 bg-slate-900 text-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">Steps Monitored by EWS</h2>
              <p className="text-slate-400 text-lg mb-12 font-light leading-relaxed">
                We leave nothing to chance. Our Electronic Witness System covers every single critical touchpoint in the IVF laboratory journey.
              </p>

              <div className="grid grid-cols-2 gap-6">
                {steps.map((step, i) => (
                  <div key={i} className="flex items-center gap-4 bg-slate-800/50 p-5 rounded-2xl border border-slate-700 hover:border-blue-500 transition-colors">
                    <div className="text-blue-400">{step.icon}</div>
                    <span className="font-medium text-slate-200">{step.title}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-600 rounded-[3rem] p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-12 opacity-10">
                <ShieldCheck className="w-48 h-48" />
              </div>
              <h3 className="text-3xl font-bold mb-6 italic">"The Digital Sentinel"</h3>
              <p className="text-blue-100 text-lg leading-relaxed mb-8 font-light">
                Our lab is equipped with the latest witnessing infrastructure, including RI Witness and Gidget technology, ensuring that your biological material is handled with the highest level of security available globally.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  <span>Real-time monitoring 24/7</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  <span>Automated audit trail for every sample</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  <span>Tamper-proof RFID tagging system</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ADVANTAGES */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-slate-900">The Pravi Advantage</h2>
          <p className="text-slate-500 font-light mt-4">Why we invested in EWS for every single patient.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((adv, i) => (
            <div key={i} className="bg-white border border-slate-100 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="mb-6">{adv.icon}</div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">{adv.category}</h4>
              <ul className="space-y-3">
                {adv.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 5. LIMITATIONS & ETHICS */}
      <section className="py-24 px-4 bg-slate-50 border-y border-slate-200">
        <div className="max-w-4xl mx-auto bg-white p-12 rounded-[2.5rem] shadow-xl border border-slate-100">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-600">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">Commitment to Excellence</h2>
          </div>
          <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-light italic">
            <p>
              While Electronic Witnessing is a powerful safety layer, we believe it <strong>cannot replace good embryology practices</strong>. At Pravi IVF, our embryologists follow rigorous manual protocols alongside the EWS.
            </p>
            <p>
              The system requires specialized infrastructure and extensive staff training, which we provide regularly to ensure that our "digital double-check" never fails you.
            </p>
          </div>
        </div>
      </section>

      {/* 6. FAQ SECTION */}
      <section className="py-24 px-4 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all hover:border-blue-400">
              <button
                onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                className="w-full text-left px-8 py-6 font-bold text-slate-800 flex justify-between items-center focus:outline-none"
              >
                <span>{faq.q}</span>
                {activeFaq === i ? <Minus className="w-5 h-5 text-blue-600" /> : <Plus className="w-5 h-5 text-slate-400" />}
              </button>
              {activeFaq === i && (
                <div className="px-8 pb-8 text-slate-600 leading-relaxed font-light border-t border-slate-50 pt-6 bg-slate-50/50">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 7. BOTTOM CTA */}
      <section className="bg-blue-600 text-white py-24 px-4 text-center relative overflow-hidden" id="contact">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-3xl mx-auto relative z-10 space-y-10">
          <h2 className="text-4xl md:text-5xl font-bold italic">Your Journey is Safe in Our Hands</h2>
          <p className="text-xl text-blue-50 font-light leading-relaxed">
            Discover how our advanced lab technologies and compassionate care can make your dream of parenthood a reality. Book a consultation at any of our Delhi centres today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/book-appointment" className="bg-white text-blue-600 px-12 py-5 rounded-full font-bold text-lg transition-all shadow-2xl hover:scale-105 active:scale-95">
              Book Appointment
            </Link>
            <a href="tel:+919999999999" className="bg-blue-800 text-white px-12 py-5 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-3 border border-blue-400/30 hover:bg-blue-900 active:scale-95">
              Talk to a Specialist
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
