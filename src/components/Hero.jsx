import { motion } from "framer-motion";
import { styles } from "../styles";
import { useEffect, useState } from "react";
import ComputersCanvas from "./canvas/Computers";
import { FaGithub, FaLinkedin } from "react-icons/fa";

// Hero Component
const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
      setIsTablet(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto flex items-center">
      {/* Background 3D Canvas (desktop only) */}
      {!isMobile && (
        <div className="absolute inset-0 w-full h-full threejs-canvas bg-primary">
          <ComputersCanvas />
        </div>
      )}
      {/* Content Overlay */}
      <div className="absolute inset-0 max-w-7xl mx-auto w-full px-6 sm:px-16 flex flex-col justify-center items-start z-10">
        <div className="flex flex-col sm:flex-row items-start gap-8 w-full">
          {/* Accent Line */}
          <div className="flex flex-col justify-center items-center">
            <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>

          {/* Text Content */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className={`${styles.heroHeadText} text-white`}>
                AI-Powered <span className="text-[#915EFF]">Full-Stack</span> Developer
              </h1>
              <p className={`${styles.heroSubText} mt-2 sm:mt-4 text-[#915EFF] font-medium`}>
                React + FastAPI + LLM Integration <br className="sm:block hidden" />
                Web Scraping | Production Deployment
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap gap-4"
            >
              <a
                href="#work"
                className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 font-medium text-white bg-gradient-to-r from-[#915EFF] to-[#7c4dff] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-2">
                  📁 View Projects
                </span>
              </a>

              <a
                href="https://github.com/YaYouLeKyou"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 font-medium text-white bg-tertiary border-2 border-[#915EFF] rounded-lg hover:bg-[#915EFF] transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <FaGithub className="mr-2" /> GitHub
              </a>

              <a
                href="#contact"
                className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 font-medium text-white bg-tertiary border-2 border-secondary rounded-lg hover:bg-secondary transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                📧 Let's Talk
              </a>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8 sm:mt-12 flex items-center gap-4 text-sm text-secondary"
            >
              <div className="flex items-center gap-2">
                <span className="text-[#915EFF]">✓</span>
                <span>4+ LLM Providers</span>
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <span className="text-[#915EFF]">✓</span>
                <span>10+ Projects</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator (desktop only) */}
      {!isMobile && (
        <div className="absolute xs:bottom-10 bottom-24 w-full flex justify-center items-center">
          <a href="#about">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
              <motion.div
                animate={{ y: [0, 24, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
                className="w-3 h-3 rounded-full bg-secondary mb-1"
              />
            </div>
          </a>
        </div>
      )}
    </section>
  );
};

export default Hero;
