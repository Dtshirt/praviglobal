'use client';
import React, { useState } from 'react';
import {
  Award,
  Calendar,
  CheckCircle2,
  Clock,
  Heart,
  MapPin,
  Microscope,
  Phone,
  Shield,
  Star,
  Baby,
  Globe,
  ChevronRight,
  Snowflake
} from 'lucide-react';

const EggFreezingPage = () => {
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
                <span className="text-blue-100 font-semibold">Preserve Your Fertility Future</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Egg Freezing in Lajpat Nagar Delhi
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-blue-100">
                Advanced Oocyte Cryopreservation for Women
              </h2>
              <p className="text-lg text-blue-100 mb-8 leading-relaxed">Preserve your future fertility with advanced oocyte cryopreservation at Pravi Global IVF, the top center for Egg Freezing in Lajpat Nagar Delhi. Secure your eggs with cutting-edge vitrification technology.</p>
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
                    <div className="w-16 h-16 bg-blue-300 rounded-full flex items-center justify-center">
                      <Snowflake className="w-8 h-8 text-blue-900" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold">99%</div>
                      <div className="text-blue-100">Egg Survival Rate</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-pink-400 rounded-full flex items-center justify-center">
                      <Baby className="w-8 h-8 text-blue-900" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold">High</div>
                      <div className="text-blue-100">Pregnancy Success Rates</div>
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
            Why Choose Egg Freezing in Lajpat Nagar Delhi?
          </h2>
          <p className="text-lg text-gray-600">Safe, reliable, and advanced fertility preservation for modern women</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { icon: Microscope, title: 'Latest Vitrification Tech', desc: 'State-of-the-art freezing to protect egg quality' },
            { icon: Shield, title: 'Safe & Secure Storage', desc: 'Cryopreservation under strict monitoring' },
            { icon: Heart, title: 'Empowering Women', desc: 'Choose motherhood at your convenience' },
            { icon: Globe, title: 'Global Standards', desc: 'Compliant with ICMR & international IVF protocols' }
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-blue">
          
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What Exactly is Egg Freezing?</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Every woman is born with all the eggs she will ever have. As you get older, the number of eggs slowly drops. Sadly, the quality of these eggs also drops over time. This makes getting pregnant quite hard once a woman passes the age of 35. 
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            But medical science has found an amazing way to stop the clock. Egg freezing, also fully known as oocyte cryopreservation, is an amazing modern choice. It lets you closely protect your future. 
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            We gently collect your healthy eggs while you are still young and strong. We quickly freeze them using a very fast, super-cold cooling process. This locks the eggs safely in perfectly frozen time. They do not age a single day while they sleep in our frozen tanks. Years later, when you are fully ready to start a beautiful family, you can warmly wake them up and use them to create a healthy pregnancy.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Why Do Strong Women Choose to Freeze Their Eggs?</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Modern women rightly want full control over their own bright lives. Many women study hard in college for many years. Others work very hard to build powerful, successful careers. Some are patiently waiting to meet their perfect life partner before they bring a baby into the world. You should never feel forced to rush into motherhood simply because of a ticking biological clock. 
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            By freezing your beautiful eggs now, you buy yourself massive peace of mind. It removes the heavy daily stress. You can finish your high studies, brilliantly climb the tall corporate ladder, and boldly travel the vast globe. You bravely do all of this securely knowing your fertility is completely safe.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Besides career and life choices, there are real medical reasons to urgently freeze eggs. If a woman finds out she has sad cancer, strong treatments like heavy chemotherapy can quickly destroy her fragile eggs forever. Freezing them before starting the harsh cancer treatment safely saves her happy chance of later becoming a mother. Conditions like severe endometriosis or deep family history of early menopause also push women to happily choose this safe path. 
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            As the proudly recognized <strong>Best IVF Center In Delhi</strong>, we strongly empower women every single day. We give you the powerful gift of pure time. Your bright future totally belongs strictly to you. Taking safely proactive steps today firmly promises a happier, softer tomorrow. We stand totally by your brave side during every easy step.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">How Does The Freezing Process Actually Work?</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Many women fear this awesome process is terribly painful or scary. The truth is, it is very straightforward and totally safe. We break it down into four simple, easy steps.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Step One is a warm, private chat. We thoroughly check your basic health. We test your blood and gently scan your lovely ovaries with a quiet machine. This softly tells us exactly how many eggs you currently have sleeping inside you.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Step Two is safely waking the eggs. In a normal month, your body completely grows just one single egg. But for freezing, we want to safely collect between ten to fifteen eggs at once. To do this, we give you very safe, tiny hormone pens. You simply use these small, painless pens on your belly for about ten fast days. You visit us for quick, clean checkups so we can easily watch the beautiful eggs grow.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Step Three is safely gathering the eggs. Do not worry, you will not feel a single thing! You totally sleep for fifteen short minutes in our extremely clean, quiet operating room. Our gentle doctor quickly removes the perfectly grown eggs through a tiny needle. There are absolutely no scary cuts or ugly stitches. You usually wake up feeling completely great and walk peacefully home exactly the same day.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Step Four is the pure magic of freezing. The highly gathered eggs go directly into our bright lab. Our genius scientists securely bathe them in a special safe medicine. Then, they instantly drop them into deeply freezing liquid nitrogen. This instant freeze safely protects them completely. They bravely rest there in total peace for months or even long years.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">When is the Best Age to Freeze Your Eggs?</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Many smart patients frequently ask exactly what age is the most perfect time to complete this fast process. The strict medical answer is heavily clear: earlier is absolutely much better. Your beautifully natural eggs are highly strongest and healthiest right when you are beautifully situated between twenty-five and early thirty-five years exactly old. 
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            During this vibrant bright young window of smooth time, your lovely eggs powerfully laugh at strong damage. If you happily choose to actively safely freeze them during these early great years, you closely secure the greatest, safest chances of beautifully giving birth to a brilliant, bouncy, amazingly healthy baby safely later. After a lovely woman strongly passes the exact smart age of thirty-five, the raw golden number of brilliant eggs greatly safely drops totally down securely. But importantly, completely please do totally understand that even if you beautifully are currently slightly older, there is still powerful warm hope gently waiting. We exactly warmly invite absolutely you to fully brightly meet our skilled clinic.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">The Awesome Power of Safe Vitrification</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Years ago, perfectly freezing an egg was highly difficult. A human egg is mostly made of water. If you freeze water slowly, it sadly makes sharp ice crystals. Those sharp crystals would break the delicate egg. 
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Today, we use a space-age method brilliantly called vitrification. It means we freeze the egg so incredibly fast that no sharp ice crystals can ever form. The egg instantly turns into a smooth, safe, glass-like bead. 
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Because of this amazing fast method, nearly 99% of all eggs fully survive the deep freeze. When you warmly thaw them years later, they act exactly as healthy as the day they were gently removed. By strictly using this perfect method, our proud <strong>IVF Center in Lajpat Nagar</strong> safely offers women the highest global success rates. Your frozen trust is literally kept entirely secure.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Is the Freezing Procedure Deeply Safe For You?</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Yes! This modern procedure is globally proven and incredibly safe. Millions of smart women entirely around the wide world have successfully frozen their lovely eggs without any health trouble.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            The tiny hormone pens we use are completely safe. Your body naturally removes them safely within a few rapid days. Some women feel a little soft bloating or mild emotion during the ten days of fast growth, but severe pain is exceptionally rare. 
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            The short collection day is extremely safe. Our highly trained doctors proudly use sterile, shiny equipment. We intensely monitor your gentle breathing the entire fast time you sleep. The real truth is, the deepest comfort you gain vastly outweighs any tiny, short bump in the road. You actively buy beautiful insurance for your lovely family's future. 
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-16">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: 'Is egg freezing safe?', a: 'Yes. It is a safe and minimally invasive process using advanced vitrification to perfectly prevent damage globally during the rapid freezing stage.' },
              { q: 'What is the ideal age to freeze eggs?', a: 'The best wonderful time is exactly between 25 and 35 years old, strictly when your lovely egg quality is solidly highest.' },
              { q: 'How long can eggs be safely stored?', a: 'Tiny delicate eggs can be safely fully stored for deeply many long years absolutely without any sad loss of pure quality.' },
              { q: 'Can frozen eggs be magically used for IVF later?', a: 'Yes entirely, safely thawed eggs are smoothly fertilized through proven ICSI science to boldly achieve a happy pregnancy when absolutely desired.' }
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
            Preserve Your Fertility with Egg Freezing in Lajpat Nagar Delhi
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Choose flexibility, security, and control over your fertility with advanced egg freezing technology and expert care.
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

export default EggFreezingPage;
