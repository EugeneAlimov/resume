import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
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

const About = ({ matchesDownSm, matchesDownMd, matchesDownLg }) => {
  return (
    <Grid
      sx={{
        "@media print": {
          padding: 0,
        },
      }}
      item
      md={12}
      lg={10}
      paddingX={3}
      paddingBottom={5}
    >
      <NamePost matchesDownMd={matchesDownMd} matchesDownLg={matchesDownLg} />
      <WorkSkills />
      <SkillsCard
        matchesDownSm={matchesDownSm}
        content={experienceArr}
        title={"Work experience"}
        icon={<LocationOnTwoToneIcon className="forPrintNoDisplay" fontSize="large" />}
      />
      <SkillsCard
        matchesDownSm={matchesDownSm}
        content={educationArr}
        title={"Education"}
        icon={<CastForEducationTwoToneIcon className="forPrintNoDisplay" fontSize="large" />}
      />
      <Box
        sx={{
          "@media print": {
            margin: 0,
            padding: 0,
            boxShadow:
              "0px 0px 0px 0px rgba(0,0,0,0),0px 0px 0px 0px rgba(0,0,0,0),0px 0px 0px 0px rgba(0,0,0,0)",
          },
          backgroundColor: "#fafafa",
          width: "100%",
          marginTop: 5,
          boxShadow:
            "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
        }}
      >
        <Box ml={3} mr={3} paddingTop={5} paddingBottom={3}>
          <Box>
            <Typography color={"#99bf34"} fontWeight={700} variant="h4" component="h3">
              Languages
            </Typography>
            <List>
              <ListItem>
                <Typography variant="body1" fontSize={22} fontWeight={500}>
                  English - pre intermediate
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="body1" fontSize={22} fontWeight={500}>
                  Ukrainian - native
                </Typography>
              </ListItem>
            </List>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

export default About;
