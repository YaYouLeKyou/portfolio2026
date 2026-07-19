import React from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

// About Section Component
const About = () => {
  const isMobile = useMediaQuery({ maxWidth: 640 });

  return (
    <>
      {/* Section Header */}
      {isMobile ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>About me</h2>
        </motion.div>
      ) : (
        <motion.div
          variants={textVariant()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>About me</h2>
        </motion.div>
      )}

      {/* Description */}
      {isMobile ? (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-4 text-secondary text-[16px] sm:text-[17px] max-w-3xl leading-[28px] sm:leading-[30px]"
        >
          AI-powered Full-Stack Developer specializing in LLM integration, web scraping, and production deployment. 
          I build intelligent applications that solve real-world problems. My latest project, Find my job AI, 
          orchestrates 4 LLM providers (Groq, Gemini, Ollama, xAI) with automatic fallback, scrapes job offers 
          from LinkedIn/Indeed/Glassdoor/France Travail, and uses Redis caching for optimal performance.
        </motion.p>
      ) : (
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-4 text-secondary text-[16px] sm:text-[17px] max-w-3xl leading-[28px] sm:leading-[30px]"
        >
          AI-powered Full-Stack Developer specializing in LLM integration, web scraping, and production deployment. 
          I build intelligent applications that solve real-world problems. My latest project, Find my job AI, 
          orchestrates 4 LLM providers (Groq, Gemini, Ollama, xAI) with automatic fallback, scrapes job offers 
          from LinkedIn/Indeed/Glassdoor/France Travail, and uses Redis caching for optimal performance.
        </motion.p>
      )}
    </>
  );
};

export default SectionWrapper(About, "about");