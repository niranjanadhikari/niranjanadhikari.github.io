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
      "https://d25hn4jiqx5f7l.cloudfront.net/companies/logos/medium/optimum-futurist-tech-inc_1613727488.png?1613727488",
    from: "Feb 2021",
    to: "present",
    type: "Full-time",
    duration: "1 year 2 mos",
    companyWeb: "https://optimumfuturist.com/",
  },
  {
    id: "2",
    role: "UI Developer",
    company: "Bentray Technologies",
    companyLogo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR54En3GMb-t6CJWsFSjiVUX5xZA10W0Aso5E03N5mOjZU4nF10KGKGifBOjaYI7Ae5fqs&usqp=CAU",
    from: "Jan 2020",
    to: "Feb 2021",
    type: "Full-time",
    duration: "1yr 2 mos",
    companyWeb: "https://bentraytech.com/",
  },
  {
    id: "3",
    role: "Graphic Designer",
    company: "Digital Ghumti",
    companyLogo:
      "https://i.pinimg.com/280x280_RS/56/a5/bb/56a5bbc2d0f21b83dd10d63355f0e8e7.jpg",
    from: "May 2020",
    to: "Jul 2020",
    type: "Part-time",
    duration: "3 mos",
    companyWeb: "https://www.digitalghumti.com/",
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
    companyWeb: "http://metashrine.com/",
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
    companyWeb: "https://www.ourperfectcreation.com/",
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
  {
    id: 5,
    name: "Design Thinking: The Ultimate Guide",
    issuedFrom: "Interaction Design Foundation",
  },
  {
    id: 6,
    name: "Human-Computer Interaction - HCI",
    issuedFrom: "Interaction Design Foundation",
  },
  {
    id: 7,
    name: " User Experience: The Beginner’s Guide",
    issuedFrom: "Interaction Design Foundation",
  },
];

export {
  heroData,
  contactList,
  jobExperience,
  jobRoles,
  academics,
  certifications,
};
