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
        <Stack spacing={2} divider={<Divider orientation="horizontal" flexItem />}>
          <Box>
            <Typography fontWeight={400} variant="body1" paragraph={true} sx={{ textIndent: 40 }}>
              For 10 years I has been developing software (
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
              I decided to take up WEB development seriously after I was faced with the task of
              creating an application for collecting, storing, visualizing and analyzing data on the
              operation of equipment and technological processes.
            </Typography>
            <Typography fontWeight={400} variant="body1" paragraph={true} sx={{ textIndent: 40 }}>
              There was a choice of application type - a desktop on one computer (which does not
              allow several specialists to work at the same time), which is used for analysis, or a
              browser version so that specialists can work in any convenient place from any
              workplace connected to the work network.
            </Typography>
            <Typography fontWeight={400} variant="body1" paragraph={true} sx={{ textIndent: 40 }}>
              The choice turned out to be obvious and I took up the development of the browser
              version, which I am currently implementing.
            </Typography>
            <Typography
              fontWeight={400}
              m={0}
              variant="body1"
              paragraph={true}
              sx={{ textIndent: 40 }}
            ></Typography>
            <TreeView
              aria-label="file system navigator"
              defaultCollapseIcon={<ExpandMoreIcon />}
              defaultExpandIcon={<ChevronRightIcon />}
              sx={{ height: "auto", flexGrow: 1, maxWidth: 400 }}
            >
              <TreeItem nodeId="1" label="Back-end:">
                <TreeItem nodeId="2" label="WEB server python (django(server)" />
                <TreeItem nodeId="3" label="django-rest framework(API)" />
                <TreeItem nodeId="4" label="djoser(authorization)" />
                <TreeItem nodeId="5" label="simple-jwt(JWT tokens))" />
                <TreeItem nodeId="6" label="SQLite DB" />
              </TreeItem>
              <TreeItem nodeId="7" label="OPC server:">
                <TreeItem nodeId="8" label="node-red" />
                <TreeItem nodeId="9" label="InfluxDB" />
              </TreeItem>
              <TreeItem nodeId="10" label="Front-end:">
                <TreeItem nodeId="11" label="React" />
                <TreeItem nodeId="2" label="React-rowter" />
                <TreeItem nodeId="3" label="Redux" />
                <TreeItem nodeId="14" label="MUI" />
                <TreeItem nodeId="15" label="Chart JS" />
              </TreeItem>
            </TreeView>
          </Box>
        </Stack>
      </Box>
    </Paper>
  );
};

export default WorkSkills;
