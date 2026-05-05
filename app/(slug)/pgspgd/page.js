import React from 'react';
import {
  Microscope,
  CheckCircle2,
  Clock,
  Users,
  Award,
  Phone,
  Calendar,
  Heart,
  Shield,
  Activity,
  ChevronRight,
  MapPin,
  Star,
  TrendingUp,
  Baby,
  FlaskRound,
  Dna,
  Search,
  Stethoscope
} from 'lucide-react';

const PGSPGDServicePage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden" style={{ backgroundImage: 'url("/images/ivf-treatment.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className='w-full h-full top-0 absolute z-10 bg-gradient-to-r from-blue-600/70 to-blue-800/70' />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="flex items-center gap-2 mb-4">
                <Award className="w-8 h-8 text-yellow-400" />
                <span className="text-blue-100 font-semibold tracking-wide uppercase text-sm">Advanced Genetic Testing for IVF</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                PGS & PGD Testing at Pravi IVF Delhi
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-blue-100">
                Ensuring Healthy Embryos for a Healthy Pregnancy
              </h2>
              <p className="text-lg text-blue-100 mb-8 leading-relaxed max-w-xl">
                At Pravi IVF in Lajpat Nagar, Delhi, we provide world-class PGS (Preimplantation Genetic Screening) and PGD (Preimplantation Genetic Diagnosis) to identify healthy embryos before implantation. Improve your success rates and minimize genetic risks with our expert care.
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

            <div className="hidden md:block animate-slide-up">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl">
                <div className="space-y-8">
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-yellow-400 rounded-2xl flex items-center justify-center shadow-lg">
                      <Star className="w-7 h-7 text-blue-900" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white">99%</div>
                      <div className="text-blue-100 font-medium">Genomic Accuracy</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-green-400 rounded-2xl flex items-center justify-center shadow-lg">
                      <Microscope className="w-7 h-7 text-blue-900" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white">Advanced</div>
                      <div className="text-blue-100 font-medium">Next-Gen Sequencing</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-pink-400 rounded-2xl flex items-center justify-center shadow-lg">
                      <Baby className="w-7 h-7 text-blue-900" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white">Healthy</div>
                      <div className="text-blue-100 font-medium">Embryo Selection</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Sections */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Side: Content Flow */}
          <div className="lg:col-span-2 space-y-16">
            {/* Introduction Section */}
            <section className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Revolutionizing IVF with Genetic Testing in Delhi</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Parenthood is a dream that every couple deserves to experience. However, for many, the path to a healthy pregnancy can be complicated by chromosomal imbalances or inherited genetic conditions. This is where **PGS (Preimplantation Genetic Screening)** and **PGD (Preimplantation Genetic Diagnosis)** become vital. At Pravi IVF, we integrate these cutting-edge genetic technologies into our IVF protocols to ensure that only the healthiest embryos are selected for transfer.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Located in the heart of Lajpat Nagar, Delhi, our clinic utilizes state-of-the-art laboratory facilities and advanced genomic analysis to provide couples with the highest level of accuracy. By testing embryos before they are implanted, we significantly reduce the risk of miscarriages, failed IVF cycles, and genetic disorders, paving the way for a smooth and healthy pregnancy journey.
              </p>
            </section>

            {/* Understanding PGS & PGD Section */}
            <section className="bg-blue-50 rounded-3xl p-8 md:p-12 border border-blue-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <Dna className="text-blue-600" />
                Understanding PGS vs. PGD
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-2xl shadow-sm">
                  <h3 className="text-xl font-bold text-blue-700 mb-4">PGS (PGT-A)</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    **Preimplantation Genetic Screening** is used to check for the correct number of chromosomes (aneuploidy). It is ideal for couples with advanced maternal age or those facing recurrent miscarriages.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Checks 23 pairs of chromosomes</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Identifies Down Syndrome risks</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Reduces risk of miscarriage</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm">
                  <h3 className="text-xl font-bold text-blue-700 mb-4">PGD (PGT-M)</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    **Preimplantation Genetic Diagnosis** is a specialized test for specific single-gene disorders. It is recommended for couples who carry known genetic diseases like Thalassemia or Cystic Fibrosis.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Tests for specific inherited diseases</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Targeted genetic analysis</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Prevents hereditary transmission</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Deep Dive Content Section */}
            <section className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why These Tests are Essential for Modern Fertility</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                In a standard IVF cycle, embryos are often selected based on their visual appearance under a microscope. However, an embryo that looks perfect "morphologically" might still have chromosomal issues that lead to implantation failure. PGS and PGD go beyond surface-level evaluation by looking into the very DNA of the embryo. This scientific precision is what sets Pravi IVF apart as a leader in fertility treatments in Delhi.
              </p>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Who Should Consider Genetic Screening?</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                While any couple undergoing IVF can opt for these tests, they are particularly beneficial for:
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  "Women above the age of 35",
                  "Couples with recurrent IVF failures",
                  "Patients with multiple miscarriages",
                  "History of genetic diseases in the family",
                  "Severe male factor infertility",
                  "Couples seeking single embryo transfer"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* The Process Section */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">The PGS / PGD Testing Process</h2>
              <div className="space-y-8">
                {[
                  { step: '01', title: 'Egg Retrieval & ICSI', desc: 'The process begins with a standard IVF/ICSI cycle to create embryos in our high-tech laboratory.' },
                  { step: '02', title: 'Embryo Culture', desc: 'Embryos are carefully monitored and cultured for 5-6 days until they reach the Blastocyst stage.' },
                  { step: '03', title: 'Microsurgical Biopsy', desc: 'Our expert embryologists perform a delicate biopsy, removing a few cells from the trophectoderm (outer layer).' },
                  { step: '04', title: 'Genomic Sequencing', desc: 'The biopsied cells are sent for advanced analysis using NGS (Next-Generation Sequencing) to map the DNA.' },
                  { step: '05', title: 'Embryo Transfer', desc: 'The healthy, screened embryos are either transferred immediately or frozen for a future cycle.' }
                ].map((step, idx) => (
                  <div key={idx} className="flex gap-6 items-start group">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg group-hover:scale-110 transition-transform">
                        {step.step}
                      </div>
                    </div>
                    <div className="flex-1 pb-8 border-b border-gray-100 group-last:border-0">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Deep SEO Expert Content Section */}
            <section className="prose prose-lg max-w-none bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Advanced Genetic Insights: The Science Behind PGS & PGD</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                At Pravi IVF, we believe that informed patients are empowered patients. Understanding the intricate science of genetic testing is crucial for couples navigating the complexities of modern fertility treatments. Preimplantation Genetic Screening (PGS) and Preimplantation Genetic Diagnosis (PGD) represent the pinnacle of reproductive technology, offering a window into the chromosomal health of an embryo before it even begins its journey in the womb.
              </p>
              
              <h3 className="text-2xl font-bold text-blue-700 mb-4">The Critical Role of Chromosomal Balance</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Human life is built upon 23 pairs of chromosomes. Any deviation from this precise number—known as aneuploidy—is the leading cause of implantation failure and early-term miscarriages. For many couples, the frustration of repeated IVF failures is not due to a lack of effort or medical care, but rather a silent chromosomal imbalance within the embryos themselves. PGS (now often referred to as PGT-A) allows our specialists to count these chromosomes with near-perfect accuracy. By selecting only "euploid" or balanced embryos, we effectively bypass the primary hurdle that many fertility patients face.
              </p>

              <h3 className="text-2xl font-bold text-blue-700 mb-4">E-E-A-T: Why Experience Matters in Genetic Testing</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                The process of embryo biopsy requires an extraordinary level of precision. Our embryologists at Pravi IVF utilize laser-assisted microsurgery to remove a few cells from the trophectoderm—the layer that eventually forms the placenta—without disturbing the inner cell mass that becomes the baby. This level of technical expertise is what defines our clinic as a center of excellence. We don't just use the technology; we master the delicate touch required to preserve the viability of every embryo we test.
              </p>

              <h3 className="text-2xl font-bold text-blue-700 mb-4">Breaking the Cycle of Hereditary Diseases with PGD</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                While PGS looks at the big picture of chromosomes, PGD (PGT-M) zooms in on specific genetic markers. For families carrying the burden of inherited conditions such as Sickle Cell Anemia, Cystic Fibrosis, or Thalassemia, PGD is a revolutionary tool. It allows us to identify embryos that have not inherited the disease-causing gene, ensuring that future generations are free from these debilitating conditions. This is more than just fertility treatment; it is a way to change the health legacy of an entire family.
              </p>

              <h3 className="text-2xl font-bold text-blue-700 mb-4">Improving IVF Success Rates for Older Patients</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                As women age, the natural percentage of aneuploid eggs increases. This is a biological reality that can make the late 30s and early 40s a challenging time for conception. However, by integrating PGS into the IVF cycle, we can significantly level the playing field. Even if only one healthy embryo is produced, knowing exactly which one it is allows us to focus our efforts and maximize the chance of a successful live birth on the first transfer. This targeted approach reduces the emotional and financial strain of "trial and error" transfers.
              </p>

              <h3 className="text-2xl font-bold text-blue-700 mb-4">The Emotional Peace of Mind</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Perhaps the most significant benefit of PGS and PGD at Pravi IVF is the psychological relief it provides. Knowing that the embryo being transferred is genetically sound removes a massive layer of anxiety during the early weeks of pregnancy. It allows parents-to-be to bond with their pregnancy with greater confidence, knowing that they have utilized every scientific tool available to ensure the health of their future child.
              </p>

              <h3 className="text-2xl font-bold text-blue-700 mb-4">Global Standards in Lajpat Nagar, Delhi</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our lab facilities at Pravi IVF are designed to match international benchmarks. We utilize Next-Generation Sequencing (NGS), which is the most advanced platform for DNA analysis currently available globally. This technology allows us to screen all 24 types of chromosomes with unprecedented resolution. By bringing these global standards to Delhi, we ensure that our patients don't have to travel abroad to receive the world's best fertility care.
              </p>

              <h3 className="text-2xl font-bold text-blue-700 mb-4">A Holistic Approach to Genetic Care</h3>
              <p className="text-gray-700 leading-relaxed">
                Genetic testing is not an isolated event; it is a piece of a larger puzzle. Our clinical team works closely with genetic counselors to help you interpret the results and make informed decisions about your family's future. We believe in transparency, empathy, and ethical practice. Every step we take, from the initial consultation to the final embryo selection, is guided by a commitment to your long-term well-being and the health of your future child.
              </p>
            </section>
          </div>

          {/* Right Side: Sticky Sidebar / Features */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-8">
              {/* Quick Contact Card */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 text-white shadow-xl">
                <h3 className="text-xl font-bold mb-4">Start Your Journey</h3>
                <p className="text-blue-100 text-sm mb-6">Get expert advice on PGS & PGD testing from our senior consultants.</p>
                <div className="space-y-4">
                  <a href="tel:+918009150040" className="flex items-center gap-3 bg-white/10 hover:bg-white/20 p-4 rounded-xl transition-colors">
                    <Phone className="w-5 h-5 text-yellow-400" />
                    <span className="font-semibold">+91 800 915 0040</span>
                  </a>
                  <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-4 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2">
                    <Calendar className="w-5 h-5" />
                    Book Consultation
                  </button>
                </div>
              </div>

              {/* Key Benefits List */}
              <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-6">Why Pravi IVF?</h3>
                <div className="space-y-6">
                  {[
                    { icon: Shield, title: '99% Accuracy', desc: 'Advanced NGS technology' },
                    { icon: Activity, title: 'Higher Success', desc: 'Up to 30% boost in rates' },
                    { icon: Users, title: 'Expert Team', desc: 'Renowned geneticists' },
                    { icon: Microscope, title: 'Modern Lab', desc: 'Clean-room environments' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-gray-900">{item.title}</h4>
                        <p className="text-xs text-gray-500">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 py-20 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Common Questions About PGS & PGD</h2>
            <p className="text-gray-600">Find answers to the most frequent inquiries regarding genetic testing.</p>
          </div>
          <div className="space-y-4">
            {[
              { q: 'Is PGS/PGD testing safe for my embryos?', a: 'Yes. The biopsy is performed by highly skilled embryologists at the blastocyst stage, which is widely considered safe and does not affect the embryo’s ability to implant or develop normally.' },
              { q: 'Can PGD detect all genetic disorders?', a: 'PGD is highly effective at detecting specific, known single-gene disorders. While it doesn’t screen for every possible mutation, it targets the specific condition of concern with over 99% accuracy.' },
              { q: 'How long does it take to get the results?', a: 'Once the biopsy is performed, the genomic analysis typically takes 7 to 14 days. During this time, the embryos are safely cryopreserved in our advanced storage facility.' },
              { q: 'Does genetic testing guarantee a healthy baby?', a: 'While no medical test can provide a 100% guarantee, PGS and PGD significantly reduce the risk of genetic issues and miscarriages, giving you the best possible chance of a healthy birth.' }
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
            Take the First Step Toward Your Family’s Future
          </h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            Ensure the health of your future child with the most advanced genetic testing available in Delhi. Our experts are here to guide you through every choice.
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

export default PGSPGDServicePage;
