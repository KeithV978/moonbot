import * as React from "react";
import { Img, Ul, Wrapper } from "./styles";
import { Button } from "../button";
import logo from "../../assets/images/logo/logo.png";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Telegram from "@mui/icons-material/Telegram";
import X from "@mui/icons-material/X";
import BookRounded from "@mui/icons-material/MenuBookOutlined";
import { Spiral as Hamburger } from "hamburger-react";
import { MobileNav } from "./mobileMenu";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children ?? <div />}
    </Slide>
  );
}

export const Header = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const toggleDrawer = (event) => {
    setMenuOpen(event);
  };
  return (
    <React.Fragment>
      <HideOnScroll>
        <Wrapper>
          <Stack direction="row" alignItems="center">
            <Img src={logo} alt="logo" />
            <Typography variant="h6" fontWeight={700}>
              MoonBot
            </Typography>
          </Stack>
          <Button
            bgColor="transparent"
            color="#ccc"
            border="none"
            display={{ sm: "flex", xs: "none" }}
          >
            <BookRounded sx={{ marginRight: "5px" }} /> Documentation
          </Button>
          <Ul>
            <li>
              <IconButton>
                <Telegram sx={{ color: "#ccc" }} />
              </IconButton>
            </li>
            <li>
              <IconButton>
                <X sx={{ color: "#ccc" }} />
              </IconButton>
            </li>
            <li>
              <Button bgColor="#ccc" color="#1c1c1c" border="none">
                Get Started
              </Button>
            </li>
          </Ul>
          <Box sx={{ display: { sm: "none", xs: "block" } }}>
            <Hamburger
              easing="ease-in"
              rounded
              label="Mobile menu bar"
              direction="right"
              toggled={menuOpen}
              toggle={setMenuOpen}
            />
          </Box>
        </Wrapper>
      </HideOnScroll>
      <MobileNav toggleDrawer={toggleDrawer} menuOpen={menuOpen} />
    </React.Fragment>
  );
};
