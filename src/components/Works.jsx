import React, { useState, memo } from "react";
import Tilt from "react-parallax-tilt";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "react-responsive";

import { styles } from "../styles";
import { github, websiteicon } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { useLanguage } from "../i18n/LanguageContext";

const ProjectCard = memo(({ index, name, description, tags, image, source_code_link, web_link, isMobile, isTablet }) => {
  const CardContent = () => (
    <div className="bg-tertiary p-4 sm:p-5 rounded-2xl w-full h-full flex flex-col">
      <div className={`relative w-full ${isMobile ? "h-[160px]" : isTablet ? "h-[180px]" : "h-[230px]"} rounded-2xl overflow-hidden group flex-shrink-0`}>
        <img src={image} alt={name} className="w-full h-full object-contain bg-black/20" />
                
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100">
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="black-gradient w-12 h-12 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform"
          >
            <img src={github} alt="source code" className="w-1/2 h-1/2 object-contain" />
          </div>
          <div
            onClick={() => window.open(web_link, "_blank")}
            className="black-gradient w-12 h-12 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform"
          >
            <img src={websiteicon} alt="visit website" className="w-1/2 h-1/2 object-contain" />
          </div>
        </div>

        <div className="absolute top-2 left-2 z-30">
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="black-gradient w-9 h-9 sm:w-10 sm:h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform"
          >
            <img src={github} alt="source code" className="w-1/2 h-1/2 object-contain" />
          </div>
        </div>

        <div className="absolute top-2 right-2 z-30">
          <div
            onClick={() => window.open(web_link, "_blank")}
            className="black-gradient w-9 h-9 sm:w-10 sm:h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform"
          >
            <img src={websiteicon} alt="visit website" className="w-1/2 h-1/2 object-contain" />
          </div>
        </div>
      </div>

        <div className="mt-3 sm:mt-4 flex-1 flex flex-col">
          <h3 className={`text-white font-bold ${isMobile ? "text-[16px]" : isTablet ? "text-[18px]" : "text-[22px]"} overflow-hidden`} style={{display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical"}}>{name}</h3>
          <p className={`mt-2 text-secondary ${isMobile ? "text-[11px]" : isTablet ? "text-[12px]" : "text-[13px]"} leading-[16px] sm:leading-[20px] overflow-hidden`} style={{display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical"}}>{description}</p>
        </div>

        <div className="mt-auto flex flex-wrap gap-1.5 sm:gap-2 flex-shrink-0">
          {tags.map((tag) => (
            <p key={`${name}-${tag.name}`} className={`text-[10px] sm:text-[13px] leading-tight ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
    </div>
  );

  if (isMobile || isTablet) {
    return (
      <div className={`w-full ${isMobile ? "h-[400px]" : "h-[420px]"}`}>
        <CardContent />
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      viewport={{ once: true, amount: 0.2 }}
      className="w-full sm:w-full md:w-[340px] lg:w-[360px] h-[480px]"
    >
      <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.02} transitionSpeed={400}>
        <CardContent />
      </Tilt>
    </motion.div>
  );
});

const getProjectDescription = (project, t) => {
  const keyMap = {
    "Job Bridge": "job_bridge",
    "Iwatch4u": "iwatch4u",
    "Bot Poster TikTok - Histoires Sombres": "bot_poster_tiktok",
    "Ecommerce": "ecommerce",
    "React-movies": "react_movies",
    "Demenagement Paris.com": "demenagement_paris",
    "ABC Architecture": "abc_architecture",
    "Smart Edu AI - Erasmus+": "smart_edu_ai",
    "FCC": "fcc",
    "YZA Music": "yza_music",
    "My Universe": "my_universe"
  };
  const key = keyMap[project.name];
  if (key) {
    const translated = t(`projects.${key}.description`);
    return translated !== `projects.${key}.description` ? translated : project.description;
  }
  return project.description;
};

const Works = () => {
  const isMobile = useMediaQuery({ maxWidth: 640 });
  const isTablet = useMediaQuery({ minWidth: 641, maxWidth: 1024 });
  const [activeFilter, setActiveFilter] = useState("All");
  const { t } = useLanguage();

  const categories = ["All", ...new Set(projects.map((p) => p.category || "Other"))];

  const filteredProjects = activeFilter === "All"
    ? [...new Map(projects.map(p => [p.name, p])).values()]
    : projects.filter((p) => (p.category || "Other") === activeFilter);

  return (
    <div>
      <div className="text-center sm:text-left">
        <p className={styles.sectionSubText}>{t("works.sectionSubText")}</p>
        <h2 className={styles.sectionHeadText}>{t("works.sectionHeadText")}</h2>
      </div>

      <p className="mt-3 text-secondary text-[15px] sm:text-[17px] max-w-3xl leading-[26px] sm:leading-[30px] text-center sm:text-left">
        {t("works.intro")}
      </p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-8 sm:mt-10 flex flex-wrap gap-3 sm:gap-4 justify-center sm:justify-start"
      >
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setActiveFilter(category)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium text-sm sm:text-base transition-all duration-300 ${
              activeFilter === category
                ? "bg-gradient-to-r from-[#915EFF] to-[#7c4dff] text-white shadow-lg"
                : "bg-tertiary text-secondary hover:text-white border border-secondary/20"
            }`}
          >
            {category}
          </motion.button>
        ))}
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeFilter}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-16 sm:mt-20 flex flex-col sm:flex-row flex-wrap justify-center gap-5 sm:gap-7"
        >
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <ProjectCard
                key={`project-${index}`}
                index={index}
                {...project}
                description={getProjectDescription(project, t)}
                isMobile={isMobile}
                isTablet={isTablet}
              />
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-secondary py-12"
            >
              <p className="text-lg">{t("common.noProjects")}</p>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default SectionWrapper(Works, "work");
