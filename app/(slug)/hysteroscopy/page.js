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
  FlaskRound,
  Globe
} from 'lucide-react';

const HysteroscopyServicePage = () => {
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
                <span className="text-blue-100 font-semibold">Expert Hysteroscopy Procedures</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Hysteroscopy at Pravi Global IVF Delhi
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-blue-100">
                Accurate Diagnosis & Treatment for Uterine Health
              </h2>
              <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                Pravi Global IVF Delhi offers advanced hysteroscopy procedures using high-definition endoscopic technology for both diagnostic and therapeutic purposes. Our expert gynecologists provide safe, painless, and precise evaluations of uterine conditions affecting fertility and menstrual health.
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
                      <div className="text-3xl font-bold">Advanced</div>
                      <div className="text-blue-100">Endoscopy Setup</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-pink-400 rounded-full flex items-center justify-center">
                      <Heart className="w-8 h-8 text-blue-900" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold">Safe</div>
                      <div className="text-blue-100">Day-Care Procedure</div>
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
            Why Choose Pravi Global IVF for Hysteroscopy?
          </h2>
          <p className="text-lg text-gray-600">Precision diagnosis, expert care, and cutting-edge technology</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { icon: Microscope, title: 'Modern Equipment', desc: 'High-resolution camera for clear visualization' },
            { icon: Users, title: 'Expert Gynecologists', desc: 'Performed by senior fertility specialists' },
            { icon: Shield, title: 'Safe & Minimally Invasive', desc: 'No cuts, quick recovery, minimal discomfort' },
            { icon: Heart, title: 'Comprehensive Care', desc: 'From diagnosis to treatment – under one roof' }
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
          
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What Exactly is a Hysteroscopy?</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            When trying to figure out why a woman is having trouble getting pregnant or why she is experiencing very heavy bleeding, a doctor needs to look closely inside the womb. The womb is officially called the uterus. It is the safe, warm home where a baby grows during a healthy pregnancy.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            A hysteroscopy is a simple, safe way for doctors to clearly see the deeply hidden inside of this tiny home. Instead of just helplessly guessing what is wrong based on your symptoms, the doctor uses a very special, thin tool called a hysteroscope. This amazing tool is about as incredibly thin as a standard pencil. It has a very bright light and a tiny, powerful digital camera secured on the absolute very end of it.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            The doctor gently slides this tiny camera directly through your body's natural opening (the cervix) and straight into the womb. Because of the brilliantly bright camera, the doctor can easily see everything completely clearly on a large, high-definition television screen located right inside the operating room. There are absolutely zero painful cuts on your outside stomach and absolutely no heavy stitches to heal from later. It is a brilliant, entirely safe way to honestly see exactly what is secretly happening deeply inside your own reproductive body.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Why Might You Suddenly Need This Important Test?</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Your womb is supposed to be perfectly smooth and clean on the inside, beautifully acting just like a soft, deflated balloon. But sometimes, tiny hidden problems can magically start to grow in there. These annoying problems can easily cause deep daily pain, heavily unpredictable bleeding, or totally block the start of a beautiful natural pregnancy.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            You might urgently need a hysteroscopy if you are currently having deeply unexplained trouble getting pregnant. If a naturally fertilized egg proudly enters a bumpy, uneven, or partially blocked womb, it simply cannot stick properly to the inner wall to safely grow. You might also completely need this highly awesome diagnostic test if you have totally unpredictable monthly periods or if you intensely bleed way too heavily during every single menstrual cycle.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Sometimes, women deeply suffer from tiny, soft growths hanging safely inside the sensitive womb. These soft growths are medically and warmly called polyps or fibroids. Other times, highly sticky scar tissue, often called strong adhesions, can totally glue the soft, delicate walls of the uterus completely together. This incredibly sadly happens quite often after a past heavy infection or from recovering from a highly difficult past surgery.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Many times, as the highly trusted <strong>Best IVF Center In Delhi</strong>, we effectively use this powerful medical procedure directly just before officially starting an amazing IVF journey. We fiercely want to medically guarantee that the warm future baby home is absolutely one hundred percent perfectly ready and safe before we carefully place a tiny, precious embryo inside you. Doing a very fast hysteroscopy first incredibly powerfully boosts the final, glorious chances of a completely wonderfully successful, healthy pregnancy. It makes completely sure that absolutely nothing is silently hiding in the complete dark to spoil your beautiful, long-time baby dreams.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Exactly How is the Procedure Safely Done?</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Hearing you need a completely new medical procedure can easily feel totally scary on the inside. But please kindly relax and deeply breathe! This is genuinely one of the easiest, amazingly fastest, and absolutely safest procedures available in modern medicine today. We will gladly walk you safely through every single wonderfully easy step here at our clinic.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            First, you will visit our highly clean, wonderfully happy medical clinic on a perfectly scheduled morning. You do not ever need to stay loudly overnight in a scary, cold, crowded hospital ward. You literally get to go securely deeply home onto your own couch the exactly same day. When it is beautifully time for the short test to properly begin, you will calmly step into a very private, softly quiet room. Our highly trained expert doctors will safely give you very mild, gentle medicine so you instantly feel deeply sleepy and super physically relaxed.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            When you are fully nicely asleep and strongly resting peacefully without any worry, the careful specialist doctor simply slowly glides the deeply tiny lighted camera gently directly into the lovely lower opening of your cervix. To perfectly completely cleanly see every hidden dark corner safely, we very gently push a tiny, controlled bit of purely clean medical water safely into the deeply hidden womb. This soft clear water gently perfectly smoothly opens the completely flat womb precisely exactly like a slowly filling soft smooth water balloon, happily giving the exact smart doctor a crystal totally clear, massive, wonderfully beautiful view directly onto the television screen.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            If the smart expert doctor amazingly finds a tiny hidden bad polyp or some wildly sticky scary scar tissue while bravely looking proudly around your beautiful uterus, they can instantly magically surgically fix it right then and deeply there in precisely exactly the same single visit! The deeply amazing tiny smart camera tool wonderfully has hidden, tiny micro-sized surgical scissors and amazingly gentle little wire loops securely hiding inside it. Instead of sadly securely forcing you to forcefully return roughly for a completely new, powerfully hard, entirely separate surgery day, we cleanly correctly safely fully thoroughly perfectly gently remove the small deeply annoying medical problem instantly without any extra drama or pain. The extremely entire total easy process honestly takes only fifteen to absolutely fast thirty total painless minutes. It is basically a totally powerfully brilliant pure two-for-one entirely safely wonderfully smart medical deal: a completely deep incredibly bright clear lovely look and an instantly amazingly perfectly fast lovely fix perfectly gracefully combined securely strictly totally exactly properly together.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Diagnostic vs Operative Hysteroscopy Explained</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            In the medical world, doctors basically use two different important words to strictly describe exactly what they are actively doing deeply inside the lovely womb during this fast test. Understanding these two beautiful words will naturally totally help you securely feel completely bravely wonderfully powerfully in proudly strong control of your highly amazing deeply incredible amazing fiercely incredibly deeply powerfully highly fiercely completely exactly totally medical wildly heavily smoothly beautifully health journey.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            The first medical word you might hear is "Diagnostic." This simply means the doctor is looking around to clearly understand exactly what is wrong. They might check the overall size of your womb, look closely for any tiny bumps on the pink walls, or see if the entrance to your fallopian tubes is clear. They are simply acting like a detective, gathering visual information to safely plan the best next medical steps for you.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            The second important word is "Operative." This means the doctor is actually fixing the hidden problem during the exact same look inside. For example, if they find a small polyp blocking the way, they will easily remove it using the same thin camera tool right then and there. Operating immediately means you don't have to schedule a second surgery later, getting your womb ready for a healthy baby much faster. 
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">What is the Honest Recovery Like?</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            After the quick test is over, you will safely wake up resting in a very soft, comfortable recovery chair. At our comfortable <strong>IVF Center in Lajpat Nagar</strong>, our sweet nursing team will gently offer you hot tea and a small snack while your body wakes up. You might feel a tiny bit of mild cramping in your belly. This soft cramping feels almost exactly like a normal, light menstrual period starting.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            You might also notice a very small amount of light spotting or bleeding when you use the restroom. This is totally normal and purely caused by the tiny camera lightly brushing against the soft inner walls of your womb. We recommend bringing a normal sanitary pad with you to the clinic. Within just two to four hours of arriving, you will confidently walk out of our front doors feeling well. You can comfortably go home, rest on your couch, and easily resume your normal, daily work activities the very next morning without any heavy pain.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-16">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: 'Is hysteroscopy painful?', a: 'The procedure is performed under local or mild general anesthesia, making it painless and comfortable for the patient.' },
              { q: 'How long does it take?', a: 'A diagnostic hysteroscopy takes about 15–30 minutes, while operative procedures may take slightly longer.' },
              { q: 'Is hospitalization required?', a: 'No. Hysteroscopy is a day-care procedure, and you can go home within a few hours.' },
              { q: 'When can I resume normal activities?', a: 'Most women can resume daily activities within 24 hours after the procedure.' }
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
            Book Your Hysteroscopy at Pravi Global IVF Delhi
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Get accurate diagnosis and effective treatment from Delhi’s leading fertility specialists using world-class hysteroscopy technology.
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

export default HysteroscopyServicePage;
