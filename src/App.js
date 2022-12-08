import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Personal from "./Components/Personal";
import Paper from "@mui/material/Paper";
import About from "./Components/About";
import Social from "./Components/Social";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

function App() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div className="App">
      <CssBaseline>
        <Box
          sx={{
            background:
              "linear-gradient(90deg, rgba(202,236,222,1) 0%, rgba(202,236,222,0.8603816526610644) 76%, rgba(227,250,240,1) 100%)",
          }}
        >
          <Grid container>
            <Grid item xs={12} md={1} sx={{ margin: "0px" }}>
              <Social matches={matches} />
            </Grid>
            <Grid item md={10}>
              {matches ? <></> : <Box sx={{ width: "100%", height: "80px" }}></Box>}
              <Container disableGutters={true} maxWidth="xl">
                <Grid boxShadow={20} sx={{ backgroundColor: "#e8edf0" }} container>
                  <Paper
                    square
                    elevation={0}
                    sx={{ backgroundColor: "#99bf34", width: "100%", height: "7px" }}
                  ></Paper>
                  <Personal />
                  <About />
                </Grid>
              </Container>
            </Grid>
            <Box sx={{ width: "100%", height: "80px" }}></Box>
          </Grid>
        </Box>
      </CssBaseline>
    </div>
  );
}

export default App;
