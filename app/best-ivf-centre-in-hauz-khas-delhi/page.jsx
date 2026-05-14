'use client'
import React, { useState } from 'react';
import { Phone, CheckCircle, Activity, Heart, Shield, Users, MapPin, Plus, Minus, ArrowRight, Star, Award, Info, Sparkles, Instagram, Facebook, Youtube, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function HauzKhasIVFPage() {
  const [activeFaq, setActiveFaq] = useState(null);

  const treatments = [
    { title: "Advanced IVF Treatment", desc: "The most effective path when other methods haven't worked. We retrieve your eggs, fertilize them in our specialized lab, and carefully transfer the healthiest embryo." },
    { title: "IUI Treatment (Intrauterine Insemination)", desc: "A simpler, less invasive option where we place concentrated sperm directly into the uterus during ovulation. A great first step for younger couples." },
    { title: "ICSI Treatment", desc: "A game-changer for male factor infertility. We inject a single, healthy sperm directly into the egg, drastically improving fertilization rates." },
    { title: "Egg Freezing", desc: "Stop the biological clock and provide peace of mind. We preserve your healthy eggs today so you can start a family whenever the time feels right for you." },
    { title: "Male Infertility Treatment", desc: "We provide a private, professional environment for men to get the testing and treatment they need, ensuring both partners are supported." },
    { title: "Female Infertility Specialist", desc: "We look beyond the obvious to find out exactly why you aren't getting pregnant, treating the root cause with compassion and world-class expertise." },
    { title: "PCOS Fertility Support", desc: "Our specialists are experts at managing PCOS through customized medication protocols to help your body produce and release healthy eggs safely." },
    { title: "Low AMH Treatment", desc: "A low egg count doesn't mean it's impossible. We use customized, gentle stimulation to make the most of the eggs you have left." },
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
      q: "Which is the best ivf center in Hauz Khas delhi?",
      a: "Our clinic is widely recognized as the Best IVF Centre In Hauz Khas, New Delhi due to our High IVF Success Rate Delhi, senior specialists, and honest, ethical approach to fertility care."
    },
    {
      q: "How long does a whole IVF cycle take?",
      a: "From the start of your period to the embryo transfer, it usually takes about 3 to 4 weeks. You'll need a few short morning appointments for monitoring, but it won't disrupt your life in South Delhi."
    },
    {
      q: "Will I need to take months off work?",
      a: "Not at all. You’ll need a few short morning appointments, but most of our patients continue their normal careers and lives throughout their treatment."
    },
    {
      q: "What if I have PCOS?",
      a: "PCOS is a common challenge, but women with PCOS actually have excellent success rates because they tend to have many eggs. We use specific protocols to manage this safely."
    },
    {
      q: "How much does IVF cost in Hauz Khas?",
      a: "It varies based on your medication needs, but we provide a full, transparent breakdown on your first visit. We also offer EMI options to make it manageable."
    }
  ];

  const localities = ["Hauz Khas", "Green Park", "Safdarjung", "Malviya Nagar", "IIT Delhi", "South Delhi", "RK Puram", "Vasant Vihar", "Panchsheel", "SDA Market"];

  return (
    <div className="bg-stone-50 min-h-screen text-stone-800">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-blue-900 text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-purple-950 opacity-90 z-10"></div>
        
        <div className="max-w-7xl mx-auto relative z-20 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 bg-blue-500/20 backdrop-blur-md border border-blue-400 rounded-full px-5 py-2 text-blue-100 font-semibold text-sm mb-8">
              <Sparkles className="w-4 h-4 text-blue-300"/>
              <span>Hauz Khas's Premier Fertility Hub</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8">
              Best <span className="text-blue-300 italic">IVF Centre In Hauz Khas, New Delhi</span>: Your Path to Parenthood.
            </h1>
            <div className="flex items-center gap-4 mb-10">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span className="text-blue-100 font-semibold">4.9/5 based on 248+ Google Reviews</span>
            </div>
            <p className="text-xl text-blue-100 mb-10 max-w-xl leading-relaxed">
              We know the dream of holding your baby can feel both beautiful and overwhelming. At our Hauz Khas clinic, we combine world-class science with a heart that truly understands.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
              {[
                "Privacy in the heart of Hauz Khas",
                "Specialists who truly listen",
                "Advanced lab for embryo safety",
                "High success, honest care"
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
              <Link href="#appointment" className="bg-blue-500 hover:bg-blue-600 text-white px-10 py-5 rounded-full font-bold text-lg text-center transition-all shadow-2xl shadow-purple-900/40">
                Book Your Consultation
              </Link>
              <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer" className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-10 py-5 rounded-full font-bold text-lg text-center transition-all flex items-center justify-center gap-2">
                WhatsApp Us Directly
              </a>
            </div>
          </div>

          {/* Lead Form */}
          <div className="bg-white rounded-[2.5rem] p-10 shadow-2xl relative border border-stone-100" id="appointment">
            <h3 className="text-3xl font-bold text-stone-900 mb-3">Speak with a Partner</h3>
            <p className="text-stone-500 mb-8 leading-relaxed">Let's start with a quiet, confidential conversation about your journey.</p>
            
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-stone-400 mb-2">Your Name</label>
                  <input type="text" className="w-full px-5 py-4 bg-stone-50 border border-stone-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all" placeholder="Name" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-stone-400 mb-2">Phone Number</label>
                  <input type="tel" className="w-full px-5 py-4 bg-stone-50 border border-stone-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all" placeholder="Number" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-stone-400 mb-2">How can we help?</label>
                <select className="w-full px-5 py-4 bg-stone-50 border border-stone-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all appearance-none">
                  <option>Thinking about IVF</option>
                  <option>Interested in IUI</option>
                  <option>Need PCOS support</option>
                  <option>Egg Freezing inquiry</option>
                  <option>Just want to talk</option>
                </select>
              </div>
              <button type="button" className="w-full bg-indigo-800 hover:bg-blue-900 text-white font-bold py-5 rounded-2xl transition-all shadow-lg active:scale-95">
                Send a Callback Request
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
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-8 leading-tight">More Than Just a Clinic. <br/><span className="text-indigo-700">A Sanctuary in Hauz Khas.</span></h2>
            <div className="space-y-6 text-lg text-stone-600 leading-relaxed font-light">
              <p>
                When you walk into our clinic in Hauz Khas, you’ll notice something different. We’ve purposely designed our space to feel less like a hospital and more like a sanctuary.
              </p>
              <p>
                We understand that the stress of infertility is real, and the environment where you receive care matters just as much as the science itself. Our specialists have helped thousands of families from <strong>Green Park, Safdarjung, and Malviya Nagar</strong> find their way back to hope.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8 border-t border-stone-100 pt-12">
               <div>
                  <div className="text-4xl font-bold text-indigo-800">15+</div>
                  <div className="text-xs uppercase tracking-widest text-stone-400 mt-2">Years Excellence</div>
               </div>
               <div>
                  <div className="text-4xl font-bold text-indigo-800">5000+</div>
                  <div className="text-xs uppercase tracking-widest text-stone-400 mt-2">Happy Families</div>
               </div>
            </div>
          </div>
          <div className="bg-stone-100 rounded-[3rem] p-12 relative overflow-hidden group border border-stone-200">
             <div className="absolute top-0 right-0 p-8">
                <Award className="w-12 h-12 text-indigo-800 opacity-20" />
             </div>
             <h3 className="text-2xl font-bold text-blue-900 mb-8">Why Hauz Khas Trusts Us</h3>
             <ul className="space-y-6">
               {[
                 "A team that treats you like a partner, not a patient.",
                 "The most advanced IVF laboratory in South Delhi.",
                 "Transparent pricing with absolutely no hidden fees.",
                 "Deeply personal protocols for complex fertility cases.",
                 "Compassionate support that doesn't end at 5 PM."
               ].map((item, i) => (
                 <li key={i} className="flex items-start gap-4">
                   <div className="w-6 h-6 rounded-lg bg-indigo-800 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md">
                     <Heart className="w-3.5 h-3.5 text-white" />
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Fertility Care Tailored to You</h2>
            <p className="text-stone-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
              We offer the full spectrum of reproductive science, but we only recommend what your specific journey requires.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {treatments.map((treatment, i) => (
              <div key={i} className="bg-stone-800/50 border border-stone-700 rounded-3xl p-8 hover:bg-stone-800 transition-all group">
                <h3 className="text-xl font-bold mb-4 group-hover:text-blue-300 transition-colors">{treatment.title}</h3>
                <p className="text-stone-400 text-sm leading-relaxed font-light">{treatment.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SUCCESS & TRUST */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
           <div>
              <h2 className="text-4xl font-bold text-stone-900 mb-8 leading-tight">Honest Success. <br/>Better Results.</h2>
              <div className="space-y-6 text-lg text-stone-600 leading-relaxed font-light">
                 <p>
                    Success isn't just about a positive test; it's about a healthy delivery. Our clinic in Hauz Khas is proud of our consistently high IVF success rates, but we're even prouder of the families we've helped stay strong through the process.
                 </p>
                 <p className="text-sm italic text-stone-400">
                    *Success rates may vary depending on age, medical history, and specific fertility conditions.
                 </p>
              </div>
              <div className="mt-10 flex flex-wrap gap-3">
                 {localities.map(loc => (
                   <span key={loc} className="px-4 py-1.5 bg-stone-50 text-stone-400 rounded-full text-[10px] uppercase tracking-widest font-bold border border-stone-100">{loc}</span>
                 ))}
              </div>
           </div>
           <div className="grid gap-6">
              {[
                { name: "Aditi & Karan", loc: "Hauz Khas", text: "After three failed attempts at other clinics, we almost gave up. The team here found an issue no one else saw. We finally have our son." },
                { name: "Neha", loc: "Green Park", text: "They didn't just treat my body; they treated my spirit. In Hauz Khas, this is the only clinic I'd ever recommend." }
              ].map((story, i) => (
                <div key={i} className="bg-stone-50 p-10 rounded-[2.5rem] border border-stone-100 shadow-sm relative">
                   <div className="flex text-blue-600 mb-4 gap-1">
                      <Star className="fill-current w-3.5 h-3.5" /><Star className="fill-current w-3.5 h-3.5" /><Star className="fill-current w-3.5 h-3.5" /><Star className="fill-current w-3.5 h-3.5" /><Star className="fill-current w-3.5 h-3.5" />
                   </div>
                   <p className="text-stone-600 italic mb-6 leading-relaxed">"{story.text}"</p>
                   <div className="font-bold text-stone-900">{story.name}</div>
                   <div className="text-[10px] uppercase tracking-widest text-indigo-700 font-bold mt-1">{story.loc}</div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Doctor Profiles */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-100 px-4 py-2 rounded-full mb-4">
              <Users className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-semibold text-indigo-700">Expert Team</span>
            </div>
            <h2 className="text-4xl font-bold text-stone-900 mb-4">Meet Our Specialists</h2>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto">
              Led by internationally recognized fertility experts with decades of combined experience
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {doctors.map((doctor, index) => (
              <div key={index} className="bg-stone-50 rounded-[2.5rem] shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-stone-100">
                <div className="p-8">
                  <div className="flex justify-center mb-6">
                    <div className="w-32 h-32 bg-gradient-to-br from-indigo-400 to-blue-400 rounded-full flex items-center justify-center shadow-xl overflow-hidden">
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

      {/* 5. FAQ SECTION */}
      <section className="py-24 px-4 max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-stone-900 mb-4">Honest Answers</h2>
          <p className="text-stone-500 font-light">There are no silly questions when it comes to your family.</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white border border-stone-100 rounded-2xl overflow-hidden shadow-sm transition-all hover:shadow-md">
              <button 
                onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                className="w-full text-left px-10 py-7 font-bold text-stone-800 flex justify-between items-center focus:outline-none hover:bg-stone-50"
              >
                <span className="pr-10">{faq.q}</span>
                {activeFaq === i ? <Minus className="w-5 h-5 text-indigo-800 flex-shrink-0" /> : <Plus className="w-5 h-5 text-stone-300 flex-shrink-0" />}
              </button>
              {activeFaq === i && (
                <div className="px-10 pb-10 text-stone-600 leading-relaxed font-light border-t border-stone-50 pt-8 bg-stone-50/30">
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
              <h2 className="text-3xl font-bold text-slate-900 mb-6 font-serif italic">Connect With Our Community</h2>
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

      {/* 6. BOTTOM CTA */}
      <section className="bg-blue-900 text-white py-24 px-4 text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Hear Your Story</h2>
          <p className="text-xl text-blue-100 mb-12 font-light leading-relaxed">
            You don't need a medical degree to understand your body. You just need a doctor who takes the time to explain it. Let's talk about your next steps.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="#appointment" className="bg-blue-500 hover:bg-blue-600 text-white px-12 py-5 rounded-full font-bold text-lg transition-all shadow-2xl active:scale-95">
              Start Your Consultation
            </Link>
            <a href="tel:+919999999999" className="bg-blue-950/40 hover:bg-blue-950/60 text-white px-12 py-5 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-3 border border-indigo-800 active:scale-95">
              <Phone className="w-5 h-5"/> Call the Hauz Khas Clinic
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
