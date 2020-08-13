import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import BuildIcon from "@material-ui/icons/Build";
import DashboardIcon from "@material-ui/icons/Dashboard";
import FeaturedPlayListIcon from "@material-ui/icons/FeaturedPlayList";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";
import SportsBasketballIcon from "@material-ui/icons/SportsBasketball";

export const links = [
  {
    name: "Home",
    id: "home",
    icon: <HomeIcon fontSize="large" />,
  },
  {
    name: "About",
    id: "about",
    icon: <EmojiPeopleIcon fontSize="large" />,
  },
  {
    name: "Resume",
    id: "resume",
    icon: <MenuBookIcon fontSize="large" />,
  },
  {
    name: "Services",
    id: "services",
    icon: <BuildIcon fontSize="large" />,
  },
  {
    name: "Portfolio",
    id: "portfolio",
    icon: <DashboardIcon fontSize="large" />,
  },
  {
    name: "Testimonials",
    id: "testimonials",
    icon: <FeaturedPlayListIcon fontSize="large" />,
  },
  {
    name: "Hobbies",
    id: "hobbies",
    icon: <SportsBasketballIcon fontSize="large" />,
  },
  {
    name: "Contact",
    id: "contact",
    icon: <ContactPhoneIcon fontSize="large" />,
  },
];
