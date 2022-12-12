import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";

const SkillsList = ({ matchesDownSm, date, post, company, location, locationLink, icon }) => {
  return (
    <Box mt={5}>
      <Typography fontWeight={400} variant="body1">
        {date}
      </Typography>
      <Stack
        direction="row"
        flexWrap={matchesDownSm ? "wrap" : "nowrap"}
        justifyContent="space-between"
        alignItems="center"
        spacing={0}
      >
        <Typography fontSize={22} fontWeight={500} variant="body1">
          {post}
        </Typography>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={3}
          mr={3}
        >
          <Link target="_blank" color={"inherit"} href={locationLink} rel="noopener">
            {icon}
          </Link>
          <Box sx={{ width: matchesDownSm ? "10vw" : "230px" }}>
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
