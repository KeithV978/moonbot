import React from "react";
import { Wrapper } from "./styles";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Telegram from "@mui/icons-material/Telegram";
import X from "@mui/icons-material/X";
import { NetworkTron } from "@web3icons/react";
import Instagram from "@mui/icons-material/Instagram";

export const Footer = () => {
  return (
    <Wrapper>
      <Typography
        variant="body2"
        color="initial"
        fontWeight={700}
        component="a"
        href="https://moonbot.com"
      >
        Moonbot.com
      </Typography>
      <Stack direction="row" gap={2}>
        <IconButton sx={{ backgroundColor: "#00000070" }}>
          <Telegram />
        </IconButton>
        <IconButton sx={{ backgroundColor: "#00000070" }}>
          <X />
        </IconButton>
        <IconButton sx={{ backgroundColor: "#00000070" }}>
          <Instagram />
        </IconButton>
      </Stack>
      <Box>
        <Typography variant="body1">
          Powered By <NetworkTron /> TRON Network
        </Typography>
      </Box>
      {/* <a href="https://www.freepik.com/free-vector/gradient-abstract-background_7448652.htm#from_view=detail_alsolike">
        Image by freepik
      </a> */}
    </Wrapper>
  );
};
