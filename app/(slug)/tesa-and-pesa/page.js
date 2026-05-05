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
  Syringe,
  Zap
} from 'lucide-react';

const TesaPesaPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden" style={{backgroundImage: 'url("/images/ivf-treatment.jpg")', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className='w-full h-full top-0 absolute z-10 bg-gradient-to-r from-blue-600/70 to-blue-800/70' />
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="flex items-center gap-2 mb-4">
                <Syringe className="w-8 h-8 text-yellow-400" />
                <span className="text-blue-100 font-semibold tracking-wide uppercase text-sm">Advanced Surgical Sperm Retrieval</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                TESA & PESA Treatment in Delhi
              </h1>
              <p className="text-lg text-blue-100 mb-8 leading-relaxed max-w-xl">
                Overcome azoospermia with advanced surgical sperm retrieval. At Pravi IVF Delhi, we use TESA and PESA techniques to retrieve viable sperm directly from the source, making biological fatherhood possible even with zero sperm count in the ejaculate.
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
                      <Microscope className="w-7 h-7 text-blue-900" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white">90%+</div>
                      <div className="text-blue-100 font-medium">Retrieval Success</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-green-400 rounded-2xl flex items-center justify-center shadow-lg">
                      <Zap className="w-7 h-7 text-blue-900" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white">Rapid</div>
                      <div className="text-blue-100 font-medium">15-Min Procedure</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-pink-400 rounded-2xl flex items-center justify-center shadow-lg">
                      <Shield className="w-7 h-7 text-blue-900" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white">Safe</div>
                      <div className="text-blue-100 font-medium">Local Anesthesia</div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Restoring Hope for Male Fertility</h2>
            <p className="text-gray-600">Why Pravi IVF is North India\'s leading centre for TESA & PESA</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Microscope, title: 'Expert Andrologists', desc: 'Led by specialists in microsurgical sperm retrieval' },
              { icon: Activity, title: 'Advanced Lab', desc: 'Immediate processing of retrieved sperm for ICSI' },
              { icon: Shield, title: 'Minimally Invasive', desc: 'No surgical cuts, just fine needle aspiration' },
              { icon: Heart, title: 'Compassionate Care', desc: 'Private and respectful handling of male fertility' }
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding TESA & PESA: Solutions for Zero Sperm Count</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Azoospermia, or the absence of sperm in the ejaculate, was once considered a definitive end to a man\'s biological fatherhood dreams. However, with the advent of surgical sperm retrieval techniques like TESA and PESA, that is no longer the case. At Pravi IVF, the premier **TESA & PESA Centre in Delhi**, we specialize in collecting viable sperm directly from the testes or epididymis.
              </p>
              <p className="text-gray-700 leading-relaxed">
                These minimally invasive procedures are designed to bypass blockages or address production issues, providing the healthy sperm needed for a successful ICSI cycle. Our expert clinical team in Lajpat Nagar ensures that these procedures are performed with the highest standard of surgical precision, maximizing the chances of retrieving high-quality sperm for your fertility treatment.
              </p>
            </section>

            {/* Content Section 2: Detailed Process */}
            <section className="bg-blue-50 rounded-3xl p-8 md:p-12 border border-blue-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <Activity className="text-blue-600" />
                The Retrieval Techniques Explained
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-blue-200/50">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6 text-blue-600 font-bold">TESA</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Testicular Sperm Aspiration</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    TESA involves a fine needle being gently inserted into the testicular tissue to aspirate sperm. It is typically recommended for men with non-obstructive azoospermia or where other methods have failed.
                  </p>
                  <ul className="space-y-2 text-xs text-gray-500 list-disc pl-4">
                    <li>Ideal for sperm production issues</li>
                    <li>Simple, 10-minute procedure</li>
                    <li>Performed under local anesthesia</li>
                  </ul>
                </div>
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-blue-200/50">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6 text-blue-600 font-bold">PESA</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Percutaneous Epididymal Sperm Aspiration</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    PESA is used when sperm is present in the epididymis but is blocked from exiting. This is common in men with past infections, vasectomies, or congenital blockages.
                  </p>
                  <ul className="space-y-2 text-xs text-gray-500 list-disc pl-4">
                    <li>Ideal for obstructive azoospermia</li>
                    <li>Highest retrieval success rates</li>
                    <li>Minimally invasive with rapid recovery</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* SEO Content 3: Depth & Science */}
            <section className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">A Pain-Free Pathway to Fatherhood</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                One of the most common concerns for men is the fear of pain during retrieval. At our **Fertility Clinic in Delhi**, we prioritize your comfort. Both TESA and PESA are performed under local anesthesia or mild sedation, meaning you will feel no pain during the 15-minute procedure. Most men report only a sensation of pressure and experience very mild soreness for a day or two afterward.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The retrieved sperm is immediately processed in our high-end andrology laboratory. Even a small number of retrieved sperm is sufficient for **ICSI (Intracytoplasmic Sperm Injection)**, where our embryologists manually inject a single healthy sperm into each egg. This combination of surgical retrieval and advanced fertilization technology has allowed thousands of men with zero sperm count to become biological fathers.
              </p>
            </section>

            {/* Deep SEO Expert Content Section */}
            <section className="prose prose-lg max-w-none bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Unlocking Fatherhood: A Deep Dive into TESA and PESA</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                The diagnosis of azoospermia—the absence of sperm in the ejaculate—can feel like a definitive end to the dream of biological fatherhood. At Pravi IVF, we are here to tell you that it isn't. Advances in microsurgical and aspiration techniques have made it possible to retrieve viable sperm directly from the reproductive tract, allowing men with even the most complex fertility challenges to father their own biological children. Our TESA and PESA protocols represent the pinnacle of andrological science, handled with the surgical precision and compassionate care you deserve.
              </p>
              
              <h3 className="text-2xl font-bold text-blue-700 mb-4">The Science of Surgical Sperm Retrieval</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Why is surgical retrieval so effective? In many cases, sperm production is still occurring within the testes, but it is either being blocked from exiting (obstructive azoospermia) or is produced in quantities too low to be present in the ejaculate (non-obstructive azoospermia). TESA and PESA allow us to bypass these barriers. Our clinic in Lajpat Nagar utilizes high-precision aspiration needles and advanced imaging to identify and collect these vital cells. By retrieving sperm directly from the source, we ensure that we are working with the most viable, healthy genetic material possible.
              </p>

              <h3 className="text-2xl font-bold text-blue-700 mb-4">PESA: The Solution for Obstructive Challenges</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Percutaneous Epididymal Sperm Aspiration (PESA) is typically the first line of treatment for men with obstructive azoospermia. This can be caused by past infections, previous vasectomies, or congenital blockages. During PESA, a fine needle is gently inserted into the epididymis—the structure where sperm is stored. Because the sperm in the epididymis is already mature, the success rate for retrieval in these cases is nearly 100%. At Pravi IVF, this is a quick, 10-minute procedure performed under local anesthesia, ensuring you are comfortable and back on your feet the same day.
              </p>

              <h3 className="text-2xl font-bold text-blue-700 mb-4">TESA: Addressing Production Issues</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Testicular Sperm Aspiration (TESA) is a more specialized procedure designed for men with non-obstructive azoospermia. In these cases, sperm production is extremely low or localized to tiny areas within the testicular tissue. TESA involves taking small samples of tissue directly from the testes to search for viable sperm. Our expert andrologists at Pravi IVF are trained in the most delicate aspiration techniques, ensuring that we maximize the chances of a successful retrieval while minimizing any impact on the surrounding tissue.
              </p>

              <h3 className="text-2xl font-bold text-blue-700 mb-4">The Synergy of Retrieval and ICSI</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                The true power of TESA and PESA is realized when combined with Intracytoplasmic Sperm Injection (ICSI). Because we only need a single healthy sperm for each egg, the small number of cells retrieved through these procedures is more than sufficient. Our embryology lab is equipped with high-magnification micromanipulators that allow us to select the best retrieved sperm and manually inject it into the partner's eggs. this "smart fertilization" approach is what makes biological fatherhood a reality for men who were once told they had no options.
              </p>

              <h3 className="text-2xl font-bold text-blue-700 mb-4">E-E-A-T: Trusting North India’s Leading Andrologists</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                When it comes to surgical sperm retrieval, experience is everything. Our medical team at Pravi IVF brings decades of combined expertise in male reproductive health. Our authority is built on thousands of successful retrievals and a reputation for absolute scientific integrity. We don't just perform the procedure; we provide a complete diagnostic and treatment ecosystem, ensuring that your path to fatherhood is handled by the best in the field. Our reputation as the best TESA and PESA centre in Delhi is a testament to our dedication and results.
              </p>

              <h3 className="text-2xl font-bold text-blue-700 mb-4">A Private and Respectful Environment</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                We understand that male fertility issues can be a sensitive subject. At Pravi IVF, we prioritize your privacy and peace of mind. Every consultation and procedure is handled with the utmost respect and confidentiality. We take the time to explain the science behind your treatment, ensuring that you feel informed and empowered throughout the process. Our goal is to provide a supportive environment where you can focus on what matters most: building your future family.
              </p>

              <h3 className="text-2xl font-bold text-blue-700 mb-4">Your Future, Our Commitment</h3>
              <p className="text-gray-700 leading-relaxed">
                Choosing TESA and PESA at Pravi IVF means choosing a partner who refuses to settle for anything less than success. We combine world-class surgical technology with a deeply human-centered approach, ensuring that your journey is as smooth and stress-free as possible. From your initial diagnosis to the successful fertilization of your partner's eggs, our team is with you every step of the way. Your dream of being a father is worth every effort, and we are honored to be your partner in this journey.
              </p>
            </section>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 text-white shadow-xl sticky top-32">
              <h3 className="text-xl font-bold mb-4">Start Your Journey</h3>
              <p className="text-blue-100 text-sm mb-8">Get expert advice on surgical sperm retrieval from our specialists.</p>
              <div className="space-y-4">
                <a href="tel:+918009150040" className="flex items-center gap-4 bg-white/10 p-4 rounded-xl hover:bg-white/20 transition-colors">
                  <Phone className="w-5 h-5 text-yellow-400" />
                  <span className="font-bold">+91 800 915 0040</span>
                </a>
                <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-4 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Book Private Consult
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
            <p className="text-gray-600">Confidential answers on TESA & PESA in Delhi</p>
          </div>
          <div className="space-y-4">
            {[
              { q: 'Is TESA or PESA painful?', a: 'The procedure is performed under local anesthesia, so you will not feel any pain during the process. You may experience some mild soreness or a dull ache for 24-48 hours afterward, which can be managed with simple over-the-counter medication.' },
              { q: 'How long does the procedure take?', a: 'Surgical sperm retrieval is a quick, outpatient procedure that typically takes between 10 to 15 minutes. You can go home within an hour of the procedure being finished.' },
              { q: 'Can retrieved sperm be frozen?', a: 'Yes. If we retrieve more sperm than is needed for the current cycle, we can cryopreserve (freeze) the remaining samples for use in future IVF-ICSI attempts.' },
              { q: 'What is the success rate of finding sperm?', a: 'For men with obstructive azoospermia (PESA), the retrieval rate is nearly 100%. For non-obstructive cases (TESA), success rates depend on the underlying cause but remain very high at our specialized centre.' }
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
            Biological Fatherhood is Possible
          </h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            Don\'t let a zero sperm count diagnosis stop you. Our advanced retrieval protocols are designed to help you build your biological family.
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
              Free Private Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TesaPesaPage;
