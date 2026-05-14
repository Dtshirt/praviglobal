'use client'
import React, { useState } from 'react';
import { Phone, CheckCircle, Activity, Heart, Shield, Users, MapPin, Plus, Minus, ArrowRight, Star, Award, Info, Sparkles, Instagram, Facebook, Youtube, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function VasantViharIVFPage() {
  const [activeFaq, setActiveFaq] = useState(null);

  const treatments = [
    { 
      title: "IVF Treatment In Vasant Vihar", 
      desc: "Our IVF Clinic In Vasant Vihar provides world-class IVF Treatment In Vasant Vihar with a High IVF Success Rate Delhi.",
      longDesc: "When you choose our Vasant Vihar centre, you are choosing a team that treats your family as their own. We use the latest in reproductive science to give you the highest chance of holding your baby."
    },
    { 
      title: "IUI Treatment Delhi", 
      desc: "Expert IUI Treatment Delhi at our Fertility Centre In Vasant Vihar. A simple and effective first step for Chanakyapuri families.",
      longDesc: "IUI is often the first real medical step on a fertility journey. We optimize the sperm and time the placement perfectly with your ovulation to maximize the chance of a natural-feeling conception."
    },
    { 
      title: "ICSI Treatment Delhi", 
      desc: "Specialized ICSI Treatment Delhi for male fertility factors at our leading IVF Hospital In South Delhi.",
      longDesc: "ICSI has revolutionized the treatment of male factor infertility. By injecting a single healthy sperm directly into the egg, we overcome obstacles that would have otherwise prevented fertilization."
    },
    { 
      title: "Egg Freezing", 
      desc: "Preserve your future with advanced egg freezing at the best IVF Clinic In Vasant Vihar.",
      longDesc: "Don't let the clock dictate your life. Our vitrification technology allows you to freeze your eggs at their peak health, giving you the freedom to start a family when the time is truly right for you."
    },
    { 
      title: "Male Infertility Treatment Delhi", 
      desc: "Compassionate Male Infertility Treatment Delhi in South Delhi. Our IVF Doctor In Vasant Vihar finds solutions for every family.",
      longDesc: "Infertility is a shared journey. We provide a private, professional environment for men to receive everything from advanced semen analysis to surgical sperm retrieval (TESA/PESA)."
    },
    { 
      title: "Female Infertility Specialist Delhi", 
      desc: "Consult our Female Infertility Specialist Delhi at the Best IVF Clinic In Vasant Vihar for personalized fertility care.",
      longDesc: "From tubal blockages to endometriosis, we dig deep to find the 'why' behind your struggles. Our specialists create targeted plans that treat the root cause, not just the symptoms."
    },
    { 
      title: "PCOS Fertility Treatment Delhi", 
      desc: "Specialized PCOS Fertility Treatment Delhi at our IVF Centre In Vasant Vihar to help you conceive safely.",
      longDesc: "PCOS doesn't mean you can't get pregnant. It just means you need a doctor who understands the delicate hormonal balance required to help your body release healthy eggs."
    },
    { 
      title: "Low AMH Treatment Delhi", 
      desc: "Expert Low AMH Treatment Delhi using customized protocols at our Fertility Clinic In South Delhi.",
      longDesc: "A low egg count is a challenge, not a dead end. We use customized, gentle stimulation protocols designed to make the absolute most of the eggs you have left."
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
      q: "Which is the best ivf center in Vasant Vihar delhi?",
      a: "Our clinic is widely recognized as the Best IVF Centre In Vasant Vihar, New Delhi due to our High IVF Success Rate Delhi, senior specialists, and honest, ethical approach to fertility care."
    },
    {
      q: "What makes you the Best IVF Clinic In Vasant Vihar?",
      a: "It’s our combination of a High IVF Success Rate Delhi, compassionate care from an IVF Specialist In Vasant Vihar, and transparent Affordable IVF Treatment Delhi. We don't just treat you as a patient; we treat you as a family."
    },
    {
      q: "Do you offer IUI Treatment Delhi for Vasant Vihar residents?",
      a: "Yes, we often recommend IUI Treatment Delhi as a simpler first step at our Fertility Centre In Vasant Vihar. It's a quick, affordable, and effective way for many couples to take their first step toward parenthood."
    },
    {
      q: "Can I see a Male Infertility Treatment Delhi specialist in South Delhi?",
      a: "Absolutely. We provide complete Male Infertility Treatment Delhi within our IVF Hospital In South Delhi. We believe in treating both partners to ensure the best possible outcome."
    },
    {
      q: "What is the success rate for PCOS Fertility Treatment Delhi?",
      a: "Women with PCOS often have very high success rates at our IVF Centre In Vasant Vihar once their cycles are managed by the Best IVF Doctor In Vasant Vihar. In fact, PCOS patients often produce many healthy eggs for IVF."
    },
    {
      q: "Is IVF treatment expensive in South Delhi?",
      a: "We believe in Affordable IVF Treatment Delhi. We provide a full, transparent breakdown of costs from day one, so there are never any surprises. We also offer EMI options to make it easier for you."
    },
    {
      q: "What is Low AMH, and can you treat it?",
      a: "Low AMH indicates a lower egg count. At our Fertility Clinic In South Delhi, we use specialized protocols to maximize the quality and quantity of eggs during your IVF cycle."
    },
    {
      q: "How long does a typical IVF cycle take?",
      a: "A full cycle, from the start of your period to the embryo transfer, usually takes about 3 to 4 weeks. You'll need a few short morning appointments, but it won't disrupt your daily life."
    },
    {
      q: "Can I choose the gender of my baby?",
      a: "In India, gender selection is illegal under the PCPNDT Act. We focus strictly on the health and success of your pregnancy and are committed to ethical practices."
    },
    {
      q: "Will I need to take bed rest after IVF?",
      a: "No! Modern science shows that light daily activity is actually better for blood flow. You can go back to your normal life (avoiding heavy lifting) almost immediately after the transfer."
    }
  ];

  const localSEO = [
    { location: "IVF Centre Near Vasant Kunj", text: "Located just a stone's throw from Vasant Kunj, our Vasant Vihar clinic is the premier choice for families seeking elite fertility care in a private sanctuary." },
    { location: "Fertility Clinic In Chanakyapuri", text: "Serving the diplomatic community of Chanakyapuri, we offer the highest standards of medical discretion and advanced reproductive science." },
    { location: "IVF Treatment Near RK Puram", text: "Residents of RK Puram trust our specialists for their deep expertise in complex cases and our consistently high IVF success rates." },
    { location: "Fertility Experts In Munirka", text: "If you are looking for Fertility Experts In Munirka, our team brings over 18 years of clinical experience to provide honest and effective solutions." },
    { location: "IVF Specialist Near Safdarjung", text: "Conveniently accessible for Safdarjung families, our centre provides a modern sanctuary for those on their path to parenthood." },
    { location: "Fertility Care In Hauz Khas", text: "From Hauz Khas to Green Park, we are the trusted choice for families seeking international standards of embryology and compassionate care." },
    { location: "IVF Consultation Near Aerocity", text: "Starting your journey with an IVF consultation near Aerocity is simple. Our Vasant Vihar clinic offers immediate support and personalized treatment maps." },
    { location: "Fertility Clinic In South Delhi", text: "As a leading fertility clinic in South Delhi, we pride ourselves on being a sanctuary for couples. We combine world-class science with a heart that truly understands." }
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
              <span>Best IVF Centre In Vasant Vihar, New Delhi</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8">
              Where <span className="text-blue-300 italic">Excellence</span> Meets Hope in Vasant Vihar.
            </h1>
            <p className="text-xl text-blue-100 mb-10 max-w-xl leading-relaxed font-light">
              Experience the perfect blend of international medical science and compassionate fertility care. We are here to help you build your future.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
              {[
                "Best IVF Clinic In Vasant Vihar",
                "High IVF Success Rate Delhi",
                "Affordable IVF Treatment Delhi",
                "Expert IVF Specialist In Vasant Vihar"
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
            <h3 className="text-3xl font-bold text-stone-900 mb-3">Begin Your Story</h3>
            <p className="text-stone-500 mb-8 leading-relaxed">Let's talk about how we can help you hold your baby. No pressure, just a caring conversation.</p>
            
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-stone-400 mb-2">Full Name</label>
                  <input type="text" className="w-full px-5 py-4 bg-stone-50 border border-stone-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all" placeholder="Name" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-stone-400 mb-2">Phone Number</label>
                  <input type="tel" className="w-full px-5 py-4 bg-stone-50 border border-stone-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all" placeholder="Mobile" />
                </div>
              </div>
              <button type="button" className="w-full bg-blue-800 hover:bg-blue-900 text-white font-bold py-5 rounded-2xl transition-all shadow-lg active:scale-95">
                Request Vasant Vihar Callback
              </button>
              <div className="flex items-center justify-center gap-2 text-[10px] uppercase tracking-widest text-stone-400">
                <Shield className="w-3 h-3"/> 100% Confidential & Ethical Care
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
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-8 leading-tight italic">Advanced IVF Treatment In Vasant Vihar: <br/><span className="text-blue-700">The Gold Standard in Fertility.</span></h2>
            <div className="space-y-6 text-lg text-stone-600 leading-relaxed font-light">
              <p>
                When you search for the <strong>Best IVF Centre In Vasant Vihar, New Delhi</strong>, you aren't just looking for a clinic. You're looking for a partner who understands the high standards of our community.
              </p>
              <p>
                At our Vasant Vihar facility, we’ve created a space that feels less like a clinic and more like a sanctuary. We’ve helped families from <strong>Shanti Niketan, Chanakyapuri, and Vasant Kunj</strong> find their way back to hope through personalized, honest care.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8 border-t border-stone-100 pt-12">
               <div>
                  <div className="text-4xl font-bold text-blue-800">18+</div>
                  <div className="text-xs uppercase tracking-widest text-stone-400 mt-2">Years of Excellence</div>
               </div>
               <div>
                  <div className="text-4xl font-bold text-blue-800">High</div>
                  <div className="text-xs uppercase tracking-widest text-stone-400 mt-2">IVF Success Rates</div>
               </div>
            </div>
          </div>
          <div className="bg-stone-100 rounded-[3rem] p-12 relative overflow-hidden group border border-stone-200">
             <div className="absolute top-0 right-0 p-8">
                <Award className="w-12 h-12 text-blue-800 opacity-20" />
             </div>
             <h3 className="text-2xl font-bold text-blue-900 mb-8">Why Vasant Vihar Trusts Us</h3>
             <ul className="space-y-6">
               {[
                 "Consultations with the Best IVF Doctor In Vasant Vihar.",
                 "High IVF Success Rate Delhi even in complex cases.",
                 "Transparent and Affordable IVF Treatment Delhi.",
                 "Specialized PCOS Fertility Treatment Delhi protocols.",
                 "Expert Male Infertility Treatment Delhi in South Delhi."
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Expert IVF Treatment In Vasant Vihar</h2>
            <p className="text-stone-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
              We offer the full spectrum of reproductive science, but we only recommend what your specific journey requires.
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
            <h2 className="text-4xl font-bold text-stone-900 mb-4">A Trusted Choice Across South Delhi</h2>
            <p className="text-stone-500 font-light">Serving the most prestigious neighborhoods with absolute discretion and clinical excellence.</p>
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
              <span className="text-sm font-semibold text-blue-700">Expert Team</span>
            </div>
            <h2 className="text-4xl font-bold text-stone-900 mb-4">Meet Your Care Team</h2>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto font-light">
              Led by internationally recognized fertility experts who believe in the power of personalized care.
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
              <h2 className="text-4xl font-bold text-stone-900 mb-8 leading-tight italic text-blue-800">Honest Success. <br/>Families, Not Just Numbers.</h2>
              <div className="space-y-6 text-lg text-stone-600 leading-relaxed font-light">
                 <p>
                    Success isn't just about a positive pregnancy test; it's about the healthy delivery of your child. At our clinic in Vasant Vihar, we pride ourselves on being honest about your chances while working tirelessly to improve them.
                 </p>
                 <p>
                    We’ve helped thousands of couples from <strong>Chanakyapuri, RK Puram, and Shanti Niketan</strong> find their path to parenthood when they thought all hope was lost.
                 </p>
                 <p className="text-sm italic text-stone-400">
                    *Success rates vary depending on individual medical history and age.
                 </p>
              </div>
           </div>
           <div className="grid gap-6">
              {[
                { name: "Suman & Rahul", loc: "Vasant Vihar", text: "We spent years trying on our own. When we finally came here, we felt heard. The Best IVF Doctor In Vasant Vihar took the time to explain everything. Now we have our beautiful twin boys." },
                { name: "Priya", loc: "Chanakyapuri", text: "Dealing with Low AMH was so scary. But the doctors here gave me hope. Their personalized approach to Low AMH Treatment Delhi was exactly what I needed. I'm 4 months pregnant today!" }
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
          <h2 className="text-4xl font-bold text-stone-900 mb-4">Conversations & Answers</h2>
          <p className="text-stone-500 font-light">You probably have a lot of questions. We're here to answer every one of them.</p>
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
          <h2 className="text-4xl md:text-5xl font-bold mb-8 italic">Ready to Start Your Journey?</h2>
          <p className="text-xl text-blue-100 mb-12 font-light leading-relaxed">
            You don't need a medical degree to understand your fertility. You just need a doctor who takes the time to explain it. Let's talk about how we can help you build your family.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="#appointment" className="bg-blue-500 hover:bg-blue-600 text-white px-12 py-5 rounded-full font-bold text-lg transition-all shadow-2xl active:scale-95">
              Book Your Consultation
            </Link>
            <a href="tel:+919999999999" className="bg-blue-950/40 hover:bg-blue-950/60 text-white px-12 py-5 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-3 border border-blue-800 active:scale-95">
              <Phone className="w-5 h-5"/> Contact Vasant Vihar Clinic
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
