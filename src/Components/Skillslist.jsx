import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

const SkillsList = ({ date, post, company, location, icon }) => {
  return (
    <Box mt={5}>
      <Typography fontWeight={400} variant="body1">
        {date}
      </Typography>
      <Stack
        direction="row"
        flexWrap="wrap"
        justifyContent="space-between"
        alignItems="center"
        spacing={0}
      >
        <Typography fontSize={22} fontWeight={500} variant="body1">
          {post}
        </Typography>
        <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={3} mr={3}>
          {icon}
          <Box sx={{ width: "10vw" }}>
            <Typography fontWeight={400} variant="body1">
              {company}
            </Typography>
            <Typography mt={1} fontWeight={400} variant="body1">
              {location}
            </Typography>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};

export default SkillsList;
