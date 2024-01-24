import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import { CgWorkAlt } from "react-icons/cg";
import webflixImage from "@/public/webflixImage.png";
import aiCharacterForge from "@/public/aiCharacterForge.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "Webflix",
    description:
      "It is a clone of the popular Netflix site, which features: authentication including OAuth(GitHub, Google) add to favorites and video-player.",
    tags: ["React", "Next.js", "Tailwind", "MongoDb", "Prisma", "SWR", "Zustand"],
    imageUrl: webflixImage,
    demoUrl: "https://webflix-one.vercel.app/",
  },
  {
    title: "ai-character-forge",
    description:
      "SaaS application that allows you to create characters and chat with them.",
    tags: [
      "React",
      "NEXT.JS",
      "Clerk",
      "Stripe",
      "OpenAI",
      "Tailwind",
      "shadcn",
      "Prisma",
      "axios",
      "Zustand"

    ],
    imageUrl: aiCharacterForge,
    demoUrl: "https://ai-character-forge.vercel.app/",
  },
] as const;

export const skillsData = [
  "HTML/CSS",
  "JavaScript",
  "TypeScript",
  "Angular",
  "React",
  "Next.js",
  "Zustand",
  "Tailwind",
  "Mui",
  "Bootstrap",
  "Framer Motion",
  "Git",
  "SQL"
] as const;

export const experiencesData = [
  {
    title: "GSK",
    location: "Poznan, PL",
    description_1: "IT Automation",
    description_2:
      "Microsoft SQL Server Management Studio, Microsoft Azure DevOps, Symantec Workflow, Windows Server, ServiceNow, Powershell, Scrum",
    icon: React.createElement(CgWorkAlt),
    date: "01.10.2022 - currently",
  },
  {
    title: "University of Science and Technology",
    location: "Wroclaw, PL",
    description_1: "Field of study: Computing and Telecommunication",
    description_2:
      "Specialization: Design of Information Systems Master of Engineering",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "State University of Applied Sciences",
    location: "Krosno, PL",
    description_1: "Field of study: Computing Information",
    description_2:
      "Specialization: Internet and database technologies Bachelor of Engineering",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
] as const;
