import React from "react";
import { ConnectButtonWrapper, Title, Wrapper } from "./styles";
import { Button } from "../button";
import { WalletWalletConnect } from "@web3icons/react";
import LinkRounded from "@mui/icons-material/LinkRounded";

export const ConnectWallet = () => {
  return (
    <Wrapper>
      <Title variant="h4">
        Connect Your Wallet <WalletWalletConnect width="50px" height="50px" />{" "}
      </Title>
      <ConnectButtonWrapper>
        <Button bgColor="#ccc" color="#1c1c1c" border="none">
          Connect <LinkRounded />
        </Button>
      </ConnectButtonWrapper>
    </Wrapper>
  );
};
