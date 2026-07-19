import React, { useState, useEffect } from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  const [visibleIndices, setVisibleIndices] = useState(new Set([0, 1, 2])); // Load first 3 by default

  useEffect(() => {
    const handleScroll = () => {
      // Load more on scroll to optimize WebGL context usage
      setVisibleIndices((prev) => {
        const newSet = new Set(prev);
        for (let i = 0; i < technologies.length; i++) {
          newSet.add(i); // Progressive loading
        }
        return newSet;
      });
    };

    window.addEventListener("scroll", handleScroll);
    // Load remaining items after a delay to avoid context saturation
    const timer = setTimeout(() => {
      setVisibleIndices(new Set(Array.from({ length: technologies.length }, (_, i) => i)));
    }, 2000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="hidden sm:flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology, index) => (
        <div className="w-28 h-28" key={technology.name}>
          {visibleIndices.has(index) ? (
            <BallCanvas icon={technology.icon} />
          ) : (
            <div className="w-full h-full bg-gray-800 rounded-full flex items-center justify-center">
              <span className="text-xs text-gray-400">Loading...</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
