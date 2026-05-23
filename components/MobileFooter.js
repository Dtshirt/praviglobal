'use client';
import { useState } from 'react';
import { Phone, Mail, MessageCircle } from 'lucide-react';
import { hospitalInfo } from '@/lib/data';

export default function MobileFooter() {
  const [showModal, setShowModal] = useState(false);
  const [leadForm, setLeadForm] = useState({ name: '', phone: '', email: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const whatsappMsg = "Hello Pravi Global IVF! 🌸 I am visiting your website and would like to book a free consultation for fertility/IVF guidance. Please connect me with a specialist. Thank you!";
  const whatsappUrl = `https://api.whatsapp.com/send/?phone=+918009150040&text=${encodeURIComponent(whatsappMsg)}&type=phone_number&app_absent=0`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const response = await fetch('/api/consultation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: leadForm.name,
          email: leadForm.email,
          phone: leadForm.phone,
          country: "Mobile Sticky Footer Popup Modal",
          message: leadForm.message || "Quick Inquiry via Mobile Sticky Footer Modal"
        })
      });

      if (response.ok) {
        setSuccess(true);
        setLeadForm({ name: '', phone: '', email: '', message: '' });
      } else {
        alert("Something went wrong. Please try again or call us directly.");
      }
    } catch (err) {
      console.error(err);
      alert("Failed to submit inquiry. Please check your connection.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <div className="md:hidden fixed bottom-4 left-4 right-4 z-[100] animate-slide-up">
        <div className="bg-[#001c1c]/90 backdrop-blur-lg border border-white/10 shadow-[0_10px_35px_rgba(0,0,0,0.35)] rounded-full p-2 flex justify-between items-center gap-2">
          <a
            href={`tel:${hospitalInfo.phone}`}
            className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-full py-3 px-1 shadow-[0_4px_12px_rgba(245,158,11,0.25)] hover:from-amber-600 hover:to-amber-700 active:scale-95 transition-all text-xs font-bold tracking-wide"
          >
            <Phone className="w-4 h-4" />
            <span>Call Us</span>
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-full py-3 px-1 shadow-[0_4px_12px_rgba(16,185,129,0.25)] hover:from-emerald-600 hover:to-emerald-700 active:scale-95 transition-all text-xs font-bold tracking-wide"
          >
            <MessageCircle className="w-4 h-4 fill-white/10" />
            <span>WhatsApp</span>
          </a>
          <button
            onClick={() => setShowModal(true)}
            className="flex-1 flex items-center justify-center gap-2 bg-white/15 border border-white/10 hover:bg-white/25 active:scale-95 text-white rounded-full py-3 px-1 transition-all text-xs font-bold tracking-wide cursor-pointer"
          >
            <Mail className="w-4 h-4" />
            <span>Enquire</span>
          </button>
        </div>
      </div>

      {/* 🌸 LUXURY GLOW MODAL FOR MOBILE FOOTER INQUIRY */}
      {showModal && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md transition-all duration-300">
          <div className="relative w-full max-w-md bg-white border border-teal-50 rounded-[2rem] p-6 sm:p-8 shadow-[0_25px_50px_-12px_rgba(0,90,90,0.25)] space-y-6 overflow-y-auto max-h-[90vh] animate-slide-up">
            
            {/* Close Button */}
            <button
              onClick={() => {
                setShowModal(false);
                setSuccess(false);
              }}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-teal-50 text-slate-500 hover:text-teal-600 flex items-center justify-center transition-all font-bold text-xs"
            >
              ✕
            </button>

            {success ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 border border-emerald-250 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm animate-bounce text-xl font-bold">
                  ✓
                </div>
                <h3 className="text-2xl font-black text-slate-900">Request Received!</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Thank you for reaching out to Pravi Global IVF. Our senior fertility consultant will call you back within 2 hours.
                </p>
                <button
                  onClick={() => {
                    setShowModal(false);
                    setSuccess(false);
                  }}
                  className="mt-6 w-full bg-gradient-to-r from-teal-600 to-emerald-600 text-white font-bold py-3.5 rounded-xl transition-all text-xs uppercase tracking-wider"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <>
                {/* Header */}
                <div className="flex items-center gap-3 border-b border-teal-50 pb-4 text-left">
                  <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-100 text-teal-600 flex items-center justify-center shadow-sm">
                    <Mail className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-black text-slate-900 text-xl">Quick Enquiry</h3>
                    <p className="text-xs text-teal-600 font-bold uppercase tracking-wider">Book Free Call Back</p>
                  </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={leadForm.name}
                      onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                      placeholder="Enter your name"
                      className="w-full bg-slate-50 border border-slate-200 focus:border-teal-400 focus:bg-white rounded-xl px-4 py-3 text-slate-800 focus:outline-none transition-all text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                      WhatsApp / Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      value={leadForm.phone}
                      onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })}
                      placeholder="Enter mobile no."
                      className="w-full bg-slate-50 border border-slate-200 focus:border-teal-400 focus:bg-white rounded-xl px-4 py-3 text-slate-800 focus:outline-none transition-all text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={leadForm.email}
                      onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })}
                      placeholder="Enter your email address"
                      className="w-full bg-slate-50 border border-slate-200 focus:border-teal-400 focus:bg-white rounded-xl px-4 py-3 text-slate-800 focus:outline-none transition-all text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                      Your Question / Message
                    </label>
                    <textarea
                      rows="2"
                      value={leadForm.message}
                      onChange={(e) => setLeadForm({ ...leadForm, message: e.target.value })}
                      placeholder="How can we help you today?"
                      className="w-full bg-slate-50 border border-slate-200 focus:border-teal-400 focus:bg-white rounded-xl px-4 py-3 text-slate-800 focus:outline-none transition-all text-xs"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-500 hover:to-emerald-500 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-md active:scale-[0.99] text-xs uppercase tracking-wider flex items-center justify-center gap-2 mt-4 disabled:opacity-50"
                  >
                    {submitting ? "Sending Request..." : "Request Free Call Back"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
