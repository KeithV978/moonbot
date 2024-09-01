import { styled } from "@mui/material";

export const Wrapper = styled("header")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  width: "100%",
  alignItems: "center",
  marginBottom: "2rem",
  padding: "1rem 0",
  position: "sticky",
  top: "0px",
  backgroundColor: "#01020e",
  zIndex: 1000,
}));
export const Img = styled("img")(({ theme }) => ({
  width: "30px",
  marginRight: "5px",
  [theme.breakpoints.up("sm")]: {
    width: "50px",
  },
}));
export const Ul = styled("div")(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    minWidth: "220px",
    listStyle: "none",
    // gap: 10,
    "& li": {
      color: "#fff",
    },
  },
}));
