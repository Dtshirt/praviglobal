'use client';
import React, { useState } from 'react';
import {
  Users,
  Award,
  Heart,
  CheckCircle2,
  Clock,
  Phone,
  Calendar,
  MapPin,
  Star,
  Baby,
  Shield,
  Globe,
  ChevronRight,
  Activity
} from 'lucide-react';

const FemaleInfertilityPage = () => {
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
                <span className="text-blue-100 font-semibold">Comprehensive Fertility Solutions</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Female Infertility Treatment at Pravi Global IVF Delhi
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-blue-100">
                Restoring Hope with Advanced Fertility Care
              </h2>
              <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                At Pravi Global IVF Delhi, we specialize in diagnosing and treating female infertility through advanced reproductive techniques and compassionate care. From hormonal imbalance to tubal blockages, our experts identify and treat the root cause to help you achieve your dream of motherhood.
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
                      <div className="text-blue-100">Successful Treatments</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center">
                      <Users className="w-8 h-8 text-blue-900" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold">Expert</div>
                      <div className="text-blue-100">Gynecologists & Fertility Specialists</div>
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
            Why Choose Pravi Global IVF for Female Infertility Treatment?
          </h2>
          <p className="text-lg text-gray-600">Expert diagnosis, advanced technology, and compassionate care</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { icon: Activity, title: 'Accurate Diagnosis', desc: 'State-of-the-art testing for hormonal and reproductive health' },
            { icon: Heart, title: 'Holistic Care', desc: 'Personalized treatment combining medicine, lifestyle, and counseling' },
            { icon: Shield, title: 'Safe & Proven Techniques', desc: 'Fertility treatments that ensure safety and high success' },
            { icon: Globe, title: 'Comprehensive Facility', desc: 'All diagnostic and treatment services under one roof' }
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
          
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Female Infertility?</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Having a baby is a big dream for many women. But sometimes, the journey takes longer than expected. Female infertility means a woman tries to get pregnant for a full year but does not succeed. If you are over 35 years old, this time shrinks to six months. Infertility is not a rare issue. Millions of women face it every year. It is a medical problem, not a personal failure.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Infertility can feel like a heavy weight on your heart. It brings sadness, stress, and fear. Many women wrongly blame themselves. But the truth is, the human body is very complex. There are many steps needed to make a baby. If just one step goes wrong, pregnancy will not happen. As the <strong>Best IVF Center In Delhi</strong>, we want you to know you are never alone. Medical science has strong answers. With the right help, most women can and do become happy mothers.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Common Causes of Female Infertility</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            To fix the problem, we must first find out exactly why it is happening. The female body acts like a perfect clock. Every month, many parts work together.
          </p>
          <ul className="text-gray-700 leading-relaxed mb-6 space-y-4">
            <li><strong>1. Ovulation Problems:</strong> This is the most common cause. Every month, your ovary must drop a healthy egg. If it does not, there is no egg for the sperm to meet. Conditions like PCOS (Polycystic Ovary Syndrome) stop eggs from growing properly. Hormonal imbalance can also freeze the clock.</li>
            <li><strong>2. Blocked Fallopian Tubes:</strong> The fallopian tubes are tiny roads. They carry the egg securely from the ovary down to the womb. Sometimes, past infections or surgeries cause thick scars. These scars block the road completely. If the road is blocked, the sperm and egg can never ever meet.</li>
            <li><strong>3. Uterine Fibroids and Polyps:</strong> The uterus (or womb) is where the baby lives and grows. Sometimes, small pieces of muscle or skin grow inside the womb. These are called fibroids or polyps. They can make the womb a hard place for an embryo to attach and grow safely.</li>
            <li><strong>4. Endometriosis:</strong> This is a condition where the skin that should grow inside the womb grows outside on other organs instead. It causes a lot of deep pain during periods. It also makes getting pregnant very difficult.</li>
            <li><strong>5. Age Factor:</strong> As a woman gets older, her egg supply naturally drops. The quality of the remaining eggs also goes down quietly. This is completely natural, but it does make it harder to have a baby after age 35.</li>
            <li><strong>6. Lifestyle and Daily Habits:</strong> Sometimes, everyday habits quietly hurt fertility. Being heavily overweight or deeply underweight can completely stop your monthly periods. High daily stress, smoking cigarettes, or drinking too much alcohol can also poison your eggs. Simply eating healthy foods, walking daily, and lowering stress can powerfully boost your pregnancy chances naturally.</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">How We Easily Test for Female Infertility</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Testing is the key to finding the right cure. Many women feel scared of testing. They worry it will hurt or cost too much. We promise that our tests are very gentle and clear. We take things one fast step at a time.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            First, we talk with you. We ask simple questions about your monthly periods, past health, and daily life. Next, we do a basic physical health check. We often ask for simple blood tests. These tests check your hormones perfectly. They tell us exactly if you are dropping eggs correctly. 
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            We also use smooth ultrasound machines. This test uses quiet sound waves to look inside your belly securely. It shows us perfect pictures of your ovaries and your womb. It is totally painless. Sometimes, we use a special X-ray called an HSG. For this test, we safely put a little dye inside your womb. This dye perfectly outlines your fallopian tubes to see clearly if they are blocked. 
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            It is also very important to test your partner. We always suggest a simple sperm test for the man. In many cases, both partners might have a small issue at the exact same time. Checking both of you firmly saves time and deeply reduces future heartbreak. Knowing the full truth from both sides creates the fastest road to success.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Treatment Options to Build Your Family</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            After we find the root cause, we confidently offer many ways to fix it. We never guess. We only offer exactly what your body truly needs.
          </p>
          <ul className="text-gray-700 leading-relaxed mb-6 space-y-4">
            <li><strong>Fertility Medicines:</strong> If your body is not dropping eggs properly, we use simple, safe pills. These medicines gently wake up your ovaries. They help eggs grow perfectly and drop on time. This is often the first and cheapest step.</li>
            <li><strong>IUI (Intrauterine Insemination):</strong> If the simple pills are not enough, IUI is a great next step. For this, we take the very best, fastest sperm from your partner. We place it directly inside your womb at the exact perfect time. It gives the sperm a massive head start.</li>
            <li><strong>IVF (In Vitro Fertilization):</strong> If tubes are blocked or other methods fail, IVF offers huge hope. For IVF, we safely collect a few healthy eggs from your body. We carefully mix them with sperm in our extremely clean lab. Once they grow into strong tiny babies (embryos), we gently place them back into your warm womb. IVF has helped millions build happy homes.</li>
            <li><strong>Gentle Surgery:</strong> If you have fibroids, polyps, or blocked tubes, we can often fix them with quick, safe surgery. We use tiny cameras that leave almost no marks. You can often go securely home the same day.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-6">
            As a top <strong>IVF Center in Lajpat Nagar</strong>, we are deeply proud of our high success rates. We offer every advanced treatment right here under one single roof.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Why Choose Our Compassionate Care?</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Dealing with fertility issues is deeply emotional. It is hard to find peace when you feel broken. We believe that loving kindness is just as vital as good medicine. Our expert doctors and certified nurses give you real time. We answer every single question. We never rush your visits. We use the most advanced, clean safety labs to protect your future family. We explain every cost up front clearly so you never have bad surprises. Our entire promise is honest, ethical care for you.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            We deeply know that treating infertility can make you feel sad, angry, or exhausted. Because of this, we also carefully offer emotional counseling. Our trained counselors listen warmly to your fears and hold your hand during tough moments. They teach you simple ways to relax and breathe. Healing the mind is just as powerful as healing the body.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Having a baby is a journey of extreme courage. Taking the first step feels hard, but you do not have to struggle in silence. Reach out to our deeply caring experts today. Together, we can find the hidden answers, safely fix the problem, and proudly welcome a beautiful new life into your arms.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-16">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: 'How is female infertility exactly diagnosed?', a: 'Through very simple medical tests like hormonal blood typing, clear ultrasound pictures, HSG (safe tube test), and light laparoscopy, depending entirely on your condition.' },
              { q: 'Can infertility be treated completely naturally?', a: 'In mild cases, simple lifestyle changes, health diets, and careful ovulation tracking may help. For others, safe medical treatments are much faster and more effective.' },
              { q: 'When exactly should I see a fertility specialist?', a: 'If you are under 35 years old and have tried for a full year without success, or if you are over 35 and tried for just 6 months, you should loudly consult a trusted specialist.' },
              { q: 'Is IVF the only real solution?', a: 'Absolutely not. Treatments vary greatly depending on the exact cause. IVF is just one option among many, including safe IUI and gentle medication-based therapies.' }
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
            Regain Your Fertility Confidence with Pravi Global IVF Delhi
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Discover expert diagnosis, personalized treatment, and emotional support for female infertility — because every woman deserves a chance at motherhood.
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

export default FemaleInfertilityPage;
