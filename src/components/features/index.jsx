import React from "react";
import { Contents, FeaturesList, Wrapper } from "./styles";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import ListItemIcon from "@mui/material/ListItemIcon";
import Check from "@mui/icons-material/DoneAllRounded";
import { Button } from "../button";

export const Features = () => {
  return (
    <Wrapper>
      <Contents>
        <Typography variant="h4">Features & Offerings</Typography>
        <Typography variant="body1">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Typography>

        <FeaturesList>
          {["Easy setup", "Buy & sell instantly", "Secure and safe"].map(
            (item, index) => {
              return (
                <ListItem key={index}>
                  <ListItemIcon sx={{ minWidth: "35px" }}>
                    <Check sx={{ color: "#ccc" }} />
                  </ListItemIcon>
                  <Typography variant="body2">{item}</Typography>
                </ListItem>
              );
            }
          )}
          <div style={{ width: "fit-content", marginLeft: "1rem" }}>
            <Button bgColor="tertiary.main" color="#1c1c1c" border="none">
              Begin Here
            </Button>
          </div>
        </FeaturesList>
      </Contents>
    </Wrapper>
  );
};
