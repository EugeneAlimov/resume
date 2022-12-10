import React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import TreeItem from "@mui/lab/TreeItem";
import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const WorkSkills = () => {
  return (
    <Paper square elevation={1} sx={{ backgroundColor: "#fafafa", width: "100%", marginTop: 5 }}>
      <Box ml={3} mr={3} paddingTop={5} paddingBottom={3}>
        <Box>
          <Typography color={"#99bf34"} fontWeight={700} variant="h4" component="h3">
            About
          </Typography>
        </Box>
        <Stack mt={5} spacing={2} divider={<Divider orientation="horizontal" flexItem />}>
          <Box>
            <Typography fontWeight={400} variant="body1" paragraph={true} sx={{ textIndent: 40 }}>
              For 9 years I has been developing software (
              <Link color="inherit" href="https://en.wikipedia.org/wiki/IEC_61131-3">
                IEC 61131-3 languages
              </Link>
              ) for PLCs Siemens, Allen-Bradley, Schneider at metallurgical enterprises in Ukraine
              and other countries. The main thing I am proud of is friendship with colleagues and
              respect from the management.
            </Typography>
          </Box>
          <Box>
            <Typography fontWeight={400} variant="body1" paragraph={true} sx={{ textIndent: 40 }}>
              At the current place of work, the task was to create an application for collecting,
              storing, visualizing and analyzing data on the operation of equipment and
              technological processes. I am implementing a web application so that specialists can
              work in any convenient place from any workplace connected to the work network. It
              should be convenient and easy to use, but at the same time contain all the necessary
              graphics and calculations.
            </Typography>
            <Typography fontWeight={400} variant="body1" paragraph={true} sx={{ textIndent: 40 }}>
              Used set of technologies:
            </Typography>
            <TreeView
              aria-label="file system navigator"
              defaultCollapseIcon={<ExpandMoreIcon />}
              defaultExpandIcon={<ChevronRightIcon />}
              sx={{ height: "auto", flexGrow: 1, maxWidth: 400 }}
            >
              <TreeItem sx={{ mt: 1 }} nodeId="10" label="Front-end:">
                <TreeItem sx={{ mt: 1 }} nodeId="11" label="React" />
                <TreeItem sx={{ mt: 1 }} nodeId="12" label="React-rowter" />
                <TreeItem sx={{ mt: 1 }} nodeId="13" label="Redux" />
                <TreeItem sx={{ mt: 1 }} nodeId="14" label="MUI" />
                <TreeItem sx={{ mt: 1 }} nodeId="15" label="Chart JS" />
              </TreeItem>
              <TreeItem sx={{ mt: 1 }} nodeId="1" label="Back-end:">
                <TreeItem sx={{ mt: 1 }} nodeId="2" label="WEB server python (django(server))" />
                <TreeItem sx={{ mt: 1 }} nodeId="3" label="django-rest framework(API)" />
                <TreeItem sx={{ mt: 1 }} nodeId="4" label="djoser(authorization)" />
                <TreeItem sx={{ mt: 1 }} nodeId="5" label="simple-jwt(JWT tokens))" />
                <TreeItem sx={{ mt: 1 }} nodeId="6" label="SQLite DB" />
              </TreeItem>
              <TreeItem sx={{ mt: 1 }} nodeId="7" label="OPC server:">
                <TreeItem sx={{ mt: 1 }} nodeId="8" label="node-red" />
                <TreeItem sx={{ mt: 1 }} nodeId="9" label="InfluxDB" />
              </TreeItem>
            </TreeView>
          </Box>
        </Stack>
      </Box>
    </Paper>
  );
};

export default WorkSkills;
