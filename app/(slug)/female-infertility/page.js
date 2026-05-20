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
  Sparkles,
  Zap
} from 'lucide-react';

const FemaleInfertilityPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden" style={{backgroundImage: 'url("/images/ivf-treatment.jpg")', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className='w-full h-full top-0 absolute z-10 bg-gradient-to-r from-blue-600/70 to-blue-800/70' />
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="flex items-center gap-2 mb-4">
                <Heart className="w-8 h-8 text-yellow-400" />
                <span className="text-blue-100 font-semibold tracking-wide uppercase text-sm">Empowering Women's Reproductive Health</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                Female Infertility Treatment in Delhi
              </h1>
              <p className="text-lg text-blue-100 mb-8 leading-relaxed max-w-xl">
                Rediscover hope with advanced fertility care. At Pravi IVF Delhi, we specialize in diagnosing and treating complex female infertility causes through innovative medical protocols and compassionate support.
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
                      <Sparkles className="w-7 h-7 text-blue-900" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white">Holistic</div>
                      <div className="text-blue-100 font-medium">Care Approach</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-green-400 rounded-2xl flex items-center justify-center shadow-lg">
                      <Zap className="w-7 h-7 text-blue-900" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white">Expert</div>
                      <div className="text-blue-100 font-medium">Diagnosis</div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive Care for Women</h2>
            <p className="text-gray-600">Why Pravi IVF is North India\'s most trusted fertility destination</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Activity, title: 'Accurate Testing', desc: 'Precision hormonal and ovarian reserve assessments' },
              { icon: Microscope, title: 'Advanced Imaging', desc: 'High-definition 3D/4D ultrasound monitoring' },
              { icon: Users, title: 'Senior Experts', desc: 'North India\'s most renowned gynecologists' },
              { icon: Heart, title: 'Emotional Support', desc: 'Nurturing environment for your complete wellbeing' }
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Restoring Hope: Expert Female Infertility Treatment</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Female infertility is a complex medical condition that affects millions of women worldwide. At Pravi IVF, the premier **<a href="https://praviglobalivf.com">Female Infertility Treatment Centre in Delhi</a>**, we believe that every woman deserves the chance to experience motherhood. Our clinic, located in the heart of Lajpat Nagar, provides a comprehensive ecosystem for diagnosing and treating all aspects of female reproductive health.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our approach is rooted in scientific excellence and compassionate care. We understand that the journey to parenthood can be emotionally taxing, which is why we prioritize a holistic treatment model. By combining advanced diagnostic tools with personalized medical protocols, we aim to uncover the root cause of infertility and create a clear, effective pathway to pregnancy.
              </p>
            </section>

            {/* Content Section 2: Detailed Causes */}
            <section className="bg-blue-50 rounded-3xl p-8 md:p-12 border border-blue-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <Stethoscope className="text-blue-600" />
                Common Causes of Female Infertility
              </h2>
              <div className="space-y-8">
                {[
                  { title: 'Ovulatory Disorders (PCOS)', desc: 'Irregular or absent ovulation is the most common cause of infertility. Conditions like Polycystic Ovary Syndrome (PCOS) can disrupt the natural hormonal balance needed for egg release.' },
                  { title: 'Tubal Blockages', desc: 'The fallopian tubes are the pathway for fertilization. Scarring from past infections or endometriosis can block these tubes, preventing sperm and egg from meeting.' },
                  { title: 'Endometriosis', desc: 'A condition where uterine-like tissue grows outside the womb, causing inflammation, pain, and structural damage to the reproductive organs.' },
                  { title: 'Advanced Maternal Age', desc: 'Natural fertility declines with age as egg quantity and quality decrease. We provide specialized protocols for women over 35 to maximize their remaining potential.' },
                  { title: 'Uterine Issues', desc: 'Fibroids, polyps, or an abnormally shaped uterus can prevent an embryo from implanting correctly or lead to recurrent miscarriages.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6 group border-b border-blue-200/50 pb-6 last:border-0 last:pb-0">
                    <div className="w-12 h-12 bg-white rounded-xl flex-shrink-0 flex items-center justify-center shadow-sm">
                      <CheckCircle2 className="w-6 h-6 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* SEO Content 3: Treatments */}
            <section className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Personalized Treatment Pathways</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Success in fertility treatment comes from precise diagnosis and tailored intervention. At our **Fertility Clinic in Delhi**, we offer a wide range of solutions, including:
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Medical & Surgical</h3>
                  <ul className="space-y-3 text-sm text-gray-600 list-disc pl-5">
                    <li>Hormonal therapy for ovulation induction</li>
                    <li>Laparoscopic surgery for tubal repair</li>
                    <li>Hysteroscopy for uterine fibroid removal</li>
                    <li>Endometriosis management protocols</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Assisted Reproduction</h3>
                  <ul className="space-y-3 text-sm text-gray-600 list-disc pl-5">
                    <li>Intrauterine Insemination (IUI)</li>
                    <li>In Vitro Fertilization (IVF)</li>
                    <li>ICSI for fertilization support</li>
                    <li>Egg Donation and Donor Services</li>
                  </ul>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mt-10">
                Our medical director, **Dr. Monica Sachdev**, personally oversees the diagnostic phase, ensuring that every patient receives a comprehensive evaluation. We utilize high-resolution transvaginal ultrasound and advanced endocrine blood panels to build a detailed map of your reproductive health before recommending the most effective course of action.
              </p>
            </section>

            {/* Deep SEO Expert Content Section */}
            <section className="prose prose-lg max-w-none bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Restoring Reproductive Health: A Comprehensive Guide to Female Infertility</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Female infertility is a multifaceted medical challenge that requires a delicate balance of scientific precision and compassionate care. At Pravi IVF, we understand that the journey to motherhood is deeply personal and often filled with questions. Our mission is to provide you with the most advanced diagnostic tools and personalized treatment protocols available in North India, ensuring that your path to pregnancy is clear, supported, and successful.
              </p>
              
              <h3 className="text-2xl font-bold text-blue-700 mb-4">The Complex Landscape of Ovulatory Disorders</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Ovulation is the cornerstone of female fertility, yet it is often the most common point of failure. Polycystic Ovary Syndrome (PCOS) is a leading cause of infertility, affecting millions of women. At Pravi IVF, we specialize in the management of PCOS through customized hormonal protocols and lifestyle guidance. By restoring the natural hormonal balance, we can often achieve successful ovulation and natural conception. Our approach is not just about the eggs; it's about optimizing your body's overall endocrine health.
              </p>

              <h3 className="text-2xl font-bold text-blue-700 mb-4">Precision Diagnostics: The Role of 3D/4D Ultrasound</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                A thorough diagnosis is the first step toward success. Our clinic in Lajpat Nagar is equipped with high-definition 3D/4D ultrasound technology, allowing our specialists to visualize the uterine cavity and ovarian structure with unprecedented clarity. This advanced imaging allows us to identify subtle issues—such as uterine polyps, small fibroids, or congenital uterine anomalies—that might be missed by standard screening. By identifying these hurdles early, we can address them surgically or medically before you begin an IVF or IUI cycle.
              </p>

              <h3 className="text-2xl font-bold text-blue-700 mb-4">Endometriosis and Tubal Health: Navigating Structural Challenges</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Structural issues like tubal blockages or endometriosis require a specialized surgical and medical touch. Our team of senior gynecologists at Pravi IVF are experts in minimally invasive laparoscopic surgery. Whether it's clearing a blocked fallopian tube or removing endometriotic lesions, our goal is to restore the natural anatomy of your reproductive system. By improving the physical environment of the pelvis, we significantly increase the chances of both natural conception and successful assisted reproduction.
              </p>

              <h3 className="text-2xl font-bold text-blue-700 mb-4">Ovarian Reserve and the Age Factor</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                As women delay childbearing for career or personal reasons, understanding ovarian reserve has become more critical than ever. At Pravi IVF, we utilize advanced blood panels—including Anti-Müllerian Hormone (AMH) and Antral Follicle Count (AFC)—to provide you with an accurate map of your fertility potential. For women over 35, we offer specialized protocols designed to maximize the quality of remaining eggs, ensuring that every cycle is optimized for success. We believe in providing honest, data-driven advice to help you make the best decisions for your future family.
              </p>

              <h3 className="text-2xl font-bold text-blue-700 mb-4">E-E-A-T: Trusting Your Care to Renowned Specialists</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Your fertility is precious, and it should be handled by the best. Our medical team, led by Dr. Monica Sachdev, brings over 18 years of experience in treating complex female infertility cases. This wealth of knowledge allows us to look beyond the obvious symptoms and identify the underlying causes that others might overlook. Our reputation as the best female infertility treatment centre in Delhi is built on a foundation of scientific excellence, ethical practice, and thousands of successful pregnancies.
              </p>

              <h3 className="text-2xl font-bold text-blue-700 mb-4">A Holistic Ecosystem for Fertility</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                We believe that reproductive health is inextricably linked to mental and physical well-being. Our holistic model includes nutritional counseling to optimize your biological environment and psychological support to help manage the stresses of the fertility journey. By treating the "whole person," we create a more receptive environment for pregnancy, improving outcomes and ensuring that your journey is as smooth and stress-free as possible.
              </p>

              <h3 className="text-2xl font-bold text-blue-700 mb-4">Transparency and Compassion</h3>
              <p className="text-gray-700 leading-relaxed">
                At Pravi IVF, we are committed to complete transparency. From the first diagnostic test to the final treatment plan, we ensure that you are fully informed and empowered. We believe that an informed patient is a successful patient. Our goal is to provide you with the highest standard of ethical care, ensuring that you move forward on your path to motherhood with total confidence and peace of mind. Your dream is our mission, and we are honored to be a part of your story.
              </p>
            </section>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 text-white shadow-xl sticky top-32">
              <h3 className="text-xl font-bold mb-4">Book Your Consultation</h3>
              <p className="text-blue-100 text-sm mb-8">Discuss your fertility health with our senior specialists today.</p>
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
            <p className="text-gray-600">Expert guidance for women\'s fertility health</p>
          </div>
          <div className="space-y-4">
            {[
              { q: 'What is the first step in diagnosing female infertility?', a: 'The diagnostic journey typically begins with a detailed medical history review, followed by a transvaginal ultrasound to check the health of the uterus and ovaries, and blood tests to evaluate hormonal levels and ovarian reserve.' },
              { q: 'Is infertility treatment painful?', a: 'Most diagnostic tests and treatments like IUI or hormonal therapy are relatively painless. Minor surgical procedures like egg retrieval are performed under mild sedation to ensure you are comfortable and feel no pain.' },
              { q: 'How does age affect my fertility success?', a: 'Age is a primary factor in egg quality and quantity. While fertility naturally declines after 35, modern ART procedures like IVF and the use of donor eggs allow many women to achieve healthy pregnancies well into their late 30s and early 40s.' },
              { q: 'Can lifestyle changes improve my chances?', a: 'Absolutely. Maintaining a healthy weight, reducing stress, and avoiding smoking and excessive alcohol can significantly improve hormonal balance and egg quality, providing a better foundation for any medical treatment.' }
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
            Start Your Journey to Motherhood Today
          </h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            Empower yourself with the best fertility care in Delhi. Our experts are here to guide you every step of the way.
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

export default FemaleInfertilityPage;
