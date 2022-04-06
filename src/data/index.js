import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";


import graphicdesign from "../images/graphicdesign.svg";
import UXDesigner from "../images/uiuxdesign.svg";
import UIDev from "../images/uidev.svg";

const heroData = {
  para: `    I am a creative designer with a passion for solving business problems.
    I love good design, coffee, movies and design discussions. I aspire to
    create solutions that make an Impact in the society we live in.`,
};

const contactList = [
  {
    id: 1,
    title: "Call",
    icon: <FaPhoneAlt />,
    value: "9866010213",
  },
  {
    id: 2,
    title: "Mail",
    icon: <FaEnvelope />,
    value: "niranjanadhikari2053@gmail.com",
  },
  {
    id: 3,
    title: "Address",
    icon: <FaMapMarkerAlt />,
    value: "Tikathali - 05, Lalitpur, Nepal",
  },
];

const jobExperience = [
  {
    id: "1",
    role: "UX Designer",
    company: "Optimum Futurist",
    companyLogo:
      "https://media-exp1.licdn.com/dms/image/C4D0BAQEy60nl7vJ4IA/company-logo_100_100/0/1609958980130?e=1645660800&v=beta&t=aKx9DTUKDtUc8UgmS04_Z6nCvcz-zBhCIE_rdjOxxY0",
    from: "Mar 2021",
    to: "present",
    type: "Full-time",
    duration: "9 mos+",
  },
  {
    id: "2",
    role: "UI Developer",
    company: "Bentray Technologies",
    companyLogo:
      "https://media-exp1.licdn.com/dms/image/C560BAQHJMBV1Ai2_9Q/company-logo_100_100/0/1519888978535?e=1645660800&v=beta&t=YHbcC1Sto3xylL7t7ZsjDOBQtoTnYq8ag2Lkvc2TD9o",
    from: "Jan 2020",
    to: "Feb 2021",
    type: "Full-time",
    duration: "1yr 2 mos",
  },
  {
    id: "3",
    role: "Graphic Designer",
    company: "Digital Ghumti",
    companyLogo:
      "https://media-exp1.licdn.com/dms/image/C560BAQFrPLdN-6NFlw/company-logo_100_100/0/1588853092675?e=1645660800&v=beta&t=rdWBRABcANXLE8_BvLEfMF-VzdpKutm8zDrcETvzLRo",
    from: "May 2020",
    to: "Jul 2020",
    type: "Part-time",
    duration: "3 mos",
  },
  {
    id: "4",
    role: "UI Designer",
    company: "Metashrine",
    companyLogo: "",
    from: "May 2019",
    to: "Jul 2019",
    type: "Part-time",
    duration: "3 mos",
  },
  {
    id: "5",
    role: "Graphic Designer",
    company: "Perfect creation",
    companyLogo: "",
    from: "Feb 2019",
    to: "May 2019",
    type: "Intern",
    duration: "4 mos",
  },
];

const jobRoles = [
  {
    id: 1,
    jobTitle: "Graphic Designer",
    jobIcon: graphicdesign,
    jobSkills: [
      "Logo Design",
      "Social media ads",
      "Print Design",
      "Packaging Design",
    ],
  },
  {
    id: 2,
    jobTitle: "UI/UX Designer",
    jobIcon: UXDesigner,

    jobSkills: [
      "Wireframing",
      "Usecase research",
      "Style guide design",
      "Prototyping",
      "UI Design(mobile & web)",
    ],
  },
  {
    id: 1,
    jobTitle: "UI/UX Developer",
    jobIcon: UIDev,
    jobSkills: [
      "HTML/CSS/SCSS",
      "Tailwind",
      "Bootstrap",
      "StyledComponents",
      "Javascript/es6/Jquery",
      "React/Gatsby",
      "Github",
    ],
  },
];

const academics = [
    {
      id: 1,
      course: "B.E Computer",
      duration: "2015-2019",
      academy: "Pashchimanchal Campus, IOE Tribhuwan University",
    },
    {
      id: 2,
      course: "+2 Science",
      duration: "2013-2015",
      academy: "Kathmandu Model HSS",
    },
    {
      id: 3,
      course: "SLC (Nepal Board)",
      duration: "2000-2013",
      academy: "Canon HSS",
    },
  ];

  const certifications = [
    {
      id: 1,
      name: "UX driven software design",
      issuedFrom: "Pluralsight",
    },
    {
      id: 2,
      name: "Visual Elements of User Interface Design",
      issuedFrom: "Calarts (Coursera)",
    },
    {
      id: 3,
      name: "UX Design Fundamentals",
      issuedFrom: "Calarts (Coursera)",
    },
    {
      id: 4,
      name: "Textual Elements of Design: Fonts, Typography, and Spacing ",
      issuedFrom: "University of Colorado (Coursera)",
    },
  ];

export { heroData, contactList, jobExperience, jobRoles, academics, certifications };
