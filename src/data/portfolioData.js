/**
 * BANGALORE VINAY - PORTFOLIO DATA ARCHITECTURE
 * Curated Single Source of Truth for verified resume data, GitHub repositories,
 * technical skills, educational milestones, and credentials.
 */

export const personalInfo = {
  name: "Bangalore Vinay",
  shortName: "Vinay",
  monogram: "BV",
  roleBadge: "Full-Stack & AI/ML Developer",
  title: "AI & Data Science Student | Full-Stack & Software Developer",
  headline: "Engineering ideas into digital experiences.",
  subheadline:
    "Exploring software development, responsive web applications, and data-driven solutions through practical projects. B.Tech Artificial Intelligence and Data Science student at Mother Theresa Institute of Engineering and Technology (JNTUA).",
  aboutEditorial:
    "I am a passionate B.Tech student specializing in Artificial Intelligence and Data Science. I bridge the gap between intelligent data systems and seamless full-stack web applications. From architecting scalable backend APIs and relational database schemas to building interactive, high-performance React frontends and predictive machine learning models, I build solutions with engineering rigor and user-centric craftsmanship.",
  location: "Palamaner, Andhra Pradesh, India",
  email: "vinay76b@gmail.com",
  phone: "+91 6303552270",
  status: "Open to Software Engineering & AI/ML Opportunities",
  currentDegree: "B.Tech in Artificial Intelligence & Data Science",
  institution: "Mother Theresa Institute of Engineering and Technology (JNTUA)",
  expectedYear: "2027",
  portraitUrl: "/images/vinay-portrait.jpg",
  resumeUrl: "/resume/Bangalore_Vinay_Resume.pdf",
  links: {
    github: "https://github.com/Vinay786-3009",
    linkedin: "https://www.linkedin.com/in/bangalore-vinay-4762512a6/",
    leetcode: "https://leetcode.com/u/B_vinay786/",
    emailMailto: "mailto:vinay76b@gmail.com"
  }
};

export const coreServices = [
  {
    title: "Full Stack Web Development",
    description:
      "Creating modern, responsive, and component-driven web applications from end to end using React.js, Tailwind CSS, JavaScript, and Node.js.",
    badge: "Frontend & Full-Stack",
    icon: "Layout"
  },
  {
    title: "Data Science & Machine Learning",
    description:
      "Developing end-to-end data workflows, exploratory data analysis (EDA), predictive models, and feature engineering using Python, Pandas, and Scikit-learn.",
    badge: "AI & Predictive Systems",
    icon: "Brain"
  },
  {
    title: "Database & Cloud Data Systems",
    description:
      "Designing structured relational schemas and NoSQL models with MySQL, MongoDB, and Firebase, alongside AWS Data Engineering fundamentals.",
    badge: "Data & Systems",
    icon: "Database"
  }
];

export const skillCategories = [
  {
    id: "programming",
    name: "Core Languages",
    description: "Algorithmic thinking, OOP, and data querying",
    skills: [
      { name: "Java", level: "DSA & Problem Solving", note: "LeetCode Practice" },
      { name: "Python", level: "Data Science & Scripting", note: "ML Pipelines" },
      { name: "JavaScript", level: "Modern ES6+", note: "React Ecosystem" },
      { name: "SQL", level: "Relational Queries", note: "HackerRank Certified" }
    ]
  },
  {
    id: "web",
    name: "Frontend & Web Architecture",
    description: "Modern, responsive client-side and full-stack architecture",
    skills: [
      { name: "React.js", level: "Component Architecture", note: "Hooks & State" },
      { name: "Tailwind CSS", level: "Utility-First Styling", note: "Modern Design Systems" },
      { name: "HTML5 & CSS3", level: "Semantic Markup", note: "Responsive Layouts" },
      { name: "Responsive UI", level: "Cross-Device UX", note: "Mobile & Desktop" }
    ]
  },
  {
    id: "ai-ml",
    name: "Data Science & Machine Learning",
    description: "End-to-end data pipelines, exploratory analysis, and predictive modeling",
    skills: [
      { name: "Scikit-learn", level: "Supervised Learning", note: "Classification & Regression" },
      { name: "Pandas", level: "Data Wrangling", note: "Data Preprocessing" },
      { name: "NumPy", level: "Numerical Computing", note: "Array Operations" },
      { name: "Exploratory Data Analysis", level: "Pattern Discovery", note: "Feature Insights" },
      { name: "MS Excel Analytics", level: "Data Analysis", note: "Microsoft SkillUp" }
    ]
  },
  {
    id: "databases-tools",
    name: "Databases, Cloud & Tools",
    description: "Data storage, cloud foundations, version control, and development environments",
    skills: [
      { name: "MySQL", level: "Relational Database", note: "Structured Storage" },
      { name: "MongoDB", level: "Document Database", note: "NoSQL Schemas" },
      { name: "Firebase", level: "BaaS & Realtime DB", note: "Auth & Firestore" },
      { name: "Git & GitHub", level: "Version Control", note: "Collaborative Repos" },
      { name: "VS Code & Jupyter", level: "Primary IDEs", note: "Interactive Workflows" },
      { name: "Vercel", level: "Deployment", note: "CI/CD & SPA Hosting" }
    ]
  }
];

