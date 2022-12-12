import React from "react";
import Social from "./Social";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import photo from "../media/photo.jpg";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem"

const Personal = ({ matchesDownXl, matchesDownMd }) => {
  return (
    <Grid item xs={2}>
      <Paper
        square
        elevation={0}
        sx={{ minHeight: "100%", marginTop: 0, backgroundColor: "#3d4548" }}
      >
        <img className="person-photo" src={photo} alt="img"></img>
        <Box sx={{ mt: 8, ml: 1, mr: 2 }}>
          <Stack
            direction="column"
            justifyContent="space-around"
            alignItems="flex-start"
            spacing={2}
          >
            <Typography sx={{ color: "#fff" }} variant="h4" component="h3">
              Contacts:
            </Typography>
            <List>
              <ListItem>
                <Box>
                  <Box>
                    <Typography sx={{ color: "#fff" }} variant="h6" component="h6">
                      Telephone:
                    </Typography>
                  </Box>
                  <Box>
                    <Typography fontSize={matchesDownXl ? 13 : 14} variant="body2" gutterBottom>
                      <Link color="#fff" href="tel:+380632154288">
                        +38-063-215-42-88
                      </Link>
                    </Typography>
                  </Box>
                </Box>
              </ListItem>
              <ListItem>
                <Box>
                  <Typography sx={{ color: "#fff" }} variant="h6" component="h6">
                    e-mail:
                  </Typography>
                  <Typography fontSize={matchesDownXl ? 13 : 14} variant="body2" gutterBottom>
                    <Link color="#fff" href="mailto:yevhen.alimov@gmail.com">
                      yevhen.alimov@gmail.com
                    </Link>
                  </Typography>
                </Box>
              </ListItem>
            </List>
          </Stack>
          {matchesDownXl && !matchesDownMd ? (
            <Social matchesDownXl={matchesDownXl} matchesDownMd={matchesDownMd} />
          ) : null}
        </Box>
      </Paper>
    </Grid>
  );
};

export default Personal;
