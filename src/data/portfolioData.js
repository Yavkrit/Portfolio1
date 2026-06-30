// ============================================================
// portfolioData.js — Centralized configuration for Yavkrit Vashishtha's Portfolio
// All external links, personal info, and content in one place.
// Update this file to change any content across the entire site.
// ============================================================

export const personalInfo = {
  name: "Yavkrit Vashishtha",
  firstName: "Yavkrit",
  brandName: "Yavkrit",
  title: "Embedded Software Engineer & Research Scholar",
  location: "Chandigarh, India",
  phone: "+91 6359100188",
  emails: {
    primary: "yvashishtha04@gmail.com",
    secondary: "yvashishtha04@gmail.com",
  },
  summary:
    "Embedded Software Engineer and Research Scholar with 2+ years of industry experience in firmware development, Linux-based systems, and protocol integration for IP camera platforms. Pursuing Integrated M.Tech + Ph.D. in Biomedical Instrumentation & AI at AcSIR (CSIR-CSIO), focusing on Terahertz-based diagnostic imaging.",
  resumeUrl: "/Yavkrit_Vashishtha_Resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/yavkritvashishtha",
  linkedin: "https://linkedin.com/in/yavkritvashishtha",
  instagram: "https://linkedin.com/in/yavkritvashishtha",
};

export const heroContent = {
  greeting: "Hi, I'm Yavkrit Vashishtha",
  titleHighlight: "Embedded Engineer & Research Scholar",
  subtitle:
    "Building firmware, designing sensor networks, and pushing the boundary of THz-based biomedical diagnostics.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:yvashishtha04@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello Yavkrit,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Yavkrit_Vashishtha_Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Yavkrit Vashishtha</span>, an Embedded Software Engineer and Research Scholar based in Chandigarh, India. I build robust firmware, design low-level peripheral drivers, and architect AI-driven sensor systems at the intersection of hardware and intelligence.`,
  techStack: ["C / C++", "Linux & RTOS", "Python & TensorFlow"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "How I engineer from concept to deployment",
  description:
    "A structured, hardware-grounded approach to turning complex engineering problems into reliable embedded systems and research outcomes.",
  cards: [
    {
      number: "01",
      title: "Research",
      text: "I start by deeply studying the problem domain — hardware constraints, protocol standards, and literature gaps — to build a rock-solid technical foundation.",
    },
    {
      number: "02",
      title: "Design",
      text: "Architecting modular firmware layers, sensor interfaces, and algorithm pipelines with clear separation of concerns and documented signal flows.",
    },
    {
      number: "03",
      title: "Implement",
      text: "Writing production-quality C/C++ firmware, integrating peripherals (SPI, I2C, UART, ADC), and running unit tests with Google Test & Mock.",
    },
    {
      number: "04",
      title: "Validate",
      text: "Rigorous bench testing, performance characterisation, cross-compilation for ARM targets, and documented experimental results with statistical analysis.",
    },
  ],
  endText: "Production ready!",
};

export const technicalSkills = {
  categories: [
    {
      title: "Languages",
      skills: [
        { name: "C", level: 92 },
        { name: "C++", level: 90 },
        { name: "Python", level: 80 },
        { name: "SQL", level: 70 },
        { name: "Bash", level: 75 },
      ],
    },
    {
      title: "Embedded & Hardware",
      skills: [
        { name: "STM32 Microcontrollers", level: 88 },
        { name: "Arduino / Raspberry Pi", level: 90 },
        { name: "RTOS", level: 85 },
        { name: "BSP Development", level: 82 },
        { name: "Yocto Build System", level: 78 },
        { name: "ARM Cross-compilation", level: 80 },
      ],
    },
    {
      title: "Peripheral Drivers",
      skills: [
        { name: "GPIO / SPI / I2C", level: 90 },
        { name: "UART / ADC", level: 88 },
        { name: "Interrupt Handling", level: 85 },
        { name: "Memory Optimization", level: 82 },
      ],
    },
    {
      title: "Protocols & Standards",
      skills: [
        { name: "ONVIF (S/G/T/M)", level: 88 },
        { name: "SUNAPI", level: 85 },
        { name: "RESTful APIs", level: 82 },
        { name: "TCP/IP", level: 78 },
      ],
    },
    {
      title: "AI & Signal Processing",
      skills: [
        { name: "TensorFlow", level: 78 },
        { name: "Signal Processing", level: 80 },
        { name: "Data Structures & Algorithms", level: 85 },
        { name: "AI-based IoT Systems", level: 75 },
      ],
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Linux", level: 88 },
        { name: "Git", level: 90 },
        { name: "GDB / Make / CMake", level: 85 },
        { name: "Google Test / Mock", level: 82 },
        { name: "Postman", level: 78 },
        { name: "VS Code", level: 92 },
      ],
    },
  ],
};

