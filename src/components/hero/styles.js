import { styled } from "@mui/material";
import Typography from "@mui/material/Typography";

export const Wrapper = styled("section")(({ theme }) => ({
  textAlign: "center",
  paddingTop: "4rem",
  [theme.breakpoints.up("sm")]: {
    paddingTop: "5rem",
  },
}));
export const TextWrapper = styled("div")(({ theme }) => ({
  width: "max-content",
  margin: "0 auto",
  background: `linear-gradient(180deg, #fff, #181818)`,
  webkitBackgroundClip: "text",
  webkitTextFillColor: "transparent",
  backgroundClip: "text",
  textFillColor: "transparent",
  marginBottom: "1rem",
}));
export const Maintext = styled(Typography)(({ theme }) => ({
  // letterSpacing: ".2rem",
  textWrap: "wrap",
  [theme.breakpoints.up("sm")]: {
    letterSpacing: ".6rem",
  },
}));
export const SuperText = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  color: "#767676 !important",
}));
export const Img = styled("img")(({ theme }) => ({
  width: "80%",
  [theme.breakpoints.up("sm")]: {
    width: "360px",
  },
}));
export const Network = styled("div")(({ theme }) => ({
  listStyle: "none",
  display: "flex",
  justifyContent: "space-evenly",
  flexWrap: "wrap",
  "& li": {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
  },
  paddingTop: "2rem",

  [theme.breakpoints.up("sm")]: {
    paddingTop: "1rem",
  },
}));
