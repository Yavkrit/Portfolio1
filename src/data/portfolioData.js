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
  github: "https://github.com/Yavkrit",
  linkedin: "https://www.linkedin.com/in/yavkrit-vashishtha-50819b286",
};

export const heroContent = {
  greeting: "Hi, I'm Yavkrit Vashishtha",
  titleHighlight: "Embedded Engineer & Research Scholar",
  subtitle:
    "Building firmware, designing sensor networks, and pushing the boundary of THz-based biomedical diagnostics.",
  ctaPrimary: { text: "View My Work", href: "/projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:yvashishtha04@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello Yavkrit,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Yavkrit_Vashishtha_Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Yavkrit Vashishtha</span>, an Embedded Software Engineer and Research Scholar based in Chandigarh, India, with 2+ years of industry experience in firmware development, Linux-based systems, and protocol integration for professional IP camera platforms.`,
  bioParagraphs: [
    `At <strong>eInfochips (Arrow Electronics)</strong>, I developed production-grade firmware for PTZ and multi-sensor IP cameras, implemented ONVIF/SUNAPI-compliant protocol stacks, built RESTful API integrations, and wrote low-level peripheral drivers on STM32 microcontrollers using Yocto and ARM cross-compilation.`,
    `Now at <strong>CSIR-CSIO, Chandigarh</strong>, I'm pursuing an Integrated M.Tech + Ph.D. at AcSIR, applying AI and deep learning to build novel non-contact biomedical imaging systems using Terahertz radiation — research at the frontier of instrumentation science.`,
  ],
  stats: [
    { value: "2+", label: "Years Industry" },
    { value: "8.69", label: "B.Tech CGPA" },
    { value: "DAC-1", label: "PhD Milestone" },
    { value: "6+", label: "Certifications" },
  ],
  highlights: [
    "Embedded Firmware",
    "ONVIF / SUNAPI",
    "THz Imaging Research",
    "AI / Deep Learning",
    "Linux / RTOS",
    "Computer Vision",
  ],
  techStack: ["C / C++", "Linux & RTOS", "Python & TensorFlow"],
};

export const skillsContent = {
  badge: "My Approach",
  heading: "How I approach research & engineering problems",
  description:
    "A structured, hardware-grounded method for turning open-ended engineering and research problems into validated, well-documented outcomes.",
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
  endText: "Rigorously validated.",
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
      icon: "microscope",
    },
    {
      title: "LIME — Li-Fi System",
      description:
        "Bidirectional free-space optical communication using laser diodes and photovoltaic receivers with adaptive threshold calibration. 100% text accuracy at 1 m.",
      stats: "Self-Initiated Research",
      icon: "radio",
    },
    {
      title: "Firmware & Protocol Engineering",
      description:
        "ONVIF/SUNAPI integration for Hanwha & Honeywell IP cameras; low-level STM32 peripheral drivers (GPIO, SPI, I2C, UART, ADC) on Yocto-based BSP.",
      stats: "2+ Years Industry",
      icon: "settings",
    },
    {
      title: "AI-Driven IoT Systems",
      description:
        "Architecting embedded sensor networks with TensorFlow-based analytics for THz signal acquisition, classification, and anomaly detection in biomedical contexts.",
      stats: "AcSIR / CSIR-CSIO",
      icon: "brain-circuit",
    },
  ],
};

// Technical Initiatives — kept intentionally short: only items that add
// information not already covered in Experience/Education, to avoid
// repeating the same 2-3 facts across sections.
export const leadershipList = [
  {
    title: "LIME — Self-Initiated Research",
    description:
      "Designed, built, and tested a complete bidirectional Li-Fi communication system entirely independently during the final year of B.Tech (2022–2023) — hardware, firmware, custom PCBs, and a full research write-up, with no formal supervision or course requirement.",
    role: "Sole Researcher & Engineer",
    badge: "Self-Driven",
  },
  {
    title: "DAC-1 Doctoral Milestone",
    description:
      "Successfully cleared the first Doctoral Advisory Committee review (June 2026) for THz biomedical imaging research at CSIR-CSIO — the formal checkpoint confirming the PhD research direction and progress to date.",
    role: "Research Scholar",
    badge: "Milestone",
  },
  {
    title: "Continuous, Self-Directed Upskilling",
    description:
      "Proactively pursued certifications outside formal coursework — spanning data science & AI (IIT Madras/Intellipaat), advanced C/C++ (pointers, memory management, unit testing), and AI for managers — to close specific skill gaps as the work demanded them.",
    role: "Ongoing",
    badge: "Learning",
  },
];

