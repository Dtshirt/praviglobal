'use client';
import React, { useState } from 'react';
import {
  Microscope,
  CheckCircle2,
  Clock,
  Users,
  Award,
  Phone,
  Mail,
  Calendar,
  Heart,
  Shield,
  Activity,
  ChevronRight,
  MapPin,
  Star,
  TrendingUp,
  Baby,
  Globe
} from 'lucide-react';

const FollicularMonitoringPage = () => {
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
                <span className="text-blue-100 font-semibold">Accurate Ovulation Tracking</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Follicular Monitoring at Pravi Global IVF Delhi
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-blue-100">
                Track Ovulation Precisely for Successful Conception
              </h2>
              <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                At Pravi Global IVF Delhi, we use advanced ultrasound-based follicular monitoring to track your egg growth and ovulation cycle. This ensures the right timing for conception, IUI, or IVF — increasing your chances of pregnancy.
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
                      <Activity className="w-8 h-8 text-blue-900" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold">High</div>
                      <div className="text-blue-100">Accuracy Ultrasound</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-pink-400 rounded-full flex items-center justify-center">
                      <Baby className="w-8 h-8 text-blue-900" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold">Better</div>
                      <div className="text-blue-100">Pregnancy Outcomes</div>
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
            Why Choose Follicular Monitoring at Pravi Global IVF?
          </h2>
          <p className="text-lg text-gray-600">Real-time tracking, precision care, and expert fertility guidance</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { icon: Microscope, title: 'High-Resolution Ultrasound', desc: 'Advanced equipment for accurate ovulation tracking' },
            { icon: Users, title: 'Expert Fertility Specialists', desc: 'Monitoring supervised by senior gynecologists' },
            { icon: Globe, title: 'Personalized Approach', desc: 'Tailored fertility tracking for each patient' },
            { icon: Heart, title: 'Improved Conception Rates', desc: 'Increases success for IUI, IVF & natural conception' }
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
          
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Follicular Monitoring?</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Having a baby is a wonderful journey. But sometimes, knowing exactly when to try can be confusing. Every single month, a woman's body prepares to create a new life. Deep inside her ovaries, tiny fluid-filled sacs start to grow. These small sacs are called follicles. Inside each healthy follicle hides one tiny egg.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Follicular monitoring is a very simple and safe way to watch these eggs grow. A doctor uses a special, quiet ultrasound machine. This machine takes clear pictures of the inside of your body. It acts like a powerful magnifying glass. The doctor watches the follicles get bigger day by day. When a follicle reaches exactly the right size, it breaks open and safely releases the egg. This event is called ovulation.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Knowing the exact hour this happens is pure magic for pregnancy. It completely removes all the stressful guessing. It tells you and your doctor the exact best time to try for a baby. It is a very easy test, but it offers huge answers.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Why is Tracking Your Cycle So Important?</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Timing is everything when trying to have a baby. A released egg only lives for a very short time—usually just 12 to 24 hours. The male sperm can live safely inside a woman's body for up to five days. If the sperm is not already waiting when the egg drops, pregnancy simply will not happen.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            For many women, the body's natural clock does not work perfectly. Some women have very long periods. Some women skip months entirely. Conditions like PCOS (Polycystic Ovary Syndrome) make the clock very confused. The body might try to grow an egg but stop halfway. Trying to get pregnant with a confused clock can take endless years.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            This is exactly why tracking your cycle with medical scans is so important. It gives you a perfect roadmap. We do not just guess based on how you feel or what a phone app tells you. We look directly at the actual egg.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            As the proud <strong>Best IVF Center In Delhi</strong>, we strongly rely on this test for nearly every patient. If you are trying naturally at home, we tell you the exact best day. If you are using safe treatments like IUI (where we put fast sperm directly inside you) or amazing IVF, we must know exactly when to act. If we move too fast, the egg is not ripe. If we move too slow, the egg is completely gone. Follicular monitoring perfectly bridges this gap. It turns a stressful guessing game into an exact, highly successful science.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Exactly How is the Test Done?</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Many women hear the word "monitoring" and feel silently scared. They imagine painful hospital tests and big needles. We promise you, this test is so simple and totally painless.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            First, there is absolutely no blood taken and no sharp needles used. You will walk into a very warm, private, and dimly lit room. You simply lay down calmly on a soft bed. Our doctor uses a very small, smooth scanning wand called a transvaginal ultrasound. It is lightly covered with cool, clean gel. It is gently placed just slightly inside the body. Because it is so close to your ovaries, it sends perfect, crystal-clear pictures directly to a TV screen.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Most women say it feels exactly like a normal, simple checkup. The whole scan takes less than ten fast minutes. You can securely ask questions while watching the awesome screen. You literally get to see the tiny home where your baby will start!
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Usually, we ask you to visit the clinic three to five times during your monthly cycle. We usually start scanning around the 9th day of your period. You come back every two days. We carefully measure the egg sac with a tiny digital ruler on the screen. We watch it grow from the size of a tiny pea to the size of a grape.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            When the follicle reaches about 18 to 22 millimeters, we smile brightly. We know it is fully mature and perfectly ready to pop. This easy process gives you complete control over your own beautiful body.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Checking the Nest (The Endometrium)</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Making a good egg is only half of the journey. Once the strong egg meets the fast sperm, it forms a tiny embryo. This new baby must find a safe, soft place to sleep and grow. That place is the inner lining of your womb, smartly called the endometrium.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            During your ultrasound scan, we do not just stare at your eggs. We also carefully measure this vital womb lining. Think of it like making a warm bed. If the bed sheets are too thin or completely flat, the baby cannot attach securely. If we clearly see the lining is not thick enough during the scan, we can fix it easily. Our expert doctors simply give you safe, gentle vitamins and medicines to quickly thicken the soft bed before the egg drops.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Who Should Get This Test Done?</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Not everyone needs this test right away. But if you have been trying warmly for over a year, it is a very smart puzzle piece. We highly recommend this exact test if you have totally unpredictable periods or suffer from terrible PCOS.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            If you are taking strong fertility pills to help you grow more eggs, monitoring is secretly mandatory. We must securely watch to make sure the pills are safely working. We also need to know if you are growing too many eggs at once to keep you fully safe.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Additionally, if you are planning an IUI treatment, this scan is the absolute heart of the plan. As a caring <strong>IVF Center in Lajpat Nagar</strong>, we believe deeply in patient safety. We use these scans to proudly protect your health while forcefully pushing your success rates as high as humanly possible. Transparency and deep care drive our clinic.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">World-Class Accuracy For Your Success</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            A scan is truly only as good as the smart doctor reading it. In our highly advanced clinic, we use the very latest 3D and 4D bright ultrasound machines. These amazing machines catch tiny details that older machines totally miss.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Our expert fertility specialists proudly read these scans themselves. They carefully explain every single step to you. We happily print the pictures for you to hold. When you leave our clinic safely, you know exactly what is happening inside your own body. You clearly know what pill to take, what day to try, and exactly what to expect next.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Do not let another precious month simply waste away in dark confusion. Take beautiful control of your family's future today. A painless ten-minute test can safely open the brave door to a complete lifetime of happy motherhood. Reach out to our caring team today and easily track your way to success.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-16">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: 'Is follicular monitoring painful?', a: 'No, the procedure involves a simple transvaginal ultrasound scan. It uses a very slim, smooth wand. It is completely painless and takes only five to ten minutes to finish.' },
              { q: 'How many scans are needed per cycle?', a: 'Typically, you will need 3 to 5 easy scans in one single cycle. We start around day 9 of your period and scan every two days to carefully track the exact growth.' },
              { q: 'Can it help with natural conception?', a: 'Yes, absolutely. Tracking effectively helps couples simply plan intercourse during the single most fertile 24-hour period. It removes all guessing for natural conception.' },
              { q: 'When is follicular monitoring highly recommended?', a: 'It is strongly advised for women undergoing any fertility treatments like IUI or IVF, or for women with highly irregular cycles and PCOS.' }
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
            Track Your Ovulation with Precision at Pravi Global IVF Delhi
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Plan your pregnancy the smart way — with expert-guided follicular monitoring and fertility assessment by Delhi’s trusted IVF specialists.
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

export default FollicularMonitoringPage;
