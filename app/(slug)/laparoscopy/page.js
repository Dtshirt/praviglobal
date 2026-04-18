'use client';
import React, { useState } from 'react';
import {
  Activity,
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
  Microscope
} from 'lucide-react';

const LaparoscopyPage = () => {
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
                <span className="text-blue-100 font-semibold">Advanced Fertility Surgery</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Laparoscopy at Pravi Global IVF Delhi
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-blue-100">
                Minimally Invasive Surgery for Fertility & Diagnosis
              </h2>
              <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                Experience precise, minimally invasive laparoscopy at Pravi Global IVF Delhi — a trusted solution for diagnosing and treating fertility problems, endometriosis, fibroids, and other reproductive issues with advanced surgical care.
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
                      <Microscope className="w-8 h-8 text-blue-900" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold">Precision</div>
                      <div className="text-blue-100">Surgical Accuracy</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-pink-400 rounded-full flex items-center justify-center">
                      <Baby className="w-8 h-8 text-blue-900" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold">High</div>
                      <div className="text-blue-100">Fertility Success Rates</div>
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
            Why Choose Laparoscopy at Pravi Global IVF Delhi?
          </h2>
          <p className="text-lg text-gray-600">Advanced diagnostic and surgical expertise for reproductive care</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { icon: Shield, title: 'Safe & Minimally Invasive', desc: 'Small incisions, faster recovery, minimal scarring' },
            { icon: Heart, title: 'Fertility Focused', desc: 'Precision diagnosis for infertility causes' },
            { icon: Activity, title: 'Advanced Equipment', desc: 'Latest laparoscopic instruments and imaging' },
            { icon: Globe, title: 'Experienced Specialists', desc: 'Performed by senior gynecologists & fertility surgeons' }
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
          
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What Exactly is Laparoscopy Surgery?</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Sometimes, despite passing hundreds of normal blood exams and standard ultrasounds, doctors simply cannot figure out why a hopeful mother is failing to have a baby. When the outside medical tests show completely healthy results but biology remains stubbornly stuck, the trained doctor needs to actually look directly inside the mother's lower stomach. Laparoscopy is an incredibly smart, highly advanced medical procedure famously known in the medical community as <strong>keyhole surgery</strong>. 
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Instead of making a massive, painful cut completely across the stomach to see inside, the doctor simply makes one tiny, almost invisible scratch right near the mother's belly button. They carefully slide a beautifully tiny, lighted camera completely through this tiny doorway. This magical camera lights up the entire dark inside of the stomach, projecting large, highly clear video pictures straight onto a bright computer screen. This allows the doctor to closely investigate the delicate uterus, the thin fallopian tubes, and the ovaries directly with their own eyes. 
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Why You Might Need This Procedure</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            There are many hidden biological roadblocks that cause severe <strong>pelvic pain</strong> and silently stop a pregnancy. The deepest secret of laparoscopy is that it acts beautifully as both a discovering camera and a repair tool at the absolute exact same time. If the investigating doctor suddenly discovers a physical problem while exploring with the camera, they do not wake the mother up to completely reschedule another separate surgery. Instead, they gently slide tiny robotic tools through another tiny scratch and fix the problem completely safely right then and there.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            The most common hidden villain is a painful sickness heavily called <strong>endometriosis</strong>. This terrible condition happens when the soft tissue that belongs entirely safely inside the womb decides to dangerously grow completely outside the womb, tightly wrapping around the healthy ovaries and tubes like thick spider webs. Using <strong>minimally invasive surgery</strong>, the doctor safely burns or carefully cuts this painful tissue completely away. This instantly helps cure the mother's daily pain and dramatically improves her chances of proudly taking home a baby.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Doctors also routinely use this brilliant tool to safely remove dangerously large ovarian cysts, slice away hard muscular fibroids inside the uterus, or politely repair completely blocked fallopian tubes that are stopping the sperm from reaching the egg.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">What Happens During The Process?</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Like all highly modern surgeries, keeping the mother completely safe and absolutely comfortable is the highest ultimate goal. Before anything starts, the medical clinical team fully puts the mother smoothly to sleep using safe hospital anesthesia medicine. Once she is deeply asleep and safely feeling absolutely zero pain, the doctor mildly fills her stomach quietly with completely harmless carbon dioxide gas. This safe gas simply acts like a gentle balloon, safely pushing the stomach walls upwards away from the internal organs to highly give the doctor plenty of empty room to see and work perfectly safely. 
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Once the lighted camera clearly locates the hidden fertility problems, the expert doctor cleanly fixes them using tiny microscopic instruments. Finally, the safe gas is carefully pressed completely out of the stomach, the tiny scratch is beautifully closed with exactly one or two simple hospital stitches, and a small clean bandage is safely applied. Because the physical surgical cut is completely microscopic compared to old-fashioned heavy surgeries, the total amount of bodily damage is incredibly low.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">The Extreme Importance of Advanced Surgical Skill</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Operating highly sharp tools safely beside delicate reproductive organs using only a computer video screen requires a massively extreme amount of trained human skill. A poor surgeon can completely accidentally cut a healthy ovary or leave dangerous scar tissue behind that permanently ends a woman's fertility completely. This is simply not a common risk you ever want to personally take.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            This is exactly why choosing the absolute <strong>Best IVF Center In Delhi</strong> matters so heavily for your physical safety. Elite clinics employ highly famous doctors who perform thousands of these precise keyhole surgeries every single wonderful year. They possess the firm muscle memory and expensive modern camera equipment legally required to protect your future family safely.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">A Beautifully Gentle Recovery Speed</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Since this is entirely a modern keyhole medical procedure, the <strong>recovery time</strong> is notoriously incredibly fast. Most happy mothers actually gently wake up, peacefully drink some warm hospital tea, and calmly walk directly out to their waiting car safely on that exact same afternoon. You completely do not need to securely stay overnight miserably in a scary hospital bed safely at all. 
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            You might physically experience completely mild stomach soreness for exactly one or two wonderfully short days following the procedure. Sometimes, the safe carbon dioxide gas secretly escapes towards the upper chest, causing some totally normal shoulder pain for a few short hours. Because building your trusted <strong>IVF Center in Lajpat Nagar</strong> requires intense personal patient care, our lovely medical nurses will strictly follow up closely with you by phone to completely ensure your body is healing beautifully safely at home.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-16">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: 'Will I completely have large ugly scars on my beautiful stomach?', a: 'No, absolutely not. The tiny physical cuts made during laparoscopy are truly smaller than a simple dime. Once the skin completely safely heals after a few normal months, the tiny lines become practically invisible completely hiding quietly inside or near your belly button.' },
              { q: 'How safely soon can I successfully try to finally get pregnant after surgery?', a: 'This heavily securely depends strictly on exactly what the doctor magically repaired silently during the actual surgery. However, in most completely normal healthy cases, eager caring couples are joyfully given the green absolute light fully to deeply try conceiving again just one or two normal months safely after the tissue heals.' },
              { q: 'Is laparoscopy officially counted as a highly dangerous major surgery?', a: 'While deeply sending an anxious patient carefully to sleep fully makes it essentially a hospital surgery naturally, laparoscopy is medically categorized safely globally as entirely a minor, extremely low-risk safe day procedure. Serious dangerous medical complications are wonderfully incredibly rare globally.' },
              { q: 'Should I quickly safely take total weeks completely off heavily from my job?', a: 'No, that is completely unnecessary totally. Because the bodily physical damage safely is purely microscopic closely, most tough women happily completely gently normally safely quietly bravely beautifully happily clearly return directly fully strictly cleanly exactly cleanly directly purely back strictly normally to totally standard desk jobs comfortably within three highly short working days safely.' }
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
            Get Expert Laparoscopy Treatment at Pravi Global IVF Delhi
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Restore your reproductive health and improve fertility outcomes with minimally invasive laparoscopy performed by our expert gynecologic surgeons.
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

export default LaparoscopyPage;
