import React from 'react'
import './App.css'
import Scene from './components/Scene'
import { motion } from 'framer-motion'

const SectionAnimation = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

const CardAnimation = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

function App() {
  return (
    <div className="portfolio">

      <nav className="navbar">
        <div className="logo">BANGALORE VINAY</div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="home" className="hero">

        <div className="scene-container">
          <Scene />
        </div>

        <div className="hero-content">

          <p className="hello">HELLO, I'M</p>

          <h1>BANGALORE VINAY</h1>

          <h2>
            DATA ANALYST • AI & DATA SCIENCE • MACHINE LEARNING
          </h2>
          <div className="hero-tags">
  <span>DATA</span>
  <span>•</span>
  <span>AI</span>
  <span>•</span>
  <span>CODE</span>
</div>

          <p className="description">
            I turn data into meaningful insights using Python, SQL,
            Pandas, NumPy and Machine Learning. Currently building
            real-world projects and growing as a Data Analyst.
          </p>

          <div className="hero-buttons">

            <a href="#projects" className="primary-btn">
              View My Projects
            </a>

            <a
              href="/Bangalore_Vinay_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="secondary-btn"
            >
              Download Resume
            </a>

            <a
              href="https://github.com/Vinay786-3009"
              target="_blank"
              rel="noreferrer"
              className="secondary-btn"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/bangalore-vinay-4762512a6/"
              target="_blank"
              rel="noreferrer"
              className="secondary-btn"
            >
              LinkedIn
            </a>

          </div>

        </div>

      </section>

      <SectionAnimation>
        <section id="about" className="section">

          <p className="section-label">GET TO KNOW ME</p>

          <h2>About Me</h2>

          <div className="about-content">

            <div>

              <p>
                I am BANGALORE VINAY, a B.Tech Artificial Intelligence
                & Data Science student interested in Data Analytics,
                Machine Learning, Web Development and Artificial
                Intelligence.
              </p>

              <p>
                I enjoy working with Python, SQL, Pandas, NumPy and
                Scikit-learn to analyze datasets, discover patterns
                and develop machine learning solutions.
              </p>

              <p>
                I am continuously improving my technical and
                problem-solving skills through projects, internships
                and coding practice.
              </p>

            </div>

            <CardAnimation>
              <div className="info-card">

                <h3>Career Objective</h3>

                <p>
                  Detail-oriented AI & Data Science student seeking a
                  Data Analyst role where I can leverage Python, SQL,
                  machine learning and data visualization to extract
                  actionable insights and support data-driven decisions.
                </p>

              </div>
            </CardAnimation>

          </div>

        </section>
      </SectionAnimation>

      <SectionAnimation>
        <section id="skills" className="section">

          <p className="section-label">WHAT I WORK WITH</p>

          <h2>Technical Skills</h2>

          <div className="skills-grid">

            <CardAnimation>
              <div className="skill-card">
                <h3>Languages & Core</h3>
                <p>Python</p>
                <p>Java</p>
                <p>JavaScript</p>
                <p>Data Structures & Algorithms</p>
                <p>SQL</p>
              </div>
            </CardAnimation>

            <CardAnimation>
              <div className="skill-card">
                <h3>Data Science & ML</h3>
                <p>Data Analysis</p>
                <p>Machine Learning</p>
                <p>Scikit-learn</p>
                <p>Pandas</p>
                <p>NumPy</p>
              </div>
            </CardAnimation>

            <CardAnimation>
              <div className="skill-card">
                <h3>Web Development</h3>
                <p>HTML</p>
                <p>CSS</p>
                <p>React.js</p>
                <p>Tailwind CSS</p>
                <p>Full-Stack Development</p>
              </div>
            </CardAnimation>

            <CardAnimation>
              <div className="skill-card">
                <h3>Databases & Tools</h3>
                <p>MySQL</p>
                <p>MongoDB</p>
                <p>Git & GitHub</p>
                <p>VS Code</p>
                <p>Jupyter Notebook</p>
              </div>
            </CardAnimation>

          </div>

        </section>
      </SectionAnimation>

      <SectionAnimation>
  <section id="education" className="section">

    <p className="section-label">MY ACADEMIC JOURNEY</p>

    <h2>Education</h2>

    <div className="timeline">

      <CardAnimation>
        <div className="timeline-item">
          <span>2027</span>

          <div>
            <h3>B.Tech in Artificial Intelligence & Data Science</h3>

            <p>
              Mother Theresa Institute of Engineering and Technology
            </p>

            <p>JNTUA University</p>

            <strong>84%</strong>
          </div>
        </div>
      </CardAnimation>

      <CardAnimation>
        <div className="timeline-item">
          <span>2023</span>

          <div>
            <h3>Intermediate</h3>

            <p>Mother Theresa College</p>

            <strong>70%</strong>
          </div>
        </div>
      </CardAnimation>

      <CardAnimation>
        <div className="timeline-item">
          <span>2021</span>

          <div>
            <h3>Secondary School Certificate (SSC)</h3>

            <p>J.M.J E.M. School</p>

            <strong>88%</strong>
          </div>
        </div>
      </CardAnimation>

    </div>

  </section>
</SectionAnimation>

      <SectionAnimation>
        <section id="experience" className="section">

          <p className="section-label">MY EXPERIENCE</p>

          <h2>Internship Experience</h2>

          <CardAnimation>
            <div className="experience-card">

              <div className="experience-header">

                <div>
                  <h3>Data Science & Machine Learning Intern</h3>
                  <p>CodeAlpha</p>
                </div>

                <span>Remote</span>

              </div>

              <ul>

                <li>
                  Developed end-to-end machine learning models including
                  Iris Flower Classification and Car Price Prediction.
                </li>

                <li>
                  Executed data cleaning, feature engineering and
                  exploratory data analysis using Pandas, NumPy and
                  Scikit-learn.
                </li>

                <li>
                  Applied regression and classification algorithms and
                  evaluated model performance using appropriate metrics.
                </li>

              </ul>

            </div>
          </CardAnimation>

        </section>
      </SectionAnimation>

      <SectionAnimation>
        <section id="projects" className="section">

          <p className="section-label">WHAT I'VE BUILT</p>

          <h2>Featured Projects</h2>

          <div className="project-grid">

            <CardAnimation>
              <div className="project-card">
                <span className="project-number">01</span>

                <h3>Car Price Prediction</h3>

                <p>
                  Developed a machine learning model to estimate vehicle
                  prices based on historical features.
                </p>

                <div className="tech">
                  Python · Pandas · NumPy · Scikit-learn
                </div>

                <a
                  href="https://github.com/Vinay786-3009/CodeAlpha_Car_Price_Prediction"
                  target="_blank"
                  rel="noreferrer"
                >
                  View on GitHub →
                </a>
              </div>
            </CardAnimation>

            <CardAnimation>
              <div className="project-card">
                <span className="project-number">02</span>

                <h3>AI Chatbot</h3>

                <p>
                  Developed an interactive AI chatbot interface using
                  modern web technologies and responsive UI components.
                </p>

                <div className="tech">
                  Next.js · React.js · JavaScript · AI
                </div>

                <a
                  href="https://github.com/Vinay786-3009/nextjs-ai-chatbot"
                  target="_blank"
                  rel="noreferrer"
                >
                  View on GitHub →
                </a>
              </div>
            </CardAnimation>

            <CardAnimation>
              <div className="project-card">
                <span className="project-number">03</span>

                <h3>Instagram Web Project</h3>

                <p>
                  Developed an Instagram-inspired web application
                  focusing on modern frontend design and user interaction.
                </p>

                <div className="tech">
                  React.js · JavaScript · HTML · CSS
                </div>

                <a
                  href="https://github.com/Vinay786-3009/instagram"
                  target="_blank"
                  rel="noreferrer"
                >
                  View on GitHub →
                </a>
              </div>
            </CardAnimation>

            <CardAnimation>
              <div className="project-card">
                <span className="project-number">04</span>

                <h3>Admin Dashboard</h3>

                <p>
                  Developed an administrative web interface for managing
                  application-related information and user operations.
                </p>

                <div className="tech">
                  React.js · JavaScript · HTML · CSS
                </div>

                <a
                  href="https://github.com/Vinay786-3009/admin"
                  target="_blank"
                  rel="noreferrer"
                >
                  View on GitHub →
                </a>
              </div>
            </CardAnimation>

            <CardAnimation>
              <div className="project-card">
                <span className="project-number">05</span>

                <h3>Users Management</h3>

                <p>
                  Developed a web project focused on displaying and
                  managing user-related information.
                </p>

                <div className="tech">
                  React.js · JavaScript · Web Development
                </div>

                <a
                  href="https://github.com/Vinay786-3009/users"
                  target="_blank"
                  rel="noreferrer"
                >
                  View on GitHub →
                </a>
              </div>
            </CardAnimation>

          </div>

        </section>
      </SectionAnimation>

      <SectionAnimation>
        <section id="certifications" className="section">

          <p className="section-label">ACHIEVEMENTS</p>

          <h2>Certifications & Achievements</h2>

          <div className="achievement-list">

            <CardAnimation>
              <div className="achievement">
                <span>01</span>

                <p>
                  Data Science Internship & Machine Learning Project
                  Certifications — CodeAlpha.
                </p>
              </div>
            </CardAnimation>

            <CardAnimation>
              <div className="achievement">
                <span>02</span>

                <p>
                  Solved Data Structures & Algorithms challenges on
                  LeetCode using Java.
                </p>
              </div>
            </CardAnimation>

            <CardAnimation>
              <div className="achievement">
                <span>03</span>

                <p>
                  Maintained an active GitHub portfolio containing
                  data science and web development projects.
                </p>
              </div>
            </CardAnimation>

          </div>

        </section>
      </SectionAnimation>

      <SectionAnimation>
        <section id="contact" className="contact-section">

          <p className="section-label">LET'S CONNECT</p>

          <h2>Have a project or opportunity?</h2>

          <p>
            I'm open to internship opportunities, entry-level
            Data Analyst roles and interesting technology projects.
          </p>

          <div className="contact-buttons">

            <motion.a
              href="mailto:vinay76b@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Email Me
            </motion.a>

            <motion.a
              href="https://github.com/Vinay786-3009"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              GitHub
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/bangalore-vinay-4762512a6/"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              LinkedIn
            </motion.a>

          </div>

          <footer>
            © 2026 BANGALORE VINAY. Built with React & Three.js.
          </footer>

        </section>
      </SectionAnimation>

    </div>
  )
}

export default App