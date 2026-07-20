import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

const SkillBar = ({ name, percentage }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-2">
      <span className="text-secondary text-sm">{name}</span>
      <span className="text-[#915EFF] font-bold text-sm">{percentage}%</span>
    </div>
    <div className="w-full bg-tertiary rounded-full h-2 overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${percentage}%` }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className="h-full bg-gradient-to-r from-[#915EFF] to-[#7c4dff]"
      />
    </div>
  </div>
);

const Resume = () => {
  const [showFullResume, setShowFullResume] = useState(false);

  const skills = [
    { name: "React & React Hooks", percentage: 95 },
    { name: "JavaScript/TypeScript", percentage: 90 },
    { name: "Python & FastAPI", percentage: 88 },
    { name: "LLM Integration (Groq, Gemini, Ollama)", percentage: 92 },
    { name: "Web Scraping & APIs", percentage: 85 },
    { name: "Tailwind CSS & Responsive Design", percentage: 93 },
    { name: "Database (MongoDB, Redis)", percentage: 80 },
    { name: "Docker & Deployment", percentage: 82 },
    { name: "Git & Version Control", percentage: 90 },
    { name: "AI/ML Concepts", percentage: 85 },
  ];

  const experiences = [
    {
      year: "2022 - Present",
      title: "Front-End Developer – React Projects",
      company: "Freelance & Startups",
      points: [
        "Developing and maintaining interactive web applications using React.js, Hooks, and modern JavaScript",
        "Building AI-powered features with LLM integration (Groq, Gemini, Ollama, xAI)",
        "Implementing responsive layouts with Tailwind CSS and styled-components",
        "Optimizing performance using React best practices and code splitting",
      ],
    },
    {
      year: "2020 - 2022",
      title: "Web Developer",
      company: "Various Agencies & Businesses",
      points: [
        "Building static and dynamic websites for businesses and organizations",
        "Ensuring cross-browser compatibility and accessibility standards",
        "Integrating third-party APIs (maps, booking systems, payments)",
        "Providing ongoing maintenance, SEO improvements, and performance optimization",
      ],
    },
    {
      year: "2022 - Present",
      title: "Trainer & AI in Education Expert",
      company: "Erasmus+: Smart Edu AI",
      points: [
        "Designing and delivering training sessions on AI tools and digital pedagogy",
        "Creating interactive learning environments using ChatGPT, Actionbound, Trello",
        "Teaching website development from HTML/CSS/JS to deployment",
        "Supporting educational scenarios integrating AI tools for engagement",
      ],
    },
  ];

  const education = [
    {
      year: "2022",
      title: "Advanced Web Development & AI Integration",
      institution: "Self-taught & Online Courses (Udemy, Coursera)",
    },
    {
      year: "2020",
      title: "Professional Diploma - Web Development",
      institution: "Coding School, France",
    },
    {
      year: "2018",
      title: "Professional Diploma - Digital Marketing",
      institution: "France Education Institute",
    },
  ];

  const handleDownloadCV = () => {
    // Create a simple CV download link
    const cvLink = document.createElement("a");
    cvLink.href = "/cv.pdf"; // CV file in public folder
    cvLink.download = "Yanes_Hadiouche_CV.pdf";
    cvLink.click();
  };

  return (
    <div className="py-20">
      {/* Header */}
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
          },
        }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className={styles.sectionSubText}>My Journey</p>
        <h2 className={styles.sectionHeadText}>Resume & Skills</h2>
      </motion.div>

      {/* CV Download Button */}
      <div className="flex justify-center mb-12">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleDownloadCV}
          className="px-8 py-4 bg-gradient-to-r from-[#915EFF] to-[#7c4dff] text-white rounded-lg font-bold flex items-center gap-2 shadow-lg hover:shadow-2xl transition-all duration-300"
        >
          <FaDownload /> Download my CV (PDF)
        </motion.button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto px-6">
        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="lg:col-span-1"
        >
          <div className="bg-tertiary p-6 sm:p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="text-[#915EFF]">⚙️</span> Technical Skills
            </h3>
            {skills.map((skill, idx) => (
              <div key={idx}>
                <SkillBar name={skill.name} percentage={skill.percentage} />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Experience & Education */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="lg:col-span-2"
        >
          {/* Work Experience */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="text-[#915EFF]">💼</span> Work Experience
            </h3>
            <div className="space-y-6">
              {experiences.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-tertiary p-6 rounded-xl border-l-4 border-[#915EFF]"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="text-white font-bold text-lg">{exp.title}</h4>
                      <p className="text-secondary text-sm">{exp.company}</p>
                    </div>
                    <span className="text-[#915EFF] font-bold text-sm whitespace-nowrap ml-4">
                      {exp.year}
                    </span>
                  </div>
                  <ul className="mt-3 space-y-2">
                    {exp.points.map((point, pidx) => (
                      <li key={pidx} className="text-secondary text-sm flex items-start gap-2">
                        <span className="text-[#915EFF] mt-1">▹</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="text-[#915EFF]">🎓</span> Education
            </h3>
            <div className="space-y-4">
              {education.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-tertiary p-4 rounded-lg border-l-4 border-green-500"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-white font-bold">{edu.title}</h4>
                      <p className="text-secondary text-sm">{edu.institution}</p>
                    </div>
                    <span className="text-green-500 font-bold text-sm">{edu.year}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Certifications */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-16 max-w-6xl mx-auto px-6"
      >
        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
          <span className="text-[#915EFF]">🏆</span> Certifications & Achievements
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "Certified AI Trainer (Erasmus+)",
            "React Advanced Patterns",
            "FastAPI Production Deployment",
            "LLM Integration Specialist",
            "Web Scraping Expert",
            "Performance Optimization",
          ].map((cert, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-[#915EFF]/10 to-[#7c4dff]/10 p-4 rounded-lg border border-[#915EFF]/30 flex items-center gap-3"
            >
              <span className="text-2xl">✓</span>
              <span className="text-white font-medium">{cert}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Resume, "resume");
