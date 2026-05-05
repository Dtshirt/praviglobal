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
  Syringe
} from 'lucide-react';

const IUIServicePage = () => {
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
                <span className="text-blue-100 font-semibold tracking-wide uppercase text-sm">Affordable Fertility Solutions</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                IUI Treatment at Pravi IVF Delhi
              </h1>
              <p className="text-lg text-blue-100 mb-8 leading-relaxed max-w-xl">
                Start your parenthood journey with IUI — a safe, minimally invasive, and affordable fertility procedure. At Pravi IVF Delhi, we combine expert ovulation tracking with advanced sperm washing techniques to maximize your chances of natural conception.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Book Free Consultation
                </button>
                <a href="tel:+918009150040" className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-all flex items-center gap-2">
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
                      <div className="text-3xl font-bold text-white">Safe</div>
                      <div className="text-blue-100 font-medium">Non-Surgical</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-green-400 rounded-2xl flex items-center justify-center shadow-lg">
                      <TrendingUp className="w-7 h-7 text-blue-900" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white">High</div>
                      <div className="text-blue-100 font-medium">Success Rate</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-pink-400 rounded-2xl flex items-center justify-center shadow-lg">
                      <Syringe className="w-7 h-7 text-blue-900" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white">Pain-Free</div>
                      <div className="text-blue-100 font-medium">Quick Procedure</div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us for IUI in Delhi?</h2>
            <p className="text-gray-600">Specialized care for couples starting their fertility path</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Microscope, title: 'Andrology Lab', desc: 'Advanced sperm processing for maximum concentration' },
              { icon: Activity, title: 'Precision Timing', desc: 'Expert follicular monitoring for perfect synchronization' },
              { icon: Shield, title: 'Safety First', desc: 'Minimally invasive with zero recovery time' },
              { icon: Heart, title: 'Patient Centric', desc: 'Transparent costs and personalized guidance' }
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding IUI: A Simple Path to Parenthood</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Intrauterine Insemination (IUI), commonly known as artificial insemination, is a fertility treatment that involves placing processed sperm directly inside the uterus at the time of ovulation. At Pravi IVF, the leading **IUI Centre in Delhi**, we recommend this procedure as a first line of treatment for many couples facing unexplained infertility or mild male factor issues.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The primary goal of IUI is to increase the number of healthy sperm that reach the fallopian tubes, thereby increasing the chance of fertilization. Unlike more complex treatments like IVF, IUI works in harmony with your body’s natural processes, providing just the right amount of medical assistance to overcome minor biological hurdles.
              </p>
            </section>

            {/* Content Section 2: Detailed Process */}
            <section className="bg-blue-50 rounded-3xl p-8 md:p-12 border border-blue-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <Activity className="text-blue-600" />
                The IUI Treatment Process
              </h2>
              <div className="space-y-10">
                {[
                  { step: '01', title: 'Ovulation Monitoring', desc: 'We use transvaginal ultrasound (follicular monitoring) to track the growth of your eggs and determine the perfect window for insemination.' },
                  { step: '02', title: 'Triggering Ovulation', desc: 'Once the follicles are mature, a small hormone injection is given to trigger the release of eggs within 24-36 hours.' },
                  { step: '03', title: 'Sperm Preparation', desc: 'The partner\'s sperm is processed in our andrology lab to separate the highly mobile, healthy sperm from dead cells and seminal fluid.' },
                  { step: '04', title: 'Insemination Procedure', desc: 'Using a thin, flexible catheter, the concentrated sperm is gently placed into the uterus. The procedure is non-surgical and takes only minutes.' },
                  { step: '05', title: 'Two-Week Wait', desc: 'After the procedure, we provide support and follow-up guidance during the period before a pregnancy test can be taken.' }
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Who Should Consider IUI?</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                While IUI is a versatile treatment, it is most effective for specific fertility challenges. At our **Fertility Clinic in Lajpat Nagar**, we often suggest IUI for couples dealing with:
              </p>
              <ul className="grid md:grid-cols-2 gap-4 text-sm text-gray-600 list-none p-0">
                <li className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  Unexplained infertility
                </li>
                <li className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  Mild male factor infertility
                </li>
                <li className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  Cervical mucus issues
                </li>
                <li className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  Semen allergy (rare)
                </li>
                <li className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  Ejaculatory dysfunction
                </li>
                <li className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  PCOS related ovulation issues
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-10">
                The success of IUI depends heavily on the mother having at least one healthy, open fallopian tube. Our diagnostic team performs thorough checks, including HSG (Hysterosalpingography), to ensure that you are an ideal candidate for the procedure, maximizing your chance of success on the first try.
              </p>
            </section>

            {/* Deep SEO Expert Content Section */}
            <section className="prose prose-lg max-w-none bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Mastering IUI: A Natural Gateway to Parenthood</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Intrauterine Insemination (IUI) is often the first significant step for many couples on their journey toward parenthood. At Pravi IVF, we treat IUI not just as a medical procedure, but as a carefully choreographed synchronization of nature and science. By timing the insemination perfectly with a woman's natural cycle and ensuring the sperm is at its most potent, we significantly enhance the probability of conception without the need for more invasive interventions.
              </p>
              
              <h3 className="text-2xl font-bold text-blue-700 mb-4">The Importance of Follicular Monitoring</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                The success of IUI is deeply rooted in timing. Our specialists at Pravi IVF utilize advanced transvaginal ultrasound monitoring to track the growth of ovarian follicles in real-time. This allowing us to identify the exact moment of peak fertility. By monitoring the thickness of the uterine lining alongside follicle size, we ensure that the internal environment is ideally prepared for the arrival of sperm. This precision eliminates the guesswork that often leads to natural conception failure.
              </p>

              <h3 className="text-2xl font-bold text-blue-700 mb-4">Advanced Sperm Preparation Techniques</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                A critical component of a successful IUI cycle is the "washing" and preparation of the sperm. In our state-of-the-art andrology lab, we utilize density gradient centrifugation and swim-up techniques to isolate the most active, high-quality sperm. This process removes seminal fluid, dead cells, and debris that can cause uterine cramping and irritation. The resulting concentrated sample contains a high density of mobile sperm, which are then placed directly where they need to be, bypassing the cervical barrier.
              </p>

              <h3 className="text-2xl font-bold text-blue-700 mb-4">Overcoming Cervical and Mild Male Factors</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                IUI is particularly effective for couples where the woman has "hostile" cervical mucus or where the partner has a mildly low sperm count or motility. For many, the cervix can act as a gatekeeper that prevents even healthy sperm from reaching the uterus. IUI effectively "unlocks" this gate, providing a clear path for the sperm to reach the fallopian tubes. This simple bypass can often be all that is needed to achieve a successful pregnancy in cases that have previously been labeled as "unexplained infertility."
              </p>

              <h3 className="text-2xl font-bold text-blue-700 mb-4">Minimal Intervention, Maximum Support</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                One of the primary benefits of IUI is that it is a non-surgical, relatively pain-free procedure that can be performed in a matter of minutes. At Pravi IVF, we prioritize your comfort, ensuring that the experience is as stress-free as possible. We find that a relaxed patient often responds better to treatment. Our clinical team provides a supportive environment, answering all your questions and guiding you through the "two-week wait" with compassion and professional expertise.
              </p>

              <h3 className="text-2xl font-bold text-blue-700 mb-4">When to Move from IUI to IVF</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                While IUI is a fantastic first step, we also believe in honest, evidence-based guidance. If a couple does not achieve success within 3 to 6 cycles of IUI, our specialists, led by Dr. Monica Sachdev, will conduct a thorough review. We believe in "smart fertility"—knowing when to persevere and when to transition to more advanced options like IVF to ensure you don't waste precious time or emotional energy. This honest approach is why we are trusted as a leading fertility center in Lajpat Nagar.
              </p>

              <h3 className="text-2xl font-bold text-blue-700 mb-4">Affordability and Accessibility</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                We understand that the cost of fertility treatment can be a significant concern for many families. IUI offers a highly cost-effective alternative to more complex procedures. By providing high-quality IUI services with transparent pricing, we ensure that expert fertility care is accessible to a wider range of patients. We believe that everyone deserves the chance to start a family, regardless of their budget.
              </p>

              <h3 className="text-2xl font-bold text-blue-700 mb-4">Your Partnership for Success</h3>
              <p className="text-gray-700 leading-relaxed">
                Choosing Pravi IVF for your IUI treatment means choosing a partner dedicated to your success. We combine clinical excellence with a deeply personalized touch, ensuring that your treatment plan is tailored to your unique biological needs. From your initial consultation to your positive pregnancy test, our team is with you every step of the way, providing the expertise and support you need to make your dream of parenthood a reality.
              </p>
            </section>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Quick Contact Card */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 text-white shadow-xl sticky top-32">
              <h3 className="text-xl font-bold mb-4">Consult Our Experts</h3>
              <p className="text-blue-100 text-sm mb-8">Discuss if IUI is the right step for your family.</p>
              <div className="space-y-4">
                <a href="tel:+918009150040" className="flex items-center gap-4 bg-white/10 p-4 rounded-xl hover:bg-white/20 transition-colors">
                  <Phone className="w-5 h-5 text-yellow-400" />
                  <span className="font-bold">+91 800 915 0040</span>
                </a>
                <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-4 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Request Call
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Common Questions About IUI</h2>
            <p className="text-gray-600">Clear answers from our fertility specialists</p>
          </div>
          <div className="space-y-4">
            {[
              { q: 'Is IUI painful?', a: 'IUI is generally a painless procedure. Most women describe it as feeling very similar to a routine pap smear. There might be some mild cramping during or immediately after the procedure, but it resolves quickly.' },
              { q: 'How many times can IUI be attempted?', a: 'Most doctors recommend attempting IUI for 3 to 6 cycles. If pregnancy is not achieved within this timeframe, advanced options like IVF may be discussed to improve the chances of success.' },
              { q: 'What is the success rate of IUI?', a: 'The success rate of IUI averages between 15% to 20% per cycle. Factors such as the woman\'s age and the quality of the sperm significantly impact the outcome.' },
              { q: 'Do I need bed rest after IUI?', a: 'No, bed rest is not required after IUI. You will be asked to rest at the clinic for about 20-30 minutes, after which you can resume your normal daily activities.' }
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
            Begin Your Parenthood Journey Today
          </h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            Take an affordable first step towards your dream of having a baby. Schedule your IUI consultation with our experts in Delhi.
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
              Free Online Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IUIServicePage;
