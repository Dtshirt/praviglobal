'use client';
import React from 'react';
import { CheckCircle, Heart, Globe, Shield, Star, Users } from 'lucide-react';

const InternationalSeoContent = ({ country }) => {
  const formattedCountry = country.charAt(0).toUpperCase() + country.slice(1);

  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-blue">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">World-Class IVF Treatment in Delhi for {formattedCountry} Patients</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Embarking on a journey to parenthood is one of the most significant decisions a couple can make. For patients from {formattedCountry}, finding a trusted and high-quality fertility center is the first step toward realizing that dream. Pravi Global IVF, located in the heart of Delhi, India, has emerged as a premier destination for international patients seeking advanced reproductive technologies combined with compassionate care.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          As the <strong>best IVF center in Delhi</strong>, we understand the unique challenges faced by our international patients from {formattedCountry}. From navigating travel logistics to understanding complex medical protocols, our team is dedicated to providing a seamless, stress-free experience. We offer a comprehensive range of services, including In-Vitro Fertilization (IVF), Intracytoplasmic Sperm Injection (ICSI), Intrauterine Insemination (IUI), and specialized donor programs, all tailored to meet the specific needs of our global clientele.
        </p>

        <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Why Patients from {formattedCountry} Choose Pravi IVF Delhi</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          India has become a global hub for medical tourism, particularly for fertility treatments, due to its world-class infrastructure and highly skilled medical professionals. For patients in {formattedCountry}, Pravi IVF offers several distinct advantages:
        </p>
        <ul className="list-none space-y-4 mb-8">
          <li className="flex items-start">
            <CheckCircle className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
            <span><strong>Advanced Technology:</strong> Our clinic is equipped with the latest embryology lab technologies, ensuring the highest standards of embryo culture and selection.</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
            <span><strong>Expert Specialists:</strong> Led by Dr. Monica Sachdev, our team brings over 18 years of specialized experience in reproductive medicine.</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
            <span><strong>High Success Rates:</strong> Our consistent success rates, often exceeding international benchmarks, provide hope and confidence to couples from {formattedCountry}.</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
            <span><strong>Affordable Excellence:</strong> We provide premium fertility care at a fraction of the cost found in many Western countries, without compromising on quality or safety.</span>
          </li>
        </ul>

        <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Comprehensive International Patient Support</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          We believe that the medical treatment is only one part of your journey. For our patients traveling from {formattedCountry}, we provide an end-to-end support system. This includes assistance with medical visas, airport transfers, local accommodation near our Lajpat Nagar facility, and dedicated international coordinators who speak your language and understand your cultural needs.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          Before you even board your flight from {formattedCountry}, we offer detailed virtual consultations. Our specialists review your medical history, discuss potential treatment plans, and provide a clear roadmap of what to expect during your stay in Delhi. This transparency ensures that you arrive prepared and confident.
        </p>

        <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Tailored Fertility Solutions for {formattedCountry} Couples</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Every fertility journey is unique. Whether you require advanced genetic screening (PGS/PGD) to ensure a healthy pregnancy, or specialized treatments for male infertility like TESA/PESA, we have the expertise to help. Our <strong>IVF center in Lajpat Nagar</strong> is designed to be a "home away from home," where ethical practices and patient privacy are our top priorities.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          At Pravi IVF, we don't just treat infertility; we build families. We are proud to have helped thousands of couples from {formattedCountry} and across the globe experience the joy of holding their baby for the first time. Our commitment to clinical excellence, combined with our "patients-first" philosophy, makes us the trusted choice for {formattedCountry} patients seeking the best in fertility care.
        </p>
        
        <div className="bg-blue-50 p-8 rounded-2xl mt-12 border border-blue-100">
          <h4 className="text-xl font-bold text-blue-900 mb-4">Start Your Journey Today</h4>
          <p className="text-blue-800 mb-0">
            Don't let distance be a barrier to your dreams. Contact our international patient desk today to schedule your first virtual consultation and learn how we can help you build your family in Delhi.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InternationalSeoContent;
