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

const ICSIServicePage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden" style={{backgroundImage: 'url("/images/ivf-treatment.jpg")', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className='w-full h-full top-0 absolute z-10 bg-gradient-to-r from-blue-600/70 to-blue-800/70' />
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="flex items-center gap-2 mb-4">
                <Dna className="w-8 h-8 text-yellow-400" />
                <span className="text-blue-100 font-semibold tracking-wide uppercase text-sm">Advanced Embryology Solutions</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                ICSI Treatment at Pravi IVF Delhi
              </h1>
              <p className="text-lg text-blue-100 mb-8 leading-relaxed max-w-xl">
                Overcome severe male infertility with ICSI — a high-precision fertility technique that ensures fertilization even with minimal sperm. Our expert embryologists at Pravi IVF Delhi have successfully performed over 5000+ ICSI procedures with world-class success rates.
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
                      <div className="text-3xl font-bold text-white">5000+</div>
                      <div className="text-blue-100 font-medium">Successful ICSI</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-green-400 rounded-2xl flex items-center justify-center shadow-lg">
                      <Microscope className="w-7 h-7 text-blue-900" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white">Precision</div>
                      <div className="text-blue-100 font-medium">Micromanipulation</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-pink-400 rounded-2xl flex items-center justify-center shadow-lg">
                      <Baby className="w-7 h-7 text-blue-900" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white">High</div>
                      <div className="text-blue-100 font-medium">Fertilization Rate</div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Pravi IVF is the Best ICSI Centre in Delhi</h2>
            <p className="text-gray-600">Unparalleled expertise in assisted reproductive technologies</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Microscope, title: 'High-End Lab', desc: 'Equipped with the latest Narishige micromanipulators' },
              { icon: Users, title: 'Expert Team', desc: 'Led by North India\'s most experienced embryologists' },
              { icon: Shield, title: 'Quality Control', desc: 'Rigorous monitoring of embryo culture conditions' },
              { icon: Heart, title: 'Success Focus', desc: 'Personalized selection of the best individual sperm' }
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">ICSI Treatment: Turning Obstacles into Parenthood</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Intracytoplasmic Sperm Injection (ICSI) is a specialized form of IVF that has revolutionized the treatment of male infertility. Unlike conventional IVF, where fertilization happens naturally in a dish, ICSI involves the direct injection of a single, high-quality sperm into a mature egg. At Pravi IVF, we utilize this high-precision technique to overcome challenges such as low sperm count, poor motility, or fertilization failures in previous IVF cycles.
              </p>
              <p className="text-gray-700 leading-relaxed">
                By bypassing the natural barriers to fertilization, ICSI significantly increases the chances of creating healthy embryos. Our state-of-the-art laboratory in Lajpat Nagar, Delhi, is designed to provide the perfect environment for this delicate procedure, ensuring that every step is handled with the utmost scientific rigour and care.
              </p>
            </section>

            {/* Content Section 2: Detailed Process */}
            <section className="bg-blue-50 rounded-3xl p-8 md:p-12 border border-blue-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <Activity className="text-blue-600" />
                The ICSI Procedure Explained
              </h2>
              <div className="space-y-10">
                {[
                  { step: '01', title: 'Egg Preparation', desc: 'Mature eggs are retrieved from the mother and carefully prepared by removing the surrounding cumulus cells to assess their health.' },
                  { step: '02', title: 'Sperm Selection', desc: 'Our embryologists use high-magnification microscopes to select the absolute healthiest, most mobile sperm from the partner\'s sample.' },
                  { step: '03', title: 'Microsurgical Injection', desc: 'Using a specialized glass needle, the selected sperm is gently injected directly into the cytoplasm of the mature egg.' },
                  { step: '04', title: 'Embryo Development', desc: 'The fertilized eggs are cultured in advanced incubators, where we monitor their growth into blastocyst embryos over 3-5 days.' },
                  { step: '05', title: 'Embryo Transfer', desc: 'The healthiest embryos are selected and gently transferred into the mother\'s uterus to initiate a healthy pregnancy.' }
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why ICSI is a Game-Changer for Male Infertility</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Male factor infertility accounts for nearly 50% of all fertility cases. ICSI was specifically developed to address severe sperm issues that conventional IVF could not solve. At our **Fertility Clinic in Delhi**, we routinely perform ICSI for couples dealing with:
              </p>
              <ul className="grid md:grid-cols-2 gap-4 text-sm text-gray-600 list-none p-0">
                <li className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  Very low sperm count (Oligospermia)
                </li>
                <li className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  Poor sperm movement (Asthenospermia)
                </li>
                <li className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  High numbers of abnormal sperm
                </li>
                <li className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  Sperm retrieved via TESA/PESA
                </li>
                <li className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  Anti-sperm antibodies
                </li>
                <li className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  Frozen sperm samples
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-10">
                The precision required for ICSI is immense. A single mistake during the injection can damage the egg. This is why the expertise of your embryology team is the most critical factor in your success. Our team, led by **Dr. Rit Shukla**, has performed over 5000+ ICSI procedures, maintaining one of the highest fertilization and pregnancy rates in North India.
              </p>
            </section>

            {/* Deep SEO Expert Content Section */}
            <section className="prose prose-lg max-w-none bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">The ICSI Advantage: Precision Medicine in Embryology</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Intracytoplasmic Sperm Injection (ICSI) is not just a procedure; it is a masterclass in microscopic precision. At Pravi IVF, we recognize that for many couples, the hurdle to parenthood is a single, silent biological barrier. ICSI is the key that unlocks that barrier. By allowing our expert embryologists to select the absolute best-performing sperm and introduce it directly into the egg, we eliminate the variables of natural fertilization that often lead to disappointment in conventional IVF cycles.
              </p>
              
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Mastering the Micromanipulation Process</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                The success of ICSI is deeply dependent on the tools and the hands that use them. Our laboratory in Lajpat Nagar, Delhi, is equipped with the latest Narishige micromanipulators, which allow for sub-micron accuracy. Every injection is performed under high-magnification optics, ensuring that the egg's delicate structure is preserved while the sperm is introduced. This level of technical mastery is what has allowed us to achieve consistent fertilization rates of 80% and higher, even in the most challenging cases of male infertility.
              </p>

              <h3 className="text-2xl font-bold text-blue-700 mb-4">Overcoming Severe Male Factor Infertility</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                In the past, conditions like Azoospermia (zero sperm in the ejaculate) or severe Oligospermia (very low count) meant that a couple's only hope was donor sperm. ICSI has changed that narrative forever. Through advanced retrieval techniques like TESA and PESA, we can often find viable sperm directly from the source. Because ICSI requires only one healthy sperm per egg, these microscopic samples are more than enough to create a family. We are proud to have helped thousands of fathers achieve biological parenthood who were once told it was impossible.
              </p>

              <h3 className="text-2xl font-bold text-blue-700 mb-4">Beyond Movement: The Importance of Sperm Morphology</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Most basic sperm tests only look at count and motility. However, at Pravi IVF, we go deeper. We understand that the structural integrity of the sperm—its morphology—is a critical factor in embryo development. During the ICSI process, our embryologists spend hours meticulously screening the sample at 400x magnification. We look for the most "perfect" sperm, ensuring that the genetic material being introduced is of the highest possible quality. This attention to detail is what leads to stronger embryos and healthier pregnancies.
              </p>

              <h3 className="text-2xl font-bold text-blue-700 mb-4">ICSI vs. Conventional IVF: Making the Right Choice</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                While conventional IVF is a wonderful tool, it relies on the sperm's ability to penetrate the egg's outer layer (the zona pellucida) on its own. If the sperm is weak or the egg's layer is tough, fertilization will fail. This "total fertilization failure" is an emotional trauma we strive to prevent. We often recommend ICSI proactively for couples with unexplained infertility or those using frozen eggs, as it provides a higher level of certainty and control over the fertilization stage.
              </p>

              <h3 className="text-2xl font-bold text-blue-700 mb-4">The Science of Oocyte Activation</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Fertilization is more than just the meeting of two cells; it is a complex biochemical reaction. Sometimes, even with a successful injection, the egg needs a gentle "nudge" to begin the process of division. Our embryology team is trained in advanced oocyte activation techniques, which can be integrated into the ICSI protocol for couples with a history of poor fertilization. This ensures that every possible scientific avenue is explored to give your embryos the best start in life.
              </p>

              <h3 className="text-2xl font-bold text-blue-700 mb-4">Transparency and Trust in the Lab</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                We understand that the work happening inside our lab is a mystery to most patients. That's why we prioritize transparency. We provide detailed reports on fertilization success and embryo quality, and our senior embryologists are always available to discuss the technical aspects of your cycle. We believe that when you understand the care and precision going into your treatment, it builds the trust necessary for a successful partnership.
              </p>

              <h3 className="text-2xl font-bold text-blue-700 mb-4">Your Future, Our Precision</h3>
              <p className="text-gray-700 leading-relaxed">
                At Pravi IVF, ICSI is more than just a lab technique; it is a commitment to your future. We combine world-class technology with a deeply personalized approach, ensuring that your treatment plan is as unique as your biological profile. By choosing the best ICSI centre in Delhi, you are choosing a team that refuses to settle for anything less than perfection in the pursuit of your dream of parenthood.
              </p>
            </section>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 text-white shadow-xl sticky top-32">
              <h3 className="text-xl font-bold mb-4">Start Your Journey</h3>
              <p className="text-blue-100 text-sm mb-8">Get expert advice on ICSI from our senior consultants.</p>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Common Questions About ICSI</h2>
            <p className="text-gray-600">Expert clarity for your fertility concerns</p>
          </div>
          <div className="space-y-4">
            {[
              { q: 'Is ICSI safe for the future child?', a: 'Yes. Thousands of babies have been born globally via ICSI, and extensive medical studies confirm they are just as healthy as naturally conceived children. The procedure only assists in the fertilization stage.' },
              { q: 'Does ICSI guarantee fertilization?', a: 'While no medical procedure can offer a 100% guarantee, ICSI typically results in a 70% to 85% fertilization rate, which is significantly higher than conventional IVF in cases of male infertility.' },
              { q: 'How is ICSI different from conventional IVF?', a: 'In conventional IVF, sperm and eggs are placed together in a dish for natural fertilization. In ICSI, a single sperm is manually injected into each egg by an embryologist using a microscopic needle.' },
              { q: 'Is ICSI more expensive than IVF?', a: 'ICSI is an additional laboratory technique performed as part of an IVF cycle. While there is an additional fee for the precision work involved, it often saves costs in the long run by reducing the number of cycles needed for success.' }
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
            Experience the Precision of Pravi IVF
          </h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            Don\'t let male infertility stand in your way. Our advanced ICSI protocols are designed to give you the highest possible chance of success.
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

export default ICSIServicePage;
