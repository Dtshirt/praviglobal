'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function WebinarLandingPage() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });
  const [loading, setLoading] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [joinedCount, setJoinedCount] = useState(70);

  // Target Date: 7 June 2026, 2:00 PM (14:00)
  useEffect(() => {
    const targetDate = new Date('2026-06-07T14:00:00').getTime();
    
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      
      if (distance < 0) {
        clearInterval(interval);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    // Calculate auto-incrementing joined count
    const startDate = new Date('2026-05-23T00:00:00').getTime();
    const today = new Date().getTime();
    const daysElapsed = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
    if (daysElapsed > 0) {
      setJoinedCount(70 + (daysElapsed * 20));
    }

    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    try {
      // Create order via API
      const res = await fetch('/api/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      
      if (!res.ok) throw new Error(data.error || 'Order creation failed');

      if (data.mockPayment) {
        // Mock mode (No Razorpay keys found)
        await verifyPayment(data.orderId, 'mock_payment_id', 'mock_signature', data.registrationId);
        return;
      }

      // Initialize Razorpay
      const options = {
        key: data.key, 
        amount: data.amount, 
        currency: "INR",
        name: "Pravi Global IVF",
        description: "Registration for Live Webinar",
        order_id: data.orderId,
        handler: async function (response) {
          await verifyPayment(response.razorpay_order_id, response.razorpay_payment_id, response.razorpay_signature, data.registrationId);
        },
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone
        },
        theme: {
          color: "#005a5a"
        }
      };

      const rzp1 = new window.Razorpay(options);
      rzp1.on('payment.failed', function (response){
        setErrorMsg('Payment failed! Please try again.');
        setLoading(false);
      });
      rzp1.open();
    } catch (err) {
      setErrorMsg(err.message);
      setLoading(false);
    }
  };

  const verifyPayment = async (orderId, paymentId, signature, registrationId) => {
    try {
      const res = await fetch('/api/verify-payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ orderId, paymentId, signature, registrationId })
      });
      const data = await res.json();
      
      if (res.ok) {
        setPaymentSuccess(true);
      } else {
        throw new Error(data.error || 'Verification failed');
      }
    } catch (err) {
      setErrorMsg('Payment verification failed. If money was deducted, contact support.');
    } finally {
      setLoading(false);
    }
  };

  const getWhatsAppLink = () => {
    const message = `Hello Pravi IVF,\n\nI have successfully paid ₹99 and registered for the Live Webinar.\n\n*My Details:*\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nPayment Status: SUCCESSFUL\n\nPlease confirm my seat.`;
    return `https://wa.me/912826027898?text=${encodeURIComponent(message)}`;
  };

  const handleWhatsAppClick = () => {
    window.open(getWhatsAppLink(), '_blank');
    window.location.href = '/free-webinar';
  };

  return (
    <div className="min-h-screen bg-[#001c1c] text-white selection:bg-[#10b981] selection:text-white font-sans overflow-x-hidden relative scroll-smooth">
      {/* Razorpay Script */}
      <script src="https://checkout.razorpay.com/v1/checkout.js" async></script>

      {/* Ambient Glows */}
      <div className="fixed top-0 left-0 w-[500px] h-[500px] bg-[#005a5a] rounded-full blur-[150px] opacity-20 pointer-events-none transform -translate-x-1/2 -translate-y-1/2"></div>
      
      {paymentSuccess ? (
        <div className="min-h-screen flex items-center justify-center p-4 z-50 relative">
          <div className="bg-gradient-to-br from-[#003a3a] to-[#001c1c] p-8 md:p-12 rounded-3xl border border-green-500/30 text-center max-w-lg shadow-2xl">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
            </div>
            <h2 className="text-3xl font-bold mb-4">Registration Successful!</h2>
            <p className="text-white/80 mb-6 text-lg">Your seat has been successfully booked. We have sent the confirmation and Google Meet link to your email <strong>{formData.email}</strong>.</p>
            <button onClick={handleWhatsAppClick} className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold hover:bg-[#1ebe57] shadow-lg shadow-green-500/30 transition-transform transform hover:-translate-y-1">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.876 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
              Confirm on WhatsApp
            </button>
          </div>
        </div>
      ) : (
        <main className="relative z-10">
          
          {/* --- 1. HERO VSL SECTION --- */}
          <section className="max-w-5xl mx-auto px-4 pt-0 pb-12 md:py-12 flex flex-col">
            <div className="text-center mb-8 order-2 md:order-1 mt-6 md:mt-0">
              <div className="inline-block px-5 py-2 rounded-full bg-red-500/20 border border-red-500/50 text-red-400 font-bold tracking-widest text-xs uppercase mb-6 animate-pulse shadow-[0_0_15px_rgba(239,68,68,0.3)]">
                🔴 LIVE FERTILITY WEBINAR
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
                <span className="font-kalam text-5xl sm:text-6xl lg:text-7xl">प्रेगनेंसी क्यों नहीं हो रही?</span> <br className="hidden sm:block" /><span className="font-kalam text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-600">फर्टिलिटी की सच्चाई</span>
              </h1>
              <p className="text-xl text-white/80 font-medium mb-6">Janiye sacchai directly Senior Expert Dr. Monica Sachdeva se.</p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-4">
                <div className="flex -space-x-4">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-[#001c1c] bg-emerald-800 flex items-center justify-center text-xs shadow-lg">👤</div>
                  ))}
                  <div className="w-10 h-10 rounded-full border-2 border-[#001c1c] bg-yellow-500 text-black font-bold flex items-center justify-center text-xs shadow-lg">2.5k+</div>
                </div>
                <div className="text-sm font-medium text-white/80 text-center sm:text-left">
                  <p><strong className="text-yellow-400">2,500+ couples</strong> have successfully transformed their lives.</p>
                  <p><strong className="text-white">{joinedCount}+ people</strong> have already joined this exclusive webinar!</p>
                </div>
              </div>
            </div>

            {/* VSL VIDEO PLAYER */}
            <div className="w-[calc(100%+2rem)] -mx-4 md:mx-0 md:w-full bg-black md:rounded-3xl overflow-hidden border-y-2 md:border-2 border-[#005a5a] shadow-[0_0_50px_rgba(0,90,90,0.3)] md:mb-12 relative group order-1 md:order-2 z-10">
              <video 
                src="/images/pravi monica mam 1.mp4" 
                controls 
                autoPlay 
                playsInline
                preload="auto"
                className="w-full h-auto object-contain"
                poster="/images/webinar-thumbnail.jpg"
              >
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start mt-8 order-3">
              {/* Left Info & Timer */}
              <div className="space-y-8">
                <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                  <h3 className="text-center text-yellow-400 font-bold mb-6 text-xl">Webinar Starts In:</h3>
                  <div className="flex justify-center gap-4 text-center">
                    {[
                      { label: 'Days', value: timeLeft.days },
                      { label: 'Hours', value: timeLeft.hours },
                      { label: 'Mins', value: timeLeft.minutes },
                      { label: 'Secs', value: timeLeft.seconds },
                    ].map((item, idx) => (
                      <div key={idx} className="flex flex-col">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-black/40 rounded-2xl flex items-center justify-center text-2xl sm:text-4xl font-black text-white shadow-inner border border-white/5">
                          {item.value.toString().padStart(2, '0')}
                        </div>
                        <span className="text-xs text-white/50 uppercase tracking-widest mt-2 font-bold">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold border-b border-white/10 pb-2">What Will You Learn?</h3>
                  <ul className="space-y-3 text-white/80">
                    <li className="flex gap-3"><span className="text-green-400">✅</span> The real root causes of Unexplained Infertility.</li>
                    <li className="flex gap-3"><span className="text-green-400">✅</span> Expert tips to conceive naturally with PCOD and Low AMH.</li>
                    <li className="flex gap-3"><span className="text-green-400">✅</span> How to prevent and overcome repeated IVF Failures.</li>
                  </ul>
                </div>
              </div>

              {/* Right Registration Form */}
              <div className="bg-gradient-to-br from-[#003a3a] to-[#001c1c] p-8 sm:p-10 rounded-[2.5rem] border border-yellow-500/30 shadow-2xl relative overflow-hidden" id="register">
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 blur-[40px] rounded-full"></div>
                
                <h3 className="text-2xl font-extrabold mb-2">Book Your Spot Now</h3>
                <p className="text-white/60 text-sm mb-4">Secure your seat for just ₹99. Google Meet link will be sent to your email.</p>

                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 flex items-center gap-3 mb-8">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                  </span>
                  <p className="text-sm font-bold text-red-400"><span className="text-white">{joinedCount}+ couples</span> have already secured their spot!</p>
                </div>

                {errorMsg && (
                  <div className="bg-red-500/10 border border-red-500/50 text-red-400 p-3 rounded-lg text-sm mb-6">
                    {errorMsg}
                  </div>
                )}

                <form onSubmit={handlePayment} className="space-y-5 relative z-10">
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-1">Full Name</label>
                    <input type="text" name="name" required value={formData.name} onChange={handleInputChange} className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-400 transition-colors placeholder-white/20" placeholder="Enter your full name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-1">WhatsApp Number</label>
                    <input type="tel" name="phone" required value={formData.phone} onChange={handleInputChange} className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-400 transition-colors placeholder-white/20" placeholder="+91 XXXXX XXXXX" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-1">Email Address</label>
                    <input type="email" name="email" required value={formData.email} onChange={handleInputChange} className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-400 transition-colors placeholder-white/20" placeholder="Where should we send the invite?" />
                  </div>
                  
                  <button type="submit" disabled={loading} className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-extrabold text-lg py-4 rounded-xl shadow-[0_0_20px_rgba(234,179,8,0.3)] transition-all transform hover:-translate-y-1 mt-4 disabled:opacity-50 flex items-center justify-center gap-2">
                    {loading ? 'Processing...' : 'Pay ₹99 & Register'}
                  </button>
                  <p className="text-center text-xs text-white/40 pt-2 flex items-center justify-center gap-1">
                    🔒 Secured by Razorpay
                  </p>
                </form>
              </div>
            </div>
          </section>

          {/* --- 2. PAIN POINTS SECTION --- */}
          <section className="bg-[#001313] py-20 border-y border-white/5">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-12">
                Are You Also Facing <br/><span className="text-red-400">These Challenges?</span>
              </h2>
              
              <div className="grid sm:grid-cols-2 gap-6 text-left">
                {[
                  "Trying to conceive for over a year without success?",
                  "Advised to undergo IVF due to severe PCOD or Low AMH?",
                  "Experienced failed IVF or IUI attempts and unsure of the next steps?",
                  "Living with the constant fear of repeated miscarriages?",
                  "Struggling with sperm count or motility issues (Male Infertility)?",
                  "Unable to conceive naturally due to Blocked Fallopian Tubes?"
                ].map((pain, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 flex gap-4 hover:bg-white/10 transition-colors">
                    <div className="text-red-400 text-2xl flex-shrink-0">⚠️</div>
                    <p className="text-white/80 font-medium">{pain}</p>
                  </div>
                ))}
              </div>

              <p className="mt-12 text-xl font-medium text-white/90">
                If your answer is <span className="text-yellow-400 font-bold text-2xl">"YES"</span>, this Webinar can change your life.
              </p>
            </div>
          </section>

          {/* --- 3. VALUE PROP SECTION --- */}
          <section className="max-w-6xl mx-auto px-4 py-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">What You Will Discover</h2>
              <p className="text-white/60 text-lg">In this 60-minute LIVE session, Dr. Monica will reveal:</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-b from-[#003a3a] to-transparent p-8 rounded-3xl border border-[#005a5a]">
                <div className="w-14 h-14 bg-yellow-500/20 text-yellow-400 rounded-2xl flex items-center justify-center text-3xl mb-6">🔍</div>
                <h3 className="text-xl font-bold mb-3">Root Cause Analysis</h3>
                <p className="text-white/70">Discover the hidden obstacles preventing your pregnancy that are often completely ignored by standard treatments.</p>
              </div>
              <div className="bg-gradient-to-b from-[#003a3a] to-transparent p-8 rounded-3xl border border-[#005a5a]">
                <div className="w-14 h-14 bg-green-500/20 text-green-400 rounded-2xl flex items-center justify-center text-3xl mb-6">📈</div>
                <h3 className="text-xl font-bold mb-3">Improving Success Rates</h3>
                <p className="text-white/70">What to do after IVF failure? Learn advanced modern techniques that can effectively double your IVF and IUI success rates.</p>
              </div>
              <div className="bg-gradient-to-b from-[#003a3a] to-transparent p-8 rounded-3xl border border-[#005a5a]">
                <div className="w-14 h-14 bg-blue-500/20 text-blue-400 rounded-2xl flex items-center justify-center text-3xl mb-6">💡</div>
                <h3 className="text-xl font-bold mb-3">Personalized Roadmap</h3>
                <p className="text-white/70">Receive an expert, personalized roadmap tailored specifically to your age, AMH levels, and unique medical history.</p>
              </div>
            </div>
          </section>

          {/* --- 4. ABOUT THE EXPERT --- */}
          <section className="bg-white/5 py-20 border-y border-white/10">
            <div className="max-w-5xl mx-auto px-4">
              <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Meet Your Mentor</h2>
              <div className="flex flex-col md:flex-row gap-12 items-center bg-[#001313] p-8 md:p-12 rounded-[3rem] border border-[#005a5a]">
                <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-[#005a5a] flex-shrink-0 bg-[#002a2a] shadow-[0_0_40px_rgba(0,90,90,0.5)]">
                   <Image src="/images/dr-monica.png" alt="Dr. Monica Sachdeva" width={300} height={300} className="object-cover object-top w-full h-full scale-110" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">Dr. Monica Sachdeva</h3>
                  <p className="text-yellow-400 font-semibold mb-6 text-lg">Senior Fertility & IVF Specialist</p>
                  <p className="text-white/80 leading-relaxed mb-6">
                    With over <strong>18 years of clinical experience</strong>, Dr. Monica is one of Delhi's most trusted fertility specialists. She has helped thousands of couples overcome complex infertility issues like recurrent IVF failures, severe PCOD, and low AMH to finally achieve their dream of parenthood.
                  </p>
                  <p className="text-white/80 leading-relaxed">
                    Her approach is deeply rooted in transparency, ethics, and personalized care. In this webinar, she brings her years of clinical wisdom directly to you.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* --- 5. FAQS --- */}
          <section className="max-w-3xl mx-auto px-4 py-10 pb-24">
            <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                { q: "What is the fee for the webinar?", a: "There is a nominal fee of just ₹99 for this exclusive webinar to ensure we get serious attendees. After payment, a confirmation email will be sent automatically." },
                { q: "Will I get a chance to ask my personal questions?", a: "Absolutely! The last 15 minutes of the webinar will be a dedicated LIVE Q&A session with Dr. Monica." },
                { q: "I have had multiple failed IVF cycles. Is this for me?", a: "Yes. Dr. Monica specializes in complex cases and repeated IVF failures. You will gain valuable insights on what might be going wrong and what advanced options exist." },
                { q: "How do I join the webinar?", a: "Once you register and pay the ₹99 fee, our automated system will send you an email with the private Google Meet link." }
              ].map((faq, i) => (
                <details key={i} className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-lg select-none">
                    {faq.q}
                    <span className="transition group-open:rotate-180">
                      <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                    </span>
                  </summary>
                  <div className="p-6 pt-0 text-white/70 font-medium leading-relaxed border-t border-white/5 mt-2">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* --- FOOTER SECTION --- */}
          <footer className="bg-[#001313] py-16 border-t border-white/10 text-center pb-28 md:pb-12">
            <h3 className="text-2xl font-bold mb-6">Got Questions? We're Here to Help</h3>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 mb-8">
              <a href="https://wa.me/918417084446?text=Hello%20Pravi%20IVF%21%20%F0%9F%8C%B8%20I%20am%20on%20the%20Live%20Fertility%20Webinar%20registration%20page%20and%20have%20a%20question.%20Please%20assist%20me.%20Thank%20you%21" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#25D366] text-white px-8 py-3 rounded-full font-bold hover:bg-[#1ebe57] transition-colors w-full sm:w-auto justify-center shadow-lg shadow-green-500/20">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.876 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                WhatsApp Us
              </a>
              <a href="tel:8417084446" className="flex items-center gap-2 bg-white/10 text-white px-8 py-3 rounded-full font-bold hover:bg-white/20 border border-white/20 transition-colors w-full sm:w-auto justify-center">
                <span>📞</span> Call Us
              </a>
            </div>
            <p className="text-white/40 text-sm">© {new Date().getFullYear()} Pravi Global IVF. All rights reserved.</p>
          </footer>
          {/* --- MOBILE STICKY CTA --- */}
          <div className="fixed bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black via-[#001313] to-transparent md:hidden z-50 pointer-events-none">
            <a href="#register" className="pointer-events-auto block w-full bg-yellow-500 hover:bg-yellow-400 text-black text-center font-extrabold text-lg py-4 rounded-2xl shadow-[0_-5px_30px_rgba(234,179,8,0.3)] transition-transform transform hover:scale-[1.02]">
              Book Your Spot for ₹99
            </a>
          </div>
          
        </main>
      )}
    </div>
  );
}
