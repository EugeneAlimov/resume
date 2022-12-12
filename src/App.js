import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Personal from "./Components/Personal";
import Paper from "@mui/material/Paper";
import About from "./Components/About";
import Social from "./Components/Social";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import DropdownMenu from "./Components/DropdownMenu";

function App() {
  const theme = useTheme();
  const matchesDownXl = useMediaQuery(theme.breakpoints.down("xl"));
  const matchesDownLg = useMediaQuery(theme.breakpoints.down("lg"));
  const matchesDownMd = useMediaQuery(theme.breakpoints.down("md"));
  const matchesDownSm = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className="App">
      <CssBaseline>
        <Box
          sx={{
            background:
              "linear-gradient(90deg, rgba(202,236,222,1) 0%, rgba(202,236,222,0.8603816526610644) 76%, rgba(227,250,240,1) 100%)",
          }}
        >
          {matchesDownXl ? null :
            <>
              <Social matchesDowMd={matchesDownMd} />
              <Box className="forPrintNoDisplay" sx={{ width: "100%", height: "80px" }}></Box>
            </>
          }
          <Box
            sx={{
              "@media print": {
                width: "100%",
                boxShadow:
                  "0px 0px 0px 0px rgba(0,0,0,0),0px 0px 0px 0px rgba(0,0,0,0),0px 0px 0px 0px rgba(0,0,0,0)",
              },
              boxShadow:
                "0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)",
            }}
            marginX={"auto"}
            width={matchesDownXl ? "95vw" : "85vw"}
          >
            <Grid sx={{ backgroundColor: "#e8edf0" }} container>
              <Paper
                square
                elevation={0}
                sx={{ backgroundColor: "#99bf34", width: "100%", height: "7px" }}
              ></Paper>
              {matchesDownLg ? <DropdownMenu /> : <Personal matchesDownXl={matchesDownXl} />}
              <About
                matchesDownSm={matchesDownSm}
                matchesDownMd={matchesDownMd}
                matchesDownLg={matchesDownLg}
              />
            </Grid>
          </Box>
          {matchesDownXl ? null : (
            <Box className="forPrintNoDisplay" sx={{ width: "100%", height: "80px" }}></Box>
          )}
        </Box>
      </CssBaseline>
    </div>
  );
}

export default App;
