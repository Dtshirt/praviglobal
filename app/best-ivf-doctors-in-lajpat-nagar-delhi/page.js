import Image from 'next/image';
import Link from 'next/link';
import { Award, GraduationCap, Briefcase, Star, ArrowRight } from 'lucide-react';
import { doctors } from '@/lib/data';
import DoctorCard from '@/components/DoctorCard';

export default function DoctorsPage() {
  const physicianSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": "Pravi Global IVF Polyclinic",
    "medicalSpecialty": "Reproductive Medicine",
    "employee": doctors.map(doctor => ({
      "@type": "Physician",
      "name": doctor.name,
      "medicalSpecialty": doctor.specialty,
      "description": doctor.qualification,
      "image": `https://praviglobalivf.com${doctor.image}`,
      "affiliation": {
        "@type": "MedicalOrganization",
        "name": "Pravi Global IVF Polyclinic"
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianSchema) }}
      />
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-blue-700 to-blue-955 text-white overflow-hidden" style={{ backgroundImage: 'url("/images/ivf-treatment.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className='w-full h-full top-0 absolute z-10 bg-gradient-to-r from-blue-900/80 to-blue-955/80' />
        <div className="absolute inset-0 opacity-15">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"1\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2pv4h2v-4pv-2h-4zm0-30V0h-2v4h-4v2pv4h2V6pV4h-4zM6 34v-4pv4H0v2pv4h2v-4pv-2H6zM6 4V0pv4H0v2pv4h2V6pV4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
          }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-[#64b5f6] font-bold text-xs tracking-widest uppercase mb-4 block">Pravi Medical Leadership</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            Best IVF Doctors in Lajpat Nagar Delhi
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed font-light">
            Meet the clinical team dedicated to making your journey to parenthood successful and transparent. Guided by senior specialists with over 18 years of clinical experience, we provide compassionate and ethical care.
          </p>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-20 bg-white hidden sm:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {doctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Doctor Profiles */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {doctors.map((doctor, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={doctor.id}
                  className={`grid lg:grid-cols-5 gap-8 items-start ${isEven ? '' : 'lg:grid-flow-dense'}`}
                >
                  <div className={`lg:col-span-2 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="sticky top-24">
                      <div className="relative h-112 rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                          src={doctor.image}
                          alt={doctor.name}
                          width={500}
                          height={400}
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                          <div className="flex items-center mb-2">
                            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400 mr-1" />
                            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400 mr-1" />
                            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400 mr-1" />
                            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400 mr-1" />
                            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                          </div>
                          <p className="text-sm text-blue-100">Patient Rating</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={`lg:col-span-3 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="bg-white p-8 rounded-2xl shadow-xl">
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">
                        {doctor.name}
                      </h2>
                      <p className="text-blue-600 text-xl font-semibold mb-4">
                        {doctor.specialty}
                      </p>

                      <div className="grid md:grid-cols-3 gap-4 mb-6">
                        <div className="flex items-center space-x-3 bg-blue-50 p-4 rounded-lg">
                          <GraduationCap className="h-6 w-6 text-blue-600 flex-shrink-0" />
                          <div>
                            <div className="text-xs text-gray-600">Qualification</div>
                            <div className="font-semibold text-sm">{doctor.qualification.split(',')[0]},{doctor.qualification.split(',')[1]}</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3 bg-blue-50 p-4 rounded-lg">
                          <Briefcase className="h-6 w-6 text-blue-600 flex-shrink-0" />
                          <div>
                            <div className="text-xs text-gray-600">Experience</div>
                            <div className="font-semibold text-sm">{doctor.experience}</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3 bg-blue-50 p-4 rounded-lg">
                          <Award className="h-6 w-6 text-blue-600 flex-shrink-0" />
                          <div>
                            <div className="text-xs text-gray-600">Recognition</div>
                            <div className="font-semibold text-sm">Certified</div>
                          </div>
                        </div>
                      </div>

                      <div className="mb-6">
                        <p className="font-semibold text-gray-900 mb-2">Qualifications</p>
                        <p className="text-gray-600">{doctor.qualification}</p>
                      </div>

                      <div className="mb-6">
                        <p className="font-semibold text-gray-900 mb-3">About</p>
                        <p
                          className="text-gray-600 leading-relaxed font-light"
                          dangerouslySetInnerHTML={{ __html: doctor.bio }}
                        />
                      </div>

                      <div className="mb-6">
                        <p className="font-semibold text-gray-900 mb-3">Areas of Expertise</p>
                        <div className="grid md:grid-cols-2 gap-3">
                          {doctor.specialties.map((specialty, sIdx) => (
                            <div key={sIdx} className="flex items-center">
                              <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                              <span className="text-gray-700">{specialty}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <Link href="/book-appointment" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold text-sm inline-flex items-center transition-all hover:scale-103" >
                        Book Consultation <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Approach Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-bold uppercase tracking-wider text-xs block mb-2">OUR APPROACH</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
              Collaborative Care Team
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto text-base font-light">
              Your fertility treatments are managed by an expert team working together for your success
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: 'Fertility Specialists', desc: 'Expert medical consultations and personalized cycle plans.' },
              { title: 'Embryologists', desc: 'State-of-the-art laboratory work to ensure embryo safety.' },
              { title: 'Counselors', desc: 'Dedicated emotional support at every milestone of your treatment.' },
              { title: 'Nurses', desc: 'Compassionate, safe clinical care throughout your procedures.' }
            ].map((role, idx) => (
              <div key={idx} className="text-center p-8 bg-gradient-to-br from-blue-50/50 to-white rounded-xl shadow-lg border border-blue-100/10">
                <div className="bg-blue-600 text-white w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-6 w-6" />
                </div>
                <p className="font-bold text-gray-900 mb-2">{role.title}</p>
                <p className="text-gray-600 text-sm font-light leading-relaxed">{role.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Doctors Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-bold uppercase tracking-wider text-xs block mb-2">EXCELLENCE</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
              Why Choose Our Specialists
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Extensive Experience',
                desc: 'Over 18 years of clinical expertise in reproductive care with thousands of successfully delivered babies.'
              },
              {
                title: 'Scientific Standards',
                desc: 'Continuous implementation of modern global methods through regular academic updates.'
              },
              {
                title: 'Patient-First Mindset',
                desc: 'Highly personalized protocols designed directly for your unique biological conditions.'
              },
              {
                title: 'Optimal Outcomes',
                desc: 'High clinical success parameters attained through strict evidence-based medicine.'
              },
              {
                title: 'Absolute Transparency',
                desc: 'Honest cost discussions upfront with zero hidden charges or surprise lab fees later.'
              },
              {
                title: 'Complete Coordination',
                desc: 'We support you physically and emotionally, making the entire journey comfortable.'
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rich On-Page SEO Section */}
      <section className="py-20 bg-white border-t border-gray-150">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-blue">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
            Consult the Best IVF Doctors in Lajpat Nagar Delhi
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6 font-light">
            Are you searching for the <strong>Best IVF Doctors in Lajpat Nagar Delhi</strong> to guide you on your journey to parenthood? Choosing the right fertility specialist is one of the most critical decisions you will make. At <Link href="/about-fertility-treatment-in-delhi" className="text-blue-600 hover:underline font-normal">Pravi Global IVF Polyclinic</Link> in Lajpat Nagar, Delhi, our team consists of top-rated, highly qualified fertility specialists, gynecologists, and embryologists. Led by <strong>Dr. Monica Sachdev</strong> (Senior IVF Specialist & Medical Director) with over 18+ years of clinical excellence, we deliver advanced, compassionate, and highly successful <Link href="/fertility-services-in-lajpat-nagar-delhi" className="text-blue-600 hover:underline font-normal">reproductive solutions</Link>.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6 font-light">
            Our doctors believe that every patient is unique. We reject the "one-size-fits-all" approach to fertility care. Instead, our specialists customize every diagnostic panel and stimulation protocol to match your unique biological profile. Whether you require advanced IVF, ICSI, IUI, donor assistance, or laparoscopic correction, our medical team brings world-class training and state-of-the-art laboratory standards directly to your care.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Why Expertise Matters: The Role of Top IVF Doctors in Your Journey
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6 font-light">
            The success of an assisted reproductive cycle depends heavily on clinical judgment. From deciding the exact dosage of stimulation medications to determining the precise hour of egg retrieval, every step requires seasoned expertise. The best IVF doctors combine academic knowledge with years of hands-on laboratory experience. At our clinic in Lajpat Nagar, our doctors work closely with certified embryologists to monitor embryo development in real-time, utilizing advanced technologies like the <Link href="/electronic-witness-system" className="text-blue-600 hover:underline font-normal">Electronic Witness System</Link> to ensure 100% sample accuracy.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-blue-955 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-6 leading-tight">
            Schedule Your Consultation
          </h2>
          <p className="text-lg text-blue-100 mb-8 font-light">
            Meet with our specialists to discuss your personalized fertility plan in Lajpat Nagar.
          </p>
          <Link href="/book-appointment" className="bg-white text-blue-900 px-8 py-4 rounded-full hover:bg-gray-100 transition-all hover:scale-105 inline-flex items-center text-base font-bold shadow-md">
            Book Appointment <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* SEO FAQ Section */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-extrabold text-gray-950 mt-12 mb-8 text-center">
            FAQs about IVF Specialists in Lajpat Nagar Delhi
          </h3>
          <div className="space-y-6">
            {[
              {
                q: "How do I choose the best ivf doctors in lajpat nagar delhi?",
                a: "Look for a doctor with at least 10+ years of dedicated experience in reproductive medicine, a high verified success rate, positive patient reviews on our <a href='https://www.practo.com/delhi/clinic/pravi-global-ivf-polyclinic-lajpat-nagar-4' target='_blank' rel='noopener noreferrer' class='text-blue-600 hover:underline font-normal'>Practo verified profile</a>, and access to a modern in-house embryology laboratory. Dr. Monica Sachdev, ranked among the best ivf doctors in lajpat nagar delhi, and the team at Pravi IVF fulfill all these criteria, bringing 18+ years of expertise."
              },
              {
                q: "What qualifications should a top fertility specialist in lajpat nagar delhi have?",
                a: "A top fertility specialist in lajpat nagar delhi or one of the best ivf doctors in lajpat nagar delhi typically holds an MBBS, followed by a postgraduate degree in Obstetrics and Gynecology (DGO, MD, or MS/DNB), along with a certified fellowship or advanced specialization in Reproductive Medicine/IVF."
              },
              {
                q: "Can I consult with the best ivf doctors in lajpat nagar delhi online before visiting the clinic?",
                a: "Yes, Pravi Global IVF offers advanced online/video consultations with the best ivf doctors in lajpat nagar delhi. This is highly beneficial for international, OCI, NRI, and outstation patients to discuss their medical histories before traveling to Delhi."
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-200">
                <h4 className="font-bold text-lg text-gray-900 mb-2 flex items-start gap-2">
                  <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-[10px] flex-shrink-0 mt-0.5 font-bold">Q</span>
                  {faq.q}
                </h4>
                <p className="text-gray-600 leading-relaxed pl-7 text-sm font-light">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