export const researchContent = {
  badge: "Research & Innovation",
  heading: "Engineering at the Edge of Hardware & Intelligence",
  description:
    "From bidirectional Li-Fi systems to AI-assisted THz biomedical imaging — building systems that push the boundary of what embedded hardware can do.",
  categories: [
    {
      title: "THz Biomedical Imaging",
      description:
        "Designing AI-driven sub-THz imaging pipelines for non-invasive plantar skin hydration mapping using a 100 GHz CW FPA camera at CSIR-CSIO.",
      stats: "Active PhD Research",
      icon: "🔬",
    },
    {
      title: "LIME — Li-Fi System",
      description:
        "Bidirectional free-space optical communication using laser diodes and photovoltaic receivers with adaptive threshold calibration. 100% text accuracy at 1 m.",
      stats: "Published Research Paper",
      icon: "📡",
    },
    {
      title: "Firmware & Protocol Engineering",
      description:
        "ONVIF/SUNAPI integration for Hanwha & Honeywell IP cameras; low-level STM32 peripheral drivers (GPIO, SPI, I2C, UART, ADC) on Yocto-based BSP.",
      stats: "2+ Years Industry",
      icon: "⚙️",
    },
    {
      title: "AI-Driven IoT Systems",
      description:
        "Architecting embedded sensor networks with TensorFlow-based analytics for THz signal acquisition, classification, and anomaly detection in biomedical contexts.",
      stats: "AcSIR / CSIR-CSIO",
      icon: "🧠",
    },
  ],
};

export const leadershipList = [
  {
    title: "LIME — Independent Research Initiative",
    description:
      "Self-initiated an end-to-end bidirectional Li-Fi communication system from scratch during M.Tech-PhD studies — designed hardware, wrote firmware, built custom PCBs, and produced a full research paper submitted to AcSIR.",
    role: "Sole Researcher & Engineer",
    badge: "Self-Driven",
  },
  {
    title: "AcSIR — Integrated M.Tech + Ph.D. Research",
    description:
      "Driving an independent doctoral research programme on AI-assisted sub-THz imaging for plantar skin hydration mapping at CSIR-CSIO under Dr. Naveen Sharma, Scientist D.",
    role: "Research Scholar",
    badge: "Research",
  },
  {
    title: "eInfochips — Cross-Functional Debugging Lead",
    description:
      "Led unit testing and debugging workflows with cross-functional teams across ONVIF, SUNAPI, and VMS protocol integrations for Hanwha and Honeywell IP camera products.",
    role: "Embedded Software Engineer",
    badge: "Industry",
  },
  {
    title: "vivo / DBG Technology — Production Line Supervision",
    description:
      "Supervised assembly-line operators and enforced quality, functional, and reliability testing standards for OPPO, VIVO, Realme, and Xiaomi device production lines.",
    role: "Associate System Engineer",
    badge: "Leadership",
  },
  {
    title: "CHARUSAT — B.Tech ECE Capstone",
    description:
      "Completed a 4-year B.Tech in Electronics & Communication Engineering with a CGPA of 8.69/10, building strong foundations in analog circuits, digital systems, and embedded programming.",
    role: "Undergraduate Engineer",
    badge: "Academic",
  },
];

