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
  Scale
} from 'lucide-react';

const SurrogacyServicePage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden" style={{backgroundImage: 'url("/images/ivf-treatment.jpg")', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className='w-full h-full top-0 absolute z-10 bg-gradient-to-r from-blue-600/70 to-blue-800/70' />
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="flex items-center gap-2 mb-4">
                <Scale className="w-8 h-8 text-yellow-400" />
                <span className="text-blue-100 font-semibold tracking-wide uppercase text-sm">Ethical & Legally Compliant Surrogacy</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                Surrogacy Treatment in Delhi
              </h1>
              <p className="text-lg text-blue-100 mb-8 leading-relaxed max-w-xl">
                Experience a trusted path to parenthood. At Pravi IVF Delhi, we provide ethical, transparent, and medically supervised surrogacy programs that comply with the latest ART and Surrogacy regulations in India.
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
                      <div className="text-3xl font-bold text-white">Ethical</div>
                      <div className="text-blue-100 font-medium">Compliance</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-green-400 rounded-2xl flex items-center justify-center shadow-lg">
                      <Users className="w-7 h-7 text-blue-900" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white">Verified</div>
                      <div className="text-blue-100 font-medium">Surrogates</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-pink-400 rounded-2xl flex items-center justify-center shadow-lg">
                      <Baby className="w-7 h-7 text-blue-900" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white">1000+</div>
                      <div className="text-blue-100 font-medium">Happy Families</div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Integrity and Compassion in Every Step</h2>
            <p className="text-gray-600">Why Pravi IVF is Delhi\'s most trusted surrogacy destination</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Scale, title: 'Legal Safety', desc: '100% compliance with the Surrogacy (Regulation) Act 2021' },
              { icon: Shield, title: 'Strict Screening', desc: 'Rigorous medical and psychological evaluation of surrogates' },
              { icon: Globe, title: 'Global Standards', desc: 'State-of-the-art IVF labs for embryo creation' },
              { icon: Heart, title: 'Complete Support', desc: 'End-to-end guidance from matching to birth' }
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Ethical Surrogacy: A Gift of Parenthood</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Surrogacy is a life-changing journey that offers hope to couples and individuals who are unable to carry a pregnancy to term. At Pravi IVF, the leading **Surrogacy Centre in Delhi**, we provide a safe, ethical, and medically superior environment for this delicate process. Our mission is to bridge the gap between your dream of a family and the biological challenges you may be facing, handled with the utmost respect for all parties involved.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Located in Lajpat Nagar, Delhi, our clinic operates in strict accordance with the latest Indian regulations, including the Surrogacy (Regulation) Act 2021. We believe in complete transparency, providing you with clear legal and medical guidance from your very first consultation to the final delivery of your baby.
              </p>
            </section>

            {/* Content Section 2: Detailed Process */}
            <section className="bg-blue-50 rounded-3xl p-8 md:p-12 border border-blue-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <Activity className="text-blue-600" />
                The Surrogacy Journey Explained
              </h2>
              <div className="space-y-10">
                {[
                  { step: '01', title: 'Consultation & Eligibility', desc: 'We begin by reviewing your medical history to ensure surrogacy is the right path and that all legal eligibility criteria are met.' },
                  { step: '02', title: 'Legal & Ethical Guidance', desc: 'Our legal experts walk you through the necessary agreements, ensuring 100% compliance with current Indian surrogacy laws.' },
                  { step: '03', title: 'Surrogate Matching', desc: 'We help you match with an altruistic surrogate who has undergone rigorous medical, psychological, and background screening.' },
                  { step: '04', title: 'IVF & Embryo Transfer', desc: 'Embryos are created in our advanced lab using the intended parents\' gametes and are carefully transferred to the surrogate.' },
                  { step: '05', title: 'Prenatal Care & Birth', desc: 'Our team provides comprehensive medical monitoring for the surrogate throughout the pregnancy, leading to a safe delivery.' }
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Who Should Consider Surrogacy?</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Surrogacy is a vital option for those who face significant medical barriers to pregnancy. At our **Fertility Clinic in Delhi**, we often recommend surrogacy for:
              </p>
              <ul className="grid md:grid-cols-2 gap-4 text-sm text-gray-600 list-none p-0">
                <li className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  Congenital absence of the uterus
                </li>
                <li className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  Recurrent pregnancy losses
                </li>
                <li className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  Multiple failed IVF cycles
                </li>
                <li className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  Severe uterine scarring (Asherman’s)
                </li>
                <li className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  Medical conditions making pregnancy unsafe
                </li>
                <li className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  Uterine abnormalities or fibroids
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-10">
                The success of a surrogacy program relies on the intersection of legal integrity and medical excellence. Our medical director, **Dr. Monica Sachdev**, oversees every aspect of the embryo creation and transfer process, ensuring that only the healthiest embryos are used. This commitment to quality, combined with our compassionate handling of the surrogate, results in some of the highest success rates in the country.
              </p>
            </section>

            {/* Deep SEO Expert Content Section */}
            <section className="prose prose-lg max-w-none bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">A Journey of Hope: Navigating Surrogacy with Integrity</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Surrogacy is a profound act of compassion and science, offering a path to parenthood when all other avenues have been exhausted. At Pravi IVF, we understand that for many intended parents, the surrogacy journey is the culmination of years of emotional and physical struggle. Our mission is to provide you with a safe, ethical, and medically superior environment, ensuring that your dream of building a family is supported by the highest standards of care and legal integrity.
              </p>
              
              <h3 className="text-2xl font-bold text-blue-700 mb-4">The Ethical Foundation: Altruistic Surrogacy in India</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                The landscape of surrogacy in India has undergone significant transformation with the introduction of the Surrogacy (Regulation) Act 2021. Today, surrogacy is governed by strict ethical and legal frameworks that prioritize the well-being of the child, the surrogate mother, and the intended parents. At Pravi IVF, we are proud to operate a program that is 100% compliant with these regulations. We facilitate altruistic surrogacy, where the surrogate mother is a woman driven by a genuine desire to help another family. This ethical foundation ensures that every journey is built on a foundation of mutual respect and legal safety.
              </p>

              <h3 className="text-2xl font-bold text-blue-700 mb-4">Strict Screening: Ensuring a Healthy Foundation</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                The health of the surrogate mother and the future baby is our primary concern. Our screening process for surrogates is among the most rigorous in North India. Every surrogate candidate undergoes a multi-stage evaluation that includes comprehensive medical testing, infectious disease screening, and deep psychological assessment. We only match intended parents with surrogates who have a proven track record of healthy pregnancies and who possess the physical and emotional strength required for this incredible journey. This meticulous approach is what allows us to maintain our high success rates and ensure the health of every new family member.
              </p>

              <h3 className="text-2xl font-bold text-blue-700 mb-4">The Science of Success: Embryo Creation and Transfer</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                In gestational surrogacy, the surrogate mother is not genetically related to the child. The embryos are created in our state-of-the-art laboratory in Lajpat Nagar using the intended parents' or donor's gametes. Our embryology team utilizes the most advanced techniques, including Blastocyst Culture and Genetic Screening (PGS/PGD), to ensure that only the healthiest, most viable embryos are selected for transfer. By optimizing every scientific detail, we provide the surrogate with the best possible biological foundation for a healthy, successful pregnancy.
              </p>

              <h3 className="text-2xl font-bold text-blue-700 mb-4">Comprehensive Prenatal Care and Support</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                The surrogacy journey doesn't end with a successful embryo transfer; it's a nine-month commitment. At Pravi IVF, we provide comprehensive prenatal care for the surrogate mother, including regular medical check-ups, nutritional guidance, and psychological support. We believe that a happy, healthy surrogate leads to a happy, healthy baby. Our team ensures that intended parents are kept informed and involved at every milestone, fostering a bond of trust and transparency that lasts from the first consultation to the moment they hold their baby.
              </p>

              <h3 className="text-2xl font-bold text-blue-700 mb-4">E-E-A-T: Trusting Delhi’s Best Surrogacy Specialists</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                When it comes to surrogacy, experience and authority are paramount. Our medical team, led by Dr. Monica Sachdev, has over 18 years of experience in managing complex reproductive journeys. Our authority is built on thousands of successful pregnancies and a reputation for absolute ethical integrity. We don't just provide medical care; we provide a complete ecosystem of legal, medical, and emotional support, ensuring that your path to parenthood is as smooth and stress-free as possible.
              </p>

              <h3 className="text-2xl font-bold text-blue-700 mb-4">The Legal Shield: Protecting Your Future</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Navigating the legal aspects of surrogacy can be complex. At Pravi IVF, we have a dedicated legal team that specializes in Indian reproductive laws. We handle all the necessary agreements and documentation, ensuring that your parental rights are protected from day one. This legal shield provides intended parents with total peace of mind, allowing them to focus on what matters most: the arrival of their child.
              </p>

              <h3 className="text-2xl font-bold text-blue-700 mb-4">Your Future, Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                Choosing surrogacy at Pravi IVF means choosing a team that is as invested in your success as you are. We combine world-class medical technology with a deeply human-centered approach, ensuring that your journey is defined by compassion, respect, and clinical excellence. From your initial eligibility check to the safe delivery of your baby, we are with you every step of the way. Your family's future is our driving mission, and we are honored to be a part of your story.
              </p>
            </section>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 text-white shadow-xl sticky top-32">
              <h3 className="text-xl font-bold mb-4">Start Your Program</h3>
              <p className="text-blue-100 text-sm mb-8">Schedule a private session with our senior surrogacy consultants.</p>
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
            <p className="text-gray-600">Expert clarity on Surrogacy in India</p>
          </div>
          <div className="space-y-4">
            {[
              { q: 'Is surrogacy legal in India?', a: 'Yes, surrogacy is legal in India under the Surrogacy (Regulation) Act 2021. It allows for "altruistic" surrogacy for eligible Indian couples who have a medical necessity.' },
              { q: 'What is altruistic surrogacy?', a: 'Altruistic surrogacy means the surrogate mother does not receive financial compensation beyond the coverage of medical expenses and insurance during the pregnancy.' },
              { q: 'How do you screen surrogate mothers?', a: 'Surrogates undergo extensive medical testing, psychological evaluation, and background checks. They must be healthy women between 25-35 years old who have already had at least one healthy child of their own.' },
              { q: 'Is the surrogate genetically related to the child?', a: 'In gestational surrogacy (the type we perform), the surrogate is NOT genetically related to the child. The embryo is created using the intended parents\' or donor gametes.' }
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
            Your Dream of a Family is Possible
          </h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            Our expert team is here to provide the medical, legal, and emotional support you need. Schedule a private consultation to discuss our surrogacy programs today.
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

export default SurrogacyServicePage;
