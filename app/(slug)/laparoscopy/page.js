import React from 'react';
import { 
  FlaskRound,
  CheckCircle2,
  Clock,
  Users,
  Award,
  Phone,
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
  Globe,
  Stethoscope,
  Video,
  Scissors
} from 'lucide-react';

const LaparoscopyPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden" style={{backgroundImage: 'url("/images/ivf-treatment.jpg")', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className='w-full h-full top-0 absolute z-10 bg-gradient-to-r from-blue-600/70 to-blue-800/70' />
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="flex items-center gap-2 mb-4">
                <Video className="w-8 h-8 text-yellow-400" />
                <span className="text-blue-100 font-semibold tracking-wide uppercase text-sm">Advanced Keyhole Fertility Surgery</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                Laparoscopy Surgery in Delhi
              </h1>
              <p className="text-lg text-blue-100 mb-8 leading-relaxed max-w-xl">
                Resolve complex fertility issues with minimally invasive laparoscopy. At Pravi IVF Delhi, we combine surgical precision with advanced endoscopy to treat endometriosis, fibroids, and tubal blockages with minimal recovery time.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Book Free Consultation
                </button>
                <a href="tel:+918009150040" className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-blue-600 transition-all flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  +91 800 915 0040
                </a>
              </div>
              <div className="flex items-center gap-6 text-sm font-medium text-blue-50">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-yellow-400" />
                  <span>Lajpat Nagar, Delhi</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-yellow-400" />
                  <span>Mon-Sat: 10 AM - 6 PM</span>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl">
                <div className="space-y-8">
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-yellow-400 rounded-2xl flex items-center justify-center shadow-lg">
                      <Scissors className="w-7 h-7 text-blue-900" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white">Minimally</div>
                      <div className="text-blue-100 font-medium">Invasive</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-green-400 rounded-2xl flex items-center justify-center shadow-lg">
                      <Activity className="w-7 h-7 text-blue-900" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white">Rapid</div>
                      <div className="text-blue-100 font-medium">Recovery</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-pink-400 rounded-2xl flex items-center justify-center shadow-lg">
                      <Baby className="w-7 h-7 text-blue-900" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white">High</div>
                      <div className="text-blue-100 font-medium">Fertility Success</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Precision Surgery for Fertility Health</h2>
            <p className="text-gray-600">Why Pravi IVF is a leader in Laparoscopic reproductive surgery</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: 'Safety Focus', desc: 'Minimal tissue trauma and reduced risk of infection' },
              { icon: Microscope, title: 'HD Visualization', desc: 'Detailed view of reproductive organs for accurate repair' },
              { icon: Users, title: 'Expert Surgeons', desc: 'Led by Delhi\'s most renowned laparoscopic specialists' },
              { icon: Heart, title: 'Patient Centric', desc: 'Comprehensive pre and post-operative support' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                  <item.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-16">
            {/* SEO Content 1: Introduction */}
            <section className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Advanced Laparoscopy: The Keyhole to Fertility</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Laparoscopy is a sophisticated surgical technique that allows doctors to examine and treat reproductive organs through tiny, "keyhole" incisions. At Pravi IVF, the premier **Laparoscopy Centre in Delhi**, we utilize this minimally invasive approach to address biological barriers that often remain invisible to standard ultrasound or blood tests.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our specialized surgical team in Lajpat Nagar combines decades of experience with world-class endoscopic technology. By minimizing tissue trauma and ensuring rapid healing, laparoscopy provides a safer and more effective alternative to traditional open surgery, allowing you to return to your fertility journey faster and with better biological outcomes.
              </p>
            </section>

            {/* Content Section 2: Detailed Process */}
            <section className="bg-blue-50 rounded-3xl p-8 md:p-12 border border-blue-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <Activity className="text-blue-600" />
                Key Conditions Treated with Laparoscopy
              </h2>
              <div className="space-y-10">
                {[
                  { step: '01', title: 'Endometriosis Management', desc: 'Laparoscopy is the gold standard for diagnosing and removing endometrial tissue that causes pain and scarring around the ovaries and tubes.' },
                  { step: '02', title: 'Fibroid Removal (Myomectomy)', desc: 'We safely remove uterine fibroids that may be preventing embryo implantation or causing pregnancy complications.' },
                  { step: '03', title: 'Ovarian Cyst Treatment', desc: 'Large or persistent cysts that interfere with ovulation can be precisely drained or removed while preserving healthy ovarian tissue.' },
                  { step: '04', title: 'Tubal Surgery', desc: 'Laparoscopy allows for the delicate repair of blocked fallopian tubes or the removal of damaged tubes (Hydrosalpinx) before IVF to improve success rates.' },
                  { step: '05', title: 'Diagnostic Investigation', desc: 'For cases of unexplained infertility, a direct visual check can uncover hidden adhesions or structural issues that other tests miss.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6 group">
                    <span className="text-4xl font-black text-blue-200 group-hover:text-blue-400 transition-colors">{item.step}</span>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* SEO Content 3: Depth & Science */}
            <section className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Minimally Invasive Surgery Matters</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Traditional "open" surgeries require large incisions that result in longer hospital stays, more pain, and significant scarring. In contrast, **Laparoscopic Surgery in Delhi** at our centre involves only 2 to 3 incisions, each no larger than a dime. This "keyhole" approach offers several critical advantages:
              </p>
              <ul className="grid md:grid-cols-2 gap-4 text-sm text-gray-600 list-none p-0">
                <li className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  Significantly reduced post-operative pain
                </li>
                <li className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  Same-day or next-day discharge
                </li>
                <li className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  Minimal risk of post-surgical adhesions
                </li>
                <li className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  Faster return to normal daily activities
                </li>
                <li className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  Superior cosmetic results with no large scars
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-10">
                Our surgical team, led by senior gynecological surgeons, utilizes high-definition 4K camera systems that provide a magnified, crystal-clear view of the pelvic anatomy. This level of detail allows for far more precise repair of delicate structures like the fallopian tubes, ensuring that your reproductive potential is maximized.
              </p>
            </section>

            {/* Deep SEO Expert Content Section */}
            <section className="prose prose-lg max-w-none bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Advanced Laparoscopy: Redefining Surgical Precision in Fertility</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Laparoscopy has fundamentally changed the landscape of reproductive surgery. At Pravi IVF, we believe that surgery should be a tool of restoration, not trauma. By utilizing advanced endoscopic techniques, we can address complex internal issues with a level of precision that was once unimaginable. Our mission is to provide you with a surgical experience that is as safe as it is effective, ensuring that your body is ideally prepared for the next steps of your fertility journey.
              </p>
              
              <h3 className="text-2xl font-bold text-blue-700 mb-4">The Mastery of Minimally Invasive Access</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                The "keyhole" approach of laparoscopy is more than just a cosmetic advantage. By using tiny incisions, we significantly reduce the body's inflammatory response to surgery. This means less internal scarring—known as adhesions—which is critical for fertility. Adhesions can often bind the fallopian tubes or ovaries, creating new barriers to conception. Our expert surgeons in Lajpat Nagar are trained in the most delicate dissection techniques, ensuring that we resolve your medical issues while preserving the integrity of your reproductive anatomy.
              </p>

              <h3 className="text-2xl font-bold text-blue-700 mb-4">Diagnostic Laparoscopy: Seeing the Invisible</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                In many cases of "unexplained infertility," the answer lies hidden within the pelvic cavity. Standard imaging like ultrasound can miss subtle endometriosis, filmy adhesions, or minor tubal issues. Diagnostic laparoscopy allows us to perform a "direct visual audit" of your reproductive system. By seeing the organs in high-definition, we can identify and treat these issues in the same procedure. This proactive approach turns "unexplained" into "resolved," clearing the path for natural conception or improving the success of future IVF cycles.
              </p>

              <h3 className="text-2xl font-bold text-blue-700 mb-4">Treating Endometriosis with Surgical Precision</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Endometriosis is a complex disease that requires a specialized surgical touch. Our surgeons at Pravi IVF specialize in the excision of endometriotic lesions, rather than simple ablation. Excision involves the complete removal of the diseased tissue, which has been shown to provide better long-term pain relief and improved fertility outcomes. By meticulously clearing the pelvis of endometriosis, we restore the natural movement of the fallopian tubes and improve the overall biological environment of the uterus.
              </p>

              <h3 className="text-2xl font-bold text-blue-700 mb-4">Laparoscopic Myomectomy: Preserving Uterine Health</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Uterine fibroids can act as a physical barrier to embryo implantation or cause complications during pregnancy. Through laparoscopic myomectomy, we can remove these fibroids through small incisions while carefully suturing the uterine wall to ensure its strength for future childbearing. This advanced procedure requires a high level of surgical skill, which our team provides. By removing the fibroids, we restore the natural shape and health of the uterus, significantly improving your chances of a healthy, full-term pregnancy.
              </p>

              <h3 className="text-2xl font-bold text-blue-700 mb-4">E-E-A-T: Trusting Delhi’s Leading Laparoscopic Surgeons</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                When it comes to surgery, there is no substitute for experience. Our surgical team at Pravi IVF brings decades of combined expertise in gynecological endoscopy. Our authority is built on thousands of successful procedures and a commitment to utilizing the latest technological advancements, such as 4K imaging and precision surgical instruments. Our reputation as the best laparoscopy centre in Delhi is a testament to our dedication to patient safety and clinical excellence.
              </p>

              <h3 className="text-2xl font-bold text-blue-700 mb-4">A Supportive Path to Recovery</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                We understand that the idea of surgery can be daunting. At Pravi IVF, we provide a supportive ecosystem that begins long before you enter the operating room. From detailed pre-operative counseling to a dedicated post-operative care team, we ensure that you are informed and comfortable at every stage. Our goal is to make your recovery as rapid and pain-free as possible, allowing you to return to your daily life and your fertility journey with renewed hope and a clear path forward.
              </p>

              <h3 className="text-2xl font-bold text-blue-700 mb-4">Your Health, Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                Choosing Pravi IVF for your laparoscopic surgery means choosing a team that refuses to settle for anything less than perfection. We combine clinical excellence with a deeply human-centered approach, ensuring that your treatment plan is tailored to your unique biological needs. Your health is our mission, and we are honored to provide the expertise and the care you need to achieve your dream of parenthood.
              </p>
            </section>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 text-white shadow-xl sticky top-32">
              <h3 className="text-xl font-bold mb-4">Consult Our Surgeons</h3>
              <p className="text-blue-100 text-sm mb-8">Schedule a session to discuss how laparoscopy can help your fertility journey.</p>
              <div className="space-y-4">
                <a href="tel:+918009150040" className="flex items-center gap-4 bg-white/10 p-4 rounded-xl hover:bg-white/20 transition-colors">
                  <Phone className="w-5 h-5 text-yellow-400" />
                  <span className="font-bold">+91 800 915 0040</span>
                </a>
                <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-4 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Request Callback
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 py-20 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Expert clarity on Laparoscopic Surgery in Delhi</p>
          </div>
          <div className="space-y-4">
            {[
              { q: 'How long is the recovery time after laparoscopy?', a: 'Most patients are able to return home the same day or the following morning. You can typically resume light daily activities within 3 to 5 days and return to full physical activity within 2 weeks.' },
              { q: 'Will I have visible scars?', a: 'The incisions are extremely small (5-10mm) and are often placed in the navel or below the bikini line, making them nearly invisible once they heal completely.' },
              { q: 'Is the procedure performed under general anesthesia?', a: 'Yes. For your safety and comfort, laparoscopy is performed while you are completely asleep under general anesthesia, ensuring you feel no pain during the surgery.' },
              { q: 'Can laparoscopy improve my IVF success rates?', a: 'Yes. By removing fibroids, polyps, or correcting tubal issues like Hydrosalpinx, laparoscopy can create a significantly healthier environment for an embryo to implant and grow.' }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-blue-200 transition-colors">
                <h3 className="font-bold text-gray-900 mb-3 flex items-start gap-3">
                  <ChevronRight className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-gray-600 ml-9 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Start Your Path to Recovery
          </h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            Take a proactive step toward resolving your health and fertility concerns with advanced laparoscopic care.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="tel:+918009150040" 
              className="bg-yellow-400 text-blue-900 px-10 py-5 rounded-full font-bold hover:bg-yellow-500 transition-all shadow-xl hover:shadow-2xl flex items-center gap-3 text-xl"
            >
              <Phone className="w-6 h-6" />
              Call +91 800 915 0040
            </a>
            <button className="bg-white text-blue-600 px-10 py-5 rounded-full font-bold hover:bg-blue-50 transition-all flex items-center gap-3 text-xl">
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
