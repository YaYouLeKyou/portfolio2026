import React, { useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { FaEnvelope, FaPhone, FaLinkedin } from "react-icons/fa";
import { EarthCanvas } from "./canvas";

const ContactCard = ({ label, value, icon: Icon, onClick }) => {
  const [copied, setCopied] = useState(false);

  const handleClick = () => {
    if (onClick) onClick(value);
    if (onClick) {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      className="bg-tertiary p-6 sm:p-8 rounded-2xl w-full sm:w-[280px] flex flex-col items-center cursor-pointer relative shadow-lg hover:shadow-2xl transition-shadow duration-300"
      onClick={handleClick}
    >
      <div className="text-4xl sm:text-5xl mb-4 text-[#915EFF]">
        <Icon />
      </div>
      <h3 className="text-white text-lg sm:text-xl font-bold mb-2 sm:mb-3">{label}</h3>
      <p className="text-secondary text-center text-sm sm:text-base">{value}</p>
      {copied && (
        <span className="absolute top-2 right-2 text-green-400 text-xs sm:text-sm animate-pulse">
          ✓ Copied!
        </span>
      )}
    </motion.div>
  );
};

const Contact = () => {
  const handleCopy = (text) => navigator.clipboard.writeText(text);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-12 sm:gap-16 bg-black-100 p-6">
      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h2 className={styles.sectionHeadText}>Contact Me</h2>
        <p className="mt-4 text-secondary text-sm sm:text-base">
          Interested in AI-powered applications or need a developer who can integrate LLMs, build scraping systems, and deploy to production? Let's discuss your project!
        </p>
      </motion.div>

      {/* Quick Contact Cards */}
      <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
        <ContactCard
          label="Email"
          value="yanes75@hotmail.fr"
          icon={FaEnvelope}
          onClick={handleCopy}
        />
        <ContactCard
          label="Phone"
          value="+33661184849"
          icon={FaPhone}
          onClick={handleCopy}
        />
        <ContactCard
          label="LinkedIn"
          value="View Profile"
          icon={FaLinkedin}
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/yann-hadiouche-00b7ab114/",
              "_blank"
            )
          }
        />
      </div>

      {/* Earth Animation */}
      <div className="w-full h-[300px] sm:h-[400px] mt-8 sm:mt-12">
        <EarthCanvas />
      </div>
    </div>
  );
};

export default Contact;