export const featuredProjects = [
  {
    id: "smart-campus",
    title: "Smart Campus",
    category: "Web Application",
    badge: "Full-Stack Portal",
    summary:
      "A centralized web-based platform designed to organize campus-related information, student services, faculty resources, and academic activities with a responsive interface.",
    problemStatement:
      "Collegiate information—including schedules, faculty notices, department announcements, and campus resources—is often fragmented across disparate channels, causing miscommunication and delays for students.",
    solution:
      "Engineered an integrated, accessible web platform providing organized access to campus schedules, academic resources, and event updates through intuitive, reusable React components.",
    techStack: ["React.js", "JavaScript", "Tailwind CSS", "HTML5", "CSS3"],
    githubUrl: "https://github.com/Vinay786-3009/smart-campus",
    demoUrl: null,
    image: "/images/project-smart-campus.jpg",
    highlights: [
      "Responsive, clean UI accessible across smartphones, tablets, and desktop devices",
      "Organized sections for campus notices, student schedules, and academic resources",
      "Modular component architecture for effortless maintenance and department scalability"
    ]
  },
  {
    id: "vinay-ecommerce",
    title: "Vinay E-Commerce",
    category: "Web Application",
    badge: "Web Storefront",
    summary:
      "A responsive e-commerce web application focused on seamless product browsing, category filtering, cart interaction, and a clean shopping interface.",
    problemStatement:
      "Many e-commerce prototypes suffer from cluttered navigation, slow state synchronizations, and poor touch responsiveness on mobile viewports.",
    solution:
      "Created a modern, component-driven storefront featuring real-time product filtering, interactive cart state management, and an aesthetic dark-mode layout designed for conversion.",
    techStack: ["React.js", "Tailwind CSS", "JavaScript", "Responsive UI"],
    githubUrl: "https://github.com/Vinay786-3009/vinay-ecommerce",
    demoUrl: null,
    image: "/images/project-ecommerce.jpg",
    highlights: [
      "Reusable UI components with fluid hover interactions and accessible button states",
      "Dynamic client-side category filtering and responsive product grid layouts",
      "Interactive cart drawer and smooth checkout interface flow"
    ]
  },
  {
    id: "traffic-accident-analyzer",
    title: "Traffic Accident Hotspot Analyzer",
    category: "Data Science",
    badge: "Spatial Analytics",
    summary:
      "A data analytics project intended to identify accident-prone locations, road danger patterns, and severity clusters using traffic accident datasets.",
    problemStatement:
      "Urban transport planners and traffic authorities struggle to isolate the root variables—such as time of day, weather, and junction geometry—contributing to recurring high-severity collisions.",
    solution:
      "Analyzed traffic incident datasets using Python, Pandas, and spatial visualization techniques to uncover recurring hotspots and correlate accident frequency with temporal and environmental conditions.",
    techStack: ["Python", "Pandas", "NumPy", "Scikit-learn", "Data Visualization", "Jupyter Notebook"],
    githubUrl: "https://github.com/Vinay786-3009/traffic-accident-hotspot-analyzer",
    demoUrl: null,
    image: "/images/project-traffic-analyzer.jpg",
    highlights: [
      "End-to-end data cleaning, handling missing spatial values, and feature transformation",
      "Cluster identification and exploratory data analysis of accident frequency hotspots",
      "Data visualization to present findings to civic decision-makers and road safety teams"
    ]
  },
  {
    id: "student-prediction-system",
    title: "Student Prediction System",
    category: "Machine Learning",
    badge: "Predictive Modeling",
    summary:
      "A machine learning project designed to analyze student-related academic data, attendance records, and study habits to predict relevant performance outcomes.",
    problemStatement:
      "Academic institutions often detect student learning difficulties too late in the semester, missing the optimal window for targeted academic interventions.",
    solution:
      "Built a machine learning pipeline in Python using Scikit-learn that evaluates student demographic and performance features to classify academic risk and predict success probabilities.",
    techStack: ["Python", "Scikit-learn", "Machine Learning", "Pandas", "Feature Engineering"],
    githubUrl: "https://github.com/Vinay786-3009/student-prediction-system",
    demoUrl: null,
    image: "/images/project-student-prediction.jpg",
    highlights: [
      "Data preprocessing, categorical encoding, and feature scaling on academic datasets",
      "Model training, cross-validation, and evaluation using precision, recall, and accuracy metrics",
      "Interpretable feature importance ranking highlighting key drivers of academic performance"
    ]
  },
  {
    id: "arduino-traffic-system",
    title: "Academic Traffic Light System",
    category: "Embedded Systems",
    badge: "Hardware & IoT",
    summary:
      "An automated traffic light control system programmed using Arduino microcontroller, timing logic, and hardware circuit interfacing.",
    problemStatement:
      "Simulating and mastering real-time deterministic hardware control loops and state machines requires direct hardware integration.",
    solution:
      "Designed a programmed sequence controller on Arduino Uno with state-driven cycle transitions, safety delays, and LED driver circuitry.",
    techStack: ["Arduino", "C/C++", "Microcontroller Interfacing", "Embedded Logic"],
    githubUrl: "https://github.com/Vinay786-3009",
    demoUrl: null,
    image: "/images/project-arduino-traffic.jpg",
    highlights: [
      "Programmed traffic signal sequences and deterministic timing logic for automated operation",
      "Gained hands-on experience in circuit assembly, breadboard prototyping, and embedded programming",
      "Implemented fail-safe pedestrian and emergency state transitions"
    ]
  }
];

