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
  Sliders
} from 'lucide-react';

const TesaPesaPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const procedures = [
    {
      title: "Percutaneous Epididymal Sperm Aspiration (PESA)",
      desc: "For cases of obstructive azoospermia. A fine micro-needle is introduced gently into the epididymal tract under local block to harvest mature sperm directly."
    },
    {
      title: "Testicular Sperm Aspiration (TESA)",
      desc: "For cases of non-obstructive azoospermia. When epididymal blocks exist or sperm production is low, we retrieve sperm directly from the testicular tissue itself."
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAFBFB] text-gray-800 font-sans">
      {/* High-End Micro-surgical Hero Section */}
      <div className="relative bg-gradient-to-br from-[#123E4C] via-[#1E5D70] to-[#0A2630] text-white py-20 px-4 md:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.05),transparent)] pointer-events-none" />
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 space-y-6">
            <span className="inline-block bg-white/20 text-[#D5EBF6] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase">
              Minimally Invasive Andrology
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white">
              TESA & PESA Treatment in Lajpat Nagar Delhi
            </h1>
            <p className="text-lg text-teal-100 font-light max-w-xl">
              Restore your hope for a biological child. When raw semen reports show zero sperm, our advanced micro-aspiration procedures extract healthy sperm directly from the source.
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
                <Sliders className="w-6 h-6 text-teal-200" />
                <h3 className="text-lg font-bold text-white">Outpatient Precision</h3>
              </div>
              <p className="text-sm text-teal-100 font-light leading-relaxed">
                Both procedures are performed as quick, 15-minute daycare outpatient checks under gentle local block, ensuring you feel entirely painless and comfortable.
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
              Overcoming Obstructive and Non-Obstructive Azoospermia
            </h2>
            <p className="text-gray-600">
              When raw semen tests reveal azoospermia (zero sperm in the sample), many couples feel overwhelmed, assuming donor cycles represent their only option. However, in the majority of cases, sperm production inside the testicles remains completely normal, but physical blockages or lack of ejaculation channels prevent release. A specialized <strong>TESA & PESA Treatment in Lajpat Nagar Delhi</strong> at Pravi Global IVF bypasses these blocks, harvesting healthy sperm directly.
            </p>
            <p className="text-gray-600">
              By utilizing ultra-thin diagnostic micro-needles, our senior andrologists perform percutaneous epididymal or testicular aspirations with exceptional safety and zero incisions. This enables us to retrieve viable sperm and achieve biological parenthood. For detailed expert video guides outlining these clinical standards, visit the <a href="https://www.youtube.com/@ivfcentre1Msubscriber" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Pravi IVF YouTube Channel</a>.
            </p>
          </section>

          {/* Section 2: Comparison Cards */}
          <section className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Testicular Sperm Extraction (TESA) and Epididymal Aspiration (PESA)
            </h2>
            <p className="text-gray-600">
              Understanding our micro-surgical sperm retrieval options enables couples to make highly informed clinical decisions:
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {procedures.map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-teal-100 shadow-sm space-y-3">
                  <h4 className="font-bold text-[#1E5D70] text-lg">{item.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed font-light">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3: Subheadings with keywords */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Surgical Retrieval and Intracytoplasmic Sperm Injection (ICSI)
            </h2>
            <p className="text-gray-600">
              Sperm harvested via PESA or TESA are structurally perfect but lack progressive forward motility since they haven't traveled through the epididymal tract naturally. Consequently, they cannot fertilize eggs in a standard IVF culture dish.
            </p>
            <p className="text-gray-600">
              To overcome this, we coordinate all surgical retrievals with a precise, high-definition <a href="/icsi-treatment-in-lajpat-nagar-delhi" className="text-blue-600 hover:underline">ICSI treatment</a>. Our embryologists inject each recovered sperm cell directly into the mature egg cytoplasm, securing excellent fertilization rates. For updates on clinical success rates and patient reviews, follow the <a href="https://www.instagram.com/ivfpravi/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Pravi IVF Instagram Profile</a>.
            </p>
          </section>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 space-y-8">
          <div className="bg-white border border-teal-100 shadow-lg rounded-3xl p-8 space-y-6">
            <h3 className="text-lg font-bold text-gray-900">Book Consult</h3>
            <p className="text-sm text-gray-600 font-light">
              Schedule a baseline diagnostic consult with our senior andrology and embryology panel to discuss your sperm retrieval options.
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
              Call Andrology Lab
            </a>
          </div>

          <div className="bg-slate-900 text-white rounded-3xl p-8 shadow-md space-y-4">
            <h3 className="text-md font-bold text-teal-300">Lab Standards</h3>
            <ul className="space-y-3 text-xs text-gray-300 leading-relaxed font-light">
              <li>Computer-Assisted Semen Analysis (CASA) checking.</li>
              <li>Micro-surgical extraction tools.</li>
              <li>Complete genetic counseling support.</li>
              <li>Advanced cryopreservation for retrieved sperm.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white py-16 border-t border-teal-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            TESA & PESA Treatment in Lajpat Nagar Delhi FAQ
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "What is the primary difference between TESA and PESA?",
                a: "PESA harvests sperm from the epididymis (the sperm storage tract above the testicles), while TESA retrieves sperm directly from the testicular tissue itself, used when epididymal pathways are absent."
              },
              {
                q: "Is TESA & PESA treatment in lajpat nagar delhi painful?",
                a: "No. The procedure is performed under local block or light sedation, ensuring you feel absolutely zero pain or discomfort during the 15-minute diagnostic retrieval."
              },
              {
                q: "Can I return to work immediately after the check?",
                a: "We recommend resting comfortably for the remainder of the day. Most patients return to light desk jobs within 24 hours of the retrieval."
              },
              {
                q: "What are the fertilization success rates with TESA/PESA sperm?",
                a: "When combined with micromanipulated ICSI cycles, the fertilization and pregnancy success rates are equivalent to those utilizing ejaculated sperm."
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
      <div className="bg-[#0A2630] text-white py-16 text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          <h2 className="text-3xl font-bold text-teal-200">
            Absolute Clinical Precision for a Reassuring Pregnancy Path
          </h2>
          <p className="text-sm text-teal-100/80 font-light">
            Empower your reproductive plans with absolute clinical safety and micro-surgical andrology validation.
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

export default TesaPesaPage;
