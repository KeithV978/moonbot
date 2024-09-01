import React from "react";
import { ConnectButtonWrapper, Title, Wrapper } from "./styles";
import { Button } from "../button";
import { WalletWalletConnect } from "@web3icons/react";
import LinkRounded from "@mui/icons-material/RocketLaunchRounded";
import Link from "@mui/material/Link";
import { BOT_LINK } from "../../utils/links";

export const ConnectWallet = () => {
  return (
    <Wrapper>
      <Title variant="h4">
        Launch Bot <WalletWalletConnect width="50px" height="50px" />{" "}
      </Title>
      <ConnectButtonWrapper>
        <Link href={BOT_LINK}>
          <Button bgColor="#ccc" color="#1c1c1c" border="none">
            Launch <LinkRounded />
          </Button>
        </Link>
      </ConnectButtonWrapper>
    </Wrapper>
  );
};
