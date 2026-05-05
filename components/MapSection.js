'use client';

import React from 'react';
import { MapPin, Navigation } from 'lucide-react';

const MapSection = () => {
  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-2xl mb-4">
            <MapPin className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Visit Our Clinic</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Conveniently located in the heart of South Delhi, Lajpat Nagar.
          </p>
        </div>

        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-teal-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.1892299611536!2d77.250023!3d28.5640799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3a8377e6ccb%3A0x40171f23c453fcc2!2sPravi%20Global%20IVF%20Polyclinic-%20Best%20IVF%20centre%20in%20Lajpat%20Nagar%20delhi!5e0!3m2!1sen!2sin!4v1777934677009!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Pravi Global IVF Location"
              className="grayscale-[20%] hover:grayscale-0 transition-all duration-700"
            ></iframe>
            
            {/* Floating Info Card on Map */}
            <div className="absolute bottom-8 left-8 right-8 md:right-auto md:w-96 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/20 z-10">
              <h3 className="font-bold text-gray-900 mb-2">Pravi Global IVF Polyclinic</h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                Building number 41, First Floor, Ring Rd, Block Q, Lajpat Nagar IV, New Delhi, 110024
              </p>
              <div className="flex gap-3">
                <a 
                  href="https://maps.app.goo.gl/79RLa9txkQWQ58Jg6" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors"
                >
                  <Navigation className="w-4 h-4" />
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
