import React from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

import { styles } from "../styles";
import { textVariant, fadeIn } from "../utils/motion";
import { findmyworkai, aiToolsShop, github, websiteicon } from "../assets";
import { useLanguage } from "../i18n/LanguageContext";

const featuredProjects = [
  {
    key: "ai_tools_shop",
    image: aiToolsShop,
    titleKey: "featuredProject.aiToolsShop.title",
    subtitleKey: "featuredProject.aiToolsShop.subtitle",
    descKey: "featuredProject.aiToolsShop.description",
    github: "https://github.com/YaYouLeKyou/ai-tools-shop",
    web: "https://frontend-jet-delta-15.vercel.app/",
  },
  {
    key: "find_my_job",
    image: findmyworkai,
    titleKey: "featuredProject.title",
    subtitleKey: "featuredProject.subtitle",
    descKey: "featuredProject.description",
    github: "https://github.com/YaYouLeKyou/find-my-job-ai-react",
    web: "https://find-my-job-ai.netlify.app/",
  },
];

const FeaturedProjectCard = ({ image, title, subtitle, description, github, web, isMobile }) => {
  return (
    <div className="bg-tertiary p-6 sm:p-8 rounded-3xl max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="relative w-full h-[300px] sm:h-[400px] rounded-2xl overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute top-4 left-4 z-30">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="black-gradient w-10 h-10 sm:w-12 sm:h-12 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img src={github} alt="source code" className="w-1/2 h-1/2 object-contain" loading="lazy" decoding="async" />
            </a>
          </div>
          <div className="absolute top-4 right-4 z-30">
            <a
              href={web}
              target="_blank"
              rel="noopener noreferrer"
              className="black-gradient w-10 h-10 sm:w-12 sm:h-12 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img src={websiteicon} alt="visit website" className="w-1/2 h-1/2 object-contain" loading="lazy" decoding="async" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {subtitle}
          </h3>
          <p className="text-secondary text-[15px] sm:text-[17px] leading-[28px] mb-6">
            {description}
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href={web}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#915EFF] hover:bg-[#7c4dff] text-white px-6 py-3 rounded-lg font-medium transition-all duration-300"
            >
              Demo en ligne
            </a>
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#915EFF] text-[#915EFF] hover:bg-[#915EFF] hover:text-white px-6 py-3 rounded-lg font-medium transition-all duration-300"
            >
              Voir le code source
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeaturedProject = () => {
  const isMobile = useMediaQuery({ maxWidth: 640 });
  const { t } = useLanguage();

  return (
    <section className="relative py-20">
      <div className="text-center mb-12">
        <p className={styles.sectionSubText}>{t("featuredProject.sectionSubText")}</p>
        <h2 className={styles.sectionHeadText}>{t("featuredProject.title")}</h2>
      </div>

      <div className="flex flex-col gap-16">
        {featuredProjects.map((project, index) => {
          const title = t(project.titleKey);
          const subtitle = t(project.subtitleKey);
          const description = t(project.descKey);

          return (
            <motion.div
              key={project.key}
              variants={fadeIn("up", "spring", index * 0.2, 0.75)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              <FeaturedProjectCard
                image={project.image}
                title={title}
                subtitle={subtitle}
                description={description}
                github={project.github}
                web={project.web}
                isMobile={isMobile}
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default FeaturedProject;