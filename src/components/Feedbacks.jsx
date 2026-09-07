import React from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { useLanguage } from "../i18n/LanguageContext";

const offers = [
  {
    key: "starter",
    title: "Starter Website",
    details:
      "A 3 pages responsive website with a clean, modern design. Includes a homepage, about page, contact form, and gallery/portfolio section. Optimized for mobile and desktop, basic interactivity, and SEO-friendly structure.",
    price: "€250",
    subscription: "+€20/month (optional maintenance)",
    subscriptionNote: "",
  },
  {
    key: "pro",
    title: "Pro Web Package",
    details:
      "Up to 5 pages featuring dynamic content, optional API integrations or WordPress CMS. Includes blog setup, portfolio showcase, and SEO-ready structure. Perfect for growing businesses or professional portfolios.",
    price: "€450",
    subscription: "+€30/month (optional maintenance)",
    subscriptionNote: "",
  },
  {
    key: "full",
    title: "Full Web Experience",
    details:
      "A fully custom website or app with advanced interactivity. Includes e-commerce, payment setup, user authentication, and dashboards. Ideal for startups or online stores.",
    price: "€750+",
    subscription: "+€50+/month (optional maintenance)",
    subscriptionNote: "(Price to be determined based on\nthe size of the project)",
  },
];

const associationProjects = [
  {
    key: "fcc",
    title: "FCC",
    details:
      "Classic website for an NGO dedicated to cultural exchange and education. Features responsive design, multilingual support, and showcases cultural programs and initiatives.",
  },
  {
    key: "smart_edu_ai",
    title: "Smart Edu AI - Erasmus+",
    details:
      "Blog and educational platform where I served as an AI expert, sharing insights and strategies on transforming education with artificial intelligence.",
  },
];

const OfferCard = ({ index, title, details, price, subscription, subscriptionNote, isMobile, isTablet, t }) => {
  if (isMobile || isTablet) {
    return (
      <div className="bg-tertiary p-5 rounded-xl w-full min-h-[280px] flex flex-col">
        <div className="flex-1">
          <h3 className="text-white text-lg font-bold mb-2">{title}</h3>
          <p className="text-secondary text-sm leading-relaxed text-left">{details}</p>
        </div>
        <div className="text-center mt-4 h-[76px] flex flex-col items-center">
          <span className="text-white font-extrabold text-xl">{price} <span className="text-xs font-medium text-secondary">H.T.</span></span>
          <p className="text-secondary text-xs mt-1">{subscription}</p>
          <p className="text-secondary text-[10px] mt-0.5 leading-tight whitespace-pre-line min-h-[2.5rem]">
            {subscriptionNote}
          </p>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.2, 0.6)}
      className="bg-tertiary p-6 rounded-2xl w-[320px] h-[392px] shadow-lg flex flex-col"
    >
      <div className="flex-1">
        <h3 className="text-white text-xl font-bold mb-4">{title}</h3>
        <p className="text-secondary text-[13px] leading-relaxed text-left">{details}</p>
      </div>
      <div className="text-center mt-4 h-[88px] flex flex-col items-center">
        <span className="text-white font-extrabold text-3xl">{price}</span>
        <p className="text-secondary text-sm mt-1 leading-tight">{subscription}</p>
        <p className="text-secondary text-[10px] mt-0.5 leading-tight whitespace-pre-line min-h-[2.5rem]">
          {subscriptionNote}
        </p>
      </div>
    </motion.div>
  );
};

const ProjectCard = ({ index, title, details, isMobile, isTablet }) => {
  if (isMobile || isTablet) {
    return (
      <div className="bg-tertiary p-5 rounded-xl w-full min-h-[240px] flex flex-col">
        <h3 className="text-white text-lg font-bold mb-2">{title}</h3>
        <p className="text-secondary text-sm leading-relaxed text-left flex-1">{details}</p>
      </div>
    );
  }

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.2, 0.6)}
      className="bg-tertiary p-6 rounded-2xl w-[320px] min-h-[280px] shadow-lg flex flex-col"
    >
      <h3 className="text-white text-xl font-bold mb-4">{title}</h3>
      <p className="text-secondary text-[13px] leading-relaxed text-left flex-1">{details}</p>
    </motion.div>
  );
};

const Offers = () => {
  const isMobile = useMediaQuery({ maxWidth: 749 });
  const isTablet = useMediaQuery({ minWidth: 750, maxWidth: 1024 });
  const { t } = useLanguage();

  const HeaderWrapper = isMobile ? "div" : motion.div;

  return (
    <div className="mt-10 bg-black-100 rounded-[20px]">
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[120px]`}>
        <HeaderWrapper {...(!isMobile && { variants: textVariant() })}>
          <p className={styles.sectionSubText}>{t("feedbacks.sectionSubText")}</p>
          <h2 className={`${styles.sectionHeadText} mb-8`}>{t("feedbacks.sectionHeadText")}</h2>
        </HeaderWrapper>
      </div>

      <div className={`mt-6 pb-4 ${styles.paddingX} text-center sm:text-left max-w-4xl mx-auto`}>
        <p className="text-secondary text-[15px] sm:text-[17px] leading-[26px] sm:leading-[30px]">
          {t("feedbacks.intro")}
        </p>
      </div>

      <div className={`mt-8 pb-10 ${styles.paddingX} flex flex-col items-center gap-8`}>
        <div className="flex flex-col min-[750px]:flex-row gap-6 min-[750px]:gap-8 items-center min-[750px]:justify-center">
          {associationProjects.map((project, index) => {
            const translatedName = t(`feedbacks.${project.key}.name`);
            const name = translatedName !== `feedbacks.${project.key}.name` ? translatedName : project.title;
            const translatedDesc = t(`feedbacks.${project.key}.description`);
            const description = translatedDesc !== `feedbacks.${project.key}.description` ? translatedDesc : project.details;

            return (
              <ProjectCard
                key={project.key}
                index={index}
                title={name}
                details={description}
                isMobile={isMobile}
                isTablet={isTablet}
              />
            );
          })}
        </div>

        <div className="flex flex-col min-[750px]:flex-row gap-6 min-[750px]:gap-8 items-center min-[750px]:justify-center">
          {offers.map((offer, index) => {
            const translatedName = t(`feedbacks.${offer.key}.name`);
            const name = translatedName !== `feedbacks.${offer.key}.name` ? translatedName : offer.title;
            const translatedDesc = t(`feedbacks.${offer.key}.description`);
            const description = translatedDesc !== `feedbacks.${offer.key}.description` ? translatedDesc : offer.details;

            return (
              <OfferCard
                key={offer.key}
                index={index}
                title={name}
                details={description}
                price={offer.price}
                subscription={offer.subscription}
                subscriptionNote={offer.subscriptionNote}
                isMobile={isMobile}
                isTablet={isTablet}
                t={t}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Offers;