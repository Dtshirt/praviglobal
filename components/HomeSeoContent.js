'use client';

import React, { useState } from 'react';

const faqs = [
  {
    question: "How long does a typical IVF cycle take?",
    answer: "A single IVF cycle, from the start of medication to the pregnancy test, usually takes about 6 to 8 weeks. The stimulation phase of the ovaries typically takes 8 to 14 days of daily injections."
  },
  {
    question: "Is the IVF process painful?",
    answer: "The most clinical part of the process, egg retrieval, is performed under light sedation, so you will not feel any pain during the procedure. You may feel some mild cramping or bloating for a day or two afterward, which can be treated with simple rest and mild pain relief."
  },
  {
    question: "When should I consider seeing an IVF specialist in Delhi?",
    answer: "Generally, it is recommended to see a specialist if you have been trying to conceive for a year without success. However, if you are over 35, it is better to seek help after six months, as early intervention can lead to much better success rates."
  },
  {
    question: "What is the difference between IVF and ICSI?",
    answer: "In traditional IVF, many sperm are placed near the egg in a dish to allow fertilisation to happen naturally. In ICSI (Intracytoplasmic Sperm Injection), a specialist chooses a single healthy sperm and injects it directly into the egg, which is very helpful if there are concerns about sperm count or movement."
  },
  {
    question: "Can I continue working during my IVF treatment?",
    answer: "Yes, most patients can continue their normal daily activities and work throughout the process. You may only need to take a day or two off for the egg retrieval procedure to allow yourself time to rest and recover from the sedation."
  },
  {
    question: "Is there a limit to how many times I can try IVF?",
    answer: "Most medical experts agree that 3 to 4 attempts are reasonable, as the cumulative success rate increases with each try. Your doctor will discuss the best path forward based on how your body responds to each cycle."
  },
  {
    question: "Does IVF lead to more multiple pregnancies (twins or triplets)?",
    answer: "Modern clinics often recommend a single embryo transfer to reduce the risk of twins or triplets. However, transferring more than one embryo can increase the chances of multiple births, a decision that you and your doctor will make together."
  },
  {
    question: "Are there any side effects from the hormone injections?",
    answer: "Some patients may experience mild side effects like bloating, breast tenderness, or feeling a bit more emotional than usual. These are temporary and usually disappear shortly after the cycle is completed."
  },
  {
    question: "How do I choose the best IVF centre in Delhi for me?",
    answer: "Look for a clinic with experienced doctors, high success rates, transparent pricing, and a supportive environment where you feel comfortable. Reading patient reviews and visiting the clinic for a consultation can also help you make the right choice."
  },
  {
    question: "Is the embryo transfer procedure difficult?",
    answer: "No, the embryo transfer is very simple and does not require anaesthesia. It feels similar to a routine pelvic check-up and only takes about 5 to 10 minutes to complete."
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
        <h4 className="text-xl font-semibold text-blue-800 pr-4">{question}</h4>
        <span className="text-blue-600 flex-shrink-0">
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
      
      {/* Animated collapse container */}
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-blue prose-lg  text-gray-700">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          IVF Centre in Delhi: A Comprehensive Guide to Advanced Fertility Care and Your Path to Parenthood
        </h2>
        <p className="mb-4">
          The journey toward starting a family is one of the most significant and emotional chapters in a person’s life. For many couples facing challenges in conceiving naturally, the search for a reliable <strong>IVF centre in Delhi</strong> becomes a search for hope, medical excellence, and a supportive hand to hold. Infertility currently impacts approximately one in six couples globally, making it a widespread concern that requires not just technical skill but a deep sense of empathy and understanding. Delhi has established itself as a leading destination for fertility treatments, offering a unique combination of world-class technology, experienced specialists, and compassionate care environments that cater to both domestic and international patients.
        </p>
        <p className="mb-8">
          The decision to seek help at an IVF centre in Delhi often comes after months or years of trying, and it is natural to feel a mix of excitement and anxiety. Modern reproductive medicine has advanced to a point where many barriers to pregnancy can be overcome through personalised protocols and state-of-the-art laboratory techniques. Choosing the right fertility clinic in Delhi involves looking beyond just numbers; it involves finding a team that prioritises transparency, respects the emotional toll of the process, and provides a clear, guided path from the first consultation to the moment a baby is held in your arms.
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choosing a Leading IVF Centre in Delhi Makes a Difference</h3>
        <p className="mb-4">
          Selecting an IVF centre in Delhi provides couples with access to a robust medical infrastructure that is regulated by the Assisted Reproductive Technology (Regulation) Act, 2021. This legal framework ensures that clinics maintain high standards of safety, ethics, and transparency, protecting the interests of every patient who walks through their doors. The concentration of clinical excellence in the capital means that patients benefit from a competitive environment where clinics constantly upgrade their technology and refine their patient care strategies to provide the best possible outcomes.
        </p>
        <p className="mb-6">
          Delhi is recognised as a global hub for medical tourism because it offers advanced fertility solutions at a fraction of the cost found in many other countries, without compromising on the quality of medical equipment or the skill of the doctors. Many clinics in the city are equipped with high-end diagnostic tools such as 4D ultrasounds, hysteroscopy, and genetic testing facilities that allow for a thorough investigation of both male and female fertility factors. This comprehensive diagnostic approach ensures that the treatment plan is not a "one-size-fits-all" solution but is instead tailored to the specific biological needs of each couple.
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full text-left border-collapse border border-gray-300 shadow-sm rounded-lg overflow-hidden">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="p-4 border border-blue-700 font-semibold w-1/3">Advantage Category</th>
                <th className="p-4 border border-blue-700 font-semibold">Specific Benefits in Delhi Clinics</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr>
                <td className="p-4 border border-gray-300 font-medium">Regulatory Compliance</td>
                <td className="p-4 border border-gray-300">Adherence to the ART Act 2021 for ethical and safe practices.</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-4 border border-gray-300 font-medium">Technological Edge</td>
                <td className="p-4 border border-gray-300">Use of AI-driven embryo selection and advanced genetic screening (PGT-A).</td>
              </tr>
              <tr>
                <td className="p-4 border border-gray-300 font-medium">Infrastructure</td>
                <td className="p-4 border border-gray-300">State-of-the-art cleanrooms and international standard embryology labs.</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-4 border border-gray-300 font-medium">Accessibility</td>
                <td className="p-4 border border-gray-300">Proximity to international airports and excellent local metro connectivity.</td>
              </tr>
              <tr>
                <td className="p-4 border border-gray-300 font-medium">Comprehensive Care</td>
                <td className="p-4 border border-gray-300">Integration of medical, nutritional, and psychological support services.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-8">
          The presence of the best IVF centre in Delhi options across various neighbourhoods allows patients to choose a facility that fits their lifestyle and travel needs. Whether it is the premium infrastructure in South Delhi or the highly accessible clinics in Lajpat Nagar, the city provides a wealth of options that combine medical authority with a patient-first philosophy. This focus on quality and accessibility has led to thousands of successful pregnancies, helping families from across the globe realise their dreams.
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mb-4">IVF Treatment Process Explained Simply</h3>
        <p className="mb-4">
          The process of In Vitro Fertilisation (IVF) might seem complex, but at its heart, it is a way to give nature a helping hand. At an <strong>IVF centre in Delhi</strong>, the medical team works to join an egg and sperm in a controlled lab setting, creating an embryo that can then be placed safely into the mother's womb. To make this journey easier to understand, it can be helpful to view it as a series of simple steps designed to maximise the chances of a healthy pregnancy.
        </p>
        <p className="mb-4">
          The first step is often called 'ovarian stimulation'. In a normal month, a woman’s body usually releases just one egg. To increase the chances of success, doctors use gentle hormone medications for about 8 to 14 days to help the ovaries produce more mature eggs. During this time, the patient visits the IVF centre in Delhi for quick monitoring appointments. These visits use simple ultrasound scans and blood tests to check how the eggs are growing, ensuring the medication is working perfectly for the patient’s body.
        </p>
        <p className="mb-4">
          Once the eggs are ready, a small procedure called 'egg retrieval' is performed. This is a quick and painless process because it is done while the patient is under light sedation or a short sleep. A specialist uses a very thin needle, guided by an ultrasound, to gently collect the eggs from the ovaries. The procedure usually takes only 15 to 20 minutes, and most people can go home to rest after just an hour or two. On the same day, the father provides a sperm sample, which is then carefully cleaned and prepared in the lab to select the strongest and healthiest swimmers.
        </p>
        <p className="mb-4">
          The third stage is where the "magic" of science happens in the lab. The collected eggs and sperm are combined. In some cases, a single healthy sperm is injected directly into an egg using a method called ICSI (Intracytoplasmic Sperm Injection), which is very helpful if the sperm needs a little extra help to fertilise the egg. The resulting embryos are kept in a special incubator that acts just like a mother’s womb, providing the perfect temperature and nutrients for them to grow for 3 to 5 days.
        </p>
        <p className="mb-8">
          The final and most exciting step is the embryo transfer. The doctor selects the healthiest embryo and gently places it into the uterus using a very thin, flexible tube. This part of the process is very simple and feels much like a regular check-up or a Pap smear. After the transfer, there is a short wait of about two weeks before a simple blood test confirms if the pregnancy has begun. Throughout these steps, the team at the IVF centre in Delhi provides constant support, answering every question and making sure the patient feels comfortable and informed.
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mb-4">The Hub of Excellence: IVF Centre in South Delhi & Lajpat Nagar</h3>
        <p className="mb-4">
          South Delhi has emerged as a premier hub for reproductive medicine, known for its concentration of top-tier facilities and world-renowned specialists. Many couples prefer an <strong>IVF centre in South Delhi</strong> because the area combines high-end medical technology with a peaceful and professional environment that helps reduce the stress of treatment. The region is easily accessible for those living in Delhi as well as neighbouring cities like Gurugram and Noida, making it a convenient choice for busy professionals and those travelling from out of town.
        </p>
        <p className="mb-6">
          Within this region, an <strong>IVF centre in Lajpat Nagar</strong> offers specific advantages related to its strategic location on the Ring Road. Being well-connected by the Delhi Metro—with clinics often located near recognisable landmarks like Metro Pillar Number 9—ensures that patients can attend their frequent monitoring appointments without the stress of long or difficult commutes. This area is home to several award-winning clinics, such as Birla Fertility & IVF and Indira IVF, which are known for their high success rates and transparent approach to care.
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full text-left border-collapse border border-gray-300 shadow-sm rounded-lg overflow-hidden">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="p-4 border border-blue-700 font-semibold w-1/3">Location Feature</th>
                <th className="p-4 border border-blue-700 font-semibold">Advantage for the Patient</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr>
                <td className="p-4 border border-gray-300 font-medium">Metro Connectivity</td>
                <td className="p-4 border border-gray-300">Easy access via the Pink and Violet lines for daily visits.</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-4 border border-gray-300 font-medium">Ring Road Accessibility</td>
                <td className="p-4 border border-gray-300">High visibility and easy road access for patients from across the NCR.</td>
              </tr>
              <tr>
                <td className="p-4 border border-gray-300 font-medium">Micro-Hub Status</td>
                <td className="p-4 border border-gray-300">Multiple top clinics in one area allow for easy second opinions and consultations.</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-4 border border-gray-300 font-medium">Modern Infrastructure</td>
                <td className="p-4 border border-gray-300">New buildings with wheelchair access and advanced laboratory suites.</td>
              </tr>
              <tr>
                <td className="p-4 border border-gray-300 font-medium">Local Amenities</td>
                <td className="p-4 border border-gray-300">Proximity to pharmacies, diagnostic labs, and comfortable stay options for out-of-towners.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-8">
          Choosing a clinic in these areas also means benefiting from a neighbourhood that supports the medical journey. From specialised pharmacies that stock the necessary fertility medications to diagnostic centres that can provide quick test results, the ecosystem of an IVF centre in Lajpat Nagar is designed to make the process as smooth as possible. This integration of convenience and clinical expertise is why South Delhi remains the first choice for many families starting their IVF journey.
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mb-4">Understanding Our IVF Success Rates</h3>
        <p className="mb-4">
          Success rates are often the first thing people ask about when visiting an IVF centre in Delhi. It is important to know that while numbers can provide a sense of hope, they are influenced by many personal factors such as age, health history, and the cause of infertility. On average, a high-quality fertility clinic Delhi will see a success rate of 35% to 40% per cycle, but these numbers can be much higher for younger patients or those using donor eggs.
        </p>
        <p className="mb-6">
          Age is a major factor because it affects the quality of a woman's eggs. For women under 35, success rates at a top IVF centre in Delhi can often reach 50% to 60% per attempt. As a person ages, the numbers may naturally decrease, but this is where advanced science comes in. By using techniques like PGT-A (genetic testing of embryos) or donor programs, the team can help increase the chances of a healthy pregnancy even for older patients. It is also helpful to remember that success often builds over time; many couples who do not conceive in the first try are successful in their second or third attempt as the doctor refines the treatment plan.
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full text-left border-collapse border border-gray-300 shadow-sm rounded-lg overflow-hidden">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="p-4 border border-blue-700 font-semibold w-1/3">Age Category</th>
                <th className="p-4 border border-blue-700 font-semibold w-1/3">Success Rate (Own Eggs)</th>
                <th className="p-4 border border-blue-700 font-semibold w-1/3">Success Rate (Donor Eggs)</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr>
                <td className="p-4 border border-gray-300 font-medium">Under 35 Years</td>
                <td className="p-4 border border-gray-300">50% – 60%</td>
                <td className="p-4 border border-gray-300 text-center font-semibold text-blue-600" rowSpan={4} style={{ verticalAlign: 'middle' }}>60% – 70%</td>
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
          The <strong>best IVF centre in Delhi</strong> will always be honest about these numbers. Transparency is a key part of building trust, and a good clinic will provide a realistic outlook based on your specific medical reports rather than making over-promises. Success is not just a number on a page; it is the result of a dedicated team of embryologists using the latest lab technology to ensure every embryo has the best possible chance to grow.
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mb-4">Meet Our Fertility Experts</h3>
        <p className="mb-4">
          The heart of any IVF centre in Delhi is its team of experts. These are the doctors, embryologists, and counselors who work together to turn a dream into reality. When you choose a fertility clinic Delhi, you are putting your trust in specialists who often have decades of experience and certifications from prestigious international bodies like the European Society of Human Reproduction and Embryology (ESHRE) or the Indian Fertility Society (IFS).
        </p>
        <p className="mb-6">
          A senior <strong>IVF specialist Delhi</strong> will lead the medical team, creating a personalized roadmap for your treatment. These doctors, such as Dr. M. Gouri Devi or Dr. K.D. Nayar, are recognized leaders in the field, known for their skill in handling complex cases and their commitment to ethical care. Behind the scenes in the lab, highly trained embryologists act as "first nannies" to the embryos, monitoring their growth in a safe and sterile environment. This combination of clinical authority and laboratory precision is what sets the best clinics apart.
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full text-left border-collapse border border-gray-300 shadow-sm rounded-lg overflow-hidden">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="p-4 border border-blue-700 font-semibold w-1/3">Expert Role</th>
                <th className="p-4 border border-blue-700 font-semibold">Key Responsibilities and Credentials</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr>
                <td className="p-4 border border-gray-300 font-medium">Senior IVF Specialist</td>
                <td className="p-4 border border-gray-300">Leads clinical strategy; MD/DNB in Obs &amp; Gynae; Member of IFS/ISAR.</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-4 border border-gray-300 font-medium">Chief Embryologist</td>
                <td className="p-4 border border-gray-300">Manages the lab environment; ESHRE/IFS certified; expert in ICSI and Vitrification.</td>
              </tr>
              <tr>
                <td className="p-4 border border-gray-300 font-medium">Fertility Counselor</td>
                <td className="p-4 border border-gray-300">Provides emotional support and stress management techniques.</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-4 border border-gray-300 font-medium">Andrologist</td>
                <td className="p-4 border border-gray-300">Focuses on male fertility health and specialized sperm retrieval.</td>
              </tr>
              <tr>
                <td className="p-4 border border-gray-300 font-medium">Nursing Staff</td>
                <td className="p-4 border border-gray-300">Assists with daily hormone injections and patient education.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-8">
          The relationship between the patient and the IVF specialist Delhi is built on communication. A top-rated clinic ensures that you have enough time during consultations to ask every question and express every concern. This human connection is vital, as it helps reduce the feelings of isolation that can sometimes come with fertility struggles. Knowing that you are in the hands of experts who truly care about your success can make the entire journey feel much more manageable.
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mb-4">A Patient-Centric Care Approach</h3>
        <p className="mb-4">
          At the best IVF centre in Delhi, the focus is always on the person, not just the procedure. We understand that infertility can be an emotional rollercoaster, and we believe that emotional support is just as important as medical treatment. A patient-centric approach means providing a warm, welcoming environment where you feel like a member of a family rather than just a number. This philosophy is reflected in the way clinics like Ridge IVF or Birla Fertility handle every interaction, from the first phone call to the final check-up.
        </p>
        <p className="mb-4">
          Empathy is at the core of our care. Many patients report that the kind words of a nurse or the "patient hearing" given by a doctor made all the difference during their most stressful moments. Leading clinics in South Delhi and Lajpat Nagar offer integrated counselling services to help couples manage the stress and anxiety that can accompany fertility treatments. These counsellors use techniques like mindfulness and rhythmic breathing to help you stay calm and positive throughout the process.
        </p>
        <p className="mb-8">
          Transparency is another vital part of a patient-centric approach. An IVF centre in Delhi that values trust will always provide a clear and detailed breakdown of costs and procedures before the treatment begins. This prevents any unwanted surprises and allows you to focus entirely on your health and well-being. We believe that by providing high-quality medical care in a supportive and honest environment, we give our patients the best possible chance to succeed and find the joy of parenthood.
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mb-4">Cost of IVF Treatment in Delhi: Transparency and Options</h3>
        <p className="mb-4">
          One of the most common questions for any couple is about the financial investment required for their journey. The <strong>cost of IVF treatment in Delhi</strong> is known for being among the most competitive in the world, making it accessible to many families who might find treatment elsewhere too expensive. Generally, a single cycle of IVF in Delhi can range from ₹100,000 to ₹250,000, depending on the specific medical needs and the complexity of the case.
        </p>
        <p className="mb-6">
          It is important to understand what is included in these costs. A basic IVF package usually covers the initial consultations, monitoring scans, the egg retrieval procedure, and the final embryo transfer. However, some cases may require additional services such as specialised hormone injections, ICSI for male factor infertility, or embryo freezing for future use. A trustworthy IVF centre in Delhi will provide a written estimate that explains all these components clearly during your first visit.
        </p>

        <p className="mb-12">
          To help manage these costs, many clinics in the South Delhi and Lajpat Nagar hubs offer flexible payment options. These include 0% interest EMI (Equated Monthly Installment) plans, which allow you to spread the cost of the treatment over several months without any extra interest charges. By making the cost of the best IVF centre in Delhi more manageable, these financial plans ensure that high-quality fertility care is within reach for more couples ready to start their families.
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
