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

const PgsPgdPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const panels = [
    {
      title: "PGT-A (Aneuploidy Screening)",
      desc: "Checks for abnormal chromosome counts (like Down Syndrome or Trisomies). This is highly recommended for advanced maternal age or recurrent miscarriage cases."
    },
    {
      title: "PGT-M (Monogenic/Single Gene Screening)",
      desc: "Targets specific inherited single-gene conditions such as Thalassemia, Cystic Fibrosis, or Hemophilia, preventing hereditary transfer."
    },
    {
      title: "PGT-SR (Structural Rearrangements)",
      desc: "Assesses chromosomal translocations or inversions, ensuring normal structural chromosome karyotypes in selected embryos."
    }
  ];

  return (
    <div className="min-h-screen bg-[#F9FAF9] text-gray-800 font-sans">
      {/* High-End Genetic Testing Hero Section */}
      <div className="relative bg-gradient-to-br from-[#121A30] via-[#242F54] to-[#0A0E1A] text-white py-20 px-4 md:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.05),transparent)] pointer-events-none" />
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 space-y-6">
            <span className="inline-block bg-white/20 text-[#D5EBF6] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase">
              Preimplantation Genetic Testing
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white">
              PGS-PGD Testing in Lajpat Nagar Delhi
            </h1>
            <p className="text-lg text-blue-100 font-light max-w-xl">
              Prevent chromosomal imbalances and hereditary disorders before transfer. Our advanced Next-Generation Sequencing (NGS) screens embryos with absolute scientific precision.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="https://share.google/1tIS2ANVnK0VHQa2V"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
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
                <Dna className="w-6 h-6 text-blue-200" />
                <h3 className="text-lg font-bold text-white">Next-Gen Sequencing</h3>
              </div>
              <p className="text-sm text-blue-100 font-light leading-relaxed">
                We perform high-definition embryo biopsying at the day-5 blastocyst stage using advanced micro-lasers, delivering 99.9% accuracy without harming the inner cell mass.
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
              Preventing Hereditary Genetic Disorders with PGT-M
            </h2>
            <p className="text-gray-600">
              When couples experience recurrent miscarriages or are carriers of serious genetic conditions, IVF cycles can carry emotional risks. Preimplantation Genetic Screening and Diagnosis (PGS/PGD) represents the most advanced genetic screening technology available. At Pravi Global IVF, we provide comprehensive, personalized care for <strong>PGS-PGD Testing in Lajpat Nagar Delhi</strong> to ensure only chromosomal-normal, healthy embryos are prioritized for transfer.
            </p>
            <p className="text-gray-600">
              By utilizing next-generation sequencing (NGS) in our specialized genetic labs, we analyze 24 critical chromosomal pairs. This molecular level check significantly reduces miscarriage rates, boosts implantation success, and eliminates the passing down of single-gene hereditary disorders. For detailed expert video guides outlining these clinical standards, visit the <a href="https://www.youtube.com/@ivfcentre1Msubscriber" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Pravi IVF YouTube Channel</a>.
            </p>
          </section>

          {/* Section 2: Modality Cards */}
          <section className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Preimplantation Genetic Testing for Chromosomal Aneuploidy (PGT-A)
            </h2>
            <p className="text-gray-600">
              Understanding our specialized genetic screening options enables couples to make highly informed clinical decisions:
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              {panels.map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-blue-100 shadow-sm space-y-3">
                  <h4 className="font-bold text-[#242F54] text-lg">{item.title}</h4>
                  <p className="text-xs text-gray-600 leading-relaxed font-light">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3: Subheadings with keywords */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Tailored Embryo Biopsy and NGS Lab Stage Protocols
            </h2>
            <p className="text-gray-600">
              To perform genetic screening safely, we culture embryos to the advanced Day 5 blastocyst stage. Culturing to this stage allows our senior embryologists to harvest 3 to 5 cells from the trophectoderm (which later forms the placenta) using an ultra-precise micro-laser, ensuring the inner egg mass remains untouched.
            </p>
            <p className="text-gray-600">
              The biopsied embryos are safely vitrified (flash-frozen) while our geneticist screens the genetic files. The chromosomal-normal embryos are subsequently mapped for transfer during a precise <a href="/ivf-treatment-in-lajpat-nagar-delhi" className="text-blue-600 hover:underline">IVF treatment</a> cycle.
            </p>
          </section>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 space-y-8">
          <div className="bg-white border border-blue-100 shadow-lg rounded-3xl p-8 space-y-6">
            <h3 className="text-lg font-bold text-gray-900">Book Consult</h3>
            <p className="text-sm text-gray-600 font-light">
              Schedule a baseline diagnostic consult with our genetic and clinical embryology panel to discuss your screening options.
            </p>
            <a
              href="https://share.google/1tIS2ANVnK0VHQa2V"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 rounded-xl shadow-md transition-all text-sm"
            >
              Book via Google
            </a>
            <a
              href="tel:+918009150040"
              className="block w-full text-center border-2 border-blue-100 text-blue-600 hover:bg-blue-50 font-bold py-4 rounded-xl transition-all text-sm"
            >
              Call Genetics Lab
            </a>
          </div>

          <div className="bg-slate-900 text-white rounded-3xl p-8 shadow-md space-y-4">
            <h3 className="text-md font-bold text-blue-300">Lab Standards</h3>
            <ul className="space-y-3 text-xs text-gray-300 leading-relaxed font-light">
              <li>Next-Generation Sequencing (NGS) platforms.</li>
              <li>Micro-laser biopsying under absolute stability.</li>
              <li>Complete genetic counseling support.</li>
              <li>Day 5 blastocyst culture standard.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white py-16 border-t border-blue-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            PGS-PGD Testing in Lajpat Nagar Delhi FAQ
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "What is the primary difference between PGS and PGD?",
                a: "PGS (now PGT-A) screens for chromosomal count errors such as Down Syndrome. PGD (now PGT-M) diagnoses specific inherited genetic disorders such as Thalassemia or Cystic Fibrosis when parents are known carriers."
              },
              {
                q: "What is the cost of PGS-PGD testing in lajpat nagar delhi?",
                a: "Genetic screening involves highly advanced molecular NGS platforms and embryology biopsying, priced per embryo. Please contact our front desk directly for detailed pricing sheets."
              },
              {
                q: "Can embryo biopsying harm the developing embryo?",
                a: "Biopsying is performed strictly at the blastocyst stage (Day 5), harvesting only trophectoderm cells (placenta cells). The inner cell mass remains untouched, ensuring zero harm to developmental potential."
              },
              {
                q: "Are the success rates of IVF higher with PGS-PGD screening?",
                a: "Yes, significantly. By ensuring only genetically normal and healthy embryos are prioritized for transfer, it cuts miscarriage rates and raises success rates per transfer."
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
      <div className="bg-[#0A0E1A] text-white py-16 text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          <h2 className="text-3xl font-bold text-blue-200">
            Absolute Genetic Verification for a Healthy Family Future
          </h2>
          <p className="text-sm text-blue-100/80 font-light">
            Empower your reproductive plans with absolute clinical safety and next-generation sequencing validation.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="https://share.google/1tIS2ANVnK0VHQa2V"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-600 font-bold px-8 py-4 rounded-xl transition-all shadow-md text-white text-sm"
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

export default PgsPgdPage;
