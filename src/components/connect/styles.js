import { styled } from "@mui/material";
import bgImage from "../../assets/images/features/bgImage2.jpg";
import Typography from "@mui/material/Typography";

export const Wrapper = styled("section")(({ theme }) => ({
  margin: "5rem 1rem",
  textAlign: "center",
  padding: "4rem 2rem",
  backgroundImage: `url('${bgImage}')`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  borderRadius: "25px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  //   height: "50vh",
  boxShadow: "inset 0 0 0 1000px rgba(0,0,0,.2)",

  [theme.breakpoints.up("sm")]: {
    backgroundSize: "100%",
    borderRadius: "50px",
  },
}));
export const Title = styled(Typography)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));
export const ConnectButtonWrapper = styled("div")(({ theme }) => ({
  backgroundColor: "#00000070",
  color: "#fff",
  borderRadius: "12px",
  padding: "1rem",
  marginTop: "1rem",
  //   minWidth: "3px",
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    borderRadius: "20px",
    maxWidth: "370px",
  },
}));
