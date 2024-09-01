import { styled } from "@mui/material";

export const Wrapper = styled("section")(({ theme }) => ({
  backgroundColor: `${[theme.palette.primary.main]}`,
  color: "#1c1c1c",
  padding: "1rem",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "1rem",
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
  },
}));
