'use client'
import React, { useState } from 'react';
import { Phone, CheckCircle, Activity, Heart, Shield, Users, MapPin, Plus, Minus, ArrowRight, Star, Award, Info, Sparkles, Instagram, Facebook, Youtube, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function DefenceColonyIVFPage() {
  const [activeFaq, setActiveFaq] = useState(null);

  const treatments = [
    { 
      title: "IVF Treatment In Defence Colony", 
      desc: "Our IVF Clinic In Defence Colony provides world-class IVF Treatment In Defence Colony with a High IVF Success Rate Delhi.",
      longDesc: "Experience premium fertility care in a private sanctuary. Our Defence Colony clinic combines advanced embryology with personalized medical protocols to give you the highest chance of success."
    },
    { 
      title: "IUI Treatment Delhi", 
      desc: "Expert IUI Treatment Delhi at our Fertility Centre In Defence Colony. A gentle and effective starting point for South Extension families.",
      longDesc: "IUI is often the first step for couples with unexplained infertility. We optimize the timing and sperm quality to enhance your natural chances of conception in a comfortable, office-based setting."
    },
    { 
      title: "ICSI Treatment Delhi", 
      desc: "Advanced ICSI Treatment Delhi for severe male factor cases at our leading IVF Hospital In South Delhi.",
      longDesc: "When sperm quality is a challenge, ICSI offers a revolutionary solution. Our expert embryologists manually select the best sperm to fertilize your eggs, ensuring fertilization even in difficult cases."
    },
    { 
      title: "Egg Freezing", 
      desc: "Secure your future family with premium egg freezing at the best IVF Clinic In Defence Colony.",
      longDesc: "Freeze your biological clock at its peak. Our vitrification technology ensures your eggs are preserved safely, giving you the flexibility to start your family when the time is truly right."
    },
    { 
      title: "Male Infertility Treatment Delhi", 
      desc: "Private and professional Male Infertility Treatment Delhi in South Delhi. Our IVF Doctor In Defence Colony finds solutions for every couple.",
      longDesc: "We address the silent side of infertility with compassion and advanced science. From microscopic semen analysis to surgical sperm retrieval, we leave no stone unturned."
    },
    { 
      title: "Female Infertility Specialist Delhi", 
      desc: "Consult our senior Female Infertility Specialist Delhi at the Best IVF Clinic In Defence Colony for bespoke care.",
      longDesc: "Every woman's body is different. We provide in-depth diagnostics to understand the root cause of your challenges, creating a path forward that respects your unique biology."
    },
    { 
      title: "PCOS Fertility Treatment Delhi", 
      desc: "Specialized PCOS Fertility Treatment Delhi at our IVF Centre In Defence Colony to help you conceive with confidence.",
      longDesc: "PCOS is a hormonal puzzle, but it's one we know how to solve. Our specialists use metabolic balancing and ovulation induction to help you conceive safely and successfully."
    },
    { 
      title: "Low AMH Treatment Delhi", 
      desc: "Personalized Low AMH Treatment Delhi using advanced stimulation at our Fertility Clinic In South Delhi.",
      longDesc: "A low ovarian reserve requires a specialized touch. We use gentle, high-yield stimulation protocols designed to produce quality embryos even when the egg count is lower."
    },
  ];

  const doctors = [
    {
      name: "Dr. Monica Sachdev",
      title: "Medical Director & Senior IVF Specialist",
      experience: "18+ Years",
      specialty: "IVF & Embryo Transfer Specialist",
      image: "/images/praviivf68adeb4f45d30_1756228431.png",
    },
    {
      name: "Dr. Ankita",
      title: "Clinical Director & Senior IVF Consultant",
      experience: "15+ Years",
      specialty: "IVF & Reproductive Medicine",
      image: "/images/dr-ankita.png",
    },
    {
      name: "Dr. Rit Shukla",
      title: "Chief Embryologist & Scientific Director",
      experience: "18+ Years",
      specialty: "Intracytoplasmic Sperm Injection (ICSI)",
      image: "/images/praviivf68adeb76c3b74_1756228470.png",
    },
    {
      name: "Dr. Sakshi Tandon",
      title: "Obstetrics Gynaecology",
      experience: "10+ Years",
      specialty: "OBS.Gynae, IVF Specialist",
      image: "/images/praviivf68adeb8d21097_1756228493.png",
    }
  ];

  const faqs = [
    {
      q: "Which is the best ivf center in Defence Colony delhi?",
      a: "Our clinic is widely recognized as the Best IVF Centre In Defence Colony, New Delhi due to our High IVF Success Rate Delhi, senior specialists, and honest, ethical approach to fertility care."
    },
    {
      q: "What makes you the Best IVF Clinic In Defence Colony?",
      a: "It’s our commitment to High IVF Success Rate Delhi through personalized protocols and the hands-on involvement of our senior IVF Specialist In Defence Colony. We don't believe in a one-size-fits-all approach."
    },
    {
      q: "How does IUI Treatment Delhi compare to IVF?",
      a: "IUI is a simpler, less invasive procedure often used as a first step at our Fertility Centre In Defence Colony. While IVF has higher success rates, IUI is more affordable and feels very close to natural conception."
    },
    {
      q: "Do you offer Male Infertility Treatment Delhi in South Delhi?",
      a: "Yes, we have a dedicated wing for Male Infertility Treatment Delhi within our IVF Hospital In South Delhi. We address sperm count, motility, and genetic factors with absolute professionalism."
    },
    {
      q: "Can I manage PCOS Fertility Treatment Delhi while working?",
      a: "Absolutely. Most women undergoing PCOS Fertility Treatment Delhi at our IVF Centre In Defence Colony continue their professional lives in South Extension and Lajpat Nagar with minimal disruption."
    },
    {
      q: "Is IVF treatment expensive in Defence Colony?",
      a: "While our care is premium, we pride ourselves on Affordable IVF Treatment Delhi. We provide transparent pricing and EMI options to ensure that the Best IVF Doctor In Defence Colony is accessible to you."
    },
    {
      q: "What is the typical success rate for your clinic?",
      a: "Our High IVF Success Rate Delhi is a result of our meticulous lab standards and individual patient monitoring. We achieve success rates that rival international fertility centres."
    },
    {
      q: "Do you have experience with recurrent miscarriage?",
      a: "Yes, our Fertility Clinic In South Delhi specializes in complex cases including recurrent implantation failure and miscarriages. We use advanced screening to find the root cause."
    },
    {
      q: "How soon can I start my IVF Treatment In Defence Colony?",
      a: "We can typically begin your cycle after a single diagnostic consultation. We value your time and aim to start your journey as soon as your body is ready."
    },
    {
      q: "Is the clinic open for weekend appointments?",
      a: "Yes, we understand that our patients from South Delhi lead busy lives. We offer flexible scheduling to accommodate your work and life commitments."
    }
  ];

  const localSEO = [
    { location: "IVF Centre In Lajpat Nagar", text: "Residents of Lajpat Nagar find our Defence Colony clinic to be a peaceful, high-end alternative for their fertility needs. We are just minutes away, offering world-class technology in a private setting." },
    { location: "Fertility Clinic Near South Extension", text: "For families in South Extension, premium fertility care is right next door. Our centre is known for its high success rates and personalized approach to IVF and IUI." },
    { location: "IVF Treatment Near Greater Kailash", text: "Serving the community of Greater Kailash, we provide advanced IVF treatments tailored to high-stress urban lifestyles. Our focus is on quality embryos and healthy deliveries." },
    { location: "Fertility Experts In Jangpura", text: "If you are looking for Fertility Experts In Jangpura, our senior doctors bring nearly two decades of experience to help you overcome complex reproductive challenges." },
    { location: "IVF Specialist Near Lodhi Road", text: "Conveniently located for Lodhi Road residents, our centre offers a discreet and professional environment for all your fertility consultations." },
    { location: "Fertility Care Near Nehru Place", text: "From Nehru Place to CR Park, we are the trusted choice for families seeking international standards of embryology and compassionate clinical care." },
    { location: "IVF Consultation In East Of Kailash", text: "Starting your journey is easy with a professional IVF consultation near East Of Kailash. We provide clear answers and a roadmap to parenthood." },
    { location: "Fertility Clinic Near Khan Market", text: "Serving the elite residential areas near Khan Market, our clinic offers the highest level of privacy and bespoke fertility solutions." }
  ];

  return (
    <div className="bg-stone-50 min-h-screen text-stone-800 font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-blue-900 text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-teal-950 opacity-90 z-10"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        
        <div className="max-w-7xl mx-auto relative z-20 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 bg-blue-500/20 backdrop-blur-md border border-blue-400 rounded-full px-5 py-2 text-blue-100 font-semibold text-sm mb-8">
              <Sparkles className="w-4 h-4 text-blue-300"/>
              <span>Best IVF Centre In Defence Colony, New Delhi</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8">
              Where <span className="text-blue-300 italic">Hope</span> Meets Science in Defence Colony.
            </h1>
            <p className="text-xl text-blue-100 mb-10 max-w-xl leading-relaxed font-light">
              Experience a sanctuary of advanced fertility care. We combine world-class science with a heart that truly understands your journey to parenthood.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
              {[
                "Best IVF Clinic In Defence Colony",
                "High IVF Success Rate Delhi",
                "Affordable IVF Treatment Delhi",
                "Expert IVF Doctor In Defence Colony"
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <div className="bg-blue-500/30 p-1 rounded-full">
                    <CheckCircle className="text-blue-300 w-5 h-5 flex-shrink-0" />
                  </div>
                  <span className="text-stone-100 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-5">
              <Link href="#appointment" className="bg-blue-500 hover:bg-blue-600 text-white px-10 py-5 rounded-full font-bold text-lg text-center transition-all shadow-2xl active:scale-95">
                Book Private Consultation
              </Link>
              <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer" className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-10 py-5 rounded-full font-bold text-lg text-center transition-all flex items-center justify-center gap-2 active:scale-95">
                WhatsApp Confidential
              </a>
            </div>
          </div>

          {/* Lead Form */}
          <div className="bg-white rounded-[2.5rem] p-10 shadow-2xl relative border border-stone-100" id="appointment">
            <h3 className="text-3xl font-bold text-stone-900 mb-3">Begin Your Journey</h3>
            <p className="text-stone-500 mb-8 leading-relaxed">Request a discreet callback from our senior fertility specialists. Let's find your path together.</p>
            
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-stone-400 mb-2">Name</label>
                  <input type="text" className="w-full px-5 py-4 bg-stone-50 border border-stone-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all" placeholder="Enter Name" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-stone-400 mb-2">Phone</label>
                  <input type="tel" className="w-full px-5 py-4 bg-stone-50 border border-stone-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all" placeholder="Enter Mobile" />
                </div>
              </div>
              <button type="button" className="w-full bg-blue-800 hover:bg-blue-900 text-white font-bold py-5 rounded-2xl transition-all shadow-lg active:scale-95">
                Request Defence Colony Callback
              </button>
              <div className="flex items-center justify-center gap-2 text-[10px] uppercase tracking-widest text-stone-400">
                <Shield className="w-3 h-3"/> 100% Ethical & Private Fertility Care
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* 2. ABOUT SECTION */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-8 leading-tight italic">The Leading IVF Hospital In South Delhi: <br/><span className="text-blue-700">Experience the Difference.</span></h2>
            <div className="space-y-6 text-lg text-stone-600 leading-relaxed font-light">
              <p>
                In the heart of South Delhi, our <strong>Best IVF Centre In Defence Colony</strong> stands as a beacon of hope. We understand that residents of <strong>Lajpat Nagar, South Extension, and Lodhi Road</strong> expect excellence, privacy, and results.
              </p>
              <p>
                Our philosophy is simple: we treat people, not just cases. We’ve built a modern, boutique fertility clinic where you can access the world’s most advanced IVF technology without the clinical coldness of a large hospital.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8 border-t border-stone-100 pt-12">
               <div>
                  <div className="text-4xl font-bold text-blue-800">15+</div>
                  <div className="text-xs uppercase tracking-widest text-stone-400 mt-2">Ranked #1 In Delhi</div>
               </div>
               <div>
                  <div className="text-4xl font-bold text-blue-800">Elite</div>
                  <div className="text-xs uppercase tracking-widest text-stone-400 mt-2">Embryology Lab</div>
               </div>
            </div>
          </div>
          <div className="bg-stone-100 rounded-[3rem] p-12 relative overflow-hidden group border border-stone-200">
             <div className="absolute top-0 right-0 p-8">
                <Activity className="w-12 h-12 text-blue-800 opacity-20" />
             </div>
             <h3 className="text-2xl font-bold text-blue-900 mb-8">Defence Colony Excellence</h3>
             <ul className="space-y-6">
               {[
                 "Direct access to the Best IVF Doctor In Defence Colony.",
                 "High IVF Success Rate Delhi for age-related challenges.",
                 "Transparent pricing with EMI options for South Delhi families.",
                 "Advanced ICSI Treatment Delhi for male factor infertility.",
                 "Holistic support for PCOS Fertility Treatment Delhi cases."
               ].map((item, i) => (
                 <li key={i} className="flex items-start gap-4">
                   <div className="w-6 h-6 rounded-lg bg-blue-800 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md">
                     <CheckCircle className="w-3.5 h-3.5 text-white" />
                   </div>
                   <span className="text-stone-700 font-medium leading-relaxed">{item}</span>
                 </li>
               ))}
             </ul>
          </div>
        </div>
      </section>

      {/* 3. TREATMENTS SECTION */}
      <section className="py-24 bg-stone-900 text-stone-100 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">World-Class IVF Treatment In Defence Colony</h2>
            <p className="text-stone-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
              We provide advanced reproductive technology tailored to the high expectations of our Defence Colony patients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {treatments.map((treatment, i) => (
              <div key={i} className="bg-stone-800/50 border border-stone-700 rounded-3xl p-8 hover:bg-stone-800 transition-all group">
                <h3 className="text-xl font-bold mb-4 group-hover:text-blue-300 transition-colors">{treatment.title}</h3>
                <p className="text-stone-400 text-sm leading-relaxed font-light mb-6">{treatment.desc}</p>
                <p className="text-stone-500 text-xs italic leading-relaxed">{treatment.longDesc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. LOCAL SEO CONTENT SECTION */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-stone-900 mb-4">A Trusted Landmark in South Delhi</h2>
            <p className="text-stone-500 font-light">Serving the most prestigious neighborhoods with discreet, high-success care.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {localSEO.map((item, i) => (
              <div key={i} className="p-10 bg-stone-50 rounded-[2.5rem] border border-stone-100 group hover:bg-blue-50/30 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <MapPin className="text-blue-700 w-6 h-6"/>
                  </div>
                  <h4 className="text-xl font-bold text-stone-900">{item.location}</h4>
                </div>
                <p className="text-stone-600 leading-relaxed font-light">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctor Profiles */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-stone-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-100 px-4 py-2 rounded-full mb-4">
              <Users className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-semibold text-blue-700">Elite Specialist Team</span>
            </div>
            <h2 className="text-4xl font-bold text-stone-900 mb-4">Meet Your Fertility Experts</h2>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto font-light">
              Our doctors are not just clinicians; they are pioneers who have helped thousands of families find their way.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {doctors.map((doctor, index) => (
              <div key={index} className="bg-stone-50 rounded-[2.5rem] shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-stone-100">
                <div className="p-8">
                  <div className="flex justify-center mb-6">
                    <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full flex items-center justify-center shadow-xl overflow-hidden">
                      <Image
                        src={doctor.image}
                        alt={doctor.name}
                        width={130}
                        height={130}
                        className=" object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  <h4 className="text-2xl font-bold text-stone-800 mb-2 text-center">{doctor.name}</h4>
                  <p className="text-blue-600 font-medium mb-1 text-center">{doctor.title}</p>
                  <p className="text-stone-500 text-sm text-center mb-4 italic">{doctor.specialty}</p>
                  <div className="flex items-center justify-center gap-2 text-blue-600 font-bold">
                    <Award className="w-4 h-4"/> {doctor.experience} Exp.
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SUCCESS & TRUST STORIES */}
      <section className="py-24 px-4 bg-stone-50 border-y border-stone-100">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
           <div>
              <h2 className="text-4xl font-bold text-stone-900 mb-8 leading-tight italic text-blue-800">Proven Success In Defence Colony</h2>
              <div className="space-y-6 text-lg text-stone-600 leading-relaxed font-light">
                 <p>
                    For families in <strong>Jangpura, Lodhi Road, and CR Park</strong>, we have become a trusted name. We don't just measure success by a positive test, but by the joy of a healthy baby in your arms.
                 </p>
                 <p>
                    Our <strong>High IVF Success Rate Delhi</strong> is achieved through advanced science and a commitment to never giving up on our patients.
                 </p>
                 <p className="text-sm italic text-stone-400">
                    *Success rates depend on individual medical history and age.
                 </p>
              </div>
           </div>
           <div className="grid gap-6">
              {[
                { name: "Meera & Amit", loc: "Defence Colony", text: "We were looking for the best IVF clinic in Defence Colony that offered privacy and expertise. This clinic was a godsend. The doctors are truly the best in Delhi." },
                { name: "Rohit & Shweta", loc: "South Extension", text: "ICSI was our last hope. The embryologists here are geniuses. We are now blessed with a beautiful baby girl." }
              ].map((story, i) => (
                <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-stone-100 shadow-sm relative group hover:shadow-md transition-all">
                   <div className="flex text-blue-600 mb-4 gap-1">
                      <Star className="fill-current w-3.5 h-3.5" /><Star className="fill-current w-3.5 h-3.5" /><Star className="fill-current w-3.5 h-3.5" /><Star className="fill-current w-3.5 h-3.5" /><Star className="fill-current w-3.5 h-3.5" />
                   </div>
                   <p className="text-stone-600 italic mb-6 leading-relaxed">"{story.text}"</p>
                   <div className="font-bold text-stone-900">{story.name}</div>
                   <div className="text-[10px] uppercase tracking-widest text-blue-700 font-bold mt-1">{story.loc}</div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 6. FAQ SECTION */}
      <section className="py-24 px-4 max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-stone-900 mb-4">Ethical Answers to Your Questions</h2>
          <p className="text-stone-500 font-light">We believe in complete transparency at every step of your fertility journey.</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white border border-stone-100 rounded-2xl overflow-hidden shadow-sm transition-all hover:shadow-md">
              <button 
                onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                className="w-full text-left px-10 py-7 font-bold text-stone-800 flex justify-between items-center focus:outline-none hover:bg-stone-50"
              >
                <span className="pr-10">{faq.q}</span>
                {activeFaq === i ? <Minus className="w-5 h-5 text-blue-800 flex-shrink-0" /> : <Plus className="w-5 h-5 text-stone-300 flex-shrink-0" />}
              </button>
              {activeFaq === i && (
                <div className="px-10 pb-10 text-stone-600 leading-relaxed font-light border-t border-stone-50 pt-8 bg-stone-50/30 animate-fade-in">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Social & Trust Connections */}
      <section className="py-20 px-4 bg-white border-t border-stone-100 text-stone-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center text-left">
            <div>
              <h2 className="text-3xl font-bold text-stone-900 mb-6 font-serif italic">Connect With Our Community</h2>
              <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                Stay updated with the latest in fertility science, watch real patient success stories, and join our growing community of hopeful parents across New Delhi.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="https://www.instagram.com/praviglobalivfpolyclinic/" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-bold transition-transform hover:scale-105">
                  <Instagram className="w-5 h-5"/> Instagram
                </a>
                <a href="https://www.facebook.com/PraviIVF" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-[#1877F2] text-white rounded-full font-bold transition-transform hover:scale-105">
                  <Facebook className="w-5 h-5"/> Facebook
                </a>
                <a href="https://www.youtube.com/watch?v=2N0bx-OFLYQ" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-[#FF0000] text-white rounded-full font-bold transition-transform hover:scale-105">
                  <Youtube className="w-5 h-5"/> Watch Success Stories
                </a>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a href="https://www.practo.com/delhi/clinic/pravi-global-ivf-polyclinic-lajpat-nagar-4/abo" target="_blank" rel="noreferrer" className="p-6 bg-stone-50 border border-stone-100 rounded-2xl hover:border-blue-200 transition-all group">
                <div className="text-blue-600 mb-3 group-hover:scale-110 transition-transform"><Activity className="w-8 h-8"/></div>
                <h4 className="font-bold text-stone-900 mb-1">Practo Verified</h4>
                <p className="text-xs text-stone-500">Read patient reviews and book appointments easily.</p>
              </a>
              <a href="https://www.justdial.com/Kanpur/Pravi-Ivf-Fertility-Centre-Near-Raj-Ratan-Saree-Motijheel-Chauraha-Swaroop-Nagar/0512PX512-X512-160714183543-G2T4_BZDET" target="_blank" rel="noreferrer" className="p-6 bg-stone-50 border border-stone-100 rounded-2xl hover:border-blue-200 transition-all group">
                <div className="text-blue-600 mb-3 group-hover:scale-110 transition-transform"><Star className="w-8 h-8"/></div>
                <h4 className="font-bold text-stone-900 mb-1">JustDial Top Rated</h4>
                <p className="text-xs text-stone-500">Highest rated fertility centre with trusted feedback.</p>
              </a>
              <a href="https://share.google/l3CxCfdJJf9C1DQBL" target="_blank" rel="noreferrer" className="p-6 bg-stone-50 border border-stone-100 rounded-2xl hover:border-blue-200 transition-all group">
                <div className="text-blue-600 mb-3 group-hover:scale-110 transition-transform"><MapPin className="w-8 h-8"/></div>
                <h4 className="font-bold text-stone-900 mb-1">Find Us on Maps</h4>
                <p className="text-xs text-stone-500">Visit our flagship South Delhi centre in Lajpat Nagar.</p>
              </a>
              <a href="https://praviivf.in/" target="_blank" rel="noreferrer" className="p-6 bg-stone-50 border border-stone-100 rounded-2xl hover:border-blue-200 transition-all group">
                <div className="text-blue-600 mb-3 group-hover:scale-110 transition-transform"><ExternalLink className="w-8 h-8"/></div>
                <h4 className="font-bold text-stone-900 mb-1">Main Website</h4>
                <p className="text-xs text-stone-500">Explore our full range of services across India.</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Locations (Internal Links) */}
      <section className="py-20 px-4 bg-stone-50 border-t border-stone-200 text-stone-800">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-stone-900 mb-8 uppercase tracking-widest">Explore Other Locations</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/best-ivf-centre-in-south-delhi" className="px-6 py-3 bg-white border border-stone-200 rounded-xl hover:bg-blue-800 hover:text-white transition-all font-medium text-sm text-center">Best IVF Centre In South Delhi</Link>
            <Link href="/best-ivf-centre-in-saket-delhi" className="px-6 py-3 bg-white border border-stone-200 rounded-xl hover:bg-blue-800 hover:text-white transition-all font-medium text-sm text-center">Best IVF Centre In Saket, New Delhi</Link>
            <Link href="/best-ivf-centre-in-greater-kailash-delhi" className="px-6 py-3 bg-white border border-stone-200 rounded-xl hover:bg-blue-800 hover:text-white transition-all font-medium text-sm text-center">Best IVF Centre In Greater Kailash (GK I & GK II), New Delhi</Link>
            <Link href="/best-ivf-centre-in-hauz-khas-delhi" className="px-6 py-3 bg-white border border-stone-200 rounded-xl hover:bg-blue-800 hover:text-white transition-all font-medium text-sm text-center">Best IVF Centre In Hauz Khas, New Delhi</Link>
            <Link href="/best-ivf-centre-in-green-park-delhi" className="px-6 py-3 bg-white border border-stone-200 rounded-xl hover:bg-blue-800 hover:text-white transition-all font-medium text-sm text-center">Best IVF Centre In Green Park, New Delhi</Link>
            <Link href="/best-ivf-centre-in-malviya-nagar-delhi" className="px-6 py-3 bg-white border border-stone-200 rounded-xl hover:bg-blue-800 hover:text-white transition-all font-medium text-sm text-center">Best IVF Centre In Malviya Nagar, New Delhi</Link>
            <Link href="/best-ivf-centre-in-defence-colony-delhi" className="px-6 py-3 bg-white border border-stone-200 rounded-xl hover:bg-blue-800 hover:text-white transition-all font-medium text-sm text-center">Best IVF Centre In Defence Colony, New Delhi</Link>
            <Link href="/best-ivf-centre-in-lajpat-nagar-delhi" className="px-6 py-3 bg-white border border-stone-200 rounded-xl hover:bg-blue-800 hover:text-white transition-all font-medium text-sm text-center">Best IVF Centre In Lajpat Nagar, New Delhi</Link>
            <Link href="/best-ivf-centre-in-kalkaji-delhi" className="px-6 py-3 bg-white border border-stone-200 rounded-xl hover:bg-blue-800 hover:text-white transition-all font-medium text-sm text-center">Best IVF Centre In Kalkaji, New Delhi</Link>
            <Link href="/best-ivf-centre-in-vasant-kunj-delhi" className="px-6 py-3 bg-white border border-stone-200 rounded-xl hover:bg-blue-800 hover:text-white transition-all font-medium text-sm text-center">Best IVF Centre In Vasant Kunj, New Delhi</Link>
            <Link href="/best-ivf-centre-in-vasant-vihar-delhi" className="px-6 py-3 bg-white border border-stone-200 rounded-xl hover:bg-blue-800 hover:text-white transition-all font-medium text-sm text-center">Best IVF Centre In Vasant Vihar, New Delhi</Link>
            <Link href="/best-ivf-centre-in-chittaranjan-park-delhi" className="px-6 py-3 bg-white border border-stone-200 rounded-xl hover:bg-blue-800 hover:text-white transition-all font-medium text-sm text-center">Best IVF Centre In Chittaranjan Park (CR Park), New Delhi</Link>
            <Link href="/best-ivf-centre-in-new-friends-colony-delhi" className="px-6 py-3 bg-white border border-stone-200 rounded-xl hover:bg-blue-800 hover:text-white transition-all font-medium text-sm text-center">Best IVF Centre In New Friends Colony, New Delhi</Link>
            <Link href="/best-ivf-centre-in-jangpura-delhi" className="px-6 py-3 bg-white border border-stone-200 rounded-xl hover:bg-blue-800 hover:text-white transition-all font-medium text-sm text-center">Best IVF Centre In Jangpura, New Delhi</Link>
            <Link href="/best-ivf-centre-in-south-extension-delhi" className="px-6 py-3 bg-white border border-stone-200 rounded-xl hover:bg-blue-800 hover:text-white transition-all font-medium text-sm text-center">Best IVF Centre In South Extension (South Ex I & II), New Delhi</Link>
            <Link href="/best-ivf-centre-in-panchsheel-park-delhi" className="px-6 py-3 bg-white border border-stone-200 rounded-xl hover:bg-blue-800 hover:text-white transition-all font-medium text-sm text-center">Best IVF Centre In Panchsheel Park, New Delhi</Link>
            <Link href="/best-ivf-centre-in-mehrauli-delhi" className="px-6 py-3 bg-white border border-stone-200 rounded-xl hover:bg-blue-800 hover:text-white transition-all font-medium text-sm text-center">Best IVF Centre In Mehrauli, New Delhi</Link>
            <Link href="/best-ivf-centre-in-sarita-vihar-delhi" className="px-6 py-3 bg-white border border-stone-200 rounded-xl hover:bg-blue-800 hover:text-white transition-all font-medium text-sm text-center">Best IVF Centre In Sarita Vihar, New Delhi</Link>
            <Link href="/best-ivf-centre-in-okhla-delhi" className="px-6 py-3 bg-white border border-stone-200 rounded-xl hover:bg-blue-800 hover:text-white transition-all font-medium text-sm text-center">Best IVF Centre In Okhla, New Delhi</Link>
            <Link href="/best-ivf-centre-in-nehru-place-delhi" className="px-6 py-3 bg-white border border-stone-200 rounded-xl hover:bg-blue-800 hover:text-white transition-all font-medium text-sm text-center">Best IVF Centre In Nehru Place, New Delhi</Link>
            <Link href="/best-ivf-centre-in-khan-market-delhi" className="px-6 py-3 bg-white border border-stone-200 rounded-xl hover:bg-blue-800 hover:text-white transition-all font-medium text-sm text-center">Best IVF Centre In Khan Market, New Delhi</Link>
          </div>
        </div>
      </section>

      {/* 7. BOTTOM CTA */}
      <section className="bg-blue-900 text-white py-24 px-4 text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 italic">Ready to Build Your Family?</h2>
          <p className="text-xl text-blue-100 mb-12 font-light leading-relaxed">
            You don't have to navigate infertility alone. Let the Best IVF Clinic In Defence Colony guide you with science, heart, and integrity.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="#appointment" className="bg-blue-500 hover:bg-blue-600 text-white px-12 py-5 rounded-full font-bold text-lg transition-all shadow-2xl active:scale-95">
              Request Your Consultation
            </Link>
            <a href="tel:+919999999999" className="bg-blue-950/40 hover:bg-blue-950/60 text-white px-12 py-5 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-3 border border-blue-800 active:scale-95">
              <Phone className="w-5 h-5"/> Contact Defence Colony Clinic
            </a>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer" className="fixed bottom-10 right-10 bg-blue-500 text-white p-5 rounded-full shadow-2xl hover:bg-blue-600 transition-all z-50 flex items-center justify-center hover:scale-110 active:scale-90">
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
           <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-5.824 4.74-10.563 10.564-10.563 5.826 0 10.564 4.741 10.564 10.564 0 5.822-4.74 10.563-10.564 10.563z"/>
        </svg>
      </a>

    </div>
  );
}
