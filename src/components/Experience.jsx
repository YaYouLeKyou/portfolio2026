import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { useLanguage } from "../i18n/LanguageContext";

const Icon = ({ src, alt }) => (
  <img src={src} alt={alt} className="object-contain w-[60%] h-[60%]" loading="lazy" decoding="async" />
);

const MobileExperienceCard = ({ experience, t }) => (
  <div className="bg-[#1d1836] text-white rounded-xl p-4 mb-4 shadow-sm">
    <h3 className="font-bold text-lg">{t(`experienceData.${experience.key}.title`)}</h3>
    <p className="text-secondary font-semibold text-sm">{t(`experienceData.${experience.key}.company`)}</p>
    <p className="text-xs text-gray-400 mt-1">{t(`experienceData.${experience.key}.period`)}</p>
    <ul className="mt-2 ml-4 list-disc space-y-1">
      {t(`experienceData.${experience.key}.points`).map((point, idx) => (
        <li key={idx} className="text-white-100 text-sm leading-snug">
          {point}
        </li>
      ))}
    </ul>
  </div>
);

const DesktopExperienceCard = ({ experience, t }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: "#1d1836",
      color: "#fff",
      padding: "20px 30px",
    }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={t(`experienceData.${experience.key}.period`)}
    iconStyle={{ background: experience.iconBg, width: 60, height: 60 }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <Icon src={experience.icon} alt={t(`experienceData.${experience.key}.company`)} />
      </div>
    }
  >
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-white font-bold text-2xl">{t(`experienceData.${experience.key}.title`)}</h3>
      <p className="text-secondary font-semibold text-[16px]" style={{ margin: 0 }}>
        {t(`experienceData.${experience.key}.company`)}
      </p>
      <ul className="mt-3 ml-5 space-y-2 list-disc">
        {t(`experienceData.${experience.key}.points`).map((point, idx) => (
          <li key={idx} className="text-white-100 tracking-wider text-[14px]">
            {point}
          </li>
        ))}
      </ul>
    </motion.div>
  </VerticalTimelineElement>
);

const Experience = () => {
  const isMobile = useMediaQuery({ maxWidth: 640 });
  const isTablet = useMediaQuery({ minWidth: 641, maxWidth: 1024 });
  const { t } = useLanguage();
  const HeaderWrapper = isMobile || isTablet ? "div" : motion.div;

  return (
    <>
      <HeaderWrapper {...(!(isMobile || isTablet) && { variants: textVariant() })}>
        <p className={`${styles.sectionSubText} text-center`}>{t("experience.sectionSubText")}</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>{t("experience.sectionHeadText")}</h2>
      </HeaderWrapper>

      <div className="mt-10 flex flex-col">
        {isMobile || isTablet ? (
          <div className="flex flex-col">
            {experiences.map((exp, idx) => (
              <MobileExperienceCard key={idx} experience={exp} t={t} />
            ))}
          </div>
        ) : (
          <VerticalTimeline>
            {experiences.map((exp, idx) => (
              <DesktopExperienceCard key={idx} experience={exp} t={t} />
            ))}
          </VerticalTimeline>
        )}
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
