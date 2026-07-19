import React from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

import { styles } from "../styles";
import { textVariant, fadeIn } from "../utils/motion";
import { findmyworkai, github, websiteicon } from "../assets";

const FeaturedProject = () => {
  const isMobile = useMediaQuery({ maxWidth: 640 });

  return (
    <section className="relative py-20">
      {/* Section Header */}
      <div className="text-center mb-12">
        <p className={styles.sectionSubText}>Featured Project</p>
        <h2 className={styles.sectionHeadText}>Find my job AI</h2>
      </div>

      {/* Project Card - Large */}
      <div className="bg-tertiary p-6 sm:p-8 rounded-3xl max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <div className="relative w-full h-[300px] sm:h-[400px] rounded-2xl overflow-hidden">
            <img 
              src={findmyworkai} 
              alt="Find my job AI" 
              className="w-full h-full object-cover"
            />
            {/* Links */}
            <div className="absolute top-4 left-4 z-30">
              <a
                href="https://github.com/YaYouLeKyou/find-my-job-ai-react"
                target="_blank"
                rel="noopener noreferrer"
                className="black-gradient w-10 h-10 sm:w-12 sm:h-12 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img src={github} alt="source code" className="w-1/2 h-1/2 object-contain" />
              </a>
            </div>
            <div className="absolute top-4 right-4 z-30">
              <a
                href="https://find-my-job-ai.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="black-gradient w-10 h-10 sm:w-12 sm:h-12 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img src={websiteicon} alt="visit website" className="w-1/2 h-1/2 object-contain" />
              </a>
            </div>
          </div>

          {/* Content */}
          <div>
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Intelligent Job Search Assistant
            </h3>
            <p className="text-secondary text-[15px] sm:text-[17px] leading-[28px] mb-6">
              AI-powered application that revolutionizes job searching by analyzing CVs, ranking job offers 
              across 10+ platforms, and generating personalized cover letters. Built with modern technologies 
              and deployed in production.
            </p>

            {/* Key Features */}
            <div className="mb-6">
              <h4 className="text-white font-bold text-xl mb-3">Key Features</h4>
              <ul className="space-y-2">
                <li className="text-secondary text-[14px] sm:text-[15px] flex items-start">
                  <span className="text-[#915EFF] mr-2">▹</span>
                  <span><strong className="text-white">Multi-LLM Orchestration:</strong> 4 providers (Groq, Gemini, Ollama, xAI) with automatic fallback</span>
                </li>
                <li className="text-secondary text-[14px] sm:text-[15px] flex items-start">
                  <span className="text-[#915EFF] mr-2">▹</span>
                  <span><strong className="text-white">Web Scraping:</strong> LinkedIn, Indeed, Glassdoor, France Travail with rate limiting</span>
                </li>
                <li className="text-secondary text-[14px] sm:text-[15px] flex items-start">
                  <span className="text-[#915EFF] mr-2">▹</span>
                  <span><strong className="text-white">AI-Powered Ranking:</strong> Intelligent job matching based on CV analysis</span>
                </li>
                <li className="text-secondary text-[14px] sm:text-[15px] flex items-start">
                  <span className="text-[#915EFF] mr-2">▹</span>
                  <span><strong className="text-white">Cover Letter Generation:</strong> Personalized letters for each job application</span>
                </li>
                <li className="text-secondary text-[14px] sm:text-[15px] flex items-start">
                  <span className="text-[#915EFF] mr-2">▹</span>
                  <span><strong className="text-white">Performance Optimization:</strong> Redis caching to reduce API costs</span>
                </li>
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="mb-6">
              <h4 className="text-white font-bold text-xl mb-3">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {["React 19", "Vite", "FastAPI", "Python 3.11+", "Groq", "Google Gemini", "Ollama", "xAI/Grok", "Redis", "Docker", "Netlify", "Railway"].map((tech) => (
                  <span key={tech} className="text-[12px] sm:text-[14px] text-[#915EFF] bg-[#915EFF]/10 px-3 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="https://find-my-job-ai.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#915EFF] hover:bg-[#7c4dff] text-white px-6 py-3 rounded-lg font-medium transition-all duration-300"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/YaYouLeKyou/find-my-job-ai-react"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#915EFF] text-[#915EFF] hover:bg-[#915EFF] hover:text-white px-6 py-3 rounded-lg font-medium transition-all duration-300"
              >
                View Source
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
