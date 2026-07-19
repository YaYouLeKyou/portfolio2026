import React from "react";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="hidden sm:flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div
          className="w-28 h-28 rounded-full bg-tertiary border border-white/10 shadow-card flex items-center justify-center transition-transform duration-300 hover:scale-110 hover:-translate-y-1"
          key={technology.name}
        >
          <img
            src={technology.icon}
            alt={technology.name}
            className="w-16 h-16 object-contain"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
