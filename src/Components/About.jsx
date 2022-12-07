import React from "react";
import Grid from "@mui/material/Grid";
import LocationOnTwoToneIcon from "@mui/icons-material/LocationOnTwoTone";
import CastForEducationTwoToneIcon from "@mui/icons-material/CastForEducationTwoTone";
import SkillsCard from "./SlillsCard";
import WorkSkills from "./WorkSkills";

const experienceArr = [
  {
    date: "March 2020 - Now",
    post: "Industrial Programmer",
    company: "Colortec kft",
    location: "Hungary, Tornyospálca",
  },
  {
    date: "July 2018 - January 2020",
    post: "Industrial Programmer",
    company: "Pronico",
    location: "Guatemala, El Estor",
  },
  {
    date: "April 2013 - July 2018",
    post: "Industrial Programmer",
    company: "MP DneproSteel",
    location: "Ukraine, Dnipro",
  },
];

const educationArr = [
  {
    date: "September 2006 - July 2009",
    post: "Electronics and Computer Engineering",
    company: "Dniprovsky State Technical University (DSTU)",
    location: "Ukraine, Kam'yanske",
  },
  {
    date: "September 1996 - July 2000",
    post: "Automation and computer-integrated technologies",
    company: "Dniprovsky Professional College of Engineering and Pedagogy",
    location: "Ukraine, Kam'yanske",
  },
];

const About = () => {
  return (
    <Grid item xs={10} paddingLeft={3} paddingRight={7} paddingBottom={5}>
      <SkillsCard
        content={experienceArr}
        title={"Work experience"}
        icon={<LocationOnTwoToneIcon fontSize="large" />}
      />
      <WorkSkills />
      <SkillsCard
        content={educationArr}
        title={"Education"}
        icon={<CastForEducationTwoToneIcon fontSize="large" />}
      />
    </Grid>
  );
};

export default About;
