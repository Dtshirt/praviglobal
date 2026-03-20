'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

export default function DoctorPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup after 5 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000); 
    
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl relative animate-slide-up flex flex-col md:flex-row overflow-hidden border border-slate-100">
        
        {/* Close Button */}
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 bg-black/5 hover:bg-black/10 text-slate-500 hover:text-slate-800 p-2 rounded-full transition-colors backdrop-blur-sm"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image Section */}
        <div className="w-full md:w-5/12 bg-gradient-to-b from-teal-50 to-teal-100 flex items-end justify-center pt-8 px-4 relative min-h-[300px] md:min-h-full">
          {/* Fading Circle Background Effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-teal-200/50 rounded-full blur-3xl" />
          
          <div className="relative w-full h-[300px] md:h-[450px] z-10">
            <Image 
              src="/images/popup.png" 
              alt="Dr. Monica Sachdev" 
              fill
              className="object-contain object-bottom"
              priority
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8 md:p-12 md:w-7/12 flex flex-col justify-center text-center md:text-left bg-white">
          <div className="inline-block bg-teal-100 text-teal-800 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase mb-6 w-fit mx-auto md:mx-0 shadow-sm">
            Consultation Open
          </div>
          
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 leading-snug">
            Book Appointment with a fertility expert <span className="text-teal-600 block mt-2">Dr. Monica Sachdev</span>
          </h2>
          
          <p className="text-slate-600 mb-10 text-lg leading-relaxed">
            Take the first step towards realizing your dream of parenthood. Connect instantly with our dedicated team to explore your personalized treatment path.
          </p>

          <a 
            href="https://api.whatsapp.com/send/?phone=8009150040&text=Hello%21+I+would+like+to+book+an+appointment+with+Dr.+Monica+Sachdev.&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebd57] text-white py-4 px-8 rounded-full font-bold text-lg transition-transform hover:scale-105 shadow-[0_8px_30px_rgba(37,211,102,0.3)] w-full md:w-fit"
            onClick={handleClose}
          >
            {/* WhatsApp Icon */}
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.418-.1.824z"/>
            </svg>
            WhatsApp Now
          </a>
        </div>

      </div>
    </div>
  );
}
