import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import WorkExperienceCard from "./WorkExperienceCard";
import Divider from "@mui/material/Divider";
import LocationOnTwoToneIcon from "@mui/icons-material/LocationOnTwoTone";
import CastForEducationTwoToneIcon from "@mui/icons-material/CastForEducationTwoTone";
import EducationCard from "./EducationCard";

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
    post: "Faculty of Electronics and Computer Engineering",
    company: "Dniprovsky State Technical University (DSTU)",
    location: "Ukraine, Kam'yanske",
  },
  {
    date: "September 2006 - July 2009",
    post: "Faculty of Electronics and Computer Engineering",
    company: "Dniprovsky State Technical University (DSTU)",
    location: "Ukraine, Kam'yanske",
  },
]

const About = () => {
  return (
    <Grid item xs={10} paddingLeft={3} paddingRight={7}>
      <Paper square elevation={1} sx={{ backgroundColor: "#fafafa", width: "100%", marginTop: 5 }}>
        <Box ml={3} mr={3} paddingTop={5} paddingBottom={3}>
          <Box>
            <Typography color={"#99bf34"} fontWeight={700} variant="h4" component="h3">
              Work experience
            </Typography>
          </Box>
          <Stack spacing={2} divider={<Divider orientation="horizontal" flexItem />}>
            {experienceArr.map((el) => {
              const key = el.date;
              return <WorkExperienceCard icon={<LocationOnTwoToneIcon fontSize="large" />} {...el} key={key} />;
            })}
          </Stack>
        </Box>
      </Paper>
      <Paper square elevation={1} sx={{ backgroundColor: "#fafafa", width: "100%", marginTop: 5 }}>
        <Box ml={3} mr={3} paddingTop={5} paddingBottom={3}>
          <Box>
            <Typography color={"#99bf34"} fontWeight={700} variant="h4" component="h3">
              Education
            </Typography>
          </Box>
          <Stack spacing={2} divider={<Divider orientation="horizontal" flexItem />}>
            {
              educationArr.map((el) => {
                const key = el.date;
                return(
                  <WorkExperienceCard icon={<CastForEducationTwoToneIcon fontSize="large" />} {...el} key={key} />
                )
              })
            }
          </Stack>
        </Box>
      </Paper>
    </Grid>
  );
};

export default About;
