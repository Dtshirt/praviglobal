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
  ShieldAlert,
  Activity
} from 'lucide-react';

const HysteroscopyPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const findings = [
    {
      title: "Endometrial Polyps",
      desc: "Small, benign growths inside the uterine lining that can act like a natural intrauterine device, preventing embryos from implanting. Easily removed during a brief outpatient check."
    },
    {
      title: "Uterine Septum Resection",
      desc: "A congenital physical tissue wall that divides the uterine cavity, restricting blood flow. Safely removed using precise keyhole endoscopic scissors."
    },
    {
      title: "Intrauterine Adhesions",
      desc: "Fibrous scar tissue (often presenting as Asherman's Syndrome) caused by past surgical interventions or infections, gently cleared to restore healthy lining."
    },
    {
      title: "Submucosal Fibroids",
      desc: "Benign muscular tumors that grow into the uterine cavity, distorting the space and causing heavy periods or early pregnancy loss."
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAF9] text-gray-800 font-sans">
      {/* High-End Endoscopy Hero Section */}
      <div className="relative bg-gradient-to-br from-[#1C3644] via-[#2F5266] to-[#0E1F27] text-white py-20 px-4 md:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.05),transparent)] pointer-events-none" />
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 space-y-6">
            <span className="inline-block bg-white/20 text-[#D5EBF6] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase">
              HD Intrauterine Endoscopy
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white">
              Hysteroscopy Treatment in Lajpat Nagar Delhi
            </h1>
            <p className="text-lg text-blue-100 font-light max-w-xl">
              Absolute visual validation of the uterine cavity. By introducing a micro-endoscope gently through the cervix, we diagnose and resolve polyps, septums, and uterine barriers with zero cuts.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="https://www.practo.com/delhi/clinic/pravi-global-ivf-polyclinic-lajpat-nagar-4/about"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                Book Clinic Consult
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
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-2xl space-y-6">
              <div className="flex items-center gap-3">
                <Activity className="w-6 h-6 text-blue-200" />
                <h3 className="text-lg font-bold text-white">Outpatient Comfort</h3>
              </div>
              <p className="text-sm text-blue-100 font-light leading-relaxed">
                Most hysteroscopy checks are outpatient daycare procedures taking less than 15-20 minutes, requiring no surgical incisions and ensuring a quick, painless recovery.
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
            <h2 className="text-3xl font-bold text-gray-900 border-l-4 border-blue-600 pl-4">
              Uterine Cavity Evaluation for IVF Success
            </h2>
            <p className="text-gray-600">
              When planning an IVF cycle, couples naturally focus on egg quality and embryo grades. However, if the uterine bed contains physical barriers, even the highest-grade embryo cannot implant successfully. A professional <strong>Hysteroscopy Treatment in Lajpat Nagar Delhi</strong> at Pravi Global IVF provides absolute visual confirmation of your cavity health, bypassing silent barriers before embryo transfers.
            </p>
            <p className="text-gray-600">
              Hysteroscopy is a highly safe, minimally invasive procedure where a slim endoscope (hysteroscope) is introduced gently through the natural path of the cervix. This allows our surgeons to view the uterine lining in high-definition, diagnosing issues that standard ultrasounds can miss. To watch expert discussions on cavity prep, visit the <a href="https://www.youtube.com/@ivfcentre1Msubscriber" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Pravi IVF YouTube Channel</a>.
            </p>
          </section>

          {/* Section 2: Finding Cards */}
          <section className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Diagnostic Endoscopy and Uterine Septum Resection
            </h2>
            <p className="text-gray-600">
              We specialize in resolving a wide range of intrauterine barriers:
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {findings.map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-blue-100 shadow-sm space-y-3">
                  <h4 className="font-bold text-[#2F5266] text-lg">{item.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed font-light">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3: Subheadings with keywords */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Tailored Outpatient Hysteroscopy Procedure
            </h2>
            <p className="text-gray-600">
              Diagnostic hysteroscopy is highly simple, often performed under mild sedation or local anesthesia, ensuring you feel completely relaxed. Most patients walk home within 2 hours of the check, reporting zero discomfort and requiring no down-time.
            </p>
            <p className="text-gray-600">
              When complex pelvic adhesions or extensive external growths are identified, we coordinate hysteroscopy with precise keyhole checks through <a href="/laparoscopy-surgery-in-lajpat-nagar-delhi" className="text-blue-600 hover:underline">laparoscopy surgery</a> to normalize your reproductive system comprehensively.
            </p>
          </section>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 space-y-8">
          <div className="bg-white border border-blue-100 shadow-lg rounded-3xl p-8 space-y-6">
            <h3 className="text-lg font-bold text-gray-900">Book Consult</h3>
            <p className="text-sm text-gray-600 font-light">
              Schedule a baseline diagnostic consult with our senior surgical panel to discuss your uterine health checks.
            </p>
            <a
              href="https://www.practo.com/delhi/clinic/pravi-global-ivf-polyclinic-lajpat-nagar-4/about"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 rounded-xl shadow-md transition-all text-sm"
            >
              Book via Practo
            </a>
            <a
              href="tel:+918009150040"
              className="block w-full text-center border-2 border-blue-100 text-blue-600 hover:bg-blue-50 font-bold py-4 rounded-xl transition-all text-sm"
            >
              Call Clinic
            </a>
          </div>

          <div className="bg-slate-900 text-white rounded-3xl p-8 shadow-md space-y-4">
            <h3 className="text-md font-bold text-blue-300">Lab Standards</h3>
            <ul className="space-y-3 text-xs text-gray-300 leading-relaxed font-light">
              <li>High-definition 4K endoscopic cameras.</li>
              <li>Outpatient daycare setup with rapid recovery.</li>
              <li>Complete legal and clinical compliance.</li>
              <li>Expert surgical specialists.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white py-16 border-t border-blue-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Hysteroscopy Treatment in Lajpat Nagar Delhi FAQ
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "What is the best phase of the menstrual cycle to schedule a hysteroscopy?",
                a: "The week immediately following your period is the optimal time. The uterine lining is at its thinnest during this phase, providing excellent visual clarity for the endoscope."
              },
              {
                q: "Is general anesthesia required for diagnostic hysteroscopy?",
                a: "For your absolute comfort, we perform most procedures under mild sedation or local block, ensuring you feel completely painless and relaxed."
              },
              {
                q: "Can hysteroscopy boost my IVF success rates?",
                a: "Yes, significantly. By removing uterine polyps, septums, or clearing intrauterine adhesions, it restores a healthy, receptive environment for embryo implantation."
              },
              {
                q: "What is the recovery time after the procedure?",
                a: "Hysteroscopy is a quick, same-day daycare procedure. Most patients return to light, normal activities within 24 hours of the check."
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
      <div className="bg-[#0E1F27] text-white py-16 text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          <h2 className="text-3xl font-bold text-blue-200">
            Absolute Cavity Clarity for a Reassuring Pregnancy Path
          </h2>
          <p className="text-sm text-blue-100/80 font-light">
            Empower your reproductive plans with absolute clinical safety and high-definition endoscope validation.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="https://www.practo.com/delhi/clinic/pravi-global-ivf-polyclinic-lajpat-nagar-4/about"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-600 font-bold px-8 py-4 rounded-xl transition-all shadow-md text-white text-sm"
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

export default HysteroscopyPage;