export const experienceTimeline = [
  {
    role: "AI/ML Developer Intern",
    company: "Vaultsphere AI Technologies Pvt. Ltd.",
    location: "Bangalore, India (Hybrid)",
    period: "May 11, 2026 – July 04, 2026",
    type: "Industry Internship",
    description:
      "Completed an official AI/ML Developer Internship at Vaultsphere AI Technologies Pvt. Ltd. (Intern ID: VAI-MA-B4-0060). Worked directly on developing and implementing machine learning models, data preprocessing pipelines, and AI-based solutions for real-world applications.",
    contributions: [
      "Developed and implemented supervised and unsupervised machine learning models, data preprocessing pipelines, and AI solutions.",
      "Gained hands-on practical industry exposure in Python, machine learning frameworks, multivariate data analysis, and model deployment.",
      "Collaborated with engineering leads and teammates to test, document, and deploy modular AI components for production workflows."
    ],
    skills: ["Python", "Machine Learning", "Data Analysis", "Model Deployment", "Git", "Problem Solving"],
    certificateAvailable: true,
    certificateTitle: "VaultSphere AI/ML Developer Internship Certificate (ID: VAI-MA-B4-0060)",
    pdfUrl: "/certificates/VaultSphere_AI_Internship_Certificate.pdf",
    imageUrl: "/certificates/vaultsphere_internship.jpg"
  },
  {
    role: "Data Science & Machine Learning Intern",
    company: "CodeAlpha",
    location: "Remote",
    period: "Internship Project",
    type: "Project Internship",
    description:
      "Engaged in hands-on data science and machine learning assignments using Python and Jupyter Notebook, building predictive workflows from raw data to model evaluation.",
    contributions: [
      "Executed end-to-end data cleaning, handling null values, outlier filtering, and feature preparation using Pandas and NumPy.",
      "Conducted Exploratory Data Analysis (EDA) to detect correlations, distributions, and patterns in multivariate datasets.",
      "Developed, tuned, and evaluated supervised classification and regression models using Scikit-learn, including Iris Flower Classification and Car Price Prediction projects."
    ],
    skills: ["Python", "Pandas", "NumPy", "Scikit-learn", "Jupyter Notebook", "EDA"],
    certificateAvailable: false,
    certificateTitle: null
  }
];

