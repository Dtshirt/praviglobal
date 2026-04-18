'use client';
import React, { useState } from 'react';
import { 
  FlaskRound,
  CheckCircle2,
  Clock,
  Users,
  Award,
  Phone,
  Mail,
  Calendar,
  Heart,
  Shield,
  Microscope,
  ChevronRight,
  MapPin,
  Star,
  TrendingUp,
  Baby,
  Activity,
  Globe
} from 'lucide-react';

const IVFServicePage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden" style={{backgroundImage: 'url("/images/ivf-treatment.jpg")', backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <div className='w-full h-full top-0 absolute z-10 bg-gradient-to-r from-blue-600/70 to-blue-800/70' />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Award className="w-8 h-8 text-yellow-400" />
                <span className="text-blue-100 font-semibold">Best IVF Centre in Delhi</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                IVF Treatment at Pravi Global IVF Delhi
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-blue-100">
                Leading Test Tube Baby Centre in Delhi
              </h2>
              <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                Experience world-class fertility care with Delhi's most trusted IVF experts. With 18+ years of excellence, cutting-edge technology, and personalized treatment plans, we help couples achieve their dream of parenthood.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Book Free Consultation
                </button>
                <a href="tel:+918009150040" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  +91 800 915 0040
                </a>
              </div>
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Lajpat Nagar, Delhi</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>Mon-Sat: 10 AM - 6 PM</span>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                      <Star className="w-8 h-8 text-blue-900" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold">18+</div>
                      <div className="text-blue-100">Years Experience</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-8 h-8 text-blue-900" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold">5000+</div>
                      <div className="text-blue-100">Successful ICSI Procedures</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-pink-400 rounded-full flex items-center justify-center">
                      <Baby className="w-8 h-8 text-blue-900" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold">High</div>
                      <div className="text-blue-100">Success Rate</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Why Choose Pravi Global IVF Delhi?
          </h2>
          <p className="text-lg text-gray-600">The Best IVF Centre in Delhi for Your Fertility Journey</p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { icon: Users, title: 'Expert Team', desc: 'Best IVF Doctor & Embryologist in Delhi' },
            { icon: Microscope, title: 'World-Class Lab', desc: '24/7 Embryologist Support' },
            { icon: Globe, title: 'Global Standards', desc: 'International Collaboration & Technology' },
            { icon: Heart, title: 'Personalized Care', desc: 'Modern Care with Personal Touch' }
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Our Experts */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
            Meet Our IVF Experts in Delhi
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Dr. Monica Sachdev */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Dr. Monica Sachdev</h3>
                <p className="text-blue-100 font-semibold">Medical Director & Senior IVF Specialist</p>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-100 px-4 py-2 rounded-full">
                    <span className="text-blue-700 font-bold">18+ Years Experience</span>
                  </div>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Renowned Senior IVF Consultant and Obstetrics & Gynecology Specialist. Fellowship in IVF and Reproductive Medicine, expert in advanced fertility treatments and high-risk pregnancy management.
                </p>
                <div className="space-y-2 mb-4">
                  <h4 className="font-semibold text-gray-900">Qualifications:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>MBBS, DNB (Obs & Gynae)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>MRCOG, FICOG</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>IVF/ART Fellowship from Chandigarh</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Diplomate of Reproductive Medicine from Kiel, Germany</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Dr. Rit Shukla */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Dr. Rit Shukla</h3>
                <p className="text-blue-100 font-semibold">Chief Embryologist & Scientific Director</p>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-100 px-4 py-2 rounded-full">
                    <span className="text-blue-700 font-bold">18 Years Experience</span>
                  </div>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Distinguished Chief Embryologist with expertise in Assisted Reproductive Technology. Proven track record of performing more than 5000 ICSI procedures with exceptional success rates.
                </p>
                <div className="space-y-2 mb-4">
                  <h4 className="font-semibold text-gray-900">International Collaborations:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Democratic Republic of Congo (DRC)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Afghanistan, Bangladesh, Sri Lanka</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Dubai - World-class IVF/ICSI Technology</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>5000+ Successful ICSI Procedures</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Comprehensive SEO Content Section */}
      <div className="bg-white py-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-blue">
          
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What Exactly is the IVF Treatment Process?</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            When you dream of holding your own child but nature is blocking your path, medical science offers a brilliant path forward. In Vitro Fertilization, commonly called IVF, is currently the most successful infertility treatment available in the entire medical world today. At its core level, IVF is simply a very safe way to help biology do exactly what it naturally wants to do. 
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            For many generations, families wrongly believed that failing to have a child was a personal failure or a secret curse. Today, medical science clearly proves that it is simply a mechanical bodily issue that can be accurately fixed by trained professionals using microscopic tools. The entire goal of this treatment is to gently assist your brave body when normal biology creates temporary physical barriers.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Instead of waiting for the male sperm to travel deep inside the mother’s body to find the female egg, an expert doctor carefully brings both the egg and the sperm into a perfectly clean, highly protected medical laboratory. There, skilled scientists help the two join together safely. Once they join and form a tiny growing seed of life, called an embryo, the doctor gently places it right back inside the mother’s warm womb to grow naturally into a beautiful baby. Many people used to call this creating a <strong>test tube baby</strong>, though today we simply use tiny, advanced medical dishes instead of old glass tubes.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Who Truly Needs This Treatment?</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Parents often wonder why simple biology suddenly feels so difficult. There are many common health reasons why a loving couple might need to skip normal biology and rely directly on IVF. One of the most common medical reasons involves <strong>blocked fallopian tubes</strong>. Normally, a mother's eggs travel slowly down these tiny tubes to meet the swimming sperm. If those delicate tubes are blocked by past infections or scarred tissue, they act like a closed road. Because IVF completely bypasses these tubes and collects the eggs directly from the ovaries, the closed road never stops you.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Doctors also heavily suggest this pathway if the father has very low numbers of healthy, active sperm. If the sperm lack the physical energy to swim the long distance inside the mother naturally, the laboratory scientists can pick up exactly one single perfect sperm and place it directly inside the egg. This specific action instantly solves extreme male fertility issues. Furthermore, women who are gracefully passing into older age brackets often use IVF to harvest their best remaining eggs before their natural biological clock fully stops.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Understanding the Journey Step by Step</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Many women feel terrified before starting simply because they do not know what the <strong>IVF treatment process</strong> actually looks like. It is actually broken down into a few very clear, highly manageable medical steps.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            The very first stage is helping the mother grow her eggs safely. Normally, a woman only grows exactly one egg each month. For the clinic to succeed, they need multiple chances. The mother takes very small, painless daily hormone shots at home using a tiny pen-like needle. This safe medicine tells her ovaries to kindly grow ten or fifteen beautiful eggs all at the exact same time. The doctor will watch her closely with painless ultrasound machines to make sure she stays perfectly healthy and comfortable while they secretly grow.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            When all those eggs are finally mature and visibly large enough, the second stage begins. The mother comes into the clinic and takes a very short fifteen-minute nap under mild medicine. While she is peacefully dreaming and feeling zero pain, the doctor uses a thin needle to softly collect all the waiting eggs from her body. She wakes up shortly after, drinks some water, and safely goes home to rest on the couch. 
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            The third stage is the invisible magic that happens entirely behind closed doors. Inside the high-tech laboratory, expert scientists wash the father's given sperm sample. They place the strongest swimming sperm directly next to the collected eggs inside a special warm machine that perfectly acts exactly like a human body. Over the next three to five days, they carefully watch the cells bravely divide and wonderfully grow into healthy, strong embryos. 
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            The final step is the beautiful <strong>embryo transfer</strong>. The mother returns to the clinic highly awake. The doctor safely uses a completely soft, flexible plastic straw to carefully slide the absolute best selected embryo directly up into the center of her warm uterus. This incredibly fast step takes only five painless minutes and requires absolutely no numbing medicine. Two weeks later, the clinic runs a simple blood test to happily check if the mother is finally pregnant.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Why Finding the Right Laboratory Matters Immensely</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Creating human life outside the human body is highly delicate work. A tiny embryo is incredibly fragile and can easily be destroyed by bad air quality, tiny changes in room temperature, or completely outdated microscope equipment. The air passing through the laboratory must be filtered perfectly clean, far cleaner than a normal hospital operating room.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            When families desperately want the highest possible <strong>success rate</strong>, they quickly realize why they need the <strong>Best IVF Center In Delhi</strong>. Choosing a premium clinic fundamentally means choosing a laboratory that spends vast amounts of money strictly on ultra-modern incubation machines and highly strict air filters. It means trusting highly educated scientists who have safely handled thousands of delicate embryos before you arrived. Your financial investment must accurately pay for their endless obsession with perfect laboratory safety.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Protecting Your Heart and Mind</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Infertility silently steals your joy and replaces it heavily with deep secret anxiety. When you finally decide to seek professional medical help, you are already feeling incredibly tired, deeply frustrated, and highly vulnerable emotionally. The very last thing you need is a doctor treating you coldly like a simple number on a long paper list. 
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Finding a warmly trusted <strong>IVF Center in Lajpat Nagar</strong> ensures that you never feel lost in the chaotic noise. The right medical staff intimately knows your first name, kindly answers your terrified midnight text messages, and holds your shaking hands tightly during the hard waiting days. The medical science truly builds the baby, but the deep human compassion is what quietly protects your tired heart throughout the long journey toward a positive test result.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-16">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: 'Is the egg retrieval surgery very painful?', a: 'No, the entire egg collection procedure is safely performed while you are comfortably asleep using mild sedation medicine. You gently fall asleep, feeling zero pain during the 15-minute procedure. When you wake up, you might feel a tiny bit of mild stomach cramping similar to a light monthly period.' },
              { q: 'Will I be forced to rest in bed for weeks?', a: 'Modern science heavily discourages strict bed rest. Following your embryo transfer procedure, you simply rest tightly at the clinic for about thirty minutes. Afterward, doctors highly recommend returning politely to your normal daily routine. You just avoid heavy weight lifting or extreme sweaty gym workouts for a few short weeks.' },
              { q: 'Are test tube babies physically weaker than natural babies?', a: 'Absolutely not. The outdated phrase "test tube baby" simply refers to the location where the egg actually met the sperm. Once the healthy embryo successfully sticks tightly to the mother\'s womb, the pregnancy remains completely normal. The resulting children possess the exact same intelligence, physical health, and beautiful traits as completely naturally conceived children.' },
              { q: 'What is the real cost of this journey?', a: 'The financial cost strictly depends on the exact amount of daily medicine the mother specifically requires to grow her eggs, combined with the laboratory fees. We promise complete financial transparency upfront so families securely understand the exact numbers without any sudden scary surprises hiding at the finish line.' }
            ].map((faq, idx) => (
              <div key={idx} className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-lg mb-3 text-gray-900 flex items-start gap-3">
                  <ChevronRight className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-gray-700 ml-9 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Location & Contact */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
            Visit the Best IVF Centre in Delhi
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Our Location</h4>
                    <p className="text-gray-700">Pravi Global IVF Polyclinic</p>
                    <p className="text-gray-700">41, Lajpat Nagar, New Delhi</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Call Us</h4>
                    <a href="tel:+918009150040" className="text-blue-600 hover:text-blue-700 font-semibold text-lg">
                      +91 800 915 0040
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email Us</h4>
                    <a href="mailto:Info@pravglobalivf.in" className="text-blue-600 hover:text-blue-700 font-semibold">
                      Info@pravglobalivf.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Working Hours</h4>
                    <p className="text-gray-700">Monday to Saturday</p>
                    <p className="text-gray-700 font-semibold">10:00 AM - 6:00 PM</p>
                    <p className="text-gray-600 text-sm mt-1">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Request a Callback</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                  <textarea 
                    rows="4"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                    placeholder="Tell us about your requirements"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <Calendar className="w-5 h-5" />
                  Request Free Consultation
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-900">
            Success Stories from Our Test Tube Baby Centre
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Hear from couples who achieved their dream of parenthood at Pravi Global IVF Delhi
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Priya & Rajesh',
                location: 'Delhi',
                text: 'After 6 years of trying, we finally became parents through IVF at Pravi Global. Dr. Monica and the entire team provided exceptional care and support. The best IVF centre in Delhi!'
              },
              {
                name: 'Anjali & Vikram',
                location: 'Noida',
                text: 'Dr. Rit Shukla\'s expertise in ICSI gave us hope when nothing else worked. The laboratory standards and personalized attention made all the difference. Highly recommend this test tube baby centre.'
              },
              {
                name: 'Neha & Amit',
                location: 'Gurgaon',
                text: 'The compassion and professionalism at Pravi Global IVF is unmatched. From consultation to delivery, they were with us every step. Truly the best IVF experts in Delhi.'
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Start Your Parenthood Journey Today
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Schedule a free consultation with the Best IVF Doctor in Delhi at our premier Test Tube Baby Centre
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a 
              href="tel:+918009150040" 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl flex items-center gap-2 text-lg"
            >
              <Phone className="w-6 h-6" />
              Call +91 800 915 0040
            </a>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-all flex items-center gap-2 text-lg">
              <Calendar className="w-6 h-6" />
              Book Free Consultation
            </button>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-400" />
              <span>18+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-400" />
              <span>5000+ Successful Procedures</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-400" />
              <span>World-Class Technology</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IVFServicePage;