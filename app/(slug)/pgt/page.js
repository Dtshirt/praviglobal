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
  Baby,
  Dna,
  FlaskConical,
  Stethoscope,
  BrainCircuit,
  TrendingUp,
} from 'lucide-react';

const PGTServicePage = () => {
  const pgtTypes = [
    {
      code: 'PGT-A',
      name: 'Aneuploidy Testing',
      color: 'blue',
      description:
        'Screens all 24 chromosomes for numerical abnormalities (aneuploidy). The modern replacement for PGS — ideal for advanced maternal age, recurrent implantation failure, and repeated miscarriages.',
      points: [
        'Screens all 23 chromosome pairs',
        'Identifies Down Syndrome & trisomies',
        'Dramatically reduces miscarriage risk',
      ],
    },
    {
      code: 'PGT-M',
      name: 'Monogenic Disorders',
      color: 'green',
      description:
        'Tests embryos for specific single-gene (monogenic) disorders. The modern replacement for PGD — recommended for couples carrying known hereditary conditions like Thalassemia or Cystic Fibrosis.',
      points: [
        'Targets specific inherited diseases',
        'Personalised genetic probes built per family',
        'Prevents hereditary transmission',
      ],
    },
    {
      code: 'PGT-SR',
      name: 'Structural Rearrangements',
      color: 'purple',
      description:
        'Detects unbalanced chromosomal structural rearrangements (translocations, inversions) in embryos from parents who carry such rearrangements, reducing failure cycles.',
      points: [
        'Identifies balanced vs. unbalanced embryos',
        'Critical for translocation carriers',
        'Increases live birth rates significantly',
      ],
    },
  ];

  const steps = [
    {
      step: '01',
      title: 'Ovarian Stimulation & Egg Retrieval',
      desc: 'The cycle begins with hormone stimulation to produce multiple eggs, which are then retrieved in a minimally invasive procedure.',
    },
    {
      step: '02',
      title: 'Fertilisation via ICSI',
      desc: 'Each mature egg is fertilised using ICSI (Intracytoplasmic Sperm Injection) to create embryos in our state-of-the-art laboratory.',
    },
    {
      step: '03',
      title: 'Blastocyst Culture (Day 5-6)',
      desc: 'Embryos are cultured in advanced incubators for 5-6 days until they reach the blastocyst stage — the optimal point for biopsy.',
    },
    {
      step: '04',
      title: 'Trophectoderm Biopsy',
      desc: 'Our expert embryologists perform a laser-assisted microsurgical biopsy, removing a few cells from the outer layer (trophectoderm) without harming the embryo.',
    },
    {
      step: '05',
      title: 'Next-Generation Sequencing (NGS)',
      desc: 'Biopsied cells undergo advanced NGS analysis in a certified genetics lab, mapping the complete chromosomal and/or genetic profile with near-perfect accuracy.',
    },
    {
      step: '06',
      title: 'Embryo Selection & Transfer',
      desc: 'Our clinicians review the genetic report, select the healthiest embryo(s), and proceed with a fresh or frozen embryo transfer for the best outcome.',
    },
  ];

  const candidates = [
    'Women aged 35 and above (Advanced Maternal Age)',
    'Couples with recurrent IVF implantation failure',
    'Patients with two or more pregnancy losses (miscarriages)',
    'Families with a known hereditary genetic disorder',
    'Carriers of chromosomal structural rearrangements (translocations)',
    'Severe male factor infertility (low sperm DNA integrity)',
    'Couples opting for single embryo transfer (eSET)',
    'Those seeking family balancing or gender selection (where legally permitted)',
  ];

  const faqs = [
    {
      q: 'What is PGT and how is it different from PGS/PGD?',
      a: 'PGT (Preimplantation Genetic Testing) is the current, unified umbrella term endorsed by ESHRE and ASRM. PGT-A replaces the older term PGS, PGT-M replaces PGD, and PGT-SR covers structural rearrangements. The science is the same—the updated naming simply brings global standardisation.',
    },
    {
      q: 'Is the embryo biopsy procedure safe?',
      a: 'Yes. Biopsy is performed at the blastocyst stage (Day 5-6), when the embryo has over 100 cells. Removing just 3-5 cells from the trophectoderm (future placenta) is proven safe and does not impact the embryo\'s developmental potential.',
    },
    {
      q: 'How long do PGT results take?',
      a: 'Genetic analysis typically takes 7-14 days. During this time, the embryo is vitrified (fast-frozen) in our advanced storage tanks. A frozen embryo transfer (FET) cycle is then planned once results are available.',
    },
    {
      q: 'Does PGT guarantee a healthy baby?',
      a: 'PGT significantly reduces chromosomal and genetic risks, but no medical test carries a 100% guarantee. It gives you the best scientific evidence to make an informed decision and maximises your probability of a healthy live birth.',
    },
    {
      q: 'What is the cost of PGT in Delhi?',
      a: 'Pricing varies depending on the type of PGT required (PGT-A, PGT-M, or PGT-SR) and the number of embryos tested. Please contact our team for a transparent, personalised cost estimate with no hidden charges.',
    },
  ];

  const colorMap = {
    blue: { bg: 'bg-blue-50', border: 'border-blue-200', badge: 'bg-blue-600', h3: 'text-blue-700', dot: 'bg-blue-500' },
    green: { bg: 'bg-green-50', border: 'border-green-200', badge: 'bg-green-600', h3: 'text-green-700', dot: 'bg-green-500' },
    purple: { bg: 'bg-purple-50', border: 'border-purple-200', badge: 'bg-purple-600', h3: 'text-purple-700', dot: 'bg-purple-500' },
  };

  return (
    <div className="min-h-screen bg-white">
      {/* ── Hero Section ── */}
      <div
        className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden"
        style={{ backgroundImage: 'url("/images/ivf-treatment.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="w-full h-full top-0 absolute z-10 bg-gradient-to-r from-blue-700/80 to-blue-900/80" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse" />
        </div>

        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div className="animate-fade-in">
              <div className="flex items-center gap-2 mb-4">
                <Award className="w-8 h-8 text-yellow-400" />
                <span className="text-blue-100 font-semibold tracking-wide uppercase text-sm">
                  Next-Generation Embryo Genetic Testing
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                PGT Testing at Pravi IVF Delhi
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-blue-100">
                Preimplantation Genetic Testing — PGT-A, PGT-M & PGT-SR
              </h2>
              <p className="text-lg text-blue-100 mb-8 leading-relaxed max-w-xl">
                At Pravi IVF in Lajpat Nagar, Delhi, we offer the full spectrum of PGT — the globally standardised
                approach to embryo genetic screening. By testing your embryos before implantation, we help you achieve
                a healthy pregnancy with confidence.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Book Free Consultation
                </button>
                <a
                  href="tel:+918009150040"
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-blue-600 transition-all flex items-center gap-2"
                >
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
                  <span>Mon–Sat: 10 AM – 6 PM</span>
                </div>
              </div>
            </div>

            {/* Right — Stats Card */}
            <div className="hidden md:block animate-slide-up">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl space-y-8">
                {[
                  { icon: Star, color: 'bg-yellow-400', value: '99%', label: 'Chromosomal Accuracy' },
                  { icon: Dna, color: 'bg-green-400', value: 'NGS', label: 'Next-Gen Sequencing' },
                  { icon: Baby, color: 'bg-pink-400', value: '3 Types', label: 'PGT-A · PGT-M · PGT-SR' },
                ].map(({ icon: Icon, color, value, label }, idx) => (
                  <div key={idx} className="flex items-center gap-5">
                    <div className={`w-14 h-14 ${color} rounded-2xl flex items-center justify-center shadow-lg`}>
                      <Icon className="w-7 h-7 text-blue-900" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white">{value}</div>
                      <div className="text-blue-100 font-medium">{label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main Content ── */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-3 gap-12">

          {/* Left — Long-form Content */}
          <div className="lg:col-span-2 space-y-16">

            {/* Introduction */}
            <section className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                What is PGT? The Complete Guide for Fertility Patients in Delhi
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Preimplantation Genetic Testing (PGT) is a sophisticated diagnostic technique performed on embryos
                created through IVF (In Vitro Fertilisation) before they are transferred into the uterus. The
                overarching goal is simple yet profound: to identify which embryos are free of chromosomal
                abnormalities or specific genetic disorders, giving every transfer the best possible chance of
                resulting in a healthy, full-term pregnancy.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The term PGT is the modern, globally unified terminology endorsed by leading reproductive bodies
                including ESHRE (European Society of Human Reproduction and Embryology) and ASRM (American Society
                for Reproductive Medicine). It encompasses three distinct sub-types — PGT-A, PGT-M, and PGT-SR —
                each targeting a different category of genetic risk. At Pravi IVF, Lajpat Nagar, Delhi, our genetics
                team offers all three, tailored precisely to your clinical history.
              </p>
            </section>

            {/* Types of PGT */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <Dna className="text-blue-600" />
                The Three Types of PGT Explained
              </h2>
              <div className="space-y-6">
                {pgtTypes.map((type, idx) => {
                  const c = colorMap[type.color];
                  return (
                    <div key={idx} className={`${c.bg} rounded-3xl p-8 border ${c.border}`}>
                      <div className="flex items-start gap-4 mb-4">
                        <span className={`${c.badge} text-white text-sm font-bold px-3 py-1 rounded-full`}>
                          {type.code}
                        </span>
                        <h3 className={`text-xl font-bold ${c.h3}`}>{type.name}</h3>
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed mb-4">{type.description}</p>
                      <ul className="space-y-2">
                        {type.points.map((pt, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                            <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                            {pt}
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Who Should Consider PGT */}
            <section className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Who Should Consider PGT?</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                While PGT can benefit any IVF patient, certain clinical profiles make it especially valuable. Our
                specialists at Pravi IVF will review your history and recommend the most appropriate PGT type during
                your consultation.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {candidates.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0" />
                    <span className="text-sm text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Step-by-step Process */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                The PGT Process — Step by Step at Pravi IVF
              </h2>
              <div className="space-y-8">
                {steps.map((s, idx) => (
                  <div key={idx} className="flex gap-6 items-start group">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg group-hover:scale-110 transition-transform">
                        {s.step}
                      </div>
                    </div>
                    <div className="flex-1 pb-8 border-b border-gray-100 group-last:border-0">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{s.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Deep SEO Content */}
            <section className="bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm space-y-8">
              <h2 className="text-3xl font-bold text-gray-900">
                Why PGT is Redefining Fertility Success in Delhi
              </h2>

              <div>
                <h3 className="text-2xl font-bold text-blue-700 mb-3">
                  The Hidden Cause of IVF Failure: Chromosomal Aneuploidy
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Studies consistently show that chromosomal aneuploidy — an incorrect number of chromosomes — is the
                  single largest cause of IVF failure and early miscarriage. Alarmingly, a morphologically
                  "perfect-looking" blastocyst can still harbour a silent chromosomal error invisible to the naked
                  eye or standard microscopy. PGT-A eliminates this uncertainty by providing a definitive genetic
                  passport for each embryo before transfer, dramatically improving the per-transfer success rate.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-blue-700 mb-3">
                  Protecting Future Generations with PGT-M
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  For families carrying the weight of heritable diseases — Thalassemia, Sickle Cell Anaemia, Cystic
                  Fibrosis, Spinal Muscular Atrophy, Huntington's Disease, and more — PGT-M offers a compassionate
                  solution. By testing embryos before implantation, couples can break the cycle of genetic disease,
                  selecting only those embryos that have not inherited the condition. Our genetics team at Pravi IVF
                  designs a bespoke molecular probe for your specific mutation, ensuring the highest diagnostic
                  precision.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-blue-700 mb-3">
                  Chromosomal Rearrangement Carriers: PGT-SR Changes the Odds
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Some individuals carry balanced chromosomal rearrangements — such as reciprocal or Robertsonian
                  translocations — that cause them no personal health issues, yet place their embryos at very high
                  risk of being unbalanced. In natural conception, this often manifests as recurrent miscarriages or
                  repeated unexplained IVF failures. PGT-SR identifies which embryos have inherited a balanced or
                  normal chromosomal arrangement, reserving only these for transfer and restoring hope to couples who
                  have faced repeated loss.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-blue-700 mb-3">
                  The Role of Next-Generation Sequencing (NGS) in PGT
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Pravi IVF leverages Next-Generation Sequencing — the gold standard in genomic analysis — for all
                  PGT testing. NGS simultaneously reads millions of DNA fragments, providing near-perfect resolution
                  across all 24 chromosome types. This supersedes older array-CGH and FISH methods, offering greater
                  sensitivity to detect even mosaic embryos (those with a mixture of normal and abnormal cells).
                  With NGS, you can trust that the report reflects the most accurate picture of your embryo's
                  genetic health currently available in medical science.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-blue-700 mb-3">
                  Reducing Costs and Emotional Burden of IVF Cycles
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  While PGT adds a one-time cost, the investment often pays for itself by reducing the number of
                  failed transfers. Each failed cycle carries emotional distress, recovery time, and additional
                  medical expenses. By transferring only the embryo most likely to succeed, PGT reduces the average
                  number of cycles needed to achieve a live birth — making your overall IVF journey more efficient,
                  less stressful, and ultimately more cost-effective.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-blue-700 mb-3">
                  Our Commitment to Ethical, Transparent Genetic Care
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Genetic information is deeply personal. At Pravi IVF, every PGT report is discussed with you in a
                  dedicated genetic counselling session. We explain the findings in plain language, help you
                  understand your options, and support you — emotionally and clinically — through every decision.
                  We adhere strictly to ICMR (Indian Council of Medical Research) guidelines and international
                  ethical standards to ensure your data, embryos, and reproductive choices are always treated with
                  the highest level of care and confidentiality.
                </p>
              </div>
            </section>
          </div>

          {/* Right — Sticky Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-8">

              {/* Quick Contact Card */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 text-white shadow-xl">
                <h3 className="text-xl font-bold mb-2">Speak to a PGT Specialist</h3>
                <p className="text-blue-100 text-sm mb-6">
                  Our senior genetic counsellors and embryologists are available to guide you through the right
                  testing approach for your specific situation.
                </p>
                <div className="space-y-4">
                  <a
                    href="tel:+918009150040"
                    className="flex items-center gap-3 bg-white/10 hover:bg-white/20 p-4 rounded-xl transition-colors"
                  >
                    <Phone className="w-5 h-5 text-yellow-400" />
                    <span className="font-semibold">+91 800 915 0040</span>
                  </a>
                  <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-4 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2">
                    <Calendar className="w-5 h-5" />
                    Book Free Consultation
                  </button>
                </div>
              </div>

              {/* Why Pravi IVF */}
              <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-6">Why Pravi IVF for PGT?</h3>
                <div className="space-y-6">
                  {[
                    { icon: Shield, title: '99% NGS Accuracy', desc: 'Certified genetics laboratory' },
                    { icon: Activity, title: 'All 3 PGT Types', desc: 'PGT-A, PGT-M & PGT-SR' },
                    { icon: Users, title: 'Expert Embryologists', desc: 'Laser-assisted biopsy specialists' },
                    { icon: Microscope, title: 'Advanced Lab', desc: 'Clean-room IVF environment' },
                    { icon: BrainCircuit, title: 'Genetic Counselling', desc: 'Results explained with empathy' },
                  ].map(({ icon: Icon, title, desc }, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-gray-900">{title}</h4>
                        <p className="text-xs text-gray-500">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Related Services */}
              <div className="bg-blue-50 rounded-3xl p-6 border border-blue-100">
                <h3 className="text-base font-bold text-gray-900 mb-4">Related Services</h3>
                <ul className="space-y-3">
                  {[
                    { label: 'IVF Treatment', href: '/ivf' },
                    { label: 'ICSI', href: '/icsi' },
                    { label: 'PGS & PGD Testing', href: '/pgspgd' },
                    { label: 'Donor Services', href: '/donor-services' },
                    { label: 'Egg Freezing', href: '/egg-freezing' },
                  ].map((link, idx) => (
                    <li key={idx}>
                      <a
                        href={link.href}
                        className="flex items-center gap-2 text-sm text-blue-700 hover:text-blue-900 font-medium transition-colors"
                      >
                        <ChevronRight className="w-4 h-4" />
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── FAQ Section ── */}
      <div className="bg-gray-50 py-20 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions About PGT
            </h2>
            <p className="text-gray-600">
              Everything you need to know before starting Preimplantation Genetic Testing at Pravi IVF, Delhi.
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-blue-200 transition-colors"
              >
                <h3 className="font-bold text-gray-900 mb-3 flex items-start gap-3">
                  <ChevronRight className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-gray-600 ml-9 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Final CTA ── */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Give Your Embryo the Genetic Advantage
          </h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            Don't leave your IVF outcome to chance. Book a PGT consultation at Pravi IVF, Lajpat Nagar, Delhi and
            let science guide you to a healthier pregnancy.
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

export default PGTServicePage;
