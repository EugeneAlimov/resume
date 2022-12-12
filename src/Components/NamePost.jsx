import React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
import photo from "../media/photo.jpg";
import matchers from "@testing-library/jest-dom/matchers";

const NamePost = ({ matchesDownMd, matchesDownLg }) => {
  return (
    <Paper square elevation={1} sx={{ backgroundColor: "#fafafa", width: "100%", marginTop: 5 }}>
      <Stack
        alignItems={"stretch"}
        justifyContent={"space-between"}
        alignContent={"center"}
        flexWrap={"nowrap"}
        direction={"row"}
        // height={192}
      >
        <Box ml={3} mr={3} paddingTop={5} paddingBottom={3} 
        >
          <Typography variant="h2" component="h2">
            Yevhen Alimov
          </Typography>
          <Typography variant="h3" component="h3">
            Fron-end Developer
          </Typography>
        </Box>
        {
          !matchesDownMd && matchesDownLg ? <img src={photo} alt="img" width={192}></img> : null
        }
        
      </Stack>
    </Paper>
  );
};

export default NamePost;
