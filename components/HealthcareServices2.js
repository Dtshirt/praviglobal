'use client';
import React from 'react';
import { 
  Mars as Male, 
  Venus as Female, 
  Beaker, 
  FlaskRound, 
  Syringe, 
  Dna, 
  Baby, 
  Library, 
  Microscope, 
  Target 
} from 'lucide-react';
import Link from 'next/link';

export default function HealthcareServices2() {
  const services = [
    { id: 1, title: 'Male Fertility', icon: Male, url:'/male-infertility-treatment-in-lajpat-nagar-delhi/', color: 'bg-teal-50 text-teal-600' },
    { id: 2, title: 'Female Fertility', icon: Female, url:'/female-infertility-treatment-in-lajpat-nagar-delhi/', color: 'bg-pink-50 text-pink-600' },
    { id: 3, title: 'IVF', icon: FlaskRound, url:'/ivf-treatment-in-lajpat-nagar-delhi/', color: 'bg-blue-50 text-blue-600' },
    { id: 4, title: 'IUI', icon: Syringe, url:'/iui-treatment-in-lajpat-nagar-delhi/', color: 'bg-amber-50 text-amber-600' },
    { id: 5, title: 'ICSI', icon: Dna, url:'/icsi-treatment-in-lajpat-nagar-delhi/', color: 'bg-indigo-50 text-indigo-600' },
    { id: 6, title: 'PGS/PGD', icon: Beaker, url:'/pgs-pgd-testing-in-lajpat-nagar-delhi/', color: 'bg-rose-50 text-rose-600' },
    { id: 7, title: 'Surrogacy', icon: Baby, url:'/surrogacy-treatment-in-lajpat-nagar-delhi/', color: 'bg-purple-50 text-purple-600' },
    { id: 8, title: 'ART Bank', icon: Library, url:'/donor-services-in-lajpat-nagar-delhi/', color: 'bg-emerald-50 text-emerald-600' },
    { id: 9, title: 'PGT-A/M/SR', icon: Microscope, url:'/pgs-pgd-testing-in-lajpat-nagar-delhi/', color: 'bg-cyan-50 text-cyan-600' },
    { id: 10, title: 'Micro TESE', icon: Target, url:'/tesa-and-pesa-treatment-in-lajpat-nagar-delhi/', color: 'bg-orange-50 text-orange-600' }
  ];

  return (
    <div className="w-full bg-white py-2">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* GRID LAYOUT: 2 Rows of 5 items each (Matching User Image) */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-y-10 gap-x-4 md:gap-x-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link 
                href={service.url} 
                prefetch={true}
                key={service.id} 
                className="group flex flex-col items-center transition-all duration-300"
              >
                {/* SQUARE CONTAINER: Exactly like the image */}
                <div className={`
                  w-20 h-20 md:w-24 md:h-24 rounded-[28px] 
                  bg-white border border-gray-200 shadow-sm
                  flex items-center justify-center
                  transition-all duration-300
                  group-hover:shadow-lg group-hover:border-gray-300 group-hover:-translate-y-1
                `}>
                  {/* Detailed/Colorful Icon housing */}
                  <div className={`
                    w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center
                    ${service.color} transition-transform duration-300 group-hover:scale-110
                  `}>
                    <Icon strokeWidth={2} className="w-6 h-6 md:w-8 md:h-8" />
                  </div>
                </div>
                
                {/* TITLE BELOW THE SQUARE: Exactly like the image */}
                <span className="mt-3 text-[11px] md:text-[13px] font-bold text-gray-800 text-center leading-tight max-w-[90px] md:max-w-[110px] group-hover:text-teal-700 transition-colors">
                  {service.title}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}