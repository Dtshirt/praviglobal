export const hospitalInfo = {
  name: "Pravi Global IVF and Fertility Center",
  tagline: "Your Journey to Parenthood Starts Here",
  address: "Building number 41, First Floor, Ring Rd, Block Q, Lajpat Nagar IV, Lajpat Nagar, New Delhi, Delhi 110024",
  phone: "+91 8009150040",
  email: "info@praviglobalivf.in",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.8!2d81.6!3d21.25!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDE1JzAwLjAiTiA4McKwMzYnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890",

  social: {
    facebook: "https://www.facebook.com/www.praviivf.in/",
    instagram: "https://www.instagram.com/ivfpravi/",
    youtube: "https://www.youtube.com/@ivfcentre1Msubscriber"
  }
};

export const services = [
  {
    id: 1,
    name: "IVF Treatment",
    slug: "ivf-treatment",
    description: "Advanced in-vitro fertilization with high success rates using the latest technology and personalized protocols.",
    fullDescription: "Our IVF program combines cutting-edge technology with personalized care. We offer customized stimulation protocols, advanced embryo culture systems, and state-of-the-art laboratory facilities to maximize your chances of success.",
    icon: "Heart",
    features: [
      "Personalized stimulation protocols",
      "Advanced embryo culture systems",
      "Time-lapse embryo monitoring",
      "Blastocyst transfer",
      "Frozen embryo transfer"
    ],
    url: '/ivf',
    image: '/images/ivf.jpg'
  },
  {
    id: 2,
    name: "ICSI",
    slug: "icsi",
    description: "Intracytoplasmic sperm injection for male infertility - highly effective assisted reproduction technique.",
    fullDescription: "ICSI is a specialized form of IVF where a single sperm is injected directly into an egg. This technique is particularly beneficial for severe male factor infertility.",
    icon: "Users",
    features: [
      "Treatment for severe male infertility",
      "High fertilization rates",
      "Micromanipulation expertise",
      "Quality sperm selection",
      "Combined with IVF protocols"
    ],
    url: '/icsi',
    image: '/images/icsi.avif'
  },
  {
    id: 3,
    name: "IUI",
    slug: "iui",
    description: "Intrauterine insemination - a less invasive and cost-effective fertility treatment option.",
    fullDescription: "IUI involves placing washed and prepared sperm directly into the uterus during ovulation, increasing the chances of fertilization.",
    icon: "Heart",
    features: [
      "Minimal invasion procedure",
      "Cost-effective treatment",
      "Natural cycle or stimulated",
      "Quick recovery time",
      "Multiple cycle options"
    ],
    url: '/iui',
    image: '/images/IUI-treatment.jpg'
  },
  {
    id: 4,
    name: "Egg Freezing",
    slug: "egg-freezing",
    description: "Preserve your fertility for the future with advanced vitrification technology.",
    fullDescription: "Egg freezing allows you to preserve your fertility by freezing and storing your eggs for future use. Ideal for women who want to delay childbearing.",
    icon: "Shield",
    features: [
      "Vitrification technology",
      "Long-term storage options",
      "High survival rates",
      "Flexible future planning",
      "Medical and social reasons"
    ],
    url: '/ivf',
    image: '/images/egg_frezing.jpg'
  },
  {
    id: 5,
    name: "Male Infertility Treatment",
    slug: "male-infertility",
    description: "Comprehensive evaluation and treatment for male reproductive health issues.",
    fullDescription: "We offer complete diagnostic and treatment services for male infertility, including semen analysis, hormonal evaluation, and advanced treatments.",
    icon: "Users",
    features: [
      "Semen analysis",
      "Hormonal evaluation",
      "Surgical sperm retrieval",
      "Lifestyle counseling",
      "Medical management"
    ],
    url: '/male-infertility',
    image: '/images/male_infertility.jpg'
  },
  {
    id: 6,
    name: "Female Infertility Treatment",
    slug: "female-infertility",
    description: "Personalized diagnosis and treatment for various causes of female infertility.",
    fullDescription: "Comprehensive evaluation and treatment of female infertility including ovulation disorders, tubal factors, and endometriosis.",
    icon: "Heart",
    features: [
      "Ovulation induction",
      "Laparoscopy",
      "Hysteroscopy",
      "Hormonal treatments",
      "Endometriosis management"
    ],
    url: '/female-infertility',
    image: '/images/female_infertility.jpg'
  },
  {
    id: 7,
    name: "Surrogacy",
    slug: "surrogacy",
    description: "Ethical and legal surrogacy programs with complete support and guidance.",
    fullDescription: "We provide comprehensive surrogacy services with legal, medical, and emotional support throughout the journey.",
    icon: "Heart",
    features: [
      "Legal guidance",
      "Surrogate screening",
      "Medical management",
      "Psychological support",
      "Complete documentation"
    ],
    url: '/surrogacy',
    image: '/images/serogecy.jpg'
  },
  {
    id: 8,
    name: "Donor Programs",
    slug: "donor-programs",
    description: "Comprehensive egg and sperm donor services with thorough screening.",
    fullDescription: "We maintain a database of carefully screened egg and sperm donors to help you build your family.",
    icon: "Users",
    features: [
      "Egg donation",
      "Sperm donation",
      "Thorough screening",
      "Anonymous or known donors",
      "Legal compliance"
    ],
    url: '/donor-services',
    image: '/images/Sperm-Donation.jpg'
  },
  {
    id: 9,
    name: "Genetic Testing",
    slug: "genetic-testing",
    description: "PGT-A and comprehensive genetic screening for healthy embryos.",
    fullDescription: "Advanced genetic testing including preimplantation genetic testing to screen embryos for chromosomal abnormalities.",
    icon: "Shield",
    features: [
      "PGT-A (aneuploidy)",
      "PGT-M (monogenic)",
      "Carrier screening",
      "Karyotyping",
      "Genetic counseling"
    ],
    url: '/genetic-testing',
    image: '/images/genetic-testing.jpg'
  }
];

