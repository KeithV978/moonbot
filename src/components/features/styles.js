import { styled } from "@mui/material";
import bgImage from "../../assets/images/features/bgImage.jpg";

export const Wrapper = styled("section")(({ theme }) => ({
  margin: "2rem 1rem",
  textAlign: "center",
  padding: "2rem 1rem",
  backgroundImage: `url('${bgImage}')`,
  boxShadow: "inset 0 0 0 1000px rgba(0,0,0,.68)",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "bottom",
  borderRadius: "25px",
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  "&:hover": {
    boxShadow: "inset 0 0 0 1000px rgba(0,0,0,.38)",
  },
  [theme.breakpoints.up("sm")]: {
    padding: "4rem 1rem",
    margin: "5rem 1rem",
    backgroundSize: "100%",
    alignItems: "center",
    borderRadius: "50px",
    backgroundPosition: "center",
  },
}));
export const FeaturesList = styled("div")(({ theme }) => ({
  backgroundColor: "#00000070",
  color: "#fff",
  borderRadius: "12px",
  padding: "1rem",
  marginTop: "1rem",
  [theme.breakpoints.up("sm")]: {
    borderRadius: "20px",
  },
}));
export const Contents = styled("div")(({ theme }) => ({
  maxWidth: "400px",
  textAlign: "left",
  [theme.breakpoints.up("sm")]: {
    // textAlign: "center",
    margin: "0 auto",
  },
}));