export const experienceList = [
  {
    organization: "Academy of Scientific and Innovative Research (AcSIR / CSIR-CSIO)",
    role: "Research Scholar — Integrated M.Tech + Ph.D.",
    duration: "Jan 2025 – Present",
    supervisor: "Dr. Naveen Sharma (Senior Scientist, CSIR-CSIO; Professor, AcSIR)",
    skills: [
      "Designing THz-based non-invasive diagnostic imaging systems for biomedical applications",
      "Architecting embedded sensor networks and AI-driven analytics pipelines for THz signal acquisition",
      "Developing deep learning algorithms (TensorFlow/PyTorch) for biomedical data modelling and anomaly detection",
      "DAC-1 Doctoral Advisory Committee review successfully completed — June 2026",
    ],
    tech: ["Python", "TensorFlow", "PyTorch", "OpenCV", "THz Imaging", "Signal Processing", "Embedded Systems", "C++", "MATLAB"],
  },
  {
    organization: "eInfochips (An Arrow Electronics Company)",
    role: "Embedded Software Engineer",
    duration: "Jun 2023 – Jan 2025",
    clients: ["Hanwha Vision", "Honeywell"],
    skills: [
      "Developed and integrated ONVIF (Profiles S, G, T, M) and SUNAPI-compliant functionalities for PTZ and multi-sensor IP cameras in C++ on Linux",
      "Built RESTful API integrations for Video Management Systems (VMS), improving protocol compliance and interoperability",
      "Implemented Network Storage Drive (NSD) module enabling secure IP-based data caching and retrieval",
      "Developed low-level peripheral drivers (GPIO, SPI, I²C, UART, ADC) on STM32 microcontrollers within modular BSP layers via Yocto build system and ARM cross-compilation",
      "Applied RTOS task scheduling, interrupt handling, and memory optimization to improve firmware reliability",
      "Performed API testing with Postman, led unit testing and debugging across cross-functional engineering teams",
    ],
    tech: ["C", "C++", "Linux", "STM32", "RTOS", "ONVIF", "SUNAPI", "RESTful APIs", "Yocto", "ARM", "SPI", "I²C", "UART", "GPIO", "Postman", "GDB", "CMake"],
    note: "Certain project details are protected under confidentiality agreements. Technologies and engineering responsibilities are shared with appropriate professional discretion.",
  },
  {
    organization: "vivo / DBG Technology Co. Ltd.",
    role: "Associate Manufacturing / System Engineer",
    duration: "Jun 2021 – Jun 2022",
    skills: [
      "Performed PCBA validation, SMT line operations, and CCD optical inspection across mobile production lines",
      "Touchscreen calibration and functional testing for OPPO, VIVO, Realme, and Xiaomi devices",
      "Supervised assembly-line operations and ensured adherence to quality and reliability testing standards",
    ],
    tech: ["PCBA Validation", "SMT", "CCD Inspection", "Quality Assurance", "Production Testing", "Electronics Manufacturing"],
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
    icon: "microscope",
    badge: "PhD Research — AcSIR / CSIR-CSIO",
    title: "AI-Assisted Sub-THz Plantar Imaging",
    description:
      "Designing and implementing an end-to-end computational pipeline for non-invasive plantar skin hydration mapping using a 100 GHz CW THz FPA camera (TeraSense Tera-1024, 32×32 px). Pipeline includes: multi-tile image stitching (phase-correlation registration + Gaussian-Laplacian pyramid blending), AI-based super-resolution, per-pixel dielectric model inversion for hydration extraction, and CNN/ViT-based classification across age groups. Validated against corneometer benchmark on Indian volunteers at CSIR-CSIO, Chandigarh.",
    problem:
      "Current biomedical imaging methods lack a practical, non-contact, 2D spatially-resolved imaging modality that is simultaneously insensitive to skin tone variation — a critical limitation for diverse South Asian populations where melanin interference affects optical methods.",
    solution:
      "Sub-THz radiation (50–700 GHz) is inherently insensitive to melanin, penetrates skin to clinically relevant depths, and interacts strongly with water content. Combining a compact CW FPA camera with an AI-driven computational pipeline enables quantitative analysis without the cost and complexity of traditional THz-TDS systems.",
    results: [
      "DAC-1 Doctoral Advisory Committee review successfully completed — June 2026",
      "Novel end-to-end THz pipeline under active development",
      "Age group stratified analysis ongoing with Indian volunteer cohorts",
    ],
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
    icon: "radio",
    badge: "Self-Initiated Research — B.Tech Final Year",
    title: "LIME — Li-Fi Integrated Message Encoder",
    description:
      "Designed and built a bidirectional free-space optical communication system from scratch — two self-contained nodes, each with an Arduino UNO, two red laser transmitters, two solar-panel photovoltaic receivers, OLED display, 4×4 keypad, and hand-built audio PCBs (TIP142 Darlington modulator + LM358 voltage follower + PAM class-D amplifier). Key innovation: adaptive OOK threshold calibration algorithm (T = L_avg + K) requiring zero user input, validated across ambient illumination from <10 lux to 800 lux. Achieved 100% text accuracy at 1 m, MOS 3.8 audio at 1 m, and simultaneous 4-channel bidirectional operation.",
    problem:
      "Existing low-cost FSO prototypes share three critical limitations: unidirectional data flow only, single-mode operation (text OR voice — not simultaneously), and manual threshold calibration that fails whenever ambient light conditions change.",
    solution:
      "LIME resolves all three limitations in a single battery-powered dual-node system — simultaneous bidirectional transmission, both text (OOK-encoded) and live audio at once, and autonomous self-calibration of its detection threshold before every session.",
    results: [
      "100% message accuracy at 1m node separation (indoor lab conditions)",
      "94% message accuracy at 3m node separation",
      "Audio quality MOS score: 3.8/5 at 1m",
      "Automatic threshold calibration functional across 10 to 800 lux ambient light",
      "Less than 1% BER under controlled conditions at up to 9600 baud",
    ],
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
      github: "https://github.com/Yavkrit",
      paper: "/documents/LIME_Paper.docx",
    },
    isFlagship: false,
  },
  {
    id: "onvif-vms",
    number: "03",
    icon: "lock",
    badge: "Industry — eInfochips (Arrow Electronics)",
    title: "Embedded Camera Platform Development",
    description:
      "At eInfochips, developed and integrated ONVIF (Profiles S, G, T, M) and SUNAPI-compliant functionalities for PTZ and multi-sensor IP cameras (Hanwha Vision, Honeywell) in C++ on Linux. Built RESTful API integrations for Video Management Systems (VMS), improving protocol compliance and interoperability. Implemented a Network Storage Drive (NSD) module enabling secure IP-based data caching. Applied RTOS task scheduling, interrupt handling, and memory optimisation to improve firmware reliability.",
    problem:
      "Professional IP cameras require strict protocol compliance (ONVIF, SUNAPI), reliable low-level peripheral communication, and robust firmware architectures capable of supporting multiple camera profiles (PTZ, multi-sensor) while maintaining interoperability across Video Management Systems (VMS) from multiple vendors.",
    solution:
      "Designed and implemented protocol stacks, low-level BSP drivers, and API integration layers for camera platforms used by tier-1 security brands, ensuring standards compliance and firmware reliability through rigorous unit testing and RTOS optimisation.",
    results: [
      "Production-grade ONVIF stack delivered for PTZ camera product line",
      "SUNAPI compliance achieved for Hanwha Vision client integration",
      "NSD module enabled new data caching capability for storage-less deployments",
      "Firmware reliability improved through systematic unit testing with Google Test",
    ],
    techTags: ["C++", "Linux", "ONVIF", "SUNAPI", "REST APIs", "RTOS", "STM32", "Yocto", "VMS"],
    links: {
      github: null,
    },
    isFlagship: false,
    confidentialNote: "Specific client details and proprietary implementation particulars are protected under NDA. Technologies, responsibilities, and engineering domain shared with professional discretion.",
  },
  {
    id: "walmart-forecasting",
    number: "04",
    icon: "bar-chart",
    badge: "Data Science Capstone",
    title: "Retail Sales Intelligence & Forecasting",
    description:
      "End-to-end data science capstone using R on Walmart's multi-store weekly sales dataset (6,435 records, 8 features). Transformed raw transactional data into actionable inventory and business intelligence — analysing macro-economic drivers (unemployment, temperature, fuel price, CPI, seasonality) and building a 12-week predictive sales model per store with quantified confidence intervals.",
    problem:
      "A national retail chain with 45 outlets was unable to match inventory supply with actual demand — without analytical visibility into what drove week-to-week and store-to-store variation, inventory planning was largely guesswork.",
    solution:
      "Applied a structured R-based workflow: data cleaning, IQR-based outlier analysis, ggplot2 visualisation and correlation analysis to answer each business question individually, then time-series regression models to forecast next-12-week sales for every store.",
    results: [
      "Confirmed strong Q4 seasonality: holiday weeks drove 15–20% above-average sales",
      "Ranked all 45 stores by historical performance with quantified top-bottom gap",
      "12-week sales forecast delivered per store with trend and confidence bands",
    ],
    techTags: ["R", "EDA", "Time Series", "Forecasting", "Retail Analytics", "ggplot2", "Statistics"],
    links: {
      github: "https://github.com/Yavkrit",
      paper: null,
    },
    isFlagship: false,
  },
  {
    id: "customer-churn",
    number: "05",
    icon: "network",
    badge: "Data Science Capstone",
    title: "Customer Churn Prediction — Deep Learning",
    description:
      "Built a complete deep learning pipeline in Python (Keras/TensorFlow) to predict binary customer churn for a telecom company. Covered data manipulation and filtering, EDA with business visualisations, and progressive construction of three neural network architectures — a baseline model, a dropout-regularised model, and a multi-feature classifier — evaluated via confusion matrices and accuracy curves.",
    problem:
      "A telecom company had no early warning system to identify at-risk subscribers — reactive retention after a customer has already churned is expensive and largely ineffective.",
    solution:
      "Designed three progressively sophisticated Keras neural networks (baseline, dropout-regularised, multi-feature) trained on tenure, monthly charges, and total charges, evaluated with confusion matrices and training curves to select the best generaliser.",
    results: [
      "Dropout regularisation reduced overfitting relative to the baseline model",
      "Multi-feature model achieved the best overall generalisation",
      "Identified monthly charges and total spend as stronger churn signals than tenure alone",
    ],
    techTags: ["Keras", "Deep Learning", "Binary Classification", "Python", "Neural Networks", "Dropout Regularisation"],
    links: {
      github: "https://github.com/Yavkrit",
      paper: null,
    },
    isFlagship: false,
  },
  {
    id: "covid-analysis",
    number: "06",
    icon: "activity",
    badge: "Data Science Capstone",
    title: "COVID-19 Trend Analysis & Forecasting",
    description:
      "Built an end-to-end pandemic analytics pipeline in Python analysing COVID-19 trends across India and globally. Ingested multi-file datasets (CSV + Excel) covering confirmed cases, deaths, and recoveries, used Plotly for interactive visualisation, and Facebook Prophet for 7-day-ahead time-series forecasting.",
    problem:
      "Raw COVID-19 case data across hundreds of countries and Indian states, spread across multiple files in mixed formats, made it difficult to identify real trend signal versus reporting noise or make near-term forecasts.",
    solution:
      "Built a Pandas pipeline to merge multi-source data into a unified time-indexed dataset, used Plotly for interactive infection/death/recovery visualisations, and fit Facebook Prophet models to generate 7-day forward case forecasts with uncertainty intervals.",
    results: [
      "Merged and cleaned multi-source pandemic data into a unified, analysis-ready dataset",
      "Revealed India's distinct COVID-19 wave structure and recovery improvement over time",
      "Delivered 7-day case forecasts with confidence intervals alongside historical actuals",
    ],
    techTags: ["Python", "Pandas", "Plotly", "Facebook Prophet", "Time Series", "Forecasting", "Public Health"],
    links: {
      github: "https://github.com/Yavkrit",
      paper: null,
    },
    isFlagship: false,
  },
];

