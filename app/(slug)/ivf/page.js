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
  Dna
} from 'lucide-react';

const IVFServicePage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden" style={{backgroundImage: 'url("/images/ivf-treatment.jpg")', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className='w-full h-full top-0 absolute z-10 bg-gradient-to-r from-blue-600/70 to-blue-800/70' />
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="flex items-center gap-2 mb-4">
                <Award className="w-8 h-8 text-yellow-400" />
                <span className="text-blue-100 font-semibold tracking-wide uppercase text-sm">Best IVF Centre in Delhi</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                IVF Treatment at Pravi Global IVF Delhi
              </h1>
              <p className="text-lg text-blue-100 mb-8 leading-relaxed max-w-xl">
                Experience world-class fertility care at the most trusted test tube baby centre in Delhi. Our expert team, led by Dr. Monica Sachdev and Dr. Rit Shukla, combines 18+ years of experience with state-of-the-art technology to help you achieve your dream of parenthood.
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
                      <Star className="w-7 h-7 text-blue-900" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white">18+</div>
                      <div className="text-blue-100 font-medium">Years Excellence</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-green-400 rounded-2xl flex items-center justify-center shadow-lg">
                      <TrendingUp className="w-7 h-7 text-blue-900" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white">5000+</div>
                      <div className="text-blue-100 font-medium">Successful Procedures</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-pink-400 rounded-2xl flex items-center justify-center shadow-lg">
                      <Baby className="w-7 h-7 text-blue-900" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white">High</div>
                      <div className="text-blue-100 font-medium">Success Rates</div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Pravi Global IVF Delhi?</h2>
            <p className="text-gray-600">The premier destination for fertility treatments in North India</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, title: 'Expert Team', desc: 'Led by North India\'s most renowned fertility specialists' },
              { icon: Microscope, title: 'Advanced Lab', desc: 'ISO certified clean-room embryology laboratory' },
              { icon: Globe, title: 'Global Tech', desc: 'Utilizing international protocols for maximum success' },
              { icon: Heart, title: 'Compassion', desc: 'Holistic support through your emotional journey' }
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">World-Class IVF Treatment in Delhi</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                In Vitro Fertilization (IVF) is not just a medical procedure; it is a ray of hope for millions of couples worldwide. At Pravi Global IVF, the recognized **Best IVF Centre in Delhi**, we understand the emotional and physical complexities of the fertility journey. Our comprehensive IVF protocols are designed to address a wide range of reproductive challenges, providing a safe and effective pathway to parenthood.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our clinic, located in Lajpat Nagar, Delhi, stands at the forefront of reproductive medicine. We combine cutting-edge scientific research with a deeply personalized approach to patient care. Whether you are dealing with tubal issues, endometriosis, or unexplained infertility, our team utilizes the most advanced diagnostic tools to create a treatment plan tailored specifically to your biological profile.
              </p>
            </section>

            {/* Content Section 2: Detailed Process */}
            <section className="bg-blue-50 rounded-3xl p-8 md:p-12 border border-blue-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <Activity className="text-blue-600" />
                The Comprehensive IVF Journey
              </h2>
              <div className="space-y-10">
                {[
                  { step: '01', title: 'Ovarian Stimulation', desc: 'The process begins with personalized hormonal medications to encourage the growth of multiple healthy eggs, monitored via ultrasound and blood tests.' },
                  { step: '02', title: 'Egg Retrieval', desc: 'A quick, painless 15-minute procedure performed under mild sedation to safely collect mature eggs from the ovaries.' },
                  { step: '03', title: 'Laboratory Fertilization', desc: 'Retrieved eggs are combined with processed sperm in our high-tech incubator or through ICSI to create embryos.' },
                  { step: '04', title: 'Embryo Culture', desc: 'Our embryologists monitor the developing embryos for 3-5 days, selecting only the strongest blastocysts for transfer.' },
                  { step: '05', title: 'Embryo Transfer', desc: 'A gentle, non-surgical procedure where the selected embryo is placed directly into the uterus to initiate pregnancy.' }
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Lab Quality is the Key to IVF Success</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                The success of an IVF cycle is highly dependent on the environment in which the embryos are cultured. At Pravi Global IVF, we take immense pride in our state-of-the-art embryology laboratory. Our lab features medical-grade air filtration (HEPA), precise temperature and CO2 controls, and the latest imaging technology to ensure that embryos develop in a setting that mimics the human body as closely as possible.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Under the scientific direction of **Dr. Rit Shukla**, our lab has achieved exceptional success rates even in complex cases. We utilize advanced techniques such as Blastocyst Culture, Laser-Assisted Hatching, and PGT (Preimplantation Genetic Testing) to maximize the chances of a healthy live birth. This commitment to scientific excellence is why patients from across the globe choose us as their preferred **Test Tube Baby Centre in Delhi**.
              </p>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Personalized Protocols for Better Outcomes</h3>
              <p className="text-gray-700 leading-relaxed">
                We believe that every patient is unique. There is no one-size-fits-all approach to fertility. Our medical director, **Dr. Monica Sachdev**, personally reviews each case to determine the most effective stimulation protocol. By adjusting dosages and timing based on real-time physiological responses, we minimize the risk of OHSS and optimize the quality of eggs retrieved, leading to better embryo development and higher implantation rates.
              </p>
            </section>

            {/* Deep SEO Expert Content Section */}
            <section className="prose prose-lg max-w-none bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Pioneering Parenthood: The Evolution of IVF in Delhi</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                In Vitro Fertilization (IVF) has transformed from a scientific marvel into a mainstream medical solution that has brought joy to millions of families. At Pravi IVF, we don't just follow the history of IVF; we are actively writing its next chapter. Our clinic in Lajpat Nagar, Delhi, serves as a beacon of hope for those who have faced the silent struggle of infertility. By combining the most advanced embryological techniques with a deeply human-centered approach, we ensure that your journey to parenthood is supported by both world-class science and unwavering compassion.
              </p>
              
              <h3 className="text-2xl font-bold text-blue-700 mb-4">The Science of Success: Beyond the Laboratory</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                What makes an IVF cycle successful? It is rarely a single factor, but rather a symphony of perfectly executed details. From the initial ovarian stimulation protocols, which are customized to your unique hormonal profile, to the precise moment of egg retrieval, every step is critical. At Pravi IVF, we utilize the highest medical-grade air filtration systems in our laboratories, creating a "clean-room" environment that mimics the human body. This stability allows embryos to develop in an environment free from external pollutants, significantly increasing their chances of successful implantation.
              </p>

              <h3 className="text-2xl font-bold text-blue-700 mb-4">E-E-A-T: Trusting the Experts at Pravi IVF</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                When choosing a fertility clinic, experience and authority are paramount. Our medical directors, Dr. Monica Sachdev and Dr. Rit Shukla, bring a combined experience of over 18 years in reproductive medicine. This expertise is not just reflected in our high success rates, but in our ability to handle complex cases that other clinics might find challenging. We specialize in recurrent IVF failure, advanced maternal age, and severe male factor infertility. Our authority in the field is built on a foundation of continuous research, ethical practice, and a commitment to global medical standards.
              </p>

              <h3 className="text-2xl font-bold text-blue-700 mb-4">Blastocyst Culture: Giving Embryos Their Best Start</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                One of the key technological advantages we offer is Blastocyst Culture. Instead of transferring embryos back to the uterus on day 3, we allow them to grow until day 5 or 6 in our high-tech incubators. Only the strongest, most viable embryos reach the blastocyst stage. This natural "selection process" allows us to transfer fewer embryos while achieving higher pregnancy rates, significantly reducing the risk of multiple births and ensuring a safer pregnancy for the mother.
              </p>

              <h3 className="text-2xl font-bold text-blue-700 mb-4">Personalized Care in a Global Hub</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Delhi has become a global destination for fertility treatment, and Pravi IVF is at the heart of this excellence. However, we believe that being a "global hub" shouldn't mean losing the personal touch. Every patient at our clinic receives a dedicated care coordinator who guides them through every appointment, medication schedule, and emotional milestone. We understand that you are more than just a medical file; you are a family in the making, and you deserve to be treated with the utmost respect and empathy.
              </p>

              <h3 className="text-2xl font-bold text-blue-700 mb-4">The Ethical Commitment</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                In a field as sensitive as reproductive medicine, ethics are non-negotiable. At Pravi IVF, we pride ourselves on complete financial and medical transparency. We provide clear, itemized costs from the very first consultation, ensuring there are no hidden surprises. We also adhere to the strictest guidelines regarding donor programs and genetic testing, ensuring that your journey is as legally and ethically sound as it is medically advanced.
              </p>

              <h3 className="text-2xl font-bold text-blue-700 mb-4">A Holistic Path to Fertility</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                We believe that fertility is a reflection of overall well-being. That's why our IVF protocols often include guidance on nutrition, stress management, and lifestyle adjustments. By preparing the body and mind for pregnancy, we create a more receptive environment for the embryo. This holistic approach, combined with our technical mastery, is what sets us apart as the best IVF center in Delhi.
              </p>

              <h3 className="text-2xl font-bold text-blue-700 mb-4">Your Dream, Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                The path to parenthood may have obstacles, but you don't have to walk it alone. At Pravi IVF, your dream of holding your own child is our driving mission. We invite you to experience the difference that expert care, advanced technology, and genuine compassion can make. Whether you are just starting to explore your options or have been on this road for a long time, we are here to provide the answers and the results you've been looking for.
              </p>
            </section>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Quick Contact Card */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 text-white shadow-xl sticky top-32">
              <h3 className="text-xl font-bold mb-4">Book Your Appointment</h3>
              <p className="text-blue-100 text-sm mb-8">Consult with the best IVF specialists in Delhi today.</p>
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
              <div className="mt-8 pt-8 border-t border-white/10 space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <span className="text-xs font-medium">100% Confidential</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <span className="text-xs font-medium">No Hidden Costs</span>
                </div>
              </div>
            </div>

            {/* Features Card */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-6 underline decoration-blue-500 decoration-4 underline-offset-8">Key Advantages</h3>
              <ul className="space-y-6">
                {[
                  { title: 'Success Rate', val: '75%', color: 'text-green-600' },
                  { title: 'Global Patients', val: '500+', color: 'text-blue-600' },
                  { title: 'Experience', val: '18+ Yrs', color: 'text-purple-600' },
                  { title: 'ICSI Success', val: '5000+', color: 'text-pink-600' }
                ].map((item, idx) => (
                  <li key={idx} className="flex justify-between items-center border-b border-gray-50 pb-4 last:border-0 last:pb-0">
                    <span className="text-sm text-gray-500 font-medium">{item.title}</span>
                    <span className={`font-bold ${item.color}`}>{item.val}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 py-20 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Expert answers to common queries about IVF treatment in Delhi</p>
          </div>
          <div className="space-y-4">
            {[
              { q: 'Is the IVF treatment process painful?', a: 'Modern IVF procedures are designed to be as comfortable as possible. Egg retrieval is performed under mild sedation, meaning you will not feel any pain during the procedure. Most patients report only mild cramping similar to a menstrual period afterward.' },
              { q: 'What is the success rate of IVF at Pravi Global IVF?', a: 'Our success rates are among the highest in North India, averaging between 65% to 75% for patients under 35. Factors such as maternal age, egg quality, and lifestyle significantly influence individual outcomes.' },
              { q: 'How long does one IVF cycle take?', a: 'A complete IVF cycle, from the start of stimulation to embryo transfer, typically takes about 4 to 6 weeks. This includes roughly 10-12 days of stimulation and 3-5 days of embryo culture in our laboratory.' },
              { q: 'Are test tube babies healthy?', a: 'Absolutely. Thousands of studies conducted globally have confirmed that babies conceived through IVF/ICSI are just as healthy as naturally conceived children. They possess the same physical and cognitive developmental milestones.' }
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
            Ready to Start Your Parenthood Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            Take the first step toward realizing your dream of having a child. Schedule a free consultation with Delhi\'s leading IVF experts today.
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

export default IVFServicePage;