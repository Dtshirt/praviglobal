'use client'
import React, { useState } from 'react';
import { Check, Plane, Phone, MapPin, Calendar, Users, Award, Loader2, CheckCircle, Stethoscope, Clock, Shield, Video, UserCheck, Scale } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

import HealthcareServices from '@/components/HealthcareServices';
import HealthcareServices2 from '@/components/HealthcareServices2';

export default function OCIPage() {
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');
    setSubmitted(false);

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone,
      country: 'OCI - ' + e.target.country.value,
    };

    try {
      const response = await fetch('/api/consultation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitted(true);
        e.target.reset();
        setPhone('');
      } else {
        setErrorMsg(result.message || 'Something went wrong.');
      }
    } catch (error) {
      console.error('Form submit error:', error);
      setErrorMsg('Unable to submit. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const doctors = [
    {
      name: "Dr. Monica Sachdev",
      title: "Senior IVF Specialist",
      experience: "15+ years experience",
      role: "Medical Director",
      specialty: "IVF & Embryo Transfer Specialist",
      image: "/images/praviivf68adeb4f45d30_1756228431.png",
    },
    {
      name: "Dr. Aradhana Kalra",
      title: "Clinical Director & Senior IVF Consultant",
      experience: "15+ years experience",
      role: "Clinical Director",
      specialty: "IVF & Reproductive Medicine",
      image: "/images/Dr-Aradhana-Kalra.jpg",
    },
    {
      name: "Dr. Sakshi Tandon",
      title: "IVF & Fertility Specialist",
      experience: "10+ years experience",
      role: "IVF & Fertility Specialist",
      specialty: "OBS.Gynae, IVF Specialist",
      image: "/images/praviivf68adeb8d21097_1756228493.png",
    },
    {
      name: "Dr. Rit Shukla",
      title: "Chief Embryologist",
      experience: "18+ years experience",
      role: "Chief Embryologist",
      specialty: "Intracytoplasmic Sperm Injection (ICSI)",
      image: "/images/praviivf68adeb76c3b74_1756228470.png",
    }
  ];

  const treatments = [
    "IVF (In Vitro Fertilization)",
    "ICSI Treatment",
    "Egg Donation (as per legal guidelines)",
    "Male Infertility Treatment",
    "PCOS & Hormonal Disorder Management",
    "Recurrent Miscarriage Care",
    "Genetic Testing (PGT)"
  ];

  const ociSupport = [
    {
      icon: Video,
      title: "Online consultation before arrival",
      description: "Connect with our specialists via video call before you travel to India"
    },
    {
      icon: Stethoscope,
      title: "Complete case review & treatment planning",
      description: "Thorough medical evaluation and customized treatment strategy"
    },
    {
      icon: Clock,
      title: "Fast-track IVF cycles",
      description: "Optimized treatment cycles designed for efficient scheduling"
    },
    {
      icon: UserCheck,
      title: "Dedicated international patient coordinator",
      description: "A personal coordinator assigned throughout your entire journey"
    },
    {
      icon: Plane,
      title: "Assistance with travel & stay guidance",
      description: "Complete travel and accommodation assistance for your trip to India"
    },
    {
      icon: Shield,
      title: "Clear communication throughout treatment",
      description: "Transparent updates and guidance at every step of your treatment"
    }
  ];

  const journeySteps = [
    {
      number: "01",
      title: "Online Consultation & Medical Review",
      description: "Connect with our specialists and get your medical reports reviewed remotely"
    },
    {
      number: "02",
      title: "Personalized Treatment Plan",
      description: "Receive a customized treatment plan based on your medical condition"
    },
    {
      number: "03",
      title: "Travel to India (Flexible Scheduling)",
      description: "Plan your travel with flexible scheduling to suit your availability"
    },
    {
      number: "04",
      title: "IVF Cycle & Monitoring",
      description: "Begin your personalized IVF cycle with regular monitoring by our specialists"
    },
    {
      number: "05",
      title: "Embryo Transfer",
      description: "Precisely timed embryo transfer by our expert fertility specialists"
    },
    {
      number: "06",
      title: "Post-Treatment Follow-up (Remote Support)",
      description: "Continuous remote support and pregnancy guidance after you return home"
    }
  ];

  const legalGuidelines = [
    "Treatments are conducted as per Indian ART regulations",
    "Identity & OCI documentation required",
    "Certain treatments (like surrogacy/donation) depend on legal eligibility"
  ];

  const whyChoose = [
    "Globally trained IVF experts",
    "Advanced embryology lab",
    "Ethical & transparent treatment",
    "Personalized patient care",
    "Trusted by international and OCI patients"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/images/1.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="absolute inset-0 z-0" style={{ backgroundColor: '#005353cc' }} />

        {/* Decorative blurs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl opacity-20 z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-200 rounded-full filter blur-3xl opacity-20 z-10"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm mb-6">
              <Scale className="w-5 h-5 text-blue-500" />
              <span className="text-sm font-medium text-slate-700">OCI Patient Care</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Fertility Treatment in India for<br />
              <span className="text-blue-200">
                OCI Card Holders
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-white font-semibold mb-4">
              Advanced IVF Care for OCI Patients at Pravi Global IVF
            </p>
            <p className="text-base sm:text-lg text-teal-100 mb-4 leading-relaxed max-w-3xl mx-auto">
              Are you an OCI card holder planning fertility treatment in India?
              At Pravi Global IVF, we provide advanced fertility treatments with personalized care, designed for patients visiting India from abroad.
            </p>
            <p className="text-base sm:text-lg text-teal-200 mb-10 leading-relaxed max-w-3xl mx-auto">
              With global-standard IVF technology and experienced specialists, we ensure a safe, efficient, and result-oriented fertility journey during your stay in India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href='https://api.whatsapp.com/send/?phone=+918009150040&text=Hello%21+I+am+an+OCI+card+holder+and+would+like+to+know+more+about+your+fertility+services.&type=phone_number&app_absent=0'>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200 w-full sm:w-auto">
                  Start Free Consultation
                </button>
              </Link>
              <Link href="#ociSupport" className="bg-white hover:bg-slate-100 text-[#005353] px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200 text-center">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Sections */}
      <section className="py-1 px-2 sm:px-2 bg-gradient-to-r -mt-10 relative z-10">
        <HealthcareServices />
      </section>
      <section className="py-1 px-2 sm:px-2 bg-gradient-to-r relative z-10">
        <HealthcareServices2 />
      </section>

      {/* Meet Our IVF Experts */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center space-x-2 bg-rose-100 px-4 py-2 rounded-full mb-4">
              <Users className="w-5 h-5 text-rose-600" />
              <span className="text-sm font-semibold text-rose-700">Expert Team</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Meet Our IVF Experts
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
              Our team focuses on precision treatment planning + emotional support, ensuring the best possible outcomes.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {doctors.map((doctor, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                <div className="p-6 sm:p-8">
                  <div className="flex justify-center mb-6">
                    <div className="w-28 h-28 sm:w-32 sm:h-32 bg-gradient-to-br from-teal-400 to-blue-400 rounded-full flex items-center justify-center shadow-xl overflow-hidden">
                      <Image
                        src={doctor.image}
                        alt={doctor.name}
                        width={130}
                        height={130}
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold text-slate-800 mb-1 text-center">{doctor.name}</h4>
                  <p className="text-teal-600 font-medium mb-1 text-center text-sm sm:text-base">{doctor.title}</p>
                  <p className="text-slate-500 text-sm mb-4 text-center">({doctor.experience})</p>
                  <div className="space-y-3 border-t border-slate-200 pt-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600 font-medium">Role</span>
                      <span className="text-sm font-bold text-slate-800">{doctor.role}</span>
                    </div>
                    <div className="pt-2">
                      <div className="bg-gradient-to-r from-[#e6f4f4] to-[#cce9e9] rounded-lg p-3">
                        <p className="text-xs text-slate-700 font-medium text-center">{doctor.specialty}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatments Available for OCI Patients */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-teal-100 px-4 py-2 rounded-full mb-4">
              <Stethoscope className="w-5 h-5 text-teal-600" />
              <span className="text-sm font-semibold text-teal-700">Comprehensive Care</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Treatments Available for OCI Patients
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
              We offer complete fertility solutions
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-10">
            <div className="grid sm:grid-cols-2 gap-x-8 sm:gap-x-12 gap-y-4">
              {treatments.map((treatment, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Check className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium text-base sm:text-lg">{treatment}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-slate-100">
              <p className="text-slate-600 text-center text-base sm:text-lg">
                Each case is handled with a customized treatment approach based on your reports.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dedicated Support for OCI Patients */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8" id="ociSupport">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-100 px-4 py-2 rounded-full mb-4">
              <Shield className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-semibold text-blue-700">Dedicated OCI Support</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Dedicated Support for OCI Patients
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
              OCI patients often require efficient planning due to limited travel duration. We provide:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {ociSupport.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-100">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#005353] to-[#66bdbd] rounded-xl flex items-center justify-center mb-5 shadow-md">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <p className="text-lg text-slate-700 font-medium">
              We ensure minimum stay, maximum efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Step-by-Step Treatment Journey */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-teal-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm mb-4">
              <Calendar className="w-5 h-5 text-teal-600" />
              <span className="text-sm font-semibold text-slate-700">Your Journey</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Step-by-Step Treatment Journey for OCI Patients
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {journeySteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-200 h-full border border-slate-100">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#005353] to-[#66bdbd] rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                      <span className="text-white font-bold text-lg">{step.number}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-800 mb-2">{step.title}</h3>
                      <p className="text-sm sm:text-base text-slate-600">{step.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Guidelines for OCI Patients */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-amber-100 px-4 py-2 rounded-full mb-4">
              <Scale className="w-5 h-5 text-amber-600" />
              <span className="text-sm font-semibold text-amber-700">Legal Information</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Important Guidelines for OCI Patients
            </h2>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-10 border-l-4 border-amber-400">
            <div className="space-y-4">
              {legalGuidelines.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Check className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium text-base sm:text-lg">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-slate-100">
              <p className="text-slate-600 text-base sm:text-lg">
                Our team guides you through all legal and medical requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why OCI Patients Choose Pravi Global IVF */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#005353] to-[#003d3d]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Why OCI Patients Choose Pravi Global IVF
            </h2>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-10 border border-white/20">
            <div className="space-y-4">
              {whyChoose.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-blue-300 flex-shrink-0 mt-0.5" />
                  <span className="text-white font-medium text-base sm:text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Form */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-[#005353] to-[#004242] rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 p-6 sm:p-8 lg:p-12">
              <div className="text-white">
                <div className="inline-block bg-white/20 rounded-full px-4 py-1 text-sm font-medium mb-4 text-white">
                  Book Your Consultation
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">Planning fertility treatment in India?</h3>
                <p className="text-teal-100 text-base sm:text-lg mb-6">
                  Start your journey with expert guidance as an OCI card holder.
                </p>
                <p className="text-teal-100 text-base sm:text-lg mb-8">
                  Book your online consultation today and take the first step towards parenthood.
                </p>

                {/* Clinic Details */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <h4 className="text-xl font-bold text-white mb-4">Clinic Details</h4>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Award className="w-5 h-5 text-blue-300 flex-shrink-0 mt-0.5" />
                      <span className="text-teal-100">Pravi Global IVF</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-blue-300 flex-shrink-0 mt-0.5" />
                      <span className="text-teal-100">Lajpat Nagar, New Delhi, India</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Phone className="w-5 h-5 text-blue-300 flex-shrink-0 mt-0.5" />
                      <a href="tel:+918009150040" className="text-teal-100 hover:text-white transition-colors">+91 8009150040</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl">
                <h4 className="text-xl sm:text-2xl font-bold text-slate-800 mb-6">Book Your Session</h4>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none text-base"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none text-base"
                  />
                  <PhoneInput
                    country={'in'}
                    value={phone}
                    onChange={setPhone}
                    enableSearch={true}
                    preferredCountries={['in', 'us', 'gb', 'ca', 'au', 'ae', 'sg']}
                    inputClass="!w-full !h-12 !text-base !rounded-lg !border !border-slate-300 !pl-12"
                    buttonClass="!rounded-l-lg"
                    dropdownClass="!text-base"
                    placeholder="Enter phone number"
                  />
                  <select
                    name="country"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none text-base"
                  >
                    <option value="">Country of Residence</option>
                    <option value="united-states">United States</option>
                    <option value="united-kingdom">United Kingdom</option>
                    <option value="canada">Canada</option>
                    <option value="australia">Australia</option>
                    <option value="uae">United Arab Emirates</option>
                    <option value="singapore">Singapore</option>
                    <option value="germany">Germany</option>
                    <option value="new-zealand">New Zealand</option>
                    <option value="other">Other</option>
                  </select>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      "Schedule Consultation"
                    )}
                  </button>

                  {submitted && (
                    <div className="mt-4 flex items-center justify-center text-green-600 font-medium gap-2">
                      <CheckCircle className="w-5 h-5" /> Consultation booked successfully!
                    </div>
                  )}

                  {errorMsg && (
                    <div className="mt-4 text-center text-red-500 font-medium">
                      {errorMsg}
                    </div>
                  )}

                  <p className="text-xs text-slate-500 mt-4 text-center">
                    Free consultation • No obligation • 100% confidential
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-500 to-teal-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Book Your Consultation
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-4 max-w-2xl mx-auto">
            Planning fertility treatment in India as an OCI card holder?<br />
            Start your journey with expert guidance.
          </p>
          <p className="text-base sm:text-lg text-blue-200 mb-8 max-w-2xl mx-auto">
            Book your online consultation today and take the first step towards parenthood.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book-appointment"
              className="bg-white text-teal-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-all hover:scale-105 inline-flex items-center justify-center text-lg font-semibold shadow-lg"
            >
              <Calendar className="mr-2 h-6 w-6" />
              Book Appointment
            </Link>
            <a
              href="tel:+918009150040"
              className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-teal-600 transition-all hover:scale-105 inline-flex items-center justify-center text-lg font-semibold"
            >
              <Phone className="mr-2 h-6 w-6" />
              +91 8009150040
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
