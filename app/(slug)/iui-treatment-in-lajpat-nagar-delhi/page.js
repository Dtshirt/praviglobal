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
  ShieldAlert
} from 'lucide-react';

const IuiTreatmentPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const steps = [
    {
      num: "01",
      title: "Mild Stimulation",
      desc: "Day 2 or 3 of period: Gentle oral pills or minimal injections stimulate the growth of 1 to 2 healthy follicles."
    },
    {
      num: "02",
      title: "Ovulation Monitoring",
      desc: "Starting on Day 9: Serial transvaginal scans verify follicle size, confirming it reaches 18-20mm."
    },
    {
      num: "03",
      title: "The HCG Trigger",
      desc: "A highly timed trigger injection is given to simulate the natural LH surge, leading to egg release within 36 hours."
    },
    {
      num: "04",
      title: "Insemination Day",
      desc: "Sperm is washed, concentrated, and gently guided directly into the uterine cavity using a soft, flexible catheter."
    }
  ];

  return (
    <div className="min-h-screen bg-[#FBFDFD] text-gray-800 font-sans">
      {/* High-End Hero Section */}
      <div className="relative bg-gradient-to-br from-[#124E5B] via-[#1F7A8C] to-[#0A333B] text-white py-20 px-4 md:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.05),transparent)] pointer-events-none" />
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 space-y-6">
            <span className="inline-block bg-white/20 text-[#D5F2F6] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase">
              First-Line Fertility Treatment
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white">
              IUI Treatment in Lajpat Nagar Delhi
            </h1>
            <p className="text-lg text-blue-50 font-light max-w-xl">
              Intrauterine Insemination (IUI) is a highly simple, natural, and low-cost procedure. By placing concentrated, high-quality sperm directly into the uterus during ovulation, we bypass vaginal barriers.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="https://www.practo.com/delhi/clinic/pravi-global-ivf-polyclinic-lajpat-nagar-4/about"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-teal-400 hover:bg-teal-500 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
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
            <div className="flex items-center gap-6 text-sm text-[#D5F2F6]">
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
              <h3 className="text-lg font-bold text-teal-200">The IUI Advantage</h3>
              <ul className="space-y-4 text-sm text-blue-50 font-light">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-teal-300 rounded-full" />
                  Entirely outpatient, zero downtime
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-teal-300 rounded-full" />
                  Pain-free, similar to a regular Pap smear
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-teal-300 rounded-full" />
                  Highly affordable first-line solution
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Sections */}
      <div className="max-w-6xl mx-auto px-4 py-16 grid lg:grid-cols-12 gap-12">
        {/* Left Column */}
        <div className="lg:col-span-8 space-y-12">
          {/* Section 1: Intro */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 border-l-4 border-teal-600 pl-4">
              Preparing for Intrauterine Insemination
            </h2>
            <p className="text-gray-600">
              When couples experience delays in conceiving, they often worry that expensive, complex treatments like IVF represent their only hope. However, intrauterine insemination (IUI) offers a highly successful, non-invasive, and cost-effective first-line solution. At Pravi Global IVF, we provide comprehensive, personalized care for <strong>IUI Treatment in Lajpat Nagar Delhi</strong> to ensure you achieve excellent results.
            </p>
            <p className="text-gray-600">
              During a natural cycle, the majority of active sperm lose viability inside the acidic environment of the vagina. IUI bypasses this barrier completely by using a thin, highly gentle catheter to inject purified, active sperm directly into the uterine cavity, aligning perfectly with ovulation. This timed procedure increases the chance of fertilization dramatically. For detailed clinical videos and lab procedures, visit the <a href="https://www.youtube.com/@ivfcentre1Msubscriber" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Pravi IVF YouTube Channel</a>.
            </p>
          </section>

          {/* Section 2: Sperm Washing */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Sperm Washing and Preparation Standards
            </h2>
            <p className="text-gray-600">
              The quality of sperm preparation is a critical factor in IUI success. Raw semen contains seminal fluid, cellular debris, and chemical factors that can cause severe uterine contractions. Our advanced andrology laboratory performs precise "double density gradient" sperm washing. This isolates only the healthiest, most motile, and structurally perfect sperm cells, placing them in a nutrient-rich media to maximize success.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {steps.map((step, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-teal-100 shadow-sm space-y-2 relative overflow-hidden">
                  <span className="absolute right-4 top-4 text-4xl font-extrabold text-teal-50">{step.num}</span>
                  <h4 className="font-bold text-[#124E5B] text-lg">{step.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed font-light">{step.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3: Subheadings with keywords */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Tailored IUI Success Rates and Candidacy
            </h2>
            <p className="text-gray-600">
              IUI is highly recommended for specific fertility challenges. This includes cases of mild male factor concerns, unexplained delays, cervical mucus hostilities, or when coordinating cycles with donor semen. To ensure optimal success, at least one of the female partner's fallopian tubes must be completely free from blockages.
            </p>
            <p className="text-gray-600">
              To maximize success rates, we tightly coordinate IUI stimulation with our precise <a href="/follicular-monitoring-in-lajpat-nagar-delhi" className="text-blue-600 hover:underline">follicular monitoring</a> checks. This enables us to schedule the insemination down to the exact hour of egg release. For updates on clinical success rates and patient resources, follow the <a href="https://www.instagram.com/ivfpravi/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Pravi IVF Instagram Profile</a>.
            </p>
          </section>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 space-y-8">
          <div className="bg-white border border-teal-100 shadow-lg rounded-3xl p-8 space-y-6">
            <h3 className="text-lg font-bold text-gray-900">Book Consult</h3>
            <p className="text-sm text-gray-600 font-light">
              Map out your upcoming menstrual cycle with our senior andrology specialists to coordinate your IUI.
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
              Call Front Desk
            </a>
          </div>

          <div className="bg-[#FAFDFD] rounded-3xl p-8 border border-teal-100 space-y-4">
            <h3 className="text-md font-bold text-[#124E5B]">Clinical Protocols</h3>
            <ul className="space-y-3 text-xs text-gray-600 leading-relaxed font-light">
              <li>High-quality double gradient sperm washing.</li>
              <li>Strictly timed trigger-insemination mapping.</li>
              <li>Private collection chambers.</li>
              <li>All procedures performed by senior clinicians.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white py-16 border-t border-teal-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            IUI Treatment in Lajpat Nagar Delhi FAQ
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "Is intrauterine insemination (IUI) painful?",
                a: "No, it is highly comfortable. The insemination catheter is extremely thin and flexible, causing only mild local pressure similar to a routine cervical smear."
              },
              {
                q: "What is the average cost of IUI treatment in lajpat nagar delhi?",
                a: "IUI is highly affordable compared to advanced IVF cycles. Please contact our clinic directly for exact pricing of medications and lab washes."
              },
              {
                q: "Is bed rest required immediately after an IUI procedure?",
                a: "We ask patients to lie down comfortably for 10-15 minutes immediately after the procedure. Once completed, you can resume normal daily activities."
              },
              {
                q: "What are the key success parameters for a successful IUI?",
                a: "Optimal success is achieved when the processed sperm count exceeds 5-10 million progressive motile cells, and the female partner has healthy, open tubes."
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
      <div className="bg-[#0A333B] text-white py-16 text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          <h2 className="text-3xl font-bold text-teal-200">
            A Natural, Gentle First Step Toward Conception
          </h2>
          <p className="text-sm text-teal-100/80 font-light">
            Empower your parenthood goals with precise, science-backed IUI cycles.
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

export default IuiTreatmentPage;
