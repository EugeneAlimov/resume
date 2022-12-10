import React from "react";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import LinkedIn from "../SocialIcons/LinkedIn";
import Viber from "../SocialIcons/Viber";
import Telegram from "../SocialIcons/Telegram";
import Box from "@mui/material/Box";
import Github from "../SocialIcons/Github";
import Whatsap from "../SocialIcons/Whatsap";

const Social = ({ matchesDownXl, matchesDownMd }) => {
  return (
    <Box position={matchesDownXl ? "relative" : "fixed"}>
      <Stack
        marginX={"auto"}
        height={matchesDownMd ? "10vh" : "100vh"}
        width={matchesDownMd ? "100vw" : "8vw"}
        direction={matchesDownMd ? "row" : "column"}
        flexWrap="wrap"
        alignContent={matchesDownMd ? "space-around" : "center"}
        justifyContent="space-evenly"
        alignItems="center"
        spacing={5}
      >
        <Link target="_blank" href="https://github.com/EugeneAlimov">
          <Github
            sx={{
              transition: "transform 0.45s",
              ":hover": { transform: "scale(1.5) rotate(360deg)" },
              width: "65px",
              height: "65px",
              filter: "drop-shadow(4px 3px 4px rgb(0 0 0 / 0.4))",
              color: "#000",
              fontSize: 90,
            }}
          />
        </Link>
        <Link target="_blank" href="https://www.linkedin.com/in/yevhen-alimov/">
          <LinkedIn
            sx={{
              transition: "transform 0.45s",
              ":hover": { transform: "scale(1.5) rotate(360deg)" },
              width: "65px",
              height: "65px",
              filter: "drop-shadow(4px 3px 4px rgb(0 0 0 / 0.4))",
              color: "#006394",
              fontSize: 90,
            }}
          />
        </Link>
        <Link target="_blank" href="https://t.me/eugene1131">
          <Telegram
            sx={{
              transition: "transform 0.45s",
              ":hover": { transform: "scale(1.5) rotate(360deg)" },
              width: "65px",
              height: "65px",
              filter: "drop-shadow(4px 3px 4px rgb(0 0 0 / 0.4))",
              color: "#37aee2",
              fontSize: 90,
            }}
          />
        </Link>
        <Link sx={{ transform: "rotate(-90deg)" }} href="https://api.whatsapp.com/send?phone=380632154288">
          <Whatsap
            sx={{
              transition: "transform 0.45s",
              ":hover": { transform: "scale(1.5) rotate(360deg)" },
              width: "65px",
              height: "65px",
              filter: "drop-shadow(4px 3px 4px rgb(0 0 0 / 0.4))",
              color: "#30b545",
              fontSize: 90,
            }}
          />
        </Link>
        <Link target="_blank" href="viber://chat?number=+380632154288">
          <Viber
            sx={{
              transition: "transform 0.45s",
              ":hover": { transform: "scale(1.5) rotate(360deg)" },
              width: "65px",
              height: "65px",
              filter: "drop-shadow(4px 3px 4px rgb(0 0 0 / 0.4))",
              color: "#774e98",
              fontSize: 90,
            }}
          />
        </Link>
      </Stack>
    </Box>
  );
};

export default Social;
