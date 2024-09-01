import React from "react";
import {
  Img,
  Maintext,
  Network,
  SuperText,
  TextWrapper,
  Wrapper,
} from "./styles";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import MuiBtn from "@mui/material/Button";
import { Button } from "../button";
import tron_hand from "../../assets/images/hero/tron_hand.png";
// import Container from "@mui/material/Container";
import {
  // NetworkTron,
  TokenSUN,
  TokenUSDC,
  TokenUSDD,
  TokenUSDT,
} from "@web3icons/react";
import Telegram from "@mui/icons-material/Telegram";

export const Hero = () => {
  return (
    <Wrapper id="hero">
      <TextWrapper>
        <SuperText>The most efficient</SuperText>
        <Maintext variant="h2">Trading bot on TRON</Maintext>
      </TextWrapper>
      <Typography variant="body2" letterSpacing=".1rem" color="#767676">
        Buy/Sell/Snipe/Scan any TRC token directly from Telegram!
      </Typography>

      <Stack
        sx={{
          gap: 2,
          marginTop: { sm: "2rem", xs: "1rem" },
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Button bgColor="primary.main" color="#ccc" border="none">
          Launch <Telegram color="inherit" />
        </Button>
        <MuiBtn
          variant="outlined"
          color="primary"
          sx={{
            borderRadius: "20px",
            paddingLeft: "2rem",
            paddingRight: "2rem",
          }}
        >
          Tutorial
        </MuiBtn>
      </Stack>

      <Box
        sx={{
          marginTop: "2rem",
          position: "relative",
          overflow: "hidden",
          // border: "1px solid red",
          "&::after": {
            content: "''",
            position: "absolute",
            left: "50%",
            right: "50%",
            transform: "translate(-50%, -50%)",
            bottom: "-15vh",
            width: "25%",
            height: "20vh",
            backgroundColor: "primary.main",
            filter: "blur(70px)",
            borderRadius: "50%",
            zIndex: -1,
          },
        }}
      >
        <Img src={tron_hand} alt="screenshot" />
      </Box>

      <Box
        sx={{
          padding: { sm: "5rem 2rem 2rem", xs: "3rem 0" },
          maxWidth: "700px",
          margin: "0 auto",
        }}
      >
        <Typography
          variant="body2"
          textTransform="uppercase"
          color="#767676"
          letterSpacing="4px"
        >
          Sell tokens at lightening speed{" "}
        </Typography>
        <Network>
          <li>
            <TokenUSDT /> USDT
          </li>
          <li>
            <TokenUSDD /> USDD
          </li>
          {/* <li>
            <NetworkTron />
          </li> */}
          <li>
            <TokenSUN />
            SUN
          </li>
          <li>
            <TokenUSDC /> USDC
          </li>
        </Network>
      </Box>
    </Wrapper>
  );
};
