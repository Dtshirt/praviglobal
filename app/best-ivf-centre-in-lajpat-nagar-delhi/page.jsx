'use client'
import React, { useState } from 'react';
import { Phone, CheckCircle, Activity, Award, Heart, Shield, Users, MapPin, Plus, Minus, ArrowRight, Star, Instagram, Facebook, Youtube, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function LajpatNagarIVFPage() {
  const [activeFaq, setActiveFaq] = useState(null);

  const treatments = [
    { title: "Advanced IVF Treatment", desc: "The cornerstone of assisted reproductive technology offering high success rates." },
    { title: "IUI Treatment", desc: "A minimally invasive first-line fertility treatment for mild male factor or unexplained infertility." },
    { title: "ICSI Treatment", desc: "A specialized form of IVF that revolutionizes the treatment of severe male infertility." },
    { title: "Male Infertility", desc: "Targeted treatments from medical management to surgical sperm retrieval (TESA/PESA)." },
    { title: "PCOS Fertility", desc: "Tailored IVF protocols and ovulation induction for women with Polycystic Ovary Syndrome." },
    { title: "Egg Freezing", desc: "Preserve your fertility today for peace of mind tomorrow using modern vitrification." }
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
      q: "Which is the best ivf center in Lajpat Nagar delhi?",
      a: "Our clinic is widely recognized as the Best IVF Centre In Lajpat Nagar, New Delhi due to our High IVF Success Rate Delhi, senior specialists, and honest, ethical approach to fertility care."
    },
    {
      q: "What is the average IVF treatment cost in Delhi?",
      a: "The cost varies based on the individual protocol, medications needed, and advanced techniques (like ICSI or PGT). We offer transparent, affordable pricing with EMI options."
    },
    {
      q: "Is the IVF procedure painful?",
      a: "No, IVF is generally not painful. The daily hormone injections use very fine needles, and egg retrieval is done under light anesthesia, so you feel no pain."
    },
    {
      q: "What is the true IVF success rate?",
      a: "Success rates depend heavily on the woman's age and the cause of infertility. Generally, women under 35 have up to a 65-75% chance of success per cycle at our advanced facility."
    },
    {
      q: "Can PCOS patients get pregnant through IVF?",
      a: "Absolutely. In fact, women with PCOS often have excellent IVF success rates because they produce a high number of eggs. We use specialized protocols to ensure safety."
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative bg-teal-900 text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="absolute inset-0 opacity-30">
           {/* Fallback pattern if no image */}
           <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-700 via-teal-900 to-black"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-1.5 bg-teal-500/30 backdrop-blur-md border border-teal-400 rounded-full text-teal-100 font-semibold text-sm mb-6">
              #1 Ranked Fertility Clinic in South Delhi
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Best <span className="text-teal-300">IVF Centre in Lajpat Nagar</span>: Your Path to Parenthood in Delhi.
            </h1>
            <p className="text-lg text-slate-200 mb-8 max-w-xl">
              Turn your dream of having a baby into reality with advanced fertility treatments, compassionate care, and Delhi’s leading IVF specialists.
            </p>
            
            <div className="space-y-4 mb-8">
              {[
                "State-of-the-art Advanced IVF Technology",
                "Award-Winning Fertility Doctors & Embryologists",
                "Consistently High IVF Success Rates",
                "Zero Hidden Charges - 100% Transparent"
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <CheckCircle className="text-teal-400 w-6 h-6 flex-shrink-0" />
                  <span className="text-slate-100 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#contact" className="bg-blue-500 hover:bg-blue-400 text-white px-8 py-4 rounded-full font-bold text-lg text-center transition-all shadow-lg hover:shadow-blue-500/30">
                Book Free Consultation
              </Link>
              <a href="tel:+919999999999" className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg text-center transition-all flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                Call IVF Expert
              </a>
            </div>
          </div>

          {/* Lead Form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl relative">
            <h3 className="text-2xl font-bold text-slate-800 mb-2">Start Your Journey Today</h3>
            <p className="text-slate-600 mb-6 text-sm">Get a free second opinion from our senior IVF specialists.</p>
            
            <form className="space-y-4 text-slate-800">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                <input type="text" className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none" placeholder="Enter your name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                <input type="tel" className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none" placeholder="Enter mobile number" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Medical Inquiry (Optional)</label>
                <select className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none bg-white">
                  <option>IVF Treatment</option>
                  <option>IUI Treatment</option>
                  <option>Male Infertility</option>
                  <option>PCOS / Female Infertility</option>
                  <option>Cost Inquiry</option>
                </select>
              </div>
              <button type="button" className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-lg transition-colors mt-2">
                Request Callback Now
              </button>
              <p className="text-xs text-center text-slate-500 mt-4">100% Confidential. Your data is safe with us.</p>
            </form>
          </div>
        </div>
      </section>

      {/* 2. TRUST STRIP */}
      <section className="bg-white border-b border-slate-200 py-8">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-8 md:gap-16">
          <div className="flex items-center gap-3"><Award className="w-8 h-8 text-teal-600"/> <span className="font-bold text-slate-700 text-lg">15+ Years Exp.</span></div>
          <div className="flex items-center gap-3"><Users className="w-8 h-8 text-teal-600"/> <span className="font-bold text-slate-700 text-lg">10,000+ Happy Families</span></div>
          <div className="flex items-center gap-3"><Shield className="w-8 h-8 text-teal-600"/> <span className="font-bold text-slate-700 text-lg">Class 100 IVF Lab</span></div>
        </div>
      </section>

      {/* 3. ABOUT US */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">About Our Advanced IVF Clinic in Lajpat Nagar</h2>
          <p className="text-slate-600 max-w-3xl mx-auto text-lg leading-relaxed">
            When searching for the best IVF centre in Lajpat Nagar, you need a clinic that combines cutting-edge medical science with genuine human empathy. Our fertility clinic stands as a beacon of hope for couples struggling with infertility in South Delhi.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-800">World-Class IVF Lab & Ethical Practices</h3>
            <p className="text-slate-600 text-lg">
              Our facility houses one of the most modern IVF labs in Delhi, equipped with advanced incubators, ICSI manipulators, and air-purification systems to ensure the highest quality environment for embryo development.
            </p>
            <p className="text-slate-600 text-lg">
              We pride ourselves on 100% ethical fertility treatments, complete transparency in our protocols, and adherence to international medical guidelines. We believe in evidence-based reproductive medicine to give you the highest possible chance of a healthy pregnancy.
            </p>
          </div>
          <div className="bg-teal-100 rounded-3xl p-8 aspect-video flex items-center justify-center">
            <Activity className="w-32 h-32 text-teal-300 opacity-50" />
            <span className="absolute text-teal-800 font-bold text-xl">Advanced Lab Infrastructure</span>
          </div>
        </div>
      </section>

      {/* 4. TREATMENTS OFFERED */}
      <section className="py-20 bg-slate-100 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Comprehensive IVF & Fertility Treatments Offered</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              We offer a complete spectrum of reproductive solutions, making us the premier destination for IVF treatment in Delhi.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatments.map((treatment, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-slate-100">
                <Heart className="w-10 h-10 text-teal-500 mb-6" />
                <h3 className="text-xl font-bold text-slate-900 mb-3">{treatment.title}</h3>
                <p className="text-slate-600 mb-6">{treatment.desc}</p>
                <Link href="#" className="text-teal-600 font-bold inline-flex items-center hover:text-teal-700 transition-colors">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PROCESS & SUCCESS RATE */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-8">The IVF Process: Step-by-Step</h2>
            <div className="space-y-8">
              {[
                { step: "01", title: "Consultation & Testing", desc: "Detailed evaluation of your reproductive health." },
                { step: "02", title: "Ovarian Stimulation", desc: "Medication to encourage multiple egg development." },
                { step: "03", title: "Egg Retrieval & Fertilization", desc: "Painless extraction and advanced lab fertilization." },
                { step: "04", title: "Embryo Transfer", desc: "Safe placement of the healthiest embryo." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-800 mb-1">{item.title}</h4>
                    <p className="text-slate-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-teal-900 rounded-3xl p-10 text-white">
            <h2 className="text-3xl font-bold mb-6">High IVF Success Rates in Delhi</h2>
            <p className="text-teal-100 mb-8 text-lg leading-relaxed">
              As a leading IVF hospital in Delhi, we pride ourselves on maintaining exceptional success rates. Our use of blastocyst culture, Laser Assisted Hatching, and Preimplantation Genetic Testing (PGT) significantly boosts implantation rates.
            </p>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">Women under 35</span>
                  <span className="font-bold text-teal-300">Up to 75%</span>
                </div>
                <div className="w-full bg-teal-800 rounded-full h-2">
                  <div className="bg-teal-400 h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">Women aged 35-37</span>
                  <span className="font-bold text-teal-300">Up to 60%</span>
                </div>
                <div className="w-full bg-teal-800 rounded-full h-2">
                  <div className="bg-teal-400 h-2 rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>
            </div>
            <p className="text-xs text-teal-300/60 mt-8 italic">
              *Success rates vary individually depending on specific medical conditions, age, ovarian reserve, and past fertility history.
            </p>
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS */}
      <section className="py-20 bg-slate-50 px-4 border-y border-slate-200">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12">Trusted by Couples Across South Delhi</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Priya & Rahul", loc: "Kalkaji", text: "After 5 years of trying and 2 failed IVF cycles elsewhere, we were losing hope. The doctors here diagnosed my severe PCOS correctly. Today, I am holding my twin girls!" },
              { name: "Meenakshi", loc: "Defence Colony", text: "My AMH was very low. The specialists here customized a mild stimulation plan, and I conceived with my own eggs. Forever grateful to the best IVF centre in Lajpat Nagar." },
              { name: "Amit & Sneha", loc: "Greater Kailash", text: "We faced severe male infertility issues. The ICSI treatment here worked a miracle for us. The staff was incredibly supportive throughout the entire transparent process." }
            ].map((review, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm text-left border border-slate-100">
                <div className="flex text-yellow-400 mb-4">
                  <Star className="fill-current w-5 h-5" /><Star className="fill-current w-5 h-5" /><Star className="fill-current w-5 h-5" /><Star className="fill-current w-5 h-5" /><Star className="fill-current w-5 h-5" />
                </div>
                <p className="text-slate-600 mb-6 italic">"{review.text}"</p>
                <div className="font-bold text-slate-900">{review.name}</div>
                <div className="text-sm text-slate-500">{review.loc}, South Delhi</div>
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
                  <p className="text-teal-600 font-medium mb-1 text-center">{doctor.title}</p>
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

      {/* 7. FAQ SECTION */}
      <section className="py-20 px-4 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-slate-600">Common questions about IVF in Lajpat Nagar</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-xl overflow-hidden">
              <button 
                onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                className="w-full text-left px-6 py-5 font-bold text-slate-800 flex justify-between items-center focus:outline-none"
              >
                {faq.q}
                {activeFaq === i ? <Minus className="w-5 h-5 text-teal-600" /> : <Plus className="w-5 h-5 text-slate-400" />}
              </button>
              {activeFaq === i && (
                <div className="px-6 pb-5 text-slate-600 border-t border-slate-100 pt-4">
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

      {/* 8. BOTTOM CTA */}
      <section className="bg-teal-900 text-white py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Take the First Step Towards Parenthood Today</h2>
          <p className="text-xl text-teal-100 mb-10">
            Don't let infertility define your story. The dream of holding your own baby is within reach. Trust the expertise of the best IVF centre in Lajpat Nagar to guide you safely.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-teal-900 hover:bg-teal-50 px-8 py-4 rounded-full font-bold text-lg transition-colors">
              Book Your Free Consultation
            </button>
            <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer" className="bg-teal-600 hover:bg-teal-500 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors border border-teal-500">
              WhatsApp Us Instantly
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
