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
  Globe
} from 'lucide-react';

const HormonalTestPage = () => {
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
                <FlaskRound className="w-8 h-8 text-yellow-400" />
                <span className="text-blue-100 font-semibold">Comprehensive Hormonal Testing</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Hormonal Test at Pravi Global IVF Delhi
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-blue-100">
                Accurate, Advanced & Reliable Hormone Analysis
              </h2>
              <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                At Pravi Global IVF Delhi, we offer advanced hormonal testing to evaluate reproductive and endocrine health. These tests help diagnose fertility issues, menstrual irregularities, thyroid problems, and more — ensuring targeted treatment for both men and women.
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
                      <div className="text-3xl font-bold">Advanced</div>
                      <div className="text-blue-100">Hormone Analysis</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center">
                      <Microscope className="w-8 h-8 text-blue-900" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold">Accurate</div>
                      <div className="text-blue-100">Diagnostic Results</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-pink-400 rounded-full flex items-center justify-center">
                      <Heart className="w-8 h-8 text-blue-900" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold">Personalized</div>
                      <div className="text-blue-100">Care & Reports</div>
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
            Why Choose Pravi Global IVF for Hormonal Testing?
          </h2>
          <p className="text-lg text-gray-600">Precision. Compassion. Expertise.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { icon: Microscope, title: 'Advanced Lab', desc: 'Fully automated hormone testing systems' },
            { icon: Users, title: 'Expert Pathologists', desc: 'Led by experienced fertility specialists' },
            { icon: Globe, title: 'Global Accuracy', desc: 'Tests standardized to international norms' },
            { icon: Heart, title: 'Personalized Reports', desc: 'Tailored to individual hormonal profiles' }
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
          
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What Is a Hormonal Test?</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Your body has special messengers called hormones. They travel through your blood. They tell your body how to work properly. For both men and women, hormones do a very big job. They control how you grow, how you feel, and most importantly, how you have a baby. When you try to start a family, everything in your body must be in balance. If a single hormone is too high or too low, the whole system gets confused. This can make it very hard to get pregnant.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            A hormonal test is a very simple blood test. It acts like a clear map for your doctor. It looks deep inside your body to see how much of each hormone you have. It shows the doctor exactly what your body needs to work well. For many people, finding out their hormone levels is the very first step toward having a child. Knowing the truth helps remove fear and worry. You do not have to guess what is wrong. The test gives you clear, real answers.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Why Should You Get a Hormonal Test?</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Many couples try to have a baby for many months without success. Feeling sad or stressed is very normal. But waiting too long can make the problem harder to fix. Doctors suggest you should take a test if you fall into any of these groups:
          </p>
          <ul className="text-gray-700 leading-relaxed mb-6 space-y-3">
            <li className="flex items-start"><CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1 mr-3" /> <span>You have been trying to get pregnant for a full year. If you are over 35 years old, you should only wait six months before testing.</span></li>
            <li className="flex items-start"><CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1 mr-3" /> <span>Your periods do not come on time. If they are very late, very fast, or skip entirely, that is a big warning sign.</span></li>
            <li className="flex items-start"><CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1 mr-3" /> <span>You have strange pains during your cycle, or you notice large changes in your body weight.</span></li>
            <li className="flex items-start"><CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1 mr-3" /> <span>You have had trouble with previous pregnancies, such as early loss or miscarriages.</span></li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-6">
            Testing is not just for women. Men also need balanced hormones to stay healthy and make strong sperm. If a man feels very tired all the time, loses body hair, or has a low drive, a test is a good idea. Testing early is the smartest choice you can make. It helps save time, money, and heartache. As a dedicated <strong>IVF Center in Lajpat Nagar</strong>, we strongly believe that knowledge brings hope. Once we find the root cause, we can begin to fix it right away.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Important Hormones Tested in Women</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            A woman's body carefully prepares for a baby every single month. Many different hormones work together to make this happen. Here are the most important messengers we test:
          </p>
          <ul className="text-gray-700 leading-relaxed mb-6 space-y-4">
            <li><strong>FSH (Follicle Stimulating Hormone):</strong> This is the starting bell. This hormone tells your ovaries to wake up and start growing an egg. If the number is too high, it might mean your body is working way too hard to find one good egg. This often shows that your egg supply is running low.</li>
            <li><strong>LH (Luteinizing Hormone):</strong> Once the egg is fully grown, this hormone peaks. It tells the body to quickly release the egg. This event is called ovulation. Timing is everything. Finding out when LH strikes helps you pick the single best day to try for a baby.</li>
            <li><strong>AMH (Anti-Müllerian Hormone):</strong> This is one of the most vital tests. AMH acts like a fuel gauge in a car. It tells doctors exactly how many sleeping eggs you have left in your body. It is an amazing tool to see your total fertility power.</li>
            <li><strong>Prolactin:</strong> Your body makes this hormone mainly to produce breast milk. But, if you are not pregnant and your level is high, it can trick your body. It will tightly stop your ovaries from releasing eggs.</li>
            <li><strong>Thyroid Hormones (TSH):</strong> Your thyroid is a small gland in your neck. It manages your whole body's energy. If it works too slow, you feel tired, gain weight, and your periods stop. A healthy thyroid is an absolute must for a healthy baby.</li>
            <li><strong>Estradiol (E2):</strong> This is an important form of estrogen. It helps build a soft, rich bed inside your womb for a baby to grow. We measure this to see if your ovaries are healthy.</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Crucial Hormonal Tests for Men</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            People often forget that it takes two healthy people to make a baby. Male fertility is just as important. In fact, nearly half of all pregnancy struggles come from male causes. A man's hormones must perfectly signal the body to create millions of strong, fast-moving sperm every day.
          </p>
          <ul className="text-gray-700 leading-relaxed mb-6 space-y-4">
            <li><strong>Testosterone:</strong> This is the main male hormone. It controls muscle growth, deep voice, energy, and sperm making. If the level is too low, the body simply will not make enough sperm to cause a pregnancy.</li>
            <li><strong>FSH in Men:</strong> Just like women, men have this hormone. In men, it goes directly to the testes and safely orders the factory to build sperm. A highly raised FSH level often points to damage inside the sperm factory.</li>
            <li><strong>LH in Men:</strong> This hormone tells the testes to make more testosterone. It works hand in hand with FSH. Both must be exactly right.</li>
            <li><strong>Prolactin:</strong> If men have too much of this milk-making hormone, it can block their natural testosterone. This causes big drops in both sperm count and daily energy.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-6">
            Taking a male hormone test involves a fast, easy blood draw. Finding the exact problem quickly leads to simple treatments. Often, taking safe medicine for a few months can fully correct the issue.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">How The Testing Process Works Gently</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Many people feel a little scared when visiting a hospital for blood tests. We clearly understand that fear. Our team makes sure your visit is totally relaxing, calm, and pain-free.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            The test is incredibly easy and quick. You simply sit in a very comfortable chair. Our highly trained nurse will talk to you kindly to keep you calm. They use a very tiny needle to take a small sip of blood from your arm. You will feel a quick pinch, like a tiny bug bite, and then it is over. The entire visit takes less than ten minutes.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Some female hormone tests must be done on a specific day of your monthly cycle. Most often, this is the second or third day of your period. This day gives the cleanest reading of your body. Our doctors will carefully write down exactly which day you should come in. You never have to guess. Sometimes, we ask you not to eat food for a few hours before the test. This is purely to ensure your blood sugar does not hide the real answers.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">World-Class Lab Testing You Can Trust</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            In the field of medical science, accuracy means everything. A tiny mistake in a lab result can lead to wrong medicines and wasted months. We refuse to take any chances with your dreams. We proudly use strictly automated, high-tech testing machines. These smart machines remove human error. They deliver perfectly clear numbers every single time.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            As the <strong>Best IVF Center In Delhi</strong>, our certified pathologists and expert fertility doctors proudly oversee the testing lab. We strongly follow severe safety and hygiene rules that match top global hospital standards. Every sample is securely marked to protect your deep privacy.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            After we run your carefully handled blood test, our expert doctors do not just hand you a confusing paper filled with long medical words. We always sit directly with you face-to-face. We translate the medical numbers into very basic, easy words. We draw clear pictures so you fully grasp exactly what your body is doing. Transparency and deep honesty are our unbreakable promises. You have a full right to understand your health perfectly.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Your Next Steps After the Results</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Receiving your personal lab results is not the end of the road. It is highly actually the bright beginning. Once the results are firmly in our hands, we can properly map out a customized healing journey exclusively for you.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            If we gently discover a minor hormone imbalance, there is great news. Many, many problems are incredibly simple to fix. Often, our highly skilled doctors prescribe safe, daily pills that balance your body naturally in just a short few weeks. Sometimes, simply changing what food you eat or deeply improving your sleep fixes the issue naturally.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            If the complex tests show that simple medicine will not quickly work, we clearly explore highly advanced, safe medical options. These fantastic treatments might include gently guided IUI or highly proven IVF. We will firmly tell you both the great benefits and real costs up front. We will never rush you or push you to pick a fast treatment. You always hold absolute control over your body and your bright future.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Every day, countless brave families put all their hope in our skilled hands. They bravely step through our doors feeling completely lost and very sad. Years later, they walk out holding their beautiful, happy babies. Your journey to parenthood is deeply special. A single, clear hormonal test is the very first smart step. Let our caring team firmly hold your hand closely today and safely guide you into a wonderful tomorrow. Do not let hidden fears silently steal your precious time. We are always here uniquely for you.
          </p>

          {/* Optional: Add the FAQs back at the bottom for structure benefits */}
          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-16">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                q: 'When should I get a hormonal test done?',
                a: 'If you experience irregular periods, difficulty conceiving for over a year, unexplained weight changes, or symptoms of PCOD or thyroid imbalance, hormonal testing is strongly recommended.'
              },
              {
                q: 'Is fasting required before hormonal tests?',
                a: 'Some hormonal tests may require fasting or strict timing during your cycle (like day 2 or 3 of your period). Your doctor will advise you fully.'
              },
              {
                q: 'How long does it take to get results?',
                a: 'Most hormonal test reports are fully available within 24 hours at our in-house lab.'
              },
              {
                q: 'Are these tests safe?',
                a: 'Yes, hormonal tests involve only a small blood sample and are completely safe, quick, and nearly painless.'
              }
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
            Book Your Hormonal Test Today
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Early diagnosis makes all the difference. Schedule a consultation at Pravi Global IVF Delhi for precise hormone testing.
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
              Book Test Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HormonalTestPage;