export const educationHistory = [
  {
    degree: "B.Tech, Artificial Intelligence & Data Science",
    institution: "Mother Theresa Institute of Engineering & Technology (JNTUA)",
    location: "Palamaner, Andhra Pradesh",
    period: "2023 - 2027",
    status: "Currently in 3rd Year (Expected 2027)",
    score: "Score: 75%",
    badge: "Degree",
    details:
      "Comprehensive coursework covering Artificial Intelligence, Machine Learning, Data Structures & Algorithms, Database Systems, Computer Networks, and Object-Oriented Software Engineering."
  },
  {
    degree: "Intermediate (12th Standard - MPC)",
    institution: "Mother Theresa Junior College, Palamaner",
    location: "Palamaner, Andhra Pradesh",
    period: "2021 - 2023",
    status: "Completed",
    score: "Score: 70%",
    badge: "Higher Secondary",
    details:
      "Mathematics, Physics, and Chemistry (MPC) specialization focusing on analytical reasoning, calculus, and foundational science."
  },
  {
    degree: "Secondary School Certificate (SSC / 10th)",
    institution: "J.M.J E.M. School, Guttur",
    location: "Guttur, Andhra Pradesh",
    period: "2021",
    status: "Completed",
    score: "Score: 88% Distinction",
    badge: "High School",
    details:
      "Strong foundational academic track record with distinction in mathematics and science disciplines."
  }
];

/**
 * CERTIFICATIONS & CREDENTIALS
 * Explicitly ordered according to requirement:
 * 1. Government & Global Verified Certifications (with PDFs)
 * 2. EduSkills Academy Certifications (by Cohort)
 * 3. Hackathons, Competitions & Honors
 */
export const certificationCategories = [
  { id: "all", label: "All Credentials" },
  { id: "global", label: "Govt & Global Certifications" },
  { id: "eduskills", label: "EduSkills Academy" },
  { id: "hackathons", label: "Hackathons & Honors" },
  { id: "internships", label: "Internships" }
];

