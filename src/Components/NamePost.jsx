import React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const NamePost = () => {
  return (
    <Paper square elevation={1} sx={{ backgroundColor: "#fafafa", width: "100%", marginTop: 5 }}>
      <Box ml={3} mr={3} paddingTop={5} paddingBottom={3}>
        <Typography variant="h2" component="h2">
          Yevhen Alimov
        </Typography>
        <Typography variant="h3" component="h3">
          Fron-end Developer
        </Typography>
      </Box>
    </Paper>
  );
};

export default NamePost;
