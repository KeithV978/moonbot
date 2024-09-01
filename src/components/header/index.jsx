import { Img, Ul, Wrapper } from "./styles";
import { Button } from "../button";
import logo from "../../assets/images/logo/logo.png";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Telegram from "@mui/icons-material/Telegram";
import X from "@mui/icons-material/X";
import BookRounded from "@mui/icons-material/MenuBookOutlined";
import { Sling as Hamburger } from "hamburger-react";

export const Header = () => {
  return (
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
          <Telegram color="inherit" />
        </li>
        <li>
          <X color="inherit" />
        </li>
        <li>
          <Button bgColor="#ccc" color="#1c1c1c" border="none">
            Get Started
          </Button>
        </li>
      </Ul>
      <Box sx={{ display: { sm: "none", xs: "block" } }}>
        <Hamburger />
      </Box>
    </Wrapper>
  );
};
