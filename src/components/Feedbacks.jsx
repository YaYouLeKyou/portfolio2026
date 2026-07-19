import React from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const offers = [
  {
    title: "Starter Website",
    details:
      "A 3 pages responsive website with a clean, modern design. Includes a homepage, about page, contact form, and gallery/portfolio section. Optimized for mobile and desktop, basic interactivity, and SEO-friendly structure.",
    price: "€250",
    subscription: "+€20/month",
    subscriptionNote: "",
  },
  {
    title: "Pro Web Package",
    details:
      "Up to 5 pages featuring dynamic content, optional API integrations or WordPress CMS. Includes blog setup, portfolio showcase, and SEO-ready structure. Perfect for growing businesses or professional portfolios.",
    price: "€450",
    subscription: "+€30/month",
    subscriptionNote: "",
  },
  {
    title: "Full Web Experience",
    details:
      "A fully custom website or app with advanced interactivity. Includes e-commerce, payment setup, user authentication, and dashboards. Ideal for startups or online stores.",
    price: "€750+",
    subscription: "+€50+/month",
    subscriptionNote: "(Price to be determined based on\nthe size of the project)",
  },

];

const OfferCard = ({ index, title, details, price, subscription, subscriptionNote, isMobile }) => {
  if (isMobile) {
    // ✅ Plain <div> on mobile (no motion, no shadows)
    return (
      <div className="bg-tertiary p-5 rounded-xl w-full min-h-[280px] flex flex-col">
        <div className="flex-1">
          <h3 className="text-white text-lg font-bold mb-2">{title}</h3>
          <p className="text-secondary text-sm leading-relaxed text-left">{details}</p>
        </div>
        <div className="text-center mt-4 h-[76px] flex flex-col items-center">
          <span className="text-white font-extrabold text-xl">{price}</span>
          <p className="text-secondary text-xs mt-1">{subscription}</p>
          <p className="text-secondary text-[10px] mt-0.5 leading-tight whitespace-pre-line min-h-[2.5rem]">
            {subscriptionNote}
          </p>
        </div>
      </div>
    );
  }

  // ✅ Motion + shadows only on desktop
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

const Offers = () => {
  const isMobile = useMediaQuery({ maxWidth: 749 });

  const HeaderWrapper = isMobile ? "div" : motion.div;

  return (
    <div className="mt-10 bg-black-100 rounded-[20px]">
      {/* Header */}
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[120px]`}>
        <HeaderWrapper {...(!isMobile && { variants: textVariant() })}>
          <p className={styles.sectionSubText}>My Services</p>
          <h2 className={`${styles.sectionHeadText} mb-8`}>Web Development Offers.</h2>
        </HeaderWrapper>
      </div>

      {/* Cards */}
      <div
        className={`mt-8 pb-10 ${styles.paddingX} flex flex-col min-[750px]:flex-row gap-6 min-[750px]:gap-8 items-center min-[750px]:justify-center`}
      >
        {offers.map((offer, index) => (
          <OfferCard key={offer.title} index={index} {...offer} isMobile={isMobile} />
        ))}
      </div>
    </div>
  );
};

export default Offers;
