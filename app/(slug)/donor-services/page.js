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
  Lock,
  Search
} from 'lucide-react';

const DonorServicesPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden" style={{backgroundImage: 'url("/images/ivf-treatment.jpg")', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className='w-full h-full top-0 absolute z-10 bg-gradient-to-r from-blue-600/70 to-blue-800/70' />
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="flex items-center gap-2 mb-4">
                <Shield className="w-8 h-8 text-yellow-400" />
                <span className="text-blue-100 font-semibold tracking-wide uppercase text-sm">Ethical & Transparent Donor Programs</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                Donor Services at Pravi IVF Delhi
              </h1>
              <p className="text-lg text-blue-100 mb-8 leading-relaxed max-w-xl">
                Access a safe and ethical path to parenthood with our comprehensive donor programs. At Pravi IVF Delhi, we provide strictly screened, high-quality egg, sperm, and embryo donation services with 100% confidentiality and legal compliance.
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
                      <Lock className="w-7 h-7 text-blue-900" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white">100%</div>
                      <div className="text-blue-100 font-medium">Confidentiality</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-green-400 rounded-2xl flex items-center justify-center shadow-lg">
                      <Search className="w-7 h-7 text-blue-900" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white">Strict</div>
                      <div className="text-blue-100 font-medium">Donor Screening</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-pink-400 rounded-2xl flex items-center justify-center shadow-lg">
                      <Baby className="w-7 h-7 text-blue-900" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white">High</div>
                      <div className="text-blue-100 font-medium">Matching Success</div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ethical Excellence in Donor Care</h2>
            <p className="text-gray-600">Why Pravi IVF is Delhi\'s most trusted donor service provider</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: 'Legal Compliance', desc: 'Full adherence to ICMR and ART regulatory guidelines' },
              { icon: Microscope, title: 'Genetic Testing', desc: 'Comprehensive donor screening for hereditary conditions' },
              { icon: Users, title: 'Verified Donors', desc: 'Handpicked healthy donors through a rigorous process' },
              { icon: Heart, title: 'Expert Support', desc: 'Full counseling and support for intended parents' }
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Building Families Through Donor Services in Delhi</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                When traditional fertility treatments do not yield results due to poor egg or sperm quality, donor services provide a beautiful and effective alternative. At Pravi IVF, the leading **Donor Service Centre in Delhi**, we offer a bridge to parenthood for couples and individuals through high-quality donor programs. Our mission is to provide you with the best biological foundation for a healthy pregnancy, handled with absolute medical precision and ethical integrity.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Located in Lajpat Nagar, Delhi, our clinic serves as a safe haven for intended parents. We understand the sensitivity of choosing a donor, which is why our team provides extensive support and counseling. Whether you require egg donation, sperm donation, or embryo donation, we ensure that every donor is thoroughly vetted and matches your specific requirements.
              </p>
            </section>

            {/* Content Section 2: Detailed Process */}
            <section className="bg-blue-50 rounded-3xl p-8 md:p-12 border border-blue-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <Activity className="text-blue-600" />
                Our Comprehensive Donor Programs
              </h2>
              <div className="space-y-10">
                {[
                  { step: '01', title: 'Egg Donor Program', desc: 'Designed for women with poor egg reserve, premature ovarian failure, or genetic concerns. We match you with healthy, young donors who have undergone extensive medical and psychological screening.' },
                  { step: '02', title: 'Sperm Donor Program', desc: 'Ideal for cases of severe male factor infertility or for single women. Our sperm bank partners provide strictly screened samples from healthy, verified donors.' },
                  { step: '03', title: 'Embryo Donor Program', desc: 'A path for couples where both partners face infertility challenges. We provide high-quality donor embryos from successful IVF cycles, offering an affordable and high-success option.' },
                  { step: '04', title: 'Confidential Matching', desc: 'Our team ensures 100% anonymity and confidentiality, matching donors based on your physical traits, educational background, and health profile.' }
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Strict Screening: Ensuring the Best Outcomes</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                The success of a donor cycle depends entirely on the health and quality of the donor. At our **Fertility Clinic in Delhi**, we follow the most rigorous screening protocols in North India. Every donor candidate undergoes a multi-stage evaluation process:
              </p>
              <ul className="grid md:grid-cols-2 gap-4 text-sm text-gray-600 list-none p-0">
                <li className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  Full medical history evaluation
                </li>
                <li className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  Infectious disease screening (HIV, Hepatitis)
                </li>
                <li className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  Genetic and chromosomal testing
                </li>
                <li className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  Psychological assessment
                </li>
                <li className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  Hormonal and fertility reserve checks
                </li>
                <li className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  Educational and background verification
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-10">
                By ensuring that only the healthiest candidates are accepted into our program, we provide intended parents with the highest possible chance of a successful pregnancy and a healthy baby. Our team, led by **Dr. Monica Sachdev**, provides transparent guidance throughout the matching process, helping you feel empowered in your decision.
              </p>
            </section>

            {/* Deep SEO Expert Content Section */}
            <section className="prose prose-lg max-w-none bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Choosing Your Path: A Deep Dive into Donor Services</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Donor services represent one of the most selfless and transformative areas of reproductive medicine. At Pravi IVF, we recognize that the decision to use a donor is a significant milestone on your journey to parenthood. Our goal is to provide you with the highest standard of medical care, ethical practice, and emotional support, ensuring that you move forward with absolute confidence and peace of mind.
              </p>
              
              <h3 className="text-2xl font-bold text-blue-700 mb-4">The Ethical Foundation of Our Donor Programs</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                In a field as sensitive as donor services, ethics are the foundation of everything we do. At Pravi IVF, we strictly adhere to the guidelines set forth by the Indian Council of Medical Research (ICMR) and the ART (Regulation) Act. This means that every donor in our program is compensated fairly, treated with respect, and has provided full informed consent. For intended parents, this ethical commitment ensures that your journey is legally sound and that your future child’s biological foundation is built on a foundation of integrity.
              </p>

              <h3 className="text-2xl font-bold text-blue-700 mb-4">Precision Screening: Selecting the Best Donors</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                The health of your future child is our primary concern. That's why our donor screening process is among the most rigorous in Delhi. We don't just look at basic health; we conduct deep genetic screening to identify carriers of hereditary conditions such as Thalassemia, Cystic Fibrosis, and Spinal Muscular Atrophy. By screening all 23 pairs of chromosomes, we ensure that our donors are not only healthy but also genetically compatible with your family’s needs. This proactive approach significantly reduces the risk of genetic disorders and improves the overall success rate of your treatment.
              </p>

              <h3 className="text-2xl font-bold text-blue-700 mb-4">Egg Donation: Empowering Motherhood</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                For women facing premature ovarian failure or advanced maternal age, egg donation is a beacon of hope. Our egg donors are typically young, healthy women between the ages of 21 and 28, a period when egg quality and quantity are at their peak. We meticulously match donors based on physical characteristics, educational background, and even blood type, ensuring a seamless integration into your family. Our success rates for egg donation cycles are among the highest in North India, thanks to our state-of-the-art laboratory and expert embryology team.
              </p>

              <h3 className="text-2xl font-bold text-blue-700 mb-4">Sperm and Embryo Donation: Expanding Your Options</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Sperm and embryo donation provide essential solutions for a wide range of fertility challenges. Our sperm donor partners provide strictly vetted samples that have undergone extensive infectious disease testing and quarantine periods. For couples where both partners face infertility challenges, embryo donation offers a highly cost-effective and successful pathway. By using embryos created from high-quality donor eggs and sperm, we can often achieve success for couples who have struggled with multiple failed IVF cycles.
              </p>

              <h3 className="text-2xl font-bold text-blue-700 mb-4">E-E-A-T: Trusting the Best Donor Service Centre in Delhi</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                When it comes to donor services, experience and authority matter. Our clinical team, led by Dr. Monica Sachdev, has over 18 years of experience in managing complex donor cycles. This wealth of knowledge allows us to anticipate and address the unique medical and emotional needs of intended parents. Our reputation as the best donor service centre in Delhi is built on a foundation of thousands of successful pregnancies and a commitment to providing transparent, compassionate care to every family.
              </p>

              <h3 className="text-2xl font-bold text-blue-700 mb-4">The Psychological Journey of Donor Conception</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                We understand that the transition to using a donor involves an emotional adjustment. At Pravi IVF, we provide integrated psychological support to help you navigate this journey. Our counselors are experienced in helping intended parents explore their feelings about donor conception, helping them build a strong emotional foundation for their future family. We believe that a supported parent is a successful parent, and we are here to provide the empathy and guidance you need.
              </p>

              <h3 className="text-2xl font-bold text-blue-700 mb-4">Your Future, Our Commitment</h3>
              <p className="text-gray-700 leading-relaxed">
                Choosing donor services at Pravi IVF means choosing a partner dedicated to your family's success. We combine world-class medical technology with a deeply human-centered approach, ensuring that your journey is as smooth and stress-free as possible. From your initial consultation to the moment you hold your baby, our team is with you every step of the way, providing the expertise, the technology, and the compassion you need to make your dream of parenthood a reality.
              </p>
            </section>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 text-white shadow-xl sticky top-32">
              <h3 className="text-xl font-bold mb-4">Discuss Donor Options</h3>
              <p className="text-blue-100 text-sm mb-8">Schedule a private, confidential session with our experts.</p>
              <div className="space-y-4">
                <a href="tel:+918009150040" className="flex items-center gap-4 bg-white/10 p-4 rounded-xl hover:bg-white/20 transition-colors">
                  <Phone className="w-5 h-5 text-yellow-400" />
                  <span className="font-bold">+91 800 915 0040</span>
                </a>
                <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-4 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Free Consultation
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
            <p className="text-gray-600">Expert clarity on donor programs in Delhi</p>
          </div>
          <div className="space-y-4">
            {[
              { q: 'Is the identity of the donor disclosed?', a: 'No. At Pravi IVF, all donor programs are strictly anonymous. We provide intended parents with important medical and physical traits of the donor while maintaining 100% confidentiality for both parties.' },
              { q: 'How do you ensure donor quality?', a: 'Every donor undergoes a rigorous screening process that includes infectious disease testing, genetic screening, psychological evaluation, and a thorough assessment of their own fertility health.' },
              { q: 'Who should consider using donor services?', a: 'Donor services are ideal for women with low egg reserve, men with severe sperm issues, couples with recurrent IVF failures, or individuals with known genetic conditions they wish to avoid passing on.' },
              { q: 'Is opting for a donor legally safe in India?', a: 'Yes. All donor procedures at Pravi IVF are performed in strict accordance with the ART (Regulation) Act and ICMR guidelines, ensuring full legal protection for the intended parents.' }
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
            Find the Best Path for Your Family
          </h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            Our expert team is here to provide the ethical, medical, and emotional support you need. Schedule a private consultation to discuss our donor programs today.
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

export default DonorServicesPage;
