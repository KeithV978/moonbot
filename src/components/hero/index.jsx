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
// import Box from "@mui/material/Box";
import { Button } from "../button";
import tron_hand from "../../assets/images/hero/tron_hand.png";
// import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import {
  NetworkTron,
  TokenSUN,
  TokenUSDC,
  TokenUSDD,
  TokenUSDT,
} from "@web3icons/react";

export const Hero = () => {
  return (
    <Wrapper>
      <TextWrapper>
        <SuperText>The Most Efficient</SuperText>
        <Maintext variant="h2">Trading bot on TRON</Maintext>
      </TextWrapper>
      <Typography variant="body1" letterSpacing=".1rem" color="#767676">
        <i>Buy/Sell/Snipe/Scan any TRC token directly from Telegram!</i>
      </Typography>

      <Stack
        sx={{
          gap: 2,
          marginTop: "2rem",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Button bgColor="#ccc" color="#1c1c1c" border="none">
          Launch
        </Button>
        <Button bgColor="transparent" color="#ccc" border="1px solid #ccc">
          Tutorial
        </Button>
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
            bottom: "-18vh",
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

      <div style={{ padding: "5rem 2rem 2rem" }}>
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
          <li>
            <NetworkTron />
          </li>
          <li>
            <TokenSUN />
            SUN
          </li>
          <li>
            <TokenUSDC /> USDC
          </li>
        </Network>
      </div>
    </Wrapper>
  );
};
