import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    { label: t("nav.home"), href: "/" },
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.work"), href: "#work" },
    { label: t("nav.contact"), href: "#contact" },
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      url: "https://github.com/YaYouLeKyou",
      label: "GitHub",
    },
    {
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/yann-hadiouche-00b7ab114/",
      label: "LinkedIn",
    },
    {
      icon: FaEnvelope,
      url: "mailto:yann.hadiouche@gmail.com",
      label: "Email",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black-100 py-12 sm:py-16 border-t border-secondary/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 mb-8">
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-white text-xl font-bold mb-2">Yanès Hadiouche</h3>
            <p className="text-secondary text-sm">
              {t("footer.tagline")}
            </p>
            <p className="text-secondary text-xs mt-2">
              {t("footer.taglineSub")}
            </p>
          </div>

          <div className="flex flex-col items-center">
            <h4 className="text-white font-bold mb-4">{t("footer.navigation")}</h4>
            <ul className="space-y-2 text-center">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-secondary hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center sm:items-end">
            <h4 className="text-white font-bold mb-4">{t("footer.follow")}</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-tertiary flex items-center justify-center text-secondary hover:text-[#915EFF] hover:bg-[#915EFF]/10 transition-all duration-300"
                    aria-label={social.label}
                    title={social.label}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="h-px bg-secondary/20 mb-8"></div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <p className="text-secondary text-xs text-center sm:text-left">
            © {currentYear} Yanès Hadiouche. All rights reserved.
          </p>

          <div className="text-secondary text-xs text-center">
            {t("footer.builtWith")}
          </div>

          <button
            onClick={scrollToTop}
            className="px-4 py-2 rounded-lg bg-[#915EFF]/10 text-[#915EFF] hover:bg-[#915EFF] hover:text-white transition-all duration-300 text-xs font-medium"
            aria-label="Scroll to top"
          >
            ↑ {t("footer.backToTop")}
          </button>
        </div>

        <div className="mt-8 text-center">
          <p className="text-secondary text-xs">
            <a href="#" className="hover:text-white transition-colors">
              {t("footer.privacy")}
            </a>
            {" • "}
            <a href="#" className="hover:text-white transition-colors">
              {t("footer.terms")}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
