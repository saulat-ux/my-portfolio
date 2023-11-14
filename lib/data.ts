import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import castleImg from "@/public/castle2.png";
import cookingImg from "@/public/cooking.png";
import magicImg from "@/public/magic.png";
import ecomm from "@/public/ecom.png";
import money from "@/public/money.png";
import pro from "@/public/pro.png";
import bit from "@/public/bit.png"





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
 
] as const;

export const experiencesData = [
  {
    title: "Graduated ",
    location: "NUST, H-12",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Front-End Developer",
    location: "ISB",
    description:
      "I worked as a front-end developer for 1 year in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2022-2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Soltridge",
    description:
      "I worked as a full-stack developer. My stack includes React, Next.js, TypeScript, Tailwind, and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Ecommerce Store",
    description:
      "This a Full Stack E-commerce store that i built using the lastest technologies such as reactjs as frontend framework and expressjs as a backend framework for nodeJs. This project include the Autherization of users and the CRUD operations mongodb as source data. ",
    tags: ["React", "Javascript", "expressJs", "CSS", "Nodejs" , "REDUX"],
    imageUrl: ecomm,
    github:"https://github.com/saulat-ux/Ecommerce-store",
    demo:'https://ecommerce-store-tasleem-frontend.vercel.app/',
  },
  {
    title: "Puzzel Game",
    description:
      "Created a Puzzel game which emphasizes on the importance of user experience, created by ReactJs and Hooks to store and managed the events passed by the user A fun an exiting frontedend application for leisure time.",
    tags: ["React", "Css", "html", "Javascript", "Hooks"],
    imageUrl: magicImg,
    github:"https://github.com/saulat-ux/Magic-app",
    demo:'https://magicapp-1ecef.web.app/',
  },

  {
    title: "Finance Tracker",
    description:
      "A web base platform that allows users to create their own account and then track their own transactions, users can add or remove any transactions, multiple users can create their own accounts this app.",
    tags: ["React", "firebase", "css", "javascript"],
    imageUrl: money,
    github:"https://github.com/saulat-ux/Finance_tracker",
    demo:'https://mymoney-bcaaf.web.app/',
  },
  {
    title: "Project Managnment site",
    description:
      "A web application that allows user to create their own account and than keep track of their projects, users can assign projects to other users and also give a due date for the project completion",
    tags: ["React", "firebase", "css", "javascript"],
    imageUrl: pro,
    github:"https://github.com/saulat-ux/project_managment",
    demo:'https://projectmanagnment.web.app/',
  },
  {
    title: "Bitnine Global Webpage",
    description:
      "A Bitnine Global webpage with functionalities. ",
    tags: ["React", "css", "javascript"],
    imageUrl: bit,
    github:"https://github.com/saulat-ux/Bitnine-Global",
    demo:'https://bitnineglobal-e10c2.web.app/',
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "JQuery",
  "MongoDB",
  "Redux",
  "functions",
  "Firebase",
  "Express",
  "Mongoose",
  "Bootstrap",
  "Github",
  "Rest Api",
  "Framer Motion",
  "Model View Controller",
  "Problem Solving",
  "Postman",
  "OOP"
] as const;