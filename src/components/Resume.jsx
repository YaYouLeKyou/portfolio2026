import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { useLanguage } from "../i18n/LanguageContext";

const SkillBar = ({ name, percentage }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-2">
      <span className="text-secondary text-sm">{name}</span>
      <span className="text-[#915EFF] font-bold text-sm">{percentage}%</span>
    </div>
    <div className="w-full bg-tertiary rounded-full h-2 overflow-hidden">
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className="h-full bg-gradient-to-r from-[#915EFF] to-[#7c4dff] origin-left"
        style={{ width: `${percentage}%` }}
      />
    </div>
  </div>
);

const Resume = () => {
  const [showFullResume, setShowFullResume] = useState(false);
  const { language, t } = useLanguage();
  const [cvLang, setCvLang] = useState(language);

  const handleDownloadCV = () => {
    const cvFile = cvLang === "en" ? "/cv-yanes-hadiouche-en.pdf" : "/cv-yanes-hadiouche.pdf";
    const cvName = cvLang === "en" ? "CV-Yanes-Hadiouche-AI-Engineer-Full-Stack-Developer-EN.pdf" : "CV-Yanes-Hadiouche-AI-Engineer-Full-Stack-Developer.pdf";
    const link = document.createElement("a");
    link.href = cvFile;
    link.download = cvName;
    link.click();
  };

  const handleCvLangChange = (lang) => {
    setCvLang(lang);
  };

  const skillKeys = ["react", "javascript", "python", "llm", "scraping", "tailwind", "database", "docker", "git", "aiml"];

  const skills = skillKeys.map((key) => ({
    name: t(`resume.skills.${key}`),
    percentage: [95, 90, 88, 92, 85, 93, 80, 82, 90, 85][skillKeys.indexOf(key)],
  }));

  const experiences = [
    {
      key: "frontend",
      year: "2022 - Present",
    },
    {
      key: "web",
      year: "2020 - 2022",
    },
    {
      key: "trainer",
      year: "2022 - Present",
    },
  ];

  const education = [
    {
      key: "advanced",
      year: "2023 - Present",
    },
    {
      key: "openclassrooms",
      year: "2022 - 2023",
    },
    {
      key: "certifications",
      year: "2018 - 2022",
    },
  ];

  const certificationKeys = ["aiTrainer", "reactPatterns", "fastapi", "llmSpecialist", "scrapingExpert", "performance"];

  return (
    <div className="py-20">
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
        <p className={styles.sectionSubText}>{t("resume.sectionSubText")}</p>
        <h2 className={styles.sectionHeadText}>{t("resume.sectionHeadText")}</h2>
      </motion.div>

      <div className="flex flex-col items-center gap-3 mb-12">
        <p className="text-secondary text-sm">{t("cv.languageLabel")}</p>
        {/* Language Selector */}
        <div className="flex items-center gap-2 bg-tertiary rounded-lg p-1 border border-secondary/20">
          <button
            onClick={() => handleCvLangChange("fr")}
            className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-300 ${
              cvLang === "fr" ? "bg-[#915EFF] text-white shadow-lg" : "text-secondary hover:text-white"
            }`}
          >
            Français
          </button>
          <button
            onClick={() => handleCvLangChange("en")}
            className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-300 ${
              cvLang === "en" ? "bg-[#915EFF] text-white shadow-lg" : "text-secondary hover:text-white"
            }`}
          >
            English
          </button>
        </div>

        {/* Download Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleDownloadCV}
          className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#915EFF] to-[#7c4dff] text-white rounded-lg font-bold flex items-center gap-2 shadow-lg hover:shadow-2xl transition-all duration-300"
        >
          <FaDownload /> {t("resume.downloadCV")}
        </motion.button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-12 max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="lg:col-span-1"
        >
          <div className="bg-tertiary p-5 sm:p-8 rounded-2xl">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2">
              <span className="text-[#915EFF]">⚙️</span> {t("resume.technicalSkills")}
            </h3>
            {skills.map((skill, idx) => (
              <div key={idx}>
                <SkillBar name={skill.name} percentage={skill.percentage} />
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="lg:col-span-2"
        >
          <div className="mb-10 sm:mb-12">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2">
              <span className="text-[#915EFF]">💼</span> {t("resume.workExperience")}
            </h3>
            <div className="space-y-4 sm:space-y-6">
              {experiences.map((exp, idx) => (
                <motion.div
                  key={exp.key}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-tertiary p-4 sm:p-6 rounded-xl border-l-4 border-[#915EFF]"
                >
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-1 sm:gap-0">
                    <div>
                      <h4 className="text-white font-bold text-base sm:text-lg">{t(`resumeExperience.${exp.key}.title`)}</h4>
                      <p className="text-secondary text-xs sm:text-sm">{t(`resumeExperience.${exp.key}.company`)}</p>
                    </div>
                    <span className="text-[#915EFF] font-bold text-xs sm:text-sm whitespace-nowrap">
                      {t(`resumeExperience.${exp.key}.year`)}
                    </span>
                  </div>
                  <ul className="mt-2 sm:mt-3 space-y-1 sm:space-y-2">
                    {t(`resumeExperience.${exp.key}.points`).map((point, pidx) => (
                      <li key={pidx} className="text-secondary text-xs sm:text-sm flex items-start gap-2">
                        <span className="text-[#915EFF] mt-1">▹</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2">
              <span className="text-[#915EFF]">🎓</span> {t("resume.education")}
            </h3>
             <div className="space-y-3 sm:space-y-4">
              {education.map((edu, idx) => (
                <motion.div
                  key={edu.key}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-tertiary p-4 rounded-lg border-l-4 border-green-500"
                >
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-0">
                    <div>
                      {edu.key !== "certifications" && (
                        <>
                          <h4 className="text-white font-bold text-sm sm:text-base">{t(`resumeEducation.${edu.key}.title`)}</h4>
                          <p className="text-secondary text-xs sm:text-sm">{t(`resumeEducation.${edu.key}.institution`)}</p>
                        </>
                      )}
                      {t(`resumeEducation.${edu.key}.details`) !== `resumeEducation.${edu.key}.details` && (
                        <p className="text-secondary text-xs sm:text-sm mt-1 leading-relaxed whitespace-pre-line">{t(`resumeEducation.${edu.key}.details`)}</p>
                      )}
                    </div>
                    {edu.key !== "certifications" && (
                      <span className="text-green-500 font-bold text-xs sm:text-sm">{t(`resumeEducation.${edu.key}.period`)}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-12 sm:mt-16 max-w-6xl mx-auto px-4 sm:px-6"
      >
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2">
          <span className="text-[#915EFF]">🏆</span> {t("resume.certifications")}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {certificationKeys.map((key, idx) => (
            <motion.div
              key={key}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-[#915EFF]/10 to-[#7c4dff]/10 p-3 sm:p-4 rounded-lg border border-[#915EFF]/30 flex items-center gap-2 sm:gap-3"
            >
              <span className="text-xl sm:text-2xl">✓</span>
              <span className="text-white font-medium text-sm sm:text-base">{t(`resume.certificationsList.${key}`)}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Resume, "resume");
