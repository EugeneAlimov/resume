import React from "react";

import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import photo from "../media/photo.jpg";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";

const Personal = () => {
  return (
    <Grid item xs={2}>
      <Paper square elevation={0} sx={{ minHeight: "100%", marginTop: 0, backgroundColor: "#3d4548" }}>
        <img className="person-photo" src={photo} alt="img"></img>
        <Box sx={{ mt: 8, ml: 2, mr: 2 }}>
          <Stack ml={3} direction="column" justifyContent="space-around" alignItems="flex-start" spacing={5}>
            <Box>
              <Box>
                <Typography sx={{ color: "#fff", fontSize: 26 }} variant="h4" component="h3">
                  Yevhen Alimov
                </Typography>
              </Box>
            </Box>
            <Box>
              <Typography sx={{ color: "#fff", fontSize: 20 }} variant="body1" component="h3">
                React Developer
              </Typography>
            </Box>
          </Stack>
          <Box mt={10}>
            <Stack direction="column" justifyContent="space-around" alignItems="flex-start" spacing={2}>
              <Box>
                <Typography sx={{ color: "#fff" }} variant="h4" component="h3">
                  Contacts
                </Typography>
              </Box>
              <Box>
                <Box>
                  <Typography sx={{ color: "#fff" }} variant="h6" component="h6">
                    Telephone:
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="body2" gutterBottom>
                    <Link color="#fff" href="tel:+380632154288">+38-063-215-42-88</Link>
                  </Typography>
                </Box>
              </Box>
              <Box>
                <Box>
                  <Typography sx={{ color: "#fff" }} variant="h6" component="h6">
                    e-mail:
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    <Link color="#fff" href="mailto:yevhen.alimov@gmail.com">yevhen.alimov@gmail.com</Link>
                  </Typography>
                </Box>
              </Box>
            </Stack>
          </Box>
          <Box mt={10}>
            <Stack direction="column" justifyContent="space-around" alignItems="flex-start" spacing={2}>
              <Box>
                <Typography sx={{ color: "#fff" }} variant="h4" component="h3">
                  Language:
                </Typography>
              </Box>
              <Box>
                <Box>
                  <Typography sx={{ color: "#fff" }} variant="body2" gutterBottom>
                    English - pre intermediate
                  </Typography>
                </Box>
              </Box>
              <Box>
                <Box>
                  <Typography sx={{ color: "#fff" }} variant="body2" gutterBottom>
                    Russian, Ukrainian - native
                  </Typography>
                </Box>
              </Box>
            </Stack>
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
};

export default Personal;
