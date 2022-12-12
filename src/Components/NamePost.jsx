import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import photo from "../media/photo.jpg";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

const NamePost = ({ matchesDownMd, matchesDownLg }) => {
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
      <Stack
        alignItems={"stretch"}
        justifyContent={"space-between"}
        alignContent={"center"}
        flexWrap={"nowrap"}
        direction={"row"}
      >
        <Box
          sx={{
            "@media print": {
              marginTop: 0,
              paddingTop: 0,
              paddingBottom: 0,
            },
          }}
          ml={3}
          mr={3}
          paddingTop={5}
          paddingBottom={3}
        >
          <Typography variant="h2" component="h2">
            Yevhen Alimov
          </Typography>
          <Typography variant="h3" component="h3">
            Fron-end Developer
          </Typography>
        </Box>
        {!matchesDownMd && matchesDownLg ? <img src={photo} alt="img" width={192}></img> : null}
      </Stack>
      <List sx={{ display: "none", "@media print": { display: "inherit" } }}>
        <ListItem>
          <Typography sx={{ color: "#fff" }} variant="h6" component="h6">
            Telephone: +38-063-215-42-88
          </Typography>
        </ListItem>
        <ListItem>
          <Typography sx={{ color: "#fff" }} variant="h6" component="h6">
            e-mail: yevhen.alimov@gmail.com
          </Typography>
        </ListItem>
      </List>
    </Box>
  );
};

export default NamePost;
