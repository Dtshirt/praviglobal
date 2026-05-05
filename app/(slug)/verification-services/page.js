'use client';
import React, { useState } from 'react';
import {
  Shield,
  Award,
  FileCheck2,
  ClipboardCheck,
  Clock,
  Phone,
  Calendar,
  MapPin,
  Star,
  Globe,
  CheckCircle2,
  ChevronRight,
  Users,
  Heart
} from 'lucide-react';

const VerificationServicesPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden" style={{ backgroundImage: 'url("/images/ivf-treatment.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className='w-full h-full top-0 absolute z-10 bg-gradient-to-r from-blue-600/70 to-blue-800/70' />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Award className="w-8 h-8 text-yellow-400" />
                <span className="text-blue-100 font-semibold">Trusted Legal & Medical Verification</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Verification Services at Pravi Global IVF Delhi
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-blue-100">
                Ensuring Transparency, Legality & Patient Safety
              </h2>
              <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                Our Verification Services ensure that every fertility treatment, donor match, and surrogacy arrangement at Pravi Global IVF Delhi adheres to legal, ethical, and medical standards.
                We prioritize transparency, confidentiality, and compliance to protect every parent’s journey.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Book Free Consultation
                </button>
                <a href="tel:+918009150040" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  +91 800 915 0040
                </a>
              </div>
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Lajpat Nagar, Delhi</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>Mon-Sat: 10 AM - 6 PM</span>
                </div>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                      <Star className="w-8 h-8 text-blue-900" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold">18+</div>
                      <div className="text-blue-100">Years of Experience</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center">
                      <Shield className="w-8 h-8 text-blue-900" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold">100%</div>
                      <div className="text-blue-100">Legal Compliance</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-pink-400 rounded-full flex items-center justify-center">
                      <Users className="w-8 h-8 text-blue-900" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold">Trusted</div>
                      <div className="text-blue-100">By 5000+ Couples</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Why Choose Verification Services at Pravi Global IVF?
          </h2>
          <p className="text-lg text-gray-600">
            Ethical, transparent, and legally verified fertility care you can trust
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { icon: FileCheck2, title: 'Legal Compliance', desc: 'All donor & surrogacy processes verified under ICMR guidelines' },
            { icon: Shield, title: 'Confidential & Secure', desc: 'All patient records and genetic data are protected' },
            { icon: ClipboardCheck, title: 'Medical Screening', desc: 'Comprehensive tests for donors, surrogates, and recipients' },
            { icon: Heart, title: 'Transparent Process', desc: 'Full documentation and consent procedures followed' }
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Linear Content Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden p-8 md:p-12 space-y-16">
          {/* Deep SEO Expert Content Section */}
          <section className="prose prose-lg max-w-none bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Securing Your Legacy: The Importance of Verification in Fertility</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              In the world of assisted reproduction, trust is the most valuable currency. When you embark on a journey that involves donors, surrogates, or complex medical protocols, you need absolute certainty that every step is legally sound and medically verified. At Pravi IVF, our verification services are designed to provide that certainty. We act as your protective shield, ensuring that every biological and legal connection is scrutinized with the highest level of professional rigor.
            </p>
            
            <h3 className="text-2xl font-bold text-blue-700 mb-4">The Legal Pillar: Compliance with the ART Act</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              The Indian legal landscape for fertility treatments has evolved rapidly with the introduction of the Assisted Reproductive Technology (Regulation) Act. This act provides a robust framework to protect the rights of intended parents, donors, and surrogates alike. Our legal verification team at Lajpat Nagar is dedicated to ensuring that your treatment plan is 100% compliant with these regulations. From the drafting of ironclad donor agreements to the verification of surrogacy eligibility, we ensure that your parental rights are secured from the very beginning.
            </p>

            <h3 className="text-2xl font-bold text-blue-700 mb-4">Medical Integrity: Beyond Basic Screening</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Medical verification at Pravi IVF goes far beyond simple blood tests. We conduct deep-dive medical audits of every donor and surrogate in our program. This includes comprehensive infectious disease screening, detailed genetic mapping, and psychological evaluation. We believe that the health of your future child begins with the integrity of the biological materials used. By verifying every medical data point, we significantly reduce the risk of hereditary conditions and ensure that your treatment is built on a foundation of total transparency and safety.
            </p>

            <h3 className="text-2xl font-bold text-blue-700 mb-4">Identity and Background: Total Transparency</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              In an era of global fertility care, verifying the identity and background of all parties involved is critical. We utilize advanced verification tools to confirm the identity, educational background, and health history of every donor. This ensures that the information you receive is 100% accurate and that there are no hidden surprises. For intended parents, this level of transparency is essential for peace of mind, allowing them to focus on the joy of their upcoming parenthood rather than the logistics of verification.
            </p>

            <h3 className="text-2xl font-bold text-blue-700 mb-4">Genetic Verification: The Science of Compatibility</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Genetic verification is a specialized area of our services. We offer advanced carrier screening to ensure that donors and intended parents are genetically compatible, minimizing the risk of passing on recessive disorders. This proactive scientific approach is part of our commitment to "smart fertility." By verifying the genetic health of the biological materials before treatment begins, we provide our patients with the highest possible chance of a healthy, successful outcome.
            </p>

            <h3 className="text-2xl font-bold text-blue-700 mb-4">E-E-A-T: Trusting the Experts at Pravi IVF</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              When it comes to verification, experience and authority are non-negotiable. Our verification team, led by senior medical and legal specialists, has over 18 years of experience in managing the complexities of assisted reproduction. Our authority is built on thousands of successfully verified cases and a reputation for absolute ethical integrity. We don't just follow the rules; we set the standard for transparency and safety in North India. Our reputation as the most trusted verification service provider in Delhi is a testament to our dedication to our patients' security.
            </p>

            <h3 className="text-2xl font-bold text-blue-700 mb-4">Confidentiality: Protecting Your Privacy</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              We understand that your fertility journey is deeply personal. Our verification process is handled with the highest level of confidentiality. Every piece of data, from medical records to legal agreements, is stored securely and accessible only to authorized personnel. We believe that protection of your privacy is an essential part of our duty of care. You can move forward with total confidence, knowing that your personal information and your family's future are protected by the most advanced security protocols.
            </p>

            <h3 className="text-2xl font-bold text-blue-700 mb-4">Your Future, Our Shield</h3>
            <p className="text-gray-700 leading-relaxed">
              Choosing verification services at Pravi IVF means choosing a partner who values your legacy as much as you do. We combine world-class legal and medical expertise with a deeply human-centered approach, ensuring that your journey is defined by transparency, safety, and clinical excellence. From your initial consultation to the final legal sign-off, we are with you every step of the way, providing the expertise and the protection you need to make your dream of parenthood a safe and joyful reality.
            </p>
          </section>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Are Verification Services?
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Verification Services at Pravi Global IVF Delhi ensure that every fertility treatment follows proper legal, medical, and ethical guidelines.
              These services safeguard the rights of intended parents, donors, and surrogates while maintaining complete confidentiality and compliance.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our verification protocols align with the Indian Council of Medical Research (ICMR) and ART Regulation Act, ensuring ethical medical practice in all reproductive procedures.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Types of Verification We Provide</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <ul className="space-y-4 text-gray-700 leading-relaxed">
                  <li className="flex items-start gap-3"><CheckCircle2 className="text-green-600 flex-shrink-0 mt-1" /> <span><strong>Identity Verification</strong> – Aadhaar, passport, or government ID verification for all parties involved in the treatment cycle.</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="text-green-600 flex-shrink-0 mt-1" /> <span><strong>Medical Verification</strong> – Thorough health, fertility, and infectious disease screening for patients, donors, and surrogates.</span></li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <ul className="space-y-4 text-gray-700 leading-relaxed">
                  <li className="flex items-start gap-3"><CheckCircle2 className="text-green-600 flex-shrink-0 mt-1" /> <span><strong>Legal Verification</strong> – Detailed consent forms, surrogacy agreements, and rigorous compliance checks under the latest ART laws.</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="text-green-600 flex-shrink-0 mt-1" /> <span><strong>Genetic Verification</strong> – DNA and blood group matching where applicable to ensure biological compatibility and peace of mind.</span></li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Our Comprehensive Verification Process</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: '01', title: 'Document Collection', desc: 'Collection of all required identification, medical history, and formal consent documents.' },
                { step: '02', title: 'Medical Screening', desc: 'Full physical, hormonal, and infectious disease testing for all donors and surrogates.' },
                { step: '03', title: 'Legal Review', desc: 'All contracts and consents are reviewed by specialized legal advisors for full compliance.' },
                { step: '04', title: 'Final Approval', desc: 'A senior doctor and legal representative verify and approve the case before treatment.' }
              ].map((step, idx) => (
                <div key={idx} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-all">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-lg mb-4 shadow-lg">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              Common Questions About Verification
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { q: 'Why is verification important?', a: 'It ensures the legality, safety, and ethical integrity of all medical and contractual procedures involved in fertility treatments.' },
                { q: 'Is my information kept secure?', a: 'Yes. All records and data are stored securely and accessible only to authorized medical and legal personnel.' },
                { q: 'Are your services ART Act compliant?', a: 'Yes. Pravi Global IVF strictly follows all ART Act and ICMR guidelines for ethical fertility practices in India.' },
                { q: 'Do donors undergo background checks?', a: 'Yes. We perform thorough identity, health, and psychological screenings to ensure safety and transparency for all parties.' }
              ].map((faq, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-start gap-2">
                    <ChevronRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>{faq.q}</span>
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Transparent & Verified Fertility Care in Delhi
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Trust Pravi Global IVF Delhi for fully verified, ethical, and compliant fertility treatments that protect your rights and ensure safety at every step.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a
              href="tel:+918009150040"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl flex items-center gap-2 text-lg"
            >
              <Phone className="w-6 h-6" />
              Call +91 800 915 0040
            </a>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-all flex items-center gap-2 text-lg">
              <Calendar className="w-6 h-6" />
              Book Free Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerificationServicesPage;