export const certificates = {
  featured: [
    {
      name: "Advanced Certification in Data Science & AI",
      issuer: "IIT Madras (Pravartak / Intellipaat)",
      icon: "graduation-cap",
      thumb: "/certificates/thumbs/ds_ai_cert.webp",
      pdfs: [
        { label: "Programme Certificate — IIT Madras", pdfPath: "/certificates/ds_ai_cert.pdf", fileName: "ds_ai_cert.pdf", thumb: "/certificates/thumbs/ds_ai_cert.webp" },
        { label: "Intellipaat Completion Certificate", pdfPath: "/certificates/intellipaat_cert.pdf", fileName: "intellipaat_cert.pdf", thumb: "/certificates/thumbs/intellipaat_cert.webp" },
      ],
    },
    {
      name: "C++ Unit Testing: Google Test & Google Mock",
      issuer: "Udemy",
      icon: "flask-conical",
      thumb: "/certificates/thumbs/cpp_unit_testing.webp",
      pdfPath: "/certificates/cpp_unit_testing.pdf",
      fileName: "cpp_unit_testing.pdf",
    },
    {
      name: "Advanced C Programming: Pointers & Memory Management",
      issuer: "Udemy",
      icon: "cpu",
      thumb: "/certificates/thumbs/cpp_adv_pointers.webp",
      pdfs: [
        { label: "Certificate I — Pointers", pdfPath: "/certificates/cpp_adv_pointers.pdf", fileName: "cpp_adv_pointers.pdf", thumb: "/certificates/thumbs/cpp_adv_pointers.webp" },
        { label: "Certificate II — Advanced Course", pdfPath: "/certificates/cpp_adv_course.pdf", fileName: "cpp_adv_course.pdf", thumb: "/certificates/thumbs/cpp_adv_course.webp" },
      ],
    },
    {
      name: "AI for Managers",
      issuer: "Microsoft & LinkedIn Learning",
      icon: "bot",
      thumb: "/certificates/thumbs/ai_managers.webp",
      pdfPath: "/certificates/ai_managers.pdf",
      fileName: "ai_managers.pdf",
    },
    {
      name: "Android App Development",
      issuer: "Online Certification",
      icon: "smartphone",
      thumb: "/certificates/thumbs/android_dev.webp",
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
  copyright: `© ${new Date().getFullYear()} Yavkrit Vashishtha · Built with precision & passion`,
};
