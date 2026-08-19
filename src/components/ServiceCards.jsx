import React from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { useLanguage } from "../i18n/LanguageContext";

const ServiceCard = ({ index, title, icon, isMobile, isTablet }) => {
  if (isMobile || isTablet) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
        viewport={{ once: true }}
        className="w-full max-w-[260px] flex-shrink-0 green-pink-gradient p-[1px] rounded-[20px] shadow-card hover:shadow-2xl transition-shadow duration-300"
      >
        <div className="bg-tertiary rounded-[20px] py-4 sm:py-5 px-8 sm:px-12 min-h-[260px] flex justify-evenly items-center flex-col">
          <motion.img
            whileHover={{ scale: 1.1 }}
            src={icon}
            alt={title}
            className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
          />
          <h3 className="text-white text-[18px] sm:text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={fadeIn("", "spring", index * 0.2, 0.75)}
      initial="hidden"
      whileInView="show"
      whileHover={{ y: -10, scale: 1.02 }}
      viewport={{ once: true, amount: 0.2 }}
      className="w-[250px] sm:w-[220px] flex-shrink-0 green-pink-gradient p-[1px] rounded-[20px] shadow-card hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
    >
      <div className="bg-tertiary rounded-[20px] py-4 sm:py-5 px-8 sm:px-12 min-h-[260px] flex justify-evenly items-center flex-col">
        <motion.img
          whileHover={{ scale: 1.2, rotate: 10 }}
          transition={{ type: "spring", stiffness: 300 }}
          src={icon}
          alt={title}
          className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
        />
        <h3 className="text-white text-[18px] sm:text-[20px] font-bold text-center">{title}</h3>
      </div>
    </motion.div>
  );
};

const CountUp = ({ end, duration = 2 }) => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    let start = 0;
    const timer = setInterval(() => {
      start += end / (duration * 60);
      if (start < end) {
        setCount(Math.floor(start));
      } else {
        setCount(end);
        clearInterval(timer);
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [end, duration]);

  return count;
};

const StatCard = ({ number, label, index, isMobile, isTablet }) => {
  if (isMobile || isTablet) {
    return (
      <div className="w-full max-w-[260px] flex-shrink-0 green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div className="bg-tertiary rounded-[20px] py-4 sm:py-5 px-8 sm:px-12 flex justify-evenly items-center flex-col">
          <h3 className="text-4xl sm:text-5xl font-bold text-[#915EFF]">
            <CountUp end={number} duration={2} />
          </h3>
          <p className="text-secondary mt-2 text-center">{label}</p>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      variants={fadeIn("", "spring", index * 0.2, 0.75)}
      initial="hidden"
      whileInView="show"
      whileHover={{ y: -10, scale: 1.02 }}
      viewport={{ once: true, amount: 0.2 }}
      className="w-[250px] sm:w-[220px] flex-shrink-0 green-pink-gradient p-[1px] rounded-[20px] shadow-card hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
    >
      <div className="bg-tertiary rounded-[20px] py-4 sm:py-5 px-8 sm:px-12 flex justify-evenly items-center flex-col">
        <motion.h3
          className="text-4xl sm:text-5xl font-bold text-[#915EFF]"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: index * 0.15 + 0.2, duration: 0.5, type: "spring" }}
          viewport={{ once: true }}
        >
          <CountUp end={number} duration={2} />
        </motion.h3>
        <p className="text-secondary mt-2 text-center">{label}</p>
      </div>
    </motion.div>
  );
};

const ServiceCards = () => {
  const isMobile = useMediaQuery({ maxWidth: 640 });
  const isTablet = useMediaQuery({ minWidth: 641, maxWidth: 1024 });
  const { t } = useLanguage();

  const stats = [
    { number: 4, label: t("serviceStats.llmProviders") },
    { number: 10, label: t("serviceStats.jobPlatforms") },
    { number: 2, label: t("serviceStats.agentsDeployed") },
    { number: 7, label: t("serviceStats.languages") },
  ];

  return (
    <div>
      <div className="mt-16 sm:mt-20 flex flex-wrap gap-6 sm:gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.key} index={index} isMobile={isMobile} isTablet={isTablet} title={t(`services.${service.key}`)} icon={service.icon} />
        ))}
      </div>

      <div className="mt-16 sm:mt-20 flex flex-wrap gap-6 sm:gap-10 justify-center">
        {stats.map((stat, index) => (
          <StatCard key={stat.label} index={index} isMobile={isMobile} isTablet={isTablet} {...stat} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(ServiceCards, "services");
