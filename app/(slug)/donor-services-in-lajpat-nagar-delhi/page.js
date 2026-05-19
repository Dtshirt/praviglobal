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
  Users
} from 'lucide-react';

const DonorServicesPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const criteria = [
    {
      title: "Physiological Assessments",
      desc: "Complete testing for infectious diseases (HIV, Hepatitis B & C, Syphilis) and screening of ovarian reserves to ensure optimal gamete health."
    },
    {
      title: "Genetic Integrity Checks",
      desc: "Thorough karyotyping and carrier screens to ensure no hereditary chromosomal disorders or single-gene mutations are passed down."
    },
    {
      title: "Psychological clearances",
      desc: "Detailed evaluations by independent counselors to verify complete understanding and willing altruism from all donors."
    },
    {
      title: "Background Verification",
      desc: "Detailed family health history mapping across three generations to exclude early onset cardiac or oncological concerns."
    }
  ];

  return (
    <div className="min-h-screen bg-[#FBF9FB] text-gray-800 font-sans">
      {/* High-End Noble Hero Section */}
      <div className="relative bg-gradient-to-br from-[#3B2244] via-[#5C3A6B] to-[#24132B] text-white py-20 px-4 md:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.05),transparent)] pointer-events-none" />
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 space-y-6">
            <span className="inline-block bg-white/20 text-[#ECD5F6] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase">
              Ethical & Secure Gamete Bank
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white">
              Donor Services in Lajpat Nagar Delhi
            </h1>
            <p className="text-lg text-purple-100 font-light max-w-xl">
              Parenthood is defined by love, guidance, and legacy. When baseline checks indicate a decline in egg or sperm counts, our highly verified, altruistic donor services provide a secure, legal pathway to family success.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="https://share.google/1tIS2ANVnK0VHQa2V"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
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
            <div className="flex items-center gap-6 text-sm text-[#ECD5F6]">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-purple-300" />
                <span>Next to Rama Gallery, Lajpat Nagar</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-purple-300" />
                <span>Mon-Sat: 10 AM - 6 PM</span>
              </div>
            </div>
          </div>
          <div className="md:col-span-5 hidden md:block">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-2xl space-y-6">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-purple-200" />
                <h3 className="text-lg font-bold text-white">100% Legal Conformity</h3>
              </div>
              <p className="text-sm text-purple-100 font-light leading-relaxed">
                Our donor bank is registered under the Assisted Reproductive Technology Act, ensuring complete transparency and total legal peace of mind for intended parents.
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
            <h2 className="text-3xl font-bold text-gray-900 border-l-4 border-purple-600 pl-4">
              Altruistic Donor Egg and Sperm Screening Standards
            </h2>
            <p className="text-gray-600">
              When basic health tests show very low egg reserves (a low AMH score) or if there's a complete absence of sperm, using high-quality donor eggs or sperm is a highly reliable way to achieve your dream of having a baby. At Pravi Global IVF, we walk with you through every step of our <strong>Donor Services in Lajpat Nagar Delhi</strong>, making sure everything is handled with total privacy, warmth, and clinical precision.
            </p>
            <p className="text-gray-600">
              According to the latest Indian ART laws, all donor cycles are completely confidential and done on a kind, altruistic basis. We carry out detailed health and genetic tests on all donors so you can move forward with complete peace of mind. For updates and simple treatment tips, check out our <a href="https://www.instagram.com/ivfpravi/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Pravi IVF Instagram Profile</a>.
            </p>
          </section>

          {/* Section 2: Verification Steps */}
          <section className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Legal Compliance and Privacy in Assisted Reproduction
            </h2>
            <p className="text-gray-600">
              Every donor undergo a strict evaluation process before they are admitted into our clinical bank:
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {criteria.map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-purple-100 shadow-sm space-y-3">
                  <h4 className="font-bold text-[#5C3A6B] text-lg">{item.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed font-light">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3: Subheadings with keywords */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Tailored Gamete Selection and Cryopreservation
            </h2>
            <p className="text-gray-600">
              Our team takes great care in helping you select donors that closely match physical traits like blood groups, height, eye color, and complexion. Once selected, all samples are preserved using high-tech rapid freezing (vitrification) in liquid nitrogen, which keeps them perfectly safe and highly viable for your future cycle.
            </p>
            <p className="text-gray-600">
              To ensure 100% safety and make sure there's absolutely zero risk of sample mix-ups, we use double-check security systems through our <a href="/verification-services-in-lajpat-nagar-delhi" className="text-blue-600 hover:underline">verification services</a>. You can see how we protect your samples by watching our lab videos on the <a href="https://www.youtube.com/@ivfcentre1Msubscriber" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Pravi IVF YouTube Channel</a>.
            </p>
          </section>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 space-y-8">
          <div className="bg-white border border-purple-100 shadow-lg rounded-3xl p-8 space-y-6">
            <h3 className="text-lg font-bold text-gray-900">Book Consult</h3>
            <p className="text-sm text-gray-600 font-light">
              Schedule a baseline diagnostic consult with our legal and clinical panel to discuss our verified donor cycles.
            </p>
            <a
              href="https://wa.me/918009150040"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-purple-500 hover:bg-purple-600 text-white font-bold py-4 rounded-xl shadow-md transition-all text-sm"
            >
              Book via WhatsApp
            </a>
            <a
              href="tel:+918009150040"
              className="block w-full text-center border-2 border-purple-100 text-purple-600 hover:bg-purple-50 font-bold py-4 rounded-xl transition-all text-sm"
            >
              Call Gamete Bank
            </a>
          </div>

          <div className="bg-slate-900 text-white rounded-3xl p-8 shadow-md space-y-4">
            <h3 className="text-md font-bold text-purple-300">Bank Standards</h3>
            <ul className="space-y-3 text-xs text-gray-300 leading-relaxed font-light">
              <li>100% compliance with Assisted Reproductive Technology Act.</li>
              <li>Liquid nitrogen vapor vitrification tanks.</li>
              <li>Comprehensive physical and genetic screens.</li>
              <li>Smarter RFID double-witness tracking systems.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white py-16 border-t border-purple-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Donor Services in Lajpat Nagar Delhi FAQ
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "Is donor identity revealed to the intended parents?",
                a: "No. In accordance with the ART Act of India, donor cycles are conducted on an anonymous, confidential basis. Photos or identifying files are strictly protected."
              },
              {
                q: "What attributes are matched during selection?",
                a: "We carefully match major physiological attributes including blood groups, height, complexion, eye colors, and physical attributes to ensure close resemblance."
              },
              {
                q: "Are children born via donor services genetically matching the father?",
                a: "In donor egg cycles, the embryo is created using the father's sperm and a donor egg. Thus, the child is 100% genetically linked to the father, while the mother carries the pregnancy."
              },
              {
                q: "How are donors recruited and verified?",
                a: "Donors are registered only after completing thorough physiological health evaluations, genetic karyotyping, and legal registration under ART bank standards."
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
      <div className="bg-[#24132B] text-white py-16 text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          <h2 className="text-3xl font-bold text-purple-200">
            A Safe, Legal, and Reassuring Path to Family Success
          </h2>
          <p className="text-sm text-purple-100/80 font-light">
            Empower your parenthood dreams with absolute clinical safety and legal transparency.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="https://wa.me/918009150040"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-500 hover:bg-purple-600 font-bold px-8 py-4 rounded-xl transition-all shadow-md text-white text-sm"
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

export default DonorServicesPage;