export const doctors = [
  {
    id: 1,
    name: "Dr. Monica Sachdev",
    specialty: "Medical Director & Senior IVF Specialist",
    experience: "18+ years",
    qualification: "MBBS, DNB (Obs & Gynae), MRCOG, FICOG, Fellow Rep.Med.",
    image: "/images/praviivf68adeb4f45d30_1756228431.png",
    bio: "Dr. Monica Sachdev is a renowned Senior IVF Consultant and Obstetrics & Gynecology Specialist with over 15 years of experience in managing infertility",
    specialties: [
      "IVF & ICSI",
      "Intrauterine Insemination (IUI)",
      "Intracytoplasmic Sperm Injection",
      "Egg Freezing & Fertility Preservatio",
      "High-Risk Pregnancy Managemen"
    ]
  },
  {
    id: 2,
    name: "Dr. Ankita",
    specialty: "Gynecologist & Fertility Specialist",
    experience: "6+ years",
    qualification: "MRCOG, Fellowship in Reproductive Medicine (Akanksha IVF), Diploma in Minimal Access Surgery",
    image: "/images/dr-ankita.jpeg",
    bio: "<b>Dr. Ankita</b> is a skilled <b>Gynecologist and Fertility Specialist</b> trained at premier institutions including <b>Lady Hardinge Medical College</b> and <b>Maulana Azad Medical College</b>, with senior residency at Lok Nayak Hospital.<br/> She holds <b>MRCOG</b>, a Fellowship in Reproductive Medicine from Akanksha IVF under Dr. K D Nayar, and a <b>Diploma in Minimal Access Surgery</b>.<br/> With over <b>6 years of experience</b> in infertility management, she is committed to patient-centric care and the use of updated, evidence-based, and novel reproductive techniques.<br/> She has received a <b>poster award at the NARCHI Conference</b> and has published in national and international journals. Dr. Ankita continues to bring compassionate, cutting-edge fertility care to all her patients.",
    specialties: [
      "Infertility Management",
      "Intrauterine Insemination (IUI)",
      "Intracytoplasmic Sperm Injection (ICSI)",
      "Minimal Access Surgery",
      "Evidence-Based Reproductive Techniques"
    ]
  },
  {
    id: 3,
    name: "Dr. Rit Shukla",
    specialty: "Chief Embryologist & Scientific Director",
    experience: "18 years",
    qualification: "MBBS, MBA Hosp. Admin/Embryology, Advanced IVF training from Osaka, Japan, Embryology training from BACC, Bengaluru, MBA in Hospital Management",
    image: "/images/praviivf68adeb76c3b74_1756228470.png",
    bio: "Dr. Rit Shukla is a distinguished Chief Embryologist with over a decade of experience in the field of Assisted Reproductive Technology (ART). With a proven track record of performing more than 5000 ICSI procedures.",
    specialties: [
      "Intracytoplasmic Sperm Injection (ICSI)",
      "In Vitro Fertilization (IVF)",
      "Embryo Freezing & Vitrification",
      "Preimplantation Genetic Testing",
      "Egg & Sperm Banking"
    ]
  },
  {
    id: 4,
    name: "Dr. Sakshi Tandon",
    specialty: "Obstetrics Gynaecology",
    experience: "10+ years",
    qualification: "MBBS, DNB (Obs & Gynae), Fellowship in IVF & Reproductive Medicine",
    image: "/images/praviivf68adeb8d21097_1756228493.png",
    bio: "Dr. Tandon’s career has been shaped by her invaluable experiences at leading institutions in India and the United States. Professional Associations & Recognitions Fellowship in IVF & Reproductive Medicine Former Consultant at Sir Gangaram Hospital, New Delhi International experience as a Consultant in the USA Speaker at national and international conferences on reproductive health and fertility advancements Published research papers in leading medical journals",
    specialties: [
      "In Vitro Fertilization",
      "Intrauterine Insemination",
      "Intracytoplasmic Sperm Injection",
      "Egg Freezing & Fertility Preservation",
      "High-Risk Pregnancy Management"
    ]
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Priya & Rahul Mehta",
    location: "Kanpur",
    rating: 5,
    text: "After 5 years of trying and multiple failed attempts elsewhere, Dr. Praveen and his team made our dream come true. Our twin daughters are the greatest blessing. The entire team was supportive, professional, and caring throughout our journey.",
    image: "/images/icon-7797704_640.png"
  },
  {
    id: 2,
    name: "Anjali Sharma",
    location: "Unnao",
    rating: 5,
    text: "I was 38 and losing hope when I came to Pravi IVF. The doctors were honest about my chances but gave me the best treatment. I'm now a proud mother of a healthy baby boy. Forever grateful!",
    image: "/images/icon-7797704_640.png"
  },
  {
    id: 3,
    name: "Vikram & Neha Patel",
    location: "Kanpur Dehat",
    rating: 5,
    text: "The professionalism and care at Pravi IVF is outstanding. From our first consultation to holding our baby, every step was handled with expertise and compassion. Highly recommend!",
    image: "/images/icon-7797704_640.png"
  },
  {
    id: 4,
    name: "Sneha Gupta",
    location: "Banda",
    rating: 5,
    text: "As a single woman choosing egg freezing, I was nervous about the process. The team at Pravi IVF made me feel comfortable and informed every step of the way. Great experience!",
    image: "/images/icon-7797704_640.png"
  },
  {
    id: 5,
    name: "Arjun & Kavita Rao",
    location: "Delhi",
    rating: 5,
    text: "We had male factor infertility and were worried about our options. Dr. Rajesh explained everything clearly and ICSI worked on our first attempt. We're now blessed with a beautiful daughter.",
    image: "/images/icon-7797704_640.png"
  },
  {
    id: 6,
    name: "Pooja Tiwari",
    location: "Noida",
    rating: 5,
    text: "The state-of-the-art facilities and experienced doctors make Pravi IVF the best choice in Chhattisgarh. They truly care about their patients and celebrate every success with you.",
    image: "/images/icon-7797704_640.png"
  }
];

