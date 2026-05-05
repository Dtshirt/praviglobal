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
  Monitor
} from 'lucide-react';

const HysteroscopyServicePage = () => {
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
                <span className="text-blue-100 font-semibold tracking-wide uppercase text-sm">Precision Uterine Diagnostics</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                Hysteroscopy Treatment in Delhi
              </h1>
              <p className="text-lg text-blue-100 mb-8 leading-relaxed max-w-xl">
                Identify and resolve uterine issues with advanced hysteroscopy. At Pravi IVF Delhi, we use high-definition endoscopic technology to diagnose and treat conditions affecting fertility with zero incisions and rapid recovery.
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
                      <Monitor className="w-7 h-7 text-blue-900" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white">HD</div>
                      <div className="text-blue-100 font-medium">Visualization</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-green-400 rounded-2xl flex items-center justify-center shadow-lg">
                      <Activity className="w-7 h-7 text-blue-900" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white">Minimally</div>
                      <div className="text-blue-100 font-medium">Invasive</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-pink-400 rounded-2xl flex items-center justify-center shadow-lg">
                      <Clock className="w-7 h-7 text-blue-900" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white">30 Min</div>
                      <div className="text-blue-100 font-medium">Procedure</div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Excellence in Gynecological Endoscopy</h2>
            <p className="text-gray-600">Why Pravi IVF is the preferred centre for Hysteroscopy in Delhi</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Microscope, title: 'HD Endoscopy', desc: 'Crystal clear visualization of the uterine cavity' },
              { icon: Shield, title: 'Zero Incision', desc: 'Performed through natural openings with no cuts' },
              { icon: Users, title: 'Expert Surgeons', desc: 'Led by Delhi\'s most experienced fertility specialists' },
              { icon: Heart, title: 'Fast Recovery', desc: 'Day-care procedure with same-day discharge' }
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Advanced Hysteroscopy: Clear Answers for Uterine Health</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Hysteroscopy is a transformative medical procedure that allows doctors to look directly inside the uterus using a thin, lighted tube called a hysteroscope. At Pravi IVF, the leading **Hysteroscopy Centre in Delhi**, we utilize this minimally invasive technique to diagnose and treat a variety of conditions that can impact fertility, cause abnormal bleeding, or lead to recurrent miscarriages.
              </p>
              <p className="text-gray-700 leading-relaxed">
                By providing a high-definition view of the uterine cavity, hysteroscopy eliminates the guesswork associated with traditional imaging. Whether you are preparing for an IVF cycle or seeking a solution for heavy menstrual cycles, our expert team in Lajpat Nagar ensures a precise, safe, and comfortable experience.
              </p>
            </section>

            {/* Content Section 2: Detailed Process */}
            <section className="bg-blue-50 rounded-3xl p-8 md:p-12 border border-blue-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <Activity className="text-blue-600" />
                When is Hysteroscopy Recommended?
              </h2>
              <div className="space-y-10">
                {[
                  { step: '01', title: 'Diagnostic Hysteroscopy', desc: 'Used to investigate the cause of abnormal bleeding, recurrent miscarriages, or unexplained infertility by directly visualizing the uterine walls.' },
                  { step: '02', title: 'Removing Polyps & Fibroids', desc: 'Small growths inside the uterus can be safely and instantly removed through the hysteroscope without any abdominal incisions.' },
                  { step: '03', title: 'Resolving Adhesions', desc: 'Asherman’s Syndrome or uterine scarring can be surgically corrected to restore the healthy lining required for embryo implantation.' },
                  { step: '04', title: 'Septum Correction', desc: 'Congenital uterine abnormalities like a septum can be repaired to increase the chances of a successful, full-term pregnancy.' },
                  { step: '05', title: 'Pre-IVF Evaluation', desc: 'We often perform a quick check to ensure the "baby\'s home" is perfectly smooth and ready before proceeding with an embryo transfer.' }
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">A Seamless and Pain-Free Experience</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                One of the greatest benefits of modern hysteroscopy is that it is performed through the body\'s natural openings, meaning there are no surgical cuts or scars. At our **Fertility Clinic in Delhi**, we prioritize patient comfort. The procedure is typically performed under mild sedation or local anesthesia, ensuring you remain completely pain-free throughout the 15-to-30-minute process.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our medical director, **Dr. Monica Sachdev**, utilizes the latest in endoscopic instrumentation to ensure maximum precision. Because the procedure is "day-care," you can return home just a few hours after your appointment and resume your normal daily activities by the next morning. This rapid recovery, combined with the definitive answers provided by the procedure, makes hysteroscopy an invaluable tool in reproductive medicine.
              </p>
            </section>

            {/* Deep SEO Expert Content Section */}
            <section className="prose prose-lg max-w-none bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Mastering Hysteroscopy: A Window into Uterine Health</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                The uterus is the cradle of life, and ensuring its health is a primary goal of reproductive medicine. At Pravi IVF, we believe that every woman deserves absolute clarity regarding her reproductive health. Hysteroscopy is the most advanced tool we have to achieve that clarity. By providing a direct, high-definition view of the uterine environment, we can identify and resolve issues that might otherwise remain hidden, ensuring that your path to pregnancy is clear and supported by the best science has to offer.
              </p>
              
              <h3 className="text-2xl font-bold text-blue-700 mb-4">The Science of Direct Visualization</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                While ultrasound and MRI are wonderful diagnostic tools, they are essentially "interpretations" of what is happening inside the body. Hysteroscopy, on the other hand, provides direct visualization. Our clinic in Lajpat Nagar is equipped with ultra-thin, high-definition scopes that allow us to see the uterine lining in microscopic detail. This resolution allows our specialists to identify subtle abnormalities—such as small polyps, filmy adhesions, or minor inflammation (endometritis)—that can significantly impact embryo implantation but are often missed by standard imaging.
              </p>

              <h3 className="text-2xl font-bold text-blue-700 mb-4">Zero Incision, Rapid Recovery</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                One of the most remarkable aspects of hysteroscopy is that it is a "natural orifice" surgery. This means there are no incisions on your abdomen, no stitches to worry about, and zero surgical scarring. The procedure is performed through the cervix, making it a minimally invasive day-care experience. Most of our patients are able to walk out of the clinic just a few hours after the procedure and return to their normal lives the very next day. This rapid recovery makes hysteroscopy an ideal tool for busy women who want definitive answers without the downtime of major surgery.
              </p>

              <h3 className="text-2xl font-bold text-blue-700 mb-4">Addressing Asherman’s Syndrome and Uterine Scarring</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Uterine scarring, also known as Asherman’s Syndrome, can be a significant barrier to both conception and healthy pregnancy. These adhesions can bind the uterine walls together, preventing the growth of a healthy lining. Through operative hysteroscopy, our expert surgeons can precisely resolve these adhesions, restoring the natural volume and health of the uterine cavity. By using specialized microsurgical instruments, we ensure that we only address the scarred tissue, preserving the healthy underlying lining for future pregnancy.
              </p>

              <h3 className="text-2xl font-bold text-blue-700 mb-4">Correcting Congenital Anomalies: The Uterine Septum</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Some women are born with structural variations in their uterus, such as a septum—a wall of tissue that divides the cavity. While a septum doesn't typically prevent conception, it can significantly increase the risk of miscarriage or preterm labor. Hysteroscopic septum resection is a highly effective procedure that removes this barrier, restoring the uterus to its optimal shape. At Pravi IVF, we have a high success rate in these corrective surgeries, helping women achieve the healthy, full-term pregnancies they’ve always dreamed of.
              </p>

              <h3 className="text-2xl font-bold text-blue-700 mb-4">E-E-A-T: Trusting Delhi’s Best Hysteroscopy Specialists</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                When it comes to your reproductive health, you deserve the best. Our medical team, led by Dr. Monica Sachdev, brings over 18 years of experience in gynecological endoscopy. Our authority is built on thousands of successful diagnostic and operative procedures and a commitment to utilizing the most advanced technology available globally. Our reputation as the best hysteroscopy centre in Delhi is a testament to our dedication to providing ethical, transparent, and results-oriented care to every patient.
              </p>

              <h3 className="text-2xl font-bold text-blue-700 mb-4">Preparing the "Baby’s Home" for IVF</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                For our IVF patients, we often recommend a "mock" or diagnostic hysteroscopy before an embryo transfer. We call this "preparing the baby's home." By ensuring that the uterine environment is smooth, healthy, and free of any minor issues, we significantly improve the chances of a successful implantation. This proactive step is part of our commitment to "smart fertility"—using every scientific tool available to maximize your success on the first try.
              </p>

              <h3 className="text-2xl font-bold text-blue-700 mb-4">Your Partnership for Success</h3>
              <p className="text-gray-700 leading-relaxed">
                Choosing Pravi IVF for your hysteroscopy means choosing a partner dedicated to your long-term health and fertility. We combine clinical excellence with a deeply personalized touch, ensuring that you are informed, supported, and empowered throughout your journey. From your initial consultation to your post-operative follow-up, our team is with you every step of the way, providing the expertise and the care you need to achieve your dream of parenthood.
              </p>
            </section>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 text-white shadow-xl sticky top-32">
              <h3 className="text-xl font-bold mb-4">Book Your Procedure</h3>
              <p className="text-blue-100 text-sm mb-8">Consult with our senior surgeons to discuss your uterine health.</p>
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
            <p className="text-gray-600">Expert answers on Hysteroscopy in Delhi</p>
          </div>
          <div className="space-y-4">
            {[
              { q: 'Is Hysteroscopy a major surgery?', a: 'No, hysteroscopy is considered a minimally invasive day-care procedure. It is performed through natural body openings with no incisions on the abdomen.' },
              { q: 'Will I feel any pain during the procedure?', a: 'You will be under mild sedation or local anesthesia, so you will not feel any pain. Most patients report only mild cramping similar to a period afterward.' },
              { q: 'How long do I need to stay in the hospital?', a: 'Hysteroscopy is a same-day procedure. You will typically be ready to go home 2 to 4 hours after the procedure is finished.' },
              { q: 'When can I expect results from the test?', a: 'The doctor can often give you immediate visual feedback on what was seen. If a biopsy was taken, those results typically take a few days to process in the lab.' }
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
            Get the Clarity You Deserve
          </h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            Our expert diagnostic team is here to help you uncover the answers to your health concerns. Schedule your hysteroscopy consultation today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="tel:+918009150040" 
              className="bg-yellow-400 text-blue-900 px-10 py-5 rounded-full font-bold hover:bg-yellow-500 transition-all shadow-xl hover:shadow-2xl flex items-center gap-3 text-xl"
            >
              <Phone className="w-6 h-6" />
              Call Now: +91 800 915 0040
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

export default HysteroscopyServicePage;
