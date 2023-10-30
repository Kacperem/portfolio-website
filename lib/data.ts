import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import { CgWorkAlt } from "react-icons/cg";
import memorypalace from "@/public/memorypalace.png";

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
    title: "Memory Palace [during coding]",
    description:
      "The application is designed to enable the development of the ability to quickly memorize a sequence of numbers.",
    tags: ["React", "Material UI", "Tailwind", "Formik", "Framer Motion"],
    imageUrl:
      memorypalace,
  },
  {
    title: "Fit App [will be relized]",
    description:
      "The app is designed to make your fitness adventure easier in terms of exercise and kcal counting",
    tags: ["React", "Tailwind", "Redux"],
    imageUrl:
      "https://images.unsplash.com/photo-1595675024853-0f3ec9098ac7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFwcCUyMG1lbW9yeSUyMHBhbGFjZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Redux",
  "Next.js",
  "Tailwind",
  "Framer Motion",
  "Git",
] as const;

export const experiencesData = [
  {
    title: "IT Automation - GSK",
    location: "[remote work] Poznan, PL",
    description:
      "Microsoft SQL Server Management Studio, Microsoft Azure DevOps, Symantec Workflow, Windows Server, ServiceNow, Powershell, Scrum",
    icon: React.createElement(CgWorkAlt),
    date: "01.10.2022 - currently",
  },
  {
    title: "University of Science and Technology",
    location: "Wroclaw, PL",
    description:
      "Field of study: Computing and Telecommunication Specialization: Design of Information Systems Master of Engineering",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "State University of Applied Sciences",
    location: "Krosno, PL",
    description:
      "Field of study: Computing Information Specialization: Internet and database technologies Bachelor of Engineering",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
] as const;
