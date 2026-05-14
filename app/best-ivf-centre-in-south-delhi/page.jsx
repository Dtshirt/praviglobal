'use client'
import React, { useState } from 'react';
import { Phone, CheckCircle, Activity, Heart, Shield, Users, MapPin, Plus, Minus, ArrowRight, Star, Award, Info, Instagram, Facebook, Youtube, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function SouthDelhiIVFPage() {
  const [activeFaq, setActiveFaq] = useState(null);

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

  const treatments = [
    { title: "In Vitro Fertilization (IVF)", desc: "The most effective treatment available today. We retrieve your eggs, combine them with sperm in our lab, and place a healthy embryo back into your uterus." },
    { title: "IUI Treatment", desc: "A simpler starting point. We wash the sperm and place it directly into the uterus exactly when you ovulate. Less medication, more affordable." },
    { title: "ICSI Treatment", desc: "For severe male infertility. Our embryologist selects the single best-looking sperm and injects it directly into the egg, almost guaranteeing fertilization." },
    { title: "Egg Freezing", desc: "Hit pause on your biological clock. We freeze your healthy eggs now so they are waiting safely for whenever you're ready to start a family." },
    { title: "Male Infertility Care", desc: "Infertility isn't just a woman's issue. We offer everything from advanced semen analysis to minor surgical procedures to find healthy sperm." },
    { title: "Female Infertility", desc: "We look beyond the obvious to find out exactly why you aren't getting pregnant, treating the root cause rather than just the symptoms." },
    { title: "PCOS Management", desc: "Women with PCOS actually have great IVF success rates once the medication is dialed in correctly. We help your body release eggs safely." },
    { title: "Low AMH Support", desc: "A low egg count doesn't mean it's impossible. We use customized, gentle stimulation protocols to make the most of the eggs you have left." },
  ];

  const faqs = [
    {
      q: "Which is the best ivf center in South Delhi delhi?",
      a: "Our clinic is widely recognized as the Best IVF Centre In South Delhi, New Delhi due to our High IVF Success Rate Delhi, senior specialists, and honest, ethical approach to fertility care."
    },
    {
      q: "How much does an IVF cycle usually cost here?",
      a: "It varies depending on your medication needs, but we promise complete transparency. Book a consultation, and once we see your scan, we will give you the exact figure down to the rupee."
    },
    {
      q: "Will I need to quit my job or go on bed rest?",
      a: "Not at all. You will need to come in for a few short ultrasound appointments, but you can go to work normally. Even after the embryo transfer, light daily activity is actually better for blood flow."
    },
    {
      q: "I have PCOS. Does that mean IVF won't work?",
      a: "Actually, it’s the opposite. Women with PCOS usually have a lot of eggs. The challenge is getting them to grow safely. Our doctors are experts at managing PCOS, and these patients usually have excellent pregnancy rates."
    },
    {
      q: "What's the difference between IVF and IUI?",
      a: "Think of IUI as giving the sperm a head start; we place it directly into the uterus, but fertilization still happens naturally inside your body. With IVF, we take the eggs out, fertilize them in our lab, and put a growing embryo back inside."
    }
  ];

  const localities = ["Greater Kailash", "Lajpat Nagar", "Green Park", "South Extension", "Defence Colony", "Hauz Khas", "Kalkaji", "Saket"];

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-blue-900 text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 opacity-90 z-10"></div>
        <div className="max-w-7xl mx-auto relative z-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 bg-blue-500/20 backdrop-blur-md border border-blue-400 rounded-full px-4 py-1.5 text-blue-100 font-semibold text-sm mb-6">
              <Award className="w-4 h-4 text-yellow-400"/>
              <span>Honest, High-Success Fertility Care</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Best <span className="text-blue-300">IVF Centre in South Delhi</span>: Your Journey Starts with Honest Care.
            </h1>
            <p className="text-lg text-blue-100 mb-8 max-w-xl leading-relaxed">
              We know how hard this journey can be. You’re looking for answers, not just medical terms. At our clinic, we pair real, honest fertility advice with some of the best success rates in Delhi.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                "Doctors who actually listen",
                "No hidden costs. Ever.",
                "An IVF Lab built for maximum safety",
                "Plans built just for your body"
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-3">
                  <CheckCircle className="text-blue-400 w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-100 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#consultation" className="bg-blue-500 hover:bg-blue-400 text-white px-8 py-4 rounded-full font-bold text-lg text-center transition-all shadow-lg hover:shadow-blue-500/30">
                Talk to an Expert for Free
              </Link>
              <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer" className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg text-center transition-all flex items-center justify-center gap-2">
                Message Us on WhatsApp
              </a>
            </div>
          </div>

          {/* Lead Form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl relative" id="consultation">
            <h3 className="text-2xl font-bold text-slate-800 mb-2">Let's Figure This Out Together</h3>
            <p className="text-slate-600 mb-6 text-sm">Leave your details below, and our care team will call you back quietly and confidentially.</p>
            
            <form className="space-y-4 text-slate-800">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" placeholder="Enter your name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                <input type="tel" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" placeholder="Enter mobile number" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">What's on your mind?</label>
                <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none">
                  <option>I want to ask about IVF</option>
                  <option>Interested in IUI / ICSI</option>
                  <option>I have PCOS / Low AMH</option>
                  <option>We need a male fertility check</option>
                  <option>I just want to know the costs</option>
                </select>
              </div>
              <button type="button" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg transition-colors mt-2 shadow-md">
                Request a Callback
              </button>
              <div className="flex items-center justify-center gap-2 mt-4 text-xs text-slate-500">
                <Shield className="w-3 h-3"/> We respect your privacy completely.
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* 2. ABOUT & LOCATIONS */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">A Different Kind of IVF Centre in South Delhi</h2>
            <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
              <p>
                If you’ve been dealing with infertility for a while, you’ve probably visited a few clinics. You might have felt rushed, or like you were just a number in a waiting room. We built our clinic specifically to change that.
              </p>
              <p>
                Before we even talk about IVF, we look at <em>why</em> you aren't getting pregnant. Our fertility specialists spend time reviewing your past scans, your lifestyle, and your specific hormonal makeup. We don’t rush you into expensive treatments if a simpler solution might work first.
              </p>
            </div>
            <div className="mt-8 pt-8 border-t border-slate-200">
              <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                <MapPin className="text-blue-600 w-5 h-5"/> Easy to reach from anywhere in South Delhi
              </h4>
              <div className="flex flex-wrap gap-2">
                {localities.map(loc => (
                  <span key={loc} className="px-3 py-1 bg-blue-50 text-blue-800 rounded-full text-sm border border-blue-100">{loc}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-100 to-indigo-50 rounded-3xl p-10 h-full flex flex-col justify-center border border-blue-100">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">Honest Care, Better Results.</h3>
            <ul className="space-y-4">
              {[
                "We don't sugarcoat, but we do care. We give you realistic expectations.",
                "We keep costs completely transparent before you start injections.",
                "No batching. We monitor your body and retrieve eggs when you are ready.",
                "We answer the phone when you have a panic moment at 8 PM.",
                "Our clinic feels welcoming and calm, not like a crowded hospital."
              ].map((reason, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Activity className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium">{reason}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 3. TREATMENTS GRID */}
      <section className="py-20 bg-blue-900 text-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Fertility Treatments That Actually Make Sense for You</h2>
            <p className="text-blue-200 max-w-2xl mx-auto text-lg">
              We offer a complete spectrum of reproductive solutions, but we only recommend what your body actually needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {treatments.map((treatment, i) => (
              <div key={i} className="bg-blue-800/50 backdrop-blur-sm border border-blue-700 rounded-2xl p-6 hover:bg-blue-800 transition-colors">
                <Heart className="w-8 h-8 text-blue-300 mb-4" />
                <h3 className="text-lg font-bold mb-2">{treatment.title}</h3>
                <p className="text-blue-100 text-sm mb-4 leading-relaxed">{treatment.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SUCCESS STORIES */}
      <section className="py-20 bg-slate-50 px-4 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Stories from Real Families</h2>
            <p className="text-slate-600">The journey is tough, but these moments make it all worth it.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Neha", loc: "Lajpat Nagar", text: "We were so tired of doctors talking down to us. When we came here, the doctor actually listened to my concerns about my PCOS. The treatment felt tailored to me, not just a copy-paste prescription." },
              { name: "Aditi & Rohan", loc: "South Extension", text: "My husband had a very low sperm count, and we thought we'd need a donor. The team here suggested ICSI. It was our first IVF cycle, and it worked. We couldn't be happier." },
              { name: "Sameer", loc: "Defence Colony", text: "The pricing was exactly what they said it would be. No nasty surprises at the end of the month. That peace of mind let us focus entirely on the treatment." }
            ].map((review, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <div className="flex text-blue-400 mb-4">
                  <Star className="fill-current w-4 h-4" /><Star className="fill-current w-4 h-4" /><Star className="fill-current w-4 h-4" /><Star className="fill-current w-4 h-4" /><Star className="fill-current w-4 h-4" />
                </div>
                <p className="text-slate-600 mb-6 italic text-sm leading-relaxed">"{review.text}"</p>
                <div className="font-bold text-slate-900">{review.name}</div>
                <div className="text-xs text-slate-500 font-medium uppercase tracking-wider">{review.loc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctor Profiles */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-100 px-4 py-2 rounded-full mb-4">
              <Users className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-semibold text-blue-700">Expert Team</span>
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Meet Our Specialists</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Led by internationally recognized fertility experts with decades of combined experience
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {doctors.map((doctor, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                <div className="p-8">
                  <div className="flex justify-center mb-6">
                    <div className="w-32 h-32 bg-gradient-to-br from-indigo-400 to-rose-400 rounded-full flex items-center justify-center shadow-xl overflow-hidden">
                      <Image
                        src={doctor.image}
                        alt={doctor.name}
                        width={130}
                        height={130}
                        className=" object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  <h4 className="text-2xl font-bold text-slate-800 mb-2 text-center">{doctor.name}</h4>
                  <p className="text-blue-600 font-medium mb-1 text-center">{doctor.title}</p>
                  <p className="text-slate-500 text-sm text-center mb-4 italic">{doctor.specialty}</p>
                  <div className="flex items-center justify-center gap-2 text-blue-600 font-bold">
                    <Award className="w-4 h-4"/> {doctor.experience} Exp.
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FAQs */}
      <section className="py-20 px-4 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Common Questions We Hear Every Day</h2>
          <p className="text-slate-600">There are no silly questions when it comes to fertility.</p>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-xl overflow-hidden transition-all duration-200 shadow-sm">
              <button 
                onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                className="w-full text-left px-6 py-5 font-bold text-slate-800 flex justify-between items-center focus:outline-none hover:bg-slate-50"
              >
                {faq.q}
                {activeFaq === i ? <Minus className="w-5 h-5 text-blue-600" /> : <Plus className="w-5 h-5 text-slate-400" />}
              </button>
              {activeFaq === i && (
                <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4 bg-slate-50/50">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Social & Trust Connections */}
      <section className="py-20 px-4 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
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
              <a href="https://www.practo.com/delhi/clinic/pravi-global-ivf-polyclinic-lajpat-nagar-4/abo" target="_blank" rel="noreferrer" className="p-6 bg-slate-50 border border-slate-100 rounded-2xl hover:border-blue-200 transition-all group">
                <div className="text-blue-600 mb-3 group-hover:scale-110 transition-transform"><Activity className="w-8 h-8"/></div>
                <h4 className="font-bold text-slate-900 mb-1">Practo Verified</h4>
                <p className="text-xs text-slate-500">Read patient reviews and book appointments easily.</p>
              </a>
              <a href="https://www.justdial.com/Kanpur/Pravi-Ivf-Fertility-Centre-Near-Raj-Ratan-Saree-Motijheel-Chauraha-Swaroop-Nagar/0512PX512-X512-160714183543-G2T4_BZDET" target="_blank" rel="noreferrer" className="p-6 bg-slate-50 border border-slate-100 rounded-2xl hover:border-blue-200 transition-all group">
                <div className="text-blue-600 mb-3 group-hover:scale-110 transition-transform"><Star className="w-8 h-8"/></div>
                <h4 className="font-bold text-slate-900 mb-1">JustDial Top Rated</h4>
                <p className="text-xs text-stone-500">Highest rated fertility centre with trusted feedback.</p>
              </a>
              <a href="https://share.google/l3CxCfdJJf9C1DQBL" target="_blank" rel="noreferrer" className="p-6 bg-slate-50 border border-slate-100 rounded-2xl hover:border-blue-200 transition-all group">
                <div className="text-blue-600 mb-3 group-hover:scale-110 transition-transform"><MapPin className="w-8 h-8"/></div>
                <h4 className="font-bold text-slate-900 mb-1">Find Us on Maps</h4>
                <p className="text-xs text-slate-500">Visit our flagship South Delhi centre in Lajpat Nagar.</p>
              </a>
              <a href="https://praviivf.in/" target="_blank" rel="noreferrer" className="p-6 bg-slate-50 border border-slate-100 rounded-2xl hover:border-blue-200 transition-all group">
                <div className="text-blue-600 mb-3 group-hover:scale-110 transition-transform"><ExternalLink className="w-8 h-8"/></div>
                <h4 className="font-bold text-slate-900 mb-1">Main Website</h4>
                <p className="text-xs text-slate-500">Explore our full range of services across India.</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Locations (Internal Links) */}
      <section className="py-20 px-4 bg-stone-50 border-t border-stone-200">
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
      <section className="bg-blue-600 text-white py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Ready to Have a Conversation?</h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            You don't have to commit to IVF just to talk to us. If you've been trying to get pregnant for over a year, come in for a chat. Let's just figure out what's going on first.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="#consultation" className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 rounded-full font-bold text-lg transition-colors shadow-lg">
              Book Your Free Consultation
            </Link>
            <a href="tel:+919999999999" className="bg-blue-800 hover:bg-blue-900 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors flex items-center justify-center gap-2 border border-blue-500">
              <Phone className="w-5 h-5"/> Call the Clinic Directly
            </a>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer" className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all z-50 flex items-center justify-center">
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
           <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-5.824 4.74-10.563 10.564-10.563 5.826 0 10.564 4.741 10.564 10.564 0 5.822-4.74 10.563-10.564 10.563z"/>
        </svg>
      </a>

    </div>
  );
}
