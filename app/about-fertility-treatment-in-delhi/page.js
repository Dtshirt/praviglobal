import Image from 'next/image';
import Link from 'next/link';
import { Award, Shield, Heart, CheckCircle, Users, Clock, Target, Eye, ArrowRight } from 'lucide-react';

export const metadata = {
  title: "About Fertility Treatment in Delhi | Best IVF Centre | Pravi IVF",
  description: "Learn about Pravi IVF, the best IVF centre in Lajpat Nagar, Delhi. Meet our expert team, state-of-the-art labs, and our commitment to providing advanced and affordable fertility treatment in Delhi.",
  openGraph: {
    title: 'About Fertility Treatment in Delhi | Best IVF Centre | Pravi IVF',
    description: 'Learn about Pravi IVF, the best IVF centre in Lajpat Nagar, Delhi offering advanced and affordable fertility treatment in Delhi with high success rates.',
  },
  alternates: {
    canonical: 'https://praviglobalivf.com/about-fertility-treatment-in-delhi/',
  }
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-blue-700 to-blue-955 text-white overflow-hidden" style={{ backgroundImage: 'url("/images/ivf-treatment.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className='w-full h-full top-0 absolute z-10 bg-gradient-to-r from-blue-900/80 to-blue-955/80' />
        <div className="absolute inset-0 opacity-15">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
          }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-[#64b5f6] font-bold text-xs tracking-widest uppercase mb-4 block">Pravi Global IVF Polyclinic</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            About Fertility Treatment in Delhi
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed font-light">
            We know how difficult it is to deal with fertility issues. That is why at Pravi IVF, we keep our focus clear—providing highly successful, realistic, and patient-centered <strong>fertility treatment in Delhi</strong>. No medical jargon, no false hopes. Just honest clinical guidance and modern IVF options.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <span className="text-blue-600 font-bold tracking-wider text-xs uppercase mb-3 block">WHO WE ARE</span>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-8 leading-tight">
                An Honest Approach to Infertility and Parenthood
              </h2>
              <div className="text-gray-600 space-y-6 leading-relaxed font-light text-base">
                <p>
                  Pravi IVF was built because we wanted to change how <strong>fertility treatment in Delhi</strong> is done. Infertility is tough. It is exhausting, expensive, and emotionally draining. You do not need confusing sales pitches or endless tests. What you actually need is a team that listens, explains things in simple language, and works out a realistic treatment plan.
                </p>
                <p>
                  As the <strong>best IVF centre in Lajpat Nagar, Delhi</strong>, we offer everything from basic evaluations to advanced reproductive options. Whether it is <Link href="/fertility-services-in-lajpat-nagar-delhi" className="text-blue-600 hover:underline font-normal">IUI, IVF, ICSI, egg freezing</Link>, donor backup cycles, or complex keyhole surgeries, we handle them all right here under one roof. Our embryology laboratory meets strict global guidelines, meaning your embryos are handled with great care and modern scientific standards.
                </p>
                <p>
                  Our medical director, <Link href="/best-ivf-doctors-in-lajpat-nagar-delhi" className="text-blue-600 hover:underline font-normal">Dr. Monica Sachdev</Link>, is a senior <strong>fertility specialist in Lajpat Nagar, Delhi</strong> with more than 18 years in the field. Dr. Sachdev has a reputation for being straightforward and honest. She believes that every couple deserves to know their real chances of success before spending time or money.
                </p>
                <p>
                  We also take <strong>IVF treatment cost in Delhi</strong> very seriously. High-quality medical care should not be a financial trap. We give you a complete, written cost estimate right at the start. There are no hidden lab charges or surprise fees later. We want you to focus entirely on your health, knowing that we are supporting you with absolute honesty at every single milestone.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-10">
                <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100/50">
                  <div className="text-4xl font-extrabold text-blue-600 mb-2">5000+</div>
                  <div className="text-gray-800 font-semibold text-xs uppercase tracking-wider">Families Helped</div>
                </div>
                <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100/50">
                  <div className="text-4xl font-extrabold text-blue-600 mb-2">65%+</div>
                  <div className="text-gray-800 font-semibold text-xs uppercase tracking-wider">Success Record</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-[550px] rounded-3xl overflow-hidden shadow-2xl ring-8 ring-gray-50">
                <Image
                  src="/images/visit-clinic-bg.jpeg"
                  alt="Pravi IVF - Top IVF Clinic in Delhi"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-blue-600 to-blue-800 text-white p-8 rounded-2xl shadow-2xl max-w-xs">
                <Heart className="h-10 w-10 mb-4 text-[#90caf9]" />
                <div className="text-xl font-bold mb-1">We Care Honestly</div>
                <p className="text-xs text-blue-100 font-light">No false promises. Just realistic advice, clear pricing, and the highest standards of clinical support.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-b from-gray-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white p-10 rounded-2xl shadow-md border border-gray-100/80">
              <div className="bg-blue-100/60 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                <Target className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Practical Mission</h3>
              <p className="text-gray-600 leading-relaxed text-base font-light">
                Our main goal is simple: to make high-quality, scientifically sound fertility treatments accessible to everyone. We work hard to offer optimal clinical outcomes through strict embryology practices, upfront pricing structures, and customized patient support.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-700 to-blue-900 p-10 rounded-2xl shadow-md text-white">
              <div className="bg-white/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-blue-100 leading-relaxed text-base font-light">
                We want to be recognized as the absolute standard for ethical fertility care in Delhi. By focusing on scientific integrity and patient safety, we want to ensure that couples can pursue their parenthood dreams with trust and confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-white border-t border-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-bold tracking-wider text-xs uppercase mb-2 block">OUR MEDICAL DIRECTOR</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">Dr. Monica Sachdev</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-base font-light">
              Clear guidance and clinical expertise from an experienced specialist
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50/30 via-white to-blue-50/30 p-8 md:p-12 rounded-3xl shadow-xl border border-blue-100/20">
            <div className="grid lg:grid-cols-3 gap-12 items-center">
              <div className="lg:col-span-1">
                <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden shadow-xl ring-6 ring-blue-100">
                  <Image
                    src="/images/praviivf68adeb4f45d30_1756228431.png"
                    alt="Dr. Monica Sachdev - Best IVF Doctor in Delhi"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="lg:col-span-2">
                <h3 className="text-3xl font-extrabold text-gray-900 mb-2">
                  Dr. Monica Sachdev
                </h3>
                <p className="text-blue-600 text-lg font-bold mb-4">
                  Senior Fertility Specialist in Lajpat Nagar, Delhi
                </p>
                <div className="inline-block bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wider mb-6">
                  MBBS, DNB (Obs & Gynae), <a href="https://www.rcog.org.uk/" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-800">MRCOG (London)</a>, FICOG, Fellow Rep.Med.
                </div>

                <div className="text-gray-600 space-y-4 leading-relaxed font-light text-base">
                  <p>
                    Dr. Monica Sachdev is a senior <strong>fertility doctor in Delhi</strong> with more than 18 years of clinical experience. As our Medical Director, she manages all complex fertility treatments, embryo transfer programs, and keyhole gynecological surgeries at Pravi IVF.
                  </p>
                  <p>
                    After completing her post-graduation in Obstetrics and Gynecology, she received specialized training in IVF and Reproductive Medicine, followed by a prestigious German Diploma in Reproductive Medicine from Kiel, Germany. Patients trust her because she is highly pragmatic, honest, and treats every couple with extreme personal care.
                  </p>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4 max-w-sm">
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                    <div className="text-2xl font-extrabold text-blue-600">18+</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Years of Practice</div>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                    <div className="text-2xl font-extrabold text-blue-600">5000+</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Happy Deliveries</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-bold tracking-wider text-xs uppercase mb-2 block">WHAT WE OFFER</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">Why Couples Choose Pravi IVF</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-base font-light">
              We focus on the things that actually matter for a successful pregnancy
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Trusted Medical Experts",
                desc: "Dr. Monica Sachdev has managed complex infertility cycles for over 18 years, giving you highly competent clinical guidance.",
                icon: Award
              },
              {
                title: "Strict Lab Quality",
                desc: "Our laboratory uses modern, up-to-date IVF equipment to maintain high embryo safety, raising your chances of success.",
                icon: Shield
              },
              {
                title: "No Hidden Costs",
                desc: "We discuss all fees clearly before we start any cycle. You receive a complete upfront breakdown with zero extra charges later.",
                icon: Heart
              },
              {
                title: "High Success Outcomes",
                desc: "Our consistent results speak for themselves, aligning perfectly with global clinical success parameters.",
                icon: CheckCircle
              },
              {
                title: "International Care Desk",
                desc: "We help international patients from Cameroon, Maldives, Uzbekistan, and Kazakhstan with comfortable accommodation, travel help, and language translators at our verified clinic location near <a href='https://share.google/l3CxCfdJJf9C1DQBL' target='_blank' rel='noopener noreferrer' class='text-blue-600 hover:underline font-normal'>Lajpat Nagar, South Delhi</a>.",
                icon: Users
              },
              {
                title: "Clear Communication",
                desc: "Our clinical coordinators are always here to answer your phone calls, explain tests, and keep you informed at every step.",
                icon: Clock
              }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
                >
                  <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm font-light">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section (Excellent for GSC indexing and SEO Rich Snippets) */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-bold tracking-wider text-xs uppercase mb-2 block">QUESTIONS</span>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 text-base font-light">
              Clear, realistic answers about fertility care at our Delhi clinic
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "What is the typical ivf treatment cost in delhi?",
                a: "The final ivf treatment cost in delhi depends entirely on what treatments you need—like IUI, standard IVF, ICSI, or donor backups. At Pravi IVF, the best ivf centre in lajpat nagar delhi, we walk you through a complete, line-by-line price estimate during your very first consultation. We do not use surprise laboratory fees or hidden costs."
              },
              {
                q: "What makes Pravi IVF the best ivf centre in lajpat nagar delhi?",
                a: "Couples choose Pravi IVF because of our high success rates, Dr. Sachdev's deep medical experience, and our strict focus on ethical fertility treatment in delhi. We do not suggest unnecessary clinical tests or expensive procedures if they will not improve your chances."
              },
              {
                q: "How do I choose a good fertility specialist in lajpat nagar delhi?",
                a: "Look for strong medical degrees, actual years of clinical work, and a transparent consulting style. Dr. Monica Sachdev, a leading fertility specialist in lajpat nagar delhi, has over 18 years of specialized work in fertility clinics and is widely known for her honest, direct patient consultations."
              },
              {
                q: "Do you assist patients traveling from outside India?",
                a: "Yes, regularly. We assist our international patients with medical visa invitation documents, airport transport coordination, finding reliable hotels near our Lajpat Nagar clinic, and local language translators."
              }
            ].map((faq, index) => (
              <div key={index} className="p-6 bg-gray-50/50 rounded-2xl border border-gray-100">
                <h4 className="text-base font-bold text-gray-900 mb-2 flex items-start gap-2">
                  <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-[10px] flex-shrink-0 mt-0.5 font-bold">Q</span>
                  {faq.q}
                </h4>
                <p className="text-gray-600 leading-relaxed pl-7 text-sm font-light">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-blue-955 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-6 leading-tight">
            Let's Discuss Your Options Honestly
          </h2>
          <p className="text-lg text-blue-100 mb-8 leading-relaxed font-light max-w-xl mx-auto">
            Book a private, friendly consultation with our medical specialists in Delhi today to receive clear medical answers.
          </p>
          <Link href="/book-appointment" className="bg-white text-blue-900 px-8 py-4 rounded-full hover:bg-gray-100 transition-all hover:scale-105 inline-flex items-center text-base font-bold shadow-md">
            Schedule a Consultation <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}