export const experienceList = [
  {
    organization: "Academy of Scientific and Innovative Research (AcSIR / CSIR-CSIO)",
    role: "Research Scholar — Integrated M.Tech + Ph.D.",
    duration: "Jan 2025 – Present",
    skills: [
      "THz-based non-invasive diagnostic imaging",
      "AI-driven analytics pipelines for THz signal classification",
      "Deep learning with TensorFlow for biomedical data modelling",
      "Embedded sensor network architecture",
    ],
    tech: ["TensorFlow", "Python", "C++", "Signal Processing", "CSIR-CSIO Lab"],
  },
  {
    organization: "eInfochips (An Arrow Company)",
    role: "Embedded Software Engineer",
    duration: "Jun 2023 – Jan 2025",
    skills: [
      "ONVIF (Profiles S, G, T, M) & SUNAPI integration for PTZ IP cameras",
      "RESTful API integration for Video Management Systems (VMS)",
      "Network Storage Drive (NSD) module for secure IP-based data caching",
      "Low-level peripheral drivers: GPIO, SPI, I2C, UART, ADC on STM32",
    ],
    tech: ["C++", "Linux", "STM32", "ONVIF", "SUNAPI", "Yocto", "GDB"],
  },
  {
    organization: "vivo / DBG Technology Co. Ltd.",
    role: "Associate Manufacturing / System Engineer",
    duration: "Jun 2021 – Jun 2022",
    skills: [
      "PCBA validation and SMT line operations",
      "Touchscreen calibration and CCD inspection",
      "Quality, functional, and reliability testing",
      "Assembly-line operator supervision",
    ],
    tech: ["PCBA", "SMT", "CCD Inspection", "Quality Assurance", "Production Systems"],
  },
];

export const softSkillsList = [
  {
    name: "Systems Thinking",
    icon: "🔧",
    desc: "Decomposing complex hardware-software interactions into clean, modular, debuggable units.",
  },
  {
    name: "Research Rigour",
    icon: "📐",
    desc: "Designing experiments with statistical validity, documenting results, and producing peer-quality technical reports.",
  },
  {
    name: "Independent Initiative",
    icon: "🚀",
    desc: "Self-initiated the LIME project from scratch — hardware design, firmware, PCB fabrication, and a full research paper.",
  },
  {
    name: "Cross-Team Collaboration",
    icon: "🤝",
    desc: "Working with cross-functional teams across protocol, QA, and firmware domains at eInfochips and CSIR-CSIO.",
  },
  {
    name: "Technical Communication",
    icon: "📝",
    desc: "Producing clear technical documentation, research papers, and firmware specifications for complex embedded systems.",
  },
  {
    name: "Problem Decomposition",
    icon: "🧩",
    desc: "Breaking ambiguous engineering challenges — from THz imaging gaps to OOK calibration — into solvable, testable sub-problems.",
  },
  {
    name: "Continuous Learning",
    icon: "📚",
    desc: "Expanding from embedded firmware to biomedical AI, acquiring certifications in data science, C++ testing, and AI-for-managers.",
  },
  {
    name: "Attention to Detail",
    icon: "🎯",
    desc: "Ensuring protocol compliance, timing accuracy in interrupt handlers, and measurement precision in experimental setups.",
  },
];

export const projects = [
  {
    id: "thz-imaging",
    number: "01",
    badge: "🔬 PhD Research — AcSIR / CSIR-CSIO",
    title: "AI-Assisted Sub-THz Plantar Imaging",
    description:
      "Designing and implementing an end-to-end computational pipeline for non-invasive plantar skin hydration mapping using a 100 GHz CW THz FPA camera (TeraSense Tera-1024, 32×32 px). Pipeline includes: multi-tile image stitching (phase-correlation registration + Gaussian-Laplacian pyramid blending), AI-based super-resolution, per-pixel dielectric model inversion for hydration extraction, and CNN/ViT-based classification across age groups. Validated against corneometer benchmark on Indian volunteers at CSIR-CSIO, Chandigarh.",
    techTags: [
      "Python",
      "TensorFlow",
      "CNN",
      "ViT",
      "Image Processing",
      "Signal Processing",
      "THz Imaging",
      "CSIR-CSIO",
    ],
    links: {
      github: null,
      demo: null,
    },
    isFlagship: true,
  },
  {
    id: "lime",
    number: "02",
    badge: "📡 Research Paper — AcSIR",
    title: "LIME — Li-Fi Integrated Message Encoder",
    description:
      "Designed and built a bidirectional free-space optical communication system from scratch — two self-contained nodes, each with an Arduino UNO, two red laser transmitters, two solar-panel photovoltaic receivers, OLED display, 4×4 keypad, and hand-built audio PCBs (TIP142 Darlington modulator + LM358 voltage follower + PAM class-D amplifier). Key innovation: adaptive OOK threshold calibration algorithm (T = L_avg + K) requiring zero user input, validated across ambient illumination from <10 lux to 800 lux. Achieved 100% text accuracy at 1 m, MOS 3.8 audio at 1 m, and simultaneous 4-channel bidirectional operation.",
    techTags: [
      "Arduino",
      "C/C++",
      "OOK Modulation",
      "Embedded Systems",
      "Li-Fi / FSO",
      "Adaptive Algorithms",
      "Custom PCB",
    ],
    links: {
      github: null,
      paper: "/certificates/intellipaat_cert.pdf",
    },
    isFlagship: false,
  },
  {
    id: "onvif-vms",
    number: "03",
    badge: null,
    title: "ONVIF/SUNAPI IP Camera Integration",
    description:
      "At eInfochips, developed and integrated ONVIF (Profiles S, G, T, M) and SUNAPI-compliant functionalities for PTZ and multi-sensor IP cameras (Hanwha, Honeywell) in C++ on Linux. Built RESTful API integrations for Video Management Systems (VMS), improving protocol compliance and interoperability. Implemented a Network Storage Drive (NSD) module enabling secure IP-based data caching. Applied RTOS task scheduling, interrupt handling, and memory optimisation to improve firmware reliability.",
    techTags: ["C++", "Linux", "ONVIF", "SUNAPI", "REST APIs", "RTOS", "VMS"],
    links: {
      github: null,
    },
    isFlagship: false,
  },
];

