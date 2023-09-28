"use client";

import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Skills() {
  const { ref, inView } = useInView({
    threshold: 0.2
  });
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection("Skills");
    }
  }, [inView, setActiveSection]);
  
  return (
    <section ref={ref} id="skills" className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40">
      <SectionHeading> My Tech Stack</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <li
            className="bg-white border border-black/[0.1] rounded-xl px-4 py-2"
            key={index}
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
