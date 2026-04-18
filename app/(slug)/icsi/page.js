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
  Baby,
  Globe
} from 'lucide-react';

const ICSIServicePage = () => {
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
                <span className="text-blue-100 font-semibold">Advanced ICSI Fertility Treatment</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                ICSI Treatment at Pravi Global IVF Delhi
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-blue-100">
                High-Precision Fertility Care with Proven Results
              </h2>
              <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                Pravi Global IVF Delhi offers world-class ICSI (Intracytoplasmic Sperm Injection) treatment — a breakthrough in assisted reproductive technology that helps couples overcome severe male infertility and achieve successful pregnancies.
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
                      <div className="text-3xl font-bold">5000+</div>
                      <div className="text-blue-100">Successful ICSI Cases</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center">
                      <Microscope className="w-8 h-8 text-blue-900" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold">Advanced</div>
                      <div className="text-blue-100">Embryology Lab</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-pink-400 rounded-full flex items-center justify-center">
                      <Baby className="w-8 h-8 text-blue-900" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold">High</div>
                      <div className="text-blue-100">Pregnancy Success Rate</div>
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
            Why Choose Pravi Global IVF for ICSI Treatment?
          </h2>
          <p className="text-lg text-gray-600">Precision, Experience, and Global IVF Standards</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { icon: Microscope, title: 'High-Tech Lab', desc: 'State-of-the-art ICSI and IVF facilities' },
            { icon: Users, title: 'Experienced Experts', desc: 'Led by Dr. Rit Shukla & Dr. Monica Sachdev' },
            { icon: FlaskRound, title: 'Precision Technology', desc: 'Micromanipulation under advanced microscopes' },
            { icon: Heart, title: 'Personalized Care', desc: 'Tailored treatment plans for every couple' }
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
          
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What is ICSI and How Does It Actually Work?</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            When trying to grow a beautiful family, nature usually expects millions of tiny sperm cells to bravely swim toward one single female egg. Only the fastest, absolute strongest swimmer gets to win the race and fertilize the egg. In standard IVF treatments, doctors simply copy this natural race in a glass dish. They place the retrieved egg in the middle of thousands of active sperm, hoping that one strong swimmer naturally breaks through the egg's outer shell on its own.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            However, sometimes the sperm are simply too tired, too few in number, or not shaped correctly to win this difficult natural race. When this happens, fertilization completely fails, which can be absolutely heartbreaking for couples hoping for a baby.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            This is exactly where the modern medical miracle of ICSI comes in! ICSI stands for Intracytoplasmic Sperm Injection. It is an amazing scientific method that completely removes the need for the swimming race. Instead of hoping a sperm breaks into the egg, our highly skilled scientists look through a very powerful microscope. They carefully search to find just one single, perfect, incredibly healthy sperm. Once they find the absolute champion, they use a microscopic glass needle—thinner than a human hair—to gently inject that one perfect sperm directly into the exact center of the mother's egg.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            It guarantees that the sperm successfully reaches its final destination. By physically putting the sperm inside the egg, the chances of creating a beautiful, healthy embryo suddenly become incredibly high, even when male infertility seemed like an impossible roadblock.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Who Actually Needs This Special Treatment?</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Infertility is not always a female health issue. In fact, nearly half of all couples struggling to successfully get pregnant are secretly battling male factor infertility. Because male health issues rarely show clear outside symptoms, many men are totally shocked when a simple lab test reveals a problem.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            You might strongly need ICSI treatment if a routine semen analysis shows any of three common issues. First is a low sperm count. This simply means there are not enough swimmers in the pool to mount a strong attack on the egg. Second is poor motility. This means the sperm might be alive, but they are swimming in circles, swimming backward, or barely moving at all. They simply exhaust themselves before ever reaching the egg. Third is poor morphology. This means the sperm are shaped strangely. They might have two heads, a bent tail, or a crooked body, making it physically impossible for them to properly drill through the egg's tough outer shell.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            ICSI is also famously recommended if you have tried standard IVF before and zero eggs successfully fertilized. It is beautifully used for men who have had a past vasectomy, as doctors can safely take sleeping sperm directly from the testicles using a tiny, painless needle. It is highly effective for couples using frozen sperm, which often wakes up a bit tired and needs extra help. Furthermore, for older couples trying to get pregnant quickly, this advanced method prevents delays and immediately maximizes the chances of success on the very first try.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">The Step-by-Step Lab Journey</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The ICSI process magically begins exactly like a normal IVF cycle. The mother carefully takes safe hormone medications for roughly ten days. This kindly asks her ovaries to produce multiple mature, healthy eggs instead of just the usual one. Once the eggs are beautifully mature and safely resting inside the female body, the doctor performs a very short, painless procedure while the mother is comfortably asleep to gently retrieve them.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            While the mother is resting safely, the father provides his sperm sample. Our brilliant laboratory team takes this sample and gently washes it inside a high-tech machine called a centrifuge. This washing process separates the dead or tired sperm from the highly active, healthy ones.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Next comes the absolute magic. An expert embryologist sits down at a highly advanced microscope that makes the tiny cells look thousands of times bigger. Using incredibly tiny robotic joysticks that control microscopic glass tools, the scientist carefully holds the soft, round female egg perfectly still. Using another joystick, they carefully catch the single best-looking sperm by its tail. They draw this sperm into a tiny glass needle.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            With incredibly steady hands, the scientist gently pushes the very tip of the microscopic needle through the outer wall of the egg and gracefully injects the single sperm perfectly inside. They repeat this amazing delicate process for every single mature egg retrieved that day. The newly fertilized eggs are then placed into a warm, dark, highly protected incubator that safely acts exactly like a mother's natural womb. For the next five days, these cells magically divide and grow into beautiful blastocyst embryos, powerfully ready to be transferred safely into the mother for a healthy pregnancy.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Why Precision and Excellence Matter Deeply</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Performing this incredible microscopic task safely requires a massive amount of intense skill, very steady hands, and incredibly expensive, advanced laboratory equipment. The glass needle used to physically inject the sperm is so incredibly tiny that you cannot even clearly see it with your plain naked eye. If the scientist pushes too hard or accidentally holds the egg too tightly, the delicate human egg can be instantly destroyed.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            This is exactly why choosing the right clinic is the most important decision you will make. As the proud <strong>Best IVF Center In Delhi</strong>, we invest incredibly heavily in maintaining a world-class embryology laboratory. Our high-magnification microscopes allow our veteran scientists to clearly see the deeply hidden internal structures of both the sperm and the egg. Our incubators are strictly monitored twenty-four hours a day to guarantee the air quality and temperature remain absolutely perfect for growing embryos. When you carefully combine world-class modern technology with decades of passionate human medical expertise, your chances of finally taking a beautiful baby safely home skyrocket.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Feeling Emotionally Supported Through Male Infertility</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Learning that male infertility is blocking your dream of expanding your family can cause a deep amount of hidden emotional pain and secret stress. Many men silently feel highly embarrassed or deeply confused when test results come back poor. It is completely normal to feel sad, but it is vitally important to gracefully understand that male infertility is merely a minor medical roadblock, not a personal failure. It is actually incredibly common, naturally affecting millions of wonderful men around the world today.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Our entire compassionate medical team completely understands this heavy emotional burden. We strictly provide deeply private, highly respectful, and incredibly supportive care for both partners together. Choosing to work with an experienced <strong>IVF Center in Lajpat Nagar</strong> beautifully guarantees that you will never be treated like just another simple medical file. We take the appropriate time to gently sit down with you, carefully explain every single scientific detail of your lab results, and wonderfully answer all of your worried questions without rushing. From the very first simple blood test perfectly to the final, magical day you safely hear your new baby’s tiny heartbeat clearly on the ultrasound screen, we gracefully walk right beside you.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Moving Forward With Beautiful Confidence</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            You do not have to struggle in the dark with infertility anymore. With incredible, modern microscopic technology beautifully available to absolutely perfectly solve almost every known sperm problem immediately, building your sweet family is physically closer right now than it has ever completely been. If standard biology is firmly blocking your path, our amazing science can instantly step in and beautifully finish the exact job.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            We safely invite you to comfortably visit our peaceful clinic for a private, totally relaxed consultation. Our expert doctors will carefully review your history, perform any necessary simple lab tests, and brilliantly create a highly personalized, uniquely customized treatment plan specifically designed to maximize your pregnancy success. Your brand new exciting journey boldly toward happy parenthood can finally officially begin today with immense confidence and clear direction.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-16">Frequently Asked Questions About ICSI</h2>
          <div className="space-y-4">
            {[
              { q: 'Does ICSI carry any risks to the baby?', a: 'ICSI is a globally recognized, highly safe medical procedure that has been beautifully used for decades. The vast absolute majority of babies wonderfully born carefully through this advanced method are perfectly healthy, loudly crying, highly happy children, completely entirely identical in health to easily naturally conceived babies.' },
              { q: 'Does this hurt more than normal IVF?', a: 'Not at all. For the mother, the physical medical process feels exactly identical to a normal IVF cycle. You wonderfully take the same exact safe medications and undergo the wildly exact same completely painless, deeply sleepy egg retrieval procedure. The only tiny difference happens entirely secretly across the hallway quietly inside the scientific laboratory where the expert scientists work their magic.' },
              { q: 'What is the exact success rate?', a: 'Success rates beautifully strongly depend exactly on the mother\'s current precise age and her overall physical egg quality. However, brilliantly using this advanced microscopic method typically powerfully results in an incredible 70% to 80% successful fertilization rate exactly in the lab.' },
              { q: 'How much time does it take?', a: 'The entire physical medical cycle usually safely takes roughly about wonderfully four nicely to smoothly six wonderful weeks securely from smoothly taking the heavily first starting medication firmly to brightly officially firmly having the healthy beautiful embryo successfully gracefully safely transferred precisely warmly safely back perfectly natively deeply into your soft warm waiting womb.' }
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
            Start Your ICSI Journey with Pravi Global IVF
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Take the next step towards parenthood — consult our fertility experts today for personalized ICSI treatment in Delhi.
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

export default ICSIServicePage;
