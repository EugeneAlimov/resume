import React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import SkillsList from "./Skillslist";

const SkillsCard = ({ matchesDownSm, content, title, icon }) => {
  return (
    <Paper square elevation={1} sx={{ backgroundColor: "#fafafa", width: "100%", marginTop: 5 }}>
      <Box ml={3} mr={3} paddingTop={5} paddingBottom={3}>
        <Box>
          <Typography color={"#99bf34"} fontWeight={700} variant="h4" component="h3">
            {title}
          </Typography>
        </Box>
        <Stack spacing={2} divider={<Divider orientation="horizontal" flexItem />}>
          {content.map((el) => {
            const key = el.date;
            return <SkillsList matchesDownSm={matchesDownSm} icon={icon} {...el} key={key} />;
          })}
        </Stack>
      </Box>
    </Paper>
  );
};

export default SkillsCard;
