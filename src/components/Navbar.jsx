import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaMoon, FaSun, FaGlobe } from "react-icons/fa";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { useLanguage } from "../i18n/LanguageContext";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const { language, t, switchLanguage } = useLanguage();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setIsDarkMode(savedTheme === "dark");
    applyTheme(savedTheme === "dark");
  }, []);

  const applyTheme = (isDark) => {
    if (isDark) {
      document.documentElement.classList.remove("light-mode");
    } else {
      document.documentElement.classList.add("light-mode");
    }
  };

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    applyTheme(newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-3 sm:py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='hidden md:flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[16px] sm:text-[18px] font-bold cursor-pointer flex '>
            {t("common.name")} &nbsp;
            <span className='lg:block hidden'> | {t("common.role")}</span>
          </p>
        </Link>

        <ul className='list-none hidden md:flex flex-row gap-6 lg:gap-10 items-center'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[16px] lg:text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{t(`nav.${nav.id}`)}</a>
            </li>
          ))}
          
          {/* Language Selector */}
          <li className="relative">
            <button
              onClick={() => setShowLangMenu(!showLangMenu)}
              className="p-2 rounded-lg bg-tertiary hover:bg-secondary/20 text-[#915EFF] hover:text-white transition-all duration-300 transform hover:scale-110 flex items-center gap-1"
              title={t("language.select")}
            >
              <FaGlobe size={16} />
              <span className="text-xs font-medium uppercase hidden sm:inline">{language}</span>
            </button>
            {showLangMenu && (
              <div className="absolute right-0 mt-2 w-32 bg-tertiary rounded-lg shadow-lg border border-secondary/20 overflow-hidden">
                <button
                  onClick={() => { switchLanguage("en"); setShowLangMenu(false); }}
                  className={`w-full text-left px-4 py-2 text-sm hover:bg-secondary/20 transition-colors ${language === "en" ? "text-[#915EFF] font-bold" : "text-white"}`}
                >
                  English
                </button>
                <button
                  onClick={() => { switchLanguage("fr"); setShowLangMenu(false); }}
                  className={`w-full text-left px-4 py-2 text-sm hover:bg-secondary/20 transition-colors ${language === "fr" ? "text-[#915EFF] font-bold" : "text-white"}`}
                >
                  Français
                </button>
              </div>
            )}
          </li>

          {/* Dark Mode Toggle */}
          <li>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-tertiary hover:bg-secondary/20 text-[#915EFF] hover:text-white transition-all duration-300 transform hover:scale-110"
              title={isDarkMode ? t("nav.switchToLight") : t("nav.switchToDark")}
            >
              {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>
          </li>
        </ul>

        <div className='sm:hidden flex flex-col items-center gap-2 w-full'>
          <div className='w-full flex justify-between items-center'>
            <Link
              to='/'
              className='flex items-center gap-2'
              onClick={() => {
                setActive("");
                window.scrollTo(0, 0);
              }}
            >
              <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
              <p className='text-white text-[16px] font-bold cursor-pointer flex'>
                {t("common.name")}
              </p>
            </Link>

            <img
              src={toggle ? close : menu}
              alt='menu'
              className='w-[28px] h-[28px] object-contain'
              onClick={() => setToggle(!toggle)}
            />
          </div>

          <div className="flex items-center gap-2">
            {/* Mobile Language Selector */}
            <div className="relative">
              <button
                onClick={() => setShowLangMenu(!showLangMenu)}
                className="p-2 rounded-lg bg-tertiary hover:bg-secondary/20 text-[#915EFF] hover:text-white transition-all duration-300 flex items-center gap-1"
                title={t("language.select")}
              >
                <FaGlobe size={16} />
                <span className="text-[10px] font-medium uppercase">{language}</span>
              </button>
              {showLangMenu && (
                <div className="absolute right-0 mt-2 w-28 bg-tertiary rounded-lg shadow-lg border border-secondary/20 overflow-hidden">
                  <button
                    onClick={() => { switchLanguage("en"); setShowLangMenu(false); }}
                    className={`w-full text-left px-3 py-2 text-xs hover:bg-secondary/20 transition-colors ${language === "en" ? "text-[#915EFF] font-bold" : "text-white"}`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => { switchLanguage("fr"); setShowLangMenu(false); }}
                    className={`w-full text-left px-3 py-2 text-xs hover:bg-secondary/20 transition-colors ${language === "fr" ? "text-[#915EFF] font-bold" : "text-white"}`}
                  >
                    Français
                  </button>
                </div>
              )}
            </div>

            {/* Mobile Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-tertiary hover:bg-secondary/20 text-[#915EFF] hover:text-white transition-all duration-300"
              title={isDarkMode ? t("nav.switchToLight") : t("nav.switchToDark")}
            >
              {isDarkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
            </button>
          </div>

          {toggle && (
            <div
              className="p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl flex-col items-end gap-4"
            >
              <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`font-poppins font-medium cursor-pointer text-[16px] ${
                      active === nav.title ? "text-white" : "text-secondary"
                    }`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                    }}
                  >
                    <a href={`#${nav.id}`}>{t(`nav.${nav.id}`)}</a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
