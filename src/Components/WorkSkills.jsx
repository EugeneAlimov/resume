import React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";

const WorkSkills = () => {
  return (
    <Paper square elevation={1} sx={{ backgroundColor: "#fafafa", width: "100%", marginTop: 5 }}>
      <Box ml={3} mr={3} paddingTop={5} paddingBottom={3}>
        <Box>
          <Typography color={"#99bf34"} fontWeight={700} variant="h4" component="h3">
            About
          </Typography>
        </Box>
        <Stack spacing={2} divider={<Divider orientation="horizontal" flexItem />}>
          <Typography fontWeight={400} variant="body1" paragraph={true} sx={{ textIndent: 40 }}>
            For 10 years I has been developing software (
            <Link color="inherit" href="https://en.wikipedia.org/wiki/IEC_61131-3">
              IEC 61131-3 languages
            </Link>
            ) for PLCs Siemens, Allen-Bradley, Schneider at metallurgical enterprises in Ukraine and
            other countries. The main thing I am proud of is friendship with colleagues and respect
            from the management.
          </Typography>
        </Stack>
      </Box>
    </Paper>
  );
};

export default WorkSkills;
