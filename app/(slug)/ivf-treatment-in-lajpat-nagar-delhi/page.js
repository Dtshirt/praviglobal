'use client';
import React, { useState } from 'react';
import {
  Award,
  Calendar,
  Phone,
  MapPin,
  Clock,
  Compass,
  CheckCircle2,
  TrendingUp,
  Activity,
  ChevronRight,
  ShieldCheck,
  Video
} from 'lucide-react';

const IvfTreatmentPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const technologies = [
    {
      title: "Blastocyst Culture (Day 5)",
      desc: "Culturing embryos for five days instead of three allows them to reach the advanced blastocyst stage. This enables highly natural embryo selection, raising success rates per transfer."
    },
    {
      title: "Laser-Assisted Hatching",
      desc: "Prior to transfer, an ultra-precise clinical laser gently thins the outer protective shell (zona pellucida) of the embryo, facilitating healthy implantation."
    },
    {
      title: "Intracytoplasmic Sperm Injection (ICSI)",
      desc: "For male-related motility challenges, a single premium sperm is carefully injected directly into each mature egg under HD micromanipulation."
    },
    {
      title: "Preimplantation Genetic Screening (PGS)",
      desc: "Embryos are checked for chromosomal balances, ensuring only genetically healthy embryos are prioritized for uterine transfer."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-gray-800 font-sans">
      {/* High-End Tech Hero Section */}
      <div className="relative bg-gradient-to-br from-[#0F1E36] via-[#1A365D] to-[#0A1424] text-white py-20 px-4 md:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.06),transparent)] pointer-events-none" />
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 space-y-6">
            <span className="inline-block bg-amber-400/20 text-amber-300 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase">
              Global Standards Embryology
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white">
              IVF Treatment in Lajpat Nagar Delhi
            </h1>
            <p className="text-lg text-slate-200 font-light max-w-xl">
              Advanced reproductive science meets compassionate patient care. Our state-of-the-art clean-room laboratories deliver the highest success rates for self-cycle and donor IVF.
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
            <div className="flex items-center gap-6 text-sm text-slate-300">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>Lajpat Nagar, South Delhi</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-amber-400" />
                <span>Mon-Sat: 10 AM - 6 PM</span>
              </div>
            </div>
          </div>
          <div className="md:col-span-5 hidden md:block">
            <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-2xl space-y-6">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-amber-300" />
                <h3 className="text-lg font-bold text-white">Clean Room Laboratory</h3>
              </div>
              <p className="text-sm text-slate-200 font-light leading-relaxed">
                Our lab features advanced HEPA filtration, active VOC absorbers, and gas-purified incubators, mimicking the exact physiological conditions of the maternal womb.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Narrative Area */}
      <div className="max-w-6xl mx-auto px-4 py-16 grid lg:grid-cols-12 gap-12">
        {/* Left main content column */}
        <div className="lg:col-span-8 space-y-12">
          {/* Section 1: Introduction */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 border-l-4 border-amber-400 pl-4">
              Modern IVF Success Rates and Technology
            </h2>
            <p className="text-gray-600">
              In Vitro Fertilization (IVF) has transitioned from a biological wonder into a highly standardized, highly successful medical procedure. For couples experiencing prolonged delays, physical tube damage, or severe male factor issues, IVF represents the gold standard pathway to biological parenthood. At Pravi Global IVF, we provide comprehensive, personalized care for <strong>IVF Treatment in Lajpat Nagar Delhi</strong> to ensure maximum safety and clinical transparency.
            </p>
            <p className="text-gray-600">
              Unlike clinics that apply rigid stimulations, we tailor our medication regimens to protect your baseline health. By customizing embryo growth conditions, we achieve optimal success rates while avoiding ovarian hyperstimulation (OHSS). For regular video tours of our advanced laboratory and clinical updates, visit the <a href="https://www.youtube.com/@ivfcentre1Msubscriber" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Pravi IVF YouTube Channel</a>.
            </p>
          </section>

          {/* Section 2: Technology Matrix */}
          <section className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Tailored In Vitro Fertilization Roadmap
            </h2>
            <p className="text-gray-600">
              Our advanced clinical embryology lab utilizes the latest global technologies to ensure high-standard embryo development:
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {technologies.map((tech, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-150 shadow-sm space-y-3">
                  <h4 className="font-bold text-[#1A365D] text-lg">{tech.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed font-light">{tech.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3: Subheadings with keywords */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Self Cycle vs Donor Egg IVF Options
            </h2>
            <p className="text-gray-600">
              Every fertility journey starts with a basic choice between a self-cycle (using your own eggs and sperm) or a donor-cycle (utilizing highly verified, healthy donor assets). Our clinical team provides transparent assessment using detailed AMH tests and antral follicle counts to guide your decisions honestly.
            </p>
            <p className="text-gray-600">
              If severe male motility issues are identified during stimulation, we seamlessly integrate advanced <a href="/icsi-treatment-in-lajpat-nagar-delhi" className="text-blue-600 hover:underline">ICSI treatment</a> to ensure fertilization. To view inspiring parent testimonials and success stories, follow the <a href="https://www.instagram.com/ivfpravi/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Pravi IVF Instagram Profile</a>.
            </p>
          </section>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 space-y-8">
          <div className="bg-white border border-slate-150 shadow-lg rounded-3xl p-8 space-y-6">
            <h3 className="text-lg font-bold text-gray-900">Visit Our Center</h3>
            <p className="text-sm text-gray-600 font-light">
              Schedule a baseline diagnostic consult with our senior embryology panel to explore your options.
            </p>
            <a
              href="https://share.google/1tIS2ANVnK0VHQa2V"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-[#1A365D] hover:bg-[#0F1E36] text-white font-bold py-4 rounded-xl shadow-md transition-all text-sm"
            >
              Get Directions
            </a>
            <a
              href="tel:+918009150040"
              className="block w-full text-center border-2 border-slate-100 text-[#1A365D] hover:bg-slate-50 font-bold py-4 rounded-xl transition-all text-sm"
            >
              Call Clinic
            </a>
          </div>

          <div className="bg-slate-900 text-white rounded-3xl p-8 shadow-md space-y-4">
            <h3 className="text-md font-bold text-amber-300">Lab Infrastructure</h3>
            <ul className="space-y-3 text-xs text-gray-300 leading-relaxed font-light">
              <li>MIRI multi-room incubators to avoid thermal shock.</li>
              <li>Smarter RFID witness tracking systems.</li>
              <li>Advanced clean room (Class 10,000 environment).</li>
              <li>Highly qualified senior embryologists.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white py-16 border-t border-slate-150">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            IVF Treatment in Lajpat Nagar Delhi FAQ
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "What is the average duration of one complete IVF cycle?",
                a: "A typical IVF cycle takes about 4 to 6 weeks. This includes 10-12 days of ovarian stimulation, egg retrieval, laboratory culture, and either a fresh transfer or cryopreservation for a later frozen embryo transfer."
              },
              {
                q: "Is IVF treatment in lajpat nagar delhi painful?",
                a: "The daily stimulation injections are subcutaneous and highly painless, utilizing fine pen-needles. Egg retrieval is performed under gentle general sedation, ensuring you feel no discomfort during the 15-minute procedure."
              },
              {
                q: "What factors influence IVF success rates?",
                a: "Success is primarily guided by maternal age, egg and sperm quality, endometrial lining thickness, and the technical expertise and clean room standards of the embryology laboratory."
              },
              {
                q: "Are the babies born via IVF healthy?",
                a: "Yes, absolutely. Millions of healthy children have been born worldwide via IVF, showing no difference in physiological or cognitive development compared to naturally conceived children."
              }
            ].map((faq, idx) => (
              <div key={idx} className="pb-6 border-b border-slate-150 last:border-0">
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
            Advanced Scientific Care for Your Family
          </h2>
          <p className="text-sm text-slate-300 font-light">
            Take a confident, scientifically validated step toward biological parenthood with Delhi's elite IVF team.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="https://share.google/1tIS2ANVnK0VHQa2V"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-400 hover:bg-amber-500 font-bold px-8 py-4 rounded-xl transition-all shadow-md text-slate-900 text-sm"
            >
              Consult Our Specialists
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

export default IvfTreatmentPage;