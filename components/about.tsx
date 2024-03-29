"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About", 0.6);

  return (
    <motion.section
      ref={ref}
      className="mb-24 max-w-[45rem] text-center leading-7 sm:mb-18 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I'm an ambitious computer science graduate with a year of experience in
        IT and passion for achieving goals, which was initiated by my past as a
        ice hockey goalkeeper.
      </p>
      <p className="mb-3">
        During my studies I developed skills in technology and data analysis,
        through working on projects, scientific research and gaining practical
        knowledge. I am ready to use my skills to contribute to technological
        development and the creation of innovate solutions.
      </p>
      <p className="mb-3">
        My sports background has taught me the constant pursuit of excellence,
        team work and self discipline. As a former ice hockey goalkeeper, I had
        to make quick decisions and be prepared for unexpected situations, which
        translates into my ability to handle a dynamic professional environment.
      </p>
      <p className="mb-3">
      My passion is front-end development, where I pay attention to the fact that 
      it is not worth locking into a specific framework, but to adapt the technology 
      to the requirements of the project, so I am open to all solutions (angular, react, vue and others).
      </p>
    </motion.section>
  );
}
