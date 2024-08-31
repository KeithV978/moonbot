import { styled } from "@mui/material";
import Typography from "@mui/material/Typography";

export const Wrapper = styled("section")(({ theme }) => ({
  textAlign: "center",
  paddingTop: "5rem",
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
  letterSpacing: ".2rem",
}));
export const SuperText = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
}));
export const Img = styled("img")(({ theme }) => ({
  width: "70%",
  [theme.breakpoints.up("sm")]: {
    width: "360px",
  },
}));
export const Network = styled("ul")(({ theme }) => ({
  padding: "1rem",
  listStyle: "none",
  display: "flex",
  justifyContent: "space-evenly",
  "& li": {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
  },
}));
