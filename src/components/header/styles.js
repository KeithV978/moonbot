import { styled } from "@mui/material";

export const Wrapper = styled("header")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  width: "100%",
  alignItems: "center",
  marginBottom: "2rem",
  padding: "1rem 0",
}));
export const Img = styled("img")(({ theme }) => ({
  width: "25px",
  marginRight: "5px",
  [theme.breakpoints.up("sm")]: {
    width: "50px",
  },
}));
export const Ul = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  // gap: 10,
  alignItems: "center",
  minWidth: "220px",
  justifyContent: "space-between",
  listStyle: "none",
  "& li": {
    color: "#fff",
  },
}));
