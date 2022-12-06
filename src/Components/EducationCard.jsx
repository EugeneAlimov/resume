import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

const EducationCard = ({ date, post, company, location, icon }) => {
  return (
    <Box mt={5}>
      <Typography fontWeight={400} variant="body1">
        September 2006 - July 2009
      </Typography>
      <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={6}>
        <Typography fontSize={22} fontWeight={500} variant="body1">
          Dniprovsky State Technical University (DSTU)
        </Typography>
        <Box>
          <Stack width={250} direction="row" alignItems="center" spacing={3}>
            {icon}
            <Box>
              <Typography fontWeight={400} variant="body1">
                Faculty of Electronics and Computer Engineering
              </Typography>
              <Typography mt={1} fontWeight={400} variant="body1">
                Ukraine, Kam'yanske
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};
export default EducationCard;
