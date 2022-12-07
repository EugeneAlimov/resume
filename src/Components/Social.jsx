import { Box } from "@mui/material";
import React from "react";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import GitHub from "@mui/icons-material/GitHub";
import Telegram from "@mui/icons-material/Telegram";
import WhatsApp from "@mui/icons-material/WhatsApp";
import Viber from "../Viber";

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
          <GitHub sx={{ color: "#000", textShadow: 0, fontSize: 90 }} />
        </Link>
        <Link href="https://t.me/eugene1131">
          <Telegram sx={{ color: "#1296c9", fontSize: 90 }} />
        </Link>
        <Link href="https://wa.me/380632154288">
          <WhatsApp sx={{ color: "#30b545", fontSize: 90 }} />
        </Link>
        <Link href="viber://chat?number=+380632154288">
          <Viber className="Viber-social" />
        </Link>
      </Stack>
    </Box>
  );
};

export default Social;
