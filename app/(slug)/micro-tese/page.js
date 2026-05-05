import React from 'react';
import {
  Microscope, CheckCircle2, Clock, Users, Award,
  Phone, Calendar, Shield, Activity, ChevronRight,
  MapPin, Star, Baby, Stethoscope, HeartPulse, FlaskConical,
} from 'lucide-react';

const MicroTESEPage = () => {
  const steps = [
    { step: '01', title: 'Pre-Surgical Evaluation', desc: 'A thorough assessment including semen analysis, hormonal profile (FSH, LH, testosterone), genetic karyotyping, and scrotal ultrasound to confirm the diagnosis of non-obstructive azoospermia and plan surgery.' },
    { step: '02', title: 'Anaesthesia & Setup', desc: 'Micro-TESE is performed under general anaesthesia in a fully equipped operating theatre. The procedure typically takes 2–3 hours and is performed on an outpatient or day-care basis.' },
    { step: '03', title: 'Microsurgical Exploration', desc: 'Using a high-powered operating microscope (×15–25 magnification), the surgeon identifies dilated, opaque tubules in the testis that are most likely to contain active spermatogenesis.' },
    { step: '04', title: 'Targeted Sperm Extraction', desc: 'Small tissue samples from only the most promising tubules are excised — preserving maximum healthy testicular tissue and minimising damage to blood supply and hormone-producing Leydig cells.' },
    { step: '05', title: 'Embryology Lab Processing', desc: 'Our embryologists immediately process each sample under the microscope to identify and isolate viable, motile sperm for use in ICSI (Intracytoplasmic Sperm Injection).' },
    { step: '06', title: 'ICSI & IVF Cycle', desc: 'Retrieved sperm are used fresh or cryopreserved for a future ICSI-IVF cycle with the partner\'s eggs, offering the best possible chance of fertilisation and a healthy pregnancy.' },
  ];

  const candidates = [
    'Non-obstructive azoospermia (NOA) diagnosis',
    'Failed conventional TESA or PESA attempts',
    'Sertoli Cell Only Syndrome (SCOS)',
    'Maturation arrest on testicular biopsy',
    'Klinefelter Syndrome (47,XXY)',
    'Cryptorchidism (undescended testes) history',
    'Post-chemotherapy or radiation azoospermia',
    'Unexplained azoospermia with normal testis size',
  ];

  const comparison = [
    { feature: 'Magnification', tesa: 'None / Low', microTese: '×15–25 Microscope' },
    { feature: 'Tissue Removed', tesa: 'Random large cores', microTese: 'Targeted micro-samples' },
    { feature: 'Sperm Retrieval Rate (NOA)', tesa: '20–30%', microTese: '40–60%' },
    { feature: 'Testicular Damage', tesa: 'Higher', microTese: 'Significantly Lower' },
    { feature: 'Hormonal Impact', tesa: 'Notable drop in testosterone', microTese: 'Minimal impact' },
    { feature: 'Suitable for NOA', tesa: 'Limited', microTese: 'Gold Standard' },
  ];

  const faqs = [
    { q: 'What is Micro-TESE and who needs it?', a: 'Micro-TESE (Microsurgical Testicular Sperm Extraction) is the gold-standard surgical procedure for men with non-obstructive azoospermia — a condition where no sperm are present in the ejaculate due to a production failure within the testes. Using an operating microscope, the surgeon identifies and extracts sperm directly from the most productive tubules of the testis.' },
    { q: 'What are the success rates of Micro-TESE?', a: 'At experienced centres like Pravi IVF, Micro-TESE achieves sperm retrieval rates of 40–60% in men with NOA — significantly higher than conventional TESA (20–30%). Success varies with the underlying diagnosis; certain conditions like hypospermatogenesis yield higher rates than Sertoli Cell Only Syndrome.' },
    { q: 'Is the procedure painful? What is the recovery like?', a: 'Micro-TESE is performed under general anaesthesia, so you feel nothing during the surgery. Post-operatively, mild scrotal discomfort and swelling are normal for 3–5 days. Most men return to desk work within a week. Strenuous activity is restricted for 3–4 weeks.' },
    { q: 'Can sperm be frozen after Micro-TESE?', a: 'Yes. Any sperm retrieved that are not used immediately for a fresh ICSI cycle are cryopreserved for future use. This means the surgery doesn\'t need to be repeated if additional IVF cycles are required.' },
    { q: 'How is Micro-TESE combined with IVF for my partner?', a: 'Micro-TESE is coordinated with your partner\'s IVF ovarian stimulation cycle. Retrieved sperm are used in ICSI, where a single sperm is injected directly into each mature egg. The resulting embryos are cultured and the healthiest are transferred to the uterus.' },
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <div
        className="relative text-white overflow-hidden"
        style={{ backgroundImage: 'url("/images/ivf-treatment.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="w-full h-full top-0 absolute z-10 bg-gradient-to-r from-blue-800/85 to-blue-600/75" />
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Award className="w-8 h-8 text-yellow-400" />
                <span className="text-blue-100 font-semibold tracking-wide uppercase text-sm">Gold-Standard Male Fertility Surgery</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                Micro-TESE in Delhi
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-blue-100">
                Microsurgical Sperm Retrieval for Azoospermia — Pravi IVF
              </h2>
              <p className="text-lg text-blue-100 mb-8 leading-relaxed max-w-xl">
                Even with a zero sperm count, fatherhood may still be possible. Pravi IVF's expert urologists use
                high-powered operating microscopes to precisely locate and extract viable sperm directly from the
                testis — giving you the highest possible chance of success.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-all shadow-lg flex items-center gap-2">
                  <Calendar className="w-5 h-5" /> Book Free Consultation
                </button>
                <a href="tel:+918009150040" className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-blue-600 transition-all flex items-center gap-2">
                  <Phone className="w-5 h-5" /> +91 800 915 0040
                </a>
              </div>
              <div className="flex items-center gap-6 text-sm font-medium text-blue-50">
                <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-yellow-400" /><span>Lajpat Nagar, Delhi</span></div>
                <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-yellow-400" /><span>Mon–Sat: 10 AM – 6 PM</span></div>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl space-y-8">
                {[
                  { icon: Star, color: 'bg-yellow-400', value: '40–60%', label: 'Sperm Retrieval Rate in NOA' },
                  { icon: Microscope, color: 'bg-green-400', value: '×25', label: 'Operating Microscope Power' },
                  { icon: Baby, color: 'bg-pink-400', value: 'Day Care', label: 'Outpatient Procedure' },
                ].map(({ icon: Icon, color, value, label }, i) => (
                  <div key={i} className="flex items-center gap-5">
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

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-3 gap-12">

          {/* Content Column */}
          <div className="lg:col-span-2 space-y-16">

            {/* What is Micro-TESE */}
            <section className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Micro-TESE?</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Micro-TESE — short for <strong>Microsurgical Testicular Sperm Extraction</strong> — is the most
                advanced and effective surgical technique available for retrieving sperm in men diagnosed with
                non-obstructive azoospermia (NOA). Unlike conventional sperm retrieval methods, Micro-TESE uses a
                high-powered surgical microscope to magnify the testicular tissue up to 25 times, enabling the
                urologist to visually identify the specific tubules most likely to contain active sperm production.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Developed and refined over the past two decades, Micro-TESE is now the internationally recognised
                gold standard for NOA management. At Pravi IVF, Lajpat Nagar, Delhi, our urology team performs
                this procedure with exceptional precision — preserving as much healthy testicular tissue as possible
                while maximising the chance of finding viable sperm for use in ICSI-IVF.
              </p>
            </section>

            {/* Who Should Consider */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Who Should Consider Micro-TESE?</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Micro-TESE is specifically indicated for men where conventional sperm retrieval has failed or is
                unlikely to succeed. Our specialists will review your full diagnostic history to confirm candidacy.
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

            {/* Micro-TESE vs TESA Comparison */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Micro-TESE vs. Conventional TESA</h2>
              <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-blue-600 text-white">
                      <th className="text-left px-6 py-4 font-semibold">Feature</th>
                      <th className="text-left px-6 py-4 font-semibold">Conventional TESA</th>
                      <th className="text-left px-6 py-4 font-semibold">Micro-TESE</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparison.map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="px-6 py-4 font-semibold text-gray-800">{row.feature}</td>
                        <td className="px-6 py-4 text-gray-600">{row.tesa}</td>
                        <td className="px-6 py-4 text-blue-700 font-semibold">{row.microTese}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Step-by-step Process */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">The Micro-TESE Process at Pravi IVF</h2>
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
              <h2 className="text-3xl font-bold text-gray-900">Why Micro-TESE is a Life-Changing Procedure</h2>

              <div>
                <h3 className="text-2xl font-bold text-blue-700 mb-3">The Science of Focal Spermatogenesis</h3>
                <p className="text-gray-700 leading-relaxed">
                  In men with NOA, sperm production doesn't simply stop everywhere — instead, it may persist in
                  isolated, microscopic pockets within the testis known as areas of focal spermatogenesis. These
                  active tubules are indistinguishable from inactive ones to the naked eye. The operating microscope
                  changes everything. Dilated, opaque-white tubules indicate active sperm production, while flat,
                  translucent tubules do not. This visual intelligence is what gives Micro-TESE its decisive edge
                  over blind-needle TESA techniques.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-blue-700 mb-3">Preserving Testicular Function Long-Term</h3>
                <p className="text-gray-700 leading-relaxed">
                  A major concern with any testicular surgery is the impact on testosterone production by Leydig
                  cells and the long-term health of remaining testicular tissue. Micro-TESE's targeted, microscope-
                  guided approach removes the smallest amount of tissue necessary, causing significantly less damage
                  than conventional TESE or multiple-needle TESA. Studies show that testosterone levels in men
                  after Micro-TESE recover faster and with less overall decline compared to conventional techniques.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-blue-700 mb-3">Klinefelter Syndrome & Micro-TESE</h3>
                <p className="text-gray-700 leading-relaxed">
                  Men with Klinefelter Syndrome (47,XXY) — the most common genetic cause of NOA — were previously
                  told fatherhood was impossible. Micro-TESE has transformed this reality. Published data shows
                  sperm retrieval rates of 30–70% in Klinefelter patients undergoing Micro-TESE, depending on
                  hormonal status and age at the time of surgery. Our team also assesses the role of prior hormonal
                  optimisation (testosterone normalisation) to further improve retrieval outcomes.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-blue-700 mb-3">Synchronising with Your Partner's IVF Cycle</h3>
                <p className="text-gray-700 leading-relaxed">
                  Coordination between the male and female IVF cycles is crucial for optimal outcomes. At Pravi IVF,
                  our multidisciplinary team — urologist, reproductive endocrinologist, and embryology lab —
                  meticulously synchronises the Micro-TESE with your partner's egg retrieval. In cases where sperm
                  retrieval is uncertain, sperm cryopreservation from a prior surgical exploration or the use of
                  donor sperm as a back-up option can be discussed in advance to safeguard the IVF cycle.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-blue-700 mb-3">Genetic Counselling Before Micro-TESE</h3>
                <p className="text-gray-700 leading-relaxed">
                  Before proceeding, genetic evaluation is essential. Conditions like Y-chromosome microdeletions
                  (AZFa, AZFb, AZFc regions) have a direct bearing on both the likelihood of sperm retrieval and
                  the risk of passing on infertility to male offspring. Our genetic counsellors review your
                  karyotype and Y-micro deletion analysis results with you transparently so you can make a fully
                  informed decision about proceeding with Micro-TESE and ICSI.
                </p>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-8">

              <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 text-white shadow-xl">
                <h3 className="text-xl font-bold mb-2">Speak to a Specialist</h3>
                <p className="text-blue-100 text-sm mb-6">
                  Our urologist and embryology team will review your reports and guide you through the most
                  appropriate sperm retrieval option.
                </p>
                <div className="space-y-4">
                  <a href="tel:+918009150040" className="flex items-center gap-3 bg-white/10 hover:bg-white/20 p-4 rounded-xl transition-colors">
                    <Phone className="w-5 h-5 text-yellow-400" />
                    <span className="font-semibold">+91 800 915 0040</span>
                  </a>
                  <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-4 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2">
                    <Calendar className="w-5 h-5" /> Book Free Consultation
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-6">Why Pravi IVF for Micro-TESE?</h3>
                <div className="space-y-6">
                  {[
                    { icon: Microscope, title: 'High-Power Microscope', desc: '×25 magnification operating suite' },
                    { icon: Shield, title: 'Expert Urologists', desc: 'Specialised in male fertility surgery' },
                    { icon: Activity, title: '40–60% Retrieval Rate', desc: 'In non-obstructive azoospermia' },
                    { icon: FlaskConical, title: 'Integrated Embryology', desc: 'On-site lab for instant processing' },
                    { icon: HeartPulse, title: 'Tissue-Sparing', desc: 'Minimal hormonal impact post-op' },
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

              <div className="bg-blue-50 rounded-3xl p-6 border border-blue-100">
                <h3 className="text-base font-bold text-gray-900 mb-4">Related Services</h3>
                <ul className="space-y-3">
                  {[
                    { label: 'TESA & PESA', href: '/tesa-and-pesa' },
                    { label: 'Male Infertility', href: '/male-infertility' },
                    { label: 'ICSI Treatment', href: '/icsi' },
                    { label: 'IVF Treatment', href: '/ivf' },
                    { label: 'PGT Testing', href: '/pgt' },
                  ].map((link, idx) => (
                    <li key={idx}>
                      <a href={link.href} className="flex items-center gap-2 text-sm text-blue-700 hover:text-blue-900 font-medium transition-colors">
                        <ChevronRight className="w-4 h-4" />{link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="bg-gray-50 py-20 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions About Micro-TESE</h2>
            <p className="text-gray-600">Answers to the most common questions about microsurgical sperm retrieval at Pravi IVF, Delhi.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-blue-200 transition-colors">
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

      {/* Final CTA */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Zero Sperm Count Is Not the End of Your Journey</h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            Micro-TESE at Pravi IVF, Lajpat Nagar, Delhi has helped hundreds of men with azoospermia achieve
            fatherhood. Speak to our specialists today — your path to parenthood may be closer than you think.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+918009150040" className="bg-yellow-400 text-blue-900 px-10 py-5 rounded-full font-bold hover:bg-yellow-500 transition-all shadow-xl flex items-center gap-3 text-xl">
              <Phone className="w-6 h-6" /> Call Now: +91 800 915 0040
            </a>
            <button className="bg-white text-blue-600 px-10 py-5 rounded-full font-bold hover:bg-blue-50 transition-all flex items-center gap-3 text-xl">
              <Calendar className="w-6 h-6" /> Free Online Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MicroTESEPage;
