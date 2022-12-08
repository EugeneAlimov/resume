import React from "react";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import GitHub from "@mui/icons-material/GitHub";
import WhatsApp from "@mui/icons-material/WhatsApp";
import LinkedIn from "../LinkedIn";
import Viber from "../Viber";
import Telegram from "../Telegram";
import Box from "@mui/material/Box";

const Social = ({ matches }) => {

  return (
    <Box position={matches ? "relative" : "fixed"}>
      <Stack
        height={matches ? "10vh" : "100vh"}
        width={matches ? "100vw" : "10vw" }
        direction={ matches ? "row" : "column" }
        flexWrap="wrap"
        alignContent="space-around"
        justifyContent="space-evenly"
        alignItems="center"
        spacing={5}
      >
        <Link href="https://github.com/EugeneAlimov">
          <GitHub
            sx={{
              width: "65px",
              height: "65px",
              filter: "drop-shadow(4px 3px 4px rgb(0 0 0 / 0.4))",
              color: "#000",
              textShadow: 0,
              fontSize: 90,
            }}
          />
        </Link>
        <Link href="https://www.linkedin.com/in/yevhen-alimov-514568208/">
          <LinkedIn className="linkedin-social" />
        </Link>
        <Link>
          <Telegram className="telegram-social" />
        </Link>
        <Link href="https://wa.me/380632154288">
          <WhatsApp
            sx={{
              width: "65px",
              height: "65px",
              filter: "drop-shadow(4px 3px 4px rgb(0 0 0 / 0.4))",
              color: "#30b545",
              fontSize: 90,
            }}
          />
        </Link>
        <Link href="viber://chat?number=+380632154288">
          <Viber className="viber-social" />
        </Link>
      </Stack>
     </Box>
  );
};

export default Social;
