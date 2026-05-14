'use client'
import React, { useState } from 'react';
import { Phone, CheckCircle, Activity, Heart, Shield, Users, MapPin, Plus, Minus, ArrowRight, Star, Award, Info, Sparkles, Instagram, Facebook, Youtube, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function JangpuraIVFPage() {
  const [activeFaq, setActiveFaq] = useState(null);

  const treatments = [
    { 
      title: "IVF Treatment In Jangpura", 
      desc: "Our IVF Clinic In Jangpura provides world-class IVF Treatment In Jangpura with a High IVF Success Rate Delhi.",
      longDesc: "Choosing IVF is a courageous step toward building the family you’ve always dreamed of. At our Jangpura centre, we combine cutting-edge incubation technology with a deeply personal touch, ensuring every embryo is given the best possible environment to thrive."
    },
    { 
      title: "IUI Treatment Delhi", 
      desc: "Expert IUI Treatment Delhi at our Fertility Centre In Jangpura. A simple and effective first step for families in South Delhi.",
      longDesc: "Intrauterine Insemination (IUI) is often the first medical milestone on a fertility journey. We focus on precision timing and sperm optimization to maximize your chances of a natural-feeling conception in a stress-free environment."
    },
    { 
      title: "ICSI Treatment Delhi", 
      desc: "Specialized ICSI Treatment Delhi for male fertility factors at our leading IVF Hospital In South Delhi.",
      longDesc: "ICSI has revolutionized the treatment of male factor infertility. By carefully selecting a single healthy sperm and injecting it directly into the egg, we overcome barriers that once seemed insurmountable, turning hope into reality."
    },
    { 
      title: "Egg Freezing", 
      desc: "Preserve your future with advanced egg freezing at the best IVF Clinic In Jangpura.",
      longDesc: "Time should never be a barrier to your dreams. Our advanced vitrification technology allows you to 'pause' your biological clock at its peak, giving you the freedom to pursue your career or life goals while securing your future parenthood."
    },
    { 
      title: "Male Infertility Treatment Delhi", 
      desc: "Compassionate Male Infertility Treatment Delhi in South Delhi. Our IVF Doctor In Jangpura finds solutions for every family.",
      longDesc: "Fertility is a shared journey, and we are committed to supporting both partners equally. From advanced semen analysis to specialized surgical sperm retrieval, we provide a private and professional space for men to seek answers."
    },
    { 
      title: "Female Infertility Specialist Delhi", 
      desc: "Consult our Female Infertility Specialist Delhi at the Best IVF Clinic In Jangpura for personalized fertility care.",
      longDesc: "Understanding 'why' is the first step toward 'when.' Our specialists look beyond the surface, diagnosing complex issues like tubal factors or endometriosis with a level of detail that only 18+ years of experience can provide."
    },
    { 
      title: "PCOS Fertility Treatment Delhi", 
      desc: "Specialized PCOS Fertility Treatment Delhi at our IVF Centre In Jangpura to help you conceive safely.",
      longDesc: "PCOS is a common challenge, but it is not a destination. We use targeted hormonal protocols designed to stabilize your cycle and encourage the healthy ovulation required for a successful pregnancy."
    },
    { 
      title: "Low AMH Treatment Delhi", 
      desc: "Expert Low AMH Treatment Delhi using customized protocols at our Fertility Clinic In South Delhi.",
      longDesc: "A low egg count requires a smarter, more delicate approach. We utilize 'gentle stimulation' protocols that focus on the quality of every single egg, ensuring we make the absolute most of your biological potential."
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
      q: "Which is the best ivf center in Jangpura delhi?",
      a: "Pravi Global IVF is widely regarded as the Best IVF Centre In Jangpura, New Delhi. Our reputation is built on a High IVF Success Rate Delhi, transparent pricing, and the deep clinical expertise of our senior specialists who have served the South Delhi community for nearly two decades."
    },
    {
      q: "How much does IVF cost in Jangpura?",
      a: "We believe in Affordable IVF Treatment Delhi. While costs can vary based on individual needs (such as ICSI or Donor cycles), we provide a complete, transparent breakdown during your first consultation. We also offer flexible EMI options to ensure financial stress doesn't stand in the way of your family dreams."
    },
    {
      q: "What is your success rate for IVF in South Delhi?",
      a: "Our High IVF Success Rate Delhi is among the most consistent in the region. Success depends on factors like age and medical history, but our advanced lab technology and personalized protocols consistently yield results that bring joy to families across South Delhi."
    },
    {
      q: "Is IUI better than IVF for me?",
      a: "IUI Treatment Delhi is often a great first step for couples with unexplained infertility or mild male factors. However, the Best IVF Doctor In Jangpura will only recommend the path that offers the highest statistical chance of success for your specific medical profile."
    },
    {
      q: "Do you treat Male Infertility in Jangpura?",
      a: "Yes, we have a dedicated section for Male Infertility Treatment Delhi. Whether it's low sperm count or motility issues, our ICSI Treatment Delhi and surgical retrieval methods provide effective solutions for male-factor challenges."
    },
    {
        q: "What makes your Fertility Centre In Jangpura unique?",
        a: "It's our 'Heart-First' approach. While we use world-class technology, we never forget that every patient is a human being with a unique emotional story. We provide constant support, absolute privacy, and honest medical advice."
    },
    {
        q: "Can I choose my doctor at the IVF Clinic In Jangpura?",
        a: "Absolutely. You will be guided by our senior specialists, including Dr. Monica Sachdev and Dr. Ankita, from your very first scan to the day of your embryo transfer."
    },
    {
        q: "How many visits are required for a typical IVF cycle?",
        a: "A standard cycle usually involves 4 to 6 short morning visits for monitoring (ultrasounds and blood tests) over a 2-week period, followed by the egg retrieval and embryo transfer procedures."
    },
    {
        q: "Does PCOS affect my chances of successful IVF?",
        a: "With specialized PCOS Fertility Treatment Delhi, women with PCOS actually often have very high success rates because they produce many eggs. We use specific protocols to manage hormones and ensure a safe, successful outcome."
    },
    {
        q: "Is the IVF procedure painful?",
        a: "Most patients describe the process as mildly uncomfortable rather than painful. Egg retrieval is performed under light sedation, so you won't feel anything, and embryo transfer feels similar to a standard pelvic exam."
    }
  ];

  const localSEO = [
    { location: "IVF Centre Near Lajpat Nagar", text: "Just a short drive from the bustling markets of Lajpat Nagar, our Jangpura centre offers a private and elite sanctuary for couples seeking world-class fertility science without the clinical feel." },
    { location: "Fertility Clinic In Defence Colony", text: "Residents of Defence Colony trust our specialists for their discretion and clinical excellence. We provide a level of personalized care that matches the high standards of the Def Col community." },
    { location: "IVF Treatment Near New Friends Colony", text: "For families in NFC, we provide a seamless path to parenthood. Our advanced embryology lab is easily accessible, offering immediate consultations for complex reproductive cases." },
    { location: "Fertility Experts In South Extension", text: "If you are searching for Fertility Experts In South Extension, our senior team brings over 18 years of experience in solving challenges like Low AMH and Recurrent Miscarriage." },
    { location: "IVF Specialist Near Nizamuddin", text: "Located conveniently near Nizamuddin, our clinic is a beacon of hope for local families, providing honest medical advice and advanced ICSI treatments." },
    { location: "Fertility Care In Lodhi Road", text: "Serving the historic area of Lodhi Road, we combine a tradition of medical excellence with the latest in reproductive science, helping you build a legacy for your family." },
    { location: "IVF Consultation Near Nehru Place", text: "Professionals from Nehru Place find our Jangpura clinic ideal for its flexible scheduling and efficient, results-oriented approach to fertility care." },
    { location: "Fertility Clinic In South Delhi", text: "As the premier fertility clinic in South Delhi, we serve as a hub for innovation. From East of Kailash to CR Park, we are the trusted choice for thousands of hopeful parents." }
  ];

  return (
    <div className="bg-stone-50 min-h-screen text-stone-800 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalClinic",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "248",
                "bestRating": "5"
              },
            "name": "Pravi Global IVF Jangpura",
            "description": "Best IVF Centre In Jangpura, New Delhi offering advanced fertility treatments like IUI, ICSI, and Egg Freezing.",
            "url": "https://praviivf.in/best-ivf-centre-in-jangpura-delhi",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Jangpura",
              "addressRegion": "New Delhi",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "28.5833",
              "longitude": "77.2500"
            },
            "telephone": "+919999999999"
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.q,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
              }
            }))
          })
        }}
      />
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-blue-900 text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-teal-950 opacity-90 z-10"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        
        <div className="max-w-7xl mx-auto relative z-20 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 bg-blue-500/20 backdrop-blur-md border border-blue-400 rounded-full px-5 py-2 text-blue-100 font-semibold text-sm mb-8">
              <Sparkles className="w-4 h-4 text-blue-300"/>
              <span>Best IVF Centre In Jangpura, New Delhi</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8">
              Where <span className="text-blue-300 italic">Science</span> Meets Your Heart's Deepest Desire.
            </h1>
            <p className="text-xl text-blue-100 mb-10 max-w-xl leading-relaxed font-light">
              Experience the perfect harmony of elite medical precision and compassionate care. At our Jangpura clinic, your dream of parenthood is our shared mission.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
              {[
                "Best IVF Clinic In Jangpura",
                "High IVF Success Rate Delhi",
                "Affordable IVF Treatment Delhi",
                "Expert IVF Specialist In Jangpura"
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
                Book Your Consultation
              </Link>
              <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer" className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-10 py-5 rounded-full font-bold text-lg text-center transition-all flex items-center justify-center gap-2 active:scale-95">
                WhatsApp Confidentially
              </a>
            </div>
          </div>

          {/* Lead Form */}
          <div className="bg-white rounded-[2.5rem] p-10 shadow-2xl relative border border-stone-100" id="appointment">
            <h3 className="text-3xl font-bold text-stone-900 mb-3 text-center">Begin Your Journey</h3>
            <p className="text-stone-500 mb-8 leading-relaxed text-center">Let's talk about how we can help you build your family. A caring conversation starts here.</p>
            
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-stone-400 mb-2 ml-2">Full Name</label>
                  <input type="text" className="w-full px-6 py-4 bg-stone-50 border border-stone-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all" placeholder="Your Name" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-stone-400 mb-2 ml-2">Phone Number</label>
                  <input type="tel" className="w-full px-6 py-4 bg-stone-50 border border-stone-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all" placeholder="Mobile Number" />
                </div>
              </div>
              <button type="button" className="w-full bg-blue-800 hover:bg-blue-900 text-white font-bold py-5 rounded-2xl transition-all shadow-lg active:scale-95">
                Request Jangpura Callback
              </button>
              <div className="flex items-center justify-center gap-2 text-[10px] uppercase tracking-widest text-stone-400">
                <Shield className="w-3 h-3"/> 100% Private & Ethical Care
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
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-8 leading-tight italic">Elite IVF Treatment In Jangpura: <br/><span className="text-blue-700">The Gold Standard of Fertility.</span></h2>
            <div className="space-y-6 text-lg text-stone-600 leading-relaxed font-light">
              <p>
                When you search for the <strong>Best IVF Centre In Jangpura, New Delhi</strong>, you aren't just looking for medical equipment. You're looking for an <strong>IVF Specialist In Jangpura</strong> who understands that infertility is an emotional marathon, not just a clinical diagnosis.
              </p>
              <p>
                At our Jangpura facility, we’ve reimagined the fertility experience. We’ve helped thousands of couples from <strong>South Extension, Ashram, and Lodhi Road</strong> find their path to parenthood by focusing on the 'why'—personalized diagnostics that lead to higher success.
              </p>
              <p>
                  Whether you require advanced <strong>ICSI Treatment Delhi</strong> for male factors or specialized <strong>PCOS Fertility Treatment Delhi</strong>, our senior embryologists and doctors provide the expertise you deserve in a space that feels like home.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8 border-t border-stone-100 pt-12">
               <div>
                  <div className="text-4xl font-bold text-blue-800">18+</div>
                  <div className="text-xs uppercase tracking-widest text-stone-400 mt-2">Years of Legacy</div>
               </div>
               <div>
                  <div className="text-4xl font-bold text-blue-800">High</div>
                  <div className="text-xs uppercase tracking-widest text-stone-400 mt-2">Success Rate</div>
               </div>
            </div>
          </div>
          <div className="bg-stone-100 rounded-[3rem] p-12 relative overflow-hidden group border border-stone-200">
             <div className="absolute top-0 right-0 p-8">
                <Award className="w-12 h-12 text-blue-800 opacity-20" />
             </div>
             <h3 className="text-2xl font-bold text-blue-900 mb-8">Why Our Clinic is the Preferred Choice</h3>
             <ul className="space-y-6">
               {[
                 "Direct consultations with the Best IVF Doctor In Jangpura.",
                 "State-of-the-art lab with the latest air filtration systems.",
                 "Transparent, honest pricing with zero hidden costs.",
                 "High IVF Success Rate Delhi for complex AMH cases.",
                 "Comprehensive Male Infertility Treatment Delhi options."
               ].map((item, i) => (
                 <li key={i} className="flex items-start gap-4">
                   <div className="w-6 h-6 rounded-lg bg-blue-800 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md">
                     <CheckCircle className="w-3.5 h-3.5 text-white" />
                   </div>
                   <span className="text-stone-700 font-medium leading-relaxed">{item}</span>
                 </li>
               ))}
             </ul>
             <div className="mt-12">
                <Link href="#appointment" className="text-blue-700 font-bold flex items-center gap-2 hover:gap-4 transition-all uppercase text-xs tracking-widest">
                    Request a Clinic Tour <ArrowRight className="w-4 h-4"/>
                </Link>
             </div>
          </div>
        </div>
      </section>

      {/* 3. TREATMENTS SECTION */}
      <section className="py-24 bg-stone-900 text-stone-100 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 italic">World-Class IVF Treatment In Jangpura</h2>
            <p className="text-stone-400 max-w-3xl mx-auto text-lg font-light leading-relaxed">
              We offer the full spectrum of reproductive science, from foundational IUI to advanced genetic screening, ensuring every journey is medically optimized.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {treatments.map((treatment, i) => (
              <div key={i} className="bg-stone-800/40 border border-stone-700/50 rounded-3xl p-8 hover:bg-stone-800 transition-all group backdrop-blur-sm">
                <div className="w-12 h-12 rounded-2xl bg-blue-900/50 flex items-center justify-center mb-6 text-blue-300 group-hover:scale-110 transition-transform">
                    <Activity className="w-6 h-6"/>
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-blue-300 transition-colors">{treatment.title}</h3>
                <p className="text-stone-400 text-sm leading-relaxed font-light mb-6 line-clamp-3 group-hover:line-clamp-none transition-all duration-500">{treatment.desc}</p>
                <p className="text-stone-500 text-xs italic leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">{treatment.longDesc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. LOCAL SEO CONTENT SECTION */}
      <section className="py-24 px-4 bg-white border-y border-stone-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-stone-100 px-4 py-2 rounded-full mb-4">
                <MapPin className="w-4 h-4 text-blue-600"/>
                <span className="text-xs font-bold uppercase tracking-widest text-stone-500">Your Local Fertility Hub</span>
            </div>
            <h2 className="text-4xl font-bold text-stone-900 mb-4">A Trusted Choice Across South Delhi</h2>
            <p className="text-stone-500 font-light max-w-2xl mx-auto">Serving our prestigious local community with heart, science, and absolute medical discretion.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {localSEO.map((item, i) => (
              <div key={i} className="p-10 bg-stone-50 rounded-[2.5rem] border border-stone-100 group hover:bg-white hover:shadow-xl transition-all duration-500 flex flex-col justify-between">
                <div>
                    <h4 className="text-xl font-bold text-stone-900 mb-4 flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                        {item.location}
                    </h4>
                    <p className="text-stone-600 leading-relaxed font-light mb-8">{item.text}</p>
                </div>
                <div className="pt-6 border-t border-stone-100 flex items-center justify-between group-hover:border-blue-100 transition-colors">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400">Accessible & Elite</span>
                    <ArrowRight className="w-4 h-4 text-stone-300 group-hover:text-blue-500 transform group-hover:translate-x-2 transition-all"/>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctor Profiles */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-stone-50 overflow-hidden">
        <div className="max-w-7xl mx-auto relative">
          <div className="absolute -right-20 top-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
          <div className="text-center mb-16 relative z-10">
            <h2 className="text-4xl font-bold text-stone-900 mb-4 italic">Meet Your Specialists</h2>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto font-light">
              Led by internationally recognized fertility experts dedicated to a patient-first approach.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {doctors.map((doctor, index) => (
              <div key={index} className="bg-white rounded-[2.5rem] shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-stone-100">
                <div className="p-8">
                  <div className="flex justify-center mb-6">
                    <div className="w-36 h-36 bg-gradient-to-br from-blue-100 to-stone-100 rounded-full flex items-center justify-center shadow-inner overflow-hidden border-4 border-white">
                      <Image
                        src={doctor.image}
                        alt={`IVF Specialist In Jangpura - ${doctor.name}`}
                        width={140}
                        height={140}
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </div>
                  <h4 className="text-2xl font-bold text-stone-800 mb-2 text-center group-hover:text-blue-800 transition-colors">{doctor.name}</h4>
                  <p className="text-blue-600 font-medium mb-1 text-center text-sm uppercase tracking-wide">{doctor.title}</p>
                  <p className="text-stone-500 text-xs text-center mb-6 italic min-h-[32px]">{doctor.specialty}</p>
                  <div className="flex items-center justify-center gap-2 text-blue-700 bg-blue-50 py-2 rounded-full font-bold text-xs uppercase tracking-widest">
                    <Award className="w-3.5 h-3.5"/> {doctor.experience} Clinical Exp.
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SUCCESS & TRUST STORIES */}
      <section className="py-24 px-4 bg-stone-900 text-stone-100">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
           <div>
              <div className="w-16 h-1 bg-blue-500 mb-8"></div>
              <h2 className="text-4xl font-bold mb-8 leading-tight italic">High IVF Success Rate Delhi: <br/><span className="text-blue-400">Real Families, Not Just Data.</span></h2>
              <div className="space-y-6 text-lg text-stone-400 leading-relaxed font-light">
                 <p>
                    Success isn't just about a medical report; it's about the first time you hold your baby. At our clinic in Jangpura, we achieve industry-leading results by combining advanced time-lapse incubation with personalized hormone mapping.
                 </p>
                 <p>
                    We’ve helped thousands of couples from <strong>South Delhi, NFC, and Nizamuddin</strong> overcome barriers like poor egg quality and male infertility through precision medicine.
                 </p>
                 <p className="text-sm italic text-stone-500 border-l-2 border-stone-700 pl-4 py-2">
                    *Success rates vary depending on individual medical history, age, and lifestyle factors.
                 </p>
              </div>
           </div>
           <div className="grid gap-6">
              {[
                { name: "Rahul & Meena", loc: "Jangpura Extension", text: "After three failed attempts elsewhere, we were broken. The team here didn't just give us treatment; they gave us emotional strength. Today, our daughter is proof that miracles happen with the right experts." },
                { name: "Siddharth", loc: "Lodhi Road", text: "Dealing with male infertility was difficult to accept. The discretion and professional ICSI treatment we received in Jangpura was world-class. Highly recommended for couples seeking honest answers." }
              ].map((story, i) => (
                <div key={i} className="bg-stone-800/50 p-10 rounded-[2.5rem] border border-stone-700/50 shadow-sm relative group hover:bg-stone-800 transition-all backdrop-blur-md">
                   <div className="flex text-yellow-500 mb-4 gap-1">
                      {[1,2,3,4,5].map(s => <Star key={s} className="fill-current w-4 h-4" />)}
                   </div>
                   <p className="text-stone-300 italic mb-8 leading-relaxed text-lg">"{story.text}"</p>
                   <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center font-bold text-blue-400">{story.name[0]}</div>
                        <div>
                            <div className="font-bold text-stone-100">{story.name}</div>
                            <div className="text-[10px] uppercase tracking-widest text-blue-400 font-bold mt-0.5">{story.loc}</div>
                        </div>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 6. FAQ SECTION */}
      <section className="py-24 px-4 bg-white border-b border-stone-100">
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-20">
                <h2 className="text-4xl font-bold text-stone-900 mb-4">Frequently Asked Conversations</h2>
                <p className="text-stone-500 font-light italic">Your journey is unique. Here are answers to the most common questions from our Jangpura patients.</p>
            </div>
            <div className="space-y-4">
            {faqs.map((faq, i) => (
                <div key={i} className="bg-stone-50 border border-stone-100 rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-lg">
                <button 
                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                    className="w-full text-left px-10 py-8 font-bold text-stone-800 flex justify-between items-center focus:outline-none hover:bg-blue-50/50"
                >
                    <span className="pr-10 text-lg leading-tight">{faq.q}</span>
                    {activeFaq === i ? <Minus className="w-5 h-5 text-blue-800 flex-shrink-0" /> : <Plus className="w-5 h-5 text-stone-300 flex-shrink-0" />}
                </button>
                {activeFaq === i && (
                    <div className="px-10 pb-10 text-stone-600 leading-relaxed font-light border-t border-stone-100/50 pt-8 bg-white animate-fade-in">
                    {faq.a}
                    </div>
                )}
                </div>
            ))}
            </div>
        </div>
      </section>

      {/* Social & Trust Connections */}
      <section className="py-20 px-4 bg-white text-stone-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center text-left">
            <div>
              <h2 className="text-3xl font-bold text-stone-900 mb-6 font-serif italic text-blue-800">Connect With Our Community</h2>
              <p className="text-lg text-stone-600 mb-8 leading-relaxed font-light">
                Stay updated with the latest in fertility science, watch real patient success stories, and join our growing community of hopeful parents across New Delhi.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="https://www.instagram.com/praviglobalivfpolyclinic/" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-bold transition-transform hover:scale-105 shadow-lg">
                  <Instagram className="w-5 h-5"/> Instagram
                </a>
                <a href="https://www.facebook.com/PraviIVF" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-[#1877F2] text-white rounded-full font-bold transition-transform hover:scale-105 shadow-lg">
                  <Facebook className="w-5 h-5"/> Facebook
                </a>
                <a href="https://www.youtube.com/watch?v=2N0bx-OFLYQ" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-[#FF0000] text-white rounded-full font-bold transition-transform hover:scale-105 shadow-lg">
                  <Youtube className="w-5 h-5"/> Watch Stories
                </a>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a href="https://www.practo.com/delhi/clinic/pravi-global-ivf-polyclinic-lajpat-nagar-4/abo" target="_blank" rel="noreferrer" className="p-8 bg-stone-50 border border-stone-100 rounded-3xl hover:border-blue-200 hover:shadow-xl transition-all group">
                <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform"><Activity className="w-8 h-8"/></div>
                <h4 className="font-bold text-stone-900 mb-2">Practo Verified</h4>
                <p className="text-xs text-stone-500 leading-relaxed">Verified reviews and easy appointment booking for South Delhi patients.</p>
              </a>
              <a href="https://www.justdial.com/Kanpur/Pravi-Ivf-Fertility-Centre-Near-Raj-Ratan-Saree-Motijheel-Chauraha-Swaroop-Nagar/0512PX512-X512-160714183543-G2T4_BZDET" target="_blank" rel="noreferrer" className="p-8 bg-stone-50 border border-stone-100 rounded-3xl hover:border-blue-200 hover:shadow-xl transition-all group">
                <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform"><Star className="w-8 h-8"/></div>
                <h4 className="font-bold text-stone-900 mb-2">JustDial Top Rated</h4>
                <p className="text-xs text-stone-500 leading-relaxed">Highest rated fertility centre with trusted feedback.</p>
              </a>
              <a href="https://share.google/l3CxCfdJJf9C1DQBL" target="_blank" rel="noreferrer" className="p-8 bg-stone-50 border border-stone-100 rounded-3xl hover:border-blue-200 hover:shadow-xl transition-all group">
                <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform"><MapPin className="w-8 h-8"/></div>
                <h4 className="font-bold text-stone-900 mb-2">Directions</h4>
                <p className="text-xs text-stone-500 leading-relaxed">Visit our flagship South Delhi centre. Easily accessible from Jangpura & NFC.</p>
              </a>
              <a href="https://praviivf.in/" target="_blank" rel="noreferrer" className="p-8 bg-stone-50 border border-stone-100 rounded-3xl hover:border-blue-200 hover:shadow-xl transition-all group">
                <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform"><ExternalLink className="w-8 h-8"/></div>
                <h4 className="font-bold text-stone-900 mb-2">Main Portal</h4>
                <p className="text-xs text-stone-500 leading-relaxed">Explore our full clinical range and international fertility success stories.</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Locations (Internal Links) */}
      <section className="py-20 px-4 bg-stone-50 border-t border-stone-200 text-stone-800">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-stone-900 mb-8 uppercase tracking-widest text-blue-900">Explore Other Locations</h2>
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
          <h2 className="text-4xl md:text-5xl font-bold mb-8 italic">Your Story is Waiting to Begin.</h2>
          <p className="text-xl text-blue-100 mb-12 font-light leading-relaxed">
            You don't have to walk this path alone. Let's talk about the science, the options, and the hope that's available to you today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="#appointment" className="bg-blue-500 hover:bg-blue-600 text-white px-12 py-5 rounded-full font-bold text-lg transition-all shadow-2xl active:scale-95">
              Request Your Callback
            </Link>
            <a href="tel:+919999999999" className="bg-blue-950/40 hover:bg-blue-950/60 text-white px-12 py-5 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-3 border border-blue-800 active:scale-95 shadow-xl">
              <Phone className="w-5 h-5"/> Talk to an Expert
            </a>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer" className="fixed bottom-10 right-10 bg-blue-500 text-white p-5 rounded-full shadow-2xl hover:bg-blue-600 transition-all z-50 flex items-center justify-center hover:scale-110 active:scale-90 shadow-[0_10px_30px_rgba(59,130,246,0.5)]">
        <svg viewBox="0 0 24 24" className="w-9 h-9 fill-current">
           <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-5.824 4.74-10.563 10.564-10.563 5.826 0 10.564 4.741 10.564 10.564 0 5.822-4.74 10.563-10.564 10.563z"/>
        </svg>
      </a>

    </div>
  );
}
