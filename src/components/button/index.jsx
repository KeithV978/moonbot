import React from "react";
import MuiButton from "@mui/material/Button";

export const Button = ({ border, bgColor, color, children, display }) => {
  return (
    <MuiButton
      sx={{
        marginTop: "1rem",
        marginBottom: "1rem",
        backgroundColor: bgColor,
        color: color,
        border: border,
        borderRadius: "20px",
        textTransform: "capitalize",
        maxWidth: "150px",
        paddingLeft: "2rem",
        paddingRight: "2rem",
        display: display,
        fontWeight: 600,
      }}
    >
      {children}
    </MuiButton>
  );
};
