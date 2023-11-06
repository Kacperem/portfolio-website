"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useTheme } from "@/context/theme-context";

export default function Hero() {
  const { theme } = useTheme();
  const { ref } = useSectionInView("Home", 0.2);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="https://images.unsplash.com/photo-1533514114760-4389f572ae26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3ltJTIwcmF0JTVDfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60"
              alt="Temporary Avatar"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          {theme === "light" ? (
            <motion.span
              className="absolute bottom-8 right-8 text-2xl dark:text-black"
              initial={{ opacity: 0, x: 1000 }}
              animate={{ opacity: 1, x: 1 }}
              transition={{
                stiffness: 2500,
                delay: 0.5,
              }}
            >
              🕶
            </motion.span>
          ) : (
            <motion.span
              className="absolute bottom-9 right-8 text-xl dark:text-black"
              initial={{ opacity: 0, x: 1000 }}
              animate={{ opacity: 1, x: 1 }}
              transition={{
                stiffness: 2500,
                delay: 0.5,
              }}
            >
              👀
            </motion.span>
          )}
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2x1 font-medium leading-[1.5] sm:text-2xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 1 }}
      >
        Welcome on my portfolio website my name is{" "}
        <span className="font-bold"> Kacper Rembisz </span> <br />I invite you
        to introduce who I am!
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-95 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-75 group-hover:translate-x-1.5 transition" />
        </Link>

        <a
          className="group bg-white text-black px-7 py-3 flex items-center gap-2 rounded-full focus:scale-110 hover:scale-110 hover:bg-white-600 active:scale-95 transition borderBlack dark:bg-white/10 dark:text-white/75"
          href="https://drive.google.com/file/d/177msDBvI28NWzqAHaNVrVo7MyDWWlsvI/view?usp=sharing"
          target="_blank"
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-x-1 transition" />{" "}
        </a>

        <a
          className="bg-white text-gray-500 p-4 flex items-center gap-2 rounded-full focus:scale-110 hover:scale-[1.15] hover:bg-white-600 hover:text-gray-950 active:scale-95 transition borderBlack dark:bg-white/10 dark:text-white/75"
          href="https://www.linkedin.com/in/kacper-rembisz-3166b2162/"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white text-gray-500 p-4 flex items-center gap-2 rounded-full focus:scale-110 hover:scale-[1.15] hover:bg-white-600 hover:text-gray-950 active:scale-95 transition borderBlack dark:bg-white/10 dark:text-white/75"
          href="https://github.com/Kacperem"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
