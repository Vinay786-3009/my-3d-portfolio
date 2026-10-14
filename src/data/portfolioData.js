/**
 * BANGALORE VINAY - PORTFOLIO DATA ARCHITECTURE
 * Single Source of Truth for verified resume data, verified GitHub repositories,
 * technical skills, educational milestones, and certifications.
 */

export const personalInfo = {
  name: "Bangalore Vinay",
  shortName: "Vinay",
  monogram: "BV",
  title: "AI & Data Science Student | Software Developer | Problem Solver",
  headline: "Building ideas into intelligent experiences.",
  subheadline:
    "I am a B.Tech Artificial Intelligence and Data Science student specializing in building responsive web applications, exploring data-driven solutions, and developing practical machine learning systems.",
  aboutEditorial:
    "I am a B.Tech student specializing in Artificial Intelligence and Data Science, interested in building responsive web applications, exploring data-driven solutions, and developing practical software projects. I enjoy problem-solving, learning new technologies, and turning ideas into useful digital experiences.",
  location: "Palamaner, Andhra Pradesh, India",
  email: "vinay76b@gmail.com",
  phone: "6303552270", // Kept optional/protected on public UI
  status: "Open to Software Engineering & AI/ML Internships",
  currentDegree: "B.Tech in Artificial Intelligence & Data Science",
  institution: "Mother Theresa Institute of Engineering and Technology, JNTUA",
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

export const problemSolvingPhilosophy = [
  {
    step: "01",
    title: "Deconstruct & Analyze",
    description:
      "Break down complex requirements into first principles. Identify edge cases, data structures, and user pain points before writing a line of code."
  },
  {
    step: "02",
    title: "Architect & Build",
    description:
      "Implement clean, modular code with modern best practices—whether designing responsive React component trees or Scikit-learn preprocessing pipelines."
  },
  {
    step: "03",
    title: "Test & Validate",
    description:
      "Validate functionality thoroughly against edge cases, evaluating machine learning models on unseen metrics and ensuring UI responsive integrity."
  },
  {
    step: "04",
    title: "Refine & Iterate",
    description:
      "Continuously optimize execution efficiency, visual accessibility, and system performance based on objective feedback and benchmark metrics."
  }
];

export const skillCategories = [
  {
    id: "programming",
    name: "Programming Languages",
    description: "Core algorithmic foundations & object-oriented programming",
    skills: [
      { name: "Java", level: "DSA & Problem Solving", note: "LeetCode Practice" },
      { name: "Python", level: "Data Science & Scripting", note: "ML Pipelines" },
      { name: "JavaScript", level: "ES6+ Modern Frontend", note: "React Ecosystem" },
      { name: "SQL", level: "Relational Queries", note: "Data Analysis" }
    ]
  },
  {
    id: "web",
    name: "Web Development",
    description: "Modern, responsive client-side and full-stack architecture",
    skills: [
      { name: "React.js", level: "Component Architecture", note: "Hooks & State" },
      { name: "Tailwind CSS", level: "Utility-First Styling", note: "Modern Design Systems" },
      { name: "HTML5", level: "Semantic Structure", note: "Web Accessibility" },
      { name: "CSS3", level: "Animations & Layouts", note: "Flexbox / Grid" },
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
      { name: "NumPy", level: "Numerical Computing", note: "Array Math" },
      { name: "Exploratory Data Analysis (EDA)", level: "Pattern Discovery", note: "Feature Insights" },
      { name: "Data Preprocessing", level: "Feature Engineering", note: "Scaling & Encoding" }
    ]
  },
  {
    id: "databases",
    name: "Databases & Storage",
    description: "Persistent data storage, querying, and realtime platforms",
    skills: [
      { name: "MySQL", level: "Relational Database", note: "Structured Storage" },
      { name: "MongoDB", level: "Document Database", note: "NoSQL Schemas" },
      { name: "Firebase", level: "BaaS & Realtime DB", note: "Auth & Firestore" }
    ]
  },
  {
    id: "tools",
    name: "Tools & Platforms",
    description: "Development environments, version control, and deployment",
    skills: [
      { name: "Git", level: "Version Control", note: "Branching & History" },
      { name: "GitHub", level: "Collaboration", note: "Open Source Repos" },
      { name: "VS Code", level: "Primary IDE", note: "Extensions & Debugging" },
      { name: "Jupyter Notebook", level: "Data Science Workflow", note: "Interactive Computing" },
      { name: "Vercel", level: "Cloud Deployment", note: "CI/CD & SPA Hosting" },
      { name: "XAMPP", level: "Local Server Stack", note: "Apache & MySQL" }
    ]
  },
  {
    id: "specialized",
    name: "Industry Exposure & Hardware",
    description: "Certifications and applied hardware integration",
    skills: [
      { name: "AWS Data Engineering", level: "EduSkills Cohort 13", note: "Cloud Data" },
      { name: "AWS Generative AI", level: "EduSkills Cohort 14", note: "GenAI Foundations" },
      { name: "Google AI-ML", level: "EduSkills Cohort 15", note: "Applied AI" },
      { name: "Arduino & Embedded Systems", level: "Hardware Interfacing", note: "C/C++ Automation" }
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
    demoUrl: null, // Verified: No separate production link declared; labeled 'Source Code'
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
    category: "Frontend Application",
    badge: "Web Storefront",
    summary:
      "A responsive e-commerce web application focused on seamless product browsing, category filtering, cart interaction, and a clean shopping interface.",
    problemStatement:
      "Many e-commerce prototypes suffer from cluttered navigation, slow state synchronizations, and poor touch responsiveness on mobile viewports.",
    solution:
      "Created a modern, component-driven storefront featuring real-time product filtering, interactive cart state management, and an aesthetic dark-mode layout designed for conversion.",
    techStack: ["React.js", "Tailwind CSS", "JavaScript", "Responsive UI"],
    githubUrl: "https://github.com/Vinay786-3009/vinay-ecommerce",
    demoUrl: null, // Labeled 'Source Code' per prompt instructions
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
    category: "Data Science & Analytics",
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
    role: "Data Science & Machine Learning Intern",
    company: "CodeAlpha",
    location: "Remote",
    period: "Internship",
    type: "Data Science & ML",
    description:
      "Engaged in hands-on data science and machine learning assignments using Python and Jupyter Notebook, building predictive workflows from raw data to model evaluation.",
    contributions: [
      "Executed end-to-end data cleaning, handling null values, outlier filtering, and feature preparation using Pandas and NumPy.",
      "Conducted Exploratory Data Analysis (EDA) to detect correlations, distributions, and patterns in multivariate datasets.",
      "Developed, tuned, and evaluated supervised classification and regression models using Scikit-learn, including Iris Flower Classification and Car Price Prediction projects."
    ],
    skills: ["Python", "Pandas", "NumPy", "Scikit-learn", "Jupyter Notebook", "EDA"]
  },
  {
    role: "Intern",
    company: "Vaultsphere AI Technologies",
    location: "Internship",
    period: "Internship",
    type: "AI & Software Development",
    description:
      "Participated in practical technical tasks involving data operations, software development practices, and AI-related workflows in a team environment.",
    contributions: [
      "Applied programming and analytical skills to support project-based activities and software modules.",
      "Gained valuable practical exposure to industry-oriented development workflows, version control, and problem decomposition.",
      "Collaborated with peers and technical leads to test, document, and improve data and software tasks."
    ],
    skills: ["Software Engineering", "AI Technologies", "Problem Solving", "Collaboration", "Data"]
  }
];

export const educationHistory = [
  {
    degree: "B.Tech in Artificial Intelligence & Data Science",
    institution: "Mother Theresa Institute of Engineering and Technology, JNTUA",
    location: "Palamaner, Andhra Pradesh",
    period: "2023 - 2027",
    status: "Currently in 3rd Year (Expected 2027)",
    score: "75%",
    details:
      "Comprehensive coursework covering Artificial Intelligence, Machine Learning, Data Structures & Algorithms, Database Systems, Computer Networks, and Object-Oriented Software Engineering."
  },
  {
    degree: "Intermediate (12th Standard - MPC)",
    institution: "Mother Theresa Junior College, Palamaner",
    location: "Palamaner, Andhra Pradesh",
    period: "2021 - 2023",
    status: "Completed",
    score: "70%",
    details: "Mathematics, Physics, and Chemistry (MPC) specialization focusing on analytical reasoning, calculus, and foundational science."
  },
  {
    degree: "Secondary School Certificate (SSC / 10th)",
    institution: "J.M.J E.M. School, Guttur",
    location: "Guttur, Andhra Pradesh",
    period: "2021",
    status: "Completed",
    score: "88%",
    details: "Strong foundational academic track record with distinction in mathematics and science disciplines."
  }
];

export const certifications = [
  {
    title: "NPTEL Industrial IoT (IIOT)",
    issuer: "NPTEL / IIT",
    credential: "Elite with 86%",
    category: "IoT & Systems",
    highlight: "Elite Distinction (Top Tier)"
  },
  {
    title: "AWS Data Engineering",
    issuer: "EduSkills",
    credential: "Completed (Cohort 13)",
    category: "Cloud & Data",
    highlight: "AWS Academy Aligned"
  },
  {
    title: "AWS Generative AI",
    issuer: "EduSkills",
    credential: "Completed (Cohort 14)",
    category: "Generative AI",
    highlight: "Cloud GenAI Foundations"
  },
  {
    title: "Google AI-ML",
    issuer: "EduSkills",
    credential: "Completed (Cohort 15)",
    category: "Machine Learning",
    highlight: "Google Cloud AI Curriculum"
  },
  {
    title: "ANSYS Fluid Dynamics",
    issuer: "EduSkills",
    credential: "Completed (Cohort 16)",
    category: "Computational Engineering",
    highlight: "Simulation Fundamentals"
  },
  {
    title: "Blue Prism Intelligent Automation",
    issuer: "EduSkills",
    credential: "Completed (Cohort 8)",
    category: "RPA & Automation",
    highlight: "Process Automation"
  },
  {
    title: "Data Science Internship & ML Projects",
    issuer: "CodeAlpha",
    credential: "Completed & Evaluated",
    category: "Data Science",
    highlight: "Hands-on ML Delivery"
  }
];

export const achievements = [
  {
    title: "Prize Winner — 24-Hour Live Hackathon",
    description:
      "Collaborated in a high-intensity 24-hour hackathon, designing and prototyping a functional tech solution under strict time constraints.",
    icon: "Trophy"
  },
  {
    title: "Active LeetCode Problem Solving (Java)",
    description:
      "Practicing Data Structures and Algorithms consistently on LeetCode with focused problem solving in Java (Arrays, Strings, HashMaps, Two Pointers).",
    icon: "Code"
  },
  {
    title: "40+ Repositories & Continuous Practice",
    description:
      "Maintaining an active GitHub profile with ongoing academic coursework, web interfaces, machine learning experiments, and daily coding repositories.",
    icon: "GitBranch"
  }
];