export const allCertificates = [
  // 1. Govt & Global Verified Certifications
  {
    id: "cert-iks-tkdl",
    category: "global",
    title: "IKS-TKDL Intellectual Property & People's Rights Merit Certificate",
    issuer: "Ministry of Education & CSIR (Govt of India)",
    organization: "Indian Knowledge Systems (IKS) & CSIR-TKDL Unit",
    date: "August 2025",
    serialNumber: "2023245943.0",
    scoreBadge: "Score: 75%+ Merit",
    badgeColor: "gold",
    type: "Merit Certificate",
    imageUrl: "/certificates/iks_tkdl_merit.jpg",
    pdfUrl: "/certificates/IKS_TKDL_CSIR_Merit.pdf",
    description:
      "Merit certificate awarded for outstanding performance with a score of 75% or above in the 8th Online Workshop on IKS-TKDL: Traditional Knowledge - Intellectual Property & People's Rights, organized jointly by Indian Knowledge Systems (IKS) Division, Ministry of Education, and CSIR-Traditional Knowledge Digital Library (TKDL) Unit, Ministry of Science and Technology.",
    hasPdf: true
  },
  {
    id: "cert-hp-life",
    category: "global",
    title: "Data Science & Analytics Certificate of Completion",
    issuer: "HP LIFE | HP Foundation",
    organization: "HP Foundation Global Initiative",
    date: "June 6, 2026",
    serialNumber: "92fc3dbf-6905-4ee1-b659-f74a260a4dfa",
    scoreBadge: "HP Verified",
    badgeColor: "gold",
    type: "Professional Certification",
    imageUrl: "/certificates/hp_life_data_science.jpg",
    pdfUrl: "/certificates/HP_LIFE_Data_Science_Analytics.pdf",
    description:
      "Successfully mastered leading data science and analytics practices, methodologies, and tools; examined the strategic benefits and challenges of data-driven decision making for enterprise applications.",
    hasPdf: true
  },
  {
    id: "cert-hackerrank-sql",
    category: "global",
    title: "SQL (Basic) Skill Certification",
    issuer: "HackerRank",
    organization: "HackerRank Technical Assessment",
    date: "June 30, 2026",
    serialNumber: "ID: A97CECBD8FF4",
    scoreBadge: "Passed Skill Test",
    badgeColor: "gold",
    type: "Skill Certification",
    imageUrl: "/certificates/hackerrank_sql.jpg",
    pdfUrl: "/certificates/HackerRank_SQL_Basic.pdf",
    description:
      "Verified skill certification test assessing proficiency in SQL relational querying, joins, aggregations, filtering, and database operations.",
    hasPdf: true
  },
  {
    id: "cert-microsoft-excel",
    category: "global",
    title: "Introduction to MS Excel Declaration of Completion",
    issuer: "Microsoft | Simplilearn SkillUp",
    organization: "Simplilearn & Microsoft Learning",
    date: "June 9, 2026",
    serialNumber: "Code: 10327935",
    scoreBadge: "Completed",
    badgeColor: "gold",
    type: "Course Completion",
    imageUrl: "/certificates/microsoft_excel.jpg",
    pdfUrl: "/certificates/Microsoft_Simplilearn_MS_Excel.pdf",
    description:
      "Declaration of course completion demonstrating initiative in mastering Microsoft Excel fundamentals, data organization, formulas, functions, and analytical spreadsheets.",
    hasPdf: true
  },
  {
    id: "cert-nptel-iiot",
    category: "global",
    title: "Introduction to Industry 4.0 and Industrial Internet of Things",
    issuer: "NPTEL & IIT Kharagpur | Ministry of Education",
    organization: "National Programme on Technology Enhanced Learning (NPTEL)",
    date: "Jul - Oct 2025 (12-Week Course)",
    serialNumber: "Roll No: NPTEL25CS146S962100466",
    scoreBadge: "86% Elite Distinction",
    badgeColor: "gold",
    type: "Elite Academic Certificate",
    imageUrl: "/certificates/nptel_iiot.jpg",
    pdfUrl: "/certificates/NPTEL_Industry_4_0_IIoT_Elite.pdf",
    description:
      "Awarded Elite Certificate by NPTEL, Ministry of Education, Government of India, and IIT Kharagpur for completing the 12-week course 'Introduction to Industry 4.0 and Industrial Internet of Things'. Achieved an Elite score of 86% (Assignments: 24.78/25, Proctored Exam: 61.5/75) among 19,100 candidates with 3-4 recommended academic credits.",
    hasPdf: true
  },

  // 2. EduSkills Academy Certifications (Official Virtual Internships with Verified PDFs)
  {
    id: "cert-eduskills-mern",
    category: "eduskills",
    title: "MERN Full Stack Development With Project Virtual Internship",
    issuer: "EduSkills Academy & AICTE | Ministry of Education",
    organization: "EduSkills Academy & National Internship Portal",
    date: "August - October 2026",
    serialNumber: "4a309f23fb07843efb3f | Student ID: STU662b7065044401714122853",
    scoreBadge: "Grade: O (Outstanding 90-100)",
    badgeColor: "gold",
    type: "Virtual Internship Certificate",
    imageUrl: "/certificates/eduskills_mern_fullstack.jpg",
    pdfUrl: "/certificates/EduSkills_MERN_Full_Stack_Internship.pdf",
    description:
      "Successfully completed an intensive 8-week MERN Full Stack Development With Project Virtual Internship supported by EduSkills Academy, All India Council for Technical Education (AICTE), and the Ministry of Education. Awarded highest Grade 'O' (Outstanding: 90-100) with official verification seal.",
    hasPdf: true,
    isVirtualInternship: true
  },
  {
    id: "cert-eduskills-aws-genai",
    category: "eduskills",
    title: "GEN-AI Virtual Internship",
    issuer: "EduSkills Academy & AWS Academy | AICTE",
    organization: "Amazon Web Services (AWS) Academy & EduSkills",
    date: "October - December 2025",
    serialNumber: "b0bcaeb0072460025e631821543b2a51 | Student ID: STU662b7065044401714122853",
    scoreBadge: "Grade: O (Outstanding 90-100)",
    badgeColor: "gold",
    type: "Virtual Internship Certificate",
    imageUrl: "/certificates/eduskills_aws_genai_internship.jpg",
    pdfUrl: "/certificates/EduSkills_AWS_GenAI_Virtual_Internship.pdf",
    description:
      "Completed the 10-week GEN-AI Virtual Internship with official curriculum provided by AWS Academy in collaboration with AICTE and EduSkills Academy. Mastered Generative AI foundation models, prompt engineering, and LLM applications with top Grade 'O' (Outstanding: 90-100).",
    hasPdf: true,
    isVirtualInternship: true
  },
  {
    id: "cert-eduskills-aws-data",
    category: "eduskills",
    title: "Data Engineering Virtual Internship",
    issuer: "EduSkills Academy & AWS Academy | AICTE",
    organization: "Amazon Web Services (AWS) Academy & EduSkills",
    date: "July - September 2025",
    serialNumber: "128b3a00ab580979e33a077962f6c843 | Student ID: STU662b7065044401714122853",
    scoreBadge: "Grade: B (Good 60-69)",
    badgeColor: "gold",
    type: "Virtual Internship Certificate",
    imageUrl: "/certificates/eduskills_aws_data_engineering_internship.jpg",
    pdfUrl: "/certificates/EduSkills_AWS_Data_Engineering_Internship.pdf",
    description:
      "Completed the 10-week Data Engineering Virtual Internship curriculum provided by AWS Academy, AICTE, and EduSkills Academy, gaining practical proficiency in cloud data pipelines, AWS S3 data storage, and analytical database querying.",
    hasPdf: true,
    isVirtualInternship: true
  },
  {
    id: "cert-eduskills-ansys-fluids",
    category: "eduskills",
    title: "Fluids Dynamics Virtual Internship",
    issuer: "EduSkills & Ansys (Part of Synopsys) | AICTE",
    organization: "Ansys Academic & EduSkills Academy",
    date: "April - June 2026",
    serialNumber: "41bf95c779dd974eeb30 | Student ID: STU662b7065044401714122853",
    scoreBadge: "Grade: O (Outstanding 90-100)",
    badgeColor: "gold",
    type: "Virtual Internship Certificate",
    imageUrl: "/certificates/eduskills_ansys_fluids_dynamics.jpg",
    pdfUrl: "/certificates/EduSkills_Ansys_Fluids_Dynamics_Internship.pdf",
    description:
      "Completed the 8-week Fluids Dynamics Virtual Internship supported by Ansys (part of Synopsys), AICTE, and EduSkills Academy, demonstrating computational simulation and engineering modeling with highest Grade 'O' (Outstanding: 90-100).",
    hasPdf: true,
    isVirtualInternship: true
  },

  // 3. Hackathons, Honors & Competitions
  {
    id: "cert-hackathon-24h",
    category: "hackathons",
    title: "Certificate of Appreciation — Hack House 24-Hour Live Hackathon",
    issuer: "Mother Theresa Institute of Engineering & Technology",
    organization: "Hack House (24-Hour Live Innovation Hackathon)",
    date: "26-12-2025 to 27-12-2025",
    serialNumber: "Awarded to Logic Lords Team",
    scoreBadge: "Logic Lords Team Award",
    badgeColor: "gold",
    type: "Hackathon Recognition",
    imageUrl: "/certificates/hackathon_winner_24h.jpg",
    pdfUrl: null,
    description:
      "Awarded to Bangalore Vinay and the Logic Lords Team in recognition of their exceptional performance, dedication, and outstanding achievement in Hack House 24-hour continuous live hackathon (December 26-27, 2025). Evaluated on innovative architecture, rapid problem-solving, and working software execution.",
    hasPdf: false
  },

  {
    id: "cert-iot-workshop",
    category: "hackathons",
    title: "IoT In Action — Smart Device & Connectivity Workshop",
    issuer: "7ROBOLABS & Dept of AI&DS | Mother Theresa Institute",
    organization: "7ROBOLABS & UGC-Autonomous MTIET",
    date: "February 15, 2025",
    serialNumber: "Awarded to B.VINAY",
    scoreBadge: "7ROBOLABS Verified",
    badgeColor: "gold",
    type: "Technical Workshop Certificate",
    imageUrl: "/certificates/iot_in_action_workshop.jpg",
    externalUrl: null,
    pdfUrl: null,
    description:
      "Awarded to B.Vinay in appreciation of exceptional achievements and contributions in Applications of IoT in collaboration with 7ROBOLABS & Department of Artificial Intelligence & Data Science, Mother Theresa Institute of Engineering & Technology.",
    hasPdf: false
  },
  {
    id: "cert-quizoff-ai",
    category: "hackathons",
    title: "QuizOff 2026: India's Biggest AI Quiz Certificate",
    issuer: "CampusCrew & Unstop",
    organization: "Unstop Global Student Community",
    date: "19-July-2026",
    serialNumber: "Presented to BANGALORE VINAY",
    scoreBadge: "5.25L+ Students",
    badgeColor: "gold",
    type: "National AI Competition",
    imageUrl: "/certificates/quizoff_2026_ai_quiz.jpg",
    externalUrl: null,
    pdfUrl: null,
    description:
      "Proudly presented to Bangalore Vinay in recognition of being among the select students who competed in QuizOff 2026: India's Biggest AI Quiz, organised by CampusCrew and hosted on Unstop where 5,25,000+ students from 48,500+ institutions across the globe competed.",
    hasPdf: false
  },

  // 4. Internships (Official Verified Industry Internship)
  {
    id: "cert-internship-vaultsphere",
    category: "internships",
    title: "AI/ML Developer Internship Certificate",
    issuer: "Vaultsphere AI Technologies Pvt. Ltd.",
    organization: "APSCHE & AICTE Approved Industry Internship",
    date: "May 11, 2026 to July 04, 2026",
    serialNumber: "Intern ID: VAI-MA-B4-0060 | Reg No: 23HR1A3009",
    scoreBadge: "AI/ML Developer Intern",
    badgeColor: "gold",
    type: "Industry Internship Certificate",
    imageUrl: "/certificates/vaultsphere_internship.jpg",
    pdfUrl: "/certificates/VaultSphere_AI_Internship_Certificate.pdf",
    description:
      "Successfully completed an AI/ML Developer Internship at Vaultsphere AI Technologies Pvt. Ltd. (May 11, 2026 to July 04, 2026). Worked on developing and implementing machine learning models, data preprocessing pipelines, and AI-based solutions with hands-on experience in Python, machine learning frameworks, data analysis, and model deployment in real-world applications.",
    hasPdf: true,
    isVirtualInternship: true
  }
];

