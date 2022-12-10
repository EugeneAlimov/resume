import React from "react";
import Grid from "@mui/material/Grid";
import LocationOnTwoToneIcon from "@mui/icons-material/LocationOnTwoTone";
import CastForEducationTwoToneIcon from "@mui/icons-material/CastForEducationTwoTone";
import SkillsCard from "./SlillsCard";
import WorkSkills from "./WorkSkills";
import NamePost from "./NamePost";

const experienceArr = [
  {
    date: "March 2020 - Now",
    post: "Industrial Programmer",
    company: "Colortec kft",
    location: "Hungary, Tornyospálca",
    locationLink: "https://goo.gl/maps/6TNpXBZogpZRBBSS7",
  },
  {
    date: "July 2018 - January 2020",
    post: "Industrial Programmer",
    company: "Pronico",
    location: "Guatemala, El Estor",
    locationLink: "https://goo.gl/maps/cGo5EjqnnjqTAMJr8",
  },
  {
    date: "April 2013 - July 2018",
    post: "Industrial Programmer",
    company: "MP DneproSteel",
    location: "Ukraine, Dnipro",
    locationLink: "https://goo.gl/maps/whktiykaXB4sGoZS7",
  },
];

const educationArr = [
  {
    date: "September 2006 - July 2009",
    post: "Electronics and Computer Engineering",
    company: "Dniprovsky State Technical University (DSTU)",
    location: "Ukraine, Kam'yanske",
    locationLink: "https://goo.gl/maps/TZyZyknipHDrNLGK9",
  },
  {
    date: "September 1996 - July 2000",
    post: "Automation and computer-integrated technologies",
    company: "Dniprovsky Professional College of Engineering and Pedagogy",
    locationLink: "https://goo.gl/maps/kkT3AfPnPpm6YHiX8",
  },
];

const About = ({ matchesDownSm }) => {
  return (
    <Grid item md={12} lg={10} paddingLeft={3} paddingRight={3} paddingBottom={5}>
      <NamePost />
      <WorkSkills />
      <SkillsCard
        matchesDownSm={matchesDownSm}
        content={experienceArr}
        title={"Work experience"}
        icon={<LocationOnTwoToneIcon fontSize="large" />}
      />
      <SkillsCard
        matchesDownSm={matchesDownSm}
        content={educationArr}
        title={"Education"}
        icon={<CastForEducationTwoToneIcon fontSize="large" />}
      />
    </Grid>
  );
};

export default About;
