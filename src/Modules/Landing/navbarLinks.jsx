import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import BuildIcon from "@material-ui/icons/Build";
import DashboardIcon from "@material-ui/icons/Dashboard";
import FeaturedPlayListIcon from "@material-ui/icons/FeaturedPlayList";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";

export const links = [
  {
    name: "Home",
    link: "/#home",
    icon: <HomeIcon fontSize="large" />,
  },
  {
    name: "About",
    link: "/#about",
    icon: <EmojiPeopleIcon fontSize="large" />,
  },
  {
    name: "Resume",
    link: "/#resume",
    icon: <MenuBookIcon fontSize="large" />,
  },
  {
    name: "Services",
    link: "/#services",
    icon: <BuildIcon fontSize="large" />,
  },
  {
    name: "Portfolio",
    link: "/#portfolio",
    icon: <DashboardIcon fontSize="large" />,
  },
  {
    name: "Testimonials",
    link: "/#testimonials",
    icon: <FeaturedPlayListIcon fontSize="large" />,
  },
  {
    name: "Contact",
    link: "/#contact",
    icon: <ContactPhoneIcon fontSize="large" />,
  },
];