export const achievementsHonors = [
  {
    title: "Certificate of Appreciation — Hack House 24-Hour Live Hackathon",
    organization: "Mother Theresa Institute of Engineering & Technology",
    date: "Dec 26 - 27, 2025",
    description:
      "Awarded to Bangalore Vinay and the Logic Lords Team in recognition of exceptional performance, dedication, and outstanding achievement during the 24-hour continuous Hack House sprint.",
    badge: "Logic Lords Team Award",
    icon: "Trophy"
  },
  {
    title: "NPTEL Industry 4.0 & IIoT — Elite Distinction (86%)",
    organization: "NPTEL, Ministry of Education & IIT Kharagpur",
    date: "Jul - Oct 2025",
    description:
      "Achieved a top-tier Elite distinction with 86% across 19,100 candidates in the 12-week national course on Introduction to Industry 4.0 and Industrial Internet of Things.",
    badge: "86% Elite Distinction",
    icon: "Award"
  },
  {
    title: "Government of India (IKS & CSIR) Merit Award",
    organization: "Ministry of Education & Ministry of Science & Tech",
    date: "August 2025",
    description:
      "Honored with an official Merit Certificate with 75%+ score for outstanding performance in the national 8th Online Workshop on IKS-TKDL Intellectual Property & Rights.",
    badge: "Merit Score 75%+",
    icon: "Medal"
  },
  {
    title: "Active Competitive Programming in Java",
    organization: "LeetCode (@B_vinay786)",
    date: "Daily Practice",
    description:
      "Consistent problem-solving track record sharpening algorithmic speed, space-time complexity analysis, and object-oriented Java foundations.",
    badge: "Java DSA Track",
    icon: "Code"
  }
];
