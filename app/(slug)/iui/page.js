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
  Activity,
  Globe,
  Baby
} from 'lucide-react';

const IUIServicePage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden" style={{ backgroundImage: 'url("/images/ivf-treatment.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className='w-full h-full top-0 absolute z-10 bg-gradient-to-r from-blue-600/70 to-blue-800/70' />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Award className="w-8 h-8 text-yellow-400" />
                <span className="text-blue-100 font-semibold">Best IUI Treatment in Delhi</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                IUI Treatment at Pravi Global IVF Delhi
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-blue-100">
                Affordable, Safe & Effective Fertility Care
              </h2>
              <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                At Pravi Global IVF Delhi, we offer advanced Intrauterine Insemination (IUI) treatments — a simple, safe, and effective fertility procedure that helps couples achieve pregnancy naturally with medical support.
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
                      <div className="text-blue-100">Years of Experience</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-8 h-8 text-blue-900" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold">High</div>
                      <div className="text-blue-100">Success Rate</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-pink-400 rounded-full flex items-center justify-center">
                      <Baby className="w-8 h-8 text-blue-900" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold">Safe</div>
                      <div className="text-blue-100">Fertility Procedure</div>
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
            Why Choose Pravi Global IVF Delhi for IUI?
          </h2>
          <p className="text-lg text-gray-600">Expertise, Advanced Technology, and Compassionate Care.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { icon: Microscope, title: 'Modern Lab', desc: 'Equipped for accurate semen preparation and analysis' },
            { icon: Users, title: 'Expert Doctors', desc: 'Led by highly experienced fertility specialists' },
            { icon: Heart, title: 'Personalized Plans', desc: 'Tailored IUI cycles for individual needs' },
            { icon: Globe, title: 'International Protocols', desc: 'World-class fertility standards & safety' }
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

      {/* Comprehensive SEO Content Section */}
      <div className="bg-white py-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-blue">
          
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What Exactly is IUI (Intrauterine Insemination)?</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            When a couple begins trying to have a baby, they quickly learn that human biology depends heavily on perfect timing and quite a bit of physical luck. The male sperm cells must successfully travel a very long, difficult physical journey all the way from the bottom of the female cervix up to the distant fallopian tubes. They must brave that distance, hoping to bump into a beautifully mature female egg exactly on the correct day of the month. If anything naturally goes wrong during this exhausting trip, the pregnancy simply fails.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Intrauterine Insemination, broadly known in the medical world simply as IUI, is an incredibly smart, simple medical procedure designed to skip the hardest part of that physical journey. Instead of asking the tiny sperm to swim the entire massive distance through the thick natural mucus of the cervix on their own, a trained medical doctor uses a tiny, completely soft plastic tube. 
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            The doctor gently slides this perfectly soft tube past the cervix and places a highly concentrated amount of the best, fastest-swimming sperm directly into the very top of the mother's warm uterus. By placing the healthy sperm simply inches away from the awaiting female egg exactly at the perfect time of ovulation, the natural chances of a successful pregnancy increase dramatically. It is identical to giving Mother Nature a very helpful, supportive physical push directly forward.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Why and When Do Doctors Recommend IUI?</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            When hopeful couples first step into a fertility clinic seeking professional help, doctors rarely immediately jump into performing highly complicated treatments like advanced IVF. Instead, they strongly prefer starting with much simpler, less physically invasive options. 
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            IUI is famous as the absolute best starting point for couples suffering from unexplained infertility. This frustrating condition simply means that all the medical blood tests look incredibly great, the internal bodily tubes remain open, yet nothing works as it should. Providing the sperm with a massive head start completely solves this invisible distance problem.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            It is also highly recommended if the father has a mildly low sperm count or poor sperm motility. Because the laboratory carefully filters out the tired sperm and physically moves the energetic ones right to the finish line, mild male factor issues are instantly solved. Secondly, it is a brilliant option for women facing mild endometriosis or severe issues with their cervical mucus. Sometimes, the natural mucus completely accidentally acts like a thick wall safely blocking the healthy sperm. IUI magically bypasses this confusing wall entirely.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">The Four Simple Steps of The Process</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Many worried couples feel shocked to wonderfully discover exactly how physically simple and perfectly fast the entire IUI cycle actually is. The medical journey consists of four very quick phases perfectly designed to maximize your bodily potential.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            First is exact scientific ovulation tracking. For a few short days at the start of the female cycle, the doctor carefully monitors the growing female eggs using a painless ultrasound probe. Sometimes they give the mother mild, safe hormone pills to powerfully help encourage the eggs to fully grow. 
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Second is the gentle hormone trigger shot. Once the ultrasound correctly shows that exactly one or two beautiful eggs are fully mature, the doctor gives a tiny, completely harmless injection. This safe hormone magically tells the ovaries to release those healthy eggs exactly thirty-six hours later. 
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Third is the sperm washing phase. The father provides a fresh sperm sample to the clinic laboratory. The expert scientists place this important sample inside a high-speed machine that safely washes away all the dead, slow, or strangely shaped sperm alongside any confusing background debris. All that remains is an incredibly powerful, highly concentrated liquid pool of microscopic champions.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Finally comes the amazingly short insemination procedure. Using the soft, tiny plastic tube, the doctor smoothly injects this clean pool of champion sperm into the uterus. The physical process takes only about ten short minutes to completely finish, and the mother feels absolutely zero surgical pain during the entire event. She simply rests on the warm bed for a quiet moment and then safely drives straight home. 
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Why the Quality of The Laboratory Matters Deeply</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The entire secret to a successful IUI cycle relies entirely on the precise medical skills of the laboratory team performing the essential sperm washing. If the lab uses cheap older equipment or careless techniques, they can easily damage the healthy sperm or leave behind dangerous debris that causes stomach cramping and total failure.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            This is strictly why choosing the right medical clinic is essentially the most vital decision you can possibly make. Being recognized as the premier <strong>Best IVF Center In Delhi</strong> requires highly intense dedication to keeping our laboratory spotless and equipped with the world's absolute best medical spinning machines. By trusting highly experienced scientists to perfectly wash and accurately concentrate the sperm sample, your physical chances of hearing a baby's heartbeat drastically rise.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Staying Positively Calm Through The Entire Journey</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Facing the unknown roads of fertility treatments can force your mind to feel deeply stressed and heavily chaotic. Attempting to manage a busy career while desperately waiting to finally become a lovely parent is an incredibly heavy emotional burden for absolutely any couple. 
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            However, keeping your body highly relaxed physically improves your biological chances of taking home a baby. We completely understand this, which is why serving as your highly trusted <strong>IVF Center in Lajpat Nagar</strong> means that we naturally prioritize your calm emotional comfort. We respectfully answer your every single worried phone call and hold your shaking hands during the confusing times. From the quiet start to the magical positive pregnancy test, you will strictly never be forced to bravely walk this scary path completely alone.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-16">Frequently Asked Questions About Artificial Insemination</h2>
          <div className="space-y-4">
            {[
              { q: 'Is IUI physically painful?', a: 'No, IUI is a highly quick and completely painless medical procedure. Most happy women state it physically feels roughly identical to a totally normal routine pap smear. A very small number of women might experience incredibly mild standard stomach cramping for a few hours afterward, but nothing strictly severe.' },
              { q: 'What is the real mathematical success rate?', a: 'The success rate strictly mathematically varies between 15% to 25% perfectly per single cycle, highly heavily depending on the exact maternal age, precise sperm quality, and other important health factors. However, the cumulative odds drastically raise safely if couples attempt multiple rapid cycles.' },
              { q: 'How physically long does the insemination procedure officially take?', a: 'The entire medical insemination physical process specifically takes only about roughly exactly ten to roughly exactly fifteen extremely short minutes, with absolutely zero need for hard surgical anesthesia or heavy long recovery resting time.' },
              { q: 'Are there any serious risks to the future growing baby?', a: 'No. This simply gives normal healthy biology a simple medical head start. The resulting born baby is entirely identical strongly in normal health to a naturally safely created child.' }
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

      {/* Final CTA */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Begin Your IUI Journey with Pravi Global IVF
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Take the first step toward parenthood — book a free IUI consultation with our fertility experts in Delhi.
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
        </div>
      </div>
    </div>
  );
};

export default IUIServicePage;
