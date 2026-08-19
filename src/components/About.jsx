import React from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { useLanguage } from "../i18n/LanguageContext";

const About = () => {
  const isMobile = useMediaQuery({ maxWidth: 640 });
  const { t } = useLanguage();

  return (
    <>
      {isMobile ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className={styles.sectionSubText}>{t("about.sectionSubText")}</p>
          <h2 className={styles.sectionHeadText}>{t("about.sectionHeadText")}</h2>
        </motion.div>
      ) : (
        <motion.div
          variants={textVariant()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className={styles.sectionSubText}>{t("about.sectionSubText")}</p>
          <h2 className={styles.sectionHeadText}>{t("about.sectionHeadText")}</h2>
        </motion.div>
      )}

      {isMobile ? (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-4 text-secondary text-[16px] sm:text-[17px] max-w-3xl leading-[28px] sm:leading-[30px]"
        >
          {t("about.description")}
        </motion.p>
      ) : (
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-4 text-secondary text-[16px] sm:text-[17px] max-w-3xl leading-[28px] sm:leading-[30px]"
        >
          {t("about.description")}
        </motion.p>
      )}
    </>
  );
};

export default SectionWrapper(About, "about");
