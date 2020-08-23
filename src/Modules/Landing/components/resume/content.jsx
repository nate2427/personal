import React from "react";
import CreateIcon from "@material-ui/icons/Create";
import DevicesIcon from "@material-ui/icons/Devices";
import LanguageIcon from "@material-ui/icons/Language";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import SchoolIcon from "@material-ui/icons/School";

export const resumeContent = {
  edEntries: [
    {
      dateRange: "2020 - 2018",
      title: "Self Teachings",
      descriptions: [
        "Completed over 100+ hours of trainings, tutorials, and projects",
        "Gained a well rounded understanding of the services I offer via freelance",
      ],
      icon: <MenuBookIcon fontSize="large" />,
    },
    {
      dateRange: "2019 - 2015",
      title: "University of Michigan",
      descriptions: [
        "Graduated with a Computer Science degree from the School of Language, Science, and the Arts (LSA)",
        " The focus of my degree is on computer systems such as computer networks, distributed systems, servers, and operating systems",
      ],
      icon: <SchoolIcon fontSize="large" />,
    },
    {
      dateRange: "2015 - 2012",
      title: "City High/Middle School",
      descriptions: [
        "#1 school in Michigan for academics during my graduating year",
        "Experienced a challenging curriculum as the entire school was International Baccalaureate based",
      ],
      icon: <AccountBalanceIcon fontSize="large" />,
    },
  ],
  exEntries: [
    {
      dateRange: "2020 - 2019",
      title: "Software Engineer",
      descriptions: [
        "Created the new quicklock and virtual account number front end webpages for online.citi.com using Angular",
        "Learned the entire tech stack on web and mobile applications for large companies through my exploration of the company's tech architecture and its development operations/processes.",
      ],
      icon: <DevicesIcon fontSize="large" />,
    },
    {
      dateRange: "2019 - 2017",
      title: "Instructional Assistant (IA)",
      descriptions: [
        "Led lab sections for Intro to Computer Security (U of M) once a week covering the topics discussed during the lecture",
        "Guided the entire class through our network security project, with another IA, where students were taught how to hack into a network",
      ],
      icon: <CreateIcon fontSize="large" />,
    },
    {
      dateRange: "2018 - 2017",
      title: "Web Developer",
      descriptions: [
        "Built and maintained web applications and databases with research scientists at the University of Michigan",
        "Expanded the existing membrane protein databases and created a new web interface where scientists can submit data for real-time processing using software developed by scientists from the College of Pharmacy",
      ],
      icon: <LanguageIcon fontSize="large" />,
    },
  ],
};