export const galleryImages = [
  {
    id: 1,
    url: "/images/1.jpg",
    title: "State-of-the-art IVF Laboratory",
    category: "facility"
  },
  {
    id: 2,
    url: "/images/2.jpg",
    title: "Modern Consultation Rooms",
    category: "facility"
  },
  {
    id: 3,
    url: "/images/3.jpeg",
    title: "Advanced Medical Equipment",
    category: "facility"
  },
  {
    id: 4,
    url: "/images/4.jpeg",
    title: "Comfortable Waiting Area",
    category: "facility"
  },
  {
    id: 5,
    url: "/images/5.jpeg",
    title: "Embryology Laboratory",
    category: "facility"
  },
  {
    id: 6,
    url: "/images/6.jpeg",
    title: "Recovery Rooms",
    category: "facility"
  },
  {
    id: 7,
    url: "/images/7.jpeg",
    title: "Happy Parents - Success Story",
    category: "success"
  },
  {
    id: 8,
    url: "/images/8.jpeg",
    title: "Newborn Success",
    category: "success"
  },
  {
    id: 9,
    url: "/images/9.jpeg",
    title: "Proud Parents",
    category: "success"
  },
  {
    id: 10,
    url: "/images/new/01.jpg",
    title: "Proud Parents",
    category: "success"
  },
  {
    id: 11,
    url: "/images/new/02.jpg",
    title: "Proud Parents",
    category: "success"
  },
  {
    id: 12,
    url: "/images/new/03.jpg",
    title: "Proud Parents",
    category: "success"
  },
  {
    id: 13,
    url: "/images/new/04.jpg",
    title: "Proud Parents",
    category: "success"
  },
  {
    id: 14,
    url: "/images/new/05.jpg",
    title: "Proud Parents",
    category: "success"
  },
  {
    id: 15,
    url: "/images/new/06.jpg",
    title: "Proud Parents",
    category: "success"
  },
  {
    id: 16,
    url: "/images/new/07.jpg",
    title: "Proud Parents",
    category: "success"
  },
  {
    id: 17,
    url: "/images/new/08.jpg",
    title: "Proud Parents",
    category: "success"
  },
  {
    id: 18,
    url: "/images/new/09.jpg",
    title: "Proud Parents",
    category: "success"
  },
  {
    id: 19,
    url: "/images/new/10.jpg",
    title: "Proud Parents",
    category: "success"
  },
  {
    id: 20,
    url: "/images/new/11.jpg",
    title: "Proud Parents",
    category: "success"
  },
  {
    id: 21,
    url: "/images/new/12.jpg",
    title: "Proud Parents",
    category: "success"
  },
  {
    id: 22,
    url: "/images/new/13.jpg",
    title: "Proud Parents",
    category: "success"
  },
  {
    id: 23,
    url: "/images/new/14.jpg",
    title: "Proud Parents",
    category: "success"
  },
  {
    id: 24,
    url: "/images/new/15.jpg",
    title: "Proud Parents",
    category: "success"
  },
  {
    id: 25,
    url: "/images/new/16.jpg",
    title: "Proud Parents",
    category: "success"
  },
  {
    id: 26,
    url: "/images/new/17.jpg",
    title: "Proud Parents",
    category: "success"
  },
  {
    id: 27,
    url: "/images/new/18.jpg",
    title: "Proud Parents",
    category: "success"
  },
  {
    id: 28,
    url: "/images/new/19.jpg",
    title: "Proud Parents",
    category: "success"
  },
  {
    id: 29,
    url: "/images/new/20.jpg",
    title: "Proud Parents",
    category: "success"
  },
  {
    id: 30,
    url: "/images/new/21.jpg",
    title: "Proud Parents",
    category: "success"
  },
  {
    id: 31,
    url: "/images/new/22.jpg",
    title: "Proud Parents",
    category: "success"
  },
  {
    id: 32,
    url: "/images/new/23.jpg",
    title: "Proud Parents",
    category: "success"
  },
  {
    id: 33,
    url: "/images/new/24.jpg",
    title: "Proud Parents",
    category: "success"
  },
  {
    id: 34,
    url: "/images/new/25.jpg",
    title: "Proud Parents",
    category: "success"
  },
  {
    id: 35,
    url: "/images/new/26.jpg",
    title: "Proud Parents",
    category: "success"
  },
  {
    id: 36,
    url: "/images/new/27.jpeg",
    title: "Proud Parents",
    category: "success"
  },
  {
    id: 37,
    url: "/images/new/28.jpeg",
    title: "Proud Parents",
    category: "success"
  },
  {
    id: 38,
    url: "/images/new/29.jpeg",
    title: "Proud Parents",
    category: "success"
  },
  {
    id: 39,
    url: "/images/new/30.jpeg",
    title: "Proud Parents",
    category: "success"
  },
  {
    id: 40,
    url: "/images/new/31.jpeg",
    title: "Proud Parents",
    category: "success"
  },
  {
    id: 41,
    url: "/images/new/32.jpeg",
    title: "Proud Parents",
    category: "success"
  },
  {
    id: 42,
    url: "/images/new/33.jpeg",
    title: "Proud Parents",
    category: "success"
  },
  {
    id: 44,
    url: "/images/new/36.jpeg",
    title: "Proud Parents",
    category: "success"
  },
  {
    id: 45,
    url: "/images/new/37.jpeg",
    title: "Proud Parents",
    category: "success"
  },
  {
    id: 46,
    url: "/images/new/38.jpeg",
    title: "Proud Parents",
    category: "success"
  },
  {
    id: 47,
    url: "/images/new/39.jpeg",
    title: "Proud Parents",
    category: "success"
  },
  {
    id: 48,
    url: "/images/new/40.jpeg",
    title: "Proud Parents",
    category: "success"
  },
  {
    id: 49,
    url: "/images/new/41.jpeg",
    title: "Proud Parents",
    category: "success"
  },
  {
    id: 50,
    url: "/images/new/42.jpeg",
    title: "Proud Parents",
    category: "success"
  },
  {
    id: 51,
    url: "/images/new/43.jpeg",
    title: "Proud Parents",
    category: "success"
  },
  {
    id: 52,
    url: "/images/new/44.jpeg",
    title: "Proud Parents",
    category: "success"
  },
  {
    id: 53,
    url: "/images/new/45.jpeg",
    title: "Proud Parents",
    category: "success"
  },
  {
    id: 54,
    url: "/images/new/46.jpeg",
    title: "Proud Parents",
    category: "success"
  },
  {
    id: 55,
    url: "/images/new/47.jpeg",
    title: "Proud Parents",
    category: "success"
  },
  {
    id: 56,
    url: "/images/new/48.jpeg",
    title: "Proud Parents",
    category: "success"
  },
  {
    id: 57,
    url: "/images/new/49.jpeg",
    title: "Proud Parents",
    category: "success"
  },
  {
    id: 58,
    url: "/images/new/50.jpeg",
    title: "Proud Parents",
    category: "success"
  } ,
  {
    id: 59,
    url: "/images/new/51.jpeg",
    title: "Proud Parents",
    category: "success"
  },
  {
    id: 60,
    url: "/images/new/52.jpeg",
    title: "Proud Parents",
    category: "success"
  } ,
  {
    id: 61,
    url: "/images/new/53.jpeg",
    title: "Proud Parents",
    category: "success"
  },
  {
    id: 62,
    url: "/images/new/54.jpeg",
    title: "Proud Parents",
    category: "success"
  } ,
  {
    id: 63,
    url: "/images/new/55.jpeg",
    title: "Proud Parents",
    category: "success"
  },
  {
    id: 64,
    url: "/images/new/56.jpeg",
    title: "Proud Parents",
    category: "success"
  },
  {
    id: 65,
    url: "/images/new/57.jpeg",
    title: "Proud Parents",
    category: "success"
  },
  {
    id: 66,
    url: "/images/new/58.jpeg",
    title: "Proud Parents",
    category: "success"
  } ,
  {
    id: 67,
    url: "/images/new/59.jpeg",
    title: "Proud Parents",
    category: "success"
  },
  {
    id: 68,
    url: "/images/new/60.jpeg",
    title: "Proud Parents",
    category: "success"
  } ,
  {
    id: 69,
    url: "/images/new/61.jpeg",
    title: "Proud Parents",
    category: "success"
  },
  {
    id: 70,
    url: "/images/new/62.jpeg",
    title: "Proud Parents",
    category: "success"
  } ,
  {
    id: 71,
    url: "/images/new/63.jpeg",
    title: "Proud Parents",
    category: "success"
  },
  {
    id: 72,
    url: "/images/new/64.jpeg",
    title: "Proud Parents",
    category: "success"
  } 
];

export const whyChooseUs = [
  {
    icon: "Award",
    title: "Experienced Team",
    description: "Board-certified specialists with over 15 years of expertise in reproductive medicine"
  },
  {
    icon: "Shield",
    title: "Advanced Technology",
    description: "State-of-the-art IVF laboratory with latest equipment and techniques"
  },
  {
    icon: "Heart",
    title: "Personalized Care",
    description: "Customized treatment plans tailored to your unique needs and circumstances"
  },
  {
    icon: "CheckCircle",
    title: "High Success Rates",
    description: "Proven track record with success rates above national averages"
  },
  {
    icon: "Users",
    title: "Comprehensive Services",
    description: "Full range of fertility treatments under one roof"
  },
  {
    icon: "Clock",
    title: "Convenient Location",
    description: "Easily accessible in the heart of Delhi with ample parking"
  }
];

export const stats = [
  {
    number: "15+",
    label: "Years of Excellence"
  },
  {
    number: "5000+",
    label: "Happy Families"
  },
  {
    number: "65%",
    label: "Success Rate"
  },
  {
    number: "50+",
    label: "Expert Staff"
  }
];