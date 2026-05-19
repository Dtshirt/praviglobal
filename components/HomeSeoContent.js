'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const faqs = [
  {
    question: "How long does a typical IVF cycle take?",
    questionKeyword: "ivf treatment in delhi",
    answer: "An entire treatment cycle usually spans about six to eight weeks. The initial ovarian stimulation phase requires daily injections for roughly 8 to 14 days, followed by close tracking before retrieval."
  },
  {
    question: "Is the IVF process painful?",
    questionKeyword: "ivf treatment in delhi",
    answer: "No, you won't feel anything during the egg retrieval because it is done under safe, light sedation. Afterward, you might notice some mild cramping or minor bloating, much like a normal period."
  },
  {
    question: "When should I consider seeing an IVF specialist in Delhi?",
    questionKeyword: "ivf specialist in delhi",
    answer: "If you've been actively trying to conceive for over a year without any success, it's wise to book a consult. If you are 35 or older, we strongly suggest reaching out after six months of trying."
  },
  {
    question: "What is the difference between IVF and ICSI?",
    questionKeyword: "icsi treatment in delhi",
    answer: "With standard IVF, we place many sperm near the egg in a lab dish to let fertilization happen on its own. With ICSI, we pick a single healthy sperm and inject it directly into the egg, which helps immensely if semen parameters are low."
  },
  {
    question: "Can I continue working during my IVF treatment?",
    questionKeyword: "ivf treatment in delhi",
    answer: "Absolutely. Most of our patients continue their office work and normal routines without issues. You'll only need to take a single day off for the actual egg retrieval procedure to rest up."
  },
  {
    question: "Is there a limit to how many times I can try IVF?",
    questionKeyword: "best ivf centre in delhi",
    answer: "We generally suggest looking at 3 to 4 attempts. Cumulative success rates often go up with consecutive tries, but we review progress cycle-by-cycle to ensure your safety."
  },
  {
    question: "Does IVF lead to more multiple pregnancies (twins or triplets)?",
    questionKeyword: "ivf treatment in delhi",
    answer: "We highly recommend single embryo transfers to minimize health risks. While transferring multiple embryos can raise the chance of twins, we decide this carefully with you."
  },
  {
    question: "Are there any side effects from the hormone injections?",
    questionKeyword: "ivf treatment in delhi",
    answer: "You might feel slightly bloated, experience some breast tenderness, or feel a bit emotional. These minor side effects are temporary and fade quickly after the egg collection."
  },
  {
    question: "How do I choose the best IVF centre in Delhi for me?",
    questionKeyword: "best ivf centre in delhi",
    answer: "Choose a clinic that values honesty, clear pricing, and has a dedicated embryology lab. Reading real reviews and talking directly to the chief doctors will help you decide."
  },
  {
    question: "Is the embryo transfer procedure difficult?",
    questionKeyword: "ivf treatment in delhi",
    answer: "Not at all. The transfer is very simple, quick, and requires no anesthesia. It feels similar to a routine pap smear check and takes under ten minutes."
  },
  {
    question: "Which is the best IVF centre in Lajpat Nagar, Delhi?",
    questionKeyword: "best ivf centre in lajpat nagar delhi",
    answer: "Pravi Global IVF is widely considered the best IVF centre in Lajpat Nagar, Delhi. Led by Dr. Monica Sachdev, a senior fertility specialist with over 18+ years of clinical excellence, the clinic is highly trusted for its ethical approach, transparent pricing, and advanced embryology labs. The centre provides tailored treatments with exceptional success rates in a supportive, patient-first environment."
  }
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden transition-all duration-300">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full p-6 text-left flex justify-between items-center focus:outline-none hover:bg-gray-50 transition-colors"
      >
        <h4 className="text-xl font-semibold text-emerald-800 pr-4">{question}</h4>
        <span className="text-emerald-600 flex-shrink-0">
          {isOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          )}
        </span>
      </button>
      
      <div 
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-6 text-gray-700 leading-relaxed">
          <p className="border-t border-gray-100 pt-4 mt-2">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default function HomeSeoContent() {
  return (
    <section className="py-20 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-emerald prose-lg text-gray-700">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        
        <h2 className="text-3xl md:text-4xl font-black text-emerald-950 mb-8 border-l-4 border-emerald-500 pl-6">
          Pravi Global IVF: The Best IVF Centre in Delhi for Advanced Fertility Solutions
        </h2>
        <p className="mb-4">
          Deciding to get medical help to grow your family is a deeply personal and emotional step. When you've been trying to conceive for a long time without success, finding a trustworthy <Link href="/services" className="text-rose-600 hover:text-rose-700 font-bold hover:underline">IVF centre in Delhi</Link> comes down to finding honest doctors who actually listen, clear pricing plans, and high-quality lab standards.
        </p>
        <p className="mb-4">
          About one in six couples worldwide experience some kind of delay when trying to conceive. Since it's so common, you deserve a clinic that designs treatment around your unique body rather than putting you through a cookie-cutter routine. Whether you're dealing with <Link href="/female-infertility-treatment-in-lajpat-nagar-delhi" className="text-rose-600 hover:text-rose-700 font-bold hover:underline">female fertility challenges</Link> or need a proper assessment for <Link href="/male-infertility-treatment-in-lajpat-nagar-delhi" className="text-rose-600 hover:text-rose-700 font-bold hover:underline">male infertility factors</Link>, Delhi has become a top global destination for reproductive care because it brings together modern lab infrastructure and ethical medical guidelines.
        </p>
        <p className="mb-4">
          We know that stepping into a fertility clinic for the first time brings a mix of hope and anxiety. Luckily, modern diagnostics are extremely detailed today, which means we can pinpoint the root cause of the delay much faster and plan out a gentle, highly targeted protocol rather than relying on guesswork.
        </p>
        <p className="mb-8">
          Finding a <Link href="/about" className="text-rose-600 hover:text-rose-700 font-bold hover:underline">fertility clinic in Delhi</Link> that fits your needs is all about looking for clear communication, honest prices with zero hidden fees, and a supportive team that stands by you from day one until you hold your healthy baby.
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choosing a Leading IVF Centre in Delhi Makes a Difference</h3>
        <p className="mb-4">
          Choosing a reputable clinic in Delhi gives you the security of full compliance with the national Assisted Reproductive Technology (Regulation) Act. This law guarantees that your treatment is legal, safe, and handled under strict ethical codes. You also benefit from high-end, clean-room laboratories that match global standards, so your samples are kept completely safe.
        </p>
        <p className="mb-6">
          Couples from all over India and abroad choose Delhi because the city offers advanced diagnostics and high-precision lab techniques at very sensible, realistic prices. Clinics here use high-definition scans, simple tubal checks, and detailed embryo monitoring systems. By checking both male and female factors thoroughly right at the start, we make sure we only suggest treatments that your body actually needs.
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full text-left border-collapse border border-gray-300 shadow-sm rounded-lg overflow-hidden">
            <thead className="bg-emerald-600 text-white">
              <tr>
                <th className="p-4 border border-emerald-700 font-semibold w-1/3">Advantage Category</th>
                <th className="p-4 border border-emerald-700 font-semibold">Specific Benefits in Delhi Clinics</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr>
                <td className="p-4 border border-gray-300 font-medium">Regulatory Compliance</td>
                <td className="p-4 border border-gray-300">Strict adherence to the ART Act for legal protection and safety.</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-4 border border-gray-300 font-medium">Technological Edge</td>
                <td className="p-4 border border-gray-300">Advanced laser hatching and safe genetic testing facilities.</td>
              </tr>
              <tr>
                <td className="p-4 border border-gray-300 font-medium">Infrastructure</td>
                <td className="p-4 border border-gray-300">Clean room embryology setups with certified HEPA filtration.</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-4 border border-gray-300 font-medium">Accessibility</td>
                <td className="p-4 border border-gray-300">Close to international airports and central metro junctions.</td>
              </tr>
              <tr>
                <td className="p-4 border border-gray-300 font-medium">Comprehensive Care</td>
                <td className="p-4 border border-gray-300">Integrated medical tracking, custom diets, and mental health counseling.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-8">
          Selecting a clinic in a well-connected neighborhood makes a big difference during active treatment cycles. With multiple options situated in prime South Delhi areas like Lajpat Nagar, couples can easily attend their routine <Link href="/follicular-monitoring-in-lajpat-nagar-delhi" className="text-rose-600 hover:text-rose-700 font-bold hover:underline">follicular monitoring scans</Link> without experiencing long, tiring commutes. This local convenience reduces treatment stress significantly, helping you focus entirely on your path to parenthood.
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mb-4">IVF Treatment Process Explained Simply</h3>
        <p className="mb-4">
          The basic idea behind In Vitro Fertilization (IVF) is actually very simple to grasp when you break it down. At our <strong>IVF centre in Delhi</strong>, we gently collect eggs and sperm, fertilize them under perfect laboratory conditions to grow a healthy embryo, and then place it back in the uterus.
        </p>
        <p className="mb-4">
          To keep everything stress-free and easy to follow, we divide your cycle into simple steps. First comes ovarian stimulation. While your body typically grows just one egg naturally each month, we use gentle medications for about 8 to 14 days to help a few eggs mature safely.
        </p>
        <p className="mb-4">
          During this time, you'll drop by our IVF centre in Delhi for quick, simple ultrasound checks so we can monitor the growth of the follicles and adjust your medicine doses. Once the eggs reach the perfect size, we schedule the collection.
        </p>
        <p className="mb-4">
          Collecting the eggs is a very quick and entirely painless step. You'll be under light, relaxing sedation for about 15 to 20 minutes, and we use a slim ultrasound guide to harvest the mature eggs safely. You can rest for a little bit and head home the exact same day.
        </p>
        <p className="mb-4">
          On that same morning, a fresh semen sample is prepared in our laboratory to select the healthiest, most active sperm. Next, we join the eggs and sperm in the incubator for fertilization.
        </p>
        <p className="mb-4">
          If sperm count or motility is very low, we use <Link href="/icsi" className="text-rose-600 hover:text-rose-700 font-bold hover:underline">ICSI (Intracytoplasmic Sperm Injection)</Link> to gently inject a single, healthy sperm directly into each egg. This boosts the fertilization success rates. We then watch the embryos develop inside our incubators for 3 to 5 days.
        </p>
        <p className="mb-8">
          The last step is the embryo transfer. We select the strongest embryo and place it gently inside the uterus using a soft, thin catheter. It takes just a couple of minutes and feels exactly like a routine checkup. A simple blood test two weeks later will tell us if it worked, and we'll be guiding you every step of the way.
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mb-4">The Hub of Excellence: IVF Centre in South Delhi & Lajpat Nagar</h3>
        <p className="mb-4">
          South Delhi is famous for having some of the country's best medical facilities, providing a calm, highly professional clinical environment that helps lower your stress levels. Deciding on an <strong>IVF centre in South Delhi</strong> means you get access to expert embryologists and high-end labs that are very easy to reach from Noida, Gurugram, or Faridabad.
        </p>
        <p className="mb-6">
          Within this area, picking an <strong>IVF centre in Lajpat Nagar</strong> makes your daily logistics incredibly simple. Our clinic sits right on the Ring Road near major metro links, so you can easily drop in for morning scans and avoid messy Delhi traffic. Plus, pharmacies and labs are right here, letting you collect blood test reports and medicines in just a few minutes.
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full text-left border-collapse border border-gray-300 shadow-sm rounded-lg overflow-hidden">
            <thead className="bg-emerald-600 text-white">
              <tr>
                <th className="p-4 border border-emerald-700 font-semibold w-1/3">Location Feature</th>
                <th className="p-4 border border-emerald-700 font-semibold">Advantage for the Patient</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr>
                <td className="p-4 border border-gray-300 font-medium">Metro Connectivity</td>
                <td className="p-4 border border-gray-300">Fast access via Pink and Violet metro lines for quick monitoring.</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-4 border border-gray-300 font-medium">Ring Road Accessibility</td>
                <td className="p-4 border border-gray-300">Smooth road connectivity with ample parking and easy cab drop-offs.</td>
              </tr>
              <tr>
                <td className="p-4 border border-gray-300 font-medium">Professional Hub</td>
                <td className="p-4 border border-gray-300">Concentration of leading fertility specialists in a highly secure area.</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-4 border border-gray-300 font-medium">Modern Infrastructure</td>
                <td className="p-4 border border-gray-300">Premium clinics with advanced clean room air handling setups.</td>
              </tr>
              <tr>
                <td className="p-4 border border-gray-300 font-medium">Local Amenities</td>
                <td className="p-4 border border-gray-300">Pharmacies stocking specific hormone injections and comfortable local stays.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-8">
          Picking a clinic in Lajpat Nagar makes it much easier to fit your treatment visits into a busy daily schedule. Whether you're looking into options like <Link href="/donor-services-in-lajpat-nagar-delhi" className="text-rose-600 hover:text-rose-700 font-bold hover:underline">donor egg services</Link> or need a path using legal <Link href="/surrogacy-treatment-in-lajpat-nagar-delhi" className="text-rose-600 hover:text-rose-700 font-bold hover:underline">gestational surrogacy solutions</Link>, we work hard to keep wait times low so your scans, consults, and pharmacy runs are fast and stress-free.
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mb-4">Understanding Our IVF Success Rates in Delhi</h3>
        <p className="mb-4">
          It's only natural that your first question is about success rates. But it's really important to know that these numbers depend a lot on your age, general health, and unique medical background. A top-rated fertility clinic Delhi usually sees success in about 35% to 40% of standard cycles, and those numbers go up quite a bit when using donor programs.
        </p>
        <p className="mb-6">
          Age has a massive impact on the quality of your eggs. For women under 35, the chance of success at a trusted IVF centre in Delhi often reaches 50% to 60% per cycle. While success rates naturally shift as we get older, we use modern tools like blastocyst culture and PGT-A genetic checks to give you the absolute best odds. Remember, cumulative success often builds up over a couple of cycles as we learn exactly how your body responds.
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full text-left border-collapse border border-gray-300 shadow-sm rounded-lg overflow-hidden">
            <thead className="bg-emerald-600 text-white">
              <tr>
                <th className="p-4 border border-emerald-700 font-semibold w-1/3">Age Category</th>
                <th className="p-4 border border-emerald-700 font-semibold w-1/3">Success Rate (Own Eggs)</th>
                <th className="p-4 border border-emerald-700 font-semibold w-1/3">Success Rate (Donor Eggs)</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr>
                <td className="p-4 border border-gray-300 font-medium">Under 35 Years</td>
                <td className="p-4 border border-gray-300">50% – 60%</td>
                <td className="p-4 border border-gray-300 text-center font-semibold text-emerald-600" rowSpan={4} style={{ verticalAlign: 'middle' }}>60% – 70%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-4 border border-gray-300 font-medium">35 – 37 Years</td>
                <td className="p-4 border border-gray-300">40% – 50%</td>
              </tr>
              <tr>
                <td className="p-4 border border-gray-300 font-medium">38 – 40 Years</td>
                <td className="p-4 border border-gray-300">30% – 40%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-4 border border-gray-300 font-medium">Over 40 Years</td>
                <td className="p-4 border border-gray-300">10% – 20%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-8">
          The <strong>best IVF centre in Delhi</strong> is one that will be completely open and honest with you about these numbers. We believe in sharing realistic, science-backed guidance instead of making empty promises. Every patient gets a customized evaluation based on their personal test reports so you can make decisions with total confidence. You can read our real patient feedback on the <a href="https://share.google/1tIS2ANVnK0VHQa2V" target="_blank" rel="noopener noreferrer" className="text-rose-600 hover:text-rose-700 font-bold hover:underline">Pravi IVF Google Reviews</a> page or read our <Link href="/success-stories" className="text-rose-600 hover:text-rose-700 font-bold hover:underline font-semibold">IVF success stories</Link> to see how we've helped other couples build their families.
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mb-4">Meet Our Fertility Experts Lajpat Nagar, Delhi</h3>
        <p className="mb-4">
          A fertility clinic is only as good as the people working inside it. When choosing a <Link href="/doctors" className="text-rose-600 hover:text-rose-700 font-bold hover:underline">fertility clinic Delhi</Link>, you are partnering with expert doctors, skilled embryologists, and kind clinical coordinators who have spent decades helping families grow.
        </p>
        <p className="mb-6">
          A dedicated <Link href="/doctors" className="text-rose-600 hover:text-rose-700 font-bold hover:underline">IVF specialist Delhi</Link> will personally take charge of your whole treatment cycle. Our doctors are members of top national societies like the Indian Fertility Society, keeping their methods completely up to date with global standards. In the lab, our certified embryologists watch over your embryos in sterile clean rooms with perfect temperature and air quality control. To see our lab setup and guides, drop by the <a href="https://www.youtube.com/@ivfcentre1Msubscriber" target="_blank" rel="noopener noreferrer" className="text-rose-600 hover:text-rose-700 font-bold hover:underline">Pravi IVF official YouTube channel</a>.
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full text-left border-collapse border border-gray-300 shadow-sm rounded-lg overflow-hidden">
            <thead className="bg-emerald-600 text-white">
              <tr>
                <th className="p-4 border border-emerald-700 font-semibold w-1/3">Expert Role</th>
                <th className="p-4 border border-emerald-700 font-semibold">Key Responsibilities and Credentials</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr>
                <td className="p-4 border border-gray-300 font-medium">Senior IVF Specialist</td>
                <td className="p-4 border border-gray-300">Designs custom stimulation protocols; MD/DNB in Obstetrics &amp; Gynecology.</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-4 border border-gray-300 font-medium">Chief Embryologist</td>
                <td className="p-4 border border-gray-300">Oversees egg fertilization, ICSI cycles, and vitrification; ESHRE/IFS certified.</td>
              </tr>
              <tr>
                <td className="p-4 border border-gray-300 font-medium">Fertility Counselor</td>
                <td className="p-4 border border-gray-300">Offers emotional support and custom stress-reduction strategies.</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-4 border border-gray-300 font-medium">Andrologist</td>
                <td className="p-4 border border-gray-300">Focuses on male fertility health, semen checks, and advanced sperm recovery.</td>
              </tr>
              <tr>
                <td className="p-4 border border-gray-300 font-medium">Nursing Staff</td>
                <td className="p-4 border border-gray-300">Manages daily tracking, hormone dosing education, and patient care.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-8">
          We work hard to build real relationships with our patients through straightforward, open talk. You'll always have plenty of time during your clinic appointments to ask questions, review your test papers, and discuss options in a completely relaxed, peaceful setting.
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mb-4">A Patient-Centric Care Approach</h3>
        <p className="mb-4">
          To us, you are a hopeful family with a unique story, never just a name on a medical chart. We understand how overwhelming fertility tests can feel, and that's why we've made our clinic a warm, peaceful space where you can feel fully relaxed and looked after.
        </p>
        <p className="mb-4">
          True, kind care is at the center of everything we do here. Our nurses and counselors are always ready to have a chat to help you handle the emotional ups and downs of a cycle. We also give you easy tips on lifestyle, food, and lowering stress, and share regular updates on the <a href="https://www.instagram.com/ivfpravi/" target="_blank" rel="noopener noreferrer" className="text-rose-600 hover:text-rose-700 font-bold hover:underline">Pravi IVF Instagram page</a>.
        </p>
        <p className="mb-8">
          Being fully transparent is how we build trust with you. We give you clear, completely itemized cost sheets before you start any step of your treatment, so there are never any unexpected bills or surprises. By mixing high-quality medical science with honest, kind support, we set you up for the best possible success.
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mb-4">Cost of IVF Treatment in Delhi: Transparency and Options</h3>
        <p className="mb-4">
          Figuring out the financial side of fertility treatment is a massive part of planning your journey. The <strong>cost of IVF treatment in Delhi</strong> is highly competitive worldwide, making top-tier embryology much more affordable for couples. On average, a standard cycle in Delhi costs between ₹100,000 and ₹250,000, depending on the specific medicines and lab tools your body needs.
        </p>
        <p className="mb-6">
          We make absolutely sure you know what's included in your package right from the very first day. Our standard treatment package includes doctor consults, ultrasound tracking, anesthesia, egg collection, and the actual embryo transfer. If we need to add advanced checks like ICSI or embryo freezing, we will write down all those options and prices for you ahead of time.
        </p>
        <p className="mb-12">
          To help make your treatment stress-free and completely manageable, we offer simple, interest-free monthly installment plans (EMIs). This lets you split the treatment costs into small, easy steps so that budget worries never hold you back from your dreams.
        </p>

        <h3 className="text-3xl font-bold text-gray-900 mb-8 border-b pb-4">Frequently Asked Questions (FAQs)</h3>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
