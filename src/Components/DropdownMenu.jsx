import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import List from "@mui/material/List";
import Stack from "@mui/material/Stack";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { styled } from "@mui/material/styles";

const DropDownButton = styled(Button)(() => ({
  backgroundColor: "black",
  width: "100%",
  height: 60,
  borderRadius: 0,
  "&:hover": { backgroundColor: "#444" },
}));
const DropdownMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box width={"100%"}>
      <DropDownButton
        variant="contained"
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        My contacts
      </DropDownButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Stack
          divider={<Divider orientation="horizontal" flexItem />}
          direction="column"
          justifyContent="space-between"
          alignItems="flex-start"
          spacing={1}
          ml={3}
          mr={3}
        >
          <Box>
            <Typography sx={{ color: "#00" }} variant="h4" component="h3">
              Contacts:
            </Typography>
            <List>
              <ListItem>
                <Box>
                  <Box>
                    <Typography sx={{ color: "#000" }} variant="h6" component="h6">
                      Telephone:
                    </Typography>
                  </Box>
                  <Box>
                    <Typography fontSize={14} variant="body2" gutterBottom>
                      <Link color="#000" href="tel:+380632154288">
                        +38-063-215-42-88
                      </Link>
                    </Typography>
                  </Box>
                </Box>
              </ListItem>
              <ListItem>
                <Box>
                  <Typography sx={{ color: "#000" }} variant="h6" component="h6">
                    e-mail:
                  </Typography>
                  <Typography fontSize={14} variant="body2" gutterBottom>
                    <Link color="#000" href="mailto:yevhen.alimov@gmail.com">
                      yevhen.alimov@gmail.com
                    </Link>
                  </Typography>
                </Box>
              </ListItem>
            </List>
          </Box>
          <Box>
            <Typography sx={{ color: "#00" }} variant="h4" component="h3">
              Social:
            </Typography>
            <List>
              <ListItem>
                <Link color={"inherit"} target="_blank" href="https://github.com/EugeneAlimov">
                  GitHub
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  color={"inherit"}
                  target="_blank"
                  href="https://www.linkedin.com/in/yevhen-alimov/"
                >
                  LinkedIn
                </Link>
              </ListItem>
              <ListItem>
                <Link color={"inherit"} target="_blank" href="https://t.me/eugene1131">
                  Telegram
                </Link>
              </ListItem>
              <ListItem>
                <Link color={"inherit"} target="_blank" href="https://wa.me/380632154288">
                  Whatsapp
                </Link>
              </ListItem>
              <ListItem>
                <Link color={"inherit"} target="_blank" href="viber://chat?number=%2B380632154288">
                  Viber
                </Link>
              </ListItem>
            </List>
          </Box>
        </Stack>
      </Menu>
    </Box>
  );
};
export default DropdownMenu;
