import { Box } from "@mui/material";
import React from "react";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import GitHub from "@mui/icons-material/GitHub";
import WhatsApp from "@mui/icons-material/WhatsApp";
import LinkedIn from "../LinkedIn";
import Viber from "../Viber";
import Telegram from "../Telegram";

const Social = () => {
  return (
    <Box position={"fixed"}>
      <Stack
        height="100vh"
        width={"90px"}
        direction="column"
        alignContent="center"
        justifyContent="center"
        alignItems="center"
        spacing={5}
      >
        <Link href="https://github.com/EugeneAlimov">
          <GitHub sx={{ filter: "drop-shadow(4px 3px 4px rgb(0 0 0 / 0.4))", color: "#000", textShadow: 0, fontSize: 90 }} />
        </Link>
        <Link href="https://www.linkedin.com/in/yevhen-alimov-514568208/">
          <LinkedIn className="linkedin-social" />
        </Link>
        <Link href="https://t.me/eugene1131">
          <Telegram className="telegram-social" />
        </Link>
        <Link href="https://wa.me/380632154288">
          <WhatsApp sx={{ filter: "drop-shadow(4px 3px 4px rgb(0 0 0 / 0.4))", color: "#30b545", fontSize: 90 }} />
        </Link>
        <Link href="viber://chat?number=+380632154288">
          <Viber className="viber-social" />
        </Link>
      </Stack>
    </Box>
  );
};

export default Social;
