import React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import { styled } from "@mui/material/styles";
import SkillsList from "./Skillslist";

const ContentBox = styled(Box)(() => ({
  "@media print": {
    marginTop: 0,
    paddingTop: 0,
    paddingBottom: 0,
  },
}));

const SkillsCard = ({ matchesDownSm, content, title, icon }) => {
  return (
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
      <ContentBox ml={3} mr={3} paddingTop={5} paddingBottom={3}>
        <Box>
          <Typography color={"#99bf34"} fontWeight={700} variant="h4" component="h3">
            {title}
          </Typography>
        </Box>
        <Stack
          sx={{ "@media print": { margin: 0, padding: 0, spacing: 0 } }}
          spacing={0}
          divider={<Divider className="forPrintNoDisplay" orientation="horizontal" flexItem />}
        >
          {content.map((el) => {
            const key = el.date;
            return <SkillsList matchesDownSm={matchesDownSm} icon={icon} {...el} key={key} />;
          })}
        </Stack>
      </ContentBox>
    </Box>
  );
};

export default SkillsCard;
