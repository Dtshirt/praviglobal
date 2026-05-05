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
  User as Male,
  Search
} from 'lucide-react';

const MaleInfertilityPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden" style={{backgroundImage: 'url("/images/ivf-treatment.jpg")', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className='w-full h-full top-0 absolute z-10 bg-gradient-to-r from-blue-600/70 to-blue-800/70' />
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="flex items-center gap-2 mb-4">
                <Male className="w-8 h-8 text-yellow-400" />
                <span className="text-blue-100 font-semibold tracking-wide uppercase text-sm">Comprehensive Andrology Solutions</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                Male Infertility Treatment in Delhi
              </h1>
              <p className="text-lg text-blue-100 mb-8 leading-relaxed max-w-xl">
                Address male fertility challenges with world-class diagnostic and treatment protocols. At Pravi IVF Delhi, we combine advanced semen analysis with specialized medical therapies to help men achieve their dream of parenthood.
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
                      <Search className="w-7 h-7 text-blue-900" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white">Precise</div>
                      <div className="text-blue-100 font-medium">Diagnostic Tools</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-green-400 rounded-2xl flex items-center justify-center shadow-lg">
                      <TrendingUp className="w-7 h-7 text-blue-900" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white">5000+</div>
                      <div className="text-blue-100 font-medium">Successful Outcomes</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-pink-400 rounded-2xl flex items-center justify-center shadow-lg">
                      <Shield className="w-7 h-7 text-blue-900" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white">Safe</div>
                      <div className="text-blue-100 font-medium">Medical Therapy</div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Pravi IVF is a Leader in Male Fertility</h2>
            <p className="text-gray-600">Dedicated andrology experts focused on your success</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Microscope, title: 'Andrology Lab', desc: 'World-class semen analysis and processing' },
              { icon: Activity, title: 'Hormonal Care', desc: 'Specialized management of endocrine imbalances' },
              { icon: Users, title: 'Expert Team', desc: 'North India\'s top urologists and embryologists' },
              { icon: Heart, title: 'Confidentiality', desc: 'Private and respectful care for all patients' }
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Breaking the Silence: Male Infertility Care in Delhi</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Male factor infertility is a significant contributor to reproductive challenges, affecting nearly 50% of couples struggling to conceive. At Pravi IVF, we believe in breaking the stigma surrounding male fertility. Our **Male Infertility Treatment in Delhi** is designed to provide men with accurate diagnoses and effective medical solutions in a supportive, private environment.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Whether the issue is related to sperm count, motility, morphology, or hormonal imbalances, our experts utilize the latest in andrological science to create a personalized treatment pathway. From lifestyle modifications and medications to advanced surgical sperm retrieval, we offer a comprehensive range of options to help you overcome biological hurdles.
              </p>
            </section>

            {/* Content Section 2: Detailed Causes */}
            <section className="bg-blue-50 rounded-3xl p-8 md:p-12 border border-blue-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <Search className="text-blue-600" />
                Common Causes of Male Infertility
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-2xl shadow-sm">
                  <h3 className="text-xl font-bold text-blue-700 mb-4">Biological Factors</h3>
                  <ul className="space-y-3 text-sm text-gray-700 list-none p-0">
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-1" /> Low sperm count (Oligospermia)</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-1" /> Poor motility (Asthenospermia)</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-1" /> Abnormal sperm shape</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-1" /> Varicocele (swollen veins)</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm">
                  <h3 className="text-xl font-bold text-blue-700 mb-4">Hormonal & Lifestyle</h3>
                  <ul className="space-y-3 text-sm text-gray-700 list-none p-0">
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-1" /> Low testosterone levels</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-1" /> Endocrine disorders</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-1" /> High stress and obesity</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-1" /> Smoking & alcohol impact</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* SEO Content 3: Treatments */}
            <section className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Modern Solutions for Male Fertility</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Advancements in reproductive medicine have made it possible for men with even severe infertility to father biological children. At our **Fertility Clinic in Lajpat Nagar**, we specialize in cutting-edge treatments tailored to your specific needs:
              </p>
              <div className="space-y-10">
                {[
                  { title: 'Advanced Semen Analysis', desc: 'Beyond just count, we look at DNA fragmentation, morphology, and pH levels to understand the root cause of infertility.' },
                  { title: 'Hormonal Optimization', desc: 'Our endocrine specialists help balance testosterone and other vital hormones to improve natural sperm production.' },
                  { title: 'Surgical Sperm Retrieval', desc: 'For men with zero sperm in the ejaculate, techniques like TESA, PESA, and Micro-TESE allow us to collect sperm directly from the source.' },
                  { title: 'ICSI (Intracytoplasmic Sperm Injection)', desc: 'The ultimate solution for severe male factor issues, where a single healthy sperm is injected directly into an egg.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6 group">
                    <div className="w-1 h-16 bg-blue-500 group-hover:w-2 transition-all rounded-full" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Deep SEO Expert Content Section */}
            <section className="prose prose-lg max-w-none bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Restoring Hope: A Deep Dive into Male Infertility Solutions</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Male infertility is a topic often shrouded in silence, yet it is a critical component of the reproductive puzzle. At Pravi IVF, we are committed to changing the conversation. We understand that for many men, a diagnosis of infertility can be a heavy emotional burden. Our mission is to provide you with the most advanced diagnostic tools and effective medical therapies available in Delhi, ensuring that you have every opportunity to achieve biological parenthood.
              </p>
              
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Beyond the Basics: Advanced Semen Analysis</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                A standard semen analysis is only the beginning. In our specialized andrology laboratory in Lajpat Nagar, we perform deep-dive diagnostics that look at the genetic and biochemical health of your sperm. DNA Fragmentation Index (DFI) testing is a vital tool that helps us identify sperm with damaged genetic material—a common cause of repeated IVF failure and early-term miscarriage. By understanding these microscopic details, we can adjust your treatment plan, whether it involves antioxidant therapy or advanced sperm selection techniques during an ICSI cycle.
              </p>

              <h3 className="text-2xl font-bold text-blue-700 mb-4">The Impact of Hormonal Imbalance</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Like women, men's fertility is heavily influenced by a delicate balance of hormones. Low testosterone, elevated prolactin, or imbalances in FSH and LH can significantly impact sperm production. Our clinical team includes endocrine specialists who work to identify and correct these imbalances. Often, a targeted course of medical therapy can restore natural sperm production, improving counts and motility to levels where natural conception or simpler treatments like IUI become a reality.
              </p>

              <h3 className="text-2xl font-bold text-blue-700 mb-4">Surgical Excellence: TESA, PESA, and Micro-TESE</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                For men with obstructive or non-obstructive azoospermia (zero sperm in the ejaculate), hope is not lost. At Pravi IVF, we are experts in surgical sperm retrieval. Techniques like TESA (Testicular Sperm Aspiration) and PESA (Percutaneous Epididymal Sperm Aspiration) are minimally invasive procedures that allow us to collect sperm directly from the reproductive tract. For the most complex cases, we offer Micro-TESE, a microsurgical procedure that allows our urologists to identify tiny areas of sperm production within the testes. These retrieved sperm are then used in an ICSI cycle to achieve pregnancy.
              </p>

              <h3 className="text-2xl font-bold text-blue-700 mb-4">Lifestyle as a Pillar of Fertility</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                The modern world presents many challenges to male fertility. High stress, environmental toxins, obesity, and smoking can all damage sperm health. At Pravi IVF, we take a holistic view of your care. We provide evidence-based guidance on nutrition, supplements, and lifestyle changes that can improve your reproductive potential. Because a new batch of sperm is produced every 72 to 90 days, even small changes made today can have a significant impact on your success just a few months from now.
              </p>

              <h3 className="text-2xl font-bold text-blue-700 mb-4">E-E-A-T: Authority in Andrological Care</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Your health is in expert hands. Our urologists and andrologists at Pravi IVF are recognized as some of the best in North India. Our authority is built on years of clinical success and a commitment to staying at the forefront of reproductive science. We don't just treat the symptoms; we investigate the root cause of your infertility, providing you with a clear, data-driven pathway to success. Our reputation as the best male infertility clinic in Delhi is a testament to our dedication and results.
              </p>

              <h3 className="text-2xl font-bold text-blue-700 mb-4">The Ethical Commitment to Privacy</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                We understand the sensitive nature of male fertility care. At Pravi IVF, we ensure absolute confidentiality and a respectful, non-judgmental environment. Every patient is treated as an individual, with a treatment plan that reflects their unique biological needs and personal preferences. We believe in complete transparency regarding both medical outcomes and financial costs, allowing you to move forward with total peace of mind.
              </p>

              <h3 className="text-2xl font-bold text-blue-700 mb-4">Your Partner in Parenthood</h3>
              <p className="text-gray-700 leading-relaxed">
                At Pravi IVF, your dream of fatherhood is our driving mission. We combine the latest technology with a deeply personalized approach, ensuring that you are supported at every step of your journey. Whether you are facing a minor challenge or a complex diagnosis, we are here to provide the expertise, the technology, and the compassion you need to achieve success. Your future family is worth the effort, and we are honored to be your partner in this journey.
              </p>
            </section>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 text-white shadow-xl sticky top-32">
              <h3 className="text-xl font-bold mb-4">Expert Consultation</h3>
              <p className="text-blue-100 text-sm mb-8">Schedule a private session with our senior andrologists.</p>
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
            <p className="text-gray-600">Confidential answers for men\'s fertility health</p>
          </div>
          <div className="space-y-4">
            {[
              { q: 'Can male infertility be completely cured?', a: 'While not all cases can be "cured" in a traditional sense, the vast majority of male infertility issues can be successfully bypassed using modern treatments like hormonal therapy, surgical retrieval, or ICSI.' },
              { q: 'How does lifestyle impact sperm health?', a: 'Sperm health is highly sensitive to lifestyle factors. High stress, smoking, excessive alcohol, and heat exposure (like saunas) can significantly lower sperm count and motility. Improvements in diet and exercise can often show positive results within 3 months.' },
              { q: 'Is a low sperm count always the problem?', a: 'No. Often, a man may have a normal count but the sperm may have poor movement (motility) or abnormal shape (morphology), which prevents them from successfully fertilizing an egg.' },
              { q: 'What is a DNA fragmentation test?', a: 'It is an advanced semen test that looks at the genetic integrity of the sperm. High fragmentation can lead to failed IVF cycles or recurrent miscarriages, and identifying it allows us to adjust the treatment plan accordingly.' }
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
            Take Control of Your Fertility Health
          </h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            Don\'t wait to start your journey. Our expert team is ready to provide the diagnosis and treatment you need to move forward with confidence.
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
              Free Online Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaleInfertilityPage;