export const certificates = {
  featured: [
    {
      name: "Advanced Certification in Data Science & AI",
      issuer: "IIT Madras — Pravartak / Intellipaat",
      icon: "🎓",
      pdfPath: "/certificates/ds_ai_cert.pdf",
      fileName: "ds_ai_cert.pdf",
    },
    {
      name: "Data Science & AI — Course Completion",
      issuer: "Intellipaat",
      icon: "📊",
      pdfPath: "/certificates/intellipaat_cert.pdf",
      fileName: "intellipaat_cert.pdf",
    },
    {
      name: "C++ OOP, STL & Advanced Course",
      issuer: "Udemy",
      icon: "⚙️",
      pdfPath: "/certificates/cpp_adv_course.pdf",
      fileName: "cpp_adv_course.pdf",
    },
    {
      name: "Advanced C Programming: Pointers & Memory Management",
      issuer: "Udemy",
      icon: "🧠",
      pdfPath: "/certificates/cpp_adv_pointers.pdf",
      fileName: "cpp_adv_pointers.pdf",
    },
    {
      name: "C++ Unit Testing: Google Test & Mock",
      issuer: "Udemy",
      icon: "🧪",
      pdfPath: "/certificates/cpp_unit_testing.pdf",
      fileName: "cpp_unit_testing.pdf",
    },
    {
      name: "AI for Managers",
      issuer: "Microsoft & LinkedIn",
      icon: "🤖",
      pdfPath: "/certificates/ai_managers.pdf",
      fileName: "ai_managers.pdf",
    },
    {
      name: "Android App Development",
      issuer: "Certification Course",
      icon: "📱",
      pdfPath: "/certificates/android_dev.pdf",
      fileName: "android_dev.pdf",
    },
  ],
};

export const education = [
  {
    degree: "Integrated Dual Degree — M.Tech + Ph.D.",
    field: "Biomedical Instrumentation, AI & Embedded Systems",
    institution: "Academy of Scientific and Innovative Research (AcSIR)",
    affiliation: "CSIR-CSIO, Chandigarh",
    duration: "Jan 2025 – Present",
    grade: "Enrolled",
    type: "postgrad",
  },
  {
    degree: "B.Tech — Electronics & Communication Engineering",
    field: "Electronics & Communication Engineering",
    institution: "Charotar University of Science and Technology (CHARUSAT)",
    affiliation: "Anand, Gujarat, India",
    duration: "Jul 2019 – May 2023",
    grade: "CGPA: 8.69 / 10",
    type: "undergrad",
  },
];

export const footerContent = {
  taglines: [
    "Embedded Systems & Firmware",
    "C++ · Linux · RTOS · ONVIF",
    "THz Biomedical Research",
  ],
  credential: "Integrated M.Tech + Ph.D. — AcSIR / CSIR-CSIO",
  copyright: `© ${new Date().getFullYear()} Yavkrit Vashishtha | Built with React`,
};

// EmailJS Configuration — set env vars or update below
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